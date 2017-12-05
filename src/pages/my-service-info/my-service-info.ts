import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyServiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-service-info',
  templateUrl: 'my-service-info.html',
})
export class MyServiceInfoPage {

  //-data
  DataService:any;

  //-vista
  serviceCode:string;
  status:string;
  imgUser:string;
  nameUser:string;
  addresUser:string;
  phoneUser:string;
  info:string;
  sale:string;
  idUser:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DataService = this.navParams.get('datos');
    console.log(this.DataService);
    this.loadView();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyServiceInfoPage');
  }

  loadView(){
    this.serviceCode=this.DataService.id;
    this.sale=this.DataService.sale;
    this.status=this.DataService.status;
    this.idUser=this.DataService.DataUser.id;
    this.imgUser=this.DataService.DataUser.img;
    this.nameUser=this.DataService.DataUser.nameUser;
    this.addresUser=this.DataService.DataUser.address;
    this.phoneUser=this.DataService.DataUser.tel;
    this.info = this.DataService.info;
  }

}
