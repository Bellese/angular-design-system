// Angular
import { Component, OnInit, Input } from '@angular/core';

// Models
import { PopoverModel, PopoverItemModel } from './popover.model';

// Misdc
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  @Input() popoverModel: PopoverModel;

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  isOpened() {
    this.isOpen = true;
  }

  isClosed() {
    this.isOpen = false;
  }

  handleClick(item: PopoverItemModel) {
    if (item.url) {
      window.location.href = item.url;
    } else if (item.onClick) {
      item.onClick(item);
    } else {
      console.warn('The click handler for this item was not configured correctly.');
    }
  }

  tabLeave(e, index, item) {
    if (e.key === "Tab") {
      if (index === this.popoverModel.items.length - 1) {
        document.getElementById(this.popoverModel.id).focus();
      }
    }
  }

}
