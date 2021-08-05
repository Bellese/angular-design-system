import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalService } from '../../../services/modal/modal.service';
import { ButtonModule } from '../../button/button.module';

import { TableInfoModalComponent } from './table-info-modal.component';

class MockModalService {
  public appendComponentToBody(): void {
    return null;
  }
}

describe('TableInfoModalComponent', () => {
  let component: TableInfoModalComponent;
  let fixture: ComponentFixture<TableInfoModalComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FontAwesomeModule, ButtonModule],
        declarations: [TableInfoModalComponent],
        providers: [{ provide: ModalService, useClass: MockModalService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
