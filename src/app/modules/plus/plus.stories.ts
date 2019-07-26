import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppPlusComponent } from './plus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';

storiesOf('Components|Plus', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppPlusComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
            imports: [BrowserAnimationsModule],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['PlusModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'expand',
                    type: 'boolean',
                    value: 'Set this to true to change the plus to a minus',
                },
                {
                    name: 'clicked',
                    type: 'boolean',
                    value: 'Set this to true to change the plus to a minus',
                },
            ],
        }
    }))
    .add('Plus', () => ({
        template: `
            <div class='on ds-u-fill--background-inverse ds-u-padding--2'>
                <app-plus
                    [expand] = false
                    [clicked] = false >
                </app-plus>
            </div>
        `,
    })).add('Minus', () => ({
        template: `
            <div class='on ds-u-fill--background-inverse ds-u-padding--2'>
                <app-plus
                    [expand] = true
                    [clicked] = true >
                </app-plus>
            </div>
        `,
    }));