webpackJsonp([4],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPageModule", function() { return ShowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show__ = __webpack_require__(589);
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

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(276);
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
    function ShowPage(navCtrl, navParams, offerService, userService, professionalsService, geo, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.userService = userService;
        this.professionalsService = professionalsService;
        this.geo = geo;
        this.platform = platform;
        //-data
        this.ListService = [];
        this.ListContracts = [];
        this.UserActual = localStorage.getItem('verificacion');
        console.log(this.UserActual);
        //-default value
        this.imgDefault = 'assets/img/User/UserService.png';
        this.imgDescripcionDefault = 'assets/img/User/FotoServiceInfo.JPG';
        this.offer = '100';
        this.nameUser = 'Alejando Alberto';
        this.Description = 'Cleaning ...';
        //--default value toggle 
        this.labelToogle = 'Offline';
        this.StatusProvider = false;
        this.getUserLocationGeolocation();
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        // console.log(localStorage);
    };
    ShowPage.prototype.goInfo = function (item) {
        this.userSubs.unsubscribe();
        this.serviceSubs.unsubscribe();
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
        this.listOffer = this.offerService.getOfferNew().subscribe(function (list) {
            _this.ListService = [];
            // console.log(list);
            _this.getServiceProvider(list);
        });
    };
    ShowPage.prototype.getServiceProvider = function (BDListOffer) {
        var _this = this;
        this.serviceSubs = this.professionalsService.getServicesProfessional(this.UserActual).subscribe(function (BDListServicesProvider) {
            console.log(BDListServicesProvider);
            _this.professionalsService.getStar(_this.UserActual).subscribe(function (starProvider) {
                console.log('starP');
                console.log(starProvider);
                if (starProvider['$value']) {
                    if (Number(starProvider['$value']) >= Number(BDListOffer.Star)) {
                        console.log('star ok');
                        _this.showListData(BDListOffer, BDListServicesProvider);
                    }
                }
            });
        });
    };
    ShowPage.prototype.showListData = function (BDListOffer, BDListServicesProvider) {
        var _this = this;
        var imagen;
        for (var keySP in BDListServicesProvider) {
            // console.log(BDListServicesProvider[keySP]);
            // console.log('BDListServicesProvider[keySP]serv_service:'+BDListServicesProvider[keySP]['serv_service']);
            console.log('p-BDList.[serv_subService]' + BDListServicesProvider[keySP]['serv_subService']);
            var _loop_1 = function (keys) {
                console.log(BDListOffer[keys]);
                console.log('o-BDListOffer.categoria' + BDListOffer[keys].Clasificacion.categoria);
                // console.log(BDListOffer[keys].Clasificacion.distancia);
                if (BDListOffer[keys].UserLocacion) {
                    // console.log(BDListOffer[keys].UserLocacion.latitud);
                    // console.log(BDListOffer[keys].UserLocacion.longitud);
                    var distanceKilo = this_1.getDistanceKilometros(Number(this_1.lat), Number(this_1.lng), Number(BDListOffer[keys].UserLocacion.latitud), Number(BDListOffer[keys].UserLocacion.longitud));
                    // console.log(distanceKilo);
                    var distanceMillas = this_1.getConvertKilometrosMillas(distanceKilo);
                    // console.log(distanceMillas);
                    // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));
                    console.log('filtros');
                    console.log('off:' + BDListOffer[keys].Clasificacion.categoria);
                    console.log('listPro:' + BDListServicesProvider[keySP]['serv_subService']);
                    console.log('listPro:' + BDListServicesProvider[keySP]['Star']);
                    console.log(this_1.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia, distanceMillas));
                    if (BDListOffer[keys].Clasificacion.categoria == BDListServicesProvider[keySP]['serv_subService'] && true == this_1.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia, distanceMillas)) {
                        var InfmaxOffer_1 = BDListOffer[keys].Clasificacion.informacion.maxOffer;
                        var InfmoreInformacion_1 = BDListOffer[keys].Clasificacion.informacion.moreInformation;
                        var InfFoto = BDListOffer[keys].Clasificacion.informacion.foto;
                        var key_1 = BDListOffer[keys]['$key'];
                        var InfshortMoreInformacion_1 = InfmoreInformacion_1.substr(0, 10) + '...';
                        if (InfFoto = "" || InfFoto == undefined || InfFoto == null || InfFoto) {
                            InfFoto = this_1.imgDescripcionDefault;
                        }
                        // console.log(BDListOffer[key].User);
                        this_1.userSubs = this_1.userService.getUser(BDListOffer[keys].User).subscribe(function (user) {
                            // console.log(user);
                            // console.log(user['user_picture']);
                            // console.log('-'+user['user_picture']+'-');
                            // console.log('-'+user['prof_star']+'-');
                            // if(user['user_picture']){
                            if (user['user_picture'] == "" || user['user_picture'] == undefined || user['user_picture'] == null || user['user_picture']) {
                                imagen = _this.imgDefault;
                            }
                            else {
                                imagen = user['user_picture'];
                            }
                            // console.log(imagen);
                            _this.ListService.push({ "name": user['user_username'], "img": imagen, "sale": InfmaxOffer_1, "infoShow": InfshortMoreInformacion_1, "info": InfmoreInformacion_1, "idOff": key_1, "idUser": user['$key'] });
                            console.log(_this.ListService);
                            // }
                        });
                        // this.ListService=list;
                    }
                }
            };
            var this_1 = this;
            for (var keys in BDListOffer) {
                _loop_1(keys);
            }
        }
    };
    ShowPage.prototype.getUserLocationGeolocation = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var options = {
                timeout: 5000
            };
            _this.geo.getCurrentPosition(options).then(function (resp) {
                console.log('geoLocation');
                console.info(resp.coords.latitude);
                console.info(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
            }).catch(function () {
                console.log("Error to get location");
            });
        });
    };
    ShowPage.prototype.getDistanceKilometros = function (lat1, lon1, lat2, lon2) {
        console.log('getDistanceKilometros');
        console.log(lat1);
        console.log(lat2);
        console.log(lat2 - lat1);
        var rad = function (x) { return x * Math.PI / 180; };
        var R = 6378.137; //Radio de la tierra en km
        var dLat = rad(lat2 - lat1);
        // var dLat = rad( 0);
        var dLong = rad(lon2 - lon1);
        // var dLong = rad( 0);
        // console.log('lat2 - lat1'+( lat2 - lat1 ));
        // console.log('lon2 - lon1'+(lon2 - lon1));
        // console.log(dLat);
        // console.log(dLong);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d.toFixed(3); //Retorna tres decimales
    };
    ShowPage.prototype.getConvertKilometrosMillas = function (kilo) {
        return kilo * 0.62137;
    };
    ShowPage.prototype.getNumeroDistanceOffer = function (distanceOffer, distanciaMilla) {
        // console.log(distanceOffer);
        // console.log(distanciaMilla);
        var dentroDeDistancia = false;
        switch (distanceOffer) {
            case "1M": {
                if (1 >= distanciaMilla) {
                    dentroDeDistancia = true;
                    console.log('distanciaOK');
                }
                break;
            }
            case "2M": {
                if (2 >= distanciaMilla) {
                    dentroDeDistancia = true;
                    console.info('distanciaOK');
                }
                break;
            }
            case "3M": {
                if (3 >= distanciaMilla) {
                    dentroDeDistancia = true;
                    console.info('distanciaOK');
                }
                break;
            }
            case "4M": {
                if (4 >= distanciaMilla) {
                    dentroDeDistancia = true;
                    console.info('distanciaOK');
                }
                break;
            }
            case "5M": {
                if (5 >= distanciaMilla) {
                    dentroDeDistancia = true;
                    console.info('distanciaOK');
                }
                break;
            }
            case "5MM": {
                dentroDeDistancia = true;
                console.info('distanciaOK');
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
        return dentroDeDistancia;
        // return false;
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\show\show.html"*/'<!--\n\n  Generated template for the ShowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item padding class="statusPage">\n\n    \n\n      <ion-label>{{labelToogle}}</ion-label>\n\n      <ion-toggle [(ngModel)]="StatusProvider" (click)="notify()" color="danger"></ion-toggle>\n\n  </ion-item>\n\n\n\n  <div class="barraRoja" *ngIf="StatusProvider">\n\n      <h4>Select a service and start the auction</h4>\n\n  </div>\n\n  <ion-grid class="body" *ngIf="StatusProvider">\n\n    <!-- <ion-row >\n\n      <ion-col col-2>\n\n       <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imgDefault}}">\n\n        </ion-avatar>\n\n       </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <h5>${{offer}}</h5>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p><strong>{{nameUser}}</strong></p>\n\n        <p>{{Description}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button icon-only round color="light" (click)="goInfo()">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row *ngFor="let item of ListService">\n\n      <ion-col col-2>\n\n        <ion-item>\n\n         <ion-avatar item-start>\n\n           <img src="{{item.img}}">\n\n         </ion-avatar>\n\n        </ion-item>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <h5>${{item.sale}}</h5>\n\n       </ion-col>\n\n       <ion-col col-6>\n\n         <p><strong>{{item.name}}</strong></p>\n\n         <p>{{item.infoShow}}</p>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <button ion-button icon-only round color="light" (click)="goInfo(item)">\n\n           <ion-icon name="search"></ion-icon>\n\n         </button>\n\n       </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\show\show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ })

});
//# sourceMappingURL=4.js.map