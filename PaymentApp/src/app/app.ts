import { Component, signal } from '@angular/core';
import { PaymentDetails } from './payment-details/payment-details';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaymentDetails, FormsModule, ToastrModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('PaymentApp');
}
