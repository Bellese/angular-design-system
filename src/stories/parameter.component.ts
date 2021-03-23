import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storybook-parameter-component',
  template: `
    <div [ngClass]="{ deprecated: parameter.isDeprecated }">
      <strong>{{ parameter.name }}</strong
      >&nbsp;<em>({{ parameter.type }})</em>
      <div [innerHTML]="parameter.value"></div>
      <div *ngIf="optionsList.length">
        <em>Options:</em>
        <ul>
          <li *ngFor="let option of optionsList">
            {{ option }}
            <span *ngIf="option === parameter.default"><em>(default)</em></span>
          </li>
        </ul>
      </div>
      <div *ngIf="parameter.default && !optionsList.length" [innerHTML]="'Default: ' + parameter.default"></div>
      <div *ngIf="parameter.properties">
        <em>Properties:</em>
        <ul>
          <li *ngFor="let property of parameter.properties">
            <app-storybook-parameter-component [parameter]="property"></app-storybook-parameter-component>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ['.deprecated { opacity: 50%; }'],
})
export default class ParameterComponent implements OnInit {
  @Input() parameter;

  optionsList = [];

  ngOnInit() {
    if (this.parameter.options) {
      for (const optionsListItem in this.parameter.options) {
        if (this.parameter.options.hasOwnProperty(optionsListItem)) {
          this.optionsList.push(`${this.parameter.type}.${optionsListItem}`);
        }
      }
    }
  }
}
