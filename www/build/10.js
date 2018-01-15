webpackJsonp([10],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPageModule", function() { return ShowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_core__ = __webpack_require__(303);
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

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_offer_service__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notificacion_service__ = __webpack_require__(301);
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



//-services




/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowPage = (function () {
    function ShowPage(navCtrl, navParams, offerService, userService, professionalsService, geo, platform, notificacionService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offerService = offerService;
        this.userService = userService;
        this.professionalsService = professionalsService;
        this.geo = geo;
        this.platform = platform;
        this.notificacionService = notificacionService;
        //-data
        this.ListService = [];
        this.ListContracts = [];
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.segundos = 5;
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
        // alert('hola');
        this.notify();
    }
    ShowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShowPage');
        // console.log(localStorage);
    };
    ShowPage.prototype.goInfo = function (item) {
        console.log('userSubs-US show');
        console.log('serviceSubs-US show');
        console.log('listOffer-US show');
        clearInterval(this.objNodeTimer);
        if (this.userSubs != undefined) {
            this.userSubs.unsubscribe();
        }
        if (this.serviceSubs != undefined) {
            this.serviceSubs.unsubscribe();
        }
        if (this.listOffer != undefined) {
            this.listOffer.unsubscribe();
        }
        var Data = { 'datos': item };
        this.navCtrl.push('ServiceInfoPage', Data);
    };
    ShowPage.prototype.notify = function () {
        // console.log("Toggled: ");
        console.log("Toggled: " + this.StatusProvider);
        // alert("Toggled: "+ this.StatusProvider);
        if (this.StatusProvider == false) {
            this.labelToogle = "Offline";
            clearInterval(this.objNodeTimer);
            // console.log(this.objNodeTimer);
            // if (this.objNodeTimer != undefined) {
            //   clearInterval(this.objNodeTimer.data.handleId);
            //   console.log(this.objNodeTimer.data.handleId);
            // }
        }
        else {
            this.labelToogle = "Online";
            this.showServices();
            // this.startTimer();
            // this.showServices();
            // this.showServices();
        }
    };
    //--- timer
    ShowPage.prototype.startTimer = function () {
        var _this = this;
        this.objNodeTimer = setInterval(function () { _this.timer(); }, 1000);
    };
    //cada 5 segundos reiniamos la consulta de offertas
    ShowPage.prototype.timer = function () {
        // console.log(this.segundos);
        if (this.segundos == 1) {
            console.log(this.objNodeTimer);
            this.reiniciarBusquedaOffer();
            this.segundos = 5;
        }
        else {
            if (--this.segundos < 0) {
            }
            ;
        }
    };
    ShowPage.prototype.reiniciarBusquedaOffer = function () {
        console.log(this.objNodeTimer);
        // console.log(this.listOffer);
        // console.log(this.serviceSubs);
        // console.log(this.userSubs);
        if (this.listOffer != undefined) {
            // console.log('listOffer-US show');
            this.listOffer.unsubscribe();
        }
        if (this.serviceSubs != undefined) {
            // console.log('serviceSubs-US show');
            this.serviceSubs.unsubscribe();
        }
        if (this.userSubs != undefined) {
            // console.log('userSubs-US show');
            this.userSubs.unsubscribe();
        }
        console.info('busqueda de ofertas');
        this.showServices();
    };
    ShowPage.prototype.showServices = function () {
        var _this = this;
        // alert('showServices');
        this.listOffer = this.offerService.getOfferNew().subscribe(function (list) {
            // console.log(list);
            if (list != undefined) {
                // console.log('listOffer-S show');
                _this.getServiceProvider(list);
                _this.listOffer.unsubscribe();
            }
        });
    };
    ShowPage.prototype.getServiceProvider = function (BDListOffer) {
        var _this = this;
        // alert();
        console.log(this.UserActual);
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var imagen, keySP, _loop_1, this_1, keys;
            return __generator(this, function (_a) {
                this.ListService = [];
                for (keySP in BDListServicesProvider) {
                    _loop_1 = function (keys) {
                        // console.log('bdoff-star:'+Number(BDListOffer[keys].Star));
                        // console.log('pro-star: '+ Number(stars));
                        if (Math.round(Number(stars)) >= Math.round(Number(BDListOffer[keys].Star))) {
                            console.info('star ok');
                            // alert('star ok');
                            // console.log(BDListOffer[keys]);
                            // console.log('BDListOffer.categoria: '+BDListOffer[keys].Clasificacion.categoria);
                            // console.log(BDListOffer[keys].Clasificacion.distancia);
                            if (BDListOffer[keys].UserLocacion) {
                                // console.log(BDListOffer[keys].UserLocacion.latitud);
                                // console.log(BDListOffer[keys].UserLocacion.longitud);
                                var distanceKilo = this_1.getDistanceKilometros(Number(this_1.lat), Number(this_1.lng), Number(BDListOffer[keys].UserLocacion.latitud), Number(BDListOffer[keys].UserLocacion.longitud));
                                console.log(distanceKilo);
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
                                    // alert('categoria y  distancia ok');
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
                                        // alert('certificado y seguro ok');
                                        // console.log(this.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia,BDListOffer[keys].Clasificacion.experiencia));
                                        if (this_1.getNumeroExperienciOffer(BDListOffer[keys].Clasificacion.experiencia, BDListServicesProvider[keySP]['serv_detail']['serv_experiencia']) == true) {
                                            console.info('Experience ok');
                                            // alert('Experience ok');
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
                                                _this.notificacion();
                                                // console.log(user);
                                                // console.log(user['user_picture']);
                                                // console.log('-'+user['user_picture']+'-');
                                                // console.log('-'+user['prof_star']+'-');
                                                // if(user['user_picture']){
                                                var serviceImage = '';
                                                if (BDListOffer[keys].Clasificacion.informacion.foto != undefined && BDListOffer[keys].Clasificacion.informacion.foto != '') {
                                                    serviceImage = BDListOffer[keys].Clasificacion.informacion.foto;
                                                    // console.log(serviceImage);
                                                }
                                                if (user['user_picture'] == "" || user['user_picture'] == undefined || user['user_picture'] == null) {
                                                    imagen = _this.imgDefault;
                                                }
                                                else {
                                                    imagen = user['user_picture'];
                                                }
                                                // console.log(imagen);
                                                // console.log(this.ListService.findIndex( keysOffer => { keysOffer.idOff == key;}));
                                                // console.log(this.ListService);
                                                var ListaServicios = _this.ListService;
                                                // console.log(ListaServicios);
                                                // let idKeyOffer = ListaServicios.findIndex( keysOffer => { 
                                                //   keysOffer.idOff == key; 
                                                //   console.log(keysOffer); 
                                                //   console.log(keysOffer.idOff); 
                                                //   console.log(key); 
                                                // });
                                                var idKeyOffer = ListaServicios.findIndex(function (keysOffer) {
                                                    return keysOffer.idOff == key_1;
                                                });
                                                // console.log(idKeyOffer);
                                                if (idKeyOffer >= 0) {
                                                    // console.log('if 1');
                                                    _this.ListService[idKeyOffer] = { "idOff": key_1, "name": user['user_username'], "img": imagen, "sale": InfmaxOffer_1, "infoShow": InfshortMoreInformacion_1, "info": InfmoreInformacion_1, "imgOffer": serviceImage, "idUser": user['$key'] };
                                                }
                                                else {
                                                    // console.log('if -1');
                                                    _this.ListService.push({ "idOff": key_1, "name": user['user_username'], "img": imagen, "sale": InfmaxOffer_1, "infoShow": InfshortMoreInformacion_1, "info": InfmoreInformacion_1, "imgOffer": serviceImage, "idUser": user['$key'] });
                                                }
                                                // console.log(this.ListService);
                                                // }
                                            });
                                            // this.ListService=list;
                                        }
                                        else {
                                            console.info('Experience no');
                                            // alert('star ok');
                                        }
                                    }
                                    else {
                                        console.info('certificado y seguro no');
                                        // alert('star ok');
                                    }
                                }
                                else {
                                    console.info('categoria y  distancia no');
                                    // alert('categoria y  distancia no');
                                }
                            }
                        }
                        else {
                            console.info('star no');
                        }
                    };
                    this_1 = this;
                    // console.log(BDListServicesProvider[keySP]);
                    // console.log('BDListServicesProvider[keySP]serv_service:'+BDListServicesProvider[keySP]['serv_service']);
                    // console.log('p-BDList.serv_subService: '+BDListServicesProvider[keySP]['serv_subService']);
                    for (keys in BDListOffer) {
                        _loop_1(keys);
                    }
                }
                return [2 /*return*/];
            });
        });
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
    //-notification
    ShowPage.prototype.notificacion = function () {
        this.notificacionService.mostrar('You have a new job offer', 2);
    };
    return ShowPage;
}());
ShowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-show',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\show\show.html"*/'<!--\n\n  Generated template for the ShowPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n  <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>JoBid</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item padding class="statusPage">\n\n    \n\n      <ion-label>{{labelToogle}}</ion-label>\n\n      <ion-toggle [(ngModel)]="StatusProvider" (click)="notify()"  (ionChange)="notify();"color="danger"></ion-toggle>\n\n  </ion-item>\n\n  <!-- <div class="mapa">\n\n    <agm-map [latitude]="51.678418" [longitude]="7.809007" [zoom]="14">\n\n      <agm-marker style="z-index:9;"\n\n        [latitude]="Userlat"\n\n        [longitude]="Userlng" >\n\n      </agm-marker>\n\n    </agm-map>\n\n  </div> -->\n\n  \n\n  <div class="barraRoja" *ngIf="StatusProvider">\n\n      <h4>Select a service and start the bid</h4>\n\n  </div>\n\n  <!-- <button ion-button (click)="clickCamara()">camara</button> -->\n\n  <ion-grid class="body" *ngIf="StatusProvider">\n\n    <!-- <ion-row >\n\n      <ion-col col-2>\n\n       <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="{{imgDefault}}">\n\n        </ion-avatar>\n\n       </ion-item>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <h5>${{offer}}</h5>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <p><strong>{{nameUser}}</strong></p>\n\n        <p>{{Description}}</p>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n        <button ion-button icon-only round color="light" (click)="goInfo()">\n\n          <ion-icon name="search"></ion-icon>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row> -->\n\n    <ion-row *ngFor="let item of ListService">\n\n      <ion-col col-2>\n\n        <ion-item>\n\n         <ion-avatar item-start>\n\n           <img src="{{item.img}}">\n\n         </ion-avatar>\n\n        </ion-item>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <h5>${{item.sale}}</h5>\n\n       </ion-col>\n\n       <ion-col col-6>\n\n         <p><strong>{{item.name}}</strong></p>\n\n         <p>{{item.infoShow}}</p>\n\n       </ion-col>\n\n       <ion-col col-2>\n\n         <button ion-button icon-only round color="light" (click)="goInfo(item)">\n\n           <ion-icon name="search"></ion-icon>\n\n         </button>\n\n       </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\show\show.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__services_offer_service__["a" /* OfferService */], __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__["a" /* ProfessionalsService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_6__services_notificacion_service__["a" /* NotificacionService */]])
], ShowPage);

//# sourceMappingURL=show.js.map

/***/ })

});
//# sourceMappingURL=10.js.map