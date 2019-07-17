import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-storybook-parameter-component',
    template: `
        <ul>
            <li *ngFor="let parameter of parameters">
                <strong>{{ parameter.name }}</strong>&nbsp;<em>({{ parameter.type }})</em>: {{ parameter.value }}
            </li>
        </ul>
    `,
    styles: [],
})

export default class ParameterComponent {
    @Input() parameters;

    @Output()
    showApp = new EventEmitter<any>();
}
