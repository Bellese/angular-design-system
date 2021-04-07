import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableInfoModalComponent } from './table-info-modal.component';

describe('TableInfoModalComponent', () => {
  let component: TableInfoModalComponent;
  let fixture: ComponentFixture<TableInfoModalComponent>;

  beforeEach(waitForAsync(() => {
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
