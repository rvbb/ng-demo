import { Component, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'ngx-d3-line',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent {
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300,
        },
        {
          name: '2011',
          value: 8940,
        },
      ],
    },
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870,
        },
        {
          name: '2011',
          value: 8270,
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 5002,
        },
        {
          name: '2011',
          value: 5800,
        },
      ],
    },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
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
