import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadQueComponent } from './download-que.component';

describe('DownloadQueComponent', () => {
  let component: DownloadQueComponent;
  let fixture: ComponentFixture<DownloadQueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadQueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadQueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
