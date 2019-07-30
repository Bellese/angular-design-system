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
                    // Make a copy of the import modules list so that the imports component does not show forRoot()
                    let importModuleCopy = importModule.modules;
                    if (importModule.forRoot) {
                        importModuleCopy = importModule.modules.map(module => module = `${module}.forRoot()`);
                    }
                    this.ngModuleDefinition[ngModuleSection] = importModuleCopy;
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
