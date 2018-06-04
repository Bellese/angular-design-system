import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
    selector: '[button-focus]',
})
export class ButtonDirective {
    
    @Input() modalFocus;
    @Input() buttonFocus;
    Element;
    
    constructor(Element: ElementRef) {
        this.Element = Element
    }
    
    ngOnInit () {
        (this.modalFocus) ? this.Element.nativeElement.focus(): false;
    }
    
    ngOnChanges(){
        (this.buttonFocus) ? this.Element.nativeElement.focus(): false;
    }

}