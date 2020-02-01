import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { DevicesItemComponent } from './devices-item.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('DevicesItemComponent', () => {
  let component: DevicesItemComponent;
  let fixture: ComponentFixture<DevicesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesItemComponent ],
      imports: [ SharedModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the loading state after loading data', fakeAsync(() => {
    component.ngOnInit();
    tick(5000);
    expect(component.loading.value).toBeFalsy();
  }));
});
