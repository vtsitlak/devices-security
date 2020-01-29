import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Details } from '../models/details';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  getDetails(): Observable<Details> {

    const details: Details = {
      installation: '10:12:23 20/01/2010',
      lastUpdate: '12:121:43 29/01/2010',
      name: 'Security App',
      version: '1.2.1',
      fileHash: 'file',
      permisions: ['permsion1', 'permision2'],
    };
    return of(details).pipe(delay(1000));
  }
}
