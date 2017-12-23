webpackJsonp([27],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { auth } from 'firebase';
// import { FirebaseAppName } from 'angularfire2';
// import { FirebaseApp } from 'angularfire2/firebase.app.module';
// import { firebaseConfig } from '../../app/app.module';
//service

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, fb, professionalsService, afAuth) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.professionalsService = professionalsService;
        this.afAuth = afAuth;
        this.userData = null;
        this.mensage = '';
        this.x = [];
        //camera
        this.uploads = [];
        //-identifica y redirecciona usuario logeado.
        this.usuarioLogeado();
        this.professionalsService.getIni();
        // this.audio();
    }
    HomePage.prototype.isBigEnough = function (element) {
        // return element >= 15;
        console.log(element);
    };
    // audio(){
    //   this.nativeAudio.preloadSimple('uniqueId1', 'assets/timbre.mp3').then(this.onSuccess, this.onError);
    //   this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);
    // }
    // onSuccess(){
    //   console.log(' success');
    // }
    // onError(){
    //   console.log('error');
    // }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        // let people = ['jamie', 'jack', 'isaac'];
        // console.log(people); // 1
        // let jackIndex = people.findIndex(x => x === 'isaac');
        // console.log(jackIndex); // 1
        // let numbers = [1, 3,4];
        // console.log(numbers);
        // let oddNumber = numbers.find(x => x == 4);
        // console.log(oddNumber); // 1
        // this.x = [{ "id": 1 }, { "id": -2 }, { "id": 3 }];
        // console.log(this.x);
        // let y = this.x.find(x => x.id == 2 );
        // console.log(y); // 1
        // if(y != undefined){
        //   console.log(y.id); // 1
        // }
        // let z = this.x.findIndex(x => x.id == 2 );
        // console.log(z); // 1
    };
    HomePage.prototype.facebookir = function () {
        var _this = this;
        var goPagePrehome = true;
        var userDB;
        this.fb.login(['email'])
            .then(function (res) {
            console.log('Logged into Facebook!', res);
            alert(JSON.stringify(res));
            var credencial = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(credencial).then(function (info) {
                alert(JSON.stringify(info));
                alert(JSON.stringify(info.providerData['0']['email']));
                alert(JSON.stringify(info.providerData));
                console.log(info);
                console.log(info.providerData.email);
                console.log(info.providerData);
                if (info.providerData['0']['email'] != undefined) {
                    // this.userService.getUserEmailPerfil(info.providerData['0']['email']).subscribe(
                    //   (emailBD)=>{
                    //     alert(JSON.stringify(emailBD));
                    //     if(emailBD == info.providerData.email){
                    //     }
                    //   });
                    var getProfesionals_1 = _this.professionalsService.getProfessionals().subscribe(function (Jobers) {
                        // alert(JSON.stringify(Jobers));
                        console.log(Jobers);
                        Jobers.forEach(function (Job) {
                            console.log('getProfesionals-S home');
                            //console.log(user);
                            // if(user['user_email'] == res.user.email){
                            //     // console.log('res.user.email');
                            //     // console.log(user);
                            //     userDB = user;
                            //     goPagePrehome= true;
                            // }
                            //dentro de res.user -> hay otros datos de usuario -> email?
                            //if(user.providerData["0"].providerId == "facebook.com"){
                            if (Job['prof_email'] == info.providerData['0']['email']) {
                                // console.log('res.additionalUserInfo.profile.email');
                                // console.log(user);
                                console.log(Job);
                                userDB = Job;
                                goPagePrehome = false;
                            }
                            //}
                        });
                        console.log(userDB);
                        console.log(goPagePrehome);
                        if (goPagePrehome != false) {
                            // this.goNextPagePrehome(userDB);
                        }
                        else {
                            _this.singup();
                        }
                        getProfesionals_1.unsubscribe();
                        console.log('getProfesionals-US home');
                    });
                }
            }).catch(function (e) {
                console.log('Error signInWithCredential', e);
                // alert(JSON.stringify(e));
                // alert('Error signInWithCredential');
            });
        })
            .catch(function (e) {
            console.log('Error zing into Facebook', e);
            alert(JSON.stringify(e));
        });
    };
    // facebookir(){
    //   let goPagePrehome:boolean = false;
    //   let userDB:any;
    //   var provider = new firebase.auth.FacebookAuthProvider();
    //   provider.addScope('email');
    //   firebase.auth().signInWithPopup(provider)
    //     .then(res => {
    //       console.log(res);
    //       // console.info(JSON.stringify(res));
    //       // console.log(res.user.email);
    //       // console.log('res.additionalUserInfo.profile.email');
    //       // console.log(res.additionalUserInfo.profile.email);
    //       //console.log(res);
    //       let getProfesionals=this.professionalsService.getProfessionals().subscribe((Jobers) => {
    //         // console.log(Jobers);
    //         Jobers.forEach((Job) =>{
    //         console.log('getProfesionals-S home');
    //           // console.log(Job);
    //           // console.log(Job['user_email']);
    //           if(res.additionalUserInfo.providerId == "facebook.com"){
    //             // console.info(' additionUser facebook');
    //             if(Job['prof_email'] == res.additionalUserInfo.profile.email){
    //               console.info('Find User Datos');
    //               // console.log('res.additionalUserInfo.profile.email');
    //               // console.log(res.additionalUserInfo.profile.email);
    //               // console.log(res.additionalUserInfo.providerId);
    //               console.log(Job);
    //               userDB = Job;
    //               goPagePrehome= true;
    //             }
    //           }
    //         });
    //         console.log(userDB);
    //         console.log(goPagePrehome);
    //         if(goPagePrehome != false){
    //           this.goNextPagePrehome(userDB);
    //         }else{
    //           this.singup();
    //         }
    //         getProfesionals.unsubscribe();
    //         console.log('getProfesionals-US home');
    //       });
    //     });
    // }
    HomePage.prototype.goNextPagePrehome = function (datos) {
        console.log(datos);
        //console.log(datos['$key']);
        this.userDataUpdate = { "email": datos['user_email'], "name": datos['user_name'], "pais": datos['user_pais'], "password": datos['user_password'], "picture": datos['user_picture'], "state": datos['user_state'], "tel": datos['user_tel'], "username": datos['user_username'], "verificacion": datos['$key'], "zipcode": datos['user_zipcode'] };
        var Data = { 'datos': this.userDataUpdate };
        this.navCtrl.setRoot('ShowPage', Data);
        // this.navCtrl.setRoot('ShowPage');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.singup = function () {
        this.navCtrl.push('SingupPage');
    };
    HomePage.prototype.usuarioLogeado = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (userAuth) {
            console.log('find user menu');
            console.log(userAuth);
            if (userAuth) {
                var email = userAuth.providerData["0"].email;
                console.log(email);
                var Userexists_1 = _this.professionalsService.getProfessionalExists(email).subscribe(function (User) {
                    console.log('User Logueado');
                    console.log(User);
                    if (User['0']) {
                        _this.goNextPagePrehome(User['0']);
                    }
                    Userexists_1.unsubscribe();
                });
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content>\n\n  <!--  <h3>Ionic Menu Starter</h3>\n\n \n\n   <p>\n\n     If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n   </p>\n\n   <button ion-button secondary menuToggle>Toggle Menu</button> -->\n\n  \n\n   <ion-card *ngIf="userData" >\n\n     <ion-card-header> {{userData.username}} </ion-card-header>\n\n     <img [src]= "userData.picture">\n\n     <ion-card-content>\n\n       <p>Email: {{ userData.email}}</p>\n\n       <p>Name: {{ userData.name}}</p>\n\n     </ion-card-content>\n\n   </ion-card>\n\n   <img src="assets/img/JoBidProveedor.jpg" >\n\n     <h5 id="home-heading1" style="">Sing up or Log in</h5>\n\n     <div padding>\n\n       <!-- <button ion-button block color="danger" (click)="googleir()">Log in with Google</button> -->\n\n       <button ion-button block (click)="facebookir()">Sing in with Faceook</button>\n\n     </div>\n\n     <ion-grid class="tabMenu">\n\n      <ion-row>\n\n       <ion-col>\n\n         <button ion-button block color="light" (click)="singup()">\n\n           <ion-grid>\n\n             <ion-row>\n\n               <ion-icon name="contact"></ion-icon>\n\n             </ion-row>  \n\n             <ion-row> \n\n              <p>sing up</p>\n\n             </ion-row>\n\n           </ion-grid> \n\n         </button>\n\n       </ion-col>\n\n       <ion-col>\n\n         <button ion-button block color="light"(click)="login()">\n\n         <ion-grid>\n\n             <ion-row>\n\n               <ion-icon name="lock"></ion-icon>\n\n             </ion-row>  \n\n             <ion-row> \n\n              <p>login</p>\n\n             </ion-row>\n\n           </ion-grid> \n\n         </button>\n\n       </ion-col>\n\n      </ion-row>\n\n     </ion-grid>  \n\n </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=27.js.map