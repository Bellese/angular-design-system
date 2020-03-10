// Storybook
import { storiesOf , moduleMetadata} from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';

// Modules
import { ModalShellModule } from './modal-shell.module';

storiesOf('Components|Modal Shell', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                ModalShellModule,
            ]
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
                    modules: ['ModalShellModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'modalTitle',
                    type: 'string',
                    value: 'title of modal',
                },
                {
                    name: 'modalClass',
                    type: 'string',
                    value: 'Add a class to the modal',
                },
                {
                    name: 'modalCount',
                    type: 'number',
                    value: 'allows for multiple modals',
                },
                {
                    name: 'jawsBody',
                    type: 'boolean',
                    value: 'If set, a special ID is added to the modal body',
                },
                {
                    name: 'modalData',
                    type: 'any',
                    value: 'The content that will display in the modal',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
                {
                    name: 'closeModal',
                    type: 'function',
                    value: 'A function that runs after the modal is closed',
                },
                {
                    name: 'headerTemplate',
                    type: 'TemplateRef',
                    value: 'A reference to an ng-template that controls the look-and-feel of the modal\'s header',
                },
                {
                    name: 'bodyTemplate',
                    type: 'TemplateRef',
                    value: 'A reference to an ng-template that controls the look-and-feel of the modal\'s body',
                },
                {
                    name: 'footerTemplate',
                    type: 'TemplateRef',
                    value: 'A reference to an ng-template that controls the look-and-feel of the modal\'s footer',
                },
            ],
            notes: [
                'Modal Shell is the easiest way to create your own unique modal. You’re going to need a few things to set this up. First make sure you followed the step above explaining how to modify app-root. Then we can start. You’re going to need to create a new component. Name it whatever you want. In the html you are going to start with <app-modal-shell> with the above inputs.',
                'The headerTemplate, bodyTemplate and footerTemplate templates can be referenced through Angular\'s template syntax.',
                'ex: &lt;ng-template #headerTemplate let-modalHeader="modalHeader"&gt; Furthermore there is an option to add any content on the right side of the box. You will see that in the example.',
                'In the TS file be sure to add inputs for modalTitle, modalData, and modalCount. And an output for closeModal.',
                'Everything is handled automatically once you provide these input and outputs. Matter of fact the only one you are directly interacting with is modalData. And this is the data you need to make you modal body interactive. You should have a solid understand of how this works already.',

                'Once you bundle this up you are good to go. Make sure you add this component as an entry component inside your app.module.ts.',
                'Now you have created your own reusable modal.',

                'Now when you are ready to add this to a page, just go to your new page controller and import the modal component you just built and pass that component as a variable to app-modal under modalComponent. Be sure to pass in modalTitle, ID and modalData. First focus is optional but it is neseccary if you want to focus on something in the modal other than the cancel button when the modal first opens. By 508 standards the first input should be focused on. ',
                'From here you are all set.',

                'The modal is built the way it is because we have to come up with a way to destroy the modal after it has been enabled, if we dont we run into memory leak issues. This will cause the modal to take on values from a previous implementation. This will become a bigger issue if/when we start adding forms to modals.',

            ]
        },
    }));