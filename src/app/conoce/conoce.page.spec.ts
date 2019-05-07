import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocePage } from './conoce.page';

describe('ConocePage', () => {
  let component: ConocePage;
  let fixture: ComponentFixture<ConocePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
