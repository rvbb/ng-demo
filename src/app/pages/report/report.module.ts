import { NgModule } from '@angular/core';
import { routedComponents, ReportRoutingModule } from './report-routing.module';
import { AgmCoreModule } from '@agm/core';
import { ChartModule } from 'angular2-chartjs';
import { D3PieComponent } from './chartd3/chartd3-pie.component';
import { D3LineComponent } from './chartd3/chartd3-line.component';
import { D3AdvancedPieComponent } from './chartd3/chartd3-advanced-pie.component';
import { D3PolarComponent } from './chartd3/chartd3-polar.component';
import { D3AreaStackComponent } from './chartd3/chartd3-area-stack.component';
import { D3BarComponent } from './chartd3/chartd3-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VdsCommonModule } from '../@vdscommon/vdscommon.module';
import { ConfigService } from '../services/config.service';

@NgModule({
  imports: [    
    ReportRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD385mf1Dgw8eL6gQvvxQ5f18ZUrFZjGU0',
      libraries: ['places'],
    }),    
    ChartModule,
    NgxChartsModule,
    VdsCommonModule
  ],
  declarations: [
    ...routedComponents,
    D3AdvancedPieComponent,
    D3LineComponent,
    D3PieComponent,
    D3PolarComponent,
    D3AreaStackComponent,
    D3BarComponent
  ],
  providers: [
    
  ],
})
export class ReportModule { }
