webpackJsonp([4],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPageModule", function() { return ShowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show__ = __webpack_require__(576);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowPageModule = (function () {
    function ShowPageModule() {
    }
    return ShowPageModule;
}());
ShowPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__show__["a" /* ShowPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show__["a" /* ShowPage */]),
        ],
    })
], ShowPageModule);

//# sourceMappingURL=show.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//-services


/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowPage = (function () {
    function ShowPage(navCtrl, navParams, offerService, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.userService = userService;
        //-data
        this.ListService = [];
        //-default value
        this.imgDefault = 'assets/img/User/UserService.png';
        this.imgDescripcionDefault = 'assets/img/User/FotoServiceInfo.JPG';
        this.offer = '100';
        this.nameUser = 'Alejando Alberto';
        this.Description = 'Cleaning ...';
        //--default value toggle 
        this.labelToogle = 'Offline';
        this.StatusProvider = false;
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        // console.log(localStorage);
    };
    ShowPage.prototype.goInfo = function (item) {
        this.listOffer.unsubscribe();
        var Data = { 'datos': item };
        this.navCtrl.push('ServiceInfoPage', Data);
    };
    ShowPage.prototype.notify = function () {
        console.log("Toggled: " + this.StatusProvider);
        if (this.StatusProvider == false) {
            this.labelToogle = "Offline";
        }
        else {
            this.labelToogle = "Online";
            this.showServices();
        }
    };
    ShowPage.prototype.showServices = function () {
        var _this = this;
        var imagen;
        this.listOffer = this.offerService.getOfferNew().subscribe(function (list) {
            _this.ListService = [];
            var _loop_1 = function (keys) {
                var InfmaxOffer = list[keys].Clasificacion.informacion.maxOffer;
                var InfmoreInformacion = list[keys].Clasificacion.informacion.moreInformation;
                var InfFoto = list[keys].Clasificacion.informacion.foto;
                var key = list[keys]['$key'];
                var InfshortMoreInformacion = InfmoreInformacion.substr(0, 10) + '...';
                // console.log(list[key]);
                // console.log(list[key].Clasificacion.informacion.maxOffer);
                // console.log(list[key].Clasificacion.informacion.moreInformation);
                // console.log(InfmoreInformacion);
                if (InfFoto = "" || InfFoto == undefined || InfFoto == null || InfFoto) {
                    InfFoto = _this.imgDescripcionDefault;
                }
                // console.log(list[key].User);
                _this.userService.getUser(list[keys].User).subscribe(function (user) {
                    // console.log(user);
                    // console.log(user['user_picture']);
                    // console.log('-'+user['user_picture']+'-');
                    if (user['user_picture'] == "" || user['user_picture'] == undefined || user['user_picture'] == null || user['user_picture']) {
                        imagen = _this.imgDefault;
                    }
                    else {
                        imagen = user['user_picture'];
                    }
                    // console.log(imagen);
                    _this.ListService.push({ "name": user['user_username'], "img": imagen, "sale": InfmaxOffer, "infoShow": InfshortMoreInformacion, "info": InfmoreInformacion, "idOff": key, "idUser": user['$key'] });
                    console.log(_this.ListService);
                });
                // this.ListService=list;
            };
            // console.log(list);
            for (var keys in list) {
                _loop_1(keys);
            }
        });
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\show\show.html"*/'<!--\n\n  Generated template for the ShowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item padding class="statusPage">\n\n    \n\n      <ion-label>{{labelToogle}}</ion-label>\n\n      <ion-toggle [(ngModel)]="StatusProvider" (click)="notify()" color="danger"></ion-toggle>\n\n  </ion-item>\n\n\n\n  <div class="barraRoja" *ngIf="StatusProvider">\n\n      <h4>Select a service and start the auction</h4>\n\n  </div>\n\n  <ion-grid class="body" *ngIf="StatusProvider">\n\n    <!-- <ion-row >\n\n      <ion-col col-2>\n\n       <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imgDefault}}">\n\n        </ion-avatar>\n\n       </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <h5>${{offer}}</h5>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p><strong>{{nameUser}}</strong></p>\n\n        <p>{{Description}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button icon-only round color="light" (click)="goInfo()">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row *ngFor="let item of ListService">\n\n      <ion-col col-2>\n\n        <ion-item>\n\n         <ion-avatar item-start>\n\n           <img src="{{item.img}}">\n\n         </ion-avatar>\n\n        </ion-item>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <h5>${{item.sale}}</h5>\n\n       </ion-col>\n\n       <ion-col col-6>\n\n         <p><strong>{{item.name}}</strong></p>\n\n         <p>{{item.infoShow}}</p>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <button ion-button icon-only round color="light" (click)="goInfo(item)">\n\n           <ion-icon name="search"></ion-icon>\n\n         </button>\n\n       </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\show\show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ })

});
//# sourceMappingURL=4.js.map