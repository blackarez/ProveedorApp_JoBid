webpackJsonp([13],{

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNewPageModule", function() { return ServiceNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_new__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServiceNewPageModule = (function () {
    function ServiceNewPageModule() {
    }
    return ServiceNewPageModule;
}());
ServiceNewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_new__["a" /* ServiceNewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_new__["a" /* ServiceNewPage */]),
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'
            }),
        ],
    })
], ServiceNewPageModule);

//# sourceMappingURL=service-new.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//-service




/**
 * Generated class for the ServiceNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceNewPage = (function () {
    function ServiceNewPage(navCtrl, navParams, saleService, offerService, userService, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.saleService = saleService;
        this.offerService = offerService;
        this.userService = userService;
        this.professionalsService = professionalsService;
        //-- default
        this.imgUserDefault = "assets/img/User/UserService.png";
        //-datos BD
        this.status = "Waiting for the professional";
        //-data
        this.DataService = [];
        this.DataUser = [];
        //-map
        this.Userlat = 37.09024;
        this.Userlng = -95.71289100000001;
        this.zom = 14;
        this.providerLatitud = 37.09024;
        this.providerLongitud = -95.71289100000001;
        //-ej
        this.serviceCode = '0986548605';
        //-data
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        this.user = this.DataService['idUser'];
        this.keyOffer = this.DataService['idOff'];
        console.log(this.keyOffer);
        this.serviceCode = this.DataService['idOff'].substring(6);
        console.log(this.user);
        //-localStorage
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.userActual);
        this.getUsersLocation();
        this.userInfo();
    }
    ServiceNewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceNewPage');
    };
    ServiceNewPage.prototype.goServiceJob = function () {
        console.log('goServiceJob');
        this.setStatusService();
        // let DataService = {'datos':{"dataService":this.dataService,"offer":this.keyOffer,"win":this.worker}};
        console.log(this.DataService);
        console.log(this.DataUser);
        console.log('userSubs-US service-new');
        this.userSubs.unsubscribe();
        var dataService = { 'service': this.DataService, "user": this.DataUser };
        // this.navCtrl.setRoot(,DataService);
        this.navCtrl.setRoot('ServiceJobPage', dataService);
    };
    ServiceNewPage.prototype.setStatusService = function () {
        console.log('set');
        console.log(this.userActual);
        console.log(this.keyOffer);
        this.professionalsService.setContractStatus(this.userActual, this.keyOffer, 'In progress');
        this.saleService.setStatus(this.user, this.keyOffer, 'In progress');
        this.offerService.setStatus(this.keyOffer, 'In progress');
    };
    ServiceNewPage.prototype.userInfo = function () {
        var _this = this;
        // this.imgUser=this.imgUserDefault;
        // this.nameUser = 'Alejandro Albello';
        // this.addresUser = 'Calle 123 #45 - 65 Ed Miramar Apartamento BB Torre 2';
        // this.phoneUser = '(+57) 5-300 811 45 65';
        console.log('UserInfo');
        console.log(this.user);
        this.userSubs = this.userService.getUser(this.user).subscribe(
        // this.userService.getUser(this.user).subscribe(
        function (userDB) {
            console.log('userSubs-S service-new');
            console.log(userDB);
            if (userDB) {
                _this.nameUser = userDB['user_username'];
                // let addresU = userDB['user_address'];
                // for(let key in addresU){
                //   this.addresUser = addresU[key]['addr_info'];
                // }
                _this.phoneUser = userDB['user_tel'];
                console.log(userDB['user_picture']);
                if (userDB['user_picture'] == undefined || userDB['user_picture'] == null || userDB['user_picture'] == "") {
                    _this.imgUser = _this.imgUserDefault;
                }
                else {
                    _this.imgUser = userDB['user_picture'];
                }
                var AddressOfferSubs_1 = _this.offerService.getOffer(_this.keyOffer).subscribe(function (offerBD) {
                    if (AddressOfferSubs_1) {
                        console.log(offerBD);
                        console.log(offerBD['Address']['name']);
                        console.log(offerBD['sale']);
                        if (offerBD['name']) {
                            _this.addresUser = offerBD['Address']['name'];
                            _this.DataUser = { "nameUser": _this.nameUser, "address": _this.addresUser, "tel": _this.phoneUser, "img": _this.imgUser, "sale": offerBD['sale'] };
                        }
                        AddressOfferSubs_1.unsubscribe();
                    }
                });
            }
        });
    };
    ServiceNewPage.prototype.getUsersLocation = function () {
        var _this = this;
        this.OfferUserLocationSubs = this.offerService.getOfferUserLocation(this.keyOffer).subscribe(function (LocationUser) {
            console.log('OfferUserLocationSubs-S service-new');
            console.info(LocationUser);
            _this.Userlat = LocationUser.latitud;
            _this.Userlng = LocationUser.longitud;
            console.log(_this.Userlat);
            console.log(_this.Userlng);
            console.log('OfferUserLocationSubs-US service-new');
            _this.OfferUserLocationSubs.unsubscribe();
        });
        this.OfferProviderLocationSubs = this.offerService.getOfferProviderLocation(this.keyOffer).subscribe(function (LocationProvider) {
            console.log('OfferProviderLocationSubs-S service-new');
            console.info(LocationProvider);
            _this.providerLatitud = LocationProvider.latitud;
            _this.providerLongitud = LocationProvider.longitud;
            console.log(_this.providerLatitud);
            console.log(_this.providerLongitud);
            console.log('OfferProviderLocationSubs-US service-new');
            _this.OfferProviderLocationSubs.unsubscribe();
        });
    };
    return ServiceNewPage;
}());
ServiceNewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-new',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-new\service-new.html"*/'<!--\n\n  Generated template for the ServiceNewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n  <!-- <img src="assets/img/map.png" class="imageFull"> -->\n\n  <div class="mapa">\n\n    <agm-map [latitude]="providerLatitud" [longitude]="providerLongitud" [zoom]="zom">\n\n      <agm-marker style="z-index:9;"\n\n        [latitude]="Userlat"\n\n        [longitude]="Userlng" >\n\n      </agm-marker>\n\n    </agm-map>\n\n  </div>\n\n  <div class="barraGris">\n\n    <h4>Service information</h4>\n\n  </div>\n\n  <h3>Service code: #{{serviceCode}}</h3>\n\n  <p class="textoCentrado">State</p>\n\n  <h6 id="estadoServicio">{{status}}</h6>\n\n  <div padding>\n\n    <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-avatar>\n\n              <img src="{{imgUser}}">\n\n            </ion-avatar>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-9>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h4>{{nameUser}}</h4>\n\n            <p>{{addresUser}}</p>\n\n            <p>{{phoneUser}}</p>\n\n          </ion-col>\n\n        </ion-row>	\n\n      </ion-col>\n\n    </ion-row>	\n\n  </ion-grid>\n\n  </div>\n\n  \n\n  <!-- <div class="btnBottom">\n\n    <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goCleaningVote()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div> -->\n\n  \n\n  </ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goServiceJob()">\n\n            Start service\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-new\service-new.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__["a" /* ProfessionalsService */]])
], ServiceNewPage);

//# sourceMappingURL=service-new.js.map

/***/ })

});
//# sourceMappingURL=13.js.map