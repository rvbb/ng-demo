import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'payment',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class PaymentComponent {

  constructor(private spinnerService: SpinnerService) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }
}
