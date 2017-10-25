webpackJsonp([22],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_user__ = __webpack_require__(573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditUserPageModule = (function () {
    function EditUserPageModule() {
    }
    return EditUserPageModule;
}());
EditUserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_user__["a" /* EditUserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_user__["a" /* EditUserPage */]),
        ],
    })
], EditUserPageModule);

//# sourceMappingURL=edit-user.module.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(139);
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
 * Generated class for the EditUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditUserPage = (function () {
    function EditUserPage(navCtrl, navParams, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        this.ListServicesVista = [];
        this.UserActual = localStorage.getItem('verificacion');
        console.log(this.UserActual);
        this.getServices();
    }
    EditUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditUserPage');
    };
    EditUserPage.prototype.goEdit = function () {
        this.listServiceSubs.unsubscribe();
        this.navCtrl.push('EditProviderPage');
    };
    EditUserPage.prototype.goNew = function () {
        this.listServiceSubs.unsubscribe();
        this.navCtrl.push('ServiceInfoAPage');
    };
    EditUserPage.prototype.DropService = function (id) {
        console.log(id);
        this.professionalsService.dropService(this.UserActual, id);
    };
    EditUserPage.prototype.getServices = function () {
        var _this = this;
        this.listServiceSubs = this.professionalsService.getServicesProfessional(this.UserActual).subscribe(function (value) {
            _this.ListServicesVista = [];
            // console.log(value);
            for (var key in value) {
                if (value[key] != null) {
                    console.log(value[key]);
                    _this.ListServicesVista.push({ "id": key, "TypeBusiness": value[key]['serv_typeBusiness'], "Service": value[key]['serv_service'], "SubService": value[key]['serv_subService'] });
                    // console.log(this.ListServicesVista);
                }
            }
        });
        // console.log(this.ListServicesVista);
    };
    return EditUserPage;
}());
EditUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-user',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\edit-user\edit-user.html"*/'<!--\n\n  Generated template for the EditUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let p of ListServicesVista">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <h3><strong> Business: </strong>{{p.TypeBusiness}}</h3>\n\n            <p><strong>{{p.Service}}</strong> > {{p.SubService}}</p>\n\n          </ion-col>\n\n          <ion-col col-2>\n\n              <button  ion-button block (click)="DropService(p.id)" icon-only round color="danger">\n\n                  <ion-icon name=\'close\'></ion-icon>\n\n              </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col class="btnBottom">\n\n            <button  ion-button block color="light" (click)="goEdit()">Edit User\n\n            </button>\n\n          </ion-col>\n\n          <ion-col class="btnBottom">\n\n            <button  ion-button block color="light"(click)="goNew()">New service\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>  \n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\edit-user\edit-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */]])
], EditUserPage);

//# sourceMappingURL=edit-user.js.map

/***/ })

});
//# sourceMappingURL=22.js.map