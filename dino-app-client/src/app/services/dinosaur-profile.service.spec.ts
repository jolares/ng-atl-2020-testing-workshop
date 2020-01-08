import { TestBed } from '@angular/core/testing';

import { DinosaurProfileService } from './dinosaur-profile.service';

describe('DinosaurProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinosaurProfileService = TestBed.get(DinosaurProfileService);
    expect(service).toBeTruthy();
  });
});
