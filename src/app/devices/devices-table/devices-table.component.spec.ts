import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { DevicesTableComponent } from './devices-table.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('DevicesTableComponent', () => {
  let component: DevicesTableComponent;
  let fixture: ComponentFixture<DevicesTableComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevicesTableComponent],
      imports: [
        SharedModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(DevicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('datasource should initialized', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.dataSource).toBeTruthy();
  });

  it('applyFilter should  update the dataSoursw filter value', () => {
    component.applyFilter('test');
    fixture.detectChanges();
    expect(component.dataSource.filter).toBe('test');
  });

  it('linkToDetails should redirect you to devices detail page', fakeAsync(() => {
    const spy = spyOn(router, 'navigateByUrl');
    component.linkToDetails(1);
    tick();
    const url = spy.calls.first().args[0].toString();
    expect(url).toEqual('/devices/1');
  }));
});
