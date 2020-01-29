import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device';
import { DevicesService } from '../services/devices.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: Device[];
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private vehiclesService: DevicesService,
  ) { }

  ngOnInit() {
    this.vehiclesService.generateDevices().subscribe(devices => {
      this.devices = devices;
      this.loading.next(false);
    });
  }
}
