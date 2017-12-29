import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessionsService } from '../../services/professions.service';
import { ProfessionalsService } from '../../services/professionals.service';

/**
 * Generated class for the ServiceInfoAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-info-a',
  templateUrl: 'service-info-a.html',
})
export class ServiceInfoAPage {
  //-data view
  service:any;
  subService:any;
  typeBusiness:any;
  experiencia:any;
  moreInformation:any;
  certificacion:any;
  seguro:any;
  booelanSeguro:boolean= false;
  booelanCertificacion:boolean= false;

  keyService:any;
  //-list
  ListServices:any = [];
  ListSubServices:any = [];
  //-paq
  DataService:any=[];

  //-userActual
UserActual:any;
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

  changeCertification(){
    console.log('click');
    // console.log(this.booelanCertificacion);
    let cont = 1;
    if(this.booelanCertificacion == true  && cont == 1){
      this.booelanCertificacion = false;
      this.certificacion = 'false';
      cont = 2;
    }
    if(this.booelanCertificacion == false  && cont == 1){
      this.booelanCertificacion = true;
      this.certificacion = 'true';
      cont = 2;
    }
    // console.log(this.booelanCertificacion);
  }
  changeSeguro(){
    console.log('click');
    console.log(this.booelanSeguro);
    let cont = 1;
    if(this.booelanSeguro == true && cont == 1){
      this.booelanSeguro = false;
      this.seguro = 'false';
      cont = 2;
    }
    if(this.booelanSeguro == false && cont == 1){
      this.booelanSeguro = true;
      this.seguro = 'true';
      cont = 2;
    }
    console.log(this.booelanSeguro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceInfoAPage');
  }
  goProviderInfoB(){
    if(this.booelanSeguro == true){
      this.seguro = 'true';
    }else{
      this.seguro = 'false';
    }
    if(this.booelanCertificacion == true){
      this.certificacion = 'true';
    }else{
      this.certificacion = 'false';
    }
    this.DataService = {"serv_service":this.service,"serv_subService":this.subService};
    // let Data = {'datos':this.DataService};
    let DataServiceInfo = {"serv_experiencia":this.experiencia,"serv_moreInformation":this.moreInformation,"serv_insurance":this.seguro,"serv_certificate":this.certificacion};
    this.DataService["serv_detail"]=DataServiceInfo;
    console.log(this.DataService);
    this.professionalsService.setInfoServiceUser(this.UserActual,this.DataService,this.keyService);
    this.navCtrl.setRoot('EditUserPage');
    // this.navCtrl.pop();
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
