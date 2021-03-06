import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    public email: string;
    public password: string;

    constructor(public navCtrl: NavController) {
        this.email = "...";
    }

    navigateToProfile() {
        console.log("Going to Profile");
        this.navCtrl.push(ProfilePage);
    }

    navigateToRegistration() {
        console.log("Navigating");
        this.navCtrl.push(RegistrationPage);
    }

}
