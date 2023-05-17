import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoiceModule } from '../choice/choice.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppCardClusterComponent } from './card-cluster.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
    declarations: [AppCardClusterComponent],
    imports: [
        CommonModule,
        ChoiceModule,
        FontAwesomeModule,
        TooltipModule
    ],
    exports: [AppCardClusterComponent]
})
export class CardClusterModule {}
