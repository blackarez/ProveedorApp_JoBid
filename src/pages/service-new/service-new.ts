import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


// import { SaleService } from '../../services/sale.service';
// import { OfferService } from '../../services/offer.service';
/**
 * Generated class for the ServiceNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-new',
  templateUrl: 'service-new.html',
})
export class ServiceNewPage {

  //-- default
  imgUserDefault ="assets/img/User/UserService.png";
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
  status="Waiting for the professional";

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
    // private saleService: SaleService , private offerService : OfferService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceNewPage');
  
    // this.datasService = this.navParams.get('datos');
    // this.dataService = this.datasService['dataService'];
    // this.keyOffer = this.datasService['offer']; 
    // this.worker = this.datasService['win']; 
    // this.userActual = localStorage.getItem('verificacion');
    // this.sale=this.worker['offer'];
    // this.information= this.dataService['Clasificacion']['informacion']['moreInformation'];
    // this.serviceCode = this.keyOffer.substring(6);
    // console.log(this.datasService);
    // console.log(this.dataService);
    // console.log(this.keyOffer);
    // console.log(this.worker);
    // console.log(this.userActual);
    // this.getProfessionals(this.worker['id']);
    // this.saleService.getStatus(this.userActual,this.keyOffer).subscribe((resul)=>{
    //   console.log(resul);
    //   console.log(resul['$value']);
    //   this.status = resul['$value'];
    //   if(resul['$value'] == 'In progress'){
    //     this.status = 'Service in progress';
    //   }
    //   if(resul['$value'] == 'Finalized'){
    //     this.status = 'Service completed';
    //   }
    // });
    this.serviceCode = '0986548605';
    //-provicional
    // this.startTimer()
    
    this.userInfo();
  }
  goServiceJob(){
    // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    // console.log(DataService);
  	// this.navCtrl.setRoot(,DataService);
  	this.navCtrl.setRoot('ServiceJobPage');
  }

  userInfo(){
    this.imgUser=this.imgUserDefault;
    this.nameUser = 'Alejandro Albello';
    this.addresUser = 'Calle 123 #45 - 65 Ed Miramar Apartamento BB Torre 2';
    this.phoneUser = '(+57) 5-300 811 45 65';
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
