import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Platform} from 'ionic-angular';

import { ProfessionalsService } from '../../services/professionals.service';
import { SaleService } from '../../services/sale.service';
// import { OfferService } from '../../services/offer.service';


// import { Geolocation } from '@ionic-native/geolocation';

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
  userActual:any;
  newOffer:any;
  
  //--valiables por defecto provider
  imgJobDefault ="assets/img/professions/cleaning.png";
  galleryJobDefault ="assets/img/gallery.png";
  //-final offer
  MenosPrecio:any;
  //--sale
  maxOffer:any;
  myOffer:any;

  dataOffer:any;
  keyOffer:any;

  Workers:any=[];
  WorkersInfo:any=[];
  dataService:any;
  //--datas

  professionals = [];
  professsional = [];
  //--timer
  segundos:number = 0;
  minutos:number = 2;
  contador:string;
  showContador: boolean = true;
  objNodeTimer:any;
  //-- geoLocation
  lat: number= 37.09024;
  lng: number= -95.71289100000001;
  zom: number = 16;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public professionalsService : ProfessionalsService,
    // private geo: Geolocation, private platform: Platform,
    private saleService: SaleService,  
    // private offerService: OfferService,  
  ) {
      this.contador = '0'+this.minutos+':'+'0'+this.segundos;
      this.startTimer();
      this.DataService = this.navParams.get('datos');
      console.log(this.DataService);
      console.log(localStorage);
      this.userActual= localStorage.getItem('verificacion');
      this.loadView();
      this.getUserLocationGeolocation();
      this.getSale();
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceSalePage');
}

loadView(){
  this.maxOffer = this.DataService.sale;
}

newOfferProvider(){
  if(this.MenosPrecio > Number(this.newOffer) ){
    this.saleService.setSaleProvider(this.DataService.idUser,this.DataService.idOff,this.userActual,this.newOffer);
    this.myOffer =  Number(this.newOffer);
  }else{
    alert('The offer must be less than the current');
  }
  // this.navCtrl.setRoot('ServiceWinPage');
}

detailsService(){
  let description = '<img src="assets/img/User/FotoServiceInfo.JPG"  class="imageFull"/><p>'+this.DataService.info+'</p>';
  let alert = this.alertCtrl.create({
    title: 'Service Information',

    message: description,
    buttons: ['OK']
  });
  alert.present();
}

// goCleaningContractor(ganador?){
goCleaningContractor(){
  // console.info('goCleaningContractor');
  // console.log(ganador);
  // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":ganador}};
  // console.log(DataService);
  // this.navCtrl.setRoot('ServiceWinPage',DataService);
  this.navCtrl.setRoot('ServiceWinPage');
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
  // if(this.minutos == 1 && this.segundos == 40 ){ 
    //this.showContador = false;
      clearInterval(this.objNodeTimer);
       this.showContador = false;
       this.ganador();
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
  console.log(this.DataService.idOff);
  console.log(this.DataService.idUser);
  this.saleService.getSale(this.DataService.idUser,this.DataService.idOff)
  .subscribe((result) =>{
    this.Workers = [];
    this.WorkersInfo =[];
    this.MenosPrecio = undefined;
    console.log(result);
    //console.log(result.sale);
    //console.log(result.providers);
    if(this.MenosPrecio ==  undefined){
      this.MenosPrecio = Number(result.sale);
    }
    let trabajadores = result.providers;
    for(let trabajador in trabajadores){
      // console.log(trabajadores);
      // console.log(trabajadores[trabajador]);
      //console.log(trabajadores[trabajador]['offer']);
      // console.log(trabajador);
      if(this.MenosPrecio > Number(trabajadores[trabajador]['offer']) ) { this.MenosPrecio= Number(trabajadores[trabajador]['offer']);}
      let PromiseUser =this.professionalsService.getProfessional(trabajador);
      // console.log(PromiseUser);
      PromiseUser.subscribe((user) =>{
        //console.log(user);
        this.WorkersInfo.push(user);
        let img = this.imgJobDefault;
        if(user.prof_picture && user.prof_picture != undefined && user.prof_picture != ''){
          img = user.prof_picture;
        }
        this.Workers.push({"id":trabajador,"offer":trabajadores[trabajador]['offer'],"img":img,"name":user.prof_name});
      });
    }
    finRegistro = true;
    console.log(this.Workers);
    console.log(this.WorkersInfo);
    console.log(this.MenosPrecio);
    let estadoUser= this.Workers;
    console.log(estadoUser);
    // for(let jobs in estadoUser){
    //   console.log('jobs');
    //   console.log(jobs);
    //   console.log(estadoUser[jobs]);
    // }
    // console.log('verifcar la informacion');

  });
  
}

ganador(){
  if(this.MenosPrecio == this.myOffer){
    this.goCleaningContractor();
  }else{
    this.navCtrl.setRoot('ShowPage');
  }
}

private dobleCifra(num:number):any{
  if(num<10){ return '0'+num;
  }else{ return ''+num;}
}


private getUserLocationGeolocation(){
  // this.platform.ready().then(() => {
  //   let options = {
  //     timeout: 5000
  //   };
  //   this.geo.getCurrentPosition(options).then(resp => {
  //     console.log('geoLocation');
  //     console.info(resp.coords.latitude);
  //     console.info(resp.coords.longitude);
  //     this.lat = resp.coords.latitude;
  //     this.lng = resp.coords.longitude;
  //   }).catch(() => {
  //     console.log("Error to get location");
  //   });
  // });
}


}

