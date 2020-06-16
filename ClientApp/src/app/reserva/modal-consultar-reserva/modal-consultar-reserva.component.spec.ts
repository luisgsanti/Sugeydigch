import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultarReservaComponent } from './modal-consultar-reserva.component';

describe('ModalConsultarReservaComponent', () => {
  let component: ModalConsultarReservaComponent;
  let fixture: ComponentFixture<ModalConsultarReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConsultarReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
