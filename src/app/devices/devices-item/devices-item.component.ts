import { Component, OnInit } from '@angular/core';
import { Device } from '../models/device';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-devices-item',
  templateUrl: './devices-item.component.html',
  styleUrls: ['./devices-item.component.scss']
})
export class DevicesItemComponent implements OnInit {

  device: Device;
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private route: ActivatedRoute,
    private vehiclesService: DevicesService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.vehiclesService.getDevice(id - 1).subscribe(device => {
      this.device = device;
      console.log(device);
      this.loading.next(false);
    });

  }

}
