import { Component, OnInit, Input } from '@angular/core';
import { Animations } from '../animations'

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css'],
  animations: [
    Animations.animations
  ]
})
export class AccordionContentComponent  {
  isExpanded: string = "false";

}
