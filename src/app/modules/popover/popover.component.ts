// Angular
import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';

// Models
import { PopoverModel, PopoverItemModel } from './popover.model';

// Misdc
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { MdePopoverTrigger } from '@material-extended/mde';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PopoverComponent implements OnInit {
  @Input() popoverModel: PopoverModel;
  @ViewChild(MdePopoverTrigger) trigger: MdePopoverTrigger;

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  isOpen = false;
  hasChanged = false;

  constructor() {}

  ngOnInit() {}

  handlePopoverButtonClick() {
    this.isOpen = !this.isOpen;
    this.hasChanged = true;
    // Delay popover from opening so the browser knows to read the aria-live text first
    setTimeout(() => {
      this.trigger.togglePopover();
    }, 150);
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
}
