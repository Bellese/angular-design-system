import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() starAmount = 5;
  @Input() rating: number;
  @Input() height = '30px';
  @Input() width = '30px';
  total;
  Arr = Array;
}
