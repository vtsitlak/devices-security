import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app-routing.module';
import { Location } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';
import { Router } from '@angular/router';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        SharedModule,

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Threat fabric App'`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Threat fabric App');
  });

  it('navigate to "" redirects you to /devices', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/devices');
  }));

});
