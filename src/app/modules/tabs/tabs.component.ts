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
    // Setting to true should let screen reader properly read when a tab is selected
    @Input() tabsAsButtons?: boolean;
    @Output() onChange = new EventEmitter<any>();

    /*
     * ngOnInit is used to select a default tab when the component loads
     * NOTE: We offer the option to use <button> instead of <a> for tabs, as shown in Mozilla and
     *   w3schools examples, because tab content is not meant to be opened in
     *   a new browser window or tab.
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

    // Selects tab and passes along event to user-provided event handler, as assigned to onChange.
    passAction(e) {
        this.selectTab(e.srcElement.id);
        this.onChange.emit(e);
        return false;
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

    generateLink(tab: TabModel) {
        return tab.link ? tab.link : "javascript:void(0)";
    }

}

