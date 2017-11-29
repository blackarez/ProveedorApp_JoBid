webpackJsonp([16],{

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoBPageModule", function() { return ServiceInfoBPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_info_b__ = __webpack_require__(676);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceInfoBPageModule = (function () {
    function ServiceInfoBPageModule() {
    }
    return ServiceInfoBPageModule;
}());
ServiceInfoBPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_info_b__["a" /* ServiceInfoBPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_info_b__["a" /* ServiceInfoBPage */]),
        ],
    })
], ServiceInfoBPageModule);

//# sourceMappingURL=service-info-b.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInfoBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(165);
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
 * Generated class for the ServiceInfoBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceInfoBPage = (function () {
    function ServiceInfoBPage(navCtrl, navParams, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        //-data
        this.DataService = [];
        this.codeAreaList = [];
        this.showPersonalB = true;
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        console.log(localStorage);
        this.UserActual = localStorage.getItem('verificacion');
        console.log(this.UserActual);
        this.loadView();
        // this.UserActual = 'prof_1506011271575';
        // this.UserActual = 'prof_1506004758918';
        // console.log(this.UserActual);
    }
    ServiceInfoBPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceInfoBPage');
    };
    ServiceInfoBPage.prototype.goDocument = function () {
        this.saveInfoService();
        this.navCtrl.setRoot('ShowPage');
    };
    ServiceInfoBPage.prototype.saveInfoService = function () {
        var DataServiceInfo = { "serv_address": this.address, "serv_Phone": this.Phone, "serv_Mobile": this.Mobile, "serv_experiencia": this.experiencia, "serv_moreInformation": this.moreInformation };
        if (this.showPersonalB == false) {
            DataServiceInfo['serv_Tradename'] = this.Tradename;
            DataServiceInfo['serv_LegalName'] = this.LegalName;
            DataServiceInfo['serv_TaxID'] = this.TaxID;
        }
        this.DataService["serv_detail"] = DataServiceInfo;
        console.log(this.DataService);
        this.professionalsService.setInfoServiceUser(this.UserActual, this.DataService);
    };
    ServiceInfoBPage.prototype.loadView = function () {
        if (this.DataService['serv_typeBusiness'] != 'Personal') {
            this.showPersonalB = false;
        }
    };
    return ServiceInfoBPage;
}());
ServiceInfoBPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-info-b',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-info-b\service-info-b.html"*/'<!--\n\n  Generated template for the ServiceInfoBPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Personal record</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <ion-grid>\n\n      <ion-row class="steps">\n\n        <ion-col col-4 class="active">\n\n          <div class="numb">1</div>\n\n          <div class="text">\n\n            <p>General</p>\n\n            <p>data</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <div class="numb">2</div>\n\n          <div class="text">\n\n            <p>Upload</p>\n\n            <p>documents</p>\n\n          </div>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <div class="numb">3</div>\n\n          <div class="text">\n\n            <p>Photo</p>  \n\n            <p>gallery</p>\n\n          </div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-list padding>\n\n      <ion-item>\n\n        <p><strong>Personal record:</strong></p>\n\n      </ion-item>\n\n      <ion-item *ngIf="!showPersonalB">\n\n        <ion-input type="text" [(ngModel)]="Tradename" name="Tradename" placeholder="Tradename"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!showPersonalB">\n\n        <ion-input type="text" [(ngModel)]="LegalName" name="LegalName" placeholder="Legal Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!showPersonalB">\n\n        <ion-input type="text" [(ngModel)]="TaxID" name="TaxID" placeholder="Tax ID"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="address" name="address" placeholder="Address"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Phone" class="mitad" [(ngModel)]="Phone" name="Phone"></ion-input>\n\n        <ion-input type="text" placeholder="Mobile" class="mitad" [(ngModel)]="Mobile" name="Mobile"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label class="mitad">Experience time</ion-label>\n\n        <ion-select  class="mitad"  [(ngModel)]="experiencia" name="experiencia" placeholder="Experience"> <!--[(ngModel)]="gaming"-->\n\n          <ion-option value="1Y" >1 Year</ion-option>\n\n          <ion-option value="2Y" >2 Year</ion-option>\n\n          <ion-option value="3Y" >3 Year</ion-option>\n\n          <ion-option value="3YM" >&gt; 3 Year</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-textarea type="text" placeholder="Short description of your business" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button color="danger" block (click)="goDocument()">\n\n              Continue\n\n              <ion-icon name="arrow-dropright"></ion-icon> \n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  '/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-info-b\service-info-b.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */]])
], ServiceInfoBPage);

//# sourceMappingURL=service-info-b.js.map

/***/ })

});
//# sourceMappingURL=16.js.map