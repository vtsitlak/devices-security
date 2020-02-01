import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SettingsFormComponent } from './settings-form.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AppSettings } from '../models/settings';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const settings: AppSettings = {
  notifications: true,
  autoUpdate: true,
  recoveryEmail: 'test@mail.com',
  securityQuestion: 'guess',
  timeZone: 1,
  languange: 'English',
};

describe('SettingsFormComponent', () => {
  let component: SettingsFormComponent;
  let fixture: ComponentFixture<SettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsFormComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFormComponent);
    component = fixture.componentInstance;
    component.settings = settings;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize settings form', fakeAsync(() => {
    component.ngOnInit();
    tick(3000);
    expect(component.settingsForm).toBeTruthy();
  }));
});
