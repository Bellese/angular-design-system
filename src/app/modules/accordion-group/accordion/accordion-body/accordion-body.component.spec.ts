import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBodyComponent } from './accordion-body.component';

describe('AccordionBodyComponent', () => {
  let component: AccordionBodyComponent;
  let fixture: ComponentFixture<AccordionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
