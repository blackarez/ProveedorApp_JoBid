webpackJsonp([7],{

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsPageModule", function() { return TermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsPageModule = (function () {
    function TermsPageModule() {
    }
    return TermsPageModule;
}());
TermsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__terms__["a" /* TermsPage */]),
        ],
    })
], TermsPageModule);

//# sourceMappingURL=terms.module.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
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
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.termsValue = false;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    TermsPage.prototype.goProviderInfo = function () {
        console.log(this.termsValue);
        if (this.termsValue == true) {
            this.navCtrl.push('ProviderInfoAPage');
        }
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\terms\terms.html"*/'<!--\n\n  Generated template for the TermsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Terms</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <img src="assets/img/LogoJoBid2.png">\n\n  \n\n      <p><strong>Terms and Conditions:</strong></p>\n\n<p  padding class="terms"> \n\n  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora vel culpa cupiditate dolor dolores inventore accusantium quae nostrum, eum quisquam beatae tenetur eligendi ex aperiam quos, enim velit illo!\n\n  Sapiente at facilis quibusdam enim quasi perferendis rem voluptatem provident ex, illo accusamus facere dicta est magnam quidem minima optio debitis dolorem, omnis laborum quisquam inventore, iusto eos. Earum, iusto.\n\n  Fugiat tenetur obcaecati excepturi sint iste natus vel, ipsum voluptate aperiam impedit modi sequi doloremque ut quaerat amet, sapiente temporibus rem perspiciatis laboriosam porro repellendus hic autem eligendi! Vero, numquam.\n\n  Omnis laboriosam illum magni fugit accusantium! Soluta temporibus deleniti distinctio repellat dolor, at numquam. Commodi odio autem, ducimus beatae facilis reiciendis tempora amet? Facilis ipsa deserunt, quo doloribus ea adipisci!\n\n  Iusto, eius. Aliquid blanditiis expedita id iusto debitis eos, inventore voluptates eligendi libero, totam sed et? Dolorum hic eligendi officiis voluptas omnis possimus sit, laudantium magni ipsum molestiae accusantium? Incidunt.\n\n  Ea facere quam enim. Magnam odit impedit accusantium esse natus? Sequi repellat consequatur aut cupiditate doloribus.\n\n</p>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid padding>\n\n      <ion-row>\n\n        <ion-col col-10>\n\n            <ion-list >\n\n            <!-- <ion-list radio-group [(ngModel)]="termsValue"> -->\n\n              <ion-item>\n\n              <ion-label>Accept the terms and conditions:</ion-label>\n\n              <ion-checkbox [(ngModel)]="termsValue" ></ion-checkbox>\n\n            </ion-item></ion-list>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n            <button  ion-button block (click)="goProviderInfo()" icon-only round color="danger" [disabled]="!termsValue">\n\n								<ion-icon name="arrow-dropright"></ion-icon>\n\n						</button>\n\n            </ion-col>\n\n           </ion-row>\n\n          </ion-grid>  \n\n        </ion-toolbar>\n\n      </ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\terms\terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ })

});
//# sourceMappingURL=7.js.map