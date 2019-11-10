import { NgModule } from '@angular/core';
import { routedComponents, PaymentRoutingModule } from './payment-routing.module';
import { VdsCommonModule } from '../@vdscommon/vdscommon.module';

@NgModule({
  imports: [
    PaymentRoutingModule,
    VdsCommonModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [        
  ]
})
export class PaymentModule {
}
