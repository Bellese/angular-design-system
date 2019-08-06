import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class AppTabsComponent implements OnInit {
  
  @Input parentAriaLabel: string;
  
  @Input childLabel: string;
  @Input childAriaLabel: string;
  @Input routerPrefix: string = "/";
  @Input childRouterLink: string = routerPrefix + childLabel.toLowerCase();
  @Input childAttrAriaPrefix: string = "rla";
  @Input childAttrAriaSuffix: string = ".isActive";
  @Input childAriaSelected: string = childAttrAriaPrefix + childLabel + childAttrAriaSuffix;
  
}