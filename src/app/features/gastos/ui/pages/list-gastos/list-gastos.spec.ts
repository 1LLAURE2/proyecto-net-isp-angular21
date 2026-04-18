import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGastos } from './list-gastos';

describe('ListGastos', () => {
  let component: ListGastos;
  let fixture: ComponentFixture<ListGastos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGastos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGastos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
