import { Component, AfterContentInit, ContentChildren, QueryList, DoCheck } from '@angular/core';
import { AppPanelComponent } from '../panel/panel.component';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})

export class AppAccordionComponent implements AfterContentInit, DoCheck {

    @ContentChildren(AppPanelComponent) panels: QueryList<AppPanelComponent>;

    ngAfterContentInit() {
        this.grabDomPanels();
    }

    ngDoCheck() {
        this.grabDomPanels();
    }

    grabDomPanels() {
        if (this.panels) {
            this.panels.toArray().forEach(panel => {
                panel.panelClick.subscribe(() => {
                    this.panelStateChange(panel);
                });
            });
        } else {
            return;
        }
    }

    panelStateChange(panel: AppPanelComponent) {
        this.panels.toArray().forEach ( p => {
            if (p !== panel) {
                p.expand = false;
            }
        });
    }
}
