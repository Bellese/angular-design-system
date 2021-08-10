import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BarGraphComponent } from './bar-graph.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ModalModule } from '../../../../public_api';
import { barGraphModel } from './bar-graph.stories';

describe('BarGraphComponent', () => {
  let component: BarGraphComponent;
  let fixture: ComponentFixture<BarGraphComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxChartsModule, ModalModule.forRoot(), BrowserAnimationsModule],
        declarations: [BarGraphComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGraphComponent);
    component = fixture.componentInstance;
    component.barGraphModel = barGraphModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
