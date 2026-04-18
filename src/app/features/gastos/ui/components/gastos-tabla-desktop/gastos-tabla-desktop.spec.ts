import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosTablaDesktop } from './gastos-tabla-desktop';

describe('GastosTablaDesktop', () => {
  let component: GastosTablaDesktop;
  let fixture: ComponentFixture<GastosTablaDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastosTablaDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosTablaDesktop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
