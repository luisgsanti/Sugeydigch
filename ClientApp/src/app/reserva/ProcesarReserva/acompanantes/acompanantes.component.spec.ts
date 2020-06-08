import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanantesComponent } from './acompanantes.component';

describe('AcompanantesComponent', () => {
  let component: AcompanantesComponent;
  let fixture: ComponentFixture<AcompanantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompanantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompanantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
