/**
 * @license
 * Copyright Viettel Digital Corps. All Rights Reserved.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from './pages/services/general.service';
import { ReportService } from './pages/services/report.service';
import { CrudService } from './pages/services/crud.service';
import { UserModule } from './pages/user/user.module';
import { HomeModule } from './pages/home/home.module';
import { SpinnerService } from './pages/services/spinner.service';
import { PaymentModule } from './pages/payment/payment.module';
import { VdsCommonModule } from './pages/@vdscommon/vdscommon.module';
import { ConfigService } from './pages/services/config.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    HttpClientModule,

    AppRoutingModule,
    UserModule,
    HomeModule,
    PaymentModule,
    // more module

    NgbModule.forRoot(),
    VdsCommonModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/v2' },
    GeneralService,
    ReportService,
    CrudService,
    SpinnerService,
    ConfigService
    // more service here    
  ],
})
export class AppModule {
}
