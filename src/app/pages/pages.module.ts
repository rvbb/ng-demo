import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { ReportModule } from './report/report.module';
import { HomeModule } from './home/home.module';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    PagesRoutingModule,
    UserModule,
    PaymentModule,    
    ReportModule,
    HomeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ]
})
export class PagesModule {}
