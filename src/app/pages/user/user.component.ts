import {Component, OnDestroy} from '@angular/core';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'vds-user',  
  template: `<router-outlet></router-outlet>`
})
export class UserComponent {

  constructor(private spinnerService: SpinnerService) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }
}
