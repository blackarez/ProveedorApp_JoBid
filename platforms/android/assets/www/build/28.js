webpackJsonp([28],{

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentPageModule", function() { return DocumentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentPageModule = (function () {
    function DocumentPageModule() {
    }
    return DocumentPageModule;
}());
DocumentPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__document__["a" /* DocumentPage */]),
        ],
    })
], DocumentPageModule);

//# sourceMappingURL=document.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentPage; });
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







/**
 * Generated class for the DocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DocumentPage = (function () {
    function DocumentPage(navCtrl, navParams, formBuilder, camera, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.professionalsService = professionalsService;
        this.disDocumentImg = true;
        this.disLicenciaImg = true;
        this.loadView();
        this.getForm();
    }
    DocumentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DocumentPage');
    };
    DocumentPage.prototype.goTerms = function () {
        this.professionalsService.setDocument(this.UserActual, this.documentFoto, this.licenciaFoto);
        this.navCtrl.push('TermsPage');
    };
    DocumentPage.prototype.loadView = function () {
        this.UserActual = localStorage.getItem('verificacion');
    };
    DocumentPage.prototype.getForm = function () {
        this.documentos = this.formBuilder.group({
            documentFoto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            licenciaFoto: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    DocumentPage.prototype.fotoDocumento = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.UserActual + '/Document';
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
                        UploadTask_1.on(__WEBPACK_IMPORTED_MODULE_6_firebase_app__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) { }, function (error) { console.log(error); }, function () {
                            var url = UploadTask_1.snapshot.downloadURL;
                            console.log(url);
                            _this.documentFoto = url;
                            _this.disDocumentImg = false;
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
    DocumentPage.prototype.fotoLicencia = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var file, options, result, image, picture, UploadTask_2, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.UserActual + '/Licencia';
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
                            _this.licenciaFoto = url;
                            _this.disLicenciaImg = false;
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
    return DocumentPage;
}());
DocumentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-document',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\document\document.html"*/'<!--\n\n  Generated template for the DocumentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-title>Documents</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="assets/img/LogoJoBid2.png">\n\n  <form [formGroup]="documentos">\n\n  <ion-list padding>\n\n\n\n    <p><strong>I took pictures of the requested documents:</strong></p>\n\n    <ion-item>\n\n      <p>Photo of your Identification Document or Social Security.</p>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="" [(ngModel)]="documentFoto" formControlName="documentFoto" name="documentFoto" />\n\n                <img src="{{documentFoto}}" [hidden]="disDocumentImg" >\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoDocumento()"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    <ion-item>\n\n      <p>Photo of your driver\'s license or work permit.</p>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-10>\n\n            <ion-list>\n\n              <ion-item>\n\n                <input type="text" placeholder="" [(ngModel)]="licenciaFoto" formControlName="licenciaFoto" name="licenciaFoto" />\n\n                <img src="{{licenciaFoto}}" [hidden]="disLicenciaImg" >\n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-col>\n\n          <ion-col col-2 id="btn-camera">\n\n              <button ion-button color="danger" outline (click)="fotoLicencia()"><ion-icon name="camera"></ion-icon></button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item>\n\n    \n\n  </ion-list>\n\n</form>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n      <div class="btnBottom">\n\n        <button ion-button color="danger" block (click)="goTerms()" [disabled]="!documentos.valid">\n\n            Continue\n\n            <ion-icon name="arrow-dropright"></ion-icon> \n\n        </button> \n\n      </div>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\gitHub\ProveedorApp_JoBid\src\pages\document\document.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__services_professionals_service__["a" /* ProfessionalsService */]])
], DocumentPage);

//# sourceMappingURL=document.js.map

/***/ })

});
//# sourceMappingURL=28.js.map