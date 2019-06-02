import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupExpensesPage } from './group-expenses.page';

describe('GroupExpensesPage', () => {
  let component: GroupExpensesPage;
  let fixture: ComponentFixture<GroupExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupExpensesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
