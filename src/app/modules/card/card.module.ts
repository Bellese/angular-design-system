import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardBodyComponent } from './body/body.component';
import { CardFooterComponent } from './footer/footer.component';
import { CardHeaderComponent } from './header/header.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent
  ],
  exports: [
    CardComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent
  ]
})
export class CardModule { }
