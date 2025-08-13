import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  imports: [FormsModule],
  templateUrl: './payment-details-form.html',
  styleUrl: './payment-details-form.scss'
})
export class PaymentDetailsForm {
  
  constructor(public service: PaymentDetailService,private toastr:ToastrService) { }
  
  onSubmit(form: NgForm) {
    this.service.formsubmitted = true;
    if (form.valid) {
      if (this.service.formData.paymentDetailId == 0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[];
        this.service.resetFormData(form);
        this.toastr.success('Inserted successfully', 'Success');
      },
      error: err => {
        console.log(err)
      }
    })
  }

  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[];
        this.service.resetFormData(form);
        this.toastr.info('Updated successfully', 'Update');
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
