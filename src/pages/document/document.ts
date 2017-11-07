import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {
  //-form
  private documentos : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
  ) {
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentPage');
  }

  goTerms(){
    this.navCtrl.push('TermsPage');
  }

  getForm(){
    this.documentos = this.formBuilder.group({
      documentFoto : ['', Validators.required],
      licenciaFoto: ['', Validators.required],
      // documentFoto : [''],
      // licenciaFoto: [''],
    });
    
  }

  fotoDocumento(){

  }
  fotoLicencia(){

  }

}
