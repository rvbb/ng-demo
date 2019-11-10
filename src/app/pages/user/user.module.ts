import { NgModule } from '@angular/core';
import { UserRoutingModule, routedComponents } from './user-routing.module';
import { UserService } from './service/user.service';
import { VdsCommonModule } from '../@vdscommon/vdscommon.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    UserRoutingModule,
    VdsCommonModule,
    HttpClientModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers:[
    UserService
  ]
})
export class UserModule { 

}
