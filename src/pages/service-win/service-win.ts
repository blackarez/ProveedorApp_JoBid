import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

//-service
import { SaleService } from '../../services/sale.service';
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
  DataService:any=[];
  //-view
  user:string;
  offer:string;
  sale:any;

  userActual:string;

  //-subcrip
  statusSub:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private saleService :SaleService,
    private professionalsService:ProfessionalsService,
    private notificacionService : NotificacionService,
  ) {
    this.DataService = this.navParams.get('datos');
    this.user = this.DataService['idUser'];
    this.offer = this.DataService['idOff'];
    this.sale = this.DataService['sale'];
    console.log(this.DataService);
    this.userActual = localStorage.getItem('verificacion');
    // console.log(this.userActual);
    this.getStatusService();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceWinPage');
  }

getStatusService(){
  this.statusSub = this.saleService.getStatus(this.user,this.offer).subscribe(
    (status) =>{
      console.log('statusSub-S service-win');
      console.log(status);
      if(status['$value']){
        if(status['$value'] == 'Waiting for the professional'){
          this.notificacionHired();
          this.goServiceNew();
          console.log('statusSub-US service-win');
          this.statusSub.unsubscribe();
        }
        if(status['$value'] == 'Cancelled'){
          this.notificacionCancel();
          this.goIndexService();
          console.log('statusSub-US service-win');
          this.statusSub.unsubscribe();
        }
      }
    });
}

goServiceNew(){
  console.info('goServiceWin');
  this.showAlertService();
  //-contarct
  console.log(this.DataService);
  let objContract = {"status":'Waiting for the professional','User':this.user,'info':this.DataService['info'],'sale':this.DataService['sale']};
  // console.log(objContract);
  this.professionalsService.newContract(this.userActual,this.offer,objContract);

  //-data
  let dataService = {'datos':this.DataService};
  console.log(dataService);
  this.navCtrl.setRoot('ServiceNewPage',dataService);
  // this.navCtrl.setRoot('ServiceNewPage');
  // console.log(this.statusSub);
  
}

goIndexService(){
  this.showAlertCancel();
  this.navCtrl.setRoot('ShowPage');
  // this.statusSub.unsubscribe();
  // console.log(this.statusSub);

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

//-notification
notificacionHired(){
  console.info('Nota: You have been hired');
  this.notificacionService.mostrar('You have been hired',5);
}
notificacionCancel(){
  console.info('Nota: The service has been canceled');
  this.notificacionService.mostrar('The service has been canceled',6);
}

}
