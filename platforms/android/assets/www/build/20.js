webpackJsonp([20],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderOkPageModule", function() { return ProviderOkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_ok__ = __webpack_require__(674);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProviderOkPageModule = (function () {
    function ProviderOkPageModule() {
    }
    return ProviderOkPageModule;
}());
ProviderOkPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__provider_ok__["a" /* ProviderOkPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provider_ok__["a" /* ProviderOkPage */]),
        ],
    })
], ProviderOkPageModule);

//# sourceMappingURL=provider-ok.module.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderOkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
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
 * Generated class for the ProviderOkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProviderOkPage = (function () {
    function ProviderOkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //timer
        this.segundos = 5;
        this.startTimer();
    }
    ProviderOkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProviderOkPage');
    };
    ProviderOkPage.prototype.goHome = function () {
        this.navCtrl.setRoot('HomePage');
        this.goClose();
    };
    ProviderOkPage.prototype.goClose = function () {
        // this.afAuth.auth.signOut().then((value)=>{
        //   console.log(value);
        //   this.nav.setRoot('HomePage');
        // }).catch((error) => console.info(error));
    };
    //--- timer
    ProviderOkPage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    ProviderOkPage.prototype.timer = function () {
        console.log(this.segundos);
        // console.log(this.status);
        if (this.segundos == 1) {
            clearInterval(this.objNodeTimer);
            console.log('servicion fin');
            this.goHome();
        }
        else {
            if (--this.segundos < 0) {
                // this.modificarStatus();
                this.segundos = 2;
            }
        }
    };
    return ProviderOkPage;
}());
ProviderOkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-provider-ok',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\provider-ok\provider-ok.html"*/'<!--\n\n  Generated template for the ProviderOkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n    <img src="assets/img/JoBidProveedor.jpg" />\n\n    <div class="centrarIcon">\n\n      <ion-icon class="icon-ok" name="checkmark-circle"></ion-icon>\n\n    </div>\n\n    <p>Your account is in the process of being reviewed, all your data is being verified and you will be notified when you can use the platform..</p>\n\n     <!-- <div class="btnBottom" padding>\n\n      <button ion-button color="danger" block (click)="go()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n    </div> -->\n\n  </ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\provider-ok\provider-ok.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ProviderOkPage);

//# sourceMappingURL=provider-ok.js.map

/***/ })

});
//# sourceMappingURL=20.js.map