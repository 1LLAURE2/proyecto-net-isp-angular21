import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPagos } from './list-pagos';

describe('ListPagos', () => {
  let component: ListPagos;
  let fixture: ComponentFixture<ListPagos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPagos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPagos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
