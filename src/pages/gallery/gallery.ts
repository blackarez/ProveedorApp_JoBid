import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

//service 
// import { CameraService } from '../../services/camera.service';
import { ProfessionalsService } from '../../services/professionals.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

import * as firebase from 'firebase/app';


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
  //-data
  keyService:any;
  UserActual:any;
  //-form
  private gallery : FormGroup;

  //view
  fotoA:any; 
  fotoB:any; 
  fotoC:any; 
  fotoD:any; 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder : FormBuilder, 
    private camera : Camera, 
    private professionalsService : ProfessionalsService,
    // private cameraService : CameraService,
  ) {
    this.keyService = this.navParams.get('datos');
    console.log(this.keyService);
    this.UserActual = localStorage.getItem('verificacion');
    // this.loadService();
    this.getForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  goService(){
    //-guardar las fotos del servicio
    let DataGallery = {"fotoA":this.fotoA,"fotoB":this.fotoB,"fotoC":this.fotoC,"fotoD":this.fotoD,};
    this.professionalsService.setInfoServiceUserGallery(this.UserActual,DataGallery,this.keyService);
    this.navCtrl.pop();
  }

  fotoGaleria(foto){
    switch (foto) {
      case 'A':
        console.log('fotoA');
        this.camaraFotoA(this.UserActual+'/'+this.keyService+'/GalleryA');       
        break;
        case 'B':
        console.log('fotoB');
        this.camaraFotoB(this.UserActual+'/'+this.keyService+'/GalleryB');       
        break;
        case 'C':
        console.log('fotoC');
        this.camaraFotoC(this.UserActual+'/'+this.keyService+'/GalleryC');       
        break;
        case 'D':
        console.log('fotoD');
        this.camaraFotoD(this.UserActual+'/'+this.keyService+'/GalleryD');       
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
    this.professionalsService.getGalleryService(this.UserActual,this.keyService).subscribe(
      (GalleryB)=>{
        console.log(GalleryB);
        this.fotoA = GalleryB.prof_galleryA;
        this.fotoB = GalleryB.prof_galleryB;
        this.fotoC = GalleryB.prof_galleryC;
        this.fotoD = GalleryB.prof_galleryD;
      }
    ).unsubscribe();
  }

  //-camara
  async  camaraFotoA(file){
    console.log('clickCamara');
    try{
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 100,
        targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      // console.log(options);
      const result = await this.camera.getPicture(options);
      // alert(result);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image,'data_url');
      
      // alert(UploadTask);
      // console.log(JSON.stringify(UploadTask));
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {},
        (error) => { console.log(error)  },
        () => { let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.fotoA = url;
        }
      );
    } catch(e){ console.error(e);}
  }

  async  camaraFotoB(file){
    console.log('clickCamara');
    try{
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 100,
        targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image,'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {},
        (error) => { console.log(error)  },
        () => { let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.fotoB = url;
        }
      );
    } catch(e){ console.error(e);}
  }

  async  camaraFotoC(file){
    console.log('clickCamara');
    try{
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 100,
        targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image,'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {},
        (error) => { console.log(error)  },
        () => { let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.fotoC = url;
        }
      );
    } catch(e){ console.error(e);}
  }

  async  camaraFotoD(file){
    console.log('clickCamara');
    try{
      const options: CameraOptions = {
        quality: 60,
        targetHeight: 100,
        targetWidth: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }
      const result = await this.camera.getPicture(options);
      const image = 'data:image/jpeg;base64,' + result;
      const picture = storage().ref(file);
      let UploadTask = picture.putString(image,'data_url');
      UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {},
        (error) => { console.log(error)  },
        () => { let url = UploadTask.snapshot.downloadURL;
          console.log(url);
          this.fotoD = url;
        }
      );
    } catch(e){ console.error(e);}
  }

}
