import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-storybook-welcome-component',
    template: `
        <main>
            <h1>Welcome to the Bellese Angular Design System</h1>
            <p>
                This design system includes a set of angular components that were created to work within the
                <a href='https://design.cms.gov/' target='_blank'>CMS Design System</a>.
            </p>
            <p>
                All of the available components are listed in the left sidebar.  Click into a component to see one or more
                variations of how that component can display.
            </p>
            <p>
                To see the source code used to display each component, open the "Story" panel at the bottom of this page.
            </p>
            <p>
                If a component has a event (such as a click, change, etc...) you can view the object that is emitted by the
                component in the browser console.  The object will also show in the "Actions" panel at the bottom of the page,
                but the console will show more useful information.
            </p>
        </main>
    `,
    styles: [],
})
export default class WelcomeComponent {
    @Output()
    showApp = new EventEmitter<any>();
}
