webpackJsonp([13],{

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInfoAPageModule", function() { return ServiceInfoAPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_info_a__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceInfoAPageModule = (function () {
    function ServiceInfoAPageModule() {
    }
    return ServiceInfoAPageModule;
}());
ServiceInfoAPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_info_a__["a" /* ServiceInfoAPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_info_a__["a" /* ServiceInfoAPage */]),
        ],
    })
], ServiceInfoAPageModule);

//# sourceMappingURL=service-info-a.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceInfoAPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professions_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(139);
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
 * Generated class for the ServiceInfoAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceInfoAPage = (function () {
    function ServiceInfoAPage(navCtrl, navParams, professionsService, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        this.professionalsService = professionalsService;
        //-list
        this.ListServices = [];
        this.ListSubServices = [];
        //-paq
        this.DataService = [];
        this.ListServices = this.professionsService.getProfessions();
        console.log(this.ListServices);
        this.UserActual = localStorage.getItem('verificacion');
    }
    ServiceInfoAPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceInfoAPage');
    };
    ServiceInfoAPage.prototype.goProviderInfoB = function () {
        this.DataService = { "serv_service": this.service, "serv_subService": this.subService };
        // let Data = {'datos':this.DataService};
        var DataServiceInfo = { "serv_experiencia": this.experiencia, "serv_moreInformation": this.moreInformation, "serv_insurance": this.seguro, "serv_certificate": this.certificacion };
        this.DataService["serv_detail"] = DataServiceInfo;
        console.log(this.DataService);
        this.professionalsService.setInfoServiceUser(this.UserActual, this.DataService);
        this.navCtrl.setRoot('EditUserPage');
        // this.navCtrl.pop();
    };
    ServiceInfoAPage.prototype.setSubServices = function () {
        console.log(this.service);
        this.ListSubServices = this.professionsService.getCategoryByProfession(this.service);
        console.log(this.ListSubServices);
    };
    return ServiceInfoAPage;
}());
ServiceInfoAPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-info-a',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-info-a\service-info-a.html"*/'<!--\n\n  Generated template for the ServiceInfoAPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>General data</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n    <ion-list padding>\n\n      <ion-item>\n\n        <p><strong>Select your profession:</strong></p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <!-- <ion-label class="labelHide">Service</ion-label> -->\n\n        <ion-select [(ngModel)]="service" name="service" (ngModelChange)="setSubServices()" placeholder="service">\n\n          <ion-option *ngFor="let service of ListServices" value="{{service.name}}">{{service.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-select [(ngModel)]="subService" name="subService" placeholder="Sub Service">\n\n          <ion-option *ngFor="let subService of ListSubServices" value="{{subService}}">{{subService}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    \n\n        <ion-list radio-group [(ngModel)]="certificacion" name="certificacio" >\n\n          <ion-item>\n\n            <ion-label>Certificate</ion-label>\n\n            <ion-radio value="true" ></ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n        <ion-list radio-group [(ngModel)]="seguro" name="seguro">\n\n           <ion-item>\n\n            <ion-label>Insurance</ion-label>\n\n            <ion-radio value="true"   ></ion-radio>\n\n          </ion-item>\n\n        </ion-list>\n\n    <ion-item>\n\n      <ion-select  [(ngModel)]="experiencia" name="experiencia" placeholder="Experience"> <!--[(ngModel)]="gaming"-->\n\n        <ion-option value="1Y" >1 Year</ion-option>\n\n        <ion-option value="2Y" >2 Year</ion-option>\n\n        <ion-option value="3Y" >3 Year</ion-option>\n\n        <ion-option value="3YM" >&gt; 3 Year</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-textarea type="text" placeholder="Short description of your business" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n    </ion-item>\n\n    <ion-item>\n\n      <div class="btnBottom btnAddPicture">\n\n        <button ion-button>\n\n            Add picture\n\n        </button> \n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button (click)="goProviderInfoB()">\n\n              Add Service\n\n              <ion-icon name="arrow-dropright"></ion-icon> \n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\service-info-a\service-info-a.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professions_service__["a" /* ProfessionsService */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */]])
], ServiceInfoAPage);

//# sourceMappingURL=service-info-a.js.map

/***/ })

});
//# sourceMappingURL=13.js.map