import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFileUpload } from './custom-file-upload';

describe('CustomFileUpload', () => {
  let component: CustomFileUpload;
  let fixture: ComponentFixture<CustomFileUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFileUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFileUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
