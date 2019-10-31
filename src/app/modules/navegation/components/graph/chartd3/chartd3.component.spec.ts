import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chartd3Component } from './chartd3.component';

describe('Chartd3Component', () => {
  let component: Chartd3Component;
  let fixture: ComponentFixture<Chartd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chartd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chartd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
