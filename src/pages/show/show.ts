import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';


//-services
import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';
import { UserService } from '../../services/user.service';

import { Geolocation } from '@ionic-native/geolocation';


import { AgmCoreModule } from '@agm/core';
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
// @NgModule({
//   imports: [
//     AgmCoreModule.forRoot({
//       // apiKey: 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA'
//       apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'  
//     })
//   ],
//   schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
// })
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
  ListContracts:any=[];
  UserActual:string;
  lat: number = 51.678418;
  lng: number = 7.809007;

  //-firebase
  listOffer:any;
  serviceSubs:any;
  userSubs:any;

  //-map
  Userlat:any=37.09024;
  Userlng:any=-95.71289100000001;
  zom: number = 14;
  providerLatitud:any=37.09024;
  providerLongitud:any=-95.71289100000001;

  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private offerService: OfferService, private userService: UserService,
    private professionalsService : ProfessionalsService,
    private geo: Geolocation, private platform: Platform,
  ) {
    this.UserActual = localStorage.getItem('verificacion');
    console.log(this.UserActual);
    //-default value
    this.imgDefault = 'assets/img/User/UserService.png';
    this.imgDescripcionDefault = 'assets/img/User/FotoServiceInfo.JPG';
    this.offer  = '100';
    this.nameUser  = 'Alejando Alberto'; 
    this.Description = 'Cleaning ...'; 
    //--default value toggle 
    this.labelToogle= 'Offline';
    this.StatusProvider= false;
    this.getUserLocationGeolocation();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    // console.log(localStorage);
  }

  goInfo(item){
    console.log('userSubs-US show');
    console.log('serviceSubs-US show');
    console.log('listOffer-US show');
    this.userSubs.unsubscribe();
    this.serviceSubs.unsubscribe();
    this.listOffer.unsubscribe();
    let Data = {'datos':item};
    this.navCtrl.push('ServiceInfoPage',Data);
  }

  public notify() {
    console.log("Toggled: "+ this.StatusProvider);
    if(this.StatusProvider == false){
      this.labelToogle ="Offline";
    }else{
      this.labelToogle ="Online";
      this.showServices();
    }
  }

  showServices(){
   this.listOffer = this.offerService.getOfferNew().subscribe( (list)=>{
      this.ListService=[];
      // console.log(list);
      console.log('listOffer-S show');
      this.getServiceProvider(list);
    });
  }

  getServiceProvider(BDListOffer){
    this.serviceSubs=this.professionalsService.getServicesProfessional(this.UserActual).subscribe(
      (BDListServicesProvider)=>{
        console.log('serviceSubs-S show');
        // console.log(BDListServicesProvider);
        let professionalServiceSubs = this.professionalsService.getStar(this.UserActual).subscribe(
          (starProvider) => {
            console.log('professionalsService-S show');
            // console.log('starP');
            // console.log(starProvider);
            if(starProvider['$value']){
                this.showListData(BDListOffer,BDListServicesProvider,starProvider['$value']);
              }
              console.log('professionalsService-US show');
              professionalServiceSubs.unsubscribe();
            }
        );
    });
  }

  showListData(BDListOffer,BDListServicesProvider,stars){
    let imagen;
    for(let keySP in BDListServicesProvider){

      // console.log(BDListServicesProvider[keySP]);
      // console.log('BDListServicesProvider[keySP]serv_service:'+BDListServicesProvider[keySP]['serv_service']);
      // console.log('p-BDList.serv_subService: '+BDListServicesProvider[keySP]['serv_subService']);
      for(let keys in BDListOffer){

        // console.log('bdoff-star:'+Number(BDListOffer[keys].Star));
        // console.log('pro-star: '+ Number(stars));
        
          if( Math.round(Number(stars)) >= Math.round(Number(BDListOffer[keys].Star)) ){
            console.info('star ok');
            // console.log(BDListOffer[keys]);
            // console.log('BDListOffer.categoria: '+BDListOffer[keys].Clasificacion.categoria);
            // console.log(BDListOffer[keys].Clasificacion.distancia);
            if(BDListOffer[keys].UserLocacion){
              // console.log(BDListOffer[keys].UserLocacion.latitud);
              // console.log(BDListOffer[keys].UserLocacion.longitud);
              let distanceKilo = this.getDistanceKilometros(Number(this.lat),Number(this.lng),Number(BDListOffer[keys].UserLocacion.latitud),Number(BDListOffer[keys].UserLocacion.longitud));
              // console.log(distanceKilo);
              let distanceMillas = this.getConvertKilometrosMillas(distanceKilo);
              // console.log(distanceMillas);
              // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));
              // console.log('filtros');
              // console.log('listOff:'+BDListOffer[keys].Clasificacion.categoria);
              // console.log('listPro-sub:'+BDListServicesProvider[keySP]['serv_subService']);
              // console.log('pro-star:'+stars);
              // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));
              
              if( BDListOffer[keys].Clasificacion.categoria ==  BDListServicesProvider[keySP]['serv_subService'] && true ==this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas) ){
                console.info('categoria y  distancia ok');
                let ServiceProviderCertificate:any;
                let ServiceProviderSecurity:any;
                if(BDListServicesProvider[keySP]['serv_detail']['serv_certificate'] != null){
                  ServiceProviderCertificate= BDListServicesProvider[keySP]['serv_detail']['serv_certificate'];
                  // console.log('listPro-cer:'+BDListServicesProvider[keySP]['serv_detail']['serv_certificate']);
                  // console.log('off-certificado:'+BDListOffer[keys].Clasificacion.certificacion);
                }else{
                  // console.log('listPro-cer = false');
                  ServiceProviderCertificate = 'false'; 
                }
                
                
                if(BDListServicesProvider[keySP]['serv_detail']['serv_insurance']  != null){
                  ServiceProviderSecurity = BDListServicesProvider[keySP]['serv_detail']['serv_insurance']; 
                  // console.log('listPro-zeg:'+BDListServicesProvider[keySP]['serv_detail']['serv_insurance']);
                  // console.log('off-seguro:'+BDListOffer[keys].Clasificacion.seguro);
                }else{
                  // console.log('listPro-zeg = false');
                  ServiceProviderSecurity = 'false'; 
                }
                // console.log('listPro-exp:'+BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']);
                // console.log('off-experien:'+BDListOffer[keys].Clasificacion.experiencia);


                if(ServiceProviderCertificate == BDListOffer[keys].Clasificacion.certificacion && ServiceProviderSecurity == BDListOffer[keys].Clasificacion.seguro){
                  console.info('certificado y seguro ok');
                  // console.log(this.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia,BDListOffer[keys].Clasificacion.experiencia));
                  
                  if(this.getNumeroExperienciOffer (BDListOffer[keys].Clasificacion.experiencia,BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']) == true){
                    console.info('Experience ok');
              
                    let InfmaxOffer=BDListOffer[keys].Clasificacion.informacion.maxOffer;
                    let InfmoreInformacion = BDListOffer[keys].Clasificacion.informacion.moreInformation;
                    let InfFoto = BDListOffer[keys].Clasificacion.informacion.foto;
                    let key = BDListOffer[keys]['$key'];
                    let InfshortMoreInformacion = InfmoreInformacion.substr(0,10)+'...';
                    if(InfFoto = "" || InfFoto == undefined || InfFoto == null || InfFoto){
                      InfFoto = this.imgDescripcionDefault;
                    }
                    // console.log(BDListOffer[key].User);
                    this.userSubs = this.userService.getUser(BDListOffer[keys].User).subscribe( (user)=>{
                      console.log('userSubs-S show');
                      // console.log(user);
                      // console.log(user['user_picture']);
                      // console.log('-'+user['user_picture']+'-');
                      // console.log('-'+user['prof_star']+'-');
                      // if(user['user_picture']){
                        
                        if(user['user_picture'] == "" || user['user_picture'] == undefined || user['user_picture'] == null || user['user_picture']){
                          imagen = this.imgDefault;
                        }else{ imagen = user['user_picture'];}
                        // console.log(imagen);
                        this.ListService.push({"name":user['user_username'],"img":imagen,"sale":InfmaxOffer,"infoShow":InfshortMoreInformacion,"info":InfmoreInformacion,"idOff":key,"idUser":user['$key']});
                        console.log(this.ListService);
                      // }
                    });
                    // this.ListService=list;
                  }else{
                    console.info('Experience no');
                  }   
                }else{
                  console.info('certificado y seguro no');
                }
              }else{
                console.info('categoria y  distancia no');
              }
            }

          }else{
            console.info('star no');
            
          }

        }
      }
    

  }
  
  private getUserLocationGeolocation(){
    this.platform.ready().then(() => {
      var options = {
        timeout: 5000
      };
      this.geo.getCurrentPosition(options).then(resp => {
        console.info('geoLocation');
        // console.info(resp.coords.latitude);
        // console.info(resp.coords.longitude);
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;

      }).catch(() => {
        console.log("Error to get location");
      });
    });
  }

  getDistanceKilometros(lat1,lon1,lat2,lon2){
    // console.log('getDistanceKilometros');
    // console.log(lat1);
    // console.log(lat2);
    // console.log(lat2 - lat1);
    
    let rad = function(x) {return x*Math.PI/180;}
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad( lat2 - lat1 );
    // var dLat = rad( 0);
    var dLong = rad( lon2 - lon1 );
    // var dLong = rad( 0);
    // console.log('lat2 - lat1'+( lat2 - lat1 ));
    // console.log('lon2 - lon1'+(lon2 - lon1));
    // console.log(dLat);
    // console.log(dLong);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d.toFixed(3); //Retorna tres decimales
  }

  getConvertKilometrosMillas(kilo){
    return kilo * 0.62137;
  }

  getNumeroDistanceOffer(distanceOffer,distanciaMilla){
    // console.log(distanceOffer);
    // console.log(distanciaMilla);
    let dentroDeDistancia=false;
    switch(distanceOffer){
      case "1M":{
        if(1 >= distanciaMilla){dentroDeDistancia= true; console.log('distanciaOK');
        }
        break;
      }
      case "2M":{
        if(2 >= distanciaMilla){dentroDeDistancia= true; console.info('distanciaOK');
        }
        break;
      }
      case "3M":{
        if(3 >= distanciaMilla){dentroDeDistancia= true; console.info('distanciaOK');
        }
        break;
      }
      case "4M":{
        if(4 >= distanciaMilla){dentroDeDistancia= true; console.info('distanciaOK');
        }
        break;
      }
      case "5M":{
        if(5 >= distanciaMilla){dentroDeDistancia= true; console.info('distanciaOK');
        }
        break;
      }
      case "5MM":{
        dentroDeDistancia= true; console.info('distanciaOK');
        break;
      }
      default: { 
        console.log("Invalid choice"); 
        break;              
      }
    }
    return dentroDeDistancia;
    // return false;
  }

  getNumeroExperienciOffer(offerExperiense,providerExperience){
    // console.log(offerExperiense);
    // console.log(providerExperience);
    let experienciaMayor=false;
    let numbOfferExperiense:number = 0;
    let numbProviderExperiense:number = 0;
    switch(offerExperiense){
      case '1Y':{
        numbOfferExperiense = 1;
        break;
      }
      case '2Y':{
        numbOfferExperiense = 2;
        break;
      }
      case '3Y':{
        numbOfferExperiense = 3;
        break;
      }
      case '3YM':{
        numbOfferExperiense = 4;
        break;
      }
      default: { 
        console.log("Invalid choice"); 
        break;              
      }
    }
    switch(providerExperience){
      case '1Y':{
        numbProviderExperiense = 1;
        break;
      }
      case '2Y':{
        numbProviderExperiense = 2;
        break;
      }
      case '3Y':{
        numbProviderExperiense = 3;
        break;
      }
      case '3YM':{
        numbProviderExperiense = 4;
        break;
      }
      default: { 
        console.log("Invalid choice"); 
        break;              
      }
    }
    console.log('nExpeProvider: '+numbProviderExperiense);
    console.log('nExpeOffer: '+numbOfferExperiense);
    if(numbProviderExperiense >= numbOfferExperiense){
      experienciaMayor= true;
    }else{
      experienciaMayor= false;
    }
    return experienciaMayor;
    // return false;
  }

}
