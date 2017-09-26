import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//-service
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
import { UserService } from '../../services/user.service';

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

  //-data
  DataService:any=[];
  DataUser:any= [];
  user:string;

 //-datos BD
 status="Waiting for the professional";

  //-subcrip
  userSubs:any;

  //-load data
  datasService:any;
  dataService:any;
  keyOffer:any;
  worker:any;
  userActual:any;
  sale:any;
  information:any;
  serviceCode:any;

  //--load vista
  imgUser:any;
  nameUser:any;
  addresUser:any;
  phoneUser:any;

 

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private saleService: SaleService, 
    private offerService : OfferService,
    private userService : UserService,
  ) {    
    //-ej
    this.serviceCode = '0986548605';
    //-data
    this.DataService = this.navParams.get('datos');
    this.user = this.DataService['idUser'];
    this.serviceCode = this.DataService['idOff'].substring(6);
    console.log(this.user);
    console.log(this.DataService);
    //-localStorage
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.userActual);

    this.userInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceNewPage');
  }
  goServiceJob(){
    this.setStatus();
    // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    console.log(this.DataService);
    console.log(this.DataUser);
    
    let dataService = {'service':this.DataService,"user":this.DataUser};
  	// this.navCtrl.setRoot(,DataService);
    this.navCtrl.setRoot('ServiceJobPage',dataService);
    
  }

 setStatus(){
  this.saleService.setStatus(this.userActual,this.keyOffer,'In progress');
  this.offerService.setStatus(this.keyOffer,'In progress');
 }
  userInfo(){
    // this.imgUser=this.imgUserDefault;
    // this.nameUser = 'Alejandro Albello';
    // this.addresUser = 'Calle 123 #45 - 65 Ed Miramar Apartamento BB Torre 2';
    // this.phoneUser = '(+57) 5-300 811 45 65';
    console.log('UserInfo');
    console.log(this.user);
    // this.userSubs=this.userService.getUser(this.user).subscribe(
    this.userService.getUser(this.user).subscribe(
    // this.userSubs=this.userService.getUser('user_1504881933094').subscribe(
      (userDB)=>{
        console.log(userDB);
        if(userDB){
          this.nameUser = userDB['user_username'];
          let addresU = userDB['user_address'];
          for(let key in addresU){
            this.addresUser = addresU[key]['addr_info'];
          }
          this.phoneUser = userDB['user_tel'];
          console.log(userDB['user_picture']);
          if(userDB['user_picture'] == undefined || userDB['user_picture'] == null || userDB['user_picture'] == "" ){
            this.imgUser=this.imgUserDefault;
          }else{
            this.imgUser=userDB['user_picture'];
          }
          this.DataUser = {"nameUser":this.nameUser,"address":this.addresUser,"tel":this.phoneUser,"img":this.imgUser};
        }
        // this.userSubs.unsubscribe();
      });
   
  }

}
