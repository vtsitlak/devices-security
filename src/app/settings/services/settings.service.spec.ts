import { TestBed } from '@angular/core/testing';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    expect(service).toBeTruthy();
  });

  it('updateSettings should update settings', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.settings = undefined;
    const settings = service.settingsDefault;
    service.updateSettings(settings);
    expect(service.settings).toEqual(settings);
  });

  it('getSettings should return valid settings', () => {
    const service: SettingsService = TestBed.get(SettingsService);
    service.settings = undefined;
    service.getSettings().subscribe(s => expect(s).toBeTruthy());
  });
});
