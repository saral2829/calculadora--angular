import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraS9Component } from './calculadora-s9.component';

describe('CalculadoraS9Component', () => {
  let component: CalculadoraS9Component;
  let fixture: ComponentFixture<CalculadoraS9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraS9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraS9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
