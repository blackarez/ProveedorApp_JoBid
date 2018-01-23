import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

//-service
import { SaleService } from '../../services/sale.service';
import { OfferService } from '../../services/offer.service';
import { ProfessionalsService } from '../../services/professionals.service';
import { NotificacionService } from '../../services/notificacion.service';
/**
 * Generated class for the ServiceWinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-win',
  templateUrl: 'service-win.html',
})
export class ServiceWinPage {
  //-data
  DataService: any = [];
  //-view
  user: string;
  offer: string;
  sale: any;

  userActual: string;

  //-subcrip
  statusSub: any;
  //timer
  segundos: number = 0;
  minutos: number = 2;
  objNodeTimer: any;
  //button go to home
  disableGoHome: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    private saleService: SaleService, private offerService: OfferService,
    private professionalsService: ProfessionalsService,
    private notificacionService: NotificacionService,
  ) {
    this.DataService = this.navParams.get('datos');
    this.user = this.DataService['idUser'];
    this.offer = this.DataService['idOff'];
    this.sale = this.DataService['sale'];
    console.log(this.DataService);
    this.userActual = localStorage.getItem('verificacion');
    // console.log(this.userActual);
    this.startTimer();
    this.getStatusService();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceWinPage');
  }

  getStatusService() {
    this.statusSub = this.saleService.getStatus(this.user, this.offer).subscribe(
      (status) => {
        console.log('statusSub-S service-win');
        console.log(status);
        if (status['$value']) {
          if (status['$value'] == 'Waiting for the professional') {
            this.notificacionHired();
            this.goServiceNew();
          }
          if (status['$value'] == 'Cancelled') {
            this.notificacionCancel();
            this.goIndexService();
          }
          if (status['$value'] == 'CancelledProvider') {
            this.navCtrl.setRoot('ShowPage');
          }
        }
      });
  }

  goServiceNew() {
    console.info('goServiceWin');
    this.showAlertService();
    //-contarct
    console.log(this.DataService);
    let objContract = { "status": 'Waiting for the professional', 'User': this.user, 'info': this.DataService['info'], 'sale': this.DataService['sale'], 'service': this.DataService };
    // console.log(objContract);
    this.professionalsService.newContract(this.userActual, this.offer, objContract);

    //-data
    let dataService = { 'datos': this.DataService };
    console.log(dataService);
    this.navCtrl.setRoot('ServiceNewPage', dataService);
    // this.navCtrl.setRoot('ServiceNewPage');
    // console.log(this.statusSub);

  }

  goIndexService() {
    this.showAlertCancel();
    this.navCtrl.setRoot('ShowPage');
  }

  goResetProvider() {
    this.saleService.setStatus(this.user, this.offer, 'CancelledProvider');
    this.offerService.setStatus(this.offer, 'CancelledProvider');
  }

  //-alert

  showAlertService() {
    let alerteMail = this.alertCtrl.create({
      title: 'Information',
      message: 'Congratulations, the customer has accepted your offer, you can go to the customer to start the service.',
      buttons: ['OK']
    });
    alerteMail.present();
  }

  showAlertCancel() {
    let alerteMail = this.alertCtrl.create({
      title: 'Information',
      message: 'Sorry. The client has canceled the service.',
      buttons: ['OK']
    });
    alerteMail.present();
  }

  //--- timer
  startTimer() {
    this.objNodeTimer = setInterval(() => this.timer(), 1000);
  }

  private timer() {
    if (this.minutos == 0 && this.segundos == 1) {
      this.disableGoHome = false;
    } else {
      if (--this.segundos < 0) {
        this.segundos = 59;
        if (--this.minutos < 0) {
        }
      }
      console.log('contador: ', this.minutos, ':', this.segundos);
    }
  }

  //-notification
  notificacionHired() {
    console.info('Nota: You have been hired');
    this.notificacionService.mostrar('You have been hired', 5);
  }
  notificacionCancel() {
    console.info('Nota: The service has been canceled');
    this.notificacionService.mostrar('The service has been canceled', 6);
  }

  //terminamos las subscripciones con firebase
  ionViewWillLeave() {
    console.log('statusSub-US service-win');
    if (this.statusSub != undefined) { this.statusSub.unsubscribe(); }
  }

}
