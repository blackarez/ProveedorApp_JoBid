import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  DirecA: any;DirecB: any;DirecC: any;DirecD: any;telA: any;telB: any;
  responseData :any;
  responseDataUser :any;
  findNameEstado: string;

  codeAreaList : any;
  codeAreaEstadoSelect: any = [];
  country:any;area:any;prefix:any;line:any;
  userData = {"username":"","password":"","email":"","name":"","zipcode":"","state":"","picture":"","verificacion":"","pais":"","direccion":"","tel":""};
  
  ciudades: any =  [];
  ciudad: string =  undefined;
  stateZipcode: string = undefined;
  estados : any = [];

  windowRef: any;
  user:any;
  userB:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUserPage');
  }

}
