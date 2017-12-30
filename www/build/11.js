webpackJsonp([11],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceWinPageModule", function() { return ServiceWinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_win__ = __webpack_require__(684);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceWinPageModule = (function () {
    function ServiceWinPageModule() {
    }
    return ServiceWinPageModule;
}());
ServiceWinPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_win__["a" /* ServiceWinPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_win__["a" /* ServiceWinPage */]),
        ],
    })
], ServiceWinPageModule);

//# sourceMappingURL=service-win.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceWinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sale_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notificacion_service__ = __webpack_require__(301);
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
 * Generated class for the ServiceWinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceWinPage = (function () {
    function ServiceWinPage(navCtrl, navParams, alertCtrl, saleService, offerService, professionalsService, notificacionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.saleService = saleService;
        this.offerService = offerService;
        this.professionalsService = professionalsService;
        this.notificacionService = notificacionService;
        //-data
        this.DataService = [];
        //timer
        this.segundos = 0;
        this.minutos = 3;
        //button go to home
        this.disableGoHome = true;
        this.DataService = this.navParams.get('datos');
        this.user = this.DataService['idUser'];
        this.offer = this.DataService['idOff'];
        this.sale = this.DataService['sale'];
        console.log(this.DataService);
        this.userActual = localStorage.getItem('verificacion');
        // console.log(this.userActual);
        this.startTimer();
        this.getStatusService();
    }
    ServiceWinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceWinPage');
    };
    ServiceWinPage.prototype.getStatusService = function () {
        var _this = this;
        this.statusSub = this.saleService.getStatus(this.user, this.offer).subscribe(function (status) {
            console.log('statusSub-S service-win');
            console.log(status);
            if (status['$value']) {
                if (status['$value'] == 'Waiting for the professional') {
                    _this.notificacionHired();
                    _this.goServiceNew();
                    console.log('statusSub-US service-win');
                    _this.statusSub.unsubscribe();
                }
                if (status['$value'] == 'Cancelled') {
                    _this.notificacionCancel();
                    _this.goIndexService();
                    console.log('statusSub-US service-win');
                    _this.statusSub.unsubscribe();
                }
                if (status['$value'] == 'CancelledProvider') {
                    _this.navCtrl.setRoot('ShowPage');
                    _this.statusSub.unsubscribe();
                }
            }
        });
    };
    ServiceWinPage.prototype.goServiceNew = function () {
        console.info('goServiceWin');
        this.showAlertService();
        //-contarct
        console.log(this.DataService);
        var objContract = { "status": 'Waiting for the professional', 'User': this.user, 'info': this.DataService['info'], 'sale': this.DataService['sale'], 'service': this.DataService };
        // console.log(objContract);
        this.professionalsService.newContract(this.userActual, this.offer, objContract);
        //-data
        var dataService = { 'datos': this.DataService };
        console.log(dataService);
        this.navCtrl.setRoot('ServiceNewPage', dataService);
        // this.navCtrl.setRoot('ServiceNewPage');
        // console.log(this.statusSub);
    };
    ServiceWinPage.prototype.goIndexService = function () {
        this.showAlertCancel();
        this.navCtrl.setRoot('ShowPage');
        // this.statusSub.unsubscribe();
        // console.log(this.statusSub);
    };
    ServiceWinPage.prototype.goResetProvider = function () {
        this.saleService.setStatus(this.user, this.offer, 'CancelledProvider');
        this.offerService.setStatus(this.offer, 'CancelledProvider');
    };
    //-alert
    ServiceWinPage.prototype.showAlertService = function () {
        var alerteMail = this.alertCtrl.create({
            title: 'Information',
            message: 'Congratulations, the customer has accepted your offer, you can go to the customer to start the service.',
            buttons: ['OK']
        });
        alerteMail.present();
    };
    ServiceWinPage.prototype.showAlertCancel = function () {
        var alerteMail = this.alertCtrl.create({
            title: 'Information',
            message: 'Sorry. The client has canceled the service.',
            buttons: ['OK']
        });
        alerteMail.present();
    };
    //--- timer
    ServiceWinPage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    ServiceWinPage.prototype.timer = function () {
        if (this.minutos == 0 && this.segundos == 1) {
            this.disableGoHome = false;
        }
        else {
            if (--this.segundos < 0) {
                this.segundos = 59;
                if (--this.minutos < 0) {
                }
            }
            console.log('contador: ', this.minutos, ':', this.segundos);
        }
    };
    //-notification
    ServiceWinPage.prototype.notificacionHired = function () {
        console.info('Nota: You have been hired');
        this.notificacionService.mostrar('You have been hired', 5);
    };
    ServiceWinPage.prototype.notificacionCancel = function () {
        console.info('Nota: The service has been canceled');
        this.notificacionService.mostrar('The service has been canceled', 6);
    };
    return ServiceWinPage;
}());
ServiceWinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-win',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-win\service-win.html"*/'<!--\n\n  Generated template for the ServiceWinPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n    \n\n<ion-content>\n\n  <!-- <img src="assets/img/BackgroundWin.JPG"  /> -->\n\n  <div id="ImgWin">\n\n    <img src="assets/img/IconoTrofeo.png" />\n\n  </div>\n\n  \n\n  <h4>Congratulations</h4>\n\n  <h3>You have won  a Job</h3>\n\n  <p>value of the sale</p>\n\n  <h2>${{sale}}</h2>\n\n  <div class="centrarIcon">\n\n    <ion-icon class="icon-ok" name="checkmark-circle"></ion-icon>\n\n  </div>\n\n  <p>You have won a job! You must wait for the customer to confirm the service</p>\n\n    <!-- <div class="btnBottom" padding>\n\n    <button ion-button color="danger" block (click)="goServiceNew()">Continue <ion-icon name="arrow-dropright"></ion-icon></button>\n\n  </div> -->\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goResetProvider()" [disabled]="disableGoHome">\n\n            Go to home\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-win\service-win.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_sale_service__["a" /* SaleService */], __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_5__services_notificacion_service__["a" /* NotificacionService */]])
], ServiceWinPage);

//# sourceMappingURL=service-win.js.map

/***/ })

});
//# sourceMappingURL=11.js.map