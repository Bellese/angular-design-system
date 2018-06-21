import {
  Component,
  Input,
  ContentChild,
  QueryList
} from "@angular/core";
import { AccordionContentComponent } from "../accordion-content/accordion-content.component";
import { AccordionHeaderComponent } from "../accordion-header/accordion-header.component";
import { Animations } from '../animations'


@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
  animations: [
    Animations.animations
  ]
})
export class AccordionComponent {
  @ContentChild(AccordionContentComponent) content: AccordionContentComponent;
  @ContentChild(AccordionHeaderComponent) header: AccordionHeaderComponent;

  @Input() item;
  isExpanded;

  handleAnimation(){
    if(this.content.isExpanded === 'true') this.isExpanded = "true"
    else this.isExpanded = 'false'
    return this.isExpanded
  }

}
