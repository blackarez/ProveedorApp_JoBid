webpackJsonp([13],{

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderInfoAPageModule", function() { return ProviderInfoAPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_info_a__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProviderInfoAPageModule = (function () {
    function ProviderInfoAPageModule() {
    }
    return ProviderInfoAPageModule;
}());
ProviderInfoAPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__provider_info_a__["a" /* ProviderInfoAPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provider_info_a__["a" /* ProviderInfoAPage */]),
        ],
    })
], ProviderInfoAPageModule);

//# sourceMappingURL=provider-info-a.module.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderInfoAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professions_service__ = __webpack_require__(275);
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
 * Generated class for the ProviderInfoAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProviderInfoAPage = (function () {
    function ProviderInfoAPage(navCtrl, navParams, professionsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        //-list
        this.ListServices = [];
        this.ListSubServices = [];
        //-paq
        this.DataService = [];
        this.ListServices = this.professionsService.getProfessions();
        console.log(this.ListServices);
    }
    ProviderInfoAPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProviderInfoAPage');
    };
    ProviderInfoAPage.prototype.goProviderInfoB = function () {
        this.DataService = { "prof_service": this.service, "prof_subService": this.subService, "prof_typeBusiness": this.typeBusiness };
        var Data = { 'datos': this.DataService };
        this.navCtrl.push('ProviderInfoBPage', Data);
    };
    ProviderInfoAPage.prototype.setSubServices = function () {
        console.log(this.service);
        this.ListSubServices = this.professionsService.getCategoryByProfession(this.service);
        console.log(this.ListSubServices);
    };
    return ProviderInfoAPage;
}());
ProviderInfoAPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-provider-info-a',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\provider-info-a\provider-info-a.html"*/'<!--\n\n  Generated template for the ProviderInfoAPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>General data</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <p><strong>Select your profession:</strong></p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <!-- <ion-label class="labelHide">Service</ion-label> -->\n\n      <ion-select [(ngModel)]="service" name="service" (ngModelChange)="setSubServices()" placeholder="service">\n\n        <ion-option *ngFor="let service of ListServices" value="{{service.name}}">{{service.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="subService" name="subService" placeholder="Sub Service">\n\n        <ion-option *ngFor="let subService of ListSubServices" value="{{subService}}">{{subService}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>Business Type:</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="typeBusiness" name="typeBusiness" placeholder="Type Business">\n\n        <ion-option  value="Personal">Personal</ion-option>\n\n        <ion-option  value="Business">Business</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button (click)="goProviderInfoB()">\n\n            Continue\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\provider-info-a\provider-info-a.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professions_service__["a" /* ProfessionsService */]])
], ProviderInfoAPage);

//# sourceMappingURL=provider-info-a.js.map

/***/ })

});
//# sourceMappingURL=13.js.map