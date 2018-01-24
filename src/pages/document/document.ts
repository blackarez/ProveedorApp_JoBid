import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';

//-services
import { ProfessionalsService } from '../../services/professionals.service';

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
  private documentos: FormGroup;
  //-load
  UserActual: any;
  //-view
  documentFoto: string;
  licenciaFoto: string;
  disDocumentImg: boolean = true;
  disLicenciaImg: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder,
    private camera: Camera, private professionalsService: ProfessionalsService,
  ) {
    this.loadView();
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentPage');
  }

  goTerms() {
    this.professionalsService.setDocument(this.UserActual, this.documentFoto, this.licenciaFoto);
    this.navCtrl.push('TermsPage');
  }

  loadView() {
    this.UserActual = localStorage.getItem('verificacion');
  }

  getForm() {
    this.documentos = this.formBuilder.group({
      documentFoto: ['', Validators.required],
      licenciaFoto: ['', Validators.required],
      // documentFoto : [''],
      // licenciaFoto: [''],
    });
  }

  async fotoDocumento() {
    let file = this.UserActual + '/Document';
    console.log('clickCamara');
    try {
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 300,
        targetWidth: 300,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image, 'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => { },
        (error) => { console.log(error) },
        () => {
          let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.documentFoto = url;
          this.disDocumentImg = false;
        }
      );
    } catch (e) { console.error(e); }
  }


  async fotoLicencia() {
    let file = this.UserActual + '/Licencia';
    console.log('clickCamara');
    try {
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image, 'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => { },
        (error) => { console.log(error) },
        () => {
          let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.licenciaFoto = url;
          this.disLicenciaImg = false;
        }
      );
    } catch (e) { console.error(e); }
  }

}
