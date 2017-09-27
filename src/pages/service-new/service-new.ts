import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//-service
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
import { UserService } from '../../services/user.service';
import { ProfessionalsService } from '../../services/professionals.service';

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
  
   //-datos BD
   status="Waiting for the professional";

  //-data
  DataService:any=[];
  DataUser:any= [];
  user:string;
  keyOffer:any;
  userActual:any;
  serviceCode:any;

  //-subcrip
  userSubs:any;

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
    private professionalsService:ProfessionalsService,
  ) {    
    //-ej
    this.serviceCode = '0986548605';
    //-data
    this.DataService = this.navParams.get('datos');
    console.log(this.DataService);
    this.user = this.DataService['idUser'];
    this.keyOffer=this.DataService['idOff'];
    console.log(this.keyOffer);

    this.serviceCode = this.DataService['idOff'].substring(6);
    console.log(this.user);
    //-localStorage
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.userActual);
    this.userInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceNewPage');
  }
  goServiceJob(){
    console.log('goServiceJob');
    this.setStatusService();
    // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
    console.log(this.DataService);
    console.log(this.DataUser);

    this.userSubs.unsubscribe();
    
    let dataService = {'service':this.DataService,"user":this.DataUser};
  	// this.navCtrl.setRoot(,DataService);
    this.navCtrl.setRoot('ServiceJobPage',dataService);
    
  }

 setStatusService(){
   console.log('set');
   console.log(this.userActual);
   console.log(this.keyOffer);
  this.professionalsService.setContractStatus(this.userActual,this.keyOffer,'In progress');
  this.saleService.setStatus(this.user,this.keyOffer,'In progress');
  this.offerService.setStatus(this.keyOffer,'In progress');
 }
  userInfo(){
    // this.imgUser=this.imgUserDefault;
    // this.nameUser = 'Alejandro Albello';
    // this.addresUser = 'Calle 123 #45 - 65 Ed Miramar Apartamento BB Torre 2';
    // this.phoneUser = '(+57) 5-300 811 45 65';
    console.log('UserInfo');
    console.log(this.user);
    this.userSubs=this.userService.getUser(this.user).subscribe(
    // this.userService.getUser(this.user).subscribe(
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
        
      });
   
  }

}
