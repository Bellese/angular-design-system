import { Component, Input,  AfterContentInit, ViewChildren, DoCheck, QueryList } from '@angular/core';
import { AppTabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class AppTabsComponent implements AfterContentInit, DoCheck {

    public tabTitle: string = "";
    public tabDesc: string = "";
    public generalDesc: string = "Manually upload, or drag and drop files into the table to be processed.";

    @Input() tabsData: any[];

    @ViewChildren(AppTabComponent) tabs: QueryList<AppTabComponent>;

    ngAfterContentInit() {
        this.grabDomTabs();
    }

    ngDoCheck() {
        this.grabDomTabs();
    }

    grabDomTabs() {
        if (this.tabs) {
            // console.log(this.tabs);
            this.tabs.toArray().forEach(tab => {
                tab.onClick.subscribe(() => {
                    this.tabStateChange(tab);
                });
            });
        } else {
            return;
        }
    }

    tabStateChange(tab: AppTabComponent) {
        this.tabs.toArray().forEach ( t => {
            if (t !== tab) {
                t.selected = false;
                this.tabTitle = tab.title;
                this.tabDesc = tab.description;
            }
        });
    }
}

