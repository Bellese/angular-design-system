import { Component, Input, EventEmitter, Output, AfterContentInit, ViewChildren, DoCheck, QueryList, OnInit } from '@angular/core';
import { Animations } from '../animations/animations';

import { TabModel } from './tabs.model'

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    animations: [
        Animations.animations
    ]
})
export class AppTabsComponent implements OnInit {

    @Input() tabs: TabModel[];
    @Input() defaultSelectedId: string;
    @Input() tablistClassName: string;
    @Output() onChange = new EventEmitter<any>();

    /*
     * ngOnInit is used to select a default tab when the component loads
     */
    ngOnInit() {
        if (!this.tabs) {
            this.tabs = [];
        }

        // selecting a tab requires all tabs to have an ID
        // if a tab does not have an ID, assign an incremental value
        this.tabs.map((tab, index) => {
            if (!tab.id) {
                tab.id = `tab${index + 1}`;
            }
        })

        // Select the default tab, and fallback to the first tab if no valid id is passed into the component
        this.selectTab(this.defaultSelectedId);
    }

    passAction(e) {
        this.selectTab(e.srcElement.id);
        this.onChange.emit(e);
    }

    /*
     * Set the selected boolean field on a tab and unset the field on all other tabs
     * If the id does not match any tabs, just select the first tab in the list
     */
    selectTab(id) {

        // unselect all tabs
        this.tabs.map(tab => tab.selected = false);

        // If a valid id was not passed in, or the id was not found in the list, set id as the first tab's id
        if (!id || this.tabs.filter(tab => tab.id === id).length === 0) {
            if (this.tabs.length) {
                id = this.tabs[0].id;
            }
        }

        // select the tab that matches the id
        this.tabs
            .filter(tab => tab.id === id) // find all tabs that match the id parameter
            .map(tab => tab.selected = true); // set all found tabs to selected

    }

}

