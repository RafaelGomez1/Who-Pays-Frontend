import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOverviewPage } from './group-overview.page';

describe('GroupOverviewPage', () => {
  let component: GroupOverviewPage;
  let fixture: ComponentFixture<GroupOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
