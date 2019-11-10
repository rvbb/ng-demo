import { Component, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'ngx-d3-bar',
  template: `
    <ngx-charts-bar-vertical
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarComponent {

  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
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
