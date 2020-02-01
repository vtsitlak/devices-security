import { TestBed, fakeAsync, async } from '@angular/core/testing';

import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevicesService = TestBed.get(DevicesService);
    expect(service).toBeTruthy();
  });

  it('getDevices() should return an array og 100 devices', async(() => {
    const service: DevicesService = TestBed.get(DevicesService);

    service.getDevices().subscribe(d => expect(d.length).toBe(100));
  }));

  it('getDevice() should return a device', async(() => {
    const service: DevicesService = TestBed.get(DevicesService);

    service.getDevice(0).subscribe(d => expect(d).toBeTruthy);
  }));
});
