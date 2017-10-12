import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProfessionalsService } from '../../services/professionals.service';
/**
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage {
  
  //-userActual
  UserActual:any;
  ListServicesVista:any=[];

  //-subs
  listServiceSubs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private professionalsService: ProfessionalsService
  ) {
    this.UserActual = localStorage.getItem('verificacion');
    console.log(this.UserActual);
    this.getServices();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

  goEdit(){
    this.listServiceSubs.unsubscribe();
    this.navCtrl.push('EditProviderPage');
  }
  goNew(){
    this.listServiceSubs.unsubscribe();
    this.navCtrl.push('ServiceInfoAPage');
  }

  DropService(id){
    console.log(id);
    this.professionalsService.dropService(this.UserActual,id);
  }

  getServices(){
    this.listServiceSubs=this.professionalsService.getServicesProfessional(this.UserActual).subscribe(
      (value)=>{
        this.ListServicesVista=[];
        // console.log(value);
        for(let key in value){
          if(value[key] != null){
            console.log(value[key]);
            this.ListServicesVista.push({"id":key,"TypeBusiness":value[key]['serv_typeBusiness'],"Service":value[key]['serv_service'],"SubService":value[key]['serv_subService']});
          // console.log(this.ListServicesVista);
          }
        }
    });
    // console.log(this.ListServicesVista);
  }
}
