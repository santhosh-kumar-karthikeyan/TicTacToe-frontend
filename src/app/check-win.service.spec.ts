import { TestBed } from '@angular/core/testing';

import { CheckWinService } from './check-win.service';

describe('CheckWinService', () => {
  let service: CheckWinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckWinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
