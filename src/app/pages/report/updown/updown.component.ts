import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'vds-updownload',
  templateUrl: "./updown.component.html",
  styleUrls: ['./updown.component.scss']  
})
export class UpDownloadComponent {

  constructor(private spinnerService: SpinnerService) {
  }

  ngAfterViewInit() {
    this.spinnerService.hide();
  }

}
