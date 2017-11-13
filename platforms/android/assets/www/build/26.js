webpackJsonp([26],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryPageModule = (function () {
    function GalleryPageModule() {
    }
    return GalleryPageModule;
}());
GalleryPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]),
        ],
    })
], GalleryPageModule);

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
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


// import { Validators, FormBuilder, FormGroup } from '@angular/forms';

//service 
// import { CameraService } from '../../services/camera.service';




/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryPage = (function () {
    function GalleryPage(navCtrl, navParams, formBuilder, camera, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.professionalsService = professionalsService;
        this.keyService = this.navParams.get('datos');
        console.log(this.keyService);
        this.UserActual = localStorage.getItem('verificacion');
        // this.loadService();
        this.getForm();
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryPage');
    };
    GalleryPage.prototype.goService = function () {
        //-guardar las fotos del servicio
        var DataGallery = { "fotoA": this.fotoA, "fotoB": this.fotoB, "fotoC": this.fotoC, "fotoD": this.fotoD, };
        this.professionalsService.setInfoServiceUserGallery(this.UserActual, DataGallery, this.keyService);
        this.navCtrl.pop();
    };
    GalleryPage.prototype.fotoGaleria = function (foto) {
        switch (foto) {
            case 'A':
                console.log('fotoA');
                this.camaraFotoA(this.UserActual + '/' + this.keyService + '/GalleryA');
                break;
            case 'B':
                console.log('fotoB');
                this.camaraFotoB(this.UserActual + '/' + this.keyService + '/GalleryB');
                break;
            case 'C':
                console.log('fotoC');
                this.camaraFotoC(this.UserActual + '/' + this.keyService + '/GalleryC');
                break;
            case 'D':
                console.log('fotoD');
                this.camaraFotoD(this.UserActual + '/' + this.keyService + '/GalleryD');
                break;
            default:
                break;
        }
    };
    GalleryPage.prototype.getForm = function () {
        var _this = this;
        this.gallery = this.formBuilder.group({
            fotoA: [''],
            fotoB: [''],
            fotoC: [''],
            fotoD: [''],
        });
        var GalleryServiceSubs = this.professionalsService.getGalleryService(this.UserActual, this.keyService).subscribe(function (GalleryB) {
            console.log(GalleryB);
            _this.fotoA = GalleryB.prof_galleryA;
            _this.fotoB = GalleryB.prof_galleryB;
            _this.fotoC = GalleryB.prof_galleryC;
            _this.fotoD = GalleryB.prof_galleryD;
        }).unsubscribe();
    };
    //-camara
    GalleryPage.prototype.camaraFotoA = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            // targetHeight: 100,
                            // targetWidth: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(file);
                        UploadTask_1 = picture.putString(image, 'data_url');
                        // alert(UploadTask);
                        // console.log(JSON.stringify(UploadTask));
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, function (error) { console.log(error); }, function () {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.fotoA = url;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GalleryPage.prototype.camaraFotoB = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, result, image, picture, UploadTask_2, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            // targetHeight: 100,
                            // targetWidth: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(file);
                        UploadTask_2 = picture.putString(image, 'data_url');
                        UploadTask_2.on(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, function (error) { console.log(error); }, function () {
                            var url = UploadTask_2.snapshot.downloadURL;
                            console.log(url);
                            _this.fotoB = url;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GalleryPage.prototype.camaraFotoC = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, result, image, picture, UploadTask_3, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            // targetHeight: 100,
                            // targetWidth: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(file);
                        UploadTask_3 = picture.putString(image, 'data_url');
                        UploadTask_3.on(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, function (error) { console.log(error); }, function () {
                            var url = UploadTask_3.snapshot.downloadURL;
                            console.log(url);
                            _this.fotoC = url;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.error(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GalleryPage.prototype.camaraFotoD = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var options, result, image, picture, UploadTask_4, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('clickCamara');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        options = {
                            quality: 60,
                            // targetHeight: 100,
                            // targetWidth: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE
                        };
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 2:
                        result = _a.sent();
                        image = 'data:image/jpeg;base64,' + result;
                        picture = Object(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"])().ref(file);
                        UploadTask_4 = picture.putString(image, 'data_url');
                        UploadTask_4.on(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, function (error) { console.log(error); }, function () {
                            var url = UploadTask_4.snapshot.downloadURL;
                            console.log(url);
                            _this.fotoD = url;
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return GalleryPage;
}());
GalleryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gallery',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\2-trabajo\ProveedorApp_JoBid\src\pages\gallery\gallery.html"*/'<!--\n\n  Generated template for the GalleryPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>gallery</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/img/LogoJoBid2.png">\n\n  <form [formGroup]="gallery">\n\n  <ion-list padding>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 1" [(ngModel)]="fotoA" formControlName="fotoA" name="fotoA" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'A\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 2" [(ngModel)]="fotoB" formControlName="fotoB" name="fotoB" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'B\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 3" [(ngModel)]="fotoC" formControlName="fotoC" name="fotoC" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'C\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="Photo 4" [(ngModel)]="fotoD" formControlName="fotoD" name="fotoD" />\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoGaleria(\'D\')"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n  </ion-list>\n\n</form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goService()" >\n\n            Add images\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\2-trabajo\ProveedorApp_JoBid\src\pages\gallery\gallery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */]])
], GalleryPage);

//# sourceMappingURL=gallery.js.map

/***/ })

});
//# sourceMappingURL=26.js.map