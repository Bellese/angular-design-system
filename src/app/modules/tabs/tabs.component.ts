import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  
  @Input parentAriaLabel: string;
  
  @Input childAriaLabel: string;
  @Input routerPrefix: string = "/";
  @Input childrouterLink: string;
  @Input childAttrAriaPrefix: string = "rla";
  @Input childAttrAriaSuffix: string = ".isActive";
  @Input childAriaSelected: string;
  
}
