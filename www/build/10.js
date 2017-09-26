webpackJsonp([10],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoPageModule", function() { return ServiceInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_info__ = __webpack_require__(562);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceInfoPageModule = (function () {
    function ServiceInfoPageModule() {
    }
    return ServiceInfoPageModule;
}());
ServiceInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_info__["a" /* ServiceInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_info__["a" /* ServiceInfoPage */]),
        ],
    })
], ServiceInfoPageModule);

//# sourceMappingURL=service-info.module.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(271);
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
 * Generated class for the ServiceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceInfoPage = (function () {
    function ServiceInfoPage(navCtrl, navParams, saleService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleService = saleService;
        //-data
        this.DataService = [];
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        this.callInfo();
        console.log(localStorage);
        this.userActual = localStorage.getItem('verificacion');
    }
    ServiceInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceInfoPage');
    };
    ServiceInfoPage.prototype.goSale = function () {
        this.saleService.setSaleProvider(this.DataService.idUser, this.DataService.idOff, this.userActual, '-');
        var Data = { 'datos': this.DataService };
        this.navCtrl.setRoot('ServiceSalePage', Data);
    };
    ServiceInfoPage.prototype.callInfo = function () {
        this.imagenUser = this.DataService.img;
        this.offer = this.DataService.sale;
        this.userName = this.DataService.name;
        this.info = this.DataService.info;
    };
    return ServiceInfoPage;
}());
ServiceInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-info',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-info\service-info.html"*/'<!--\n\n  Generated template for the ServiceInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <img src="assets/img/fondoLineas.jpg"  class="imageFull imagenContent">\n\n    <div class="contenedor">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <img src="{{imagenUser}}"  class="imagenUser"/>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <h3>${{offer}}</h3>\n\n            <p>{{userName}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n    <div class="barraRoja">\n\n      <h4>Service Information</h4>\n\n    </div>\n\n    <img src="assets/img/User/FotoServiceInfo.JPG"  class="imageFull"/>\n\n    <div padding>\n\n      <p>{{info}}</p>\n\n      <h4 class="tituloCondator">\n\n          Time to start the sale.\n\n      </h4>\n\n      <h4 class="contador">00:00:15</h4>\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button  ion-button (click)="goSale()">\n\n              Enter the sale\n\n              <ion-icon name="arrow-dropright"></ion-icon> \n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-info\service-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */]])
], ServiceInfoPage);

//# sourceMappingURL=service-info.js.map

/***/ })

});
//# sourceMappingURL=10.js.map