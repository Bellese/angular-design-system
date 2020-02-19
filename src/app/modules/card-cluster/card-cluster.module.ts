import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCardClusterComponent } from './card-cluster.component';
import { ChoiceModule } from '../choice/choice.module';

@NgModule({
    declarations: [AppCardClusterComponent],
    imports: [
        CommonModule,
        ChoiceModule
    ],
    exports: [AppCardClusterComponent]
})
export class CardClusterModule {}
