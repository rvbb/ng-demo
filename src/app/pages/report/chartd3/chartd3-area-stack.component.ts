import { Component, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'ngx-d3-area-stack',
  template: `
    <ngx-charts-area-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-area-chart>
  `,
})
export class D3AreaStackComponent {
  multi = [{
    name: 'Germany',
    series: [{
        name: '2010',
        value: 7300000,
      }, {
        name: '2011',
        value: 8940000,
      }],
  }, {
    name: 'USA',
    series: [{
        name: '2010',
        value: 7870000,
      }, {
        name: '2011',
        value: 8270000,
      }],
  }, {
    name: 'France',
    series: [{
        name: '2010',
        value: 5000002,
      }, {
        name: '2011',
        value: 5800000,
      }],
  }];
  showLegend = true;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  configSubscription: any;
  constructor(config: ConfigService) {
    this.configSubscription = config.getConfig().subscribe(vars => {
      console.log(vars);
      this.colorScheme = {
        domain: [vars.primaryLight, vars.infoLight, vars.successLight, vars.warningLight, vars.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.configSubscription.unsubscribe();
  }
}
