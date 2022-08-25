import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DataTestDirective } from './data-test.directive';

@Component({ template: `<div hqrDataTest="yay"></div>` }) class TestComponent { }

let fixture: ComponentFixture<TestComponent>;
let des: DebugElement[];

beforeEach(() => {
  fixture = TestBed.configureTestingModule({
    declarations: [ DataTestDirective, TestComponent]
  })
  .createComponent(TestComponent);

  fixture.detectChanges();
  des = fixture.debugElement.queryAll(By.directive(DataTestDirective));
})

describe('DataTestDirective', () => {
  it('should find elements with hqrDataTest assigned', () => {
    expect(des.length).toBeGreaterThan(0);
  });

  it('should find elements with data-test and assigned value', () => {
    const elem = des[0];
    expect(elem.attributes['data-test']).toBe('yay');
  });
});
