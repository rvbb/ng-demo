import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';
import { UpDownloadComponent } from './updown/updown.component';
import { GmapComponent } from './gmap/gmap.component';
import { ChartD3Component } from './chartd3/chartd3.component';

const routes: Routes = [{
  path: '',
  component: ReportComponent,
  children: [{
    path: 'updown',
    component: UpDownloadComponent,
  },
  {
    path: 'map',
    component: GmapComponent,
  },
  {
    path: 'chart',
    component: ChartD3Component
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full'
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }

export const routedComponents = [
  ReportComponent,
  ReportComponent,
  UpDownloadComponent,
  GmapComponent,
  ChartD3Component,
];
