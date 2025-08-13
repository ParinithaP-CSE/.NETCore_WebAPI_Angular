import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsForm } from './payment-details-form';

describe('PaymentDetailsForm', () => {
  let component: PaymentDetailsForm;
  let fixture: ComponentFixture<PaymentDetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentDetailsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDetailsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
