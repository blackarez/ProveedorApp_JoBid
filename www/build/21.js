webpackJsonp([21],{

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceInfoPageModule", function() { return MyServiceInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_service_info__ = __webpack_require__(604);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyServiceInfoPageModule = (function () {
    function MyServiceInfoPageModule() {
    }
    return MyServiceInfoPageModule;
}());
MyServiceInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_service_info__["a" /* MyServiceInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_service_info__["a" /* MyServiceInfoPage */]),
        ],
    })
], MyServiceInfoPageModule);

//# sourceMappingURL=my-service-info.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyServiceInfoPage; });
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
 * Generated class for the MyServiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyServiceInfoPage = (function () {
    function MyServiceInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        this.loadView();
    }
    MyServiceInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyServiceInfoPage');
    };
    MyServiceInfoPage.prototype.loadView = function () {
        this.serviceCode = this.DataService.id;
        this.status = this.DataService.staus;
        this.imgUser = this.DataService.DataUser.img;
        this.nameUser = this.DataService.DataUser.nameUser;
        this.addresUser = this.DataService.DataUser.address;
        this.phoneUser = this.DataService.DataUser.tel;
        this.info = this.DataService.info;
    };
    return MyServiceInfoPage;
}());
MyServiceInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-service-info',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\my-service-info\my-service-info.html"*/'<!--\n\n  Generated template for the MyServiceInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n  <div class="barraRoja">\n\n    <h4>Service information</h4>\n\n  </div>\n\n  <h3>Service code: #{{serviceCode}}</h3>\n\n  <p class="textoCentrado">State</p>\n\n  <h6 id="estadoServicio">{{status}}</h6>\n\n  <p>{{info}}</p>\n\n  <div padding>\n\n    <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-avatar>\n\n              <img src="{{imgUser}}">\n\n            </ion-avatar>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-9>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h4>{{nameUser}}</h4>\n\n            <p>{{addresUser}}</p>\n\n            <p>{{phoneUser}}</p>\n\n          </ion-col>\n\n        </ion-row>	\n\n      </ion-col>\n\n    </ion-row>	\n\n  </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\my-service-info\my-service-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], MyServiceInfoPage);

//# sourceMappingURL=my-service-info.js.map

/***/ })

});
//# sourceMappingURL=21.js.map