import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    }, {
      path: 'report',
      loadChildren: './report/report.module#ReportModule'
    }, {
      path: 'payment',
      loadChildren: './payment/payment.module#PaymentModule'
    }
        // , {
    //   path: '**',
    //   component: NotFoundComponent
    // }
    , {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
