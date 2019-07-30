import {
    Injectable,
    Injector,
    Inject,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    EventEmitter,
    Output,
    TemplateRef
} from '@angular/core';

import {
    DOCUMENT
} from '@angular/common';

@Injectable()

export class ModalService {

    @Output() modalDestroyed = new EventEmitter<any>();

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
        @Inject(DOCUMENT) private doc: any
    ) {

    }

    modalCount = 0;
    scrollBarWidth = (window.innerWidth - document.documentElement.clientWidth);

    prepModalSettings() {
        this.modalCount++;

        // Must use clientheight and innerheight because mac hides scrollbar automatically so we cant base it off width
        if (document.body.clientHeight > window.innerHeight && this.modalCount === 1) {

            // Stop background from scrolling
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';

            // keep page from bouncing when removing overflow
            const bodyRightMargin = document.getElementsByTagName('body')[0].style.marginRight;

            // Either there will be a margin tied to body or default is 8px, sccrollbar grabbed by variable
            const margin = bodyRightMargin ? parseInt(bodyRightMargin) + this.scrollBarWidth + 'px' : (this.scrollBarWidth + 8) + 'px';

            document.getElementsByTagName('body')[0].style.marginRight = margin;
        }

        // add ariahidden to the modal before another is implemented
        if (this.modalCount > 1) {
            document.getElementById('modalImplementation' + (this.modalCount - 1)).classList.add('modal-aria-hidden');
        }

        // Keep background from reading 508
        const hideModal = document.getElementsByClassName('modal-aria-hidden');

        for (let x = 0; x < hideModal.length; x++) {
            hideModal[x].setAttribute('aria-hidden', 'true');
        }
    }

    removeModalSettings(id) {
        this.modalCount--;

        // Must use clientheight and innerheight because mac hides scrollbar automatically so we cant base it off width
        if (document.body.clientHeight > window.innerHeight && this.modalCount === 0) {

            // Allow background to scroll again
            document.getElementsByTagName('body')[0].style.overflowY = 'auto';

            // keep page from bouncing when removing overflow
            const bodyRightMargin = document.getElementsByTagName('body')[0].style.marginRight;

            // Either there will be a margin tied to body or default is 8px, sccrollbar is 16px
            const margin =
            bodyRightMargin ? ((parseInt(bodyRightMargin) - this.scrollBarWidth) * 2) / 2 + 'px' : (this.scrollBarWidth + 8) + 'px';

            document.getElementsByTagName('body')[0].style.marginRight = margin;
        }

        // add ariahidden to the modal before another is implemented
        if (this.modalCount > 0) {
            document.getElementById('modalImplementation' + (this.modalCount)).setAttribute('aria-hidden', 'false');
        }

        if (this.modalCount === 0) {
            // Allow 508 to read background again
            const hideModal = document.getElementsByClassName('modal-aria-hidden');

            for (let x = 0; x < hideModal.length; x++) {
                hideModal[x].setAttribute('aria-hidden', 'false');
            }
        }

        // Set focus back to button
        setTimeout(() => {
            if (document.getElementById(id)) {
                document.getElementById(id).focus();
            }
        }, 250);
    }

    appendComponentToBody(component: any, id: any, title: any, data: any, firstFocus) {
        // first create and append a div to hook the modal onto
        if (!document.getElementById('unique-modal-host')) {
            const modalHost = document.createElement('div');
            modalHost.setAttribute('id', 'unique-modal-host');
            document.body.appendChild(modalHost);
        }

        this.prepModalSettings();

        // Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector, this.resolveContentProj(component));

        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(componentRef.hostView);

        // Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // Append DOM element to the div id of modal-host
        document.getElementById('unique-modal-host').appendChild(domElem);

        // Send Title Inputs to any Modal Body
        (<any>componentRef
            .instance)
            .modalTitle = title;

        // Send a unique identifier for modals
        (<any>componentRef
            .instance)
            .modalCount = this.modalCount;

        // Send Data Inputs to any Modal Body
        (<any>componentRef
            .instance)
            .modalData = data;

        // Focuses on first clickable button that is not the X
        setTimeout(() => {
            if (!firstFocus) {
                firstFocus = 'cancelButton' + this.modalCount;
            }
            document.getElementById(firstFocus).focus();
        }, 0);

        // Listen for close button to be pushed
        (<any>componentRef
            .instance)
            .closeModal
            .subscribe(x => {
                this.appRef.detachView(componentRef.hostView);
                componentRef.destroy();

                this.removeModalSettings(id);
            });
    }

    resolveContentProj(comp) {

        if (comp) {
            if (typeof comp === 'string') {
                const element = this.doc.createTextNode(comp);
                return [[element]];
            }

            if (comp instanceof TemplateRef) {
                const viewRef = comp.createEmbeddedView(null);
                return [viewRef.rootNodes];
            }

            const factory = this.resolver.resolveComponentFactory(comp);
            const componentRef = factory.create(this.injector);

            return [[componentRef.location.nativeElement]];
        }
    }
}
