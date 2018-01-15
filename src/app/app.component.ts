import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//-pages
// import { HomePage } from '../pages/home/home';
// import { EditUserPage } from '../pages/edit-user/edit-user';
// import { ShowPage } from '../pages/show/show';
// import { MyServicesPage } from '../pages/my-services/my-services';
// import { PaymentsPage } from '../pages/payments/payments';
// import { PoliciesPage } from '../pages/policies/policies';

//-services
import { ProfessionalsService } from '../services/professionals.service';
//-provider
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //-Default
  userName: string = 'hola logeado';
  srcUser: string = 'assets/img/user.png';
  star:any = '3';
  starUser:any;

  //--root
  rootPage:string = 'HomePage';

  //--data
  userMenu:any;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,public afAuth: AngularFireAuth,
    private professionalsService : ProfessionalsService
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Edit', component: 'EditUserPage' },
      { title: 'Menu', component: 'ShowPage' },
      { title: 'My services', component: 'MyServicesPage' },
     { title: 'Payments', component: 'PaymentsPage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.usuarioLogeado();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  usuarioLogeado(){
    this.afAuth.authState.subscribe( userAuth => {
        console.log('find user menu');
        console.log(userAuth);
        // alert(JSON.stringify(userAuth));
        if(userAuth){
          // let email=  userAuth.providerData["0"].email;
          if(userAuth.providerData["0"].providerId == 'password'){
            let email =  userAuth.providerData["0"].email;
            console.log(email);

            let Userexists= this.professionalsService.getProfessionalExists(email).subscribe( (User) => {
              console.log('User Logueado');
              console.log(User);
              if(User['0']){
                this.loadViewUser(User['0']);
                if(Userexists != undefined){
                  // Userexists.unsubscribe();
                }
              }
            });
          }else{
            let faceUid =  userAuth.uid;
            console.log(faceUid);
            let Userexists= this.professionalsService.getProfessionalUidFace(faceUid).subscribe( (User) => {
              console.log('User Logueado');
              console.log(User);
              if(User['0']){
                this.loadViewUser(User['0']);
                if(Userexists != undefined){
                  // Userexists.unsubscribe();
                }
              }
            });
          }
          
        }
    });
  }

  loadViewUser(user){
    console.log(user);
    this.userName= user['prof_username'];
    if(user['prof_picture'] && user['prof_picture'] != '' && user['prof_picture'] != null && user['prof_picture'] != undefined){
      this.srcUser= user['prof_picture'];
    }
    // console.log(user['prof_picture']);
    // console.log(this.srcUser);
    console.log(user['prof_star']);
    if(user['prof_star'] && user['prof_star'] != ' ' && user['prof_star'] != null && user['prof_star'] != undefined){
      this.star= Math.round(user['prof_star']);
      let contenido='';
      if(Math.round(this.star) == 5){
        contenido +='cinco';
      }
      if(Math.round(this.star) == 4){
        contenido +='cuatro';
      }
      if(Math.round(this.star) == 3){
        contenido +='tres';
      }
      if(Math.round(this.star) == 2){
        contenido +='dos';
      }
      if(Math.round(this.star) == 1){
        contenido +='one';
      }
      this.starUser= contenido;
    }
    // localStorage.setItem('verificacion',user['$key']);
    // this.nav.setRoot('ShowPage');
  }

  
  cerrarSeccion(){
    this.afAuth.auth.signOut().then((value)=>{
      console.log(value);
      this.nav.setRoot('HomePage');
    }).catch((error) => console.info(error));
  }

  goPolicies(){
    this.nav.push('PoliciesPage');
  }

}
