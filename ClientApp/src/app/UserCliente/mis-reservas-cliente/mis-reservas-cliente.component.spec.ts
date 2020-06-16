import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisReservasClienteComponent } from './mis-reservas-cliente.component';

describe('MisReservasClienteComponent', () => {
  let component: MisReservasClienteComponent;
  let fixture: ComponentFixture<MisReservasClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisReservasClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisReservasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
