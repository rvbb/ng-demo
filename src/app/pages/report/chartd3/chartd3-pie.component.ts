import { Component, OnDestroy } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'ngx-d3-pie',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
})
export class D3PieComponent {
  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  showLabels = true;
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
