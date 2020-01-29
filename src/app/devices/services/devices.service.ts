import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Device } from '../models/device';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  devices: Device[] = [];
  constructor() { }

  getDevices(): Observable<Device[]> {
    this.devices = (this.devices.length !== 100) ? this.generateDevices() : this.devices;
    // add some delay to fake an actual http get call
    return of(this.devices).pipe(delay(2000));
  }

  getDevice(id: number): Observable<Device> {
    return (this.devices.length === 100) ? of(this.devices[id]).pipe(delay(1000)) : of(this.generateDevices()[id]).pipe(delay(1000));
  }

  private randomDate(start, end) {
    const date = new Date(+start + Math.random() * (end - start));
    return date;
  }

  private generateDevices(): Device[] {
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
    return devices;
  }
}
