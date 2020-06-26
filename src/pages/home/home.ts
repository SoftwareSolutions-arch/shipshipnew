import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  inputbox: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  editParcel(){
    this.navCtrl.push('EditparcelPage');
  }

  addNewParcel(){
    this.navCtrl.push('NewparcelPage');
  }

  openDetailpage(){
    this.navCtrl.push('DetailsPage');
  }


  searchbox() {
    console.log("hello")
    this.inputbox = !this.inputbox;
  }
}
