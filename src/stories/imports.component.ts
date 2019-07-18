import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-storybook-imports-component',
    template: `
        <div *ngFor="let import of imports">
            <code>
                import &#123;
                <span *ngFor="let module of import.modules; let isLast=last">{{ module }}{{isLast ? '' : ', '}}</span>
                &#125; from '{{ import.file }}';
            </code>
        <div>
    `,
    styles: [],
})

export default class ImportsComponent {
    @Input() imports;
}
