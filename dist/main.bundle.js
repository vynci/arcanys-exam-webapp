webpackJsonp([1,4],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });


var ChatService = (function () {
    function ChatService() {
        this.url = 'https://arcanys-exam-websockets.herokuapp.com/';
    }
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.initUser = function (message) {
        this.socket.emit('new-user', message);
    };
    ChatService.prototype.getMessages = function (username) {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(_this.url);
            _this.socket.on('message/' + username, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    return ChatService;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/chat.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressService = (function () {
    function AddressService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // private endpoint = 'http://localhost:3000/v1/api/';
        this.endpoint = 'https://arcanys-exam-rest.herokuapp.com/v1/api/';
        this.url = this.endpoint + 'office-address';
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    AddressService.prototype.getAll = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        return this.http.get(this.url, options)
            .map(function (response) { return response.json(); });
    };
    AddressService.prototype.create = function (data) {
        var body = data;
        return this.http.post(this.url, JSON.stringify(body), { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    AddressService.prototype.update = function (data) {
        var body = data;
        console.log(body);
        var url = this.url + '/' + body._id;
        return this.http.put(url, JSON.stringify(body), { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    AddressService.prototype.delete = function (id) {
        var url = this.url + '/' + id;
        return this.http.delete(url, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    AddressService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AddressService);
    return AddressService;
    var _a;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/address.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquiriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InquiriesService = (function () {
    function InquiriesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // private endpoint = 'http://localhost:3000/v1/api/';
        this.endpoint = 'https://arcanys-exam-rest.herokuapp.com/v1/api/';
        this.url = this.endpoint + 'inquiries';
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    InquiriesService.prototype.getAll = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        return this.http.get(this.url, options)
            .map(function (response) { return response.json(); });
    };
    InquiriesService.prototype.create = function (data) {
        var body = data;
        return this.http.post(this.url, JSON.stringify(body), { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    InquiriesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], InquiriesService);
    return InquiriesService;
    var _a;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/inquiries.service.js.map

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 413;


/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(534);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/main.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_address_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inquiries_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(713),
            styles: [__webpack_require__(710)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_address_service__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_2__services_inquiries_service__["a" /* InquiriesService */], __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/app.component.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__support_support_component__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(535);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    { path: 'support', component: __WEBPACK_IMPORTED_MODULE_6__support_support_component__["a" /* SupportComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__support_support_component__["a" /* SupportComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_address_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inquiries_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_socialMedia_service__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_addressService, _inquiriesService, _socialMediaService, _chatService) {
        this._addressService = _addressService;
        this._inquiriesService = _inquiriesService;
        this._socialMediaService = _socialMediaService;
        this._chatService = _chatService;
        this.messages = [];
        this.isChatOnline = false;
        this.isPostDisconnection = false;
        this.offices = [];
        this.inquiries = [];
        this.socialMedias = {
            facebook: '',
            twitter: '',
            instagram: ''
        };
        this.isAddOffice = false;
        this.isAdmin = false;
        this.searchFilter = {
            city: ''
        };
        this.socialMediaSettings = {
            facebook: {
                id: '',
                name: ''
            },
            twitter: {
                id: '',
                name: ''
            },
            instagram: {
                id: '',
                name: ''
            }
        };
        this.newUser = {
            email: '',
            name: ''
        };
        this.newOffice = {
            name: '',
            city: '',
            address1: '',
            address2: '',
            phone1: '',
            phone2: ''
        };
        this.newInquiry = {
            fullName: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: ''
        };
    }
    HomeComponent.prototype.fetchOffices = function () {
        var _this = this;
        this._addressService.getAll()
            .subscribe(function (data) {
            _this.offices = data.data;
        });
    };
    HomeComponent.prototype.fetchInquries = function () {
        var _this = this;
        this._inquiriesService.getAll()
            .subscribe(function (data) {
            _this.inquiries = data.data;
        });
    };
    HomeComponent.prototype.fetchSocialMedia = function () {
        var _this = this;
        this._socialMediaService.getAll()
            .subscribe(function (data) {
            data.data.forEach(function (obj) {
                _this.socialMedias[obj.type.toLowerCase()] = obj.name;
                _this.socialMediaSettings[obj.type.toLowerCase()] = {
                    _id: obj._id,
                    name: obj.name
                };
            });
        });
    };
    HomeComponent.prototype.switchUser = function (type) {
        if (type === 'admin') {
            this.isAdmin = true;
        }
        else {
            this.isAdmin = false;
        }
    };
    HomeComponent.prototype.addOffice = function () {
        this.isAddOffice = true;
    };
    HomeComponent.prototype.cancelAddOffice = function () {
        this.isAddOffice = false;
        this.clearOfficeForm();
    };
    HomeComponent.prototype.clearOfficeForm = function () {
        this.newOffice = {
            name: '',
            city: '',
            address1: '',
            address2: '',
            phone1: '',
            phone2: ''
        };
    };
    HomeComponent.prototype.clearInquiryForm = function () {
        this.newInquiry = {
            fullName: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: ''
        };
    };
    HomeComponent.prototype.editOffice = function (office) {
        var _this = this;
        this._addressService.update(office)
            .subscribe(function (data) {
            _this.clearOfficeForm();
            _this.fetchOffices();
        });
    };
    HomeComponent.prototype.deleteOffice = function (office) {
        var _this = this;
        this._addressService.delete(office._id)
            .subscribe(function (data) {
            _this.clearOfficeForm();
            _this.fetchOffices();
        });
    };
    HomeComponent.prototype.saveOffice = function () {
        var _this = this;
        this._addressService.create(this.newOffice)
            .subscribe(function (data) {
            _this.fetchOffices();
            _this.clearOfficeForm();
        });
    };
    HomeComponent.prototype.saveSocialMedia = function () {
        var _this = this;
        console.log(this.socialMediaSettings);
        // For Facebook
        this._socialMediaService.update(this.socialMediaSettings.facebook)
            .subscribe(function (data) {
            _this.fetchSocialMedia();
        });
        // For Twitter
        this._socialMediaService.update(this.socialMediaSettings.twitter)
            .subscribe(function (data) {
            _this.fetchSocialMedia();
        });
        // For Instagram
        this._socialMediaService.update(this.socialMediaSettings.instagram)
            .subscribe(function (data) {
            _this.fetchSocialMedia();
        });
    };
    HomeComponent.prototype.submitInquiry = function () {
        var _this = this;
        this._inquiriesService.create(this.newInquiry)
            .subscribe(function (data) {
            _this.fetchInquries();
            _this.clearInquiryForm();
            alert('Inquiry Submitted! Thank You :)');
        });
    };
    HomeComponent.prototype.startChat = function () {
        var _this = this;
        this.isChatOnline = true;
        this.connection = this._chatService.getMessages(this.newUser.email).subscribe(function (message) {
            _this.messages.push(message);
        });
        this._chatService.initUser({
            email: this.newUser.email,
            name: this.newUser.name
        });
    };
    HomeComponent.prototype.disconnectChat = function () {
        this.isChatOnline = false;
        this._chatService.disconnect();
        this.connection.unsubscribe();
        this.messages = [];
        this.isPostDisconnection = true;
    };
    HomeComponent.prototype.sendChatMessage = function () {
        var payload = {
            sender: this.newUser.name,
            recipient: 'support',
            type: 'new-message',
            text: this.message
        };
        this._chatService.sendMessage(payload);
        this.message = '';
        this.messages.push(payload);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchInquries();
        this.fetchOffices();
        this.fetchSocialMedia();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.connection) {
            this.connection.unsubscribe();
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(714),
            styles: [__webpack_require__(711)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_address_service__["a" /* AddressService */], __WEBPACK_IMPORTED_MODULE_2__services_inquiries_service__["a" /* InquiriesService */], __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_3__services_socialMedia_service__["a" /* SocialMediaService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_address_service__["a" /* AddressService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_address_service__["a" /* AddressService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_inquiries_service__["a" /* InquiriesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_inquiries_service__["a" /* InquiriesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_socialMedia_service__["a" /* SocialMediaService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_socialMedia_service__["a" /* SocialMediaService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */]) === 'function' && _d) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/home.component.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialMediaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialMediaService = (function () {
    function SocialMediaService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // private endpoint = 'http://localhost:3000/v1/api/';
        this.endpoint = 'https://arcanys-exam-rest.herokuapp.com/v1/api/';
        this.url = this.endpoint + 'social-media';
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
    }
    SocialMediaService.prototype.getAll = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers });
        return this.http.get(this.url, options)
            .map(function (response) { return response.json(); });
    };
    SocialMediaService.prototype.update = function (data) {
        var body = data;
        var url = this.url + '/' + body._id;
        return this.http.put(url, JSON.stringify(body), { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    SocialMediaService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], SocialMediaService);
    return SocialMediaService;
    var _a;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/socialMedia.service.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportComponent = (function () {
    function SupportComponent(_chatService) {
        this._chatService = _chatService;
        this.messages = [];
        this.isChatOnline = false;
        this.chatModel = {
            type: '',
            sender: {},
            text: ''
        };
        this.messageBoxes = [];
    }
    SupportComponent.prototype.sendChatMessage = function (recipientEmail) {
        console.log('chat msg');
        var payload = {
            sender: 'Support',
            recipient: recipientEmail,
            type: 'new-message',
            text: this.message
        };
        this._chatService.sendMessage(payload);
        this.message = '';
        this.messages.push(payload);
    };
    SupportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this._chatService.getMessages('support').subscribe(function (message) {
            _this.chatModel = message;
            if (_this.chatModel.type === 'new-message') {
                _this.messages.push(message);
            }
            else {
                _this.messageBoxes.push({
                    customerName: _this.chatModel.sender.name,
                    customerEmail: _this.chatModel.sender.email
                });
            }
        });
    };
    SupportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-support',
            template: __webpack_require__(715),
            styles: [__webpack_require__(712)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === 'function' && _a) || Object])
    ], SupportComponent);
    return SupportComponent;
    var _a;
}());
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/support.component.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/vynci/sandbox/arcanys-exam/frontend/webapp/src/environment.js.map

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = ".container {\n    /* margin-right: 10px; */\n    /* margin-left: 10px; */\n}\n\n.main-view {\n    padding-top: 30px;\n}\n\n.chat-header{\n    text-align: right;\n}\n\n.chat-box {\n    margin-top: 60px;\n    border: 1px solid gray;\n    padding: 10px 10px;\n    overflow: scroll;\n}\n\n.chat-content {\n    height: 200px;\n}"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = ".main-view {\n    padding-top: 30px;\n}\n\n.chat-header{\n    background: gray;\n    color: white;\n    padding: 10px 10px;\n    text-align: center;\n}\n\n.chat-box {\n    margin-top: 20px;\n    border: 1px solid gray;\n    padding: 10px 10px;\n    overflow: scroll;\n}\n\n.chat-content {\n    height: 200px;\n}"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-view\">\n  <div class=\"row\">\n    <div class=\"col col-sm-12\" style=\"text-align:right;\">\n      Login As:\n      <button class=\"btn btn-primary\" (click)=\"switchUser('visitor')\">Visitor</button>\n      <button class=\"btn btn-success\" (click)=\"switchUser('admin')\">Admin</button>\n      <a routerLink=\"/support\"  class=\"btn btn-warning\">Support</a>\n    </div>\n  </div>\n\n  <hr>  \n  <div class=\"row\">\n      <div class=\"col col-sm-6\" style=\"padding-top: 30px;\"> \n        <div class=\"row\">\n          <div class=\"col col-sm-6\">\n          <div class=\"form-group input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"searchFilter.city\">\n              <span class=\"input-group-btn\"><button class=\"btn btn-secondary\" type=\"button\"><i class=\"glyphicon glyphicon-search\"></i></button></span>\n            </div>\n            <div *ngIf=\"offices.length === 0\">\n                <p>Loading...</p>\n              </div>            \n            <div *ngFor=\"let office of offices\">\n                <div *ngIf=\"!isAdmin\">\n                    <span>{{office.name}}</span><br>\n                    <span>{{office.city}}</span><br>\n                    <span>{{office.address1}}</span><br>\n                    <span>{{office.address2}}</span><br>\n                    <span>{{office.phone1}}</span><br>\n                    <span>{{office.phone2}}</span><br>\n                </div>\n\n                <div *ngIf=\"isAdmin\">\n                    <input class=\"form-control\" value=\"{{office.name}}\" [(ngModel)]=\"office.name\" name=\"name\" placeholder=\"Name\">\n                    <input class=\"form-control\" value=\"{{office.city}}\" [(ngModel)]=\"office.city\" name=\"city\" placeholder=\"City\">\n                    <input class=\"form-control\" value=\"{{office.address1}}\" [(ngModel)]=\"office.address1\" name=\"address1\" placeholder=\"Address 1\">\n                    <input class=\"form-control\" value=\"{{office.address2}}\" [(ngModel)]=\"office.address2\" name=\"address2\" placeholder=\"Addres 2\">\n                    <input class=\"form-control\" value=\"{{office.phone1}}\" [(ngModel)]=\"office.phone1\" name=\"phone1\" placeholder=\"Phone 1\">\n                    <input class=\"form-control\" value=\"{{office.phone2}}\" [(ngModel)]=\"office.phone2\" name=\"phone2\" placeholder=\"Phone 2\"><br>\n                    <button type=\"submit\" class=\"btn btn-info\" (click)=\"editOffice(office)\">Save</button>\n                    <button type=\"submit\" class=\"btn btn-danger\" (click)=\"deleteOffice(office)\">Delete</button>                  \n                </div>\n                <br>\n            </div>\n\n            <div *ngIf=\"isAdmin\" style=\"margin-top: 10px; margin-bottom:10px;\">\n                <hr>\n                <button class=\"btn btn-success\" (click)=\"addOffice()\">Add Office</button>\n            </div>\n\n            <div *ngIf=\"isAddOffice && isAdmin\" style=\"border: 1px solid gray; padding: 10px 10px;\">\n              <form role=\"form\">\n\n                <fieldset class=\"form-group\">\n                    <input class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"newOffice.name\" name=\"name\">\n                </fieldset>      \n\n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Ciy\" [(ngModel)]=\"newOffice.city\" name=\"city\">\n                </fieldset>\n              \n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Address 1\" [(ngModel)]=\"newOffice.address1\" name=\"address1\">\n                </fieldset>\n                \n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Address 2\" [(ngModel)]=\"newOffice.address2\" name=\"address2\">\n                </fieldset>  \n                \n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Phone 1\" [(ngModel)]=\"newOffice.phone1\" name=\"phone1\">\n                </fieldset>\n                \n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Phone 2\" [(ngModel)]=\"newOffice.phone2\" name=\"phone2\">\n                </fieldset>            \n\n                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveOffice()\">Save</button>\n                <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"cancelAddOffice()\">Cancel</button>\n              </form>  \n            </div>\n            \n          </div>\n          <div class=\"col col-sm-6\">\n          \n          </div>        \n        </div>\n      </div>\n\n      <div class=\"col col-sm-6\" style=\"padding-left: 100px;\">\n\n        <div *ngIf=\"isAdmin\">\n            <div>\n                <h1>Social Media Settings</h1>\n                <fieldset class=\"form-group\">\n                    <input class=\"form-control\" placeholder=\"Facebook\" [(ngModel)]=\"socialMediaSettings.facebook.name\" name=\"facebook\">\n                </fieldset>      \n    \n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Twitter\" [(ngModel)]=\"socialMediaSettings.twitter.name\" name=\"twitter\">\n                </fieldset>\n              \n                <fieldset class=\"form-group\">\n                  <input class=\"form-control\" placeholder=\"Instagram\" [(ngModel)]=\"socialMediaSettings.instagram.name\" name=\"instagram\">\n                </fieldset>\n\n                <button type=\"submit\" (click)=\"saveSocialMedia()\" class=\"btn btn-primary\">Save</button>\n            </div>\n            \n\n            <h1>Inquiries</h1>\n            <div *ngFor=\"let inquiry of inquiries\">\n                <div>\n                    <span><b>Full Name:</b> {{inquiry.fullName}}</span><br>\n                    <span><b>Email:</b> {{inquiry.email}}</span><br>\n                    <span><b>Phone:</b> {{inquiry.phone}}</span><br>\n                    <span><b>Inquiry Type:</b> {{inquiry.inquiryType}}</span><br>\n                    <span><b>Message:</b> {{inquiry.message}}</span><br><br>\n                </div>\n            </div>        \n        </div>\n\n        <div *ngIf=\"!isAdmin\">\n          <h1> \n              Contact Us\n              <a type=\"submit\" [attr.href]=\"socialMedias.facebook\" target=\"_blank\" class=\"btn btn-sm btn-primary\">FB</a>\n              <a type=\"submit\" [attr.href]=\"socialMedias.twitter\" target=\"_blank\" class=\"btn btn-sm btn-info\">Twitter</a>\n              <a type=\"submit\" [attr.href]=\"socialMedias.instagram\" target=\"_blank\" class=\"btn btn-sm btn-danger\">IG</a>\n          </h1>\n          <h4>Please fill up the following form</h4>\n\n          <form role=\"form\">\n\n            <fieldset class=\"form-group\">\n                <input class=\"form-control\" placeholder=\"Full Name\" [(ngModel)]=\"newInquiry.fullName\" name=\"fullName\">\n            </fieldset>      \n\n            <fieldset class=\"form-group\">\n              <input class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"newInquiry.email\" name=\"email\">\n            </fieldset>\n          \n            <fieldset class=\"form-group\">\n              <input class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"newInquiry.phone\" name=\"phone\">\n            </fieldset>      \n\n            <div class=\"form-group\">\n              <select class=\"form-control\" [(ngModel)]=\"newInquiry.inquiryType\" name=\"inquiryType\">\n                  <option value=\"\" selected disabled>Inquiry Type [Please Select]</option>\n                  <option>Inquiry</option>\n                  <option>Order</option>\n                  <option>Comments</option>\n                  <option>Others</option>\n              </select>\n            </div>\n\n            <fieldset class=\"form-group\">\n              <textarea class=\"form-control\" rows=\"3\" placeholder=\"Message\" [(ngModel)]=\"newInquiry.message\" name=\"message\"></textarea>\n            </fieldset>\n\n            <button type=\"submit\" (click)=\"submitInquiry()\" class=\"btn btn-primary\">Submit</button>\n            <br><br>\n          </form>  \n          \n          <div class=\"chat-box\">\n            <div class=\"chat-header\">\n                <b>Chat Box</b>\n                <button *ngIf=\"isChatOnline\" type=\"submit\" (click)=\"disconnectChat()\" class=\"btn btn-sm btn-danger\">disconnect</button>\n            </div>\n\n            <div class=\"chat-content\">\n              <div *ngIf=\"messages.length === 0\">\n                <br><br>\n                <p *ngIf=\"isPostDisconnection\">Thank you for using our support chat box! :)</p>\n                <p>Please enter your email and fullname to start the converstation :)</p>\n              </div>\n\n              <div *ngFor=\"let message of messages\">\n                <span><b>{{message.sender}}</b>: </span>\n                <span>{{message.text}}</span>\n              </div>              \n            </div>\n\n            <div *ngIf=\"!isChatOnline\" class=\"row chat-message-form\">\n                <div class=\"col col-sm-4\">\n                    <input class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"newUser.email\">\n                </div>\n                <div class=\"col col-sm-4\">\n                    <input class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"newUser.name\">\n                </div>              \n                <div class=\"col col-sm-4\">\n                    <button type=\"submit\" (click)=\"startChat()\" class=\"btn btn-primary btn-block\">Start Chat</button>\n                </div>\n            </div> \n            \n            <div *ngIf=\"isChatOnline\" class=\"row chat-message-form\">\n                <div class=\"col col-sm-8\">\n                    <input class=\"form-control\" placeholder=\"Message\" [(ngModel)]=\"message\">\n                </div>\n                <div class=\"col col-sm-4\">\n                    <button type=\"submit\" (click)=\"sendChatMessage()\" class=\"btn btn-primary btn-block\">Send</button>\n                </div>\n            </div>      \n          </div>\n        </div>\n\n        \n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-view\">\n  <div class=\"row\">\n    <div class=\"col col-sm-12\" style=\"text-align:center;\">\n      <a routerLink=\"/\"  class=\"btn btn-warning\">Home</a>\n    </div>\n    <br><br>\n  </div>\n\n  <div *ngIf=\"messageBoxes.length === 0\">\n    <p style=\"text-align:center;\">You currently have no active chat boxes. If a customer (user) initiates a chat, it will display here.</p>\n  </div>\n  <div class=\"chat-box\" *ngFor=\"let messageBox of messageBoxes\">\n    <div class=\"chat-header\">\n        <b>Chat Box ({{messageBox.customerName}} - {{messageBox.customerEmail}})</b>\n    </div>\n\n    <div class=\"chat-content\">\n      <div *ngFor=\"let message of messages\">\n        <span><b>{{message.sender}}</b>: </span>\n        <span>{{message.text}}</span>\n      </div>              \n    </div>\n    \n    <div class=\"row chat-message-form\">\n        <div class=\"col col-sm-8\">\n            <input class=\"form-control\" placeholder=\"Message\" [(ngModel)]=\"message\">\n        </div>\n        <div class=\"col col-sm-4\">\n            <button type=\"submit\" (click)=\"sendChatMessage(messageBox.customerEmail)\" class=\"btn btn-primary btn-block\">Send</button>\n        </div>\n    </div>      \n  </div>  \n</div>"

/***/ }),

/***/ 741:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(414);


/***/ })

},[742]);
//# sourceMappingURL=main.bundle.map