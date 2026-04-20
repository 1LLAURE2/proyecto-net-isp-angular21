import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosFormModal } from './gastos-form-modal';

describe('GastosFormModal', () => {
  let component: GastosFormModal;
  let fixture: ComponentFixture<GastosFormModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GastosFormModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GastosFormModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
