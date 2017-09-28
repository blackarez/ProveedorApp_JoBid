webpackJsonp([9],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNewPageModule", function() { return ServiceNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_new__ = __webpack_require__(583);
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
        ],
    })
], ServiceNewPageModule);

//# sourceMappingURL=service-new.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_professionals_service__ = __webpack_require__(138);
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
            console.log(userDB);
            if (userDB) {
                _this.nameUser = userDB['user_username'];
                var addresU = userDB['user_address'];
                for (var key in addresU) {
                    _this.addresUser = addresU[key]['addr_info'];
                }
                _this.phoneUser = userDB['user_tel'];
                console.log(userDB['user_picture']);
                if (userDB['user_picture'] == undefined || userDB['user_picture'] == null || userDB['user_picture'] == "") {
                    _this.imgUser = _this.imgUserDefault;
                }
                else {
                    _this.imgUser = userDB['user_picture'];
                }
                _this.DataUser = { "nameUser": _this.nameUser, "address": _this.addresUser, "tel": _this.phoneUser, "img": _this.imgUser };
            }
        });
    };
    return ServiceNewPage;
}());
ServiceNewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-new',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-new\service-new.html"*/'<!--\n\n  Generated template for the ServiceNewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>joBid</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n  <img src="assets/img/map.png" class="imageFull">\n\n  <div class="barraGris">\n\n    <h4>Service information</h4>\n\n  </div>\n\n  <h3>Service code: #{{serviceCode}}</h3>\n\n  <p class="textoCentrado">State</p>\n\n  <h6 id="estadoServicio">{{status}}</h6>\n\n  <div padding>\n\n    <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-avatar>\n\n              <img src="{{imgUser}}">\n\n            </ion-avatar>\n\n          </ion-item>\n\n        </ion-list>\n\n      </ion-col>\n\n      <ion-col col-9>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h4>{{nameUser}}</h4>\n\n            <p>{{addresUser}}</p>\n\n            <p>{{phoneUser}}</p>\n\n          </ion-col>\n\n        </ion-row>	\n\n      </ion-col>\n\n    </ion-row>	\n\n  </ion-grid>\n\n  </div>\n\n  \n\n  <!-- <div class="btnBottom">\n\n    <button id="verifyYourPhone-button6" ion-button block color="danger" (click)="goCleaningVote()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div> -->\n\n  \n\n  </ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button (click)="goServiceJob()">\n\n            Start service\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-new\service-new.html"*/,
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
//# sourceMappingURL=9.js.map