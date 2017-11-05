import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { ProfessionalsService } from '../../services/professionals.service';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userData = null;
  mensage :string = '';
  displayName;  
  providerFaceBook:any;
  userDataUpdate:any;
  constructor(
    public navCtrl: NavController, 
    // private facebook:  Facebook,
    private professionalsService : ProfessionalsService,
    public afAuth: AngularFireAuth
  ) {
    //-identifica y redirecciona usuario logeado.
    this.usuarioLogeado();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  facebookir(){
    let goPagePrehome:boolean = false;
    let userDB:any;
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider)
      .then(res => {
        console.log(res);
        // console.info(JSON.stringify(res));
        // console.log(res.user.email);
        // console.log('res.additionalUserInfo.profile.email');
        // console.log(res.additionalUserInfo.profile.email);
        //console.log(res);
        let getProfesionals=this.professionalsService.getProfessionals().subscribe((Jobers) => {
          // console.log(Jobers);
          Jobers.forEach((Job) =>{
          console.log('getProfesionals-S home');
            // console.log(Job);
            // console.log(Job['user_email']);
            if(res.additionalUserInfo.providerId == "facebook.com"){
              // console.info(' additionUser facebook');
              if(Job['user_email'] == res.additionalUserInfo.profile.email){
                console.info('Find User Datos');
                // console.log('res.additionalUserInfo.profile.email');
                // console.log(res.additionalUserInfo.profile.email);
                // console.log(res.additionalUserInfo.providerId);
                console.log(Job);
                userDB = Job;
                goPagePrehome= true;
              }
            }
          });
          console.log(userDB);
          console.log(goPagePrehome);
          if(goPagePrehome != false){
            this.goNextPagePrehome(userDB);
          }else{
            this.singup();
          }

          getProfesionals.unsubscribe();
          console.log('getProfesionals-US home');
        });
      });
  }
  goNextPagePrehome(datos:any){
    console.log(datos);
    //console.log(datos['$key']);
    this.userDataUpdate ={ "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
    //console.log(this.userDataUpdate);
    let Data = {'datos':this.userDataUpdate}
    this.navCtrl.setRoot('ShowPage',Data);
    this.navCtrl.setRoot('ShowPage');
  }

 	login(){
 		this.navCtrl.push('LoginPage');
 	}
 	singup(){
 		this.navCtrl.push('SingupPage');
   }

   
   usuarioLogeado(){
    this.afAuth.authState.subscribe( userAuth => {
        console.log('find user menu');
        console.log(userAuth);
        if(userAuth){
          let email=  userAuth.providerData["0"].email;
          console.log(email);
          let Userexists= this.professionalsService.getProfessionalExists(email).subscribe( (User) => {
            console.log('User Logueado');
            console.log(User);
            if(User['0']){
              this.goNextPagePrehome(User['0']);
            }
            Userexists.unsubscribe();
          });
        }
    });
  }
// usuarioLogeado(){
    // let userDBLoad:any;
    // let goPagePrehomeLoad = false;
    // let homeStatus=this.afAuth.authState.subscribe( userAuth => {
    //   if (userAuth){
    //         console.info('find user home login');
    //         let email=  userAuth.providerData["0"].email;
    //         let Userexists= this.userService.getUserEmailPerfil(email);
    //         Userexists.then((users) => {
    //           users.forEach((user) =>{
    //             if(user != undefined && user != null){
    //                 userDBLoad = user;
    //                 goPagePrehomeLoad= true;
    //                 console.log(goPagePrehomeLoad);
    //                 if(goPagePrehomeLoad){
    //                   this.goNextPagePrehomeFace(userDBLoad);
    //                   // this.goNextPagePrehomeFace();
    //                 }
    //             }
    //           });
    //         });
    //   } else {
    //     console.info('find user home login - no');
    //   }
    // });
    // homeStatus.unsubscribe();
  // }
  // goNextPagePrehome(datos){
  //   this.userDataUpdate ={ "email":datos['user_email'],"name":datos['user_name'],"pais":datos['user_pais'],"password":datos['user_password'],"picture":datos['user_picture'],"state":datos['user_state'],"tel":datos['user_tel'],"username":datos['user_username'],"verificacion":datos['$key'],"zipcode":datos['user_zipcode']};
  //  let Data = {'datos':this.userDataUpdate}
  //   this.navCtrl.setRoot('ShowPage',Data);

  // }

}
