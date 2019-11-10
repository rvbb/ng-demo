import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'gmap',
  styleUrls: ['./gmap.component.scss'],
  templateUrl: "gmap.component.html"
})
export class GmapComponent {

  lng = 105.827151
  lat = 21.030083; 

  constructor(private spinnerService: SpinnerService) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }
}
