import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardChartsComponent } from './dashboard-charts/dashboard-charts.component';
import { DashboardService } from './services/dashboard.service';

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
    RouterModule.forChild(dashboardRoutes),
  ],
  providers: [DashboardService],
})
export class DashboardModule { }
