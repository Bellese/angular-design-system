import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AccordionGroupService {
  private isExpandedSource = new Subject<any[]>();
  isExpanded = this.isExpandedSource.asObservable();

  updateIsExpanded(value){
    this.isExpandedSource.next(value)
  }
}
