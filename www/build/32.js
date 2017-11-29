webpackJsonp([32],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesPageModule", function() { return CertificatesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__certificates__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CertificatesPageModule = (function () {
    function CertificatesPageModule() {
    }
    return CertificatesPageModule;
}());
CertificatesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__certificates__["a" /* CertificatesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__certificates__["a" /* CertificatesPage */]),
        ],
    })
], CertificatesPageModule);

//# sourceMappingURL=certificates.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CertificatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CertificatesPage = (function () {
    function CertificatesPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.getForm();
    }
    CertificatesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CertificatesPage');
    };
    CertificatesPage.prototype.goPaymentMethods = function () {
        this.navCtrl.push('PaymentMethodsPage');
    };
    CertificatesPage.prototype.fotoGaleria = function (foto) {
        switch (foto) {
            case 'A':
                console.log('fotoA');
                break;
            case 'B':
                console.log('fotoB');
                break;
            case 'C':
                console.log('fotoC');
                break;
            case 'D':
                console.log('fotoD');
                break;
            default:
                break;
        }
    };
    CertificatesPage.prototype.getForm = function () {
        this.certificados = this.formBuilder.group({
            fotoA: [''],
            fotoB: [''],
            fotoC: [''],
            fotoD: [''],
        });
    };
    return CertificatesPage;
}());
CertificatesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-certificates',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\certificates\certificates.html"*/'<!--\n\n  Generated template for the CertificatesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Certificates</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/img/LogoJoBid2.png">\n\n  <form [formGroup]="certificados">\n\n  <ion-list padding>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 1" [(ngModel)]="fotoA" formControlName="fotoA" name="fotoA" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'A\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 2" [(ngModel)]="fotoB" formControlName="fotoB" name="fotoB" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'B\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 3" [(ngModel)]="fotoC" formControlName="fotoC" name="fotoC" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'C\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 4" [(ngModel)]="fotoD" formControlName="fotoD" name="fotoD" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'D\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goPaymentMethods()">\n\n            Continue\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\certificates\certificates.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], CertificatesPage);

//# sourceMappingURL=certificates.js.map

/***/ })

});
//# sourceMappingURL=32.js.map