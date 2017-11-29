import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CertificatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-certificates',
  templateUrl: 'certificates.html',
})
export class CertificatesPage {
  //-form
  private certificados : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder : FormBuilder,
  ) {
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CertificatesPage');
  }
  goPaymentMethods(){
    this.navCtrl.push('PaymentMethodsPage');
  }

  fotoGaleria(foto){
    switch (foto) {
      case 'A':
        console.log('fotoA');
        break;
      case 'B':
        console.log('fotoB');
        break;
      case 'C':
        console.log('fotoC');
        break;
      case 'D':
        console.log('fotoD');
        break;
      
      default:
        break;
    }
  }

  getForm(){
    this.certificados = this.formBuilder.group({
      fotoA : [''],
      fotoB: [''],
      fotoC: [''],
      fotoD: [''],
    });
  }
}
