import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Component, ViewChild } from '@angular/core';
// import { IonicPage, NavController, NavParams, Navbar, AlertController} from 'ionic-angular';

import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';

/**
 * Generated class for the ServiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-info',
  templateUrl: 'service-info.html',
})
export class ServiceInfoPage {
  // @ViewChild(Navbar) navBar: Navbar;
  //-data
  DataService: any = [];
  userActual: any;
  //-data view
  imagenUser: any;
  offer: any;
  userName: any;
  info: any;
  contador: any;
  NoGoSale: boolean = false;
  //-sub
  timerSubs: any;
  statusSubs: any;
  offerDetailSub: any;

  //-default
  serviceImage = 'assets/img/User/FotoServiceInfo.JPG';


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private saleService: SaleService, private offerService: OfferService,
    public alertCtrl: AlertController,
  ) {
    this.DataService = this.navParams.get('datos');
    console.log(this.DataService);
    this.callInfo();
    this.userActual = localStorage.getItem('verificacion');
    this.LoadTimmer();
    // this.navBar.setBackButtonText('hola');
    // this.navBar.backButtonClick = this.goShowPage;
    // this.navBar.backButtonClick = (e:UIEvent)=>{
    //   // todo something
    //   this.navCtrl.pop();
    //  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceInfoPage');
    // console.log(localStorage);
  }
  goSale() {
    this.saleService.setSaleProvider(this.DataService.idUser, this.DataService.idOff, this.userActual, '-');
    let Data = { 'datos': this.DataService };
    this.navCtrl.setRoot('ServiceSalePage', Data);
  }

  callInfo() {
    this.imagenUser = this.DataService.img;
    this.offer = this.DataService.sale;
    this.userName = this.DataService.name;
    this.info = this.DataService.info;
    if (this.DataService.imgOffer != undefined && this.DataService.imgOffer != '') {
      this.serviceImage = this.DataService.imgOffer;
    }
    this.loadDescripcion();
  }

  LoadTimmer() {
    // console.log('tiempo');
    // console.log(this.DataService.idOff);
    // console.log(this.DataService.idUser);
    this.statusSubs = this.saleService.getStatus(this.DataService.idUser, this.DataService.idOff).subscribe(
      (status) => {
        console.log('statusSubs-S service-info');
        // console.log(status);
        // console.log(status['$value']);
        if (status['$value'] == 'Published') {
          this.timerSubs = this.offerService.getTimmer(this.DataService.idOff).subscribe(
            (timer) => {
              console.log('timerSubs-S service-info');
              // console.log(timer);
              if (timer['$value'] != null) {
                this.contador = timer['$value'];
                if (this.contador == "00:15" ||
                  this.contador == "00:14" ||
                  this.contador == "00:13" ||
                  this.contador == "00:12" ||
                  this.contador == "00:10" ||
                  this.contador == "00:09" ||
                  this.contador == "00:08" ||
                  this.contador == "00:07" ||
                  this.contador == "00:06" ||
                  this.contador == "00:05" ||
                  this.contador == "00:04" ||
                  this.contador == "00:03" ||
                  this.contador == "00:02" ||
                  this.contador == "00:01"
                ) {
                  console.log('bloquear');
                  this.NoGoSale = true;
                }
              }
            }
          );
        } else {
          this.contador = "00:00";
          this.NoGoSale = true;
          if (status['$value'] == 'Cancelled') {
            this.AlertCancelOffer();
            this.goShowPage();
          }
        }
      }
    );
  }

  loadDescripcion() {
    this.offerDetailSub = this.offerService.getOffer(this.DataService.idOff).subscribe(
      (DetailBD) => {
        if (this.offerDetailSub != undefined) {
          console.log('offerDetailSub-S service-info');
          console.log(DetailBD);
          if (DetailBD) {
            if (this.serviceImage == 'assets/img/User/FotoServiceInfo.JPG' || this.serviceImage == null || this.serviceImage == undefined) {
              if (DetailBD.Clasificacion.informacion.foto != undefined) {
                this.serviceImage = DetailBD.Clasificacion.informacion.foto;
                console.log(this.serviceImage = DetailBD.Clasificacion.informacion.foto);
                this.DataService.imgOffer = this.serviceImage;
              }
            }
          }
        }
      }
    );
  }

  goShowPage() {
    this.navCtrl.setRoot('ShowPage');
  }
  //- alert
  AlertCancelOffer() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      // message: 'The auction was canceled by the Client :' + this.DataService.idOff + 'en info page',
      message: 'The auction was canceled by the Client',
      buttons: ['OK']
    });
    alert.present();
  }

  //terminamos las subscripciones con firebase
  ionViewWillLeave() {
    console.log('statusSubs-US service-info');
    console.log('timerSubs-US service-info');
    if (this.offerDetailSub != undefined) { this.offerDetailSub.unsubscribe(); }
    if (this.statusSubs != undefined) { this.statusSubs.unsubscribe(); }
    if (this.timerSubs != undefined) { this.timerSubs.unsubscribe(); }
  }
}
