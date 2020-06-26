import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Api, Items, User } from '../../providers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilProvider } from '../../providers/util/util';
import { animate, state, style, transition, trigger } from "@angular/animations";

declare var google;

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  animations: [
    trigger('slideIn', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(300, style({ height: 0 }))
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(300, style({ height: '*' }))
      ])
    ])
  ]
})
export class DetailsPage {
  trackinfo:any;
  trackingdetails: any;
  imageslogo: string;
  isFullMap: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public user: Api,
    private platform: Platform,
    private http: HttpClient,
    public util: UtilProvider,
  ) {
  }

  ngOnInit() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 24.7108317, lng: 46.6601538 },
      zoom: 15
    });
  }

  ionViewDidLoad(){
    this.orderIddetails();
  }

  // get order id details through our User service
  orderIddetails() {
    let params = {
      tracking_number: "1Z74A08E0317341984",
      carrier_code: "ups"
    };

    let headers = new HttpHeaders({
      "x-rapidapi-host": "order-tracking.p.rapidapi.com",
      "x-rapidapi-key": "1f58487bbfmshb212023d10994b0p131f71jsna46d7c9c3ddc"
     
    })
    this.util.presentLoading();
    this.user.categoriesdetails(params, { headers: headers }).then((result) => {
      this.util.dismissLoading();
      this.trackingdetails=result['data']['items'];
      this.trackinfo=result['data']['items'][0]['origin_info']['trackinfo'];
      if(result['data']['items'][0]['origin_info']['carrier_code']="ups"){
        this.imageslogo="../../assets/img/UPS.png";
      }
    })
      .catch(error => {
        console.log(error);
        // this.util.presentToast(error['error'][0]);
      })
  }

  showFullMap() {
    this.isFullMap = true;
  }

  toggleFullMap() {
    this.isFullMap ? this.isFullMap = false : this.isFullMap = true;
  }
}