import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class CardHeaderComponent {
  @Input() isExpanded;
  @Input() data;
}