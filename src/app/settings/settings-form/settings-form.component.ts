import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SettingsService } from '../services/settings.service';
import { AppSettings } from '../models/settings';


@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent implements OnInit {

  @Input() settings: AppSettings;
  settingsForm;

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
  ) {
  }

  ngOnInit() {

    this.settingsForm = this.formBuilder.group({
      notifications: this.settings.notifications,
      autoUpdate: this.settings.autoUpdate,
      recoveryEmail: new FormControl(this.settings.recoveryEmail, [Validators.required, Validators.email]),
      securityQuestion: new FormControl(this.settings.securityQuestion, [Validators.required]),
      timeZone: this.settings.timeZone.toString(),
      languange: this.settings.languange,
    });
    // dynamically update settings
    this.settingsForm.valueChanges.subscribe((s: AppSettings) => {
      s.timeZone = Number(s.timeZone);
      this.settingsService.updateSettings(s);
    });
  }
}


