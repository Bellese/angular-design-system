import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTabsComponent } from './tabs.component';

@NgModule({
    declarations: [
        AppTabsComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AppTabsComponent,
    ]
})
export class TabsModule { }
