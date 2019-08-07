import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TabBarComponent } from './tab-bar.component';

describe('TabComponent', () => {
  let component: TabBarComponent;
  let fixture: ComponentFixture<TabBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarComponent ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});