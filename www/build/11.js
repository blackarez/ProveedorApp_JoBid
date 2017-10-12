webpackJsonp([11],{

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoPageModule", function() { return ServiceInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_info__ = __webpack_require__(580);
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

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(272);
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
    function ServiceInfoPage(navCtrl, navParams, saleService, offerService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleService = saleService;
        this.offerService = offerService;
        this.alertCtrl = alertCtrl;
        //-data
        this.DataService = [];
        this.NoGoSale = false;
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        this.callInfo();
        this.userActual = localStorage.getItem('verificacion');
        this.LoadTimmer();
    }
    ServiceInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceInfoPage');
        // console.log(localStorage);
    };
    ServiceInfoPage.prototype.goSale = function () {
        this.statusSubs.unsubscribe();
        this.timerSubs.unsubscribe();
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
    ServiceInfoPage.prototype.LoadTimmer = function () {
        var _this = this;
        // console.log('tiempo');
        // console.log(this.DataService.idOff);
        // console.log(this.DataService.idUser);
        this.statusSubs = this.saleService.getStatus(this.DataService.idUser, this.DataService.idOff).subscribe(function (status) {
            // console.log(status);
            // console.log(status['$value']);
            if (status['$value'] == 'Published') {
                _this.timerSubs = _this.offerService.getTimmer(_this.DataService.idOff).subscribe(function (timer) {
                    // console.log(timer);
                    if (timer['$value'] != null) {
                        _this.contador = timer['$value'];
                        if (_this.contador == "00:15" ||
                            _this.contador == "00:14" ||
                            _this.contador == "00:13" ||
                            _this.contador == "00:12" ||
                            _this.contador == "00:10" ||
                            _this.contador == "00:09" ||
                            _this.contador == "00:08" ||
                            _this.contador == "00:07" ||
                            _this.contador == "00:06" ||
                            _this.contador == "00:05" ||
                            _this.contador == "00:04" ||
                            _this.contador == "00:03" ||
                            _this.contador == "00:02" ||
                            _this.contador == "00:01") {
                            console.log('bloquear');
                            _this.NoGoSale = true;
                        }
                    }
                });
            }
            else {
                _this.contador = "00:00";
                _this.NoGoSale = true;
                _this.statusSubs.unsubscribe();
                _this.timerSubs.unsubscribe();
                if (status['$value'] == 'Cancelled') {
                    _this.AlertCancelOffer();
                    _this.goShowPage();
                }
            }
        });
        // if(status == 'Published'){
        // this.timerSubs.unsubscribe();
        // }
    };
    ServiceInfoPage.prototype.goShowPage = function () {
        this.navCtrl.setRoot('ShowPage');
        this.statusSubs.unsubscribe();
        this.timerSubs.unsubscribe();
    };
    //- alert
    ServiceInfoPage.prototype.AlertCancelOffer = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: 'The auction was canceled by the Client',
            buttons: ['OK']
        });
        alert.present();
    };
    return ServiceInfoPage;
}());
ServiceInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-info',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-info\service-info.html"*/'<!--\n\n  Generated template for the ServiceInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n    <img src="assets/img/fondoLineas.jpg"  class="imageFull imagenContent">\n\n    <div class="contenedor">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-6>\n\n            <img src="{{imagenUser}}"  class="imagenUser"/>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n            <h3>${{offer}}</h3>\n\n            <p>{{userName}}</p>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n    <div class="barraRoja">\n\n      <h4>Service Information</h4>\n\n    </div>\n\n    <img src="assets/img/User/FotoServiceInfo.JPG"  class="imageFull"/>\n\n    <div padding>\n\n      <p>{{info}}</p>\n\n      <h4 class="tituloCondator">\n\n          Time to start the sale.\n\n      </h4>\n\n      <h4 class="contador">{{contador}}</h4>\n\n    </div>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button  ion-button (click)="goSale()" [disabled]="NoGoSale">\n\n              Enter the sale\n\n              <ion-icon name="arrow-dropright"></ion-icon> \n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-info\service-info.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], ServiceInfoPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=service-info.js.map

/***/ })

});
//# sourceMappingURL=11.js.map