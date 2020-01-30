import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Dashboard } from '../models/dashboard';

@Component({
  selector: 'app-dashboard-charts',
  templateUrl: './dashboard-charts.component.html',
  styleUrls: ['./dashboard-charts.component.scss']
})
export class DashboardChartsComponent implements OnChanges {

  @Input() data: any[];
  @Input() from: number;
  @Input() to: number;
  @Input() singleDay: boolean;
  multi: any[] = [];
  results: any;


  view = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Device type';
  showYAxisLabel = true;
  yAxisLabel = 'Number of Issues';
  legendTitle = 'Issue type';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor() {
  }

  ngOnChanges() {
    this.results = this.generateResults(this.from, this.to, this.singleDay);
  }

  generateResults(from: number, to: number, singleDay: boolean): any {

    if (singleDay || from === to) {
      return this.data[from];
    } else if (from < to) {


      let result = [

        {
          name: 'Android',
          series: [
            {
              name: 'Infected',
              value: 0,
            },
            {
              name: 'Rooted',
              value: 0,
            }
          ]
        },

        {
          name: 'iOS',
          series: [
            {
              name: 'Infected',
              value: 0,
            },
            {
              name: 'Rooted',
              value: 0,
            }
          ]
        },

        {
          name: 'PC',
          series: [
            {
              name: 'Infected',
              value: 0,
            },
            {
              name: 'Rooted',
              value: 0,
            }
          ]
        },
      ];

      const data = this.data.slice(from, to);

      data.map(d => {
        result = [

          {
            name: 'Android',
            series: [
              {
                name: 'Infected',
                value: result[0].series[0].value + d[0].series[0].value,
              },
              {
                name: 'Rooted',
                value: result[0].series[1].value + d[0].series[1].value,
              }
            ]
          },

          {
            name: 'iOS',
            series: [
              {
                name: 'Infected',
                value: result[1].series[0].value + d[1].series[0].value,
              },
              {
                name: 'Rooted',
                value: result[1].series[1].value + d[1].series[1].value,
              }
            ]
          },

          {
            name: 'PC',
            series: [
              {
                name: 'Infected',
                value: result[2].series[0].value + d[2].series[0].value,
              },
              {
                name: 'Rooted',
                value: result[2].series[1].value + d[2].series[1].value,
              }
            ]
          },
        ];
      });

      return result;
    }
  }



}
