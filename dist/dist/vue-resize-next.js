(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vue-resize-next", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-resize-next"] = factory(require("vue"));
	else
		root["vue-resize-next"] = factory(root["Vue"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--17-0!./src/resize/VueResize.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_compatibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/compatibility */ "./src/utils/compatibility.ts");


var isIE;

function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = Object(_utils_compatibility__WEBPACK_IMPORTED_MODULE_1__["getInternetExplorerVersion"])() !== -1;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Object(vue__WEBPACK_IMPORTED_MODULE_0__["defineComponent"])({
  name: 'ResizeObserver',
  emits: ['notify'],
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;

    initCompat();
    this.$nextTick(function () {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;

      if (_this.emitOMnount) {
        _this.emitSize();
      }
    });
    var object = document.createElement('object');
    this._resizeObject = object;
    object.setAttribute('aria-hidden', 'true');
    object.setAttribute('tabindex', -1);
    object.onload = this.addResizeHandlers;
    object.type = 'text/html';

    if (isIE) {
      this.$el.appendChild(object);
    }

    object.data = 'about:blank';

    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize: function emitSize() {
      this.$emit('notify', {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);

      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
        }

        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=template&id=2bbef310&scoped=true":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--17-0!./src/resize/VueResize.vue?vue&type=template&id=2bbef310&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var _withId = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["withScopeId"])("data-v-2bbef310");

Object(vue__WEBPACK_IMPORTED_MODULE_0__["pushScopeId"])("data-v-2bbef310");

var _hoisted_1 = {
  class: "resize-observer",
  tabindex: "-1"
};

Object(vue__WEBPACK_IMPORTED_MODULE_0__["popScopeId"])();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--3-2!./node_modules/less-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/dist??ref--17-0!./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resize-observer[data-v-2bbef310] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n.resize-observer[data-v-2bbef310] object {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n", "",{"version":3,"sources":["webpack://src/resize/VueResize.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,oBAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;AAAJ;AAGA;EACI,cAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,WAAA;AADJ","sourcesContent":["\n.resize-observer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    border: none;\n    background-color: transparent;\n    pointer-events: none;\n    display: block;\n    overflow: hidden;\n    opacity: 0;\n}\n\n.resize-observer :deep(object) {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    z-index: -1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js??ref--3-0!./node_modules/css-loader/dist/cjs.js??ref--3-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??ref--3-2!./node_modules/less-loader/dist/cjs.js??ref--3-3!./node_modules/vue-loader/dist??ref--17-0!./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??ref--3-2!../../node_modules/less-loader/dist/cjs.js??ref--3-3!../../node_modules/vue-loader/dist??ref--17-0!./VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: VueResize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resize_VueResize_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize/VueResize.vue */ "./src/resize/VueResize.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VueResize", function() { return _resize_VueResize_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; });



var install = function install(app) {
  app.component('VueResize', _resize_VueResize_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
};


/* harmony default export */ __webpack_exports__["default"] = (Object.assign(_resize_VueResize_vue__WEBPACK_IMPORTED_MODULE_0__["default"], {
  install: install
}));

/***/ }),

/***/ "./src/resize/VueResize.vue":
/*!**********************************!*\
  !*** ./src/resize/VueResize.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VueResize_vue_vue_type_template_id_2bbef310_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueResize.vue?vue&type=template&id=2bbef310&scoped=true */ "./src/resize/VueResize.vue?vue&type=template&id=2bbef310&scoped=true");
/* harmony import */ var _VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueResize.vue?vue&type=script&lang=js */ "./src/resize/VueResize.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _VueResize_vue_vue_type_style_index_0_id_2bbef310_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less */ "./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less");





_VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _VueResize_vue_vue_type_template_id_2bbef310_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]
_VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__scopeId = "data-v-2bbef310"
/* hot reload */
if (false) {}

_VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/resize/VueResize.vue"

/* harmony default export */ __webpack_exports__["default"] = (_VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/resize/VueResize.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/resize/VueResize.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/dist??ref--17-0!./VueResize.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less":
/*!*******************************************************************************************!*\
  !*** ./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_ref_3_0_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_2_node_modules_less_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_style_index_0_id_2bbef310_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js??ref--3-0!../../node_modules/css-loader/dist/cjs.js??ref--3-1!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??ref--3-2!../../node_modules/less-loader/dist/cjs.js??ref--3-3!../../node_modules/vue-loader/dist??ref--17-0!./VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less */ "./node_modules/style-loader/dist/cjs.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=style&index=0&id=2bbef310&scoped=true&lang=less");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_ref_3_0_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_2_node_modules_less_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_style_index_0_id_2bbef310_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_ref_3_0_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_2_node_modules_less_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_style_index_0_id_2bbef310_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_ref_3_0_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_2_node_modules_less_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_style_index_0_id_2bbef310_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_ref_3_0_node_modules_css_loader_dist_cjs_js_ref_3_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_2_node_modules_less_loader_dist_cjs_js_ref_3_3_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_style_index_0_id_2bbef310_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/resize/VueResize.vue?vue&type=template&id=2bbef310&scoped=true":
/*!****************************************************************************!*\
  !*** ./src/resize/VueResize.vue?vue&type=template&id=2bbef310&scoped=true ***!
  \****************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_template_id_2bbef310_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../node_modules/vue-loader/dist??ref--17-0!./VueResize.vue?vue&type=template&id=2bbef310&scoped=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/resize/VueResize.vue?vue&type=template&id=2bbef310&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_17_0_VueResize_vue_vue_type_template_id_2bbef310_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/utils/compatibility.ts":
/*!************************************!*\
  !*** ./src/utils/compatibility.ts ***!
  \************************************/
/*! exports provided: getInternetExplorerVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInternetExplorerVersion", function() { return getInternetExplorerVersion; });
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return -1;
}

/***/ }),

/***/ "vue":
/*!******************************************************************************!*\
  !*** external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ });
});
//# sourceMappingURL=vue-resize-next.js.map