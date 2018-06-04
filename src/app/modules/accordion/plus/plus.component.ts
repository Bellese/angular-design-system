import { Component, Input} from "@angular/core";
import { Animations } from '../animations'

@Component({
  selector: "app-plus",
  templateUrl: "./plus.component.html",
  styleUrls: ["./plus.component.css"],
  animations: [
    Animations.animations
  ]
})
export class PlusComponent {
  @Input() isExpanded = "false";
  @Input() clicked;
}
