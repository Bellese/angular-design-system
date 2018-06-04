import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-accordion-header",
  templateUrl: "./accordion-header.component.html",
  styleUrls: ["./accordion-header.component.css"]
})
export class AccordionHeaderComponent {
  @Input() item;
  @Output() toggleAccordion: EventEmitter<string> = new EventEmitter();
  //isExpanded is a string in order to support Angular Animation limitations
  isExpanded: string = "false";
  clicked = false;

  onClick(e) {
    this.toggleAccordion.emit(this.isExpanded);
    this.clicked = true;
  }
}
