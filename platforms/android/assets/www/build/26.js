webpackJsonp([26],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(50);
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



//-provider


//-service

var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, professionalsService, afAuth, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.professionalsService = professionalsService;
        this.afAuth = afAuth;
        this.formBuilder = formBuilder;
        //-Data user
        this.userData = { "username": "", "password": "" };
        this.userDataUpdate = [];
        // this.pass ="mi clave";
        this.todo = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var getUserLogin = this.professionalsService.getUserLoginPwd(this.userData["password"]);
        // console.log(getUserLogin);
        // console.log(JSON.stringify( getUserLogin) );
        var userPromesa = getUserLogin.subscribe(function (value) {
            // console.log('success');
            console.log('userPromesa-S login');
            console.log(value);
            if (value['0']) {
                // console.log(value['0']['prof_username']);
                // console.log(value['0']['prof_email']);
                if ((_this.userData["username"] == value['0']['prof_username']) || (_this.userData["username"] == value['0']['prof_email'])) {
                    console.info('existeUserPwd');
                    _this.loginFirebaseUserMail(value['0']);
                }
            }
            else {
                _this.showAlertLogin();
                console.error('-usuario no se encuentra en base de datos');
            }
            console.log('userPromesa-US login');
            userPromesa.unsubscribe();
        });
    };
    LoginPage.prototype.loginFirebaseUserMail = function (datos) {
        //   console.log(datos);
        //   console.log(datos['$key']);
        //   console.log (datos['prof_email']);
        //  console.log ( datos['prof_password']);
        var _this = this;
        this.userDataUpdate = { "username": datos["prof_username"], "password": datos["prof_password"], "email": datos["prof_email"], "name": datos["prof_name"], "lastName": datos["prof_lastName"], "date": datos["prof_date"], "socialSecurity": datos["prof_socialSecurity"], "zipcode": datos["prof_zipcode"], "state": datos["prof_state"], "picture": datos["prof_picture"], "pais": datos["prof_pais"], "direccion": datos["prof_direccion"], "tel": datos["prof_tel"], "star": datos["prof_star"] };
        console.log(this.userDataUpdate);
        try {
            var result = this.afAuth.auth.signInWithEmailAndPassword(datos['prof_email'], datos['prof_password']);
            console.log(result);
            result.catch(function (error) {
                _this.showAlertLogin();
            });
            if (result) {
                this.userDataUpdate['verificacion'] = datos['$key'];
                localStorage.setItem('verificacion', datos['$key']);
                console.log(this.userDataUpdate);
                // let Data = {'datos':this.userDataUpdate}
                // this.navCtrl.setRoot(ShowPage,Data);
                this.navCtrl.setRoot('ShowPage');
            }
        }
        catch (e) {
            console.error(e);
            console.error('error ');
        }
    };
    LoginPage.prototype.facebookir = function () {
        var _this = this;
        // let goPagePrehome:boolean = false;
        // let userDB:any;
        try {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
                .then(function (res) {
                //console.log(res.user.email);
                console.log(res);
                console.info(JSON.stringify(res));
                if (res.user.providerData["0"].email) {
                    var userBD_1 = _this.professionalsService.getProfessionalExists(res.user.providerData["0"].email).subscribe(function (value) {
                        console.log('professionalsService-S login');
                        for (var key in value) {
                            // console.log(value[key]);
                            if (value[key]) {
                                console.log(value[key]);
                                _this.goNextPagePrehomeFace(value[key]);
                            }
                        }
                        console.log('professionalsService-US login');
                        userBD_1.unsubscribe();
                    });
                }
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    LoginPage.prototype.goNextPagePrehomeFace = function (datos) {
        //   console.log(datos);
        console.log(datos['$key']);
        console.log(datos['prof_email']);
        console.log(datos['prof_password']);
        this.userDataUpdate = { "username": datos["prof_username"], "password": datos["prof_password"], "email": datos["prof_email"], "name": datos["prof_name"], "lastName": datos["prof_lastName"], "date": datos["prof_date"], "socialSecurity": datos["prof_socialSecurity"], "zipcode": datos["prof_zipcode"], "state": datos["prof_state"], "picture": datos["prof_picture"], "pais": datos["prof_pais"], "direccion": datos["prof_direccion"], "tel": datos["prof_tel"], "star": datos["prof_star"] };
        // console.log(this.userDataUpdate);
        this.userDataUpdate['verificacion'] = datos['$key'];
        localStorage.setItem('verificacion', datos['$key']);
        console.log(this.userDataUpdate);
        this.navCtrl.setRoot('ShowPage');
    };
    //-- alertas
    LoginPage.prototype.showAlertLogin = function () {
        var alert = this.alertCtrl.create({
            title: 'login failed',
            subTitle: 'Bad request wrong username or email and password',
            buttons: ['OK']
        });
        alert.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <img src="assets/img/JoBidProveedor.jpg">\n\n    <h5 id="login-heading1">Log in</h5>\n\n    <div padding>\n\n        <button ion-button block (click)="facebookir()">Log in with Faceook</button>\n\n      </div>\n\n    <ion-list padding>\n\n      <form [formGroup]="todo">\n\n        <ion-item>\n\n          <ion-icon name="person" item-start></ion-icon>\n\n          <ion-input type="text" placeholder="User / Email" [(ngModel)]="userData.username" name="username"  formControlName="username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-icon name="home" item-start></ion-icon>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password" formControlName="password"></ion-input>\n\n        </ion-item>\n\n        <div class="btnBottom">\n\n          <button  ion-button block color="danger" (click)="login()" [disabled]="!todo.valid">Enter<ion-icon name="arrow-dropright"></ion-icon></button> \n\n        </div>\n\n    </form>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=26.js.map