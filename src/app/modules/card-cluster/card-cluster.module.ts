import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoiceModule } from '../choice/choice.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppCardClusterComponent } from './card-cluster.component';

@NgModule({
    declarations: [AppCardClusterComponent],
    imports: [
        CommonModule,
        ChoiceModule,
        FontAwesomeModule
    ],
    exports: [AppCardClusterComponent]
})
export class CardClusterModule {}
