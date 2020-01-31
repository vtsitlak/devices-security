import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { SettingsService } from './services/settings.service';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { SharedModule } from '../shared/shared/shared.module';

export const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent, SettingsFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(settingsRoutes),
  ],
  providers: [SettingsService, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
})
export class SettingsModule { }
