import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoModalComponent } from './table-info-modal.component';

describe('TableInfoModalComponent', () => {
  let component: TableInfoModalComponent;
  let fixture: ComponentFixture<TableInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
