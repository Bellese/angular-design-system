import { Component, Input, OnInit } from '@angular/core';

// The tabbing/spacing below is odd because of the pre tag that wraps around the @NgModule definition
@Component({
    selector: 'app-storybook-ngmodule-component',
    template: `
        <p *ngIf="ngModuleDefinitionKeys().length === 0; else imports">This component does not require any imports</p>
        <ng-template #imports>
            <p>Make the following changes to your NgModule definition:</p>
            <pre>
@NgModule(&#123;
    ...,
    <span *ngFor="let ngModuleSection of ngModuleDefinitionKeys(); let isLast = last">{{ ngModuleSection }}: [
        ...,
        <span *ngFor="let module of ngModuleDefinition[ngModuleSection]; let isLastInner = last">{{ module }},
    <span *ngIf="isLastInner">],</span>    </span><span *ngIf="!isLast">
    </span></span>
&#125;)</pre>
        </ng-template>
    `,
    styles: [],
})

export default class NgModuleComponent implements OnInit {
    @Input() imports;
    ngModuleDefinition: any = {};

    ngOnInit() {
        this.ngModuleDefinition = {};
        for (const importModule of this.imports) {
            const ngModuleSection = importModule.ngmodule;
            if (ngModuleSection) {
                if (this.ngModuleDefinition[ngModuleSection] === undefined) {
                    if (importModule.forRoot) {
                        importModule.modules = importModule.modules.map(module => module = `${module}.forRoot()`);
                    }
                    this.ngModuleDefinition[ngModuleSection] = importModule.modules;
                } else {
                    this.ngModuleDefinition[ngModuleSection] = this.ngModuleDefinition[ngModuleSection].concat(importModule.modules);
                }
            }
        }
    }

    ngModuleDefinitionKeys() {
        return Object.keys(this.ngModuleDefinition);
    }
}
