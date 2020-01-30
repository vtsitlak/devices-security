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

  data: any[];
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loading.asObservable();
  singleDay = true;
  from = 0;
  to = 0;
  range = 'Today';

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.dashboardService.generateData().subscribe(dashboard => {
      this.data = this.generateData(dashboard);
      this.loading.next(false);
    });
  }

  rangeText(from: number, to: number) {
    if (this.singleDay) {
      to = from;
    }
    if (from === to) {
      if (from === 0) {
        this.range = 'Today';
      }
      if (from === 1) {
        this.range = 'Yesterday';
      }
      if (from > 1) {
        this.range = from + ' days ago';
      }
    } else if (from < to) {
      if (from === 0) {
        this.range = 'from today to ' + to + ' days ago';
      } else {
        this.range = 'from ' + from + ' day(s) ago to ' + to + ' days ago';
      }
    } else {
      this.range = 'Not valid range';
    }
  }

  generateData(dashboard: Dashboard[]): any[] {
    const data: any[] = [];
    dashboard.map(d => {
      const m = [

        {
          name: 'Android',
          series: [
            {
              name: 'Infected',
              value: d.infectedAndroid,
            },
            {
              name: 'Rooted',
              value: d.rootedAndroid,
            }
          ]
        },

        {
          name: 'iOS',
          series: [
            {
              name: 'Infected',
              value: d.infectedIos,
            },
            {
              name: 'Rooted',
              value: d.rooteddIos,
            }
          ]
        },

        {
          name: 'PC',
          series: [
            {
              name: 'Infected',
              value: d.infectedPC,
            },
            {
              name: 'Rooted',
              value: d.rootedPC,
            }
          ]
        },


      ];

      data.push(m);
    });

    return data;
  }
}
