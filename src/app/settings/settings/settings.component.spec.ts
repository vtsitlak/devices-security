import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        SharedModule,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the settings from service', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.settings).toBeTruthy();
  }));

  it('should update the loading state after loading settings', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.loading.value).toBeFalsy();
  }));
});
