import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppSettings } from '../models/settings';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: AppSettings = undefined;

  settingsDefault: AppSettings = {
    notifications: true,
    autoUpdate: true,
    recoveryEmail: 'recovery@mail.com',
    securityQuestion: 'My birthdate',
    timeZone: 2,
    languange: 'English',
  };

  getSettings(): Observable<AppSettings> {
    this.settings = (!!this.settings) ? this.settings : this.settingsDefault;

    return of(this.settings).pipe(delay(1000));
  }

  updateSettings(settings: AppSettings) {
    this.settings = settings;
  }
}

