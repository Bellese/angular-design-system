import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hqrTestId]'
})
export class DataTestDirective implements OnInit {
  @Input() hqrTestId!: string;

  element: any; // must be 'any' to match el.nativeElement

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.inputToAttribute()
  }

  inputToAttribute() {
    this.renderer.setAttribute(this.element, 'data-test', this.hqrTestId);
    this.renderer.removeAttribute(this.element, 'hqrTestId');
  }
}
