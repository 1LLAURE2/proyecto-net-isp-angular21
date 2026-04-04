import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDesktop } from './clientes-desktop';

describe('ClientesDesktop', () => {
  let component: ClientesDesktop;
  let fixture: ComponentFixture<ClientesDesktop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesDesktop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesDesktop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
