import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[modal-host]',
})
export class ModalDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}