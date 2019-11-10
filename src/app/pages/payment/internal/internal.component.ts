import { Component } from '@angular/core';

@Component({
  selector: 'payment-internal',
  styleUrls: ['./internal.component.scss'],
  templateUrl: './internal.component.html',
})
export class InternalComponent {
  
  doASonthing(){
    console.log('do something');
  }
}
