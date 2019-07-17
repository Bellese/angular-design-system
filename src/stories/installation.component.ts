import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-storybook-installation-component',
    template: `
        <main>
            <h1>Step 1 - Install the Bellese Angular Design System</h1>
            <p>Run the following command to add this libary to your angular project:</p>
            <pre>
                npm i @bellese/angular-design-system
            </pre>
            <h1>Step 2 - Install the <a href='https://design.cms.gov/' target='_blank'>CMS Design System</a></h1>
            <p>Run the following command to add the CMS design system library to your angular project:</p>
            <pre>
                npm i @cmsgov/design-system-core
                npm i @cmsgov/design-system-layout
            </pre>
            <h1>Step 3 - SCSS File</h1>
            <p>Add the following lines to your SCSS file</p>
            <pre>
                @import '@cmsgov/design-system-support/src/settings/index';
                $font-path:   '/assets/fonts';
                $image-path:  '/assets/images';
                @import '@cmsgov/design-system-core/src/index.scss';
                @import '@cmsgov/design-system-layout/src/index.scss';
            </pre>
            <h1>Step 4 - tsconfig.json</h1>
            <p>Add the following line to the compilerOptions section of your tsconfig.json file</p>
            <pre>
                "paths": &#123;
                    "@angular/*":[
                        "node_modules/@angular/*"
                    ]
                &#125;
            </pre>
        </main>
    `,
    styles: [],
})
export default class InstallationComponent {
    @Output()
    showApp = new EventEmitter<any>();
}
