import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SaleService } from '../../services/sale.service';

/**
 * Generated class for the ServiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-info',
  templateUrl: 'service-info.html',
})
export class ServiceInfoPage {
  //-data
  DataService:any= [];
  userActual:any;
  //-data view
  imagenUser:any;
  offer:any;
  userName:any;
  info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private saleService: SaleService,
  ) {
    this.DataService = this.navParams.get('datos');
    console.log(this.DataService);
    this.callInfo();
    console.log(localStorage);
    this.userActual= localStorage.getItem('verificacion');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceInfoPage');
  }
  goSale(){
    this.saleService.setSaleProvider(this.DataService.idUser,this.DataService.idOff,this.userActual,'-');
    let Data = {'datos':this.DataService};
    this.navCtrl.push('ServiceSalePage',Data);
  }

  callInfo(){
    this.imagenUser = this.DataService.img;
    this.offer = this.DataService.sale;
    this.userName = this.DataService.name;
    this.info = this.DataService.info;
  }
}
