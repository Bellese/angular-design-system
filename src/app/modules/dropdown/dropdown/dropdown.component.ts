import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent {
  @Input() options;
  @Input() labelName;
  @Input() width;
  @Input() id: number = 1;


}
