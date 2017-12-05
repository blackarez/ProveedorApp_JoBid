webpackJsonp([12],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceVotePageModule", function() { return ServiceVotePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_vote__ = __webpack_require__(681);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceVotePageModule = (function () {
    function ServiceVotePageModule() {
    }
    return ServiceVotePageModule;
}());
ServiceVotePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_vote__["a" /* ServiceVotePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_vote__["a" /* ServiceVotePage */]),
        ],
    })
], ServiceVotePageModule);

//# sourceMappingURL=service-vote.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceVotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notificacion_service__ = __webpack_require__(298);
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
 * Generated class for the ServiceVotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceVotePage = (function () {
    function ServiceVotePage(navCtrl, navParams, userService, notificacionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.notificacionService = notificacionService;
        //-view
        //-view
        this.vote = [];
        this.loadView();
        this.notificacionVote();
    }
    ServiceVotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceVotePage');
    };
    ServiceVotePage.prototype.goCleaningOk = function () {
        var _this = this;
        console.log(this.vote);
        this.vote['providerId'] = this.userActual;
        this.userService.setComment(this.user, this.vote);
        //-cambiar calificacion proveedor
        var userServiceSubs = this.userService.getUser(this.user).subscribe(function (userDB) {
            if (userServiceSubs != undefined) {
                console.log('userServiceSubs S - service-vote');
                if (userDB['user_star']) {
                    var calificacion = (Number(_this.vote.estrellas) + Number(userDB['user_star'])) / 2;
                    console.log(calificacion);
                    _this.userService.setStar(_this.user, calificacion);
                }
                console.log('userServiceSubs US - service-vote');
                userServiceSubs.unsubscribe();
            }
        });
        this.navCtrl.setRoot('ShowPage');
    };
    ServiceVotePage.prototype.loadView = function () {
        // this.DataService =  this.navParams.get('service');
        // this.DataUser = this.navParams.get('user');
        // console.log(this.DataService);
        // console.log(this.DataUser);
        // this.user = this.DataService['idUser'];
        //-localStorage
        this.userActual = localStorage.getItem('verificacion');
        console.log(this.userActual);
        // this.user ="user_1509139021478";
    };
    //-notification
    ServiceVotePage.prototype.notificacionVote = function () {
        console.info('Nota: Do not forget to rate your client');
        this.notificacionService.mostrar('Do not forget to rate your client', 7);
    };
    return ServiceVotePage;
}());
ServiceVotePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-vote',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-vote\service-vote.html"*/'<!--\n\n  Generated template for the ServiceVotePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n  <div class="barraRoja">\n\n    <h4>Service qualification</h4>\n\n  </div>\n\n  <form id="signup-form3" class="list" padding>\n\n  <p>Now you can qualify the client and leave a comment of the service received.</p>\n\n    <ion-list >\n\n      <ion-item>\n\n        <p class="clasificacion">\n\n          <input id="radio1" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="5">\n\n          <label for="radio1">&#9733;</label>\n\n  \n\n          <input id="radio2" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="4">\n\n          <label for="radio2">&#9733;</label>\n\n          \n\n          <input id="radio3" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="3">\n\n          <label for="radio3">&#9733;</label>\n\n          \n\n          <input id="radio4" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="2">\n\n          <label for="radio4">&#9733;</label>\n\n          \n\n          <input id="radio5" type="radio" name="estrellas" [(ngModel)]="vote.estrellas" value="1">\n\n          <label for="radio5">&#9733;</label>\n\n        </p>\n\n      </ion-item>\n\n      <ion-item>\n\n      <input type="text">\n\n        <ion-textarea placeholder="Comments" name="comment" [(ngModel)]="vote.comment"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n    <div class="btnBottom">\n\n      <button ion-button color="danger" block icon-left (click)="goCleaningOk()">Continue<ion-icon name="arrow-dropright"></ion-icon></button>\n\n    </div>\n\n  </form>\n\n  </ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-vote\service-vote.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__services_notificacion_service__["a" /* NotificacionService */]])
], ServiceVotePage);

//# sourceMappingURL=service-vote.js.map

/***/ })

});
//# sourceMappingURL=12.js.map