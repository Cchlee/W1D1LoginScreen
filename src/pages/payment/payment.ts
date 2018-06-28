import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymenthistoryPage } from '../paymenthistory/paymenthistory';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  navigateToHistory() {
    console.log("Navigating");
    this.navCtrl.push(PaymenthistoryPage);
}

}
