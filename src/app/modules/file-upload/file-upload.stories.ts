import { storiesOf, moduleMetadata } from '@storybook/angular';

import { FileUploadComponent } from './file-upload.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

import { DirectiveModule } from '../../directives/directive.module';


storiesOf('Components|File Upload', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                DirectiveModule
            ],
            declarations: [FileUploadComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
                    modules: ['FileUploadModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'label',
                    type: 'string',
                    // TODO: document structure of the objects
                    value: 'Use this to override the words that display in the component.',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Use this to override the words read by the screen reader',
                },
                {
                    name: 'onFileUpload',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the a file is uploaded. It takes one argument, which is a javascript file object.',
                },
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-file-upload
                (onFileUpload) = 'handleEvent($event)'>
            </app-file-upload>
        `,
        props: defaultProps
    }));
