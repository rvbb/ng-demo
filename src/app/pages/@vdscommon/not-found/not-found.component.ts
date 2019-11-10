import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vds-404',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(private spinnerService: SpinnerService, private router:Router) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }

  goToHome(){
    this.router.navigateByUrl("/pages/home");
  }
}
