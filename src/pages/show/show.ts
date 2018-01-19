import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


//-services
import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';
import { UserService } from '../../services/user.service';
import { NotificacionService } from '../../services/notificacion.service';

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
  imgDefault: string;
  imgDescripcionDefault: string;
  offer: any;
  nameUser: string;
  Description: string;
  //--vista toogle
  labelToogle: string;
  StatusProvider: boolean;
  //-data
  ListService: any = [];
  ListContracts: any = [];
  UserActual: string;
  lat: number = 51.678418;
  lng: number = 7.809007;

  //-firebase
  listOffer: any;
  serviceSubs: any;
  userSubs: any;

  objNodeTimer: any;
  segundos: number = 5;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private offerService: OfferService, private userService: UserService,
    private professionalsService: ProfessionalsService,
    private geo: Geolocation, private platform: Platform,
    private notificacionService: NotificacionService,
  ) {
    this.UserActual = localStorage.getItem('verificacion');
    console.log(this.UserActual);
    //-default value
    this.imgDefault = 'assets/img/User/UserService.png';
    this.imgDescripcionDefault = 'assets/img/User/FotoServiceInfo.JPG';
    this.offer = '100';
    this.nameUser = 'Alejando Alberto';
    this.Description = 'Cleaning ...';
    //--default value toggle 
    this.labelToogle = 'Offline';
    this.StatusProvider = false;
    this.getUserLocationGeolocation();
    // alert('hola');
    this.notify();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
    // console.log(localStorage);
  }

  goInfo(item) {
    // console.log('userSubs-US show');
    // console.log('serviceSubs-US show');
    // console.log('listOffer-US show');
    clearInterval(this.objNodeTimer);
    this.StatusProvider  = false;
    if (this.userSubs != undefined) { this.userSubs.unsubscribe(); }
    if (this.serviceSubs != undefined) { this.serviceSubs.unsubscribe(); }
    if (this.listOffer != undefined) { this.listOffer.unsubscribe(); }
    let Data = { 'datos': item };
    this.navCtrl.push('ServiceInfoPage', Data);
  }

  public notify() {
    // console.log("Toggled: ");
    console.log("Toggled: " + this.StatusProvider);
    // alert("Toggled: "+ this.StatusProvider);
    if (this.StatusProvider == false) {
      this.labelToogle = "Offline";
      clearInterval(this.objNodeTimer);
      // console.log(this.objNodeTimer);
      // if (this.objNodeTimer != undefined) {
      //   clearInterval(this.objNodeTimer.data.handleId);
      //   console.log(this.objNodeTimer.data.handleId);
      // }
    } else {
      this.labelToogle = "Online";
      this.showServices();
      this.startTimer();
      // this.showServices();
      // this.showServices();
    }
  }


  //--- timer
  startTimer() {
    this.objNodeTimer = setInterval(() => { this.timer() }, 1000);
  }
  //cada 5 segundos reiniamos la consulta de offertas
  private timer() {
    // console.log(this.segundos);
    if (this.StatusProvider == true) {
      if (this.segundos == 1) {
        // console.log(this.objNodeTimer);
        this.reiniciarBusquedaOffer();
        this.segundos = 5;
      } else {
        if (--this.segundos < 0) {
        }
      }
    } else {
      // console.log('userSubs-US show');
      // console.log('serviceSubs-US show');
      // console.log('listOffer-US show');
      clearInterval(this.objNodeTimer);
      if (this.userSubs != undefined) { this.userSubs.unsubscribe(); }
      if (this.serviceSubs != undefined) { this.serviceSubs.unsubscribe(); }
      if (this.listOffer != undefined) { this.listOffer.unsubscribe(); }
    }
  }

  reiniciarBusquedaOffer() {
    // console.log(this.objNodeTimer);
    // console.log(this.listOffer);
    // console.log(this.serviceSubs);
    // console.log(this.userSubs);
    if (this.listOffer != undefined) {
      // console.log('listOffer-US show');
      this.listOffer.unsubscribe();
    }
    if (this.serviceSubs != undefined) {
      // console.log('serviceSubs-US show');
      this.serviceSubs.unsubscribe();
    }
    if (this.userSubs != undefined) {
      // console.log('userSubs-US show');
      this.userSubs.unsubscribe();
    }
    // console.info('busqueda de ofertas');
    this.showServices();
  }

  showServices() {
    // alert('showServices');
    this.listOffer = this.offerService.getOfferNew().subscribe((list) => {
      // console.log(list);
      if (list != undefined) {
        // console.log('listOffer-S show');
        this.getServiceProvider(list);
        this.listOffer.unsubscribe();
      }
    });
  }

  getServiceProvider(BDListOffer) {
    // alert();
    // console.log(this.UserActual);
    this.serviceSubs = this.professionalsService.getServicesProfessional(this.UserActual).subscribe(
      (BDListServicesProvider) => {
        // console.log('serviceSubs-S show');
        // console.log(BDListServicesProvider);
        let professionalServiceSubs = this.professionalsService.getStar(this.UserActual).subscribe(
          (starProvider) => {
            // console.log('professionalsService-S show');
            // console.log('starP');
            // console.log(starProvider);
            if (starProvider['$value']) {
              this.showListData(BDListOffer, BDListServicesProvider, starProvider['$value']);
            }
            // console.log('professionalsService-US show');
            professionalServiceSubs.unsubscribe();
          }
        );
      });
  }

  async  showListData(BDListOffer, BDListServicesProvider, stars) {
    this.ListService = [];
    let imagen;
    for (let keySP in BDListServicesProvider) {

      // console.log(BDListServicesProvider[keySP]);
      // console.log('BDListServicesProvider[keySP]serv_service:'+BDListServicesProvider[keySP]['serv_service']);
      // console.log('p-BDList.serv_subService: '+BDListServicesProvider[keySP]['serv_subService']);
      for (let keys in BDListOffer) {

        // console.log('bdoff-star:'+Number(BDListOffer[keys].Star));
        // console.log('pro-star: '+ Number(stars));

        if (Math.round(Number(stars)) >= Math.round(Number(BDListOffer[keys].Star))) {
          console.info('star ok');
          // alert('star ok');
          // console.log(BDListOffer[keys]);
          // console.log('BDListOffer.categoria: '+BDListOffer[keys].Clasificacion.categoria);
          // console.log(BDListOffer[keys].Clasificacion.distancia);
          if (BDListOffer[keys].UserLocacion) {
            // console.log('User-Coordenadas:latitud' + BDListOffer[keys].UserLocacion.latitud);
            // console.log('User-Coordenadas:longitud' + BDListOffer[keys].UserLocacion.longitud);
            // console.log('Proveedor-Coordenadas:latitud' + this.lat);
            // console.log('Proveedor-Coordenadas:longitud' + this.lng);
            let distanceKilo = this.getDistanceKilometros(Number(this.lat), Number(this.lng), Number(BDListOffer[keys].UserLocacion.latitud), Number(BDListOffer[keys].UserLocacion.longitud));
            // console.log('distanciaKilometros: ' + distanceKilo);

            let distanceMillas = this.getConvertKilometrosMillas(distanceKilo);
            // console.log('distanciaMillas: ' + distanceMillas);
            // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));
            // console.log('filtros');
            // console.log('listOff:'+BDListOffer[keys].Clasificacion.categoria);
            // console.log('listPro-sub:'+BDListServicesProvider[keySP]['serv_subService']);
            // console.log('pro-star:'+stars);
            // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));

            if (BDListOffer[keys].Clasificacion.categoria == BDListServicesProvider[keySP]['serv_subService'] && true == this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia, distanceMillas)) {
              console.info('categoria y  distancia ok');
              // alert('categoria y  distancia ok');
              let ServiceProviderCertificate: any;
              let ServiceProviderSecurity: any;
              // console.log(BDListServicesProvider[keySP]['serv_detail']['serv_certificate']);
              if (BDListServicesProvider[keySP]['serv_detail']['serv_certificate'] != null && BDListServicesProvider[keySP]['serv_detail']['serv_certificate'] != undefined) {
                ServiceProviderCertificate = BDListServicesProvider[keySP]['serv_detail']['serv_certificate'];
                // console.log('listPro-cer:'+BDListServicesProvider[keySP]['serv_detail']['serv_certificate']);
                // console.log('off-certificado:'+BDListOffer[keys].Clasificacion.certificacion);
              } else {
                // console.log('listPro-cer = false');
                ServiceProviderCertificate = 'false';
              }
              if (BDListServicesProvider[keySP]['serv_detail']['serv_insurance'] != null) {
                ServiceProviderSecurity = BDListServicesProvider[keySP]['serv_detail']['serv_insurance'];
                // console.log('listPro-zeg:'+BDListServicesProvider[keySP]['serv_detail']['serv_insurance']);
                // console.log('off-seguro:'+BDListOffer[keys].Clasificacion.seguro);
              } else {
                // console.log('listPro-zeg = false');
                ServiceProviderSecurity = 'false';
              }
              // console.log('listPro-exp:'+BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']);
              // console.log('off-experien:'+BDListOffer[keys].Clasificacion.experiencia);


              if (ServiceProviderCertificate == BDListOffer[keys].Clasificacion.certificacion && ServiceProviderSecurity == BDListOffer[keys].Clasificacion.seguro) {
                console.info('certificado y seguro ok');
                // alert('certificado y seguro ok');
                // console.log(this.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia,BDListOffer[keys].Clasificacion.experiencia));

                if (this.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia, BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']) == true) {
                  console.info('Experience ok');
                  // alert('Experience ok');

                  let InfmaxOffer = BDListOffer[keys].Clasificacion.informacion.maxOffer;
                  let InfmoreInformacion = BDListOffer[keys].Clasificacion.informacion.moreInformation;
                  let InfFoto = BDListOffer[keys].Clasificacion.informacion.foto;
                  let key = BDListOffer[keys]['$key'];
                  let InfshortMoreInformacion = InfmoreInformacion.substr(0, 10) + '...';
                  if (InfFoto = "" || InfFoto == undefined || InfFoto == null || InfFoto) {
                    InfFoto = this.imgDescripcionDefault;
                  }
                  // console.log(BDListOffer[key].User);
                  this.userSubs = this.userService.getUser(BDListOffer[keys].User).subscribe((user) => {
                    // console.log('userSubs-S show');
                    this.notificacion();
                    // console.log(user);
                    // console.log(user['user_picture']);
                    // console.log('-'+user['user_picture']+'-');
                    // console.log('-'+user['prof_star']+'-');
                    // if(user['user_picture']){
                    let serviceImage = '';
                    if (BDListOffer[keys].Clasificacion.informacion.foto != undefined && BDListOffer[keys].Clasificacion.informacion.foto != '') {
                      serviceImage = BDListOffer[keys].Clasificacion.informacion.foto;
                      // console.log(serviceImage);
                    }
                    if (user['user_picture'] == "" || user['user_picture'] == undefined || user['user_picture'] == null) {
                      imagen = this.imgDefault;
                    } else { imagen = user['user_picture']; }
                    // console.log(imagen);
                    // console.log(this.ListService.findIndex( keysOffer => { keysOffer.idOff == key;}));
                    // console.log(this.ListService);
                    let ListaServicios = this.ListService;
                    // console.log(ListaServicios);
                    // let idKeyOffer = ListaServicios.findIndex( keysOffer => { 
                    //   keysOffer.idOff == key; 
                    //   console.log(keysOffer); 
                    //   console.log(keysOffer.idOff); 
                    //   console.log(key); 
                    // });
                    let idKeyOffer = ListaServicios.findIndex(keysOffer =>
                      keysOffer.idOff == key);
                    // console.log(idKeyOffer);
                    if (idKeyOffer >= 0) {
                      // console.log('if 1');
                      this.ListService[idKeyOffer] = { "idOff": key, "name": user['user_username'], "img": imagen, "sale": InfmaxOffer, "infoShow": InfshortMoreInformacion, "info": InfmoreInformacion, "imgOffer": serviceImage, "idUser": user['$key'] };
                    } else {
                      // console.log('if -1');
                      this.ListService.push({ "idOff": key, "name": user['user_username'], "img": imagen, "sale": InfmaxOffer, "infoShow": InfshortMoreInformacion, "info": InfmoreInformacion, "imgOffer": serviceImage, "idUser": user['$key'] });
                    }
                    // console.log(this.ListService);
                    // }
                  });
                  // this.ListService=list;
                } else {
                  console.info('Experience no');
                  // alert('star ok');
                }
              } else {
                console.info('certificado y seguro no');
                // alert('star ok');
              }
            } else {
              console.info('categoria y  distancia no');
              // alert('categoria y  distancia no');
            }
          }
        } else {
          console.info('star no');

        }
      }
    }
  }

  private getUserLocationGeolocation() {
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

  getDistanceKilometros(lat1, lon1, lat2, lon2) {
    // console.log('getDistanceKilometros');
    // console.log(lat1);
    // console.log(lat2);
    // console.log(lat2 - lat1);

    let rad = function (x) { return x * Math.PI / 180; }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    // var dLat = rad( 0);
    var dLong = rad(lon2 - lon1);
    // console.log(dLat);
    // console.log(dLong);
    // var dLong = rad( 0);
    // console.log('lat2 - lat1'+( lat2 - lat1 ));
    // console.log('lon2 - lon1'+(lon2 - lon1));
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    //a = sin^2((lat2-lat1)/2)+cos(lat1)*cos(lat2)* sin^2((long2-long2)/2)
    //c 2 . atan2(raiz a, raiz (1-a) )
    //d= R *c;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    // console.log(d);
    return d.toFixed(3); //Retorna tres decimales
  }

  getConvertKilometrosMillas(kilo) {
    return kilo * 0.621371192237334;
  }

  getNumeroDistanceOffer(distanceOffer, distanciaMilla) {
    // console.log(distanceOffer);
    // console.log(distanciaMilla);
    let dentroDeDistancia = false;
    switch (distanceOffer) {
      case "1M": {
        if (1 >= distanciaMilla) {
          console.log('Distancia de 1 milla de la offerta');
          dentroDeDistancia = true; console.log('distanciaOK');
        }
        break;
      }
      case "2M": {
        if (2 >= distanciaMilla) {
          console.log('Distancia de 2 millas de la offerta');
          dentroDeDistancia = true; console.info('distanciaOK');
        }
        break;
      }
      case "3M": {
        if (3 >= distanciaMilla) {
          console.log('Distancia de 3 millas de la offerta');
          dentroDeDistancia = true; console.info('distanciaOK');
        }
        break;
      }
      case "4M": {
        if (4 >= distanciaMilla) {
          console.log('Distancia de 4 millas de la offerta');
          dentroDeDistancia = true; console.info('distanciaOK');
        }
        break;
      }
      case "5M": {
        if (5 >= distanciaMilla) {
          console.log('Distancia de 5 millas de la offerta');
          dentroDeDistancia = true; console.info('distanciaOK');
        }
        break;
      }
      case "5MM": {
        console.log('Distancia de mas de 5 millas de la offerta');
        dentroDeDistancia = true; console.info('distanciaOK');
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

  getNumeroExperienciOffer(offerExperiense, providerExperience) {
    // console.log(offerExperiense);
    // console.log(providerExperience);
    let experienciaMayor = false;
    let numbOfferExperiense: number = 0;
    let numbProviderExperiense: number = 0;
    switch (offerExperiense) {
      case '1Y': {
        numbOfferExperiense = 1;
        break;
      }
      case '2Y': {
        numbOfferExperiense = 2;
        break;
      }
      case '3Y': {
        numbOfferExperiense = 3;
        break;
      }
      case '3YM': {
        numbOfferExperiense = 4;
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
    switch (providerExperience) {
      case '1Y': {
        numbProviderExperiense = 1;
        break;
      }
      case '2Y': {
        numbProviderExperiense = 2;
        break;
      }
      case '3Y': {
        numbProviderExperiense = 3;
        break;
      }
      case '3YM': {
        numbProviderExperiense = 4;
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
    console.log('nExpeProvider: ' + numbProviderExperiense);
    console.log('nExpeOffer: ' + numbOfferExperiense);
    if (numbProviderExperiense >= numbOfferExperiense) {
      experienciaMayor = true;
    } else {
      experienciaMayor = false;
    }
    return experienciaMayor;
    // return false;
  }
  //-notification
  notificacion() {
    this.notificacionService.mostrar('You have a new job offer', 2);
  }
}
