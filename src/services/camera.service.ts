import { Injectable } from "@angular/core";

import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';

// import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class CameraService{ 
    uploads:any = [];
    constructor( private camera : Camera){}

  async  clickCamara(file){
      console.log('clickCamara');
      try{
        
        const options: CameraOptions = {
          quality: 60,
        //   targetHeight: 100,
        //   targetWidth: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        }
        // console.log(options);
        const result = await this.camera.getPicture(options);
        // alert(result);
        const image = 'data:image/jpeg;base64,' + result;
        const picture = storage().ref('file');
        let UploadTask = picture.putString(image,'data_url');
        
        // alert(UploadTask);
        // console.log(JSON.stringify(UploadTask));
        UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
          (snapshot) =>  {
            // upload in progress
          },
          (error) => {
            // upload failed
            console.log(error)
          },
          () => {
            // upload success
            // this.uploads.url = UploadTask.snapshot.downloadURL;
            // // this.saveFileData(upload)
            this.uploads.url = UploadTask.snapshot.downloadURL;
            if(this.uploads.url != undefined){
              console.log(this.uploads.url);
                return this.uploads.url;
            }
              // console.log(UploadTask.snapshot.downloadURL);
              // return UploadTask.snapshot.downloadURL;
          }
        );
      } catch(e){
        console.error(e);
        // alert('error');
        // alert(e);
      }
      // return await link;

    }
}