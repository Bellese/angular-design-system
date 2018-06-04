import { AccordionComponent } from "./../accordion/accordion.component";
import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  ContentChild,
  OnDestroy
} from "@angular/core";
import { AccordionContentComponent } from "../accordion-content/accordion-content.component";
import { Observable } from 'rxjs/Observable'
@Component({
  selector: "app-accordion-group",
  templateUrl: "./accordion-group.component.html",
  styleUrls: ["./accordion-group.component.css"]
})

export class AccordionGroupComponent {
  @Input() items;
  @ContentChildren(AccordionComponent, {descendants: true})
  accordions: QueryList<AccordionComponent>;
  private _accordions = []
  private subscriptions = []

  ngAfterContentInit() {
     this.accordions.toArray().forEach(acc => {
       this._accordions.push(acc.header)
    })
    this.removeSubscriptions()
    this.addSubscriptions()
  }
  
  addSubscriptions(){
    this.accordions.forEach(acc => {
      let subscription = acc.header.toggleAccordion.subscribe(a => {
        this.toggle(acc.header, acc.content)
      })
      this.subscriptions.push(subscription)
    })
  }
  
  removeSubscriptions(){
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }

  toggle(h, c){
    if(h.isExpanded === 'false'){
      this.accordions.toArray().forEach(acc => {
        acc.header.isExpanded = 'false'
        acc.content.isExpanded = 'false'
      })
    }
    if(h.isExpanded === 'true'){
      h.isExpanded = "false";
      c.isExpanded = "false";
    } else {
      h.isExpanded = "true"
      c.isExpanded = "true";
    }
  }
  
  ngOnDestroy(){
    this.removeSubscriptions()
  }
}