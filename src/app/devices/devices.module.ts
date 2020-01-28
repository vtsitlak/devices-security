import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesItemComponent } from './devices-item/devices-item.component';



@NgModule({
  declarations: [DevicesListComponent, DevicesItemComponent],
  imports: [
    CommonModule
  ]
})
export class DevicesModule { }
