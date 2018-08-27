import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"]
})
export class AccordionComponent {
  @Input() expand: boolean;
  @Input() index: number;

  @Output() toggleAccordion: EventEmitter<{}> = new EventEmitter();

  handleExpansion() {
    this.toggleAccordion.emit({
      expanded: !this.expand,
      index: this.index
    });
  }
}
