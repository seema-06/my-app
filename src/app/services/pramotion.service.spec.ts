import { TestBed } from '@angular/core/testing';

import { PramotionService } from './pramotion.service';

describe('PramotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PramotionService = TestBed.get(PramotionService);
    expect(service).toBeTruthy();
  });
});
