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
            <h1>Step 3 - Setup</h1>
            <p>
                Once you have downloaded both packages, copy the design system's "fonts", "images", and "dist" directories
                ("dist" is located inside of the "design-system-core" "design-system-layout" directories) inside of "@cms/gov"
                in your application's "node_modules".
            </p>
            <p>Paste these directories into your Angular application's "assets" folder.</p>
            <p>File structure:</p>
            <pre>
                ├── assets/
                    ├── css/
                        ├── images/
                            └── fonts/
                            └── dist/
                        ├── layout/
                            └── dist/
            </pre>
            <p>Reference the styles in ".angular-cli.json"</p>
            <pre>
                "styles": [
                    "styles.css",
                    "assets/css/dist/index.css",
                    "assets/layout/dist/index.css"
                ],
            </pre>
        </main>
    `,
    styles: [],
})
export default class InstallationComponent {
    @Output()
    showApp = new EventEmitter<any>();
}
