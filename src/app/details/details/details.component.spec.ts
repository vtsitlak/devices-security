import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [SharedModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.details).toBeTruthy();
  }));

  it('should update the loading state after loading data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.loading.value).toBeFalsy();
  }));
});
