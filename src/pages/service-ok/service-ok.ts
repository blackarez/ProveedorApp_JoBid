import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServiceOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-ok',
  templateUrl: 'service-ok.html',
})
export class ServiceOkPage {
  //Data
  DataService:any;
  DataUser:any;
  userActual:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadView();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceOkPage');
  }
  goVote(){
    let dataService = {'service':this.DataService,"user":this.DataUser};
    this.navCtrl.setRoot('ServiceVotePage',dataService);
  }

  loadView(){
    //-load data
    this.DataService =  this.navParams.get('service');
    this.DataUser = this.navParams.get('user');
    console.log(this.DataUser);
    console.log(this.DataService);
    //-localStorage
    this.userActual = localStorage.getItem('verificacion');
    console.log(this.userActual);
  }
}
