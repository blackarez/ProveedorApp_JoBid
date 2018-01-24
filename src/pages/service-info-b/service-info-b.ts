import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessionalsService } from '../../services/professionals.service';
/**
 * Generated class for the ServiceInfoBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-info-b',
  templateUrl: 'service-info-b.html',
})
export class ServiceInfoBPage {
  //-data
  DataService: any = [];
  codeAreaList: any = [];
  //-vista
  address: string;
  Phone: string;
  Mobile: string;
  experiencia: string;
  moreInformation: string;

  showPersonalB: boolean = true;
  Tradename: string;
  LegalName: string;
  TaxID: string;

  //-userActual
  UserActual: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionalsService: ProfessionalsService
  ) {
    this.DataService = this.navParams.get('datos');
    console.log(this.DataService);
    console.log(localStorage);
    this.UserActual = localStorage.getItem('verificacion');
    console.log(this.UserActual);
    this.loadView();
    // this.UserActual = 'prof_1506011271575';
    // this.UserActual = 'prof_1506004758918';
    // console.log(this.UserActual);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceInfoBPage');
  }

  goDocument() {
    this.saveInfoService();
    this.navCtrl.setRoot('ShowPage');
  }

  saveInfoService() {
    let DataServiceInfo = { "serv_address": this.address, "serv_Phone": this.Phone, "serv_Mobile": this.Mobile, "serv_experiencia": this.experiencia, "serv_moreInformation": this.moreInformation };
    if (this.showPersonalB == false) {
      DataServiceInfo['serv_Tradename'] = this.Tradename;
      DataServiceInfo['serv_LegalName'] = this.LegalName;
      DataServiceInfo['serv_TaxID'] = this.TaxID;
    }

    this.DataService["serv_detail"] = DataServiceInfo;
    console.log(this.DataService);
    this.professionalsService.setInfoServiceUser(this.UserActual, this.DataService);
  }

  loadView() {
    if (this.DataService['serv_typeBusiness'] != 'Personal') {
      this.showPersonalB = false;
    }
  }

}
