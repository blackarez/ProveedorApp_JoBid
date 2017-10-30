import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';
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
  
  //-datos BD
  status="Service in progress";
  
  //-load 
  Datos:any;
  DataService:any;
  DataUser:any;
  user:any;
  
  keyOffer:any;
  userActual:any;
  information:any;
  serviceCode:any;


  //--load vista
  imgUser:any;
  nameUser:any;
  addresUser:any;
  phoneUser:any;

  //-tempoaral animaicion
  objNodeTimer:any;
  segundos:any=10;
  cont=1;

  //-subs
  OfferUserLocationSubs:any;
  OfferProviderLocationSubs:any;

 //-map
 Userlat:any=37.09024;
 Userlng:any=-95.71289100000001;
  zom: number = 14;
  // providerLatitud:any;
  // providerLongitud:any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private saleService: SaleService , private offerService : OfferService,
    private professionalsService:ProfessionalsService,
  ) {
    //-ej
    this.serviceCode = '0986548605';
    //-load data
    this.Datos = this.navParams.get('datos');
    console.log(this.Datos);
    this.DataService =  this.navParams.get('service');
    this.DataUser = this.navParams.get('user');
    this.user = this.DataService['idUser'];
    this.keyOffer=this.DataService['idOff'];
    this.serviceCode = this.DataService['idOff'].substring(6);
    console.log(this.user);
    console.log(this.DataService);
    //-localStorage
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.userActual);
    this.getUsersLocation();
    this.userInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceJobPage');
  }
  goServiceOk(){
    this.setStatusService();
    // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    // console.log(DataService);
  	// this.navCtrl.setRoot(,DataService);
  	this.navCtrl.setRoot('ServiceOkPage');
  }
  setStatusService(){
    console.log('set2');
    console.log(this.userActual);
    console.log(this.keyOffer);
    this.professionalsService.setContractStatus(this.userActual,this.keyOffer,'Finalized');
    this.saleService.setStatus(this.user,this.keyOffer,'Finalized');
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
  getUsersLocation(){
    this.OfferUserLocationSubs = this.offerService.getOfferUserLocation(this.keyOffer).subscribe(
      (LocationUser)=>{
        console.info(LocationUser);        
        this.Userlat =LocationUser.latitud;
        this.Userlng =LocationUser.longitud;
        console.log(this.Userlat);
        console.log(this.Userlng);
        this.OfferUserLocationSubs.unsubscribe();
      }
    );
    // this.OfferProviderLocationSubs = this.offerService.getOfferProviderLocation(this.keyOffer).subscribe(
    //   (LocationProvider)=>{
    //     console.info(LocationProvider);        
    //     this.providerLatitud =LocationProvider.latitud;
    //     this.providerLongitud =LocationProvider.longitud;
    //     console.log(this.providerLatitud);
    //     console.log(this.providerLongitud);
    //     this.OfferProviderLocationSubs.unsubscribe();
    //   }
    // );
  }
}
