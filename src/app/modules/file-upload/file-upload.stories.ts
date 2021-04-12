import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadModel } from './file-upload.model';
import { FileUploadModule } from './file-upload.module';

const fileUploadModel = new FileUploadModel({
  height: 300,
  className: 'ds-u-fill--primary-alt-lightest',
  classNameActive: 'ds-u-fill--primary-alt-light',
});

const props = {
  ...defaultProps,
  fileUploadModel,
};

export default {
  title: 'Components/File Upload',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, FileUploadModule],
    }),
  ],
  component: FileUploadComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
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
        value: "Use this to override the component's default settings.",
        properties: [
          {
            name: 'id',
            type: 'string',
            value: 'The id for the file upload component',
          },
          {
            name: 'icon',
            type: 'IconDefinition',
            value: 'The icon that shows at the top of the file upload component. Default: faCloudUploadAlt',
          },
          {
            name: 'label',
            type: 'string',
            value: 'The label that shows inside of the file upload component. Default: Drag files here to upload',
          },
          {
            name: 'ariaLabel',
            type: 'string',
            value: 'The screen reader text for the file upload component. Default: Activate enter key to upload files',
          },
          {
            name: 'orLabel',
            type: 'string',
            value: 'The text that shows between the label and the button. Default:',
          },
          {
            name: 'buttonIcon',
            type: 'IconDefinition',
            value: 'The icon that shows inside of the button. Default: faCloudUploadAlt',
          },
          {
            name: 'buttonLabel',
            type: 'string',
            value: 'The label that shows inside of the button. Default: Selects Files',
          },
          {
            name: 'buttonType',
            type: 'string',
            value:
              'The class to apply to the button.  Classes can be found at https://design.cms.gov.  Default: ds-c-button ds-c-button--primary',
          },
          {
            name: 'buttonAriaLabel',
            type: 'string',
            value: 'The screen reader text for the button. Default: Activate enter key to upload files',
          },
          {
            name: 'className',
            type: 'string',
            value:
              'The class to apply to the file upload component.  Classes can be found at https://design.cms.gov.  Default: ds-u-fill--white',
          },
          {
            name: 'classNameActive',
            type: 'string',
            value:
              'The class to apply to the file upload component when a file is being dragged onto the component.  Classes can be found at https://design.cms.gov.  Default: ds-u-fill--primary-alt-lightest',
          },
          {
            name: 'height',
            type: 'number | string',
            value: 'The height of the component.  Default: auto',
          },
          {
            name: 'dataAutoId',
            type: 'string',
            value: 'Use this for testing ID',
          },
        ],
      },
      {
        name: 'onFileUpload',
        type: 'function',
        // tslint:disable-next-line: max-line-length
        value:
          'A javascript function that will be called when the a file is uploaded. It takes one argument, which is a javascript file object.',
      },
    ],
    notes: [],
  },
});

export const Normal: Story<FileUploadComponent> = () => ({
  template: `
            <app-file-upload
                (onFileUpload) = 'handleEvent($event)'>
            </app-file-upload>
        `,
  props: defaultProps,
});

export const OverriddenParameters: Story<FileUploadComponent> = () => ({
  template: `
            <app-file-upload
                [fileUploadModel] = "fileUploadModel"
                (onFileUpload) = 'handleEvent($event)'>
            </app-file-upload>
        `,
  props,
});
