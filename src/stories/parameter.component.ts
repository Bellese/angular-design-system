import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-storybook-parameter-component',
    template: `
        <strong>{{ parameter.name }}</strong>&nbsp;<em>({{ parameter.type }})</em>
        <div [innerHTML]="parameter.value"></div>
        <div *ngIf="parameter.default" [innerHTML]="'Default: ' + parameter.default"></div>
        <div *ngIf="parameter.properties">
            <em>Properties:</em>
            <ul>
                <li *ngFor="let property of parameter.properties">
                    <app-storybook-parameter-component [parameter]="property"></app-storybook-parameter-component>
                </li>
            </ul>
        </div>
    `,
    styles: [],
})

export default class ParameterComponent {
    @Input() parameter;
}
