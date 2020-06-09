import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescuentosReservaComponent } from './descuentos-reserva.component';

describe('DescuentosReservaComponent', () => {
  let component: DescuentosReservaComponent;
  let fixture: ComponentFixture<DescuentosReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescuentosReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescuentosReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
