/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('Component: User', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: Partial<UserService>;
  let dataService: Partial<DataService>;
  let el: DebugElement;

  class MockUserService {
    user = {
      name: 'John'
    };
  }class MockDataService {
    getDetails() {
      return of('Data');
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: DataService, useClass: MockDataService }
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;

    userService = TestBed.get(UserService);
    dataService = TestBed.get(DataService);
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    const comp = new UserComponent(new UserService, new DataService);
    comp.ngOnInit();
    expect(comp.user).toEqual({name: 'John'});
    expect(comp.user.name).toBe('John');
  });

  it('should display the user name if user is logged in', () => {
    const comp = new UserComponent(new UserService, new DataService);
    comp.ngOnInit();
    expect(comp.isLoggedIn).toBeFalsy(true);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    fixture.detectChanges();
    const pElement: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(pElement.textContent).toEqual('Please log in first');
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    el = fixture.debugElement;
    dataService = el.injector.get(DataService);
    spyOn(dataService, 'getDetails').and.callThrough();
    // если я правильно понял в момент инициации данных еще нет
    component.ngOnInit();
    expect(dataService.getDetails).toHaveBeenCalled();
    expect(component.data).toBe(undefined);
    expect(component.data).not.toBe('Data');
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    // by using whenStable()
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    // by using tick()
    fixture.detectChanges();
    tick(1500);
    expect(component.data).toBe('Data');
  }));
});
