webpackJsonp([27],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(664);
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

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



// import { NativeAudio } from '@ionic-native/native-audio';
// import { Camera, CameraOptions } from '@ionic-native/camera';
// import { storage } from 'firebase';
var HomePage = (function () {
    function HomePage(navCtrl, 
        // private facebook:  Facebook,
        professionalsService, afAuth) {
        this.navCtrl = navCtrl;
        this.professionalsService = professionalsService;
        this.afAuth = afAuth;
        this.userData = null;
        this.mensage = '';
        //camera
        this.uploads = [];
        //-identifica y redirecciona usuario logeado.
        this.usuarioLogeado();
        // this.audio();
    }
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
    };
    HomePage.prototype.facebookir = function () {
        var _this = this;
        var goPagePrehome = false;
        var userDB;
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
        provider.addScope('email');
        __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithPopup(provider)
            .then(function (res) {
            console.log(res);
            // console.info(JSON.stringify(res));
            // console.log(res.user.email);
            // console.log('res.additionalUserInfo.profile.email');
            // console.log(res.additionalUserInfo.profile.email);
            //console.log(res);
            var getProfesionals = _this.professionalsService.getProfessionals().subscribe(function (Jobers) {
                // console.log(Jobers);
                Jobers.forEach(function (Job) {
                    console.log('getProfesionals-S home');
                    // console.log(Job);
                    // console.log(Job['user_email']);
                    if (res.additionalUserInfo.providerId == "facebook.com") {
                        // console.info(' additionUser facebook');
                        if (Job['user_email'] == res.additionalUserInfo.profile.email) {
                            console.info('Find User Datos');
                            // console.log('res.additionalUserInfo.profile.email');
                            // console.log(res.additionalUserInfo.profile.email);
                            // console.log(res.additionalUserInfo.providerId);
                            console.log(Job);
                            userDB = Job;
                            goPagePrehome = true;
                        }
                    }
                });
                console.log(userDB);
                console.log(goPagePrehome);
                if (goPagePrehome != false) {
                    _this.goNextPagePrehome(userDB);
                }
                else {
                    _this.singup();
                }
                getProfesionals.unsubscribe();
                console.log('getProfesionals-US home');
            });
        });
    };
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=27.js.map