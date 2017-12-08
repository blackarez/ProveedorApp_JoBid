webpackJsonp([13],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSalePageModule", function() { return ServiceSalePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_sale__ = __webpack_require__(680);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceSalePageModule = (function () {
    function ServiceSalePageModule() {
    }
    return ServiceSalePageModule;
}());
ServiceSalePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__service_sale__["a" /* ServiceSalePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service_sale__["a" /* ServiceSalePage */]),
        ],
    })
], ServiceSalePageModule);

//# sourceMappingURL=service-sale.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceSalePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sale_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_offer_service__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notificacion_service__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the ServiceSalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceSalePage = (function () {
    function ServiceSalePage(navCtrl, navParams, alertCtrl, professionalsService, geo, platform, saleService, offerService, nativeAudio, notificacionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.professionalsService = professionalsService;
        this.geo = geo;
        this.platform = platform;
        this.saleService = saleService;
        this.offerService = offerService;
        this.nativeAudio = nativeAudio;
        this.notificacionService = notificacionService;
        //-data
        this.DataService = [];
        this.Workers = [];
        //--valiables por defecto provider
        this.imgJobDefault = "assets/img/professions/cleaning.png";
        this.galleryJobDefault = "assets/img/gallery.png";
        //-variables por defecto service
        this.imgServiceDefault = "assets/img/User/FotoServiceInfo.JPG";
        //--timer
        this.segundos = 0;
        this.minutos = 3;
        this.showContador = true;
        this.NumeroContador = 1;
        //-- geoLocation
        this.lat = 37.09024;
        this.lng = -95.71289100000001;
        this.zom = 16;
        //--disable btn
        this.offerDisable = true;
        this.exitDisable = false;
        this.DataService = this.navParams.get('datos');
        //-load only
        // this.DataService = {"name":"Angel","img":"assets/img/User/UserService.png","sale":"179","infoShow":"FADFASD...","info":"FADFASD","idOff":"offer_1509549987105","idUser":"user_1509139021478"};
        //-fin load only
        console.log(this.DataService);
        console.log(JSON.stringify(this.DataService));
        this.userActual = localStorage.getItem('verificacion');
        this.getUserLocationGeolocation();
        this.loadView();
        this.getSale();
        this.getTimer();
        this.startTimer();
        this.contador = '0' + this.minutos + ':' + '0' + this.segundos;
    }
    ServiceSalePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceSalePage');
        // console.log(localStorage);
    };
    ServiceSalePage.prototype.loadView = function () {
        this.maxOffer = this.DataService.sale;
    };
    ServiceSalePage.prototype.newOfferProvider = function () {
        if (this.MenosPrecio > Number(this.newOffer)) {
            // console.log(Number(this.newOffer));
            this.myOffer = Number(this.newOffer);
            // console.log(this.myOffer);
            this.exitDisable = true;
            this.saleService.setSaleProvider(this.DataService.idUser, this.DataService.idOff, this.userActual, this.newOffer);
        }
        else {
            // alert('The offer must be less than the current');
            this.offerError();
        }
        // this.navCtrl.setRoot('ServiceWinPage');
    };
    ServiceSalePage.prototype.goServiceWin = function () {
        console.info('goServiceWin');
        this.offerService.setOfferProviderLocation(this.DataService.idOff, { 'latitud': this.lat, 'longitud': this.lng });
        //- saved provider contract
        this.offerService.setProvider(this.DataService.idOff, this.userActual);
        this.saleService.setProvider(this.DataService.idUser, this.DataService.idOff, this.userActual);
        this.DataService['sale'] = this.myOffer;
        var dataService = { 'datos': this.DataService };
        console.log(dataService);
        this.navCtrl.setRoot('ServiceWinPage', dataService);
        // this.navCtrl.setRoot('ServiceWinPage');
    };
    ServiceSalePage.prototype.goIndex = function () {
        //--set status offer y sale
        // console.info('Offer -Cancelled');
        // this.saleService.setStatus(this.userActual,this.keyOffer,'Cancelled');
        // this.offerService.setStatus(this.keyOffer,'Cancelled');
        //   clearInterval(this.objNodeTimer);
        this.navCtrl.setRoot('ShowPage');
    };
    //--- timer
    ServiceSalePage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { return _this.timer(); }, 1000);
    };
    ServiceSalePage.prototype.timer = function () {
        if (this.minutos == 0 && this.segundos == 1) {
            // if(this.minutos == 1 && this.segundos == 50 ){
            //this.showContador = false;
            if (this.NumeroContador == 2) {
                clearInterval(this.objNodeTimer);
                this.showContador = false;
                this.audioB();
                this.notificacionFinish();
                this.ganador();
            }
            else {
                this.notificacionBegin();
                this.audioA();
                this.minutos = 2;
                this.segundos = 0;
                this.NumeroContador = 2;
                this.offerDisable = false;
                this.showContador = false;
            }
        }
        else {
            if (--this.segundos < 0) {
                this.segundos = 59;
                if (--this.minutos < 0) {
                    //this.minutos = 59;
                    //if( (this.segundos = 0) && (this.minutos = 0)){ this.showContador = false;}
                }
            }
            this.contador = this.dobleCifra(this.minutos) + ':' + this.dobleCifra(this.segundos);
        }
    };
    //--- Functions
    ServiceSalePage.prototype.getSale = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var finRegistro;
            return __generator(this, function (_a) {
                this.MenosPrecio = undefined;
                finRegistro = false;
                // console.log(this.DataService.idOff);
                // console.log(this.DataService.idUser);
                this.saleSub = this.saleService.getSale(this.DataService.idUser, this.DataService.idOff)
                    .subscribe(function (result) {
                    console.log('saleSub-S sale');
                    _this.MenosPrecio = undefined;
                    // console.log(result);
                    if (result.status != 'Cancelled') {
                        // if(result.status == 'Start'){
                        //   this.offerDisable = false;
                        //   this.showContador = false;
                        // }
                        if (_this.MenosPrecio == undefined) {
                            _this.MenosPrecio = Number(result.sale);
                        }
                        var trabajadores_1 = result.providers;
                        _this.Workers = [];
                        var _loop_1 = function (trabajador) {
                            if (_this.MenosPrecio > Number(trabajadores_1[trabajador]['offer'])) {
                                _this.MenosPrecio = Number(trabajadores_1[trabajador]['offer']);
                            }
                            var PromiseUser = _this.professionalsService.getProfessional(trabajador).subscribe(function (user) {
                                console.log('PromiseUser-S sale');
                                //console.log(user);
                                var img = _this.imgJobDefault;
                                if (user.prof_picture && user.prof_picture != undefined && user.prof_picture != '') {
                                    img = user.prof_picture;
                                }
                                _this.Workers.push({ "id": trabajador, "offer": trabajadores_1[trabajador]['offer'], "img": img, "name": user.prof_name });
                                console.log('PromiseUser-US sale');
                                PromiseUser.unsubscribe();
                            });
                        };
                        for (var trabajador in trabajadores_1) {
                            _loop_1(trabajador);
                        }
                        finRegistro = true;
                    }
                    else {
                        _this.notificacionCancelSale();
                        _this.AlertCancelOffer();
                        _this.navCtrl.setRoot('ShowPage');
                        console.log('PromiseUser-US sale');
                        _this.saleSub.unsubscribe();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ServiceSalePage.prototype.ganador = function () {
        if (this.MenosPrecio == this.myOffer) {
            this.goServiceWin();
            console.log('saleSub-US sale');
            this.saleSub.unsubscribe();
        }
        else {
            this.navCtrl.setRoot('ShowPage');
            console.log('saleSub-US sale');
            this.saleSub.unsubscribe();
        }
    };
    ServiceSalePage.prototype.dobleCifra = function (num) {
        if (num < 10) {
            return '0' + num;
        }
        else {
            return '' + num;
        }
    };
    ServiceSalePage.prototype.getUserLocationGeolocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            _this.geo.getCurrentPosition(options).then(function (resp) {
                console.info('geoLocation');
                // console.info(resp.coords.latitude);
                // console.info(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
                if (_this.lat == resp.coords.latitude && _this.lng == resp.coords.longitude) {
                    _this.saleService.setSaleUserLocation(_this.DataService.idUser, _this.DataService.idOff, _this.userActual, { 'latitud': _this.lat, 'longitud': _this.lng });
                }
            }).catch(function () {
                console.log("Error to get location");
            });
        });
    };
    ServiceSalePage.prototype.getTimer = function () {
        var _this = this;
        this.timerSubs = this.offerService.getTimmer(this.DataService.idOff).subscribe(function (timer) {
            console.log('timerSubs-S sale');
            // console.log(timer);
            if (timer['$value']) {
                // console.log(timer['$value']);
                // console.log(timer['$value'].split(":", 2));
                var ArrayContador = timer['$value'].split(":", 2);
                console.log(ArrayContador['0']);
                console.log(ArrayContador['1']);
                if (ArrayContador['1'] == '00') {
                    _this.minutos = Number(ArrayContador['0']) - 1;
                    _this.segundos = Number(59);
                }
                else {
                    _this.minutos = Number(ArrayContador['0']);
                    _this.segundos = Number(ArrayContador['1']) - 1;
                }
            }
            console.log('timerSubs-US sale');
            _this.timerSubs.unsubscribe();
        });
    };
    //--alert
    ServiceSalePage.prototype.detailsService = function () {
        var description = '<img src="' + this.imgServiceDefault + '"  class="imageFull"/><p>' + this.DataService.info + '</p>';
        var alert = this.alertCtrl.create({
            title: 'Service Information',
            message: description,
            buttons: ['OK']
        });
        alert.present();
    };
    ServiceSalePage.prototype.offerError = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: 'The offer must be less than the current',
            buttons: ['OK']
        });
        alert.present();
    };
    ServiceSalePage.prototype.AlertCancelOffer = function () {
        var alert = this.alertCtrl.create({
            title: 'Information',
            message: 'The auction was canceled by the Client',
            buttons: ['OK']
        });
        alert.present();
    };
    ServiceSalePage.prototype.audioA = function () {
        this.nativeAudio.preloadSimple('uniqueId1', 'assets/timbre.mp3').then(this.onSuccess, this.onError);
        this.nativeAudio.play('uniqueId1').then(this.onSuccess, this.onError);
    };
    ServiceSalePage.prototype.audioB = function () {
        this.nativeAudio.preloadSimple('uniqueId2', 'assets/timbre.mp3').then(this.onSuccess, this.onError);
        this.nativeAudio.play('uniqueId2').then(this.onSuccess, this.onError);
    };
    ServiceSalePage.prototype.onSuccess = function () {
        console.log(' success');
    };
    ServiceSalePage.prototype.onError = function () {
        console.log('error');
    };
    //-notification
    ServiceSalePage.prototype.notificacionBegin = function () {
        console.info('Nota: The bid has begun, start the bids');
        // this.notificacionService.mostrar('The bid has begun, start the bids',3);
        this.notificacionService.mostrarSale('The bid has begun, start the bids', 3);
    };
    //-notification
    ServiceSalePage.prototype.notificacionFinish = function () {
        console.info('Nota: The bid has finished');
        this.notificacionService.mostrarSale('The bid has finished', 3);
    };
    ServiceSalePage.prototype.notificacionCancelSale = function () {
        console.info('Nota: The service has been canceled');
        // this.notificacionService.mostrar('The service has been canceled',4);
        this.notificacionService.mostrar('The service has been canceled', 4);
    };
    return ServiceSalePage;
}());
ServiceSalePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service-sale',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-sale\service-sale.html"*/'<!--\n\n  Generated template for the ServiceSalePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>JoBid</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content>\n\n  <!-- <div class="mapa">\n\n    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zom">\n\n      <agm-marker [latitude]="lat" [longitude]="lng">\n\n        <agm-info-window>\n\n          <h3><strong>Howdy!</strong></h3>\n\n          <p>You are here!</p>\n\n        </agm-info-window>\n\n      </agm-marker>\n\n    </agm-map>\n\n  </div> -->\n\n  <div class="contador" *ngIf="showContador" >\n\n    <div class="contenido" >\n\n      <h3><p>Start</p>{{contador}}</h3>\n\n    </div>\n\n  </div>\n\n  <div class="Offers">\n\n    <p>Initial offer ${{maxOffer}}</p>\n\n    <h2>${{MenosPrecio}}</h2>\n\n  </div>\n\n  <div class="barraRoja">\n\n    <h4>Bid participants</h4>\n\n  </div>\n\n  <ion-grid class="body">\n\n    <ion-row *ngFor="let item of Workers">\n\n      <ion-col col-8>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="{{item.img}}">\n\n          </ion-avatar>\n\n          <p>{{item.name}}</p>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <h5>${{item.offer}}</h5>\n\n      </ion-col>\n\n      <ion-col col-2 style="text-align:center;">\n\n        <ion-icon name="trophy" *ngIf="item.offer == MenosPrecio"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>   \n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-grid>\n\n      <ion-row class="newOffer">\n\n        <ion-col col-3>\n\n          <p>Time</p>\n\n          <p><ion-icon name="time"></ion-icon> <span> {{contador}}</span></p>\n\n          </ion-col>\n\n        <ion-col col-6>\n\n          <ion-item>\n\n            <ion-input type="number" [(ngModel)]="newOffer" name="newOffer" [disabled]="offerDisable"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-button block color="light"(click)="newOfferProvider()" [disabled]="offerDisable">Offer\n\n          </button>\n\n        </ion-col>\n\n       </ion-row>\n\n       <ion-row>\n\n        <ion-col col-5>\n\n          <div class="btnIconInverse">\n\n          <button id="btnSalir" ion-button block color="light"(click)="goIndex()" [disabled]="exitDisable">\n\n              <!-- <ion-icon name="arrow-dropleft"></ion-icon>  -->\n\n              Exit\n\n            </button>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-7>\n\n            <div class="btnIcon">\n\n              <button id="btnDetalle" ion-button block color="light" (click)="detailsService()">Details\n\n\n\n                  <ion-icon name="search"></ion-icon> \n\n                </button>\n\n            </div>\n\n          </ion-col>\n\n       </ion-row>\n\n      </ion-grid>  \n\n    </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\service-sale\service-sale.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__services_sale_service__["a" /* SaleService */],
        __WEBPACK_IMPORTED_MODULE_4__services_offer_service__["a" /* OfferService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */],
        __WEBPACK_IMPORTED_MODULE_7__services_notificacion_service__["a" /* NotificacionService */]])
], ServiceSalePage);

//# sourceMappingURL=service-sale.js.map

/***/ })

});
//# sourceMappingURL=13.js.map