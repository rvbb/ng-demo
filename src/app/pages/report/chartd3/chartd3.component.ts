import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { ConfigService } from '../../services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-d3',
  styleUrls: ['./chartd3.component.scss'],
  templateUrl: './chartd3.component.html',
  providers: [ConfigService]
})
export class ChartD3Component {

  constructor(private spinnerService: SpinnerService, private router: Router) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }

  goHome() {
    this.router.navigateByUrl("/pages/home");
  }
}
