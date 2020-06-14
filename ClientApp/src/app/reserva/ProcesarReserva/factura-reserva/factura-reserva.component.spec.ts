import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaReservaComponent } from './factura-reserva.component';

describe('FacturaReservaComponent', () => {
  let component: FacturaReservaComponent;
  let fixture: ComponentFixture<FacturaReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
