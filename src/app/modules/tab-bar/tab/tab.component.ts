import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class AppTabComponent implements OnInit {
  
  @Input parentAriaLabel: string;
  
  @Input childLabel: string;
  @Input childAriaLabel: string;
  @Input routerPrefix: string = "/";
  @Input childRouterLink: string = this.routerPrefix + this.childLabel.toLowerCase();
  @Input childAttrAriaPrefix: string = "rla";
  @Input childAttrAriaSuffix: string = ".isActive";
  @Input childAriaSelected: string = this.childAttrAriaPrefix + this.childLabel + this.childAttrAriaSuffix;
  
}
