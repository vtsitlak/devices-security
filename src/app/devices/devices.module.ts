import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesItemComponent } from './devices-item/devices-item.component';
import { DevicesComponent } from './devices/devices.component';
import { Routes, RouterModule } from '@angular/router';
import { DevicesService } from './services/devices.service';

export const devicesRoutes: Routes = [
  {
      path: '',
      component: DevicesComponent,
  },
];

@NgModule({
  declarations: [DevicesListComponent, DevicesItemComponent, DevicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(devicesRoutes),
  ],
  providers: [DevicesService],
})
export class DevicesModule { }
