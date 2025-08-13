import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from '../../environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  url: string = environment.apiBaseUrl + '/PaymentDetails';
  list: PaymentDetail[] = [];
  formData: PaymentDetail = new PaymentDetail();
  formsubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.list=res as PaymentDetail[];
      },
      error:err=>{console.log(err)}
    })
  }

  postPaymentDetail() {
    return this.http.post(this.url, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(this.url+'/'+this.formData.paymentDetailId, this.formData);
  }

  resetFormData(form: NgForm) {
    form.form.reset();
    this.formsubmitted = false;
    this.formData = new PaymentDetail();
  }

  deletePaymentDetail(id: number) {
    if (confirm('Are you sure you want to delete this rescord?')) {
      return this.http.delete(this.url + '/' + id);
    }
    return EMPTY;
  }
}
