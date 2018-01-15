webpackJsonp([7],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserPageModule", function() { return UpdateUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_user__ = __webpack_require__(690);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateUserPageModule = (function () {
    function UpdateUserPageModule() {
    }
    return UpdateUserPageModule;
}());
UpdateUserPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update_user__["a" /* UpdateUserPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_user__["a" /* UpdateUserPage */]),
        ],
    })
], UpdateUserPageModule);

//# sourceMappingURL=update-user.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
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
 * Generated class for the UpdateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateUserPage = (function () {
    function UpdateUserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UpdateUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdateUserPage');
    };
    return UpdateUserPage;
}());
UpdateUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-update-user',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\update-user\update-user.html"*/'<!--\n\n  Generated template for the UpdateUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form id="signup-form3" class="list" padding>\n\n    <ion-list id="signup-list3">\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Name" [(ngModel)]="userData.name" name="name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Last name" [(ngModel)]="userData.lastName" name="lastName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <!-- <input type="date" ng-model="user.birthdate"> -->\n\n        <!-- <ion-input type="date" class="mitad" placeholder="Date" [(ngModel)]="userData.date"  name="date" formControlName="date"></ion-input> -->\n\n        <ion-input type="date" class="dateclass placeholderclass" placeholder="D/M/Y" [(ngModel)]="userData.date" name="date" formControlName="date"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <!-- <ion-icon name="person" item-start></ion-icon> -->\n\n        <ion-input type="text" placeholder="Social security" [(ngModel)]="userData.socialSecurity" name="socialSecurity" formControlName="socialSecurity"></ion-input>\n\n        <!-- <ion-input type="text" class="mitad" placeholder="Social security" [(ngModel)]="userData.socialSecurity"  name="socialSecurity" formControlName="socialSecurity"></ion-input> -->\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-select [(ngModel)]="userData.pais" name="pais" placeholder="Country">\n\n          <ion-option value="USA" selected>U.S.A</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-select class="mitad" [(ngModel)]="userData.state" name="state" (ngModelChange)="setCity()" placeholder="State">\n\n          <ion-option *ngFor="let state of estados" value="{{state.nameShort}}">{{state.name}}</ion-option>\n\n        </ion-select>\n\n        <ion-select class="mitad" [(ngModel)]="userData.zipcode" name="zipcode" (ngModelChange)="setZipCode()" placeholder="City">\n\n          <ion-option selected>....</ion-option>\n\n          <ion-option *ngFor="let city of ciudades" value="{{city.zipcode}}">{{city.name}} - {{city.zipcode}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item class="mitad mitadEspacio">\n\n        <!-- <ion-icon name="home" item-start></ion-icon> -->\n\n        <ion-input type="number" placeholder="1234" [(ngModel)]="DirecA" name="DirecA" formControlName="DirecA"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="mitad">\n\n        <ion-input type="text" placeholder="Avenue" value="" [(ngModel)]="DirecB" name="DirecB" formControlName="DirecB"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="mitad mitadEspacio">\n\n        <!-- <ion-icon name="home" item-start style="background:transparent; color:transparent;"></ion-icon> -->\n\n        <ion-input type="text" placeholder="City" [(ngModel)]="DirecC" name="DirecC" formControlName="DirecC"></ion-input>\n\n        <!-- <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD" formControlName="DirecD"></ion-input> -->\n\n      </ion-item>\n\n      <ion-item class="mitad">\n\n        <ion-input type="text" placeholder="NJ 0000" [(ngModel)]="DirecD" name="DirecD" formControlName="DirecD"></ion-input>\n\n      </ion-item>\n\n      <!-- <ion-item>\n\n      <ion-input type="number" placeholder="1234" class="mitad" [(ngModel)]="DirecA" name="DirecA"></ion-input>\n\n      <ion-input type="text" placeholder="Avenue" value="" class="mitad" [(ngModel)]="DirecB" name="DirecB"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="City" class="mitad" [(ngModel)]="DirecC" name="DirecC" ></ion-input>\n\n      <ion-input type="text" placeholder="NJ 0000" value="{{DirecD}}" class="mitad" [(ngModel)]="DirecD" name="DirecD"></ion-input>\n\n    </ion-item> -->\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Mail" [(ngModel)]="userData.email" name="email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="User" [(ngModel)]="userData.username" name="username"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="password" placeholder="Password" [(ngModel)]="userData.password" name="password"></ion-input>\n\n      </ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <ion-item>\n\n              <ion-select [(ngModel)]="telA" name="telA" placeholder="Area code">\n\n                <ion-option *ngFor="let stateCod of codeAreaEstadoSelect" value="{{stateCod.code}}">{{stateCod.code}}</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <ion-item>\n\n              <ion-input type="tel" placeholder="Phone #" [(ngModel)]="telB" name="telB"></ion-input>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n  </form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col class="btnBottom">\n\n          <button ion-button block color="light" (click)="goEditUser()">Save\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\update-user\update-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], UpdateUserPage);

//# sourceMappingURL=update-user.js.map

/***/ })

});
//# sourceMappingURL=7.js.map