import { Component, Input, Output, EventEmitter, AfterContentInit, ContentChildren, QueryList, DoCheck } from "@angular/core";
import { AppPanel }from '../panel/panel.component'

@Component({
    selector: "app-accordion",
    templateUrl: "./accordion.component.html",
    styleUrls: ["./accordion.component.css"]
})

export class AppAccordion implements AfterContentInit {
    
    @ContentChildren(AppPanel) panels: QueryList<AppPanel>;
    
    ngAfterContentInit() {   
        this.grabDomPanels();
    }
    
    ngDoCheck() {
        this.grabDomPanels();
    }
    
    grabDomPanels() {
        if(this.panels) {
            this.panels.toArray().forEach(panel => {
                panel.panelClick.subscribe(() => {
                    this.panelStateChange(panel);
                });
            });   
        } else {
            return;
        }
    }
    
    panelStateChange(panel: AppPanel) {
        this.panels.toArray().forEach ( p => {
            if(p !== panel) {
                p.expand = false;
            }
        });
    }
}
