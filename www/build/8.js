webpackJsonp([8],{

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateServicePageModule", function() { return UpdateServicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_service__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateServicePageModule = (function () {
    function UpdateServicePageModule() {
    }
    return UpdateServicePageModule;
}());
UpdateServicePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update_service__["a" /* UpdateServicePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_service__["a" /* UpdateServicePage */]),
        ],
    })
], UpdateServicePageModule);

//# sourceMappingURL=update-service.module.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professions_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(152);
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
 * Generated class for the UpdateServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateServicePage = (function () {
    function UpdateServicePage(navCtrl, navParams, professionsService, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionsService = professionsService;
        this.professionalsService = professionalsService;
        //-list
        this.ListServices = [];
        this.ListSubServices = [];
        //-paq
        this.DataService = [];
        this.keyService = this.navParams.get('datos');
        console.log(this.keyService);
        this.ListServices = this.professionsService.getProfessions();
        console.log(this.ListServices);
        this.UserActual = localStorage.getItem('verificacion');
        this.loadService();
    }
    UpdateServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateServicePage');
    };
    UpdateServicePage.prototype.goProviderUpdateService = function () {
        console.log('getServiceProfessionalSubs-uS update-service');
        this.getServiceProfessionalSubs.unsubscribe();
        if (this.booelanSeguro == true) {
            this.seguro = 'true';
        }
        else {
            this.seguro = 'false';
        }
        if (this.booelanCertificacion == true) {
            this.certificacion = 'true';
        }
        else {
            this.certificacion = 'false';
        }
        this.DataService = { "serv_service": this.service, "serv_subService": this.subService };
        var DataServiceInfo = { "serv_experiencia": this.experiencia, "serv_moreInformation": this.moreInformation, "serv_insurance": this.seguro, "serv_certificate": this.certificacion };
        this.DataService["serv_detail"] = DataServiceInfo;
        console.log(this.DataService);
        this.professionalsService.setInfoServiceUser(this.UserActual, this.DataService, this.keyService);
        // let dataService = {'service':this.DataService,"user":this.DataUser};
        // this.navCtrl.setRoot(,DataService);
        // this.navCtrl.setRoot('ServiceJobPage',dataService);
        this.navCtrl.setRoot('EditUserPage');
    };
    UpdateServicePage.prototype.changeCertification = function () {
        console.log('click');
        // console.log(this.booelanCertificacion);
        var cont = 1;
        if (this.booelanCertificacion == true && cont == 1) {
            this.booelanCertificacion = false;
            this.certificacion = 'false';
            cont = 2;
        }
        if (this.booelanCertificacion == false && cont == 1) {
            this.booelanCertificacion = true;
            this.certificacion = 'true';
            cont = 2;
        }
        // console.log(this.booelanCertificacion);
    };
    UpdateServicePage.prototype.changeSeguro = function () {
        console.log('click');
        console.log(this.booelanSeguro);
        var cont = 1;
        if (this.booelanSeguro == true && cont == 1) {
            this.booelanSeguro = false;
            this.seguro = 'false';
            cont = 2;
        }
        if (this.booelanSeguro == false && cont == 1) {
            this.booelanSeguro = true;
            this.seguro = 'true';
            cont = 2;
        }
        console.log(this.booelanSeguro);
    };
    UpdateServicePage.prototype.loadService = function () {
        var _this = this;
        this.getServiceProfessionalSubs = this.professionalsService.getServiceProfessional(this.UserActual, this.keyService).subscribe(function (ServiceBD) {
            console.log('getServiceProfessionalSubs-S update-service');
            console.log(ServiceBD);
            if (ServiceBD) {
                _this.service = ServiceBD.serv_service;
                _this.setSubServices();
                _this.subService = ServiceBD.serv_subService;
                _this.experiencia = ServiceBD.serv_detail.serv_experiencia;
                _this.moreInformation = ServiceBD.serv_detail.serv_moreInformation;
                _this.seguro = ServiceBD.serv_detail.serv_insurance;
                if (_this.seguro == 'true') {
                    _this.booelanSeguro = true;
                }
                else {
                    _this.booelanSeguro = false;
                }
                console.log(_this.booelanSeguro);
                _this.certificacion = ServiceBD.serv_detail.serv_certificate;
                if (_this.certificacion == 'true') {
                    _this.booelanCertificacion = true;
                }
                else {
                    _this.booelanCertificacion = false;
                }
                console.log(_this.booelanCertificacion);
                // console.log(this.service);
                // console.log(this.subService);
                // console.log(this.experiencia);
                // console.log(this.moreInformation);
                // console.log(this.seguro);
                // console.log(this.certificacion);
            }
        });
    };
    UpdateServicePage.prototype.setSubServices = function () {
        console.log(this.service);
        this.ListSubServices = this.professionsService.getCategoryByProfession(this.service);
        console.log(this.ListSubServices);
    };
    UpdateServicePage.prototype.addPictures = function () {
        var Data = { 'datos': this.keyService };
        this.navCtrl.push('GalleryPage', Data);
    };
    return UpdateServicePage;
}());
UpdateServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-update-service',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\update-service\update-service.html"*/'<!--\n\n  Generated template for the UpdateServicePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>General data</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list padding>\n\n    <ion-item>\n\n      <p><strong>Select your profession:</strong></p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <!-- <ion-label class="labelHide">Service</ion-label> -->\n\n      <ion-select [(ngModel)]="service" name="service" (ngModelChange)="setSubServices()" placeholder="Service">\n\n        <ion-option *ngFor="let service of ListServices" value="{{service.name}}">{{service.name}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="subService" name="subService" placeholder="Sub Service">\n\n        <ion-option *ngFor="let subService of ListSubServices" value="{{subService}}">{{subService}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  \n\n      <ion-list radio-group [(ngModel)]="certificacion" name="certificacion" >\n\n        <ion-item>\n\n          <ion-label>Certificate</ion-label>\n\n          <ion-radio value="true" (click)="changeCertification()"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list radio-group [(ngModel)]="seguro" name="seguro" >\n\n         <ion-item>\n\n          <ion-label>Insurance</ion-label>\n\n          <ion-radio value="true"  (click)="changeSeguro()" checked="booelanSeguro" ></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n  <ion-item>\n\n    <ion-select  [(ngModel)]="experiencia" name="experiencia" placeholder="Experience"> <!--[(ngModel)]="gaming"-->\n\n      <ion-option value="1Y" >1 Year</ion-option>\n\n      <ion-option value="2Y" >2 Year</ion-option>\n\n      <ion-option value="3Y" >3 Year</ion-option>\n\n      <ion-option value="3YM" >&gt; 3 Year</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-textarea type="text" placeholder="Short description of your business" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n  </ion-item>\n\n  <ion-item>\n\n    <div class="btnBottom btnAddPicture">\n\n      <button ion-button (click)="addPictures()">\n\n          Add picture\n\n      </button> \n\n    </div>\n\n  </ion-item>\n\n</ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goProviderUpdateService()">\n\n            Add Service\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\update-service\update-service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professions_service__["a" /* ProfessionsService */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */]])
], UpdateServicePage);

//# sourceMappingURL=update-service.js.map

/***/ })

});
//# sourceMappingURL=8.js.map