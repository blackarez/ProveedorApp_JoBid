webpackJsonp([8],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPageModule", function() { return ShowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(296);
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
            __WEBPACK_IMPORTED_MODULE_3__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'
            })
        ],
    })
], ShowPageModule);

//# sourceMappingURL=show.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_offer_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(298);
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
        this.lat = 51.678418;
        this.lng = 7.809007;
        //-map
        this.Userlat = 37.09024;
        this.Userlng = -95.71289100000001;
        this.zom = 14;
        this.providerLatitud = 37.09024;
        this.providerLongitud = -95.71289100000001;
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
        alert('hola');
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        // console.log(localStorage);
    };
    ShowPage.prototype.goInfo = function (item) {
        console.log('userSubs-US show');
        console.log('serviceSubs-US show');
        console.log('listOffer-US show');
        this.userSubs.unsubscribe();
        this.serviceSubs.unsubscribe();
        this.listOffer.unsubscribe();
        var Data = { 'datos': item };
        this.navCtrl.push('ServiceInfoPage', Data);
    };
    ShowPage.prototype.notify = function () {
        console.log("Toggled: " + this.StatusProvider);
        alert("Toggled: " + this.StatusProvider);
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
        alert('showServices');
        this.listOffer = this.offerService.getOfferNew().subscribe(function (list) {
            _this.ListService = [];
            // console.log(list);
            console.log('listOffer-S show');
            _this.getServiceProvider(list);
        });
    };
    ShowPage.prototype.getServiceProvider = function (BDListOffer) {
        var _this = this;
        alert();
        this.serviceSubs = this.professionalsService.getServicesProfessional(this.UserActual).subscribe(function (BDListServicesProvider) {
            console.log('serviceSubs-S show');
            // console.log(BDListServicesProvider);
            var professionalServiceSubs = _this.professionalsService.getStar(_this.UserActual).subscribe(function (starProvider) {
                console.log('professionalsService-S show');
                // console.log('starP');
                // console.log(starProvider);
                if (starProvider['$value']) {
                    _this.showListData(BDListOffer, BDListServicesProvider, starProvider['$value']);
                }
                console.log('professionalsService-US show');
                professionalServiceSubs.unsubscribe();
            });
        });
    };
    ShowPage.prototype.showListData = function (BDListOffer, BDListServicesProvider, stars) {
        var _this = this;
        var imagen;
        for (var keySP in BDListServicesProvider) {
            var _loop_1 = function (keys) {
                // console.log('bdoff-star:'+Number(BDListOffer[keys].Star));
                // console.log('pro-star: '+ Number(stars));
                if (Math.round(Number(stars)) >= Math.round(Number(BDListOffer[keys].Star))) {
                    console.info('star ok');
                    alert('star ok');
                    // console.log(BDListOffer[keys]);
                    // console.log('BDListOffer.categoria: '+BDListOffer[keys].Clasificacion.categoria);
                    // console.log(BDListOffer[keys].Clasificacion.distancia);
                    if (BDListOffer[keys].UserLocacion) {
                        // console.log(BDListOffer[keys].UserLocacion.latitud);
                        // console.log(BDListOffer[keys].UserLocacion.longitud);
                        var distanceKilo = this_1.getDistanceKilometros(Number(this_1.lat), Number(this_1.lng), Number(BDListOffer[keys].UserLocacion.latitud), Number(BDListOffer[keys].UserLocacion.longitud));
                        // console.log(distanceKilo);
                        var distanceMillas = this_1.getConvertKilometrosMillas(distanceKilo);
                        // console.log(distanceMillas);
                        // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));
                        // console.log('filtros');
                        // console.log('listOff:'+BDListOffer[keys].Clasificacion.categoria);
                        // console.log('listPro-sub:'+BDListServicesProvider[keySP]['serv_subService']);
                        // console.log('pro-star:'+stars);
                        // console.log(this.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia,distanceMillas));
                        if (BDListOffer[keys].Clasificacion.categoria == BDListServicesProvider[keySP]['serv_subService'] && true == this_1.getNumeroDistanceOffer(BDListOffer[keys].Clasificacion.distancia, distanceMillas)) {
                            console.info('categoria y  distancia ok');
                            alert('categoria y  distancia ok');
                            var ServiceProviderCertificate = void 0;
                            var ServiceProviderSecurity = void 0;
                            if (BDListServicesProvider[keySP]['serv_detail']['serv_certificate'] != null) {
                                ServiceProviderCertificate = BDListServicesProvider[keySP]['serv_detail']['serv_certificate'];
                                // console.log('listPro-cer:'+BDListServicesProvider[keySP]['serv_detail']['serv_certificate']);
                                // console.log('off-certificado:'+BDListOffer[keys].Clasificacion.certificacion);
                            }
                            else {
                                // console.log('listPro-cer = false');
                                ServiceProviderCertificate = 'false';
                            }
                            if (BDListServicesProvider[keySP]['serv_detail']['serv_insurance'] != null) {
                                ServiceProviderSecurity = BDListServicesProvider[keySP]['serv_detail']['serv_insurance'];
                                // console.log('listPro-zeg:'+BDListServicesProvider[keySP]['serv_detail']['serv_insurance']);
                                // console.log('off-seguro:'+BDListOffer[keys].Clasificacion.seguro);
                            }
                            else {
                                // console.log('listPro-zeg = false');
                                ServiceProviderSecurity = 'false';
                            }
                            // console.log('listPro-exp:'+BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']);
                            // console.log('off-experien:'+BDListOffer[keys].Clasificacion.experiencia);
                            if (ServiceProviderCertificate == BDListOffer[keys].Clasificacion.certificacion && ServiceProviderSecurity == BDListOffer[keys].Clasificacion.seguro) {
                                console.info('certificado y seguro ok');
                                alert('certificado y seguro ok');
                                // console.log(this.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia,BDListOffer[keys].Clasificacion.experiencia));
                                if (this_1.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia, BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']) == true) {
                                    console.info('Experience ok');
                                    alert('Experience ok');
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
                                        console.log('userSubs-S show');
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
                                else {
                                    console.info('Experience no');
                                    alert('star ok');
                                }
                            }
                            else {
                                console.info('certificado y seguro no');
                                alert('star ok');
                            }
                        }
                        else {
                            console.info('categoria y  distancia no');
                            alert('star ok');
                        }
                    }
                }
                else {
                    console.info('star no');
                }
            };
            var this_1 = this;
            // console.log(BDListServicesProvider[keySP]);
            // console.log('BDListServicesProvider[keySP]serv_service:'+BDListServicesProvider[keySP]['serv_service']);
            // console.log('p-BDList.serv_subService: '+BDListServicesProvider[keySP]['serv_subService']);
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
                console.info('geoLocation');
                // console.info(resp.coords.latitude);
                // console.info(resp.coords.longitude);
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
            }).catch(function () {
                console.log("Error to get location");
            });
        });
    };
    ShowPage.prototype.getDistanceKilometros = function (lat1, lon1, lat2, lon2) {
        // console.log('getDistanceKilometros');
        // console.log(lat1);
        // console.log(lat2);
        // console.log(lat2 - lat1);
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
    ShowPage.prototype.getNumeroExperienciOffer = function (offerExperiense, providerExperience) {
        // console.log(offerExperiense);
        // console.log(providerExperience);
        var experienciaMayor = false;
        var numbOfferExperiense = 0;
        var numbProviderExperiense = 0;
        switch (offerExperiense) {
            case '1Y': {
                numbOfferExperiense = 1;
                break;
            }
            case '2Y': {
                numbOfferExperiense = 2;
                break;
            }
            case '3Y': {
                numbOfferExperiense = 3;
                break;
            }
            case '3YM': {
                numbOfferExperiense = 4;
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
        switch (providerExperience) {
            case '1Y': {
                numbProviderExperiense = 1;
                break;
            }
            case '2Y': {
                numbProviderExperiense = 2;
                break;
            }
            case '3Y': {
                numbProviderExperiense = 3;
                break;
            }
            case '3YM': {
                numbProviderExperiense = 4;
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
        console.log('nExpeProvider: ' + numbProviderExperiense);
        console.log('nExpeOffer: ' + numbOfferExperiense);
        if (numbProviderExperiense >= numbOfferExperiense) {
            experienciaMayor = true;
        }
        else {
            experienciaMayor = false;
        }
        return experienciaMayor;
        // return false;
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\show\show.html"*/'<!--\n\n  Generated template for the ShowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>joBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item padding class="statusPage">\n\n    \n\n      <ion-label>{{labelToogle}}</ion-label>\n\n      <ion-toggle [(ngModel)]="StatusProvider" (click)="notify()" color="danger"></ion-toggle>\n\n  </ion-item>\n\n  <!-- <div class="mapa">\n\n    <agm-map [latitude]="51.678418" [longitude]="7.809007" [zoom]="14">\n\n      <agm-marker style="z-index:9;"\n\n        [latitude]="Userlat"\n\n        [longitude]="Userlng" >\n\n      </agm-marker>\n\n    </agm-map>\n\n  </div> -->\n\n  <div class="barraRoja" *ngIf="StatusProvider">\n\n      <h4>Select a service and start the bid</h4>\n\n  </div>\n\n  <ion-grid class="body" *ngIf="StatusProvider">\n\n    <!-- <ion-row >\n\n      <ion-col col-2>\n\n       <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imgDefault}}">\n\n        </ion-avatar>\n\n       </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <h5>${{offer}}</h5>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p><strong>{{nameUser}}</strong></p>\n\n        <p>{{Description}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button icon-only round color="light" (click)="goInfo()">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row *ngFor="let item of ListService">\n\n      <ion-col col-2>\n\n        <ion-item>\n\n         <ion-avatar item-start>\n\n           <img src="{{item.img}}">\n\n         </ion-avatar>\n\n        </ion-item>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <h5>${{item.sale}}</h5>\n\n       </ion-col>\n\n       <ion-col col-6>\n\n         <p><strong>{{item.name}}</strong></p>\n\n         <p>{{item.infoShow}}</p>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <button ion-button icon-only round color="light" (click)="goInfo(item)">\n\n           <ion-icon name="search"></ion-icon>\n\n         </button>\n\n       </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\show\show.html"*/,
    })
    // @NgModule({
    //   imports: [
    //     AgmCoreModule.forRoot({
    //       // apiKey: 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA'
    //       apiKey: 'AIzaSyCVVePnunpdeDdD9fUNbLwYALneSYy2NPg'  
    //     })
    //   ],
    //   schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
    // })
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_offer_service__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ })

});
//# sourceMappingURL=8.js.map