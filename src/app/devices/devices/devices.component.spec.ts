import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DevicesComponent } from './devices.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('DevicesComponent', () => {
  let component: DevicesComponent;
  let fixture: ComponentFixture<DevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [DevicesComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.devices.length).toBeGreaterThan(10);
  }));

  it('should update the loading state after loading data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.loading.value).toBeFalsy();
  }));
});
