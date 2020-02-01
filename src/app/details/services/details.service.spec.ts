import { TestBed, async } from '@angular/core/testing';

import { DetailsService } from './details.service';

describe('DetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsService = TestBed.get(DetailsService);
    expect(service).toBeTruthy();
  });

  it('getDetails() should return details data', async(() => {
    const service: DetailsService = TestBed.get(DetailsService);

    service.getDetails().subscribe(d => expect(d).toBeTruthy());
  }));
});
