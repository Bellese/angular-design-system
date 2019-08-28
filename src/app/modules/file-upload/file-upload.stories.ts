import { storiesOf, moduleMetadata } from '@storybook/angular';

import { FileUploadComponent } from './file-upload.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

import { DirectiveModule } from '../../directives/directive.module';
import { FileUploadModel } from './file-upload.model';

const fileUploadModel = new FileUploadModel({
    height: 300,
    className: 'ds-u-fill--primary-alt-lightest',
});

const props = {
    ...defaultProps,
    fileUploadModel,
};

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
                [notes]="notes"
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
                    name: 'fileUploadModel',
                    type: 'FileUploadModel',
                    // TODO: document structure of the objects
                    value: 'Use this to override the component\'s default settings.',
                },
                {
                    name: 'onFileUpload',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the a file is uploaded. It takes one argument, which is a javascript file object.',
                },
            ],
            notes: [
                'Expected format for \'fileUploadModel\':',
                `<pre>
fileUploadModel = new FileUploadModel({
    id: 'file_upload',
    dataAutoId: 'file_upload',
    label: 'Drag files here to upload',
    ariaLabel: 'Activate enter key to upload files',
    className: 'ds-u-fill--gray-lightest',
    height: 'auto'
});
                </pre>`
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
    }))
    .add('Overridden Parameters', () => ({
        template: `
            <app-file-upload
                [fileUploadModel] = "fileUploadModel"
                (onFileUpload) = 'handleEvent($event)'>
            </app-file-upload>
        `,
        props
    }));
