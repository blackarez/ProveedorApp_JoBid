import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';

// import * as braintree from "braintree";
// import * as braintree from "braintree-web";
import * as dropin from 'braintree-web-drop-in';

/**
 * Generated class for the PaymentMethodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-methods',
  templateUrl: 'payment-methods.html',
})
export class PaymentMethodsPage {
  userData:any;
  
    //- create dron in
    CreateErr:any;
    Instance:any;
  
    booleanCreateErr:boolean=false;
    booleanInstance:boolean=false;
  
  constructor(
    public alertCtrl: AlertController,
    public navCt0rl: NavController, public navParams: NavParams) {
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodsPage');
  
    this.userData = this.navParams.get('datos');
    console.log(this.userData);
    console.log(this.navParams.get('datos'));
    // this.showAlert();
    this.dropin();
    //this.newGateWay();
    // this.setTokenClient();
  }

  goPayInfo(){
    if(this.booleanCreateErr){
      this.showAlertPay();
    }
    if(this.booleanInstance){
      this.Instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
        if(requestPaymentMethodErr){ 
          console.log(requestPaymentMethodErr); 
        }
        if(payload){ 
          console.log(payload);
        }
      });
      // console.log(this.userData);
      // let Data = {'datos':this.userData};
      // this.navCtrl.push(PayinfoPage,Data);

    }
    
  }

  
  showAlertPay() {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: 'verify the payment method information',
      buttons: ['OK']
    });
    alert.present();
  }
  

  dropin(){
    // var button = document.querySelector('#submit-button');
    dropin.create({
      authorization: 'sandbox_gmhv57wq_xg698xhxgkr3z5wx',
      container: '#dropin-container',
      paypal: {
        flow: 'vault'
      }
    }, (createErr, instance)  => {
      if(createErr){
        console.log(createErr);
        this.CreateErr = createErr; this.booleanCreateErr=true;}
        if(instance){
          console.log(instance);
         this.Instance = instance; this.booleanInstance=true;}
    });
  }

}
