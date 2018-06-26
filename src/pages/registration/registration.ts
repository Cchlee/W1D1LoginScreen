import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

import { Events } from 'ionic-angular';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  constructor(public navCtrl: NavController) {

  }
  navigateToProfile(){
    console.log("Going to Profile");
    this.navCtrl.push(ProfilePage);
  }
}
