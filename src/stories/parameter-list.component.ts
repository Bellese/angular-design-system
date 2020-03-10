import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-storybook-parameter-list-component',
    template: `
        <p *ngIf="parameters === undefined || parameters.length == 0; else parameterList">This component does not accept any parameters</p>
        <ng-template #parameterList>
            <ul>
                <li *ngFor="let parameter of parameters">
                    <app-storybook-parameter-component [parameter]="parameter"></app-storybook-parameter-component>
                </li>
            </ul>
        </ng-template>
    `,
    styles: [],
})

export default class ParameterListComponent {
    @Input() parameters;
}
