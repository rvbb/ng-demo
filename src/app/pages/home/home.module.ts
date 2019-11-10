import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { VdsCommonModule } from '../@vdscommon/vdscommon.module';

@NgModule({
  imports: [    
    VdsCommonModule    
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
