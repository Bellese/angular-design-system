// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { AccordionModule } from './accordion.module';
import { PanelModule } from '../panel/panel.module';

// Misc
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

storiesOf('Components|Accordian', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                AccordionModule,
                PanelModule,
                BrowserAnimationsModule,
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
                    modules: ['AccordionModule', 'PanelModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
                {
                    modules: ['BrowserAnimationsModule'],
                    file: '@angular/platform-browser/animations',
                    ngmodule: 'imports',
                },
            ],
            notes: [
                // tslint:disable-next-line: max-line-length
                'The accordian component does not take any parameters.  It is an HTML tag that wraps around a set of panel components, to keep communication between panels. For example if you open one panel the other will close. If you want the panels to open independent of each other dont wrap the panels in an app-accordion tag.',
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-accordion>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title ='Accordion Example'
                    extTitleClass = 'customizeExtra'
                    dataAutoId = 'dataID'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false>
                    <span>
                        Additional Title
                    </span>
                    <div>
                        Content Structure
                    </div>
                </app-panel>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title ='Accordion Example'
                    extTitleClass = 'customizeExtra'
                    dataAutoId = 'dataID'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false>
                    <span>
                        Additional Title 2
                    </span>
                    <div>
                        Content Structure 2
                    </div>
                </app-panel>
            </app-accordion>
        `,
        props: defaultProps
    }));

