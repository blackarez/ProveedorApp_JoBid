import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessionsService } from '../../services/professions.service';
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
  //-list
  ListServices:any = [];
  ListSubServices:any = [];
  //-paq
  DataService:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionsService : ProfessionsService
  ) {
    this.ListServices=this.professionsService.getProfessions();
    console.log(this.ListServices);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderInfoAPage');
  }
  
  goProviderInfoB(){
    this.DataService = {"serv_service":this.service,"serv_subService":this.subService,"serv_typeBusiness":this.typeBusiness};
    let Data = {'datos':this.DataService};
    this.navCtrl.push('ProviderInfoBPage',Data);
  }
  
  setSubServices(){
    console.log(this.service);
    this.ListSubServices=this.professionsService.getCategoryByProfession(this.service);
    console.log(this.ListSubServices);
  }
}
