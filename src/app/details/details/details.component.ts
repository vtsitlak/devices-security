import { Component, OnInit } from '@angular/core';
import { Details } from '../models/details';
import { BehaviorSubject, Observable } from 'rxjs';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details: Details;
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private detailsService: DetailsService,
  ) { }

  ngOnInit() {
    this.detailsService.getDetails().subscribe(details => {
      this.details = details;
      this.loading.next(false);
    });
  }
}
