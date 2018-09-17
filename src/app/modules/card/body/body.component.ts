import { Component, Input, OnChanges } from "@angular/core";
import { Animations } from "../../animations/animations";

@Component({
  selector: "app-card-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
  animations: Animations.animations
})
export class CardBodyComponent {
  @Input() isExpanded: string;
  @Input() data;
  @Input() id;

  ngOnChanges() {
    if(this.isExpanded === 'true') {
      document.getElementById('card_'+this.id).focus();
    }
  }
}