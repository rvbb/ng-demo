import { Component } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.scss'],
  providers: [SpinnerService]
})
export class HomeComponent {

  private spinnerSubscription: Subscription;

  constructor(private spinnerService: SpinnerService) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }

  showSpinner() {
    this.spinnerService.show();
  }

  ngOnInit() {
    // this.spinnerSubscription = this.spinnerService.progressState
    //   .subscribe((state: ProgressState) => {
    //     state.display ? this.spinnerService.show() : this.spinnerService.hide();
    //   });
  }
  ngOnDestroy() {
    // this.spinnerSubscription.unsubscribe();
  }
}
