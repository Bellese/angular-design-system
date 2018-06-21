import { AppComponent } from "./../app.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ModalComponent } from "./modal.component";
import { By } from '@angular/platform-browser';

describe("ModalComponent", () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ModalComponent, AppComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  //closeModal test does not fail only when *ngIf on button element is removed
  it("should test closeModal method on close button", () => {
    fixture.detectChanges()
    spyOn(component, 'closeModal')
    let button = fixture.nativeElement.querySelector('.close').click()
    expect(component.closeModal).toHaveBeenCalled()
  });

  it('The modal should have a title in an h1 tag', () => {
    let de = fixture.debugElement.query(By.css('h1'))
    let el = de.nativeElement

    component.modalTitle = "Test title"
    fixture.detectChanges()
    expect(el.textContent).toContain('Test title')
  })

  it('The modal should have a body in a p tag', () => {
    let de = fixture.debugElement.query(By.css('p'))
    let el = de.nativeElement

    component.modalBody = 'This is test body content'
    fixture.detectChanges()
    expect(el.textContent).toContain('This is test body content')
  })

});
