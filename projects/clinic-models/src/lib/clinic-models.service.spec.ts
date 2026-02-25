import { TestBed } from '@angular/core/testing';

import { ClinicModelsService } from './clinic-models.service';

describe('ClinicModelsService', () => {
  let service: ClinicModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
