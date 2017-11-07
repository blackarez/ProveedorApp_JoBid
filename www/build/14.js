webpackJsonp([14],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceJobPageModule", function() { return ServiceJobPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_job__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceJobPageModule = (function () {
    function ServiceJobPageModule() {
    }
    return ServiceJobPageModule;
}());
ServiceJobPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_job__["a" /* ServiceJobPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_job__["a" /* ServiceJobPage */]),
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'
            }),
        ],
    })
], ServiceJobPageModule);

//# sourceMappingURL=service-job.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceJobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__ = __webpack_require__(151);
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
 * Generated class for the ServiceJobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceJobPage = (function () {
    // providerLatitud:any;
    // providerLongitud:any;
    function ServiceJobPage(navCtrl, navParams, saleService, offerService, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleService = saleService;
        this.offerService = offerService;
        this.professionalsService = professionalsService;
        //-- default
        this.imgUserDefault = "assets/img/User/UserService.png";
        //-datos BD
        this.status = "Service in progress";
        this.botonDisabled = false;
        this.segundos = 10;
        this.cont = 1;
        //-map
        this.Userlat = 37.09024;
        this.Userlng = -95.71289100000001;
        this.zom = 14;
        //-ej
        // this.serviceCode = '0986548605';
        //-load data
        // this.Datos = this.navParams.get('datos');
        // console.log(this.Datos);
        this.DataService = this.navParams.get('service');
        this.DataUser = this.navParams.get('user');
        this.user = this.DataService['idUser'];
        this.keyOffer = this.DataService['idOff'];
        this.serviceCode = this.DataService['idOff'].substring(6);
        console.log(this.user);
        console.log(this.DataService);
        //-localStorage
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.userActual);
        this.getUsersLocation();
        this.userInfo();
    }
    ServiceJobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceJobPage');
    };
    ServiceJobPage.prototype.goServiceOk = function () {
        this.setStatusService();
        // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
        // console.log(DataService);
        // this.navCtrl.setRoot(,DataService);
        // this.offerService.getStatus(this.keyOffer).subscribe(
        //   (StatusBD)=>{
        //   }
        // ).unsubscribe();
        var dataService = { 'service': this.DataService, "user": this.DataUser };
        this.navCtrl.setRoot('ServiceOkPage', dataService);
        // this.navCtrl.setRoot('ServiceOkPage');
    };
    ServiceJobPage.prototype.setStatusService = function () {
        console.log('set2');
        console.log(this.userActual);
        console.log(this.keyOffer);
        this.professionalsService.setContractStatus(this.userActual, this.keyOffer, 'Finalized');
        this.saleService.setStatus(this.user, this.keyOffer, 'Finalized');
        this.offerService.setStatus(this.keyOffer, 'Finalized');
        this.botonDisabled = true;
    };
    ServiceJobPage.prototype.userInfo = function () {
        // this.imgUser=this.imgUserDefault;
        // this.nameUser = 'Alejandro Albello';
        // this.addresUser = 'Calle 123 #45 - 65 Ed Miramar Apartamento BB Torre 2';
        // this.phoneUser = '(+57) 5-300 811 45 65';
        this.nameUser = this.DataUser['nameUser'];
        this.addresUser = this.DataUser['address'];
        this.phoneUser = this.DataUser['tel'];
        this.imgUser = this.DataUser['img'];
    };
    //--- timer
    ServiceJobPage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    ServiceJobPage.prototype.timer = function () {
        // console.log(this.segundos);
        // console.log(this.status);
        if (this.status == 'Service completed' && this.segundos == 1) {
            clearInterval(this.objNodeTimer);
        }
        else {
            if (--this.segundos < 0) {
                this.segundos = 10;
            }
        }
    };
    ServiceJobPage.prototype.getUsersLocation = function () {
        var _this = this;
        this.OfferUserLocationSubs = this.offerService.getOfferUserLocation(this.keyOffer).subscribe(function (LocationUser) {
            console.log('OfferUserLocationSubs-S service-job');
            console.info(LocationUser);
            _this.Userlat = LocationUser.latitud;
            _this.Userlng = LocationUser.longitud;
            console.log(_this.Userlat);
            console.log(_this.Userlng);
            _this.OfferUserLocationSubs.unsubscribe();
            console.log('OfferUserLocationSubs-US service-job');
        });
        // this.OfferProviderLocationSubs = this.offerService.getOfferProviderLocation(this.keyOffer).subscribe(
        //   (LocationProvider)=>{
        //     console.info(LocationProvider);        
        //     this.providerLatitud =LocationProvider.latitud;
        //     this.providerLongitud =LocationProvider.longitud;
        //     console.log(this.providerLatitud);
        //     console.log(this.providerLongitud);
        //     this.OfferProviderLocationSubs.unsubscribe();
        //   }
        // );
    };
    return ServiceJobPage;
}());
ServiceJobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-job',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-job\service-job.html"*/'<!--\n\n  Generated template for the ServiceJobPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    \n\n      <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>joBid</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n    \n\n    \n\n    <ion-content>\n\n    <!-- <img src="assets/img/map.png" class="imageFull"> -->\n\n    <div class="mapa">\n\n      <agm-map [latitude]="Userlat" [longitude]="Userlng" [zoom]="zom">\n\n        <agm-marker style="z-index:9;"\n\n          [latitude]="Userlat"\n\n          [longitude]="Userlng" >\n\n        </agm-marker>\n\n      </agm-map>\n\n    </div>\n\n    <div class="barraGris">\n\n      <h4>Service information</h4>\n\n    </div>\n\n    <h3>Service code: #{{serviceCode}}</h3>\n\n    <p class="textoCentrado">State</p>\n\n    <h6 id="estadoServicio">{{status}}</h6>\n\n    <div padding>\n\n      <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-3>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-avatar>\n\n                <img src="{{imgUser}}">\n\n              </ion-avatar>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-col>\n\n        <ion-col col-9>\n\n          <ion-row>\n\n            <ion-col>\n\n              <h4>{{nameUser}}</h4>\n\n              <p>{{addresUser}}</p>\n\n              <p>{{phoneUser}}</p>\n\n            </ion-col>\n\n          </ion-row>	\n\n        </ion-col>\n\n      </ion-row>	\n\n    </ion-grid>\n\n    </div>\n\n    \n\n    <!-- <div class="btnBottom">\n\n      <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goCleaningVote()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n    </div> -->\n\n    \n\n    </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goServiceOk()" [disabled]="botonDisabled" >\n\n              End service\n\n              <ion-icon name="arrow-dropright"></ion-icon> \n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-job\service-job.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__["a" /* ProfessionalsService */]])
], ServiceJobPage);

//# sourceMappingURL=service-job.js.map

/***/ })

});
//# sourceMappingURL=14.js.map