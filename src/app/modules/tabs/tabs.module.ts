import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTabsComponent } from './tabs/tabs.component';
import { AppTabComponent } from './tab/tab.component';

@NgModule({
    declarations: [
        AppTabsComponent, 
        AppTabComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AppTabsComponent, 
        AppTabComponent
    ]
})
export class TabsModule { }
