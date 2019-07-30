webpackHotUpdate("static/development/pages/speakers.js",{

/***/ "./src/Header.js":
/*!***********************!*\
  !*** ./src/Header.js ***!
  \***********************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SignMeUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignMeUp */ "./src/SignMeUp.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/mathias/Desktop/level-up/hooks/src/Header.js";



var Header = function Header() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_App__WEBPACK_IMPORTED_MODULE_2__["ConfigContext"]);

  var signupCallback = function signupCallback(email) {
    return console.log("sign up called with email ".concat(email));
  };

  return context.showHeader === false ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "jumbotron jumbotronheight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-4 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "October 19-20\xA0\xA02019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "San Jose, California")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-sm-8 text-lg-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/SVCClogo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Silicon Valley Code Camp 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row col-12 text-lg-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignMeUp__WEBPACK_IMPORTED_MODULE_1__["default"], {
    signupCallback: signupCallback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))));
};

/***/ })

})
//# sourceMappingURL=speakers.js.3180d0717b96a0e6ac2f.hot-update.js.map