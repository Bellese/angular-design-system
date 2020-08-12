// Storybook
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { StoriesModule } from '../../../stories/stories.module';
import { defaultProps } from '../../../../.storybook/helpers';

// Modules
import { AccordionModule } from './accordion.module';
import { PanelModule } from '../panel/panel.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Misc
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { faPencilAlt, faChevronCircleRight, faCheck } from '@fortawesome/free-solid-svg-icons';

const props = {
    ...defaultProps,
    faPencilAlt,
    faChevronCircleRight,
    faCheck
};

storiesOf('Components/Accordian', module)
    .addDecorator(
        moduleMetadata({
            imports: [
                StoriesModule,
                AccordionModule,
                PanelModule,
                BrowserAnimationsModule,
                FontAwesomeModule,
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
    })).add('Light', () => ({
        template: `
            <app-accordion>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title =''
                    titleClass = 'ds-u-fill--transparent ds-u-padding--0 ds-u-font-weight--bold ds-u-border-top--1'
                    extTitleClass = 'ds-u-font-size--base'
                    dataAutoId = 'dataID'
                    expandedClass = 'ds-u-fill--gray-lightest ds-u-padding--2 ds-u-margin-left--7'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false
                    plusClass="ds-u-fill--primary"
                >
                    <ng-container>
                        <div>HBIPS-5 <fa-icon [icon]="faCheck" class='ds-u-color--success'></fa-icon></div>
                        <div class='ds-u-font-size--base ds-u-font-weight--normal ds-u-color--gray'>
                            HBIPS-5: Patients discharged on Multiple Antipsychotic Medications with Appropriate Justification
                        </div>
                        <div class='ds-u-padding-top--2 ds-u-font-size--lead'>
                            Score for HBIPS-5:
                        </div>
                        <div style='width: 100px; background-color: green; color: white; padding: 5px;'>100%</div>
                    </ng-container>
                    <span>
                        <a><fa-icon [icon]="faPencilAlt"></fa-icon> Edit Measure</a>
                    </span>
                    <div>
                        <div class='ds-u-padding-bottom--2'>
                            <div class='ds-u-font-size--lead'>HBIPS-2 Numerator</div>
                            <div>The total number of hours that all psychiatric inpatients were maintained in physical restraing: <strong>300</strong></div>
                        </div>
                        <div class='ds-u-padding-bottom--2'>
                            <div class='ds-u-font-size--lead'>HBIPS-3 Numerator</div>
                            <div>The total number of hours that all psychiatric inpatients were held in seclusion: <strong>500</strong></div>
                        </div>
                        <div>
                            <div class='ds-u-font-size--lead'>HBIPS-2 Numerator and HBIPS-3 Denominator</div>
                            <div>Number of psychiatric inpatient days: <strong>3000</strong></div>
                        </div>
                    </div>
                </app-panel>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title ='HBIPS-5'
                    titleClass = 'ds-u-fill--transparent ds-u-padding--0 ds-u-font-weight--bold ds-u-border-top--1'
                    extTitleClass = 'ds-u-font-size--base'
                    dataAutoId = 'dataID'
                    expandedClass = 'ds-u-fill--gray-lightest ds-u-padding--2 ds-u-margin-left--7'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false
                    plusClass="ds-u-fill--primary"
                >
                    <span>
                        <a class="ds-c-button ds-u-fill--warn ds-u-border--0 ds-u-color--black">Continue Measure</a>
                    </span>
                    <div>
                        <div class='ds-u-padding-bottom--2'>
                            <div class='ds-u-font-size--lead'>HBIPS-2 Numerator</div>
                            <div>The total number of hours that all psychiatric inpatients were maintained in physical restraing: <strong>300</strong></div>
                        </div>
                        <div class='ds-u-padding-bottom--2'>
                            <div class='ds-u-font-size--lead'>HBIPS-3 Numerator</div>
                            <div>The total number of hours that all psychiatric inpatients were held in seclusion: <strong>500</strong></div>
                        </div>
                        <div>
                            <div class='ds-u-font-size--lead'>HBIPS-2 Numerator and HBIPS-3 Denominator</div>
                            <div>Number of psychiatric inpatient days: <strong>3000</strong></div>
                        </div>
                    </div>
                </app-panel>
                <app-panel
                    (panelClick) = "handleEvent($event)"
                    title ='HBIPS-5'
                    titleClass = 'ds-u-fill--transparent ds-u-padding--0 ds-u-font-weight--bold ds-u-border-top--1'
                    extTitleClass = 'ds-u-font-size--base'
                    dataAutoId = 'dataID'
                    expandedClass = 'ds-u-fill--gray-lightest ds-u-padding--2 ds-u-margin-left--7'
                    [extTitle] = true
                    [expand] = false
                    [openAll] = false
                    plusClass="ds-u-fill--primary"
                >
                    <span>
                        <a class='ds-c-button ds-c-button--success'><fa-icon [icon]="faChevronCircleRight"></fa-icon> Start Measure</a>
                    </span>
                    <div>
                        <div class='ds-u-padding-bottom--2'>
                            <div class='ds-u-font-size--lead'>HBIPS-2 Numerator</div>
                            <div>The total number of hours that all psychiatric inpatients were maintained in physical restraing: <strong>300</strong></div>
                        </div>
                        <div class='ds-u-padding-bottom--2'>
                            <div class='ds-u-font-size--lead'>HBIPS-3 Numerator</div>
                            <div>The total number of hours that all psychiatric inpatients were held in seclusion: <strong>500</strong></div>
                        </div>
                        <div>
                            <div class='ds-u-font-size--lead'>HBIPS-2 Numerator and HBIPS-3 Denominator</div>
                            <div>Number of psychiatric inpatient days: <strong>3000</strong></div>
                        </div>
                    </div>
                </app-panel>
            </app-accordion>
        `,
        props
    }));
