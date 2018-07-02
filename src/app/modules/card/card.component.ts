import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent {
  @Input() index;
  @Input() data;
  isExpanded: any = {};
}
