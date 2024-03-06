/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/GT.CSS":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/GT.CSS ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --orange-red: #fe470e;
  --white: white;
  --black: black;
  --seashell: #fff6ee;
  --khaki: #fdff94;
  --maroon: #751e03;
  --orange: #feac0e;
  --firebrick: #c02e00;
  --cadet-blue: #009ec0;
  --moccasin: #ffecbf;
  --medium-blue: #002ac0;
  --medium-sea-green: #3fb64b;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: #333;
  line-height: 1.6;
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #333;
}

img {
  width: 100%;
}

p {
  margin: 10px 0;
}

h1,
h2 {
  font-weight: 300;
  line-height: 1.2;
  margin: 10px 0;
}

p {
  margin: 10px 0;
}

/* navigation */
.navbar {
  background-color: var(--orange-red);
  color: #fff;
  height: 64px;
}

.navlogo img {
  width: 300px;
}

.navbar .flex {
  justify-content: space-between;
}

.navbar ul {
  display: flex;
}

.navbar a {
  color: var(--khaki);
  padding: 10px;
  margin: 0 5px;
}

.navbar a:hover {
  border-bottom: 2px var(--khaki) solid;
}

.navbar .container {
  border: 1px var(--khaki) solid;
  padding: 20px;
  border-radius: 20px;
  height: 54px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 90vw;
  align-items: center;
}

/* heropage */
.heropage {
  height: 500px;
  background-color: var(--orange-red);
  color: #fff;
  position: relative;
}

.heropage h1 {
  font-size: 70px;
  font-weight: 700;
}

.heropage p {
  margin-top: 20px 0;
  width: 360px;
}

.heropage-text {
  position: relative;
  padding: 0 20px;
  align-items: center;
}

/* slider */
.slider {
  max-width: 90%;
  min-width: 690px;
  height: 690px;
  border-radius: 10px;
  overflow: hidden;
  /* overflow: visible; */
  position: relative;
  border: 2px solid red;
  margin: 0 auto;
}

.slides {
  width: 100%;
  /* height: 100%; */
  /* object-fit: contain; */
  /* width: 900%; */
  /* height: 500px; */
  /* display: flex; */
  /* position: absolute; */
  /* z-index: 1; */
}

.slides input {
  display: none;
}

.slide {
  width: 100%;
  transition: 2s;
  position: absolute;
  overflow: hidden;
}

.slide img {
  /* width: 1500px; */
  /* height: 750px; */
  border-radius: 10px;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  /* width: 900%; */
  /* height: 500px; */
  /* display: flex; */
  /* position: absolute; */
  z-index: 1;
}

.navigation-manual {
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  border: 2px solid #fff;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child) {
  margin-right: 40px;
}

.manual-btn:hover {
  background: #fff;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

#radio4:checked ~ .first {
  margin-left: -60%;
}

.navigation-auto {
  position: absolute;
  display: flex;
  width: 800px;
  justify-content: center;
  margin-top: 460px;
}

.navigation-auto div {
  border: 2px solid #fff;
  padding: 5px;
  border-radius: 10px;
  transition: 1s;
}

.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: #fff;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: #fff;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: #fff;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background: #fff;
}

/* .heropage::before,
.heropage::after {
   content: '';
   position: absolute;
   height: 100px;
   bottom: -70px;
   right: 0;
   left: 0;
   background-color: #fff;
   transform: skewY(-3deg);
} */
/* Utilities */
.container {
  /* max-width: 1100px; */
  margin: 0 auto;
  padding: 0 40px;
  overflow: auto;
}

.grid {
  grid-template-columns: repeat(1fr);
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.btn {
  border: none;
  background-color: var(--orange-red);
  color: #fff;
  border-radius: 4px;
  padding: 5px;
}`, "",{"version":3,"sources":["webpack://./src/styles/GT.CSS"],"names":[],"mappings":"AAGA;EACI,qBAAA;EACA,cAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,sBAAA;EACA,2BAAA;AADJ;;AAIC;EACG,sBAAA;EACA,UAAA;EACA,SAAA;AADJ;;AAIC;EACG,+BAAA;EACA,WAAA;EACA,gBAAA;AADJ;;AAIC;EACG,qBAAA;AADJ;;AAIC;EACG,qBAAA;EACA,WAAA;AADJ;;AAIC;EACG,WAAA;AADJ;;AAIC;EACG,cAAA;AADJ;;AAIC;;EAEG,gBAAA;EACA,gBAAA;EACA,cAAA;AADJ;;AAIC;EACE,cAAA;AADH;;AAKA,eAAA;AAEC;EACG,mCAAA;EACA,WAAA;EACA,YAAA;AAHJ;;AAMC;EACG,YAAA;AAHJ;;AAMC;EACG,8BAAA;AAHJ;;AAMA;EACI,aAAA;AAHJ;;AAMA;EACI,mBAAA;EACA,aAAA;EACA,aAAA;AAHJ;;AAMA;EACI,qCAAA;AAHJ;;AAKC;EACG,8BAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;AAFJ;;AAIA,aAAA;AAEA;EACG,aAAA;EACA,mCAAA;EACA,WAAA;EACA,kBAAA;AAFH;;AAKA;EACG,eAAA;EACA,gBAAA;AAFH;;AAKA;EACG,kBAAA;EACA,YAAA;AAFH;;AAKA;EACG,kBAAA;EACA,eAAA;EACA,mBAAA;AAFH;;AAKA,WAAA;AACA;EACG,cAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;EACA,qBAAA;EACA,cAAA;AAFH;;AAKA;EAEG,WAAA;EACH,kBAAA;EACA,yBAAA;EACG,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,wBAAA;EACF,gBAAA;AAHD;;AAMA;EACG,aAAA;AAHH;;AAMA;EAEG,WAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAJH;;AAQC;EACE,mBAAA;EACA,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACG,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,wBAAA;EACF,UAAA;AALJ;;AAUA;EACG,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;AAPH;;AAUA;EACG,sBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,cAAA;AAPH;;AAUA;EACG,kBAAA;AAPH;;AAUA;EACG,gBAAA;AAPH;;AAUA;EACG,cAAA;AAPH;;AASA;EACG,iBAAA;AANH;;AAQA;EACG,iBAAA;AALH;;AAOA;EACG,iBAAA;AAJH;;AAOA;EACG,kBAAA;EACA,aAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;AAJH;;AAOA;EACA,sBAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;AAJA;;AAOA;EACG,kBAAA;AAJH;;AAOA;EACG,gBAAA;AAJH;;AAMA;EACG,gBAAA;AAHH;;AAKA;EACG,gBAAA;AAFH;;AAIA;EACG,gBAAA;AADH;;AAIA;;;;;;;;;;GAAA;AAWA,cAAA;AAEA;EACI,uBAAA;EACA,cAAA;EACA,eAAA;EACA,cAAA;AAFJ;;AAKC;EACE,kCAAA;AAFH;;AAIA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AADJ;;AAIA;EACG,YAAA;EACA,mCAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;AADH","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');\n\n\n:root {\n    --orange-red: #fe470e;\n    --white: white;\n    --black: black;\n    --seashell: #fff6ee;\n    --khaki: #fdff94;\n    --maroon: #751e03;\n    --orange: #feac0e;\n    --firebrick: #c02e00;\n    --cadet-blue: #009ec0;\n    --moccasin: #ffecbf;\n    --medium-blue: #002ac0;\n    --medium-sea-green: #3fb64b;\n}\n\n * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n }\n\n body {\n    font-family:'Lato', sans-serif ;\n    color: #333;\n    line-height: 1.6;\n }\n\n ul {\n    list-style-type: none;\n }\n\n a {\n    text-decoration: none;\n    color: #333;\n }\n\n img {\n    width: 100%;\n }\n\n p {\n    margin: 10px 0;\n } \n\n h1,\n h2 {\n    font-weight: 300;\n    line-height: 1.2;\n    margin: 10px 0;\n }\n\n p {\n   margin: 10px 0;\n }\n\n\n/* navigation */\n\n .navbar {\n    background-color: var(--orange-red);\n    color: #fff;\n    height: 64px;\n }\n\n .navlogo img {\n    width: 300px;\n }\n\n .navbar .flex {\n    justify-content: space-between;\n }\n\n.navbar ul {\n    display: flex;\n}\n\n.navbar a {\n    color: var(--khaki);\n    padding: 10px;\n    margin: 0 5px;\n}\n\n.navbar a:hover {\n    border-bottom: 2px var(--khaki) solid;\n}\n .navbar .container {\n    border: 1px var(--khaki) solid;\n    padding: 20px;\n    border-radius: 20px;\n    height: 54px;\n    margin: 0 auto;\n    display: flex;\n    width: 100%;\n    max-width: 90vw;\n    align-items: center;\n }\n/* heropage */\n\n.heropage{\n   height: 500px;\n   background-color: var(--orange-red);\n   color: #fff;\n   position: relative;\n}\n\n.heropage h1 {\n   font-size: 70px;\n   font-weight: 700;\n}\n\n.heropage p {\n   margin-top: 20px 0;\n   width: 360px;\n}\n\n.heropage-text {\n   position: relative;\n   padding: 0 20px;\n   align-items: center;\n}\n\n/* slider */\n.slider {\n   max-width:90%;\n   min-width: 690px;\n   height: 690px;\n   border-radius: 10px;\n   overflow: hidden;\n   /* overflow: visible; */\n   position: relative;\n   border: 2px solid red;\n   margin: 0 auto;  \n}\n\n.slides{\n\n   width: 100%;\n/* height: 100%; */\n/* object-fit: contain; */\n   /* width: 900%; */\n   /* height: 500px; */\n   /* display: flex; */\n   /* position: absolute; */\n /* z-index: 1; */\n}\n\n.slides input {\n   display: none;\n}\n\n.slide{\n\n   width: 100%;\n   transition: 2s;\n   position: absolute;\n   overflow: hidden;\n  \n}\n\n .slide img {\n   /* width: 1500px; */\n   /* height: 750px; */\n   border-radius: 10px;\n   width: 100%;\n   /* height: 100%; */\n   object-fit: cover;\n      /* width: 900%; */\n      /* height: 500px; */\n      /* display: flex; */\n      /* position: absolute; */\n    z-index: 1;\n\n   \n} \n\n.navigation-manual{\n   position: absolute;\n   width: 800px;\n   margin-top: -40px;\n   display: flex;\n   justify-content: center;\n}\n\n.manual-btn {\n   border: 2px solid #fff;\n   padding: 5px;\n   border-radius: 10px;\n   cursor: pointer;\n   transition: 1s;\n}\n\n.manual-btn:not(:last-child){\n   margin-right: 40px;\n}\n\n.manual-btn:hover{\n   background: #fff;\n}\n\n#radio1:checked ~ .first {\n   margin-left: 0;\n}\n#radio2:checked ~ .first {\n   margin-left: -20%;\n}\n#radio3:checked ~ .first {\n   margin-left: -40%;\n}\n#radio4:checked ~ .first {\n   margin-left: -60%;\n}\n\n.navigation-auto {\n   position: absolute;\n   display: flex;\n   width: 800px;\n   justify-content: center;\n   margin-top: 460px;\n}\n\n.navigation-auto div {\nborder: 2px solid #fff;\npadding: 5px;\nborder-radius: 10px;\ntransition: 1s;\n}\n\n.navigation-auto div:not(:last-child){\n   margin-right: 40px;\n}\n\n#radio1:checked ~ .navigation-auto .auto-btn1 {\n   background: #fff;\n}\n#radio2:checked ~ .navigation-auto .auto-btn2 {\n   background: #fff;\n}\n#radio3:checked ~ .navigation-auto .auto-btn3 {\n   background: #fff;\n}\n#radio4:checked ~ .navigation-auto .auto-btn4 {\n   background: #fff;\n}\n\n/* .heropage::before,\n.heropage::after {\n   content: '';\n   position: absolute;\n   height: 100px;\n   bottom: -70px;\n   right: 0;\n   left: 0;\n   background-color: #fff;\n   transform: skewY(-3deg);\n} */\n/* Utilities */\n\n.container {\n    /* max-width: 1100px; */\n    margin: 0 auto;\n    padding: 0 40px;\n    overflow: auto;\n}\n\n .grid{\n   grid-template-columns: repeat(1fr);\n }\n.flex {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n.btn{\n   border: none;\n   background-color: var(--orange-red);\n   color: #fff;\n   border-radius: 4px;\n   padding: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/GT.CSS":
/*!***************************!*\
  !*** ./src/styles/GT.CSS ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GT_CSS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./GT.CSS */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/GT.CSS");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GT_CSS__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GT_CSS__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GT_CSS__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_GT_CSS__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/gtfood.jpeg":
/*!********************************!*\
  !*** ./src/assets/gtfood.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "gtfood.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_GT_CSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/GT.CSS */ "./src/styles/GT.CSS");
/* harmony import */ var _assets_gtfood_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/gtfood.jpeg */ "./src/assets/gtfood.jpeg");

// import imgA from './assets/imgg1.jpg'

var nav = document.getElementById('logoImg');
_assets_gtfood_jpeg__WEBPACK_IMPORTED_MODULE_1__.src = _assets_gtfood_jpeg__WEBPACK_IMPORTED_MODULE_1__;

// const imA = document.getElementById('img1')
// imA.src = imgA
// const imB = document.getElementById('')
// navImg.src = navImg
// const imC = document.getElementById('logoImg')
// navImg.src = navImg
// const imD  = document.getElementById('logoImg')
// navImg.src = navImg

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
})();

/******/ })()
;
//# sourceMappingURL=bundle26fd0d5a75da7df91d27.js.map