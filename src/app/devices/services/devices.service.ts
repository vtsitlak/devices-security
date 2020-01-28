import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from '../models/device';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  generateDevicess(): Observable<Device[]> {
    const devices: Device[] = [];

    for (let i = 1; i++; 1 <= 100) {
      const device: Device = {
        id: i,
        type: (Math.random() <= 0.4) ? 'Android' : (Math.random() <= 0.4) ? 'iOS' : 'PC',
        riskLevel: Math.random() * Math.floor(100),
        lastSeen: this.randomDate(new Date(2020, 1, 1), new Date()),
      };
      devices.push(device);
    }

    delay(2000);
    return of(devices);
  }

  private randomDate(start, end) {
    const date = new Date(+start + Math.random() * (end - start));
    return date;
  }
}
