import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessionsService } from '../../services/professions.service';
import { ProfessionalsService } from '../../services/professionals.service';
/**
 * Generated class for the ProviderInfoAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-provider-info-a',
  templateUrl: 'provider-info-a.html',
})
export class ProviderInfoAPage {
  //-data view
  service:any;
  subService:any;
  typeBusiness:any;
  experiencia:any;
  moreInformation:any;
  seguro:any;
  certificacion:any;
  //-list
  ListServices:any = [];
  ListSubServices:any = [];
  //-paq
  DataService:any=[];

  //-data
  UserActual:any;
  keyService:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionsService : ProfessionsService,
    private professionalsService: ProfessionalsService,
  ) {
    this.ListServices=this.professionsService.getProfessions();
    console.log(this.ListServices);    
    this.UserActual = localStorage.getItem('verificacion');
    var Key = new Date().getTime();
    this.keyService = "Serv_"+(Key);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderInfoAPage');
  }
  
  goProviderInfoB(){
    this.DataService = {"serv_service":this.service,"serv_subService":this.subService};
    // let Data = {'datos':this.DataService};
    let DataServiceInfo = {"serv_experiencia":this.experiencia,"serv_moreInformation":this.moreInformation,"serv_insurance":this.seguro,"serv_certificate":this.certificacion};
    this.DataService["serv_detail"]=DataServiceInfo;
    console.log(this.DataService);
    this.professionalsService.setInfoServiceUser(this.UserActual,this.DataService,this.keyService);

    // this.navCtrl.push('ProviderInfoBPage',Data);
    // this.navCtrl.push('ProviderInfoBPage');
    // this.navCtrl.push('CertificatesPage');
    this.navCtrl.push('PaymentMethodsPage');
  }
  
  setSubServices(){
    console.log(this.service);
    this.ListSubServices=this.professionsService.getCategoryByProfession(this.service);
    console.log(this.ListSubServices);
  }

  addPictures(){
    let Data = {'datos':this.keyService};
    this.navCtrl.push('GalleryPage',Data);
  }
}
