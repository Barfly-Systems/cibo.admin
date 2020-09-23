import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginView } from './login.view';

describe('LoginView', () => {
  let component: LoginView;
  let fixture: ComponentFixture<LoginView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has username field', () => {
    let l = document.querySelector('#username');
    expect(l).toBeTruthy();
  })
});
