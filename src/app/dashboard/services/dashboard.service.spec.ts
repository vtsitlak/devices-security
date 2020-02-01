import { TestBed, async } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  it('generateData() should return an array od data', async(() => {
    const service: DashboardService = TestBed.get(DashboardService);

    service.generateData().subscribe(d => expect(d.length).toBeGreaterThan(10));
  }));
});
