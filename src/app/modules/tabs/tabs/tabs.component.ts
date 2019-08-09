import { Component, Input,  AfterContentInit, ViewChildren, DoCheck, QueryList } from '@angular/core';
import { AppTabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class AppTabsComponent implements AfterContentInit, DoCheck {

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
            }
        });
    }
}

