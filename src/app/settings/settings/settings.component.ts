import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../models/settings';
import { SettingsService } from '../services/settings.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settings: AppSettings = undefined;
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);
  loading$: Observable<boolean> = this.loading.asObservable();

  constructor(
    private settingsService: SettingsService,
  ) { }

  ngOnInit() {

    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.loading.next(false);
    });
  }

}
