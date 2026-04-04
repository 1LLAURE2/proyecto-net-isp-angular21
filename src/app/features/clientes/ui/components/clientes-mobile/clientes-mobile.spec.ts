import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesMobile } from './clientes-mobile';

describe('ClientesMobile', () => {
  let component: ClientesMobile;
  let fixture: ComponentFixture<ClientesMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
