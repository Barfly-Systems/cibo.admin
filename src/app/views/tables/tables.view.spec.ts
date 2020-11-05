import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesView } from './tables.view';

describe('TablesView', () => {
  let component: TablesView;
  let fixture: ComponentFixture<TablesView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
