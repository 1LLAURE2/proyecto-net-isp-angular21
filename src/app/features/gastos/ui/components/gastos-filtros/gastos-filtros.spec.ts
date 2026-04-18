import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosFiltros } from './gastos-filtros';

describe('GastosFiltros', () => {
  let component: GastosFiltros;
  let fixture: ComponentFixture<GastosFiltros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastosFiltros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosFiltros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
