import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() fill: boolean;
  @Input() rating: number;
  @Input() starAmount: number;
  @Input() index: number;
  @Input() height: string;
  @Input() width: string;
  @Input() dataAutoId: string;
  description;

  ngOnInit() {
    if (this.index === 0) {
      this.description = 'Star rating graphic ' + this.rating + ' out of ' + this.starAmount + ' stars';
    }
  }



}
