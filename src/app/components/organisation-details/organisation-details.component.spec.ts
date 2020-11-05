import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiastionDetailsComponent } from './organiastion-details.component';

describe('OrganiastionDetailsComponent', () => {
  let component: OrganiastionDetailsComponent;
  let fixture: ComponentFixture<OrganiastionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganiastionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganiastionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
