import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPage } from './list-view.page';

describe('ListViewPage', () => {
  let component: ListViewPage;
  let fixture: ComponentFixture<ListViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
