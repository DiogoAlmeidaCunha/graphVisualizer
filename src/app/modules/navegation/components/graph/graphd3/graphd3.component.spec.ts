import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphd3Component } from './graphd3.component';

describe('Graphd3Component', () => {
  let component: Graphd3Component;
  let fixture: ComponentFixture<Graphd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Graphd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
