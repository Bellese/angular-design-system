import { Component, Input } from "@angular/core";
import { Animations } from "../animations";

@Component({
  selector: "app-accordion-body",
  templateUrl: "./accordion-body.component.html",
  styleUrls: ["./accordion-body.component.css"],
  animations: [Animations.animations]
})
export class AccordionBodyComponent {
  @Input() expand = false;
}
