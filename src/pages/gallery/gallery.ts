import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  //-form
  private gallery : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder : FormBuilder,
  ) {
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  goService(){
    //-guardar las fotos del servicio
    this.navCtrl.pop();
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
    this.gallery = this.formBuilder.group({
      fotoA : [''],
      fotoB: [''],
      fotoC: [''],
      fotoD: [''],
    });
  }
}
