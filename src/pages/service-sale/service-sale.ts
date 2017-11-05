import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform} from 'ionic-angular';

import { ProfessionalsService } from '../../services/professionals.service';
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';


import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ServiceSalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-sale',
  templateUrl: 'service-sale.html',
})
export class ServiceSalePage {
  //-data
  DataService:any=[];
  Workers:any=[];
  userActual:any;
  newOffer:any;
  
  //--valiables por defecto provider
  imgJobDefault ="assets/img/professions/cleaning.png";
  galleryJobDefault ="assets/img/gallery.png";
  //-variables por defecto service
  imgServiceDefault ="assets/img/User/FotoServiceInfo.JPG";
  //-final offer
  MenosPrecio:any;
  //--sale
  maxOffer:any;
  myOffer:any;
  
  //--timer
  segundos:number = 0;
  minutos:number = 3;
  contador:string;
  showContador: boolean = true;
  objNodeTimer:any;
  NumeroContador:number = 1;

  //-- geoLocation
  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 16;
  
  //--subs
  timerSubs:any;
  saleSub:any;

  //--disable btn
  offerDisable:boolean=true;
  exitDisable:boolean=false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public professionalsService : ProfessionalsService,
    private geo: Geolocation, private platform: Platform,
    private saleService: SaleService,  
    private offerService: OfferService,  
  ) {
    this.DataService = this.navParams.get('datos');
    //-load only
    // this.DataService = {"name":"Angel","img":"assets/img/User/UserService.png","sale":"179","infoShow":"FADFASD...","info":"FADFASD","idOff":"offer_1509549987105","idUser":"user_1509139021478"};
    //-fin load only
    
    console.log(this.DataService);
    console.log(JSON.stringify(this.DataService));
    this.userActual= localStorage.getItem('verificacion');
    this.getUserLocationGeolocation();
    this.loadView();
    this.getSale();
    this.getTimer();
    this.startTimer();
    this.contador = '0'+this.minutos+':'+'0'+this.segundos;
    }
    
    ionViewDidLoad() {
      console.log('ionViewDidLoad ServiceSalePage');
      // console.log(localStorage);
}

loadView(){
  this.maxOffer = this.DataService.sale;
}

newOfferProvider(){
  if(this.MenosPrecio > Number(this.newOffer) ){
    // console.log(Number(this.newOffer));
    this.myOffer =  Number(this.newOffer);
    // console.log(this.myOffer);
    this.exitDisable = true;
    this.saleService.setSaleProvider(this.DataService.idUser,this.DataService.idOff,this.userActual,this.newOffer);
  }else{
    // alert('The offer must be less than the current');
    this.offerError();
  }
  // this.navCtrl.setRoot('ServiceWinPage');
}

goServiceWin(){
  console.info('goServiceWin');
  this.offerService.setOfferProviderLocation(this.DataService.idOff,{'latitud':this.lat,'longitud':this.lng});
  //- saved provider contract
  this.offerService.setProvider(this.DataService.idOff,this.userActual);
  this.saleService.setProvider(this.DataService.idUser,this.DataService.idOff,this.userActual);
  
  this.DataService['sale']=this.myOffer;
  let dataService = {'datos':this.DataService};
  console.log(dataService);
  this.navCtrl.setRoot('ServiceWinPage',dataService);
  // this.navCtrl.setRoot('ServiceWinPage');
}

goIndex(){
  
//--set status offer y sale
// console.info('Offer -Cancelled');
// this.saleService.setStatus(this.userActual,this.keyOffer,'Cancelled');
// this.offerService.setStatus(this.keyOffer,'Cancelled');
//   clearInterval(this.objNodeTimer);
  this.navCtrl.setRoot('ShowPage');
}


//--- timer
startTimer(){
  this.objNodeTimer=setInterval( () => this.timer(),1000);
}

private timer(){
  if(this.minutos == 0 && this.segundos == 1){ 
  // if(this.minutos == 1 && this.segundos == 50 ){
     
    //this.showContador = false;
    if(this.NumeroContador == 2){
      clearInterval(this.objNodeTimer);
      this.showContador = false;
      this.ganador();
    }else{
      this.minutos = 2;
      this.segundos = 0;
      this.NumeroContador = 2;
      this.offerDisable = false;
      this.showContador = false;
    }
  }else{
    if(--this.segundos< 0){
      this.segundos = 59;
      if(--this.minutos< 0){
        //this.minutos = 59;
        //if( (this.segundos = 0) && (this.minutos = 0)){ this.showContador = false;}
      }
    }
    this.contador = this.dobleCifra(this.minutos)+':'+this.dobleCifra(this.segundos);
  }
}

//--- Functions

async getSale(){
  this.MenosPrecio= undefined;
  let finRegistro:boolean= false;
  // console.log(this.DataService.idOff);
  // console.log(this.DataService.idUser);
  this.saleSub = this.saleService.getSale(this.DataService.idUser,this.DataService.idOff)
  .subscribe((result) =>{
    console.log('saleSub-S sale');
    this.Workers = [];
    this.MenosPrecio = undefined;
    // console.log(result);
    if(result.status != 'Cancelled'){
      // if(result.status == 'Start'){
        //   this.offerDisable = false;
        //   this.showContador = false;
        // }
        if(this.MenosPrecio ==  undefined){
          this.MenosPrecio = Number(result.sale);
        }
        let trabajadores = result.providers;
        for(let trabajador in trabajadores){
          if(this.MenosPrecio > Number(trabajadores[trabajador]['offer']) ) { this.MenosPrecio= Number(trabajadores[trabajador]['offer']);}
          let PromiseUser =this.professionalsService.getProfessional(trabajador).subscribe((user) =>{
          console.log('PromiseUser-S sale');  
          //console.log(user);
          let img = this.imgJobDefault;
          if(user.prof_picture && user.prof_picture != undefined && user.prof_picture != ''){
            img = user.prof_picture;
          }
          this.Workers.push({"id":trabajador,"offer":trabajadores[trabajador]['offer'],"img":img,"name":user.prof_name});
          console.log('PromiseUser-US sale');
          PromiseUser.unsubscribe();
        });
      }
      finRegistro = true;
    }else{
      this.AlertCancelOffer();
      this.navCtrl.setRoot('ShowPage');
      console.log('PromiseUser-US sale');
      this.saleSub.unsubscribe();
    }
  });
}

ganador(){
  if(this.MenosPrecio == this.myOffer){
    this.goServiceWin();
    console.log('saleSub-US sale');
    this.saleSub.unsubscribe();
  }else{
    this.navCtrl.setRoot('ShowPage');
    console.log('saleSub-US sale');
    this.saleSub.unsubscribe();
  }
}

private dobleCifra(num:number):any{
  if(num<10){ return '0'+num;
  }else{ return ''+num;}
}


private getUserLocationGeolocation(){
  this.platform.ready().then(() => {
    let options = {
      timeout: 5000
    };
    this.geo.getCurrentPosition(options).then(resp => {
      console.info('geoLocation');
      // console.info(resp.coords.latitude);
      // console.info(resp.coords.longitude);
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      if(this.lat == resp.coords.latitude && this.lng == resp.coords.longitude){
        this.saleService.setSaleUserLocation(this.DataService.idUser,this.DataService.idOff,this.userActual,{'latitud':this.lat,'longitud':this.lng});
      }
    }).catch(() => {
      console.log("Error to get location");
    });
  });
}

  getTimer(){
    this.timerSubs = this.offerService.getTimmer(this.DataService.idOff).subscribe(
      (timer)=>{
        console.log('timerSubs-S sale');
        // console.log(timer);
        if(timer['$value']){
          // console.log(timer['$value']);
          // console.log(timer['$value'].split(":", 2));
          let ArrayContador = timer['$value'].split(":", 2);
          console.log(ArrayContador['0']);
          console.log(ArrayContador['1']);
          this.minutos = Number(ArrayContador['0']);
          this.segundos = Number(ArrayContador['1']);
        }
        console.log('timerSubs-US sale');
        this.timerSubs.unsubscribe();
      }
    );   
  }
  //--alert
  detailsService(){
    let description = '<img src="'+this.imgServiceDefault+'"  class="imageFull"/><p>'+this.DataService.info+'</p>';
    let alert = this.alertCtrl.create({
      title: 'Service Information',
      message: description,
      buttons: ['OK']
    });
    alert.present();
  }
  offerError(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'The offer must be less than the current',
      buttons: ['OK']
    });
    alert.present();
  }

  AlertCancelOffer(){
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'The auction was canceled by the Client',
      buttons: ['OK']
    });
    alert.present();
  }
}

