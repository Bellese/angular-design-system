// Angular
import { Component, OnInit, Input } from '@angular/core';

// Models
import { PopoverModel } from './popover.model';

// Misdc
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopoverComponent implements OnInit {

  @Input() popoverModel: PopoverModel;

  faChevronDown = faChevronDown
  faChevronUp = faChevronUp
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

}
