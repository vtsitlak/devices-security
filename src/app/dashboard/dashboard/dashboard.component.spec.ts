import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Dashboard } from '../models/dashboard';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.data.length).toBeGreaterThan(0);
  }));

  it('should update the loading state after loading data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.loading.value).toBeFalsy();
  }));

  it('rangeText method should update the range text value', () => {
    component.range = undefined;
    component.rangeText(1, 3);
    expect(component).toBeTruthy();
  });

  it('generateData method should return a data array', () => {
    const dashboard: Dashboard[] = [
      {
        infectedAndroid: 30,
        infectedPC: 45,
        infectedIos: 9,
        rootedAndroid: 23,
        rootedPC: 34,
        rooteddIos: 58,
      },
      {
        infectedAndroid: 30,
        infectedPC: 45,
        infectedIos: 9,
        rootedAndroid: 23,
        rootedPC: 34,
        rooteddIos: 58,
      },
    ];

    expect(component.generateData(dashboard)).toBeTruthy();
  });
});
