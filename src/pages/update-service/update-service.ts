import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessionsService } from '../../services/professions.service';
import { ProfessionalsService } from '../../services/professionals.service';

/**
 * Generated class for the UpdateServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-service',
  templateUrl: 'update-service.html',
})
export class UpdateServicePage {
  //-data view
  service: any;
  subService: any;
  typeBusiness: any;
  experiencia: any;
  moreInformation: any;
  seguro: any;
  certificacion: any;
  booelanSeguro: boolean;
  booelanCertificacion: boolean;
  //-list
  ListServices: any = [];
  ListSubServices: any = [];
  //-paq
  DataService: any = [];

  //-data
  UserActual: any;
  keyService: any;

  //-subs
  getServiceProfessionalSubs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionsService: ProfessionsService,
    private professionalsService: ProfessionalsService,
  ) {
    this.keyService = this.navParams.get('datos');
    console.log(this.keyService);
    this.ListServices = this.professionsService.getProfessions();
    console.log(this.ListServices);
    this.UserActual = localStorage.getItem('verificacion');
    this.loadService();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateServicePage');
  }

  goProviderUpdateService() {
    console.log('getServiceProfessionalSubs-uS update-service');
    this.getServiceProfessionalSubs.unsubscribe();

    if (this.booelanSeguro == true) {
      this.seguro = 'true';
    } else {
      this.seguro = 'false';
    }
    if (this.booelanCertificacion == true) {
      this.certificacion = 'true';
    } else {
      this.certificacion = 'false';
    }
    this.DataService = { "serv_service": this.service, "serv_subService": this.subService };
    let DataServiceInfo = { "serv_experiencia": this.experiencia, "serv_moreInformation": this.moreInformation, "serv_insurance": this.seguro, "serv_certificate": this.certificacion };
    this.DataService["serv_detail"] = DataServiceInfo;
    console.log(this.DataService);
    this.professionalsService.setInfoServiceUser(this.UserActual, this.DataService, this.keyService);

    // let dataService = {'service':this.DataService,"user":this.DataUser};
    // this.navCtrl.setRoot(,DataService);
    // this.navCtrl.setRoot('ServiceJobPage',dataService);
    this.navCtrl.setRoot('EditUserPage');
  }

  changeCertification() {
    console.log('click');
    // console.log(this.booelanCertificacion);
    let cont = 1;
    if (this.booelanCertificacion == true && cont == 1) {
      this.booelanCertificacion = false;
      this.certificacion = 'false';
      cont = 2;
    }
    if (this.booelanCertificacion == false && cont == 1) {
      this.booelanCertificacion = true;
      this.certificacion = 'true';
      cont = 2;
    }
    // console.log(this.booelanCertificacion);
  }
  changeSeguro() {
    console.log('click');
    console.log(this.booelanSeguro);
    let cont = 1;
    if (this.booelanSeguro == true && cont == 1) {
      this.booelanSeguro = false;
      this.seguro = 'false';
      cont = 2;
    }
    if (this.booelanSeguro == false && cont == 1) {
      this.booelanSeguro = true;
      this.seguro = 'true';
      cont = 2;
    }
    console.log(this.booelanSeguro);
  }

  loadService() {
    this.getServiceProfessionalSubs = this.professionalsService.getServiceProfessional(this.UserActual, this.keyService).subscribe(
      (ServiceBD) => {
        console.log('getServiceProfessionalSubs-S update-service');
        console.log(ServiceBD);
        if (ServiceBD) {
          this.service = ServiceBD.serv_service;
          this.setSubServices();
          this.subService = ServiceBD.serv_subService;
          this.experiencia = ServiceBD.serv_detail.serv_experiencia;
          this.moreInformation = ServiceBD.serv_detail.serv_moreInformation;
          this.seguro = ServiceBD.serv_detail.serv_insurance;
          if (this.seguro == 'true') {
            this.booelanSeguro = true;
          } else {
            this.booelanSeguro = false;
          }
          console.log(this.booelanSeguro);

          this.certificacion = ServiceBD.serv_detail.serv_certificate;
          if (this.certificacion == 'true') {
            this.booelanCertificacion = true;
          } else {
            this.booelanCertificacion = false;
          }
          console.log(this.booelanCertificacion);

          // console.log(this.service);
          // console.log(this.subService);
          // console.log(this.experiencia);
          // console.log(this.moreInformation);
          // console.log(this.seguro);
          // console.log(this.certificacion);

        }
      }
    );
  }

  setSubServices() {
    console.log(this.service);
    this.ListSubServices = this.professionsService.getCategoryByProfession(this.service);
    console.log(this.ListSubServices);
  }

  addPictures() {
    let Data = { 'datos': this.keyService };
    this.navCtrl.push('GalleryPage', Data);
  }
}
