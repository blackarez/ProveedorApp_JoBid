import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

//-page

 //-provider
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//-service
import { ProfessionalsService } from '../../services/professionals.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  //-Data
  userData = {"username":"","password":""};
  userDataUpdate: any =[];
  pass:any;

    constructor(public navCtrl: NavController , 
      public navParams: NavParams, 
      public alertCtrl: AlertController,
      private professionalsService : ProfessionalsService,
      public afAuth: AngularFireAuth  
    ) {
      // this.pass ="mi clave";
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
    const result = this.afAuth.auth.signInWithEmailAndPassword(datos['prof_email'],datos['prof_password']);
    console.log(result);

    result.catch( (error) =>{
      this.showAlertLogin();
    });
    if(result){
      this.userDataUpdate['verificacion'] = datos['$key'];
      localStorage.setItem('verificacion',datos['$key']);
      console.log(this.userDataUpdate);

      // let Data = {'datos':this.userDataUpdate}
      // this.navCtrl.setRoot(ShowPage,Data);
        this.navCtrl.setRoot('ShowPage');
    }
  }catch(e){ console.error(e); console.error('error ')}
}

facebookir(){
// let goPagePrehome:boolean = false;
// let userDB:any;
try{
firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
  .then(res => {
    //console.log(res.user.email);
    console.log(res);
    console.info(JSON.stringify(res));
    if(res.user.providerData["0"].email){
      let userBD =this.professionalsService.getProfessionalExists(res.user.providerData["0"].email).subscribe(
        (value)=>{
          console.log(value);
          if(value['0']){
            console.log(value['0']);
            this.goNextPagePrehomeFace(value['0']);
          }
        }
      );
    }
  });
  }catch(e){ console.error(e);}
}
        
goNextPagePrehomeFace(datos:any){
//   console.log(datos);
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
          
  showAlertLogin() {
    let alert = this.alertCtrl.create({
      title: 'login failed',
      subTitle: 'Bad request wrong username or email and password',
      buttons: ['OK']
    });
    alert.present();
  } 
}
