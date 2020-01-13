import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppButtonComponent } from '../button/button.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

import { DirectiveModule } from '../../directives/directive.module';
import { PopoverComponent } from './popover.component';
import { PopoverModel, PopoverItemModel } from './popover.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MdePopoverModule } from '@material-extended/mde';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const popoverModel = new PopoverModel({
    items: [
        new PopoverItemModel({
            label: 'Menu Item 1',
        }),
        new PopoverItemModel({
            label: 'Menu Item 2',
        }),
        new PopoverItemModel({
            label: 'Menu Item 3',
        })
    ]
});

const props = {
    ...defaultProps,
    popoverModel,
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
            declarations: [PopoverComponent, AppButtonComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
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
                    // TODO: document structure of the objects
                    value: 'Use this to override the component\'s default settings.',
                },
            ],
            notes: []
        }
    }))
    .add('Normal', () => ({
        template: `
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
            <app-popover
                [popoverModel] = 'popoverModel'>
            </app-popover>
        `,
        props: props
    }));
