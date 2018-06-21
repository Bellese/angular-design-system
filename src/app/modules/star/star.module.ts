import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component'
import { StarRatingComponent } from './star-rating/star-rating.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    StarRatingComponent
  ],
  exports: [
    StarComponent,
    StarRatingComponent
  ]
})
export class StarModule { }
