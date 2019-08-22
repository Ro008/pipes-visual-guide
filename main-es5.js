(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\n  <h2>Pipes Demo App</h2>\n  <hr>\n\n  <table class=\"table table-hover\">\n    <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">Variable</th>\n        <th scope=\"col\">Pipe code</th>\n        <th scope=\"col\">Result</th>\n      </tr>\n    </thead>\n    <tbody>\n\n      <tr>\n        <td>{{ name }} </td>\n        <td>uppercase </td>\n        <td>{{ name | uppercase }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ name }} </td>\n        <td>lowercase </td>\n        <td>{{ name | lowercase }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ name }} </td>\n        <td>slice:4 </td>\n        <td>{{ name | slice:4 }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ name }} </td>\n        <td>slice:0:4 </td>\n        <td>{{ name | slice:0:4 }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ myArray }} </td>\n        <td>slice:0:4 </td>\n        <td>{{ myArray | slice:0:4 }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ myArray }} </td>\n        <td>*ngFor=\"let number of myArray | slice:0:3\" </td>\n        <td>\n          <ul>\n            <li *ngFor=\"let number of myArray | slice:0:3\">{{ number }} </li>\n          </ul>\n        </td>\n      </tr>\n\n      <tr>\n        <td>{{ PI }} </td>\n        <td>number</td>\n        <td>{{ PI | number }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ PI }} </td>\n        <td>number:'1.0-2'</td>\n        <td>{{ PI | number:'1.0-2' }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ myNum }} </td>\n        <td>percent</td>\n        <td>{{ myNum | percent }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ myNum }} </td>\n        <td>percent:'2.2-2'</td>\n        <td>{{ myNum | percent:'2.2-2' }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ salary }} </td>\n        <td>currency</td>\n        <td>{{ salary | currency }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ salary }} </td>\n        <td>currency:'EUR'</td>\n        <td>{{ salary | currency:'EUR' }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ salary }} </td>\n        <td>currency:'EUR':'code'</td>\n        <td>{{ salary | currency:'EUR':'code' }} </td>\n      </tr>\n\n      <tr>\n        <td>{{ salary }} </td>\n        <td>currency:'EUR':'symbol':'4.0-0'</td>\n        <td>{{ salary | currency:'EUR':'symbol':'4.0-0' }} </td>\n      </tr>\n\n      <tr>\n        <td> {{ nerd }} </td>\n        <td>json</td>\n        <td>\n          <pre>{{ nerd | json }} </pre>\n        </td>\n      </tr>\n\n      <tr>\n        <td> {{ promiseValue }} </td>\n        <td>json</td>\n        <td>\n          <pre>{{ promiseValue | json }} </pre>\n        </td>\n      </tr>\n\n      <tr>\n        <td> {{ promiseValue }} </td>\n        <td>async</td>\n        <td>\n          <pre>{{ promiseValue | async }} </pre>\n        </td>\n      </tr>\n\n      <tr>\n        <td> {{ myDate }} </td>\n        <td>date</td>\n        <td>\n          <pre>{{ myDate | date }} </pre>\n        </td>\n      </tr>\n\n      <tr>\n        <td> {{ myDate }} </td>\n        <td>date:'medium'</td>\n        <td>\n          <pre>{{ myDate | date:'medium' }} </pre>\n        </td>\n      </tr>\n\n      <tr>\n        <td> {{ myDate }} </td>\n        <td>date:'EEE, d of LLL of yyyy'</td>\n        <td>\n          <pre>{{ myDate | date:'EEE, d of LLL of yyyy' }} </pre>\n        </td>\n      </tr>\n\n      <tr>\n        <td>YouTube video</td>\n        <td></td>\n        <td><iframe width=\"560\" height=\"315\" [src]=\"video | safeDOM:'https://www.youtube.com/embed/'\" frameborder=\"0\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </td>\n      </tr>\n\n      <tr>\n        <td> My password: </td>\n        <td>\n          encrypt:{{ enable }}\n          <button class=\"btn btn-info\" (click)=\"enable = !enable\">\n            <p *ngIf=\"enable\" class=\"mb-0\">Show password</p>\n            <p *ngIf=\"!enable\" class=\"mb-0\">Hide password</p>\n          </button>\n        </td>\n        <td>{{ password | encrypt:enable }} </td>\n      </tr>\n\n      <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n      </tr>\n\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pipes-project';
        this.name = 'Sheldon';
        this.myArray = [1, 2, 3, 4, 5, 6, 7, 8];
        this.PI = Math.PI;
        this.myNum = 0.589;
        this.salary = 3500.5;
        this.nerd = {
            name: 'Sheldon',
            alias: 'Shelly',
            song: 'Soft Kitty',
            skills: ['eidetic memory', 'makes people nervous'],
            youtubeChannel: 'Fun With Flags',
            address: {
                street: 'Elm Street',
                number: 3,
                city: 'Pasadena'
            }
        };
        this.promiseValue = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve('data X is here!');
            }, 3000);
        });
        this.myDate = new Date();
        this.video = 'M-kUb716fAI';
        this.password = 'mySuperSecretPassword123';
        this.enable = true;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/es */ "./node_modules/@angular/common/locales/es.js");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipes_safe_dom_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safe-dom.pipe */ "./src/app/pipes/safe-dom.pipe.ts");
/* harmony import */ var _pipes_encrypt_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/encrypt.pipe */ "./src/app/pipes/encrypt.pipe.ts");








Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_4___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pipes_safe_dom_pipe__WEBPACK_IMPORTED_MODULE_6__["SafeDOMPipe"], _pipes_encrypt_pipe__WEBPACK_IMPORTED_MODULE_7__["EncryptPipe"]],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'es' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/encrypt.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/encrypt.pipe.ts ***!
  \***************************************/
/*! exports provided: EncryptPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptPipe", function() { return EncryptPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EncryptPipe = /** @class */ (function () {
    function EncryptPipe() {
    }
    EncryptPipe.prototype.transform = function (value, hidden) {
        if (hidden === void 0) { hidden = true; }
        if (hidden) {
            value = value.replace(/[a-zA-Z1-9]/gi, '*');
        }
        return value;
    };
    EncryptPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'encrypt'
        })
    ], EncryptPipe);
    return EncryptPipe;
}());



/***/ }),

/***/ "./src/app/pipes/safe-dom.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safe-dom.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeDOMPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeDOMPipe", function() { return SafeDOMPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeDOMPipe = /** @class */ (function () {
    function SafeDOMPipe(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    SafeDOMPipe.prototype.transform = function (value, url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    };
    SafeDOMPipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    SafeDOMPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'safeDOM'
        })
    ], SafeDOMPipe);
    return SafeDOMPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RocioSirventPerez\workspace\COURSES\Angular De cero a experto - Fernando Herrera\pipes-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map