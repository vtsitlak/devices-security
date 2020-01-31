import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardService } from './services/dashboard.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../shared/shared/shared.module';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, DashboardChartsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    RouterModule.forChild(dashboardRoutes),
  ],
  providers: [DashboardService],
})
export class DashboardModule { }
