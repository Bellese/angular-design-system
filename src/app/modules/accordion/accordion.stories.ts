import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faChevronCircleRight, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { moduleMetadata, Story } from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { defaultProps } from '../../../../.storybook/helpers';
import ComponentIntroComponent from '../../../stories/component-intro.component';
import { StoriesModule } from '../../../stories/stories.module';
import { PanelModule } from '../panel/panel.module';
import { AppAccordionComponent } from './accordion.component';
import { AccordionModule } from './accordion.module';

const props = {
  ...defaultProps,
  faPencilAlt,
  faChevronCircleRight,
  faCheck,
};

export default {
  title: 'Components/Accordion',
  decorators: [
    moduleMetadata({
      imports: [StoriesModule, AccordionModule, PanelModule, BrowserAnimationsModule, FontAwesomeModule],
    }),
  ],
  component: AppAccordionComponent,
} as Meta;

export const Intro: Story<ComponentIntroComponent> = () => ({
  component: ComponentIntroComponent,
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
    ],
  },
});

export const Normal: Story<AppAccordionComponent> = () => ({
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
  props,
});
export const Light: Story<AppAccordionComponent> = () => ({
  template: `
        <app-accordion>
            <app-panel
                (panelClick) = "handleEvent($event)"
                title =''
                titleClass = 'ds-u-fill--transparent ds-u-padding--2 ds-u-font-weight--bold ds-u-border-top--1 ds-u-font-size--h4 ds-u-md-font-size--h3'
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
                titleClass = 'ds-u-fill--transparent ds-u-padding--2 ds-u-font-weight--bold ds-u-border-top--1 ds-u-font-size--h4 ds-u-md-font-size--h3'
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
                titleClass = 'ds-u-fill--transparent ds-u-padding--2 ds-u-font-weight--bold ds-u-border-top--1 ds-u-font-size--h4 ds-u-md-font-size--h3'
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
  props,
});
