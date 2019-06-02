import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBalancePage } from './group-balance.page';

describe('GroupBalancePage', () => {
  let component: GroupBalancePage;
  let fixture: ComponentFixture<GroupBalancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupBalancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBalancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
