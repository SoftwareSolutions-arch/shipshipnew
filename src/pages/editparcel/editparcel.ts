import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditparcelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editparcel',
  templateUrl: 'editparcel.html',
})
export class EditparcelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditparcelPage');
  }

  saveDetails(){
    // this.navCtrl.setRoot('HomePage');
    this.viewCtrl.dismiss();
  }

  deleteDetails(){
    // this.navCtrl.setRoot('HomePage');
    this.viewCtrl.dismiss();
  }
}
