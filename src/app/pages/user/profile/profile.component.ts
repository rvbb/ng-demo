import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-profile',
  styleUrls: ['./profile.component.scss'],
  templateUrl: './profile.component.html',
})

export class ProfileComponent {
  transactions:{};
  transSubs:Subscription;

  constructor(private service:UserService){
    
    this.transSubs = this.service.getTransactions().subscribe(transactions => {
      this.transactions = transactions;
      console.log("user profile", this.transactions);
    });
  }
  
}
