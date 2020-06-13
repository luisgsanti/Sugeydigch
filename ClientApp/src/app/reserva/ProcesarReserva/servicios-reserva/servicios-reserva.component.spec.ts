import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosReservaComponent } from './servicios-reserva.component';

describe('ServiciosReservaComponent', () => {
  let component: ServiciosReservaComponent;
  let fixture: ComponentFixture<ServiciosReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
