import { Component } from '@angular/core';
import { NavController, NavParams, Item } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Chef1Page } from '../chef1/chef1';
import { Chef2Page } from '../chef2/chef2';
import { Chef3Page } from '../chef3/chef3';


@Component({
  selector: 'page-providers',
  templateUrl: 'providers.html',
})
export class ProvidersPage {

  public items: Array<String>;
  public item: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=["Guy Fieri", "Remy", "Ina Garten"];
  }

  itemSelected(item){
    this.item=item
    console.log(this.item);
    if (this.item == "Guy Fieri"){
      this.navCtrl.push(Chef1Page);
    }
    if (this.item == "Remy"){
      this.navCtrl.push(Chef2Page);
    }
    console.log(this.item);
    if (this.item == "Ina Garten"){
      this.navCtrl.push(Chef3Page);
    }
  }

}
