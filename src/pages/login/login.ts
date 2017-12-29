import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';

//-service
import { ProfessionalsService } from '../../services/professionals.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //-Data user
  userData = {"username":"","password":""};
  userDataUpdate: any =[];
  pass:any;

  //-- form validation
  private todo : FormGroup;
    constructor(public navCtrl: NavController , public navParams: NavParams, 
      public alertCtrl: AlertController, private professionalsService : ProfessionalsService,
      public afAuth: AngularFireAuth,
      private fb:  Facebook,
      private formBuilder: FormBuilder,
    ) {
      // this.pass ="mi clave";
      this.todo = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    let getUserLogin= this.professionalsService.getUserLoginPwd(this.userData["password"]);
    // console.log(getUserLogin);
    // console.log(JSON.stringify( getUserLogin) );

    let userPromesa = getUserLogin.subscribe( (value)=> {
        // console.log('success');
        console.log('userPromesa-S login');
        console.log(value);
        if(value['0']){
          // console.log(value['0']['prof_username']);
          // console.log(value['0']['prof_email']);
          if( (this.userData["username"] == value['0']['prof_username']) || (this.userData["username"] == value['0']['prof_email'])){
            console.info('existeUserPwd');
            this.loginFirebaseUserMail(value['0']);
          }
        }else{
          this.showAlertLogin();
          console.error('-usuario no se encuentra en base de datos');
        }
        console.log('userPromesa-US login');
      userPromesa.unsubscribe();  
    });
}

loginFirebaseUserMail(datos:any){
//   console.log(datos);
//   console.log(datos['$key']);
//   console.log (datos['prof_email']);
//  console.log ( datos['prof_password']);

  this.userDataUpdate = {"username":datos["prof_username"],"password":datos["prof_password"],"email":datos["prof_email"],"name":datos["prof_name"],"lastName":datos["prof_lastName"],"date":datos["prof_date"],"socialSecurity":datos["prof_socialSecurity"],"zipcode":datos["prof_zipcode"],"state":datos["prof_state"],"picture":datos["prof_picture"],"pais":datos["prof_pais"],"direccion":datos["prof_direccion"],"tel":datos["prof_tel"],"star":datos["prof_star"]};

  console.log(this.userDataUpdate);
  try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(datos['prof_email'],datos['prof_password']).then( ()=>{
    console.log(result);
      this.userDataUpdate['verificacion'] = datos['$key'];
      localStorage.setItem('verificacion',datos['$key']);
      console.log(this.userDataUpdate);

      // let Data = {'datos':this.userDataUpdate}
      // this.navCtrl.setRoot(ShowPage,Data);
        this.navCtrl.setRoot('ShowPage');
    }).catch(
      (error) =>{
        this.showAlertLogin();
      });
  }catch(e){ console.error(e); console.error('error ')}
}

facebookir(){
// let goPagePrehome:boolean = false;
// let userDB:any;
  try{
  // firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
  // // firebase.auth().signInWithRedirect(new firebase.auth.FacebookAuthProvider())
  //   .then(
    this.fb.login(['email'])
    .then((res) => {
      console.log('Logged into Facebook!', res);
      // alert(JSON.stringify(res));
      let credencial = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      firebase.auth().signInWithCredential(credencial).then(
      (info) => {
      //console.log(res.user.email);
      // alert(res.authResponse.accessToken);
      // alert(credencial);
      // alert(JSON.stringify(info));
      // alert(JSON.stringify(info.providerData['0']['email']));
      // alert(JSON.stringify(info.providerData));
      console.log(info);
      console.info(JSON.stringify(info));
      if(info.providerData["0"].email){
        let userBD =this.professionalsService.getProfessionalExists(info.providerData["0"].email).subscribe(
              (value)=>{
                console.info(JSON.stringify(value));
                console.log('professionalsService-S login');
                for(let key in value){
                  // console.log(value[key]);
                  if(value[key]){
                    console.log(value[key]);
                    console.info(JSON.stringify(value[key]));
                    this.goNextPagePrehomeFace(value[key]);
                  }
                }
                console.log('professionalsService-US login');
                userBD.unsubscribe();
              }
            );
          }
      }
      ).catch(e => {
        console.log('Error signInWithCredential', e);
        // alert(JSON.stringify(e));
        // alert('Error signInWithCredential');
      });
    }).catch(e => {
    console.log('Error zing into Facebook', e)
    // alert(JSON.stringify(e));
    });
  }catch(e){console.error(e); 
    // alert('try c info');
}
}
 
goNextPagePrehomeFace(datos:any){
//   console.log(datos);
// alert('gonexpagePre');
  console.log(datos['$key']);
  console.log (datos['prof_email']);
 console.log ( datos['prof_password']);

  this.userDataUpdate = {"username":datos["prof_username"],"password":datos["prof_password"],"email":datos["prof_email"],"name":datos["prof_name"],"lastName":datos["prof_lastName"],"date":datos["prof_date"],"socialSecurity":datos["prof_socialSecurity"],"zipcode":datos["prof_zipcode"],"state":datos["prof_state"],"picture":datos["prof_picture"],"pais":datos["prof_pais"],"direccion":datos["prof_direccion"],"tel":datos["prof_tel"],"star":datos["prof_star"]};

  // console.log(this.userDataUpdate);
      
  this.userDataUpdate['verificacion'] = datos['$key'];
  localStorage.setItem('verificacion',datos['$key']);
  console.log(this.userDataUpdate);
  this.navCtrl.setRoot('ShowPage');
   
}
  
//-- alertas
  showAlertLogin() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Bad request wrong username or email and password',
      buttons: ['OK']
    });
    alert.present();
  } 
}
