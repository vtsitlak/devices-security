import { Injectable } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  generateData(): Observable<Dashboard[]> {
    const data: Dashboard[] = [];

    for (let i = 0; i <= 30; i++) {
      const d: Dashboard = {
        infectedAndroid: Math.round(Math.random() * Math.floor(100)),
        infectedPC: Math.round(Math.random() * Math.floor(100)),
        infectedIos: Math.round(Math.random() * Math.floor(100)),
        rootedAndroid: Math.round(Math.random() * Math.floor(100)),
        rootedPC: Math.round(Math.random() * Math.floor(100)),
        rooteddIos: Math.round(Math.random() * Math.floor(100)),
      };
      data.push(d);
    }

    return of(data).pipe(delay(2000));
  }

}
