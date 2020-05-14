import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarHabitacionesComponent } from './consultar-habitaciones.component';

describe('ConsultarHabitacionesComponent', () => {
  let component: ConsultarHabitacionesComponent;
  let fixture: ComponentFixture<ConsultarHabitacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarHabitacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
