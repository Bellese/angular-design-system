import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';

describe('ToastService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [{ provide: ToastrService, useValue: { success: () => of() } }],
    })
  );

  it('should be created', () => {
    const service: ToastService = TestBed.inject(ToastService);
    expect(service).toBeTruthy();
  });
});
