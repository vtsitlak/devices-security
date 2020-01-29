import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesItemComponent } from './devices-item/devices-item.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DevicesComponent } from './devices/devices.component';
import { Routes, RouterModule } from '@angular/router';
import { DevicesService } from './services/devices.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { DevicesTableComponent } from './devices-table/devices-table.component';

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
    MatTableModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(devicesRoutes),
  ],
  providers: [DevicesService],
  exports: [
    DevicesComponent,
  ],
})
export class DevicesModule { }
