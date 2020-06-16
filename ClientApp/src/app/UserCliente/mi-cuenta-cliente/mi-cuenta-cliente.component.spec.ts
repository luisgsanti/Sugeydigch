import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCuentaClienteComponent } from './mi-cuenta-cliente.component';

describe('MiCuentaClienteComponent', () => {
  let component: MiCuentaClienteComponent;
  let fixture: ComponentFixture<MiCuentaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiCuentaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiCuentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
