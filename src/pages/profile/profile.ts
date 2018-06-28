import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProvidersPage } from '../providers/providers';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }
  navigateToHome(){
    console.log("Navigating");
    this.navCtrl.push(HomePage);
  }

  navigateToProviders(){
    this.navCtrl.push(ProvidersPage);
  }

  navigateToPayment(){
    this.navCtrl.push(PaymentPage);
  }

}
