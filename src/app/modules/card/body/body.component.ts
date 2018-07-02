import { Component, Input } from "@angular/core";
import { Animations } from "../animations";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
  animations: Animations.animations
})
export class BodyComponent {
  @Input() isExpanded: string;
  @Input() data;
}
