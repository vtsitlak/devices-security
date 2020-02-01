import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChartsComponent } from './dashboard-charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardChartsComponent', () => {
  let component: DashboardChartsComponent;
  let fixture: ComponentFixture<DashboardChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChartsComponent ],
      imports: [ NgxChartsModule, BrowserAnimationsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
