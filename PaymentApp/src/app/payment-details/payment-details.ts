import { Component,OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail';
import { NgFor } from '@angular/common';
import { PaymentDetailsForm } from '../payment-details/payment-details-form/payment-details-form';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [NgFor,PaymentDetailsForm],
  templateUrl: './payment-details.html',
  styleUrl: './payment-details.scss'
})
export class PaymentDetails implements OnInit {
  constructor(public service: PaymentDetailService,private toastr: ToastrService) { 
    this.service.refreshList();
  }
  ngOnInit():void {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({},pd);
  }

  onDelete(id: number) {
    this.service.deletePaymentDetail(id).subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[];
        this.toastr.error('Deleted successfully', 'Deleted');
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
