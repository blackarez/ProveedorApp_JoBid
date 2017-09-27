webpackJsonp([12],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderInfoBPageModule", function() { return ProviderInfoBPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__provider_info_b__ = __webpack_require__(568);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProviderInfoBPageModule = (function () {
    function ProviderInfoBPageModule() {
    }
    return ProviderInfoBPageModule;
}());
ProviderInfoBPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__provider_info_b__["a" /* ProviderInfoBPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__provider_info_b__["a" /* ProviderInfoBPage */]),
        ],
    })
], ProviderInfoBPageModule);

//# sourceMappingURL=provider-info-b.module.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderInfoBPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__ = __webpack_require__(138);
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
 * Generated class for the ProviderInfoBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProviderInfoBPage = (function () {
    function ProviderInfoBPage(navCtrl, navParams, professionalsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.professionalsService = professionalsService;
        //-data
        this.DataService = [];
        this.codeAreaList = [];
        this.DataService = this.navParams.get('datos');
        console.log(this.DataService);
        console.log(localStorage);
        this.UserActual = localStorage.getItem('verificacion');
        console.log(this.UserActual);
        // this.UserActual = 'prof_1506011271575';
        // this.UserActual = 'prof_1506004758918';
        // console.log(this.UserActual);
        // this.codeAreaDefi();
    }
    ProviderInfoBPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProviderInfoBPage');
    };
    ProviderInfoBPage.prototype.goDocument = function () {
        this.saveInfoService();
        this.navCtrl.push('PaymentMethodsPage');
    };
    ProviderInfoBPage.prototype.saveInfoService = function () {
        var DataServiceInfo = { "prof_textPersonal": this.textPersonal, "prof_Phone": this.Phone, "prof_Mobile": this.Mobile, "prof_experiencia": this.experiencia, "prof_moreInformation": this.moreInformation };
        this.DataService["prof_detail"] = DataServiceInfo;
        console.log(this.DataService);
        this.professionalsService.setInfoServiceUser(this.UserActual, this.DataService);
    };
    ProviderInfoBPage.prototype.codeAreaDefi = function () {
        this.codeAreaList = [
            { code: "201", estado: "New Jersey" },
            { code: "202", estado: "District of Columbia" },
            { code: "203", estado: "Connecticut" },
            { code: "204", estado: "Manitoba" },
            { code: "205", estado: "Alabama" },
            { code: "206", estado: "Washington" },
            { code: "207", estado: "Maine" },
            { code: "208", estado: "Idaho" },
            { code: "209", estado: "California" },
            { code: "210", estado: "Texas" },
            { code: "212", estado: "New York" },
            { code: "213", estado: "California" },
            { code: "214", estado: "Texas" },
            { code: "215", estado: "Pennsylvania" },
            { code: "216", estado: "Ohio" },
            { code: "217", estado: "Illinois" },
            { code: "218", estado: "Minnesota" },
            { code: "219", estado: "Indiana" },
            { code: "224", estado: "Illinois" },
            { code: "225", estado: "Louisiana" },
            { code: "228", estado: "Mississippi" },
            { code: "229", estado: "Georgia" },
            { code: "231", estado: "Michigan" },
            { code: "234", estado: "Ohio" },
            { code: "239", estado: "Florida" },
            { code: "240", estado: "Maryland" },
            { code: "242", estado: "Bahamas" },
            { code: "246", estado: "Barbados" },
            { code: "248", estado: "Michigan" },
            { code: "250", estado: "British Columbia" },
            { code: "251", estado: "Alabama" },
            { code: "252", estado: "North Carolina" },
            { code: "253", estado: "Washington" },
            { code: "254", estado: "Texas" },
            { code: "256", estado: "Alabama" },
            { code: "260", estado: "Indiana" },
            { code: "262", estado: "Wisconsin" },
            { code: "264", estado: "Anguilla" },
            { code: "267", estado: "Pennsylvania" },
            { code: "268", estado: "Antigua/Barbuda" },
            { code: "269", estado: "Michigan" },
            { code: "270", estado: "Kentucky" },
            { code: "276", estado: "Virginia" },
            { code: "281", estado: "Texas" },
            { code: "284", estado: "British Virgin Islands" },
            { code: "289", estado: "Ontario" },
            { code: "301", estado: "Maryland" },
            { code: "302", estado: "Delaware" },
            { code: "303", estado: "Colorado" },
            { code: "304", estado: "West Virginia" },
            { code: "305", estado: "Florida" },
            { code: "306", estado: "Saskatchewan" },
            { code: "307", estado: "Wyoming" },
            { code: "308", estado: "Nebraska" },
            { code: "309", estado: "Illinois" },
            { code: "310", estado: "California" },
            { code: "312", estado: "Illinois" },
            { code: "313", estado: "Michigan" },
            { code: "314", estado: "Missouri" },
            { code: "315", estado: "New York" },
            { code: "316", estado: "Kansas" },
            { code: "317", estado: "Indiana" },
            { code: "318", estado: "Louisiana" },
            { code: "319", estado: "Iowa" },
            { code: "320", estado: "Minnesota" },
            { code: "321", estado: "Florida" },
            { code: "323", estado: "California" },
            { code: "325", estado: "Texas" },
            { code: "330", estado: "Ohio" },
            { code: "334", estado: "Alabama" },
            { code: "336", estado: "North Carolina" },
            { code: "337", estado: "Louisiana" },
            { code: "339", estado: "Massachusetts" },
            { code: "340", estado: "US Virgin Islands" },
            { code: "345", estado: "Cayman Islands" },
            { code: "347", estado: "New York" },
            { code: "351", estado: "Massachusetts" },
            { code: "352", estado: "Florida" },
            { code: "360", estado: "Washington" },
            { code: "361", estado: "Texas" },
            { code: "386", estado: "Florida" },
            { code: "401", estado: "Rhode Island" },
            { code: "402", estado: "Nebraska" },
            { code: "403", estado: "Alberta" },
            { code: "404", estado: "Georgia" },
            { code: "405", estado: "Oklahoma" },
            { code: "406", estado: "Montana" },
            { code: "407", estado: "Florida" },
            { code: "408", estado: "California" },
            { code: "409", estado: "Texas" },
            { code: "410", estado: "Maryland" },
            { code: "412", estado: "Pennsylvania" },
            { code: "413", estado: "Massachusetts" },
            { code: "414", estado: "Wisconsin" },
            { code: "415", estado: "California" },
            { code: "416", estado: "Ontario" },
            { code: "417", estado: "Missouri" },
            { code: "418", estado: "Quebec" },
            { code: "419", estado: "Ohio" },
            { code: "423", estado: "Tennessee" },
            { code: "425", estado: "Washington" },
            { code: "430", estado: "Texas" },
            { code: "432", estado: "Texas" },
            { code: "434", estado: "Virginia" },
            { code: "435", estado: "Utah" },
            { code: "440", estado: "Ohio" },
            { code: "441", estado: "Bermuda" },
            { code: "443", estado: "Maryland" },
            { code: "450", estado: "Quebec" },
            { code: "456", estado: "NANP area" },
            { code: "469", estado: "Texas" },
            { code: "473", estado: "Grenada" },
            { code: "478", estado: "Georgia" },
            { code: "479", estado: "Arkansas" },
            { code: "480", estado: "Arizona" },
            { code: "484", estado: "Pennsylvania" },
            { code: "501", estado: "Arkansas" },
            { code: "502", estado: "Kentucky" },
            { code: "503", estado: "Oregon" },
            { code: "504", estado: "Louisiana" },
            { code: "505", estado: "New Mexico" },
            { code: "506", estado: "New Brunswick" },
            { code: "507", estado: "Minnesota" },
            { code: "508", estado: "Massachusetts" },
            { code: "509", estado: "Washington" },
            { code: "510", estado: "California" },
            { code: "512", estado: "Texas" },
            { code: "513", estado: "Ohio" },
            { code: "514", estado: "Quebec" },
            { code: "515", estado: "Iowa" },
            { code: "516", estado: "New York" },
            { code: "517", estado: "Michigan" },
            { code: "518", estado: "New York" },
            { code: "519", estado: "Ontario" },
            { code: "520", estado: "Arizona" },
            { code: "530", estado: "California" },
            { code: "540", estado: "Virginia" },
            { code: "541", estado: "Oregon" },
            { code: "551", estado: "New Jersey" },
            { code: "559", estado: "California" },
            { code: "561", estado: "Florida" },
            { code: "562", estado: "California" },
            { code: "563", estado: "Iowa" },
            { code: "567", estado: "Ohio" },
            { code: "570", estado: "Pennsylvania" },
            { code: "571", estado: "Virginia" },
            { code: "573", estado: "Missouri" },
            { code: "574", estado: "Indiana" },
            { code: "580", estado: "Oklahoma" },
            { code: "585", estado: "New York" },
            { code: "586", estado: "Michigan" },
            { code: "601", estado: "Mississippi" },
            { code: "602", estado: "Arizona" },
            { code: "603", estado: "New Hampshire" },
            { code: "604", estado: "British Columbia" },
            { code: "605", estado: "South Dakota" },
            { code: "606", estado: "Kentucky" },
            { code: "607", estado: "New York" },
            { code: "608", estado: "Wisconsin" },
            { code: "609", estado: "New Jersey" },
            { code: "610", estado: "Pennsylvania" },
            { code: "612", estado: "Minnesota" },
            { code: "613", estado: "Ontario" },
            { code: "614", estado: "Ohio" },
            { code: "615", estado: "Tennessee" },
            { code: "616", estado: "Michigan" },
            { code: "617", estado: "Massachusetts" },
            { code: "618", estado: "Illinois" },
            { code: "619", estado: "California" },
            { code: "620", estado: "Kansas" },
            { code: "623", estado: "Arizona" },
            { code: "626", estado: "California" },
            { code: "630", estado: "Illinois" },
            { code: "631", estado: "New York" },
            { code: "636", estado: "Missouri" },
            { code: "641", estado: "Iowa" },
            { code: "646", estado: "New York" },
            { code: "647", estado: "Ontario" },
            { code: "649", estado: "Turks & Caicos Islands" },
            { code: "650", estado: "California" },
            { code: "651", estado: "Minnesota" },
            { code: "660", estado: "Missouri" },
            { code: "661", estado: "California" },
            { code: "662", estado: "Mississippi" },
            { code: "664", estado: "Montserrat" },
            { code: "670", estado: "CNMI" },
            { code: "671", estado: "Guam" },
            { code: "678", estado: "Georgia" },
            { code: "682", estado: "Texas" },
            { code: "701", estado: "North Dakota" },
            { code: "702", estado: "Nevada" },
            { code: "703", estado: "Virginia" },
            { code: "704", estado: "North Carolina" },
            { code: "705", estado: "Ontario" },
            { code: "706", estado: "Georgia" },
            { code: "707", estado: "California" },
            { code: "708", estado: "Illinois" },
            { code: "709", estado: "Newfoundland" },
            { code: "710", estado: "US" },
            { code: "712", estado: "Iowa" },
            { code: "713", estado: "Texas" },
            { code: "714", estado: "California" },
            { code: "715", estado: "Wisconsin" },
            { code: "716", estado: "New York" },
            { code: "717", estado: "Pennsylvania" },
            { code: "718", estado: "New York" },
            { code: "719", estado: "Colorado" },
            { code: "720", estado: "Colorado" },
            { code: "724", estado: "Pennsylvania" },
            { code: "727", estado: "Florida" },
            { code: "731", estado: "Tennessee" },
            { code: "732", estado: "New Jersey" },
            { code: "734", estado: "Michigan" },
            { code: "740", estado: "Ohio" },
            { code: "754", estado: "Florida" },
            { code: "757", estado: "Virginia" },
            { code: "758", estado: "St. Lucia" },
            { code: "760", estado: "California" },
            { code: "763", estado: "Minnesota" },
            { code: "765", estado: "Indiana" },
            { code: "767", estado: "Dominica" },
            { code: "770", estado: "Georgia" },
            { code: "772", estado: "Florida" },
            { code: "773", estado: "Illinois" },
            { code: "774", estado: "Massachusetts" },
            { code: "775", estado: "Nevada" },
            { code: "778", estado: "British Columbia" },
            { code: "780", estado: "Alberta" },
            { code: "781", estado: "Massachusetts" },
            { code: "784", estado: "St. Vincent & Grenadines" },
            { code: "785", estado: "Kansas" },
            { code: "786", estado: "Florida" },
            { code: "787", estado: "Puerto Rico" },
            { code: "801", estado: "Utah" },
            { code: "802", estado: "Vermont" },
            { code: "803", estado: "South Carolina" },
            { code: "804", estado: "Virginia" },
            { code: "805", estado: "California" },
            { code: "806", estado: "Texas" },
            { code: "807", estado: "Ontario" },
            { code: "808", estado: "Hawaii" },
            { code: "809", estado: "Dominican Republic" },
            { code: "810", estado: "Michigan" },
            { code: "812", estado: "Indiana" },
            { code: "813", estado: "Florida" },
            { code: "814", estado: "Pennsylvania" },
            { code: "815", estado: "Illinois" },
            { code: "816", estado: "Missouri" },
            { code: "817", estado: "Texas" },
            { code: "818", estado: "California" },
            { code: "819", estado: "Quebec" },
            { code: "828", estado: "North Carolina" },
            { code: "830", estado: "Texas" },
            { code: "831", estado: "California" },
            { code: "832", estado: "Texas" },
            { code: "843", estado: "South Carolina" },
            { code: "845", estado: "New York" },
            { code: "847", estado: "Illinois" },
            { code: "848", estado: "New Jersey" },
            { code: "850", estado: "Florida" },
            { code: "856", estado: "New Jersey" },
            { code: "857", estado: "Massachusetts" },
            { code: "858", estado: "California" },
            { code: "859", estado: "Kentucky" },
            { code: "860", estado: "Connecticut" },
            { code: "862", estado: "New Jersey" },
            { code: "863", estado: "Florida" },
            { code: "864", estado: "South Carolina" },
            { code: "865", estado: "Tennessee" },
            { code: "867", estado: "Yukon, NW Terr., Nunavut" },
            { code: "868", estado: "Trinidad & Tobago" },
            { code: "869", estado: "St. Kitts & Nevis" },
            { code: "870", estado: "Arkansas" },
            { code: "876", estado: "Jamaica" },
            { code: "878", estado: "Pennsylvania" },
            { code: "880", estado: "NANP area" },
            { code: "881", estado: "NANP area" },
            { code: "882", estado: "NANP area" },
            { code: "901", estado: "Tennessee" },
            { code: "902", estado: "Nova Scotia" },
            { code: "903", estado: "Texas" },
            { code: "904", estado: "Florida" },
            { code: "905", estado: "Ontario" },
            { code: "906", estado: "Michigan" },
            { code: "907", estado: "Alaska" },
            { code: "908", estado: "New Jersey" },
            { code: "909", estado: "California" },
            { code: "910", estado: "North Carolina" },
            { code: "912", estado: "Georgia" },
            { code: "913", estado: "Kansas" },
            { code: "914", estado: "New York" },
            { code: "915", estado: "Texas" },
            { code: "916", estado: "California" },
            { code: "917", estado: "New York" },
            { code: "918", estado: "Oklahoma" },
            { code: "919", estado: "North Carolina" },
            { code: "920", estado: "Wisconsin" },
            { code: "925", estado: "California" },
            { code: "928", estado: "Arizona" },
            { code: "931", estado: "Tennessee" },
            { code: "936", estado: "Texas" },
            { code: "937", estado: "Ohio" },
            { code: "939", estado: "Puerto Rico" },
            { code: "940", estado: "Texas" },
            { code: "941", estado: "Florida" },
            { code: "947", estado: "Michigan" },
            { code: "949", estado: "California" },
            { code: "952", estado: "Minnesota" },
            { code: "954", estado: "Florida" },
            { code: "956", estado: "Texas" },
            { code: "970", estado: "Colorado" },
            { code: "971", estado: "Oregon" },
            { code: "972", estado: "Texas" },
            { code: "973", estado: "New Jersey" },
            { code: "978", estado: "Massachusetts" },
            { code: "979", estado: "Texas" },
            { code: "980", estado: "North Carolina" },
            { code: "985", estado: "Louisiana" },
            { code: "989", estado: "Michigan" },
        ];
    };
    return ProviderInfoBPage;
}());
ProviderInfoBPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-provider-info-b',template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\provider-info-b\provider-info-b.html"*/'<!--\n\n  Generated template for the ProviderInfoBPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Personal record</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <ion-content padding>\n\n    <ion-list>\n\n      <ion-item>\n\n        <p><strong>Personal record:</strong></p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" [(ngModel)]="textPersonal" name="textPersonal"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Phone" class="mitad" [(ngModel)]="Phone" name="Phone"></ion-input>\n\n        <ion-input type="text" placeholder="Mobile" class="mitad" [(ngModel)]="Mobile" name="Mobile"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label class="mitad">Experience time</ion-label>\n\n        <ion-select  class="mitad"  [(ngModel)]="experiencia" name="experiencia" placeholder="Experience"> <!--[(ngModel)]="gaming"-->\n\n          <ion-option value="1Y" >1 Year</ion-option>\n\n          <ion-option value="2Y" >2 Year</ion-option>\n\n          <ion-option value="3Y" >3 Year</ion-option>\n\n          <ion-option value="3YM" >&gt; 3 Year</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-textarea type="text" placeholder="Short description of your business" [(ngModel)]="moreInformation" name="moreInformation"></ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n    <ion-toolbar>\n\n        <div class="btnBottom">\n\n          <button ion-button (click)="goDocument()">\n\n              Continue\n\n              <ion-icon name="arrow-dropright"></ion-icon> \n\n          </button> \n\n        </div>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  '/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\pages\provider-info-b\provider-info-b.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_professionals_service__["a" /* ProfessionalsService */]])
], ProviderInfoBPage);

//# sourceMappingURL=provider-info-b.js.map

/***/ })

});
//# sourceMappingURL=12.js.map