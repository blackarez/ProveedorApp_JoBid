webpackJsonp([24],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { EncriptyService } from './encripty.service';
var ProfessionalsService = (function () {
    function ProfessionalsService(afDB) {
        this.afDB = afDB;
    }
    //-get
    ProfessionalsService.prototype.getProfessionals = function () {
        // console.log(this.afDB.list('/professionals/'));
        return this.afDB.list('/professionals/');
    };
    ProfessionalsService.prototype.getProfessional = function (id) {
        console.log('getProfessionalId');
        // console.log(id);
        return this.afDB.object('/professionals/' + id);
    };
    ProfessionalsService.prototype.getProfessionalExists = function (email) {
        return this.afDB.list('/professionals', {
            query: {
                orderByChild: 'prof_email',
                equalTo: email
            }
        });
    };
    ProfessionalsService.prototype.getUserLoginPwd = function (pwd) {
        // let password = this.encriptyService.GenerateEncripty(pwd);
        var password = pwd;
        var listBD = this.afDB.list('/professionals', {
            query: {
                orderByChild: 'prof_password',
                equalTo: password
            }
        });
        // console.log(listBD);
        // console.log(JSON.stringify( listBD) );
        return listBD;
    };
    ProfessionalsService.prototype.getContract = function (keyProvider) {
        console.info('get contracts');
        return this.afDB.object('/Contracts/' + keyProvider);
    };
    ProfessionalsService.prototype.getServicesProfessional = function (keyProvider) {
        return this.afDB.object('/professionals/' + keyProvider + '/Service/');
    };
    //-new
    ProfessionalsService.prototype.newUser = function (userData, keyNew) {
        //userData = {"username":"","password":"","email":"","name":"","lastName":"","date":"","socialSecurity":"","zipcode":"","state":"","picture":"","verificacion":"","pais":"","direccion":"","tel":"","star":""};
        if (userData === void 0) { userData = []; }
        var key = undefined;
        //default star
        var star = '3';
        // console.log('key:'+key);
        // console.log('keyNew:'+keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyUser = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyUser = "prof_" + (key);
        }
        if (userData['star'] != star) {
            star = userData['star'];
        }
        console.log('userKey' + keyUser);
        //console.log(newKeyAddres);
        var username = userData['username'];
        //let password = this.encriptyService.GenerateEncripty(userData["password"]);
        var password = userData['password'];
        var email = userData['email'];
        var name = userData['name'];
        var lastName = userData['lastName'];
        var date = userData['date'];
        var socialSecurity = userData['socialSecurity'];
        var zipcode = userData['zipcode'];
        var state = userData['state'];
        var picture = userData['picture'];
        // let verificacion = userData['verificacion'];
        var pais = userData['pais'];
        var direccion = userData['direccion'];
        var tel = userData['tel'];
        //console.log(userData);
        if ((userData['username']) && (userData['password']) && (userData['email'])) {
            if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
                this.afDB.object('/professionals/' + keyUser).set({ "prof_username": username, "prof_password": password, "prof_email": email, "prof_name": name, "prof_lastName": lastName, "prof_date": date, "prof_socialSecurity": socialSecurity, "prof_zipcode": zipcode, "prof_state": state, "prof_picture": picture, "prof_pais": pais, "prof_direccion": direccion, "prof_tel": tel, "prof_star": star });
                console.info('user create profession');
            }
        }
    };
    ProfessionalsService.prototype.newContract = function (keyProvider, keyOffer, objContract) {
        console.log(objContract);
        // this.afDB.object('/professionals/'+keyProvider+'/Contracts/'+keyOffer).set(objContract).catch(error => {console.log('error professionals NewCont'); console.log(error);console.log(JSON.stringify(error));});
        this.afDB.object('/Contracts/' + keyProvider + '/' + keyOffer).set(objContract).catch(function (error) { console.log('error professionals NewCont'); console.log(error); console.log(JSON.stringify(error)); });
        console.info('professionals new contract');
    };
    //-set
    ProfessionalsService.prototype.setInfoServiceUser = function (KeyProveedor, serviceData, KeyService) {
        var keyS;
        if (KeyService && KeyService != null && KeyService != undefined) {
            keyS = KeyService;
        }
        else {
            var Key = new Date().getTime();
            keyS = "Serv_" + (Key);
        }
        console.log(serviceData);
        this.afDB.object('/professionals/' + KeyProveedor + '/Service/' + keyS + '/').set(serviceData).catch(function (error) { console.log('error professionals setInf'); console.log(error); console.log(JSON.stringify(error)); });
        console.info('professionals info service create or set');
    };
    ProfessionalsService.prototype.setContractStatus = function (keyProvider, keyOffer, status) {
        this.afDB.object('/Contracts/' + keyProvider + '/' + keyOffer + '/status').set(status).catch(function (error) { console.log('error professionals NewCont'); console.log(error); console.log(JSON.stringify(error)); });
        console.info('professionals ContractStatus create or set');
    };
    //-drop
    ProfessionalsService.prototype.dropService = function (KeyProveedor, keyService) {
        this.afDB.object('/professionals/' + KeyProveedor + '/Service/' + keyService + '/').remove();
    };
    return ProfessionalsService;
}());
ProfessionalsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], ProfessionalsService);

//# sourceMappingURL=professionals.service.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-payment-method/add-payment-method.module": [
		405,
		1
	],
	"../pages/add-service/add-service.module": [
		406,
		23
	],
	"../pages/edit-provider/edit-provider.module": [
		407,
		3
	],
	"../pages/edit-user/edit-user.module": [
		408,
		22
	],
	"../pages/home/home.module": [
		409,
		21
	],
	"../pages/login/login.module": [
		410,
		20
	],
	"../pages/my-service-info/my-service-info.module": [
		411,
		19
	],
	"../pages/my-services/my-services.module": [
		412,
		18
	],
	"../pages/payment-methods/payment-methods.module": [
		413,
		0
	],
	"../pages/payments/payments.module": [
		414,
		17
	],
	"../pages/policies/policies.module": [
		415,
		16
	],
	"../pages/provider-info-a/provider-info-a.module": [
		416,
		15
	],
	"../pages/provider-info-b/provider-info-b.module": [
		417,
		14
	],
	"../pages/service-info-a/service-info-a.module": [
		419,
		13
	],
	"../pages/service-info-b/service-info-b.module": [
		420,
		12
	],
	"../pages/service-info/service-info.module": [
		418,
		11
	],
	"../pages/service-job/service-job.module": [
		421,
		10
	],
	"../pages/service-new/service-new.module": [
		422,
		9
	],
	"../pages/service-ok/service-ok.module": [
		423,
		8
	],
	"../pages/service-sale/service-sale.module": [
		424,
		7
	],
	"../pages/service-vote/service-vote.module": [
		425,
		6
	],
	"../pages/service-win/service-win.module": [
		426,
		5
	],
	"../pages/show/show.module": [
		427,
		4
	],
	"../pages/singup/singup.module": [
		428,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 188;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

var SaleService = (function () {
    function SaleService(afDB) {
        this.afDB = afDB;
        this.dataCategoria = [];
        this.dataService = [];
    }
    //---new sale
    SaleService.prototype.newSale = function (keyUser, keySale, maxOffer) {
        // let key = undefined;
        // //default star
        // let star = '3';
        // console.log('key:'+key);
        // console.log('keyNew:'+keyNew);
        // if(keyNew && keyNew != null  && keyNew != undefined){
        // 	keySale = keyNew;
        // }else{
        // 	var d = new Date();
        // 	key = d.getTime();
        // 	var keySale = "sale_"+(key);
        // }
        console.log('metodoNewSale');
        console.log(keyUser);
        console.log(keySale);
        console.log(maxOffer);
        this.afDB.object('/sale/' + keyUser + '/' + keySale).set({ "status": "Published", "sale": maxOffer, "providers": { "prof_1": { "offer": "87" }, "prof_2": { "offer": "65" } } }).catch(function (error) { console.log('errorNewSale'); console.log(error); console.log(JSON.stringify(error)); });
        //this.afDB.object('/sale/'+keyUser+'/'+keySale).set({"status":"new","sale":maxOffer});
        console.info('sale create');
    };
    SaleService.prototype.getSale = function (keyUser, keySale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keySale);
    };
    SaleService.prototype.getSales = function (keyUser) {
        return this.afDB.object('/sale/' + keyUser);
    };
    SaleService.prototype.setStatus = function (keyUser, keyOffer, status) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/status/').set(status).catch(function (error) { console.log('error sale setstatus'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.setSale = function (keyUser, keyOffer, sale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/sale/').set(sale).catch(function (error) { console.log('error sale setSale'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.setSaleProvider = function (keyUser, keyOffer, KeyProvider, sale) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/providers/' + KeyProvider + '/offer/').set(sale).catch(function (error) { console.log('error sale setSale'); console.log(error); console.log(JSON.stringify(error)); });
    };
    SaleService.prototype.getStatus = function (keyUser, keyOffer) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/status/');
    };
    SaleService.prototype.setProvider = function (keyUser, keyOffer, Provider) {
        return this.afDB.object('/sale/' + keyUser + '/' + keyOffer + '/Profession/').set(Provider).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    return SaleService;
}());
SaleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], SaleService);

//# sourceMappingURL=sale.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//import { EncriptyService } from './encripty.service';
var UserService = (function () {
    function UserService(afDB) {
        this.afDB = afDB;
        this.Users = [];
        //console.log(this.afDB.list('/user'));
    }
    /*  ----------------user  ----------------------*/
    UserService.prototype.getUsers = function () {
        return this.afDB.list('/user');
    };
    UserService.prototype.getUser = function (userId) {
        return this.afDB.object('/user/' + userId);
    };
    UserService.prototype.getUserLogin = function (name, pwd) {
        return this.afDB.list('/user')
            .forEach(function (users) {
            //console.log(users);
            return users.map(function (user) {
                // 	console.log(user);
                // 	console.log(user['user_email']);
                // 	console.log(user['user_name']);
                // 	console.log('KEY:'+user.$key);
                // console.log('EMAIL:'+user.user_email);
                // console.log('NAME:'+user.user_name);
                // console.log('PWD:'+user.user_password);
                // console.log('PWD2:'+pwd);
                if ((user['user_email'] == name) || (user['user_username'] == name)) {
                    console.info('existeUser');
                    if (user['user_password'] == pwd) {
                        console.info('existeUserPwd');
                        // estado = [{"status":true,"userId":user.$key,'userData':user}];
                        return user;
                    }
                }
            });
            //return users;
        });
        /* .subscribe( (users) => {
            for (var key in users) {
                if(users[key]['user_email'] || users[key]['user_name'] ){
                    if( (users[key]['user_email'] == name) && (users[key]['user_name'] == name) ){
                        if(users[key]['user_password'] == pwd){
                            estado = [{"status":true,"userId":key,'userData':users[key]}];
                            return estado;
                        }
                    }
                }
            }
        }); */
    };
    UserService.prototype.getUserexists = function (name, email) {
        return this.afDB.list('/user')
            .forEach(function (users) {
            //console.log(users);
            return users.map(function (user) {
                // console.log(user);
                // console.log(email);
                // console.log(name);
                // console.log('EMAIL:'+user.user_email);
                // console.log('NAME:'+user.user_username);
                if ((user['user_email'] == email) || (user['user_username'] == name)) {
                    console.log('existeUser getUserexists');
                    return user;
                }
            });
            //return users;
        });
        /* .subscribe( (users) => {
            for (var key in users) {
                if(users[key]['user_email'] || users[key]['user_name'] ){
                    if( (users[key]['user_email'] == name) && (users[key]['user_name'] == name) ){
                        if(users[key]['user_password'] == pwd){
                            estado = [{"status":true,"userId":key,'userData':users[key]}];
                            return estado;
                        }
                    }
                }
            }
        }); */
    };
    UserService.prototype.updateUserPicture = function (userId, picture) {
        console.log(this.afDB.list('/user/' + userId));
        return this.afDB.object('/user/' + userId).set({ 'user_picture': picture });
    };
    UserService.prototype.getUserEmail = function (email) {
        //let listUser:any;
        return this.afDB.list('/user')
            .subscribe(function (users) {
            //console.log(users);
            users.forEach(function (user) {
                if (user['user_email'] == email) {
                    //console.log(user);
                    return user;
                }
            });
        });
    };
    UserService.prototype.getUserEmailPerfil = function (email) {
        return this.afDB.list('/user')
            .forEach(function (users) {
            //console.log(users);
            return users.map(function (user) {
                if (user['user_email'] == email) {
                    //console.log(user);
                    return user;
                }
            });
        });
    };
    UserService.prototype.newUser = function (userData, keyNew) {
        if (userData === void 0) { userData = []; }
        var key = undefined;
        //default star
        var star = '3';
        console.log('key:' + key);
        console.log('keyNew:' + keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyUser = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyUser = "user_" + (key);
        }
        //console.log(newKeyAddres);
        var ObjAddress = [];
        var username = userData["username"];
        var password = userData["password"];
        //let password = this.encriptyService.GenerateEncripty(userData["password"]);
        var email = userData["email"];
        var name = userData["name"];
        var zipcode = userData["zipcode"];
        var state = userData["state"];
        var picture = userData["picture"];
        //let verificacion = userData["verificacion"];
        var pais = userData["pais"];
        var direccion = userData["direccion"];
        var tel = userData["tel"];
        //console.log(userData);
        if ((userData['username']) && (userData['password']) && (userData['email'])) {
            if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
                this.afDB.object('/user/' + keyUser).set({ "user_username": username, "user_password": password, "user_email": email, "user_name": name, "user_zipcode": zipcode, "user_state": state, "user_picture": picture, "user_pais": pais, "user_tel": tel, "user_star": star });
                ObjAddress.push({ "label": 'My Address', "name": direccion });
                this.newAddress(keyUser, ObjAddress);
                console.info('user create');
            }
        }
    };
    UserService.prototype.setUserDB = function (userData, keyUser) {
        if (userData === void 0) { userData = []; }
        //default star
        //console.log(newKeyAddres);
        //let ObjAddress: any = [];
        var username = userData["username"];
        var password = userData["password"];
        //let password = this.encriptyService.GenerateEncripty(userData["password"]);
        var email = userData["email"];
        var name = userData["name"];
        var zipcode = userData["zipcode"];
        var state = userData["state"];
        var picture = userData["picture"];
        //let verificacion = userData["verificacion"];
        var pais = userData["pais"];
        //let direccion = userData["direccion"];
        var tel = userData["tel"];
        //console.log(userData);
        if ((userData['username']) && (userData['password']) && (userData['email'])) {
            if ((userData['username'] != undefined) && (userData['username'] != null) && (userData['password'] != undefined) && (userData['password'] != null) && (userData['email'] != undefined) && (userData['email'] != null)) {
                this.afDB.object('/user/' + keyUser + '/user_username').set(username);
                this.afDB.object('/user/' + keyUser + '/user_password').set(password);
                this.afDB.object('/user/' + keyUser + '/user_email').set(email);
                this.afDB.object('/user/' + keyUser + '/user_name').set(name);
                this.afDB.object('/user/' + keyUser + '/user_zipcode').set(zipcode);
                this.afDB.object('/user/' + keyUser + '/user_state').set(state);
                this.afDB.object('/user/' + keyUser + '/user_picture').set(picture);
                this.afDB.object('/user/' + keyUser + '/user_pais').set(pais);
                this.afDB.object('/user/' + keyUser + '/user_tel').set(tel);
                console.log(userData);
                console.info('user update');
            }
        }
    };
    /*  ----------------user - address ----------------------*/
    UserService.prototype.getAddress = function (userId) {
        if (userId === void 0) { userId = ""; }
        //return this.afDB.list('/user/'+userId);
        //return this.afDB.object('/user/'+userId);
        return this.afDB.list('/user/' + userId + '/user_address/');
    };
    UserService.prototype.newAddress = function (userId, ObjAddress) {
        if (userId === void 0) { userId = ""; }
        if (ObjAddress === void 0) { ObjAddress = []; }
        var d = new Date();
        var key = d.getTime();
        // console.log(key);
        var keyAddress = "addr_" + key;
        var name = ObjAddress['0']['name'];
        var label = ObjAddress['0']['label'];
        // console.log(ObjAddress['0']);
        // console.log(ObjAddress['0']['label']);
        // console.log(name);
        // console.log(label);
        console.info('user  address create');
        if ((ObjAddress['0']['label']) && (ObjAddress['0']['name'])) {
            if ((label != undefined) && (label != null) && (name != undefined) && (name != null)) {
                return this.afDB.object('/user/' + userId + '/user_address/' + keyAddress).set({ "addr_label": label, "addr_info": name });
            }
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

var OfferService = (function () {
    function OfferService(afDB) {
        this.afDB = afDB;
        this.dataCategoria = [];
        this.dataService = [];
    }
    //---new offer 
    OfferService.prototype.newOffer = function (serviceData, keyNew) {
        if (serviceData === void 0) { serviceData = []; }
        // public newOffer(serviceData : any = [],subCategory:string,keyNew?:any){
        console.log('metodoNewOffer');
        var key = undefined;
        //default star
        console.log(JSON.stringify(serviceData));
        // console.log('key:'+key);
        console.log('keyNew:' + keyNew);
        if (keyNew && keyNew != null && keyNew != undefined) {
            keyOffer = keyNew;
        }
        else {
            var d = new Date();
            key = d.getTime();
            var keyOffer = "offer_" + (key);
        }
        console.log(serviceData);
        // console.log(JSON.stringify(serviceData));
        // console.log(subCategory);
        this.afDB.object('/offer/' + keyOffer).set(serviceData).catch(function (error) { console.log('error offer setNOff'); console.log(error); console.log(JSON.stringify(error)); });
        console.info('offer create');
    };
    //sets
    OfferService.prototype.setStatus = function (keyOffer, status) {
        return this.afDB.object('/offer/' + keyOffer + '/status/').set(status).catch(function (error) { console.log('error offer setstatus'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setSale = function (keyOffer, sale) {
        return this.afDB.object('/offer/' + keyOffer + '/sale/').set(sale).catch(function (error) { console.log('error offer setSale'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setUser = function (keyOffer, User) {
        return this.afDB.object('/offer/' + keyOffer + '/User/').set(User).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    OfferService.prototype.setProvider = function (keyOffer, Provider) {
        return this.afDB.object('/offer/' + keyOffer + '/Profession/').set(Provider).catch(function (error) { console.log('error offer setUser'); console.log(error); console.log(JSON.stringify(error)); });
    };
    //-gets
    OfferService.prototype.getStatus = function (keyOffer) {
        return this.afDB.object('/offer/' + keyOffer + '/status/');
    };
    OfferService.prototype.getOffer = function (keyOffer) {
        return this.afDB.object('/offer/' + keyOffer);
    };
    OfferService.prototype.getOfferNew = function () {
        return this.afDB.list('/offer/', {
            query: {
                orderByChild: 'status',
                equalTo: 'Published'
            }
        });
    };
    return OfferService;
}());
OfferService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], OfferService);

//# sourceMappingURL=offer.service.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
var ProfessionsService = (function () {
    function ProfessionsService() {
        this.professions = [
            { name: 'Care', class: 'red' },
            { name: 'Cleaning', class: 'yellow' },
            { name: 'Janotorial', class: 'orange' },
            { name: 'Transportation', class: 'green' },
            { name: 'Food & Beverage', class: 'purple' },
            { name: 'Legal services', class: 'blue' },
            { name: 'Beauty', class: 'pink' }
        ];
        this.dataCategoria = [];
    }
    ProfessionsService.prototype.getProfessions = function () {
        return this.professions;
    };
    ProfessionsService.prototype.getCategoryByProfession = function (nameService) {
        if (nameService === void 0) { nameService = ""; }
        //console.log(nameService);
        switch (nameService) {
            case "Care": {
                this.dataCategoria = ["Child care", "Senior care", "Family asistance", "Dog walker", "Personal shopper"];
                break;
            }
            case "Cleaning": {
                this.dataCategoria = ["Maids", "Car washers", "Pressure cleaning", "Carpet & upholstery cleaning"];
                break;
            }
            case "Janotorial": {
                this.dataCategoria = ["Handyman", "Pluming", "Electrician", "Pool cleaning", "Luck smith"];
                break;
            }
            case "Transportation": {
                this.dataCategoria = ["Day VIP chofer", "Taxi", "Car pool", "Moving services", "Delivery"];
                break;
            }
            case "Food & Beverage": {
                this.dataCategoria = ["Bartenders", "Waitress", "Chef", "Runners", "Valet parking", "Hostess"];
                break;
            }
            case "Legal services": {
                this.dataCategoria = ["Notary"];
                break;
            }
            case "Beauty": {
                this.dataCategoria = ["Personal trainer", "Hair cut and DIY", "Manicure and pedicure", "Makeup", "Massage"];
                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }
        return this.dataCategoria;
    };
    return ProfessionsService;
}());
ProfessionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], ProfessionsService);

//# sourceMappingURL=professions.service.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(293);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export googleMapsKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_professionals_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_professions_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_offer_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_sale_service__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//-pages

// import { HomePage } from '../pages/home/home';
// import { EditUserPage } from '../pages/edit-user/edit-user';
// import { ShowPage } from '../pages/show/show';
// import { MyServicesPage } from '../pages/my-services/my-services';
// import { PaymentsPage } from '../pages/payments/payments';
// import { PoliciesPage } from '../pages/policies/policies';
//-providers





//-service





//- config 
var firebaseConfig = {
    apiKey: "AIzaSyBmrc2CjBbIJD_Pu_kkCcV8qNXJfsEBaxo",
    authDomain: "usuarioappjobid.firebaseapp.com",
    databaseURL: "https://usuarioappjobid.firebaseio.com",
    projectId: "usuarioappjobid",
    storageBucket: "usuarioappjobid.appspot.com",
    messagingSenderId: "679089691484"
};
var googleMapsKey = 'AIzaSyB8zF6lhZegDjsV_mrqxd9Fb3YFTw2__AA';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-payment-method/add-payment-method.module#AddPaymentMethodPageModule', name: 'AddPaymentMethodPage', segment: 'add-payment-method', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/add-service/add-service.module#AddServicePageModule', name: 'AddServicePage', segment: 'add-service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-provider/edit-provider.module#EditProviderPageModule', name: 'EditProviderPage', segment: 'edit-provider', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-user/edit-user.module#EditUserPageModule', name: 'EditUserPage', segment: 'edit-user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-service-info/my-service-info.module#MyServiceInfoPageModule', name: 'MyServiceInfoPage', segment: 'my-service-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-services/my-services.module#MyServicesPageModule', name: 'MyServicesPage', segment: 'my-services', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment-methods/payment-methods.module#PaymentMethodsPageModule', name: 'PaymentMethodsPage', segment: 'payment-methods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payments/payments.module#PaymentsPageModule', name: 'PaymentsPage', segment: 'payments', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/policies/policies.module#PoliciesPageModule', name: 'PoliciesPage', segment: 'policies', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/provider-info-a/provider-info-a.module#ProviderInfoAPageModule', name: 'ProviderInfoAPage', segment: 'provider-info-a', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/provider-info-b/provider-info-b.module#ProviderInfoBPageModule', name: 'ProviderInfoBPage', segment: 'provider-info-b', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-info/service-info.module#ServiceInfoPageModule', name: 'ServiceInfoPage', segment: 'service-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-info-a/service-info-a.module#ServiceInfoAPageModule', name: 'ServiceInfoAPage', segment: 'service-info-a', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-info-b/service-info-b.module#ServiceInfoBPageModule', name: 'ServiceInfoBPage', segment: 'service-info-b', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-job/service-job.module#ServiceJobPageModule', name: 'ServiceJobPage', segment: 'service-job', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-new/service-new.module#ServiceNewPageModule', name: 'ServiceNewPage', segment: 'service-new', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-ok/service-ok.module#ServiceOkPageModule', name: 'ServiceOkPage', segment: 'service-ok', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-sale/service-sale.module#ServiceSalePageModule', name: 'ServiceSalePage', segment: 'service-sale', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-vote/service-vote.module#ServiceVotePageModule', name: 'ServiceVotePage', segment: 'service-vote', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service-win/service-win.module#ServiceWinPageModule', name: 'ServiceWinPage', segment: 'service-win', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/show/show.module#ShowPageModule', name: 'ShowPage', segment: 'show', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/singup/singup.module#SingupPageModule', name: 'SingupPage', segment: 'singup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__services_professionals_service__["a" /* ProfessionalsService */],
            __WEBPACK_IMPORTED_MODULE_11__services_professions_service__["a" /* ProfessionsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_offer_service__["a" /* OfferService */],
            __WEBPACK_IMPORTED_MODULE_13__services_sale_service__["a" /* SaleService */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//-pages
// import { HomePage } from '../pages/home/home';
// import { EditUserPage } from '../pages/edit-user/edit-user';
// import { ShowPage } from '../pages/show/show';
// import { MyServicesPage } from '../pages/my-services/my-services';
// import { PaymentsPage } from '../pages/payments/payments';
// import { PoliciesPage } from '../pages/policies/policies';
//-services

//-provider

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, professionalsService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.professionalsService = professionalsService;
        //-Default
        this.userName = 'hola logeado';
        this.srcUser = 'assets/img/user.png';
        this.star = '3';
        //--root
        this.rootPage = 'HomePage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Edit', component: 'EditUserPage' },
            { title: 'Menu', component: 'ShowPage' },
            { title: 'My services', component: 'MyServicesPage' },
            { title: 'Payments', component: 'PaymentsPage' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.usuarioLogeado();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.usuarioLogeado = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (userAuth) {
            console.log('find user menu');
            console.log(userAuth);
            if (userAuth) {
                var email = userAuth.providerData["0"].email;
                console.log(email);
                var Userexists_1 = _this.professionalsService.getProfessionalExists(email).subscribe(function (User) {
                    console.log('User Logueado');
                    console.log(User);
                    if (User['0']) {
                        _this.loadViewUser(User['0']);
                    }
                    Userexists_1.unsubscribe();
                });
            }
        });
    };
    MyApp.prototype.loadViewUser = function (user) {
        console.log();
        this.userName = user['prof_username'];
        if (user['prof_picture'] && user['prof_picture'] != '' && user['prof_picture'] != null && user['prof_picture'] != undefined) {
            this.srcUser = user['prof_picture'];
        }
        if (user['prof_star'] && user['prof_star'] != '' && user['prof_star'] != null && user['prof_star'] != undefined) {
            this.star = user['prof_star'];
        }
        // localStorage.setItem('verificacion',user['$key']);
        // this.nav.setRoot('ShowPage');
    };
    MyApp.prototype.cerrarSeccion = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (value) {
            console.log(value);
            _this.nav.setRoot('HomePage');
        }).catch(function (error) { return console.info(error); });
    };
    MyApp.prototype.goPolicies = function () {
        this.nav.push('PoliciesPage');
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>JOBID</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n        <ion-item class="imgUser">\n\n          <ion-thumbnail item-start>\n\n            <img src="{{srcUser}}" alt="userLogo">\n\n          </ion-thumbnail>\n\n          <p>{{userName}}</p>\n\n          <p><ion-icon name="star" class="nota" item-start></ion-icon> {{star}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n      <button ion-item class="loginOut" menuToggle (click)="cerrarSeccion()">\n\n          Login out\n\n        </button> \n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer>\n\n      <ion-toolbar>\n\n          <ion-list>\n\n              <button ion-item (click)="goPolicies()" menuToggle>\n\n                Policies <p class="version">V.1</p>\n\n              </button> \n\n               \n\n            </ion-list>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\z-Trabajo\proyectoIonic\ProveedorApp_JoBid\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_4__services_professionals_service__["a" /* ProfessionalsService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[276]);
//# sourceMappingURL=main.js.map