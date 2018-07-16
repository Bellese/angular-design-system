import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class CardFooterComponent {
  @Input() isExpanded;
  @Input() data;
}
