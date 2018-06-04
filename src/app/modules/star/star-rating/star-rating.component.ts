import { Component, Input } from "@angular/core";

@Component({
  selector: "app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ["./star-rating.component.css"]
})
export class StarRatingComponent {
  @Input() starAmount;
  @Input() rating;
  total;
  Arr = Array;

  
}
