import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppButtonComponent } from '../button/button.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

import { DirectiveModule } from '../../directives/directive.module';
import { PopoverComponent } from './popover.component';
import { PopoverModel, PopoverItemModel, mdePopoverPositionXEnum, mdePopoverPositionYEnum } from './popover.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdePopoverModule } from '@material-extended/mde';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const popoverModel = new PopoverModel({
    items: [
        new PopoverItemModel({
            label: 'Menu Item 1',
            onClick: () => {
                console.log('INLINE FUNCTION CALL');
            }
        }),
        new PopoverItemModel({
            label: 'Menu Item 2',
            url: 'https://www.google.com'
        }),
        new PopoverItemModel({
            label: 'Menu Item 3',
            onClick: defaultProps.handleEvent,
        })
    ]
});

const popoverModelUtility = {
    ...popoverModel,
    showArrow: false,
    label: null,
    mdePopoverPositionX: mdePopoverPositionXEnum.AFTER,
    mdePopoverPositionY: mdePopoverPositionYEnum.ABOVE
};

const props = {
    ...defaultProps,
    popoverModel,
    popoverModelUtility,
    faEllipsisV
};

storiesOf('Components|Popover', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                DirectiveModule,
                FontAwesomeModule,
                BrowserAnimationsModule,
                MdePopoverModule
            ],
            declarations: [
                PopoverComponent,
                AppButtonComponent,
                ParametersComponent,
                ImportsComponent,
                NgModuleComponent,
                ComponentIntroComponent
            ],
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
                    modules: ['PopoverModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'popoverModel',
                    type: 'PopoverModel',
                    value: 'Use this to override the component\'s default settings.',
                    properties: [
                        {
                            name: 'id',
                            type: 'string',
                            value: 'The id for the popover component',
                        },
                        {
                            name: 'ariaLabel',
                            type: 'string',
                            value: 'Use this to further specify the popover component to the screen reader',
                        },
                        {
                            name: 'icon',
                            type: 'IconDefinition',
                            value: 'This is a FontAwesome icon that can show before the label.  If no icon or label is specified, the elements inside of the component will be used as ng-content.',
                        },
                        {
                            name: 'label',
                            type: 'string',
                            value: 'This is the word or phrase that will show in the popover button. If no icon or label is specified, the elements inside of the component will be used as ng-content.',
                        },
                        {
                            name: 'showArrow',
                            type: 'boolean',
                            value: 'Hide or show the expand/collapse arrow.  Default value is true',

                        },
                        {
                            name: 'mdePopoverPositionX',
                            type: 'mdePopoverPositionXEnum',
                            value: 'Display the popover menu to the before or after of the button that is used to trigger the popover menu.  Available options are mdePopoverPositionXEnum.BEFORE or mdePopoverPositionXEnum.AFTER.  Default value is mdePopoverPositionXEnum.BEFORE. This value may be ignored if there is no space on the screen to position the menu as specified.',

                        },
                        {
                            name: 'mdePopoverPositionY',
                            type: 'mdePopoverPositionYEnum',
                            value: 'Display the popover menu to the above or below of the button that is used to trigger the popover menu.  Available options are mdePopoverPositionYEnum.ABOVE or mdePopoverPositionYEnum.BELOW.  Default value is mdePopoverPositionYEnum.BELOW. This value may be ignored if there is no space on the screen to position the menu as specified.',

                        },
                        {
                            name: 'dataAutoId',
                            type: 'string',
                            value: 'Use this for testing ID',
                        },
                        {
                            name: 'items',
                            type: 'array of PopoverItemModels',
                            value: 'Use this to further specify the popover component to the screen reader',
                            properties: [
                                {
                                    name: 'id',
                                    type: 'string',
                                    value: 'The id for the popover component',
                                },
                                {
                                    name: 'ariaLabel',
                                    type: 'string',
                                    value: 'Use this to further specify the popover component to the screen reader',
                                },
                                {
                                    name: 'label',
                                    type: 'string',
                                    value: 'This is the word or phrase that will show in the popover button.',
                                },
                                {
                                    name: 'dataAutoId',
                                    type: 'string',
                                    value: 'Use this for testing ID',
                                },
                                {
                                    name: 'url',
                                    type: 'string',
                                    value: 'The URL of the page that the user will see when they click this item.  Currently the component only supports full page redirects to a url, but more options can be added as needed.',
                                },
                            ]
                        },
                    ]
                },
            ],
            notes: []
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-popover
                [popoverModel] = 'popoverModel'>
            </app-popover>
        `,
        props: props
    }))
    .add('Utility Menu', () => ({
        template: `
            <app-popover [popoverModel] = 'popoverModelUtility'>
                <fa-icon [icon]="faEllipsisV"></fa-icon>
            </app-popover>
        `,
        props: props
    }));
