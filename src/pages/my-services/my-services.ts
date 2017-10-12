import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

import { ProfessionalsService } from '../../services/professionals.service';
import { UserService } from '../../services/user.service';
/**
 * Generated class for the MyServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-services',
  templateUrl: 'my-services.html',
})
export class MyServicesPage {
  //-data
  UserActual:any;
  ListService:any = [];

  //-subs
  contractSubs:any;
  userSubs:any;

  //-- default
  imgUserDefault ="assets/img/User/UserService.png";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionalsService : ProfessionalsService,
    private userService : UserService,
    private alertCtrl: AlertController
  ) {
    this.UserActual = localStorage.getItem('verificacion');
    console.log(this.UserActual);
    this.loadView();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyServicesPage');
  }

  goInfoService(list){
    console.log(list);
    let Data = {'datos':list};
    this.navCtrl.push('MyServiceInfoPage',Data);
  }

  loadView(){
    console.log('loadView');
    
    this.contractSubs=this.professionalsService.getContract(this.UserActual).subscribe(
      (dataList)=>{
        // console.log('datalist');
        // console.log(dataList);
        if(dataList['$value']){
          this.showAlertNoServices();
        }else{
          for(let key in dataList){
            console.log(dataList[key]);
            // console.log(dataList[key]['User']);
            console.log(dataList[key]['$key']);
            this.userSubs = this.userService.getUser(dataList[key]['User']).subscribe(
              (userDB)=>{
                // console.log(userDB);
                if(userDB){
                  let nameUser = userDB['user_username'];
                  let addresU = userDB['user_address'];
                  let addresUser:any;
                  let imgUser:string;
                  for(let key in addresU){
                    addresUser = addresU[key]['addr_info'];
                  }
                  let phoneUser = userDB['user_tel'];
                  console.log(userDB['user_picture']);
                  if(userDB['user_picture'] == undefined || userDB['user_picture'] == null || userDB['user_picture'] == "" ){
                    imgUser=this.imgUserDefault;
                  }else{
                    imgUser=userDB['user_picture'];
                  }
                  let DataUser = {"nameUser":nameUser,"address":addresUser,"tel":phoneUser,"img":imgUser};
                  this.ListService.push({'id':key,'info':dataList[key]['info'],'sale':dataList[key]['sale'],'status':dataList[key]['status'],DataUser});
                }
            });
          }
        }
        this.userSubs.unsubscribe();
        this.contractSubs.unsubscribe();
      }
    );
    console.log(this.ListService);
    
  }

  showAlertNoServices() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      message: 'User does not have services',
      buttons: ['OK']
    });
    alert.present();
  }
}
