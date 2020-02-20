import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-storybook-parameter-component',
    template: `
        <p *ngIf="parameters === undefined || parameters.length == 0; else parameterList">This component does not accept any parameters</p>
        <ng-template #parameterList>
            <ul>
                <li *ngFor="let parameter of parameters">
                    <strong>{{ parameter.name }}</strong>&nbsp;<em>({{ parameter.type }})</em>:
                    <span [innerHTML]="parameter.value"></span>
                    <div *ngIf="parameter.properties">
                        <em>Properties:</em>
                        <ul>
                            <li *ngFor="let property of parameter.properties">
                                <strong>{{ property.name }}</strong>&nbsp;<em>({{ property.type }})</em>:
                                <span [innerHTML]="property.value"></span>
                                <div *ngIf="property.properties">
                                    <em>Properties:</em>
                                    <ul>
                                        <li *ngFor="let subproperty of property.properties">
                                            <strong>{{ subproperty.name }}</strong>&nbsp;<em>({{ subproperty.type }})</em>:
                                            <span [innerHTML]="subproperty.value"></span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </ng-template>
    `,
    styles: [],
})

export default class ParametersComponent {
    @Input() parameters;
}
