import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesItemComponent } from './devices-item/devices-item.component';
import { DevicesComponent } from './devices/devices.component';
import { Routes, RouterModule } from '@angular/router';
import { DevicesService } from './services/devices.service';
import { DevicesTableComponent } from './devices-table/devices-table.component';
import { SharedModule } from '../shared/shared/shared.module';

export const devicesRoutes: Routes = [
  {
    path: '',
    component: DevicesComponent,
  },
  {
    path: ':id',
    component: DevicesItemComponent,
  },
];

@NgModule({
  declarations: [ DevicesItemComponent, DevicesComponent, DevicesTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(devicesRoutes),
  ],
  providers: [DevicesService],
  exports: [
    DevicesComponent,
  ],
})
export class DevicesModule { }
