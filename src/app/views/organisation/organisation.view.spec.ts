import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationView } from './organisation.view';

describe('OrganisationView', () => {
  let component: OrganisationView;
  let fixture: ComponentFixture<OrganisationView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisationView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
