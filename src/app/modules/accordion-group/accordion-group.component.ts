import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accordion-group",
  templateUrl: "./accordion-group.component.html",
  styleUrls: ["./accordion-group.component.css"]
})
export class AccordionGroupComponent {
  @Input() data;
  isExpanded = [];
  expand: boolean = false;

  ngOnInit() {
    this.data.forEach(() => {
      this.isExpanded.push(false);
    }); 
  }

  handleExpansion(e) {
    this.isExpanded.forEach((acc, i) => {
      if(acc && i != e.index) this.isExpanded[i] = false;
    })

    this.isExpanded[e.index] = e.expanded;

  }
}
