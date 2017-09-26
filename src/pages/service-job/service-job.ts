import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
/**
 * Generated class for the ServiceJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-job',
  templateUrl: 'service-job.html',
})
export class ServiceJobPage {

  //-- default
  imgUserDefault ="assets/img/User/UserService.png";

  //-load 
  Datos:any;
  DataService:any;
  DataUser:any;
  user:any;
  
  //-load data
  datasService:any;
  dataService:any;
  keyOffer:any;
  worker:any;
  userActual:any;
  sale:any;
  information:any;
  serviceCode:any;

  //-datos BD
  status="Service in progress";

  //--load vista
  imgUser:any;
  nameUser:any;
  addresUser:any;
  phoneUser:any;

  //-tempoaral animaicion
  objNodeTimer:any;
  segundos:any=10;
  cont=1;
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private saleService: SaleService , private offerService : OfferService,
  ) {
    //-ej
    this.serviceCode = '0986548605';
    //-load data
    this.Datos = this.navParams.get('datos');
    console.log(this.Datos);
    this.DataService =  this.navParams.get('service');
    this.DataUser = this.navParams.get('user');
    this.user = this.DataService['idUser'];
    this.serviceCode = this.DataService['idOff'].substring(6);
    console.log(this.user);
    console.log(this.DataService);
    this.userInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceJobPage');
  }
  goServiceOk(){
    // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    // console.log(DataService);
  	// this.navCtrl.setRoot(,DataService);
  	this.navCtrl.setRoot('ServiceOkPage');
  }
  setStatus(){
    this.saleService.setStatus(this.userActual,this.keyOffer,'Finalized');
    this.offerService.setStatus(this.keyOffer,'Finalized');
   }
  userInfo(){
    // this.imgUser=this.imgUserDefault;
    // this.nameUser = 'Alejandro Albello';
    // this.addresUser = 'Calle 123 #45 - 65 Ed Miramar Apartamento BB Torre 2';
    // this.phoneUser = '(+57) 5-300 811 45 65';
    this.nameUser = this.DataUser['nameUser'];
    this.addresUser= this.DataUser['address'];
    this.phoneUser = this.DataUser['tel'];
    this.imgUser=this.DataUser['img'];
  }

  //--- timer
  startTimer(){
    this.objNodeTimer=setInterval( () => this.timer(),1000);
  }

  private timer(){
    // console.log(this.segundos);
    // console.log(this.status);
    if(this.status == 'Service completed' && this.segundos == 1){ 
        clearInterval(this.objNodeTimer);
    }else{
      if(--this.segundos< 0){
        this.segundos=10;
      }
    }
  }
}
