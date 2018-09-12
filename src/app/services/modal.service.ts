import {
    Injectable,
    Injector,
    Inject,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
    ComponentRef,
    OnDestroy,
    EventEmitter,
    Output,
    TemplateRef
} from '@angular/core';

import { 
    AppModalShell 
} from '../modules/modal-shell/modal-shell.component';

import { 
    DOCUMENT 
} from '@angular/platform-browser';

@Injectable()

export class ModalService {
    
    @Output() modalDestroyed = new EventEmitter<any>();

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
         @Inject(DOCUMENT) private document: any
    ) {
    }
    
    modalCount = 0;
     
    prepModalSettings() {
        this.modalCount++;
        
        //Check if there's a vertical scroll
        if ( document.getElementsByTagName("body")[0].scrollHeight > window.innerHeight && this.modalCount === 1 ) {

            //Stop background from scrolling
            document.getElementsByTagName("body")[0].classList.add("overflowHidden");

            //keep page from bouncing when removing overflow
            let bodyRightMargin = document.getElementsByTagName("body")[0].style.marginRight;
            
            //Either there will be a margin tied to body or default is 8px, sccrollbar is 16px
            let margin = bodyRightMargin ? parseInt(bodyRightMargin) + 16 + "px" : "24px";
            
            document.getElementsByTagName("body")[0].style.marginRight = margin;
        }
        
        //add ariahidden to the modal before another is implemented
        if (this.modalCount > 1) {
            document.getElementById('modalImplementation' + (this.modalCount - 1) ).classList.add("modal-aria-hidden");
        }

        //Keep background from reading 508
        let hideModal = document.getElementsByClassName("modal-aria-hidden");

        for( let x = 0 ; x < hideModal.length ; x++) {
            hideModal[x].setAttribute("aria-hidden", "true");
        } 
    }
     
    removeModalSettings(id) {
        this.modalCount--;
        
        //Check if there's a vertical scroll
        if ( document.getElementsByTagName("body")[0].scrollHeight > window.innerHeight && this.modalCount === 0 ) {

            //Allow background to scroll again
            document.getElementsByTagName("body")[0].classList.remove("overflowHidden");

            //keep page from bouncing when removing overflow
            let bodyRightMargin = document.getElementsByTagName("body")[0].style.marginRight;
            
            //Either there will be a margin tied to body or default is 8px, sccrollbar is 16px
            let margin = bodyRightMargin ? ((parseInt(bodyRightMargin) - 16) * 2 )/2 + "px" : "24px";
            
            document.getElementsByTagName("body")[0].style.marginRight = margin;
        }
        
        //add ariahidden to the modal before another is implemented
        if (this.modalCount > 0) {
            document.getElementById('modalImplementation' + (this.modalCount) ).setAttribute("aria-hidden", "false");
        }
        
        if(this.modalCount === 0) {
            //Allow 508 to read background again
            let hideModal = document.getElementsByClassName("modal-aria-hidden");

            for( let x = 0 ; x < hideModal.length ; x++) {
                hideModal[x].setAttribute("aria-hidden", "false");
            }   
        }

        //Set focus back to button
         setTimeout(() => {
            if(document.getElementById(id)) {
                document.getElementById(id).focus();   
            }
        }, 250);
    }

    appendComponentToBody(component: any, id: any, title: any, data: Array<any>, firstFocus) {
        
        this.prepModalSettings();

        // Create a component reference from the component 
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory( component )
            .create(this.injector, this.resolveContentProj(component));
        
        // Attach component to the appRef so that it's inside the ng component tree
            this.appRef.attachView(componentRef.hostView);

        // Get DOM element from component
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        // Append DOM element to the div id of modal-host
        document.getElementById("modal-host").appendChild(domElem);
        
        //Send Title Inputs to any Modal Body
        (<any>componentRef
            .instance)
            .modalTitle = title;
        
        //Send a unique identifier for modals
        (<any>componentRef
            .instance)
            .modalCount = this.modalCount;
        
        //Send Data Inputs to any Modal Body
        (<any>componentRef
            .instance)
            .modalData = data;
        
        // Focuses on first clickable button that is not the X
        setTimeout(() => {
            if(!firstFocus) {
                firstFocus = "cancelButton"+this.modalCount;
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
                const element = this.document.createTextNode(comp);
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
