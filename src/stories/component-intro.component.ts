import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-storybook-component-intro-component',
    template: `
        <h1>Import</h1>
        <app-storybook-imports-component [imports]="imports"></app-storybook-imports-component>
        <h1>NgModule</h1>
        <app-storybook-ngmodule-component [imports]="imports"></app-storybook-ngmodule-component>
        <h1>Parameters</h1>
        <app-storybook-parameter-list-component [parameters]="parameters"></app-storybook-parameter-list-component>
        <div *ngIf="notes.length">
            <h1>Notes</h1>
            <p *ngFor="let note of notes" [innerHTML]="note"></p>
        </div>
    `,
    styles: [],
})

export default class ComponentIntroComponent {
    @Input() imports;
    @Input() parameters;
    @Input() notes = [];

}
