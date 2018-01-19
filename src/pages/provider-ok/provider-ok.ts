import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProviderOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-provider-ok',
  templateUrl: 'provider-ok.html',
})
export class ProviderOkPage {
  //timer
  segundos: number = 5;
  objNodeTimer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
  ) {
    this.startTimer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderOkPage');
  }
  goHome() {
    this.navCtrl.setRoot('HomePage');
    this.goClose();
  }

  goClose() {
    // this.afAuth.auth.signOut().then((value)=>{
    //   console.log(value);
    //   this.nav.setRoot('HomePage');
    // }).catch((error) => console.info(error));
  }

  //--- timer
  startTimer() {
    this.objNodeTimer = setInterval(() => this.timer(), 1000);
  }

  private timer() {
    console.log(this.segundos);
    // console.log(this.status);
    if (this.segundos == 1) {
      clearInterval(this.objNodeTimer);
      console.log('servicion fin');
      this.goHome();
      this.showAlertEmail();
    } else {
      if (--this.segundos < 0) {
        // this.modificarStatus();
        this.segundos = 2;
      }
    }
  }

  //-correo enviado en sign up

  showAlertEmail() {
    let alerteMail = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'An email has been sent to verify your acount',
      buttons: ['OK']
    });
    alerteMail.present();
  }

}
