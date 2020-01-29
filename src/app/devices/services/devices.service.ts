import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Device } from '../models/device';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  generateDevices(): Observable<Device[]> {
    const devices: Device[] = [];
 
    for (let i = 1; i <= 100; i++) {
      const device: Device = {
        id: i,
        type: (Math.random() <= 0.4) ? 'Android' : (Math.random() <= 0.4) ? 'iOS' : 'PC',
        riskLevel: Math.round(Math.random() * Math.floor(100)),
        lastSeen: this.randomDate(new Date(2020, 1, 1), new Date()).toString(),
      };
      devices.push(device);
    }

    return of(devices).pipe(delay(2000));
  }

  private randomDate(start, end) {
    const date = new Date(+start + Math.random() * (end - start));
    return date;
  }
}
