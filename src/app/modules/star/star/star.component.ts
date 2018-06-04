import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent  {
  @Input() fill;
  @Input() rating;
  @Input() starAmount;
  @Input() index;
  description;

  ngOnInit(){
    this.index === 0 ? 
    this.description = 'Star rating graphic ' + this.rating + ' out of ' + this.starAmount + ' stars' :
    false; 
  }



}
