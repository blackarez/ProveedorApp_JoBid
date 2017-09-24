import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


//-services
import { OfferService } from '../../services/offer.service';
import { UserService } from '../../services/user.service';

/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  //-vista data
  imgDefault:string;
  imgDescripcionDefault:string;
  offer:any;
  nameUser:string;
  Description:string;
  //--vista toogle
  labelToogle:string;
  StatusProvider:boolean;
  //-data
  ListService:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private offerService: OfferService, private userService: UserService,
  ) {
    //-default value
    this.imgDefault = 'assets/img/User/UserService.png';
    this.imgDescripcionDefault = 'assets/img/User/FotoServiceInfo.JPG';
    this.offer  = '100';
    this.nameUser  = 'Alejando Alberto'; 
    this.Description = 'Cleaning ...'; 
    //--default value toggle 
    this.labelToogle= 'Offline';
    this.StatusProvider= false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    console.log(localStorage);
  }

  goInfo(item){
    let Data = {'datos':item};
    this.navCtrl.push('ServiceInfoPage',Data);
  }

  public notify() {
    console.log("Toggled: "+ this.StatusProvider);
    if(this.StatusProvider == false){
      this.labelToogle ="Offline" 
    }else{
      this.labelToogle ="Online" ;
      this.showServices();
    }
  }

  showServices(){
    let imagen;
    this.offerService.getOfferNew().subscribe( (list)=>{
      this.ListService=[];
      // console.log(list);
      for(let keys in list){
        let InfmaxOffer=list[keys].Clasificacion.informacion.maxOffer;
        let InfmoreInformacion = list[keys].Clasificacion.informacion.moreInformation;
        let InfFoto = list[keys].Clasificacion.informacion.foto;
        let key = list[keys]['$key'];
        let InfshortMoreInformacion = InfmoreInformacion.substr(0,10)+'...';
        // console.log(list[key]);
        // console.log(list[key].Clasificacion.informacion.maxOffer);
        // console.log(list[key].Clasificacion.informacion.moreInformation);
        // console.log(InfmoreInformacion);
        if(InfFoto = "" || InfFoto == undefined || InfFoto == null || InfFoto){
          InfFoto = this.imgDescripcionDefault;
        }
        // console.log(list[key].User);
        this.userService.getUser(list[keys].User).subscribe( (user)=>{
          // console.log(user);
          // console.log(user['user_picture']);
          // console.log('-'+user['user_picture']+'-');
          if(user['user_picture'] == "" || user['user_picture'] == undefined || user['user_picture'] == null || user['user_picture']){
            imagen = this.imgDefault;
          }else{ imagen = user['user_picture'];}
          // console.log(imagen);
          this.ListService.push({"name":user['user_username'],"img":imagen,"sale":InfmaxOffer,"infoShow":InfshortMoreInformacion,"info":InfmoreInformacion,"idOff":key,"idUser":user['$key']});
          console.log(this.ListService);
        });
        // this.ListService=list;
      }
    });
  }

}
