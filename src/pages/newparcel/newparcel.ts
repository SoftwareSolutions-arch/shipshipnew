import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newparcel',
  templateUrl: 'newparcel.html',
})
export class NewparcelPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewparcelPage');
  }

  addParcel(){
    // this.navCtrl.setRoot('HomePage');
    this.viewCtrl.dismiss();

  }
  closeMenu(){
    this.viewCtrl.dismiss();
    // this.navCtrl.setRoot('HomePage');
  }
}
