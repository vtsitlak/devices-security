import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { BehaviorSubject, Observable } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: Dashboard[];
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.dashboardService.generateData().subscribe(data => {
      this.data = data;
      this.loading.next(false);
    });
  }
}
