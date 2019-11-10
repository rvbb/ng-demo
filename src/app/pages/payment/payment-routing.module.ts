import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';

const routes: Routes = [{
  path: '',
  component: PaymentComponent,
  children: [{
    path: 'external',
    component: ExternalComponent
  }, {
    path: 'internal',
    component: InternalComponent
  },
  {
    path: '',
    redirectTo: 'internal',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PaymentRoutingModule {}

export const routedComponents = [
  PaymentComponent,
  ExternalComponent,
  InternalComponent
];