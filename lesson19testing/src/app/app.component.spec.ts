/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

describe('App: CompleteGuideFinalWebpack', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(app.title).toBe('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(h1.textContent).toContain('');
    fixture.detectChanges();
    expect(h1.textContent).toContain(app.title);
    expect(app.title).toBe('app works!');
  }));
});
