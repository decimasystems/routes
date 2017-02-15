/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MariusComponent } from './marius.component';

describe('MariusComponent', () => {
  let component: MariusComponent;
  let fixture: ComponentFixture<MariusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MariusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MariusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
