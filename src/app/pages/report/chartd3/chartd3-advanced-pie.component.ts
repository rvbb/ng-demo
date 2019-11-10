import { Component, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'ngx-d3-advanced-pie',
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent {
  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];
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
