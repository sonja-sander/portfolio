import { TestBed } from '@angular/core/testing';

import { ReferencesData } from './references-data';

describe('ReferencesData', () => {
  let service: ReferencesData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferencesData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
