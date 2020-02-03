/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n\nbody {\n    width: 100%; \n    font-family: \"Source Sans Pro\"; \n    font-size: 14px; \n    overflow-x: hidden; \n    /* overflow-x: hidden; */\n  }\n\n#zero-state-nav {\n    font-family: \"Source Sans Pro\"; \n    display: flex; \n    flex-direction: row ; \n    border-bottom: 1px solid #E4E3E3; \n    padding-left: 6px; \n    position: absolute; \n    top: 0px; \n    left: 0px; \n    width: 100%; \n    height: 25px; \n    /* border: 1px solid red;  */\n}\n\n#about {\n    position: absolute; \n    top: 30px; \n    left: 0px; \n    /* border: 1px solid red;  */\n    height: 80vh;  \n    padding: 75px 50px; \n    text-align: center; \n    /* visibility: hidden;  */\n  }\n\n  #about p {\n    width: 100%; \n  }\n\n#zero-state-nav span {\n  font-size: 14px; \n  font-weight: 600; \n  padding: 5px 10px; \n  color: #929292; \n  text-decoration: none; \n  cursor: pointer; \n  width: 65px; \n  /* border: 1px solid blue;  */\n}\n\n#page-intro, #page-check-pass, #page-check-fail {\n  width: 100vw; \n  /* height: 100vh;  */\n  position: absolute; \n  \n  left: 0px; \n  display: flex; \n  flex-direction: column; \n  font-family: \"Roboto\", \"Segoe UI\"; \n  font-size: 14px; \n  text-align: center; \n  line-height: 1.3em; \n  align-items: center; \n  /* border: 1px solid green;  */\n}\n\n#page-intro, #page-check-pass {\n  height: 100vh; \n  top: 30px; \n}\n\n#page-check-fail {\n  padding-bottom: 70px; \n  top: 0px\n}\n\n#page-intro, #page-check-pass {\n  height: 80vh; \n  }\n\n#page-intro, #page-check-pass {\n  justify-content:space-around; \n}\n\n#preface {\n  width: 310px; \n  border-bottom: 1px solid #EFEFEF; \n  display: flex; \n  flex-direction: column; \n  align-items: center; \n  padding: 10px 0px 20px 0px; \n\n}\n\n\np {\n  width: 70%; \n}\n\n#header-pass {\n  font-weight: bold; \n  color: #2F731F; \n}\n\n.header-fail {\n  font-weight: bold; \n  color: #B2230F; \n}\n\n#container-buttons {\n  width: 100vw; \n  display: flex; \n  flex-direction: row; \n  justify-content: center; \n  padding: 15px 0px;\n  background-color: rgb(255, 255, 255); \n  /* border-top: 1px solid #c2c2c2;  */\n  position: fixed; \n  bottom: 0; \n}\n\n.button-normal {\n  background-color: #1DA0FB; \n  color: white; \n  border-radius: 999px; \n  border: 1px solid #1DA0FB; \n  padding: 13px 25px; \n  margin: 0px 10px; \n  font-size: 14px; \n  width: 100px; \n\n}\n\nbutton:disabled, button:disabled:hover {\n  background-color: #8F8F8F; \n  border: 1px solid #8F8F8F; \n  cursor: default;\n}\n\n.button-normal:hover {\n  cursor: pointer; \n  background-color: #1191EB; \n  border-color: #1191EB; \n}\n\n#button-exit {\n  background-color: white; \n  border: 2px solid #B2230F; \n  color: #B2230F; \n}\n\n.button-reset {\n  background-color: white; \n  border: 1px solid #1191EB; \n  color: #1191EB; \n  border-radius: 500px; \n  padding: 3px; \n  cursor: pointer; \n  font-size: 12px; \n}\n\n.button-reset:hover {\n  background-color: #1191EB; \n  border: 1px solid #1191EB; \n  color: white; \n  border-radius: 500px; \n  padding: 3px; \n  cursor: pointer; \n}\n\n#button-exit:hover {\n  background-color: #DF3E28; \n  border-color: white; \n  color: white; \n\n}\n\n#helper-container {\n  display: flex; \n  flex-direction: row; \n  justify-content: space-between; \n  width: 75vw; \n  padding-top: 10px; \n  /* border: 1px solid black;  */\n}\n\n#helper-text {\n  font-size: 12px; \n  font-weight: lighter; \n  color: #808080; \n  text-align: center; \n}\n\n\n/* start styling objects here */\n\n.contrast-object {\n  width: 310px; \n  /* border: 1px solid black;  */\n  border-bottom: 1px solid #EFEFEF; \n  padding: 15px 0px; \n  display: flex; \n  flex-direction: row; \n  justify-content: space-between; \n}\n\n.preview-column {\n  display: flex; \n  flex-direction: column; \n  justify-content: space-between; \n}\n\n.preview {\n  height: 60px; \n  width: 60px; \n  border-radius: 10px; \n  background-color: #C4C4C4; \n  color: #25A5FF; \n  display: flex; \n  justify-content: center; \n  align-items: center; \n  font-size: 30px; \n  cursor: pointer; \n  /* border: 1px solid #c2c2c2;  */\n}\n.preview:hover {\n    opacity: .8; \n}\n\n.contrast-column {\n  display: flex; \n  flex-direction: column; \n  justify-content: top; \n  align-items: flex-start; \n  font-size: 14px; \n  font-weight: bold; \n  line-height: 14px; \n  /* border: 1px solid blue;  */\n}\n\n.recs-column {\n  display: flex; \n  flex-direction: column; \n  justify-content: space-between; \n  align-items: flex-start; \n  font-size: 14px; \n  font-weight: bold; \n  line-height: 14px; \n  /* border: 1px solid blue;  */\n}\n\n.row {\n  display: flex; \n  flex-direction: column; \n  align-items: flex-start; \n  padding-bottom: 5px; \n}\n\n.preview-mini {\n  height: 30px; \n  width: 30px; \n  background-color: #C4C4C4;\n  border: 1px solid white; \n  border-radius: 4px; \n  display: flex; \n  justify-content: center; \n  align-items: center; \n  margin-right: 5px; \n\n  font-weight: normal; \n  \n}\n\nh3 {\n  font-size: 12px; \n  font-weight: normal; \n  line-height: 23px; \n  padding: 0px; \n  margin: 0px; \n}\n\n.sliderText, .sliderBG {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 1px;\n  margin: 10px 0px; \n  border-radius: 15px;   \n  background: #C4C4C4;\n  outline: none;\n  opacity: 1;\n  -webkit-transition: .2s;\n  transition: opacity .2s;\n}\n\n.sliderText::-webkit-slider-thumb, .sliderBG::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%; \n  background: #1191EB;\n  cursor: pointer;\n}\n\n.sliderText::-moz-range-thumb, .sliderBG::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #1191EB;\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


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

  if (sourceMap && btoa) {
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

/***/ "./src/ui.css":
/*!********************!*\
  !*** ./src/ui.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./ui.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.css */ "./src/ui.css");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ui_css__WEBPACK_IMPORTED_MODULE_0__);

// initialization of pages 
document.getElementById('page-check-pass').style.visibility = "hidden";
document.getElementById('page-check-fail').style.visibility = "hidden";
document.getElementById("about").hidden = true;
document.getElementById('link-instructions').style.color = "black";
document.getElementById("link-instructions").onclick = () => {
    document.getElementById("link-instructions").style.color = "black";
    document.getElementById("link-about").style.color = "#929292";
    document.getElementById("page-intro").style.visibility = "visible";
    document.getElementById("about").hidden = true;
};
document.getElementById("link-about").onclick = () => {
    document.getElementById("link-about").style.color = "black";
    document.getElementById("link-instructions").style.color = "#929292";
    document.getElementById("page-intro").style.visibility = "hidden";
    document.getElementById("about").hidden = false;
};
if (!document.hasFocus()) {
    parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
}
window.addEventListener('blur', () => {
    parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
});
window.addEventListener('focus', () => {
    parent.postMessage({ pluginMessage: { type: 'window-focus' } }, '*');
});
// adding button functionality 
document.getElementById('button-exit').onclick = () => {
    var x = document.getElementsByClassName('contrast-object');
    for (var i = x.length - 1; i >= 0; i--) {
        x[i].parentNode.removeChild(x[i]);
    }
    document.getElementById('page-check-fail').style.visibility = "hidden";
    document.getElementById('page-check-pass').style.visibility = "hidden";
    document.getElementById('page-intro').style.visibility = "visible";
    document.getElementById('zero-state-nav').style.visibility = "visible";
    parent.postMessage({ pluginMessage: { type: 'check-done' } }, '*');
};
document.getElementById('button-done').onclick = () => {
    document.getElementById('page-check-fail').style.visibility = "hidden";
    document.getElementById('page-check-pass').style.visibility = "hidden";
    document.getElementById('page-intro').style.visibility = "visible";
    document.getElementById('zero-state-nav').style.visibility = "visible";
};
document.getElementById('button-check').onclick = () => {
    // disable this button if nothing is selected 
    // todo send message to parent to check for inaccessible text 
    parent.postMessage({ pluginMessage: { type: 'check-contrast' } }, '*');
};
//   document.getElementById('button-recheck').onclick = () => {
//     var x = document.getElementsByClassName('contrast-object'); 
//     for(var i = x.length - 1; i >= 0; i--) {
//         x[i].parentNode.removeChild(x[i]);
//     }
//     parent.postMessage({ pluginMessage: { type: 'check-contrast' } }, '*'); 
//     // 
// }
// receiving messages from parent 
onmessage = (event) => {
    var message = event.data.pluginMessage;
    if (message.type === 'disable-buttons') {
        document.getElementById('button-check').disabled = message.isDisabled;
    }
    else if (message.type === 'check-pass') {
        document.getElementById('page-intro').style.visibility = "hidden";
        document.getElementById('page-check-fail').style.visibility = "hidden";
        document.getElementById('page-check-pass').style.visibility = "visible";
        document.getElementById('zero-state-nav').style.visibility = "hidden";
    }
    else if (message.type === 'check-fail') {
        document.getElementById('page-intro').style.visibility = "hidden";
        document.getElementById('page-check-fail').style.visibility = "visible";
        document.getElementById('page-check-pass').style.visibility = "hidden";
        document.getElementById('zero-state-nav').style.visibility = "hidden";
        var inaccessibleTexts = message.inaccessibleTexts;
        var aaTexts = message.aaTexts;
        document.getElementById("header-fail").innerHTML = inaccessibleTexts.length + aaTexts.length;
        document.getElementById("frame-name").innerHTML = message.frameName;
        for (let t of inaccessibleTexts) {
            createFocusObject(t, true);
        }
        for (let t of aaTexts) {
            createFocusObject(t, false);
        }
    }
};
function createFocusObject(text, failedAll) {
    var contrastObject = document.createElement("div");
    contrastObject.className = "contrast-object";
    contrastObject.id = text["nodeID"];
    var previewColumn = document.createElement('div');
    previewColumn.className = "preview-column";
    var preview = document.createElement("div");
    preview.className = "preview";
    preview.innerHTML = "A";
    preview.style.fontSize = (text.fontSize >= 19) ? "30px" : "15px";
    preview.style.color = getRGB(text["textColor"]);
    preview.style.backgroundColor = getRGB(text["bgColor"]);
    preview.id = getRGB(text["textColor"]) + ":" + getRGB(text["bgColor"]);
    preview.onclick = () => {
        parent.postMessage({ pluginMessage: { type: 'select-node', id: contrastObject.id } }, '*');
    };
    var buttonReset = document.createElement("input");
    buttonReset.type = "button";
    buttonReset.className = "button-reset";
    buttonReset.value = "Reset";
    buttonReset.onclick = () => {
        // need to check this 
        document.getElementById(text["nodeID"]).getElementsByClassName("sliderText")[0].value = "0";
        document.getElementById(text["nodeID"]).getElementsByClassName("sliderBG")[0].value = "0";
        updateRGB(text["nodeID"], true, text.fontSize);
        updateRGB(text["nodeID"], false, text.fontSize);
        let aaChecks = failedAll ?
            "<span id='aa-fail'>&#10060; AA</span><span id='aaa-fail'>&#10060; AAA </span>" :
            "<span id='aa-pass'>&#9989; AA</span><span id='aaa-fail'>&#10060; AAA </span>";
        contrastColumn.innerHTML = "<h3>Contrast Ratio</h3>" + text["contrastRatio"] + "<br />&nbsp; <br />&nbsp;" + aaChecks;
    };
    previewColumn.appendChild(preview);
    previewColumn.appendChild(buttonReset);
    var recsColumn = document.createElement("div");
    recsColumn.className = "recs-column";
    var row1 = document.createElement("div");
    row1.className = "row";
    var h3 = document.createElement("h3");
    h3.innerHTML = "Text lightness";
    var input1 = document.createElement("input");
    input1.setAttribute("type", "range");
    input1.setAttribute("min", "-200");
    input1.setAttribute("max", "200");
    input1.setAttribute("value", "0");
    input1.className = "sliderText";
    input1.addEventListener("input", () => updateRGB(text["nodeID"], true, text.fontSize));
    row1.appendChild(h3);
    row1.appendChild(input1);
    var row2 = document.createElement("div");
    row2.className = "row";
    var h32 = document.createElement("h3");
    h32.innerHTML = "Background lightness";
    var input2 = document.createElement("input");
    input2.setAttribute("type", "range");
    input2.setAttribute("min", "-200");
    input2.setAttribute("max", "200");
    input2.setAttribute("value", "0");
    input2.className = "sliderBG";
    input2.addEventListener("input", () => updateRGB(text["nodeID"], false, text.fontSize));
    row2.appendChild(h32);
    row2.appendChild(input2);
    recsColumn.appendChild(row1);
    recsColumn.appendChild(row2);
    var contrastColumn = document.createElement("div");
    contrastColumn.className = "contrast-column";
    var aaChecks = failedAll ?
        "<span id='aa-fail'>&#10060; AA</span><span id='aaa-fail'>&#10060; AAA </span>" :
        "<span id='aa-pass'>&#9989; AA</span><span id='aaa-fail'>&#10060; AAA </span>";
    contrastColumn.innerHTML = "<h3>Contrast Ratio</h3>" + text["contrastRatio"] + "<br />&nbsp; <br />&nbsp;" + aaChecks;
    contrastObject.appendChild(previewColumn);
    contrastObject.appendChild(recsColumn);
    contrastObject.appendChild(contrastColumn);
    document.getElementById("page-check-fail").appendChild(contrastObject);
}
function getRGB(colorObject) {
    var finalColor = "rgb(";
    finalColor += Math.round(colorObject["r"] * 255) + ",";
    finalColor += Math.round(colorObject["g"] * 255) + ",";
    finalColor += Math.round(colorObject["b"] * 255) + ")";
    return finalColor;
}
// rgb, hex conversions 
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function updateRGB(id, updateText, fontSize) {
    // this gets hte amount to mod by 
    var inputRangeValue = (updateText) ?
        document.getElementById(id).getElementsByClassName("sliderText")[0].value :
        document.getElementById(id).getElementsByClassName("sliderBG")[0].value;
    // this gets the initial values 
    var elementToUpdate = document.getElementById(id).getElementsByClassName("preview")[0];
    var textColorInit = elementToUpdate.id.split(":")[0];
    var bgColor = elementToUpdate.id.split(":")[1];
    var initColorRGB = ((updateText) ? textColorInit : bgColor).split("rgb(")[1].split(")")[0].split(",");
    var initColorHex = rgbToHex(parseInt(initColorRGB[0]), parseInt(initColorRGB[1]), parseInt(initColorRGB[2]));
    var colorNew = getTintedColor(initColorHex, parseInt(inputRangeValue));
    var contrastRatio = 0;
    // set text or background 
    if (updateText) {
        elementToUpdate.style.color = colorNew;
    }
    else {
        elementToUpdate.style.backgroundColor = colorNew;
    }
    var backgroundColor = (window.getComputedStyle(elementToUpdate).getPropertyValue("background-color")).split("rgb(")[1].split(")")[0].split(",");
    var textColor = (window.getComputedStyle(elementToUpdate).getPropertyValue("color")).split("rgb(")[1].split(")")[0].split(",");
    contrastRatio = getContrast(Number(textColor[0]) / 255, Number(textColor[1]) / 255, Number(textColor[2]) / 255, Number(backgroundColor[0]) / 255, Number(backgroundColor[1]) / 255, Number(backgroundColor[2]) / 255);
    // send changes to parent 
    parent.postMessage({ pluginMessage: { type: 'update-colors', id: id, textColor: textColor, backgroundColor: backgroundColor } }, '*');
    var aaChecks = "";
    if (((fontSize >= 19) && (contrastRatio < 3)) || ((fontSize < 19) && (contrastRatio < 4.5))) {
        aaChecks = "<span id='aa-fail'>&#10060; AA</span><span id='aaa-fail'>&#10060; AAA </span>";
    }
    else if (((fontSize >= 19) && (contrastRatio < 4.5)) || ((fontSize < 19) && (contrastRatio < 7))) {
        aaChecks = "<span id='aa-pass'>&#9989; AA</span><span id='aaa-fail'>&#10060; AAA </span>";
    }
    else {
        aaChecks = "<span id='aa-pass'>&#9989; AA</span><span id='aaa-pass'>&#9989; AAA </span>";
    }
    // var contrastColumn = document.createElement("div"); 
    // contrastColumn.className = "contrast-column"; 
    document.getElementById(id).getElementsByClassName("contrast-column")[0].innerHTML = "<h3>Contrast Ratio</h3>" + contrastRatio + "<br />&nbsp; <br />&nbsp;" + aaChecks;
}
function getTintedColor(color, v) {
    if (color.length > 6) {
        color = color.substring(1, color.length);
    }
    var rgb = parseInt(color, 16);
    var r = Math.abs(((rgb >> 16) & 0xFF) + v);
    if (r > 255)
        r = r - (r - 255);
    var g = Math.abs(((rgb >> 8) & 0xFF) + v);
    if (g > 255)
        g = g - (g - 255);
    var b = Math.abs((rgb & 0xFF) + v);
    if (b > 255)
        b = b - (b - 255);
    var rf = (Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16));
    if (rf.length == 1)
        rf = '0' + rf;
    var gf = (Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16));
    if (gf.length == 1)
        gf = '0' + gf;
    var bf = (Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16));
    if (bf.length == 1)
        bf = '0' + bf;
    return "#" + rf + gf + bf;
}
function convertRGB(color) {
    if (color <= 0.04045)
        return color / 12.92;
    else
        return Math.pow((color + 0.055) / 1.055, 2.4);
}
;
function getContrast(tr, tg, tb, br, bg, bb) {
    var textLuminance = convertRGB(tr) * 0.2126 + convertRGB(tg) * 0.7152 + convertRGB(tb) * 0.0722;
    var bgLuminance = convertRGB(br) * 0.2126 + convertRGB(bg) * 0.7152 + convertRGB(bb) * 0.0722;
    var contrastRatio = (Math.max(textLuminance, bgLuminance) + 0.05) / (Math.min(textLuminance, bgLuminance) + 0.05);
    return parseFloat(contrastRatio.toFixed(2));
}
;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuY3NzP2M3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGFBQWEsa0JBQWtCLHdDQUF3Qyx1QkFBdUIsMEJBQTBCLDZCQUE2QixRQUFRLHFC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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3VpLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU291cmNlIFNhbnMgUHJvXFxcIjsgXFxuICAgIGZvbnQtc2l6ZTogMTRweDsgXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXFxuICAgIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cXG4gIH1cXG5cXG4jemVyby1zdGF0ZS1uYXYge1xcbiAgICBmb250LWZhbWlseTogXFxcIlNvdXJjZSBTYW5zIFByb1xcXCI7IFxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyA7IFxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U0RTNFMzsgXFxuICAgIHBhZGRpbmctbGVmdDogNnB4OyBcXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gICAgdG9wOiAwcHg7IFxcbiAgICBsZWZ0OiAwcHg7IFxcbiAgICB3aWR0aDogMTAwJTsgXFxuICAgIGhlaWdodDogMjVweDsgXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXFxufVxcblxcbiNhYm91dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuICAgIHRvcDogMzBweDsgXFxuICAgIGxlZnQ6IDBweDsgXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXFxuICAgIGhlaWdodDogODB2aDsgIFxcbiAgICBwYWRkaW5nOiA3NXB4IDUwcHg7IFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcbiAgICAvKiB2aXNpYmlsaXR5OiBoaWRkZW47ICAqL1xcbiAgfVxcblxcbiAgI2Fib3V0IHAge1xcbiAgICB3aWR0aDogMTAwJTsgXFxuICB9XFxuXFxuI3plcm8tc3RhdGUtbmF2IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxNHB4OyBcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7IFxcbiAgcGFkZGluZzogNXB4IDEwcHg7IFxcbiAgY29sb3I6ICM5MjkyOTI7IFxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcXG4gIGN1cnNvcjogcG9pbnRlcjsgXFxuICB3aWR0aDogNjVweDsgXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cXG59XFxuXFxuI3BhZ2UtaW50cm8sICNwYWdlLWNoZWNrLXBhc3MsICNwYWdlLWNoZWNrLWZhaWwge1xcbiAgd2lkdGg6IDEwMHZ3OyBcXG4gIC8qIGhlaWdodDogMTAwdmg7ICAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlOyBcXG4gIFxcbiAgbGVmdDogMHB4OyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIFxcXCJTZWdvZSBVSVxcXCI7IFxcbiAgZm9udC1zaXplOiAxNHB4OyBcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXFxuICBsaW5lLWhlaWdodDogMS4zZW07IFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXFxufVxcblxcbiNwYWdlLWludHJvLCAjcGFnZS1jaGVjay1wYXNzIHtcXG4gIGhlaWdodDogMTAwdmg7IFxcbiAgdG9wOiAzMHB4OyBcXG59XFxuXFxuI3BhZ2UtY2hlY2stZmFpbCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNzBweDsgXFxuICB0b3A6IDBweFxcbn1cXG5cXG4jcGFnZS1pbnRybywgI3BhZ2UtY2hlY2stcGFzcyB7XFxuICBoZWlnaHQ6IDgwdmg7IFxcbiAgfVxcblxcbiNwYWdlLWludHJvLCAjcGFnZS1jaGVjay1wYXNzIHtcXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7IFxcbn1cXG5cXG4jcHJlZmFjZSB7XFxuICB3aWR0aDogMzEwcHg7IFxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkVGRUY7IFxcbiAgZGlzcGxheTogZmxleDsgXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgcGFkZGluZzogMTBweCAwcHggMjBweCAwcHg7IFxcblxcbn1cXG5cXG5cXG5wIHtcXG4gIHdpZHRoOiA3MCU7IFxcbn1cXG5cXG4jaGVhZGVyLXBhc3Mge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgY29sb3I6ICMyRjczMUY7IFxcbn1cXG5cXG4uaGVhZGVyLWZhaWwge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgY29sb3I6ICNCMjIzMEY7IFxcbn1cXG5cXG4jY29udGFpbmVyLWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMHZ3OyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXFxuICBwYWRkaW5nOiAxNXB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsgXFxuICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgI2MyYzJjMjsgICovXFxuICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgYm90dG9tOiAwOyBcXG59XFxuXFxuLmJ1dHRvbi1ub3JtYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQTBGQjsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgIzFEQTBGQjsgXFxuICBwYWRkaW5nOiAxM3B4IDI1cHg7IFxcbiAgbWFyZ2luOiAwcHggMTBweDsgXFxuICBmb250LXNpemU6IDE0cHg7IFxcbiAgd2lkdGg6IDEwMHB4OyBcXG5cXG59XFxuXFxuYnV0dG9uOmRpc2FibGVkLCBidXR0b246ZGlzYWJsZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhGOEY4RjsgXFxuICBib3JkZXI6IDFweCBzb2xpZCAjOEY4RjhGOyBcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmJ1dHRvbi1ub3JtYWw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyOyBcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTkxRUI7IFxcbiAgYm9yZGVyLWNvbG9yOiAjMTE5MUVCOyBcXG59XFxuXFxuI2J1dHRvbi1leGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNCMjIzMEY7IFxcbiAgY29sb3I6ICNCMjIzMEY7IFxcbn1cXG5cXG4uYnV0dG9uLXJlc2V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTkxRUI7IFxcbiAgY29sb3I6ICMxMTkxRUI7IFxcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7IFxcbiAgcGFkZGluZzogM3B4OyBcXG4gIGN1cnNvcjogcG9pbnRlcjsgXFxuICBmb250LXNpemU6IDEycHg7IFxcbn1cXG5cXG4uYnV0dG9uLXJlc2V0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTkxRUI7IFxcbiAgYm9yZGVyOiAxcHggc29saWQgIzExOTFFQjsgXFxuICBjb2xvcjogd2hpdGU7IFxcbiAgYm9yZGVyLXJhZGl1czogNTAwcHg7IFxcbiAgcGFkZGluZzogM3B4OyBcXG4gIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcblxcbiNidXR0b24tZXhpdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREYzRTI4OyBcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7IFxcbiAgY29sb3I6IHdoaXRlOyBcXG5cXG59XFxuXFxuI2hlbHBlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICB3aWR0aDogNzV2dzsgXFxuICBwYWRkaW5nLXRvcDogMTBweDsgXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgICovXFxufVxcblxcbiNoZWxwZXItdGV4dCB7XFxuICBmb250LXNpemU6IDEycHg7IFxcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7IFxcbiAgY29sb3I6ICM4MDgwODA7IFxcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcXG59XFxuXFxuXFxuLyogc3RhcnQgc3R5bGluZyBvYmplY3RzIGhlcmUgKi9cXG5cXG4uY29udHJhc3Qtb2JqZWN0IHtcXG4gIHdpZHRoOiAzMTBweDsgXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgICovXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRUZFRjsgXFxuICBwYWRkaW5nOiAxNXB4IDBweDsgXFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXG59XFxuXFxuLnByZXZpZXctY29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcbn1cXG5cXG4ucHJldmlldyB7XFxuICBoZWlnaHQ6IDYwcHg7IFxcbiAgd2lkdGg6IDYwcHg7IFxcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0OyBcXG4gIGNvbG9yOiAjMjVBNUZGOyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBmb250LXNpemU6IDMwcHg7IFxcbiAgY3Vyc29yOiBwb2ludGVyOyBcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjMmMyYzI7ICAqL1xcbn1cXG4ucHJldmlldzpob3ZlciB7XFxuICAgIG9wYWNpdHk6IC44OyBcXG59XFxuXFxuLmNvbnRyYXN0LWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4OyBcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxcbiAganVzdGlmeS1jb250ZW50OiB0b3A7IFxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IFxcbiAgZm9udC1zaXplOiAxNHB4OyBcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyBcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4OyBcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xcbn1cXG5cXG4ucmVjcy1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgXFxuICBmb250LXNpemU6IDE0cHg7IFxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxcbiAgbGluZS1oZWlnaHQ6IDE0cHg7IFxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7IFxcbn1cXG5cXG4ucHJldmlldy1taW5pIHtcXG4gIGhlaWdodDogMzBweDsgXFxuICB3aWR0aDogMzBweDsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7IFxcbiAgYm9yZGVyLXJhZGl1czogNHB4OyBcXG4gIGRpc3BsYXk6IGZsZXg7IFxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxuICBtYXJnaW4tcmlnaHQ6IDVweDsgXFxuXFxuICBmb250LXdlaWdodDogbm9ybWFsOyBcXG4gIFxcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEycHg7IFxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgXFxuICBsaW5lLWhlaWdodDogMjNweDsgXFxuICBwYWRkaW5nOiAwcHg7IFxcbiAgbWFyZ2luOiAwcHg7IFxcbn1cXG5cXG4uc2xpZGVyVGV4dCwgLnNsaWRlckJHIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IDEwcHggMHB4OyBcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7ICAgXFxuICBiYWNrZ3JvdW5kOiAjQzRDNEM0O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4ycztcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xcbn1cXG5cXG4uc2xpZGVyVGV4dDo6LXdlYmtpdC1zbGlkZXItdGh1bWIsIC5zbGlkZXJCRzo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlOyBcXG4gIGJhY2tncm91bmQ6ICMxMTkxRUI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zbGlkZXJUZXh0OjotbW96LXJhbmdlLXRodW1iLCAuc2xpZGVyQkc6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMTE5MUVCO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQgJy4vdWkuY3NzJztcbi8vIGluaXRpYWxpemF0aW9uIG9mIHBhZ2VzIFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY2hlY2stcGFzcycpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY2hlY2stZmFpbCcpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dFwiKS5oaWRkZW4gPSB0cnVlO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmstaW5zdHJ1Y3Rpb25zJykuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstaW5zdHJ1Y3Rpb25zXCIpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rLWluc3RydWN0aW9uc1wiKS5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstYWJvdXRcIikuc3R5bGUuY29sb3IgPSBcIiM5MjkyOTJcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtaW50cm9cIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIikuaGlkZGVuID0gdHJ1ZTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstYWJvdXRcIikub25jbGljayA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmstYWJvdXRcIikuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5rLWluc3RydWN0aW9uc1wiKS5zdHlsZS5jb2xvciA9IFwiIzkyOTI5MlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS1pbnRyb1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpLmhpZGRlbiA9IGZhbHNlO1xufTtcbmlmICghZG9jdW1lbnQuaGFzRm9jdXMoKSkge1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3dpbmRvdy1ibHVyJyB9IH0sICcqJyk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICd3aW5kb3ctYmx1cicgfSB9LCAnKicpO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogeyB0eXBlOiAnd2luZG93LWZvY3VzJyB9IH0sICcqJyk7XG59KTtcbi8vIGFkZGluZyBidXR0b24gZnVuY3Rpb25hbGl0eSBcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tZXhpdCcpLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250cmFzdC1vYmplY3QnKTtcbiAgICBmb3IgKHZhciBpID0geC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICB4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNoZWNrLWZhaWwnKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jaGVjay1wYXNzJykuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtaW50cm8nKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3plcm8tc3RhdGUtbmF2Jykuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2NoZWNrLWRvbmUnIH0gfSwgJyonKTtcbn07XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWRvbmUnKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlLWNoZWNrLWZhaWwnKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jaGVjay1wYXNzJykuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtaW50cm8nKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3plcm8tc3RhdGUtbmF2Jykuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xufTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY2hlY2snKS5vbmNsaWNrID0gKCkgPT4ge1xuICAgIC8vIGRpc2FibGUgdGhpcyBidXR0b24gaWYgbm90aGluZyBpcyBzZWxlY3RlZCBcbiAgICAvLyB0b2RvIHNlbmQgbWVzc2FnZSB0byBwYXJlbnQgdG8gY2hlY2sgZm9yIGluYWNjZXNzaWJsZSB0ZXh0IFxuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ2NoZWNrLWNvbnRyYXN0JyB9IH0sICcqJyk7XG59O1xuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLXJlY2hlY2snKS5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udHJhc3Qtb2JqZWN0Jyk7IFxuLy8gICAgIGZvcih2YXIgaSA9IHgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbi8vICAgICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO1xuLy8gICAgIH1cbi8vICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBwbHVnaW5NZXNzYWdlOiB7IHR5cGU6ICdjaGVjay1jb250cmFzdCcgfSB9LCAnKicpOyBcbi8vICAgICAvLyBcbi8vIH1cbi8vIHJlY2VpdmluZyBtZXNzYWdlcyBmcm9tIHBhcmVudCBcbm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIHZhciBtZXNzYWdlID0gZXZlbnQuZGF0YS5wbHVnaW5NZXNzYWdlO1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdkaXNhYmxlLWJ1dHRvbnMnKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY2hlY2snKS5kaXNhYmxlZCA9IG1lc3NhZ2UuaXNEaXNhYmxlZDtcbiAgICB9XG4gICAgZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2hlY2stcGFzcycpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtaW50cm8nKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY2hlY2stZmFpbCcpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS1jaGVjay1wYXNzJykuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemVyby1zdGF0ZS1uYXYnKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobWVzc2FnZS50eXBlID09PSAnY2hlY2stZmFpbCcpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtaW50cm8nKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY2hlY2stZmFpbCcpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtY2hlY2stcGFzcycpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnemVyby1zdGF0ZS1uYXYnKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdmFyIGluYWNjZXNzaWJsZVRleHRzID0gbWVzc2FnZS5pbmFjY2Vzc2libGVUZXh0cztcbiAgICAgICAgdmFyIGFhVGV4dHMgPSBtZXNzYWdlLmFhVGV4dHM7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWZhaWxcIikuaW5uZXJIVE1MID0gaW5hY2Nlc3NpYmxlVGV4dHMubGVuZ3RoICsgYWFUZXh0cy5sZW5ndGg7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJhbWUtbmFtZVwiKS5pbm5lckhUTUwgPSBtZXNzYWdlLmZyYW1lTmFtZTtcbiAgICAgICAgZm9yIChsZXQgdCBvZiBpbmFjY2Vzc2libGVUZXh0cykge1xuICAgICAgICAgICAgY3JlYXRlRm9jdXNPYmplY3QodCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgdCBvZiBhYVRleHRzKSB7XG4gICAgICAgICAgICBjcmVhdGVGb2N1c09iamVjdCh0LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlRm9jdXNPYmplY3QodGV4dCwgZmFpbGVkQWxsKSB7XG4gICAgdmFyIGNvbnRyYXN0T2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cmFzdE9iamVjdC5jbGFzc05hbWUgPSBcImNvbnRyYXN0LW9iamVjdFwiO1xuICAgIGNvbnRyYXN0T2JqZWN0LmlkID0gdGV4dFtcIm5vZGVJRFwiXTtcbiAgICB2YXIgcHJldmlld0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByZXZpZXdDb2x1bW4uY2xhc3NOYW1lID0gXCJwcmV2aWV3LWNvbHVtblwiO1xuICAgIHZhciBwcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmV2aWV3LmNsYXNzTmFtZSA9IFwicHJldmlld1wiO1xuICAgIHByZXZpZXcuaW5uZXJIVE1MID0gXCJBXCI7XG4gICAgcHJldmlldy5zdHlsZS5mb250U2l6ZSA9ICh0ZXh0LmZvbnRTaXplID49IDE5KSA/IFwiMzBweFwiIDogXCIxNXB4XCI7XG4gICAgcHJldmlldy5zdHlsZS5jb2xvciA9IGdldFJHQih0ZXh0W1widGV4dENvbG9yXCJdKTtcbiAgICBwcmV2aWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldFJHQih0ZXh0W1wiYmdDb2xvclwiXSk7XG4gICAgcHJldmlldy5pZCA9IGdldFJHQih0ZXh0W1widGV4dENvbG9yXCJdKSArIFwiOlwiICsgZ2V0UkdCKHRleHRbXCJiZ0NvbG9yXCJdKTtcbiAgICBwcmV2aWV3Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3NlbGVjdC1ub2RlJywgaWQ6IGNvbnRyYXN0T2JqZWN0LmlkIH0gfSwgJyonKTtcbiAgICB9O1xuICAgIHZhciBidXR0b25SZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBidXR0b25SZXNldC50eXBlID0gXCJidXR0b25cIjtcbiAgICBidXR0b25SZXNldC5jbGFzc05hbWUgPSBcImJ1dHRvbi1yZXNldFwiO1xuICAgIGJ1dHRvblJlc2V0LnZhbHVlID0gXCJSZXNldFwiO1xuICAgIGJ1dHRvblJlc2V0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIC8vIG5lZWQgdG8gY2hlY2sgdGhpcyBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGV4dFtcIm5vZGVJRFwiXSkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlclRleHRcIilbMF0udmFsdWUgPSBcIjBcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGV4dFtcIm5vZGVJRFwiXSkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlckJHXCIpWzBdLnZhbHVlID0gXCIwXCI7XG4gICAgICAgIHVwZGF0ZVJHQih0ZXh0W1wibm9kZUlEXCJdLCB0cnVlLCB0ZXh0LmZvbnRTaXplKTtcbiAgICAgICAgdXBkYXRlUkdCKHRleHRbXCJub2RlSURcIl0sIGZhbHNlLCB0ZXh0LmZvbnRTaXplKTtcbiAgICAgICAgbGV0IGFhQ2hlY2tzID0gZmFpbGVkQWxsID9cbiAgICAgICAgICAgIFwiPHNwYW4gaWQ9J2FhLWZhaWwnPiYjMTAwNjA7IEFBPC9zcGFuPjxzcGFuIGlkPSdhYWEtZmFpbCc+JiMxMDA2MDsgQUFBIDwvc3Bhbj5cIiA6XG4gICAgICAgICAgICBcIjxzcGFuIGlkPSdhYS1wYXNzJz4mIzk5ODk7IEFBPC9zcGFuPjxzcGFuIGlkPSdhYWEtZmFpbCc+JiMxMDA2MDsgQUFBIDwvc3Bhbj5cIjtcbiAgICAgICAgY29udHJhc3RDb2x1bW4uaW5uZXJIVE1MID0gXCI8aDM+Q29udHJhc3QgUmF0aW88L2gzPlwiICsgdGV4dFtcImNvbnRyYXN0UmF0aW9cIl0gKyBcIjxiciAvPiZuYnNwOyA8YnIgLz4mbmJzcDtcIiArIGFhQ2hlY2tzO1xuICAgIH07XG4gICAgcHJldmlld0NvbHVtbi5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICBwcmV2aWV3Q29sdW1uLmFwcGVuZENoaWxkKGJ1dHRvblJlc2V0KTtcbiAgICB2YXIgcmVjc0NvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVjc0NvbHVtbi5jbGFzc05hbWUgPSBcInJlY3MtY29sdW1uXCI7XG4gICAgdmFyIHJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdzEuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICB2YXIgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaDMuaW5uZXJIVE1MID0gXCJUZXh0IGxpZ2h0bmVzc1wiO1xuICAgIHZhciBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiLTIwMFwiKTtcbiAgICBpbnB1dDEuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMjAwXCIpO1xuICAgIGlucHV0MS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjBcIik7XG4gICAgaW5wdXQxLmNsYXNzTmFtZSA9IFwic2xpZGVyVGV4dFwiO1xuICAgIGlucHV0MS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4gdXBkYXRlUkdCKHRleHRbXCJub2RlSURcIl0sIHRydWUsIHRleHQuZm9udFNpemUpKTtcbiAgICByb3cxLmFwcGVuZENoaWxkKGgzKTtcbiAgICByb3cxLmFwcGVuZENoaWxkKGlucHV0MSk7XG4gICAgdmFyIHJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJvdzIuY2xhc3NOYW1lID0gXCJyb3dcIjtcbiAgICB2YXIgaDMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGgzMi5pbm5lckhUTUwgPSBcIkJhY2tncm91bmQgbGlnaHRuZXNzXCI7XG4gICAgdmFyIGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dDIuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xuICAgIGlucHV0Mi5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCItMjAwXCIpO1xuICAgIGlucHV0Mi5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIyMDBcIik7XG4gICAgaW5wdXQyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMFwiKTtcbiAgICBpbnB1dDIuY2xhc3NOYW1lID0gXCJzbGlkZXJCR1wiO1xuICAgIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4gdXBkYXRlUkdCKHRleHRbXCJub2RlSURcIl0sIGZhbHNlLCB0ZXh0LmZvbnRTaXplKSk7XG4gICAgcm93Mi5hcHBlbmRDaGlsZChoMzIpO1xuICAgIHJvdzIuYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICByZWNzQ29sdW1uLmFwcGVuZENoaWxkKHJvdzEpO1xuICAgIHJlY3NDb2x1bW4uYXBwZW5kQ2hpbGQocm93Mik7XG4gICAgdmFyIGNvbnRyYXN0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cmFzdENvbHVtbi5jbGFzc05hbWUgPSBcImNvbnRyYXN0LWNvbHVtblwiO1xuICAgIHZhciBhYUNoZWNrcyA9IGZhaWxlZEFsbCA/XG4gICAgICAgIFwiPHNwYW4gaWQ9J2FhLWZhaWwnPiYjMTAwNjA7IEFBPC9zcGFuPjxzcGFuIGlkPSdhYWEtZmFpbCc+JiMxMDA2MDsgQUFBIDwvc3Bhbj5cIiA6XG4gICAgICAgIFwiPHNwYW4gaWQ9J2FhLXBhc3MnPiYjOTk4OTsgQUE8L3NwYW4+PHNwYW4gaWQ9J2FhYS1mYWlsJz4mIzEwMDYwOyBBQUEgPC9zcGFuPlwiO1xuICAgIGNvbnRyYXN0Q29sdW1uLmlubmVySFRNTCA9IFwiPGgzPkNvbnRyYXN0IFJhdGlvPC9oMz5cIiArIHRleHRbXCJjb250cmFzdFJhdGlvXCJdICsgXCI8YnIgLz4mbmJzcDsgPGJyIC8+Jm5ic3A7XCIgKyBhYUNoZWNrcztcbiAgICBjb250cmFzdE9iamVjdC5hcHBlbmRDaGlsZChwcmV2aWV3Q29sdW1uKTtcbiAgICBjb250cmFzdE9iamVjdC5hcHBlbmRDaGlsZChyZWNzQ29sdW1uKTtcbiAgICBjb250cmFzdE9iamVjdC5hcHBlbmRDaGlsZChjb250cmFzdENvbHVtbik7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLWNoZWNrLWZhaWxcIikuYXBwZW5kQ2hpbGQoY29udHJhc3RPYmplY3QpO1xufVxuZnVuY3Rpb24gZ2V0UkdCKGNvbG9yT2JqZWN0KSB7XG4gICAgdmFyIGZpbmFsQ29sb3IgPSBcInJnYihcIjtcbiAgICBmaW5hbENvbG9yICs9IE1hdGgucm91bmQoY29sb3JPYmplY3RbXCJyXCJdICogMjU1KSArIFwiLFwiO1xuICAgIGZpbmFsQ29sb3IgKz0gTWF0aC5yb3VuZChjb2xvck9iamVjdFtcImdcIl0gKiAyNTUpICsgXCIsXCI7XG4gICAgZmluYWxDb2xvciArPSBNYXRoLnJvdW5kKGNvbG9yT2JqZWN0W1wiYlwiXSAqIDI1NSkgKyBcIilcIjtcbiAgICByZXR1cm4gZmluYWxDb2xvcjtcbn1cbi8vIHJnYiwgaGV4IGNvbnZlcnNpb25zIFxuZnVuY3Rpb24gcmdiVG9IZXgociwgZywgYikge1xuICAgIHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAociA8PCAxNikgKyAoZyA8PCA4KSArIGIpLnRvU3RyaW5nKDE2KS5zbGljZSgxKTtcbn1cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0ID8ge1xuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gICAgfSA6IG51bGw7XG59XG5mdW5jdGlvbiB1cGRhdGVSR0IoaWQsIHVwZGF0ZVRleHQsIGZvbnRTaXplKSB7XG4gICAgLy8gdGhpcyBnZXRzIGh0ZSBhbW91bnQgdG8gbW9kIGJ5IFxuICAgIHZhciBpbnB1dFJhbmdlVmFsdWUgPSAodXBkYXRlVGV4dCkgP1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlclRleHRcIilbMF0udmFsdWUgOlxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNsaWRlckJHXCIpWzBdLnZhbHVlO1xuICAgIC8vIHRoaXMgZ2V0cyB0aGUgaW5pdGlhbCB2YWx1ZXMgXG4gICAgdmFyIGVsZW1lbnRUb1VwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJldmlld1wiKVswXTtcbiAgICB2YXIgdGV4dENvbG9ySW5pdCA9IGVsZW1lbnRUb1VwZGF0ZS5pZC5zcGxpdChcIjpcIilbMF07XG4gICAgdmFyIGJnQ29sb3IgPSBlbGVtZW50VG9VcGRhdGUuaWQuc3BsaXQoXCI6XCIpWzFdO1xuICAgIHZhciBpbml0Q29sb3JSR0IgPSAoKHVwZGF0ZVRleHQpID8gdGV4dENvbG9ySW5pdCA6IGJnQ29sb3IpLnNwbGl0KFwicmdiKFwiKVsxXS5zcGxpdChcIilcIilbMF0uc3BsaXQoXCIsXCIpO1xuICAgIHZhciBpbml0Q29sb3JIZXggPSByZ2JUb0hleChwYXJzZUludChpbml0Q29sb3JSR0JbMF0pLCBwYXJzZUludChpbml0Q29sb3JSR0JbMV0pLCBwYXJzZUludChpbml0Q29sb3JSR0JbMl0pKTtcbiAgICB2YXIgY29sb3JOZXcgPSBnZXRUaW50ZWRDb2xvcihpbml0Q29sb3JIZXgsIHBhcnNlSW50KGlucHV0UmFuZ2VWYWx1ZSkpO1xuICAgIHZhciBjb250cmFzdFJhdGlvID0gMDtcbiAgICAvLyBzZXQgdGV4dCBvciBiYWNrZ3JvdW5kIFxuICAgIGlmICh1cGRhdGVUZXh0KSB7XG4gICAgICAgIGVsZW1lbnRUb1VwZGF0ZS5zdHlsZS5jb2xvciA9IGNvbG9yTmV3O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZWxlbWVudFRvVXBkYXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yTmV3O1xuICAgIH1cbiAgICB2YXIgYmFja2dyb3VuZENvbG9yID0gKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnRUb1VwZGF0ZSkuZ2V0UHJvcGVydHlWYWx1ZShcImJhY2tncm91bmQtY29sb3JcIikpLnNwbGl0KFwicmdiKFwiKVsxXS5zcGxpdChcIilcIilbMF0uc3BsaXQoXCIsXCIpO1xuICAgIHZhciB0ZXh0Q29sb3IgPSAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudFRvVXBkYXRlKS5nZXRQcm9wZXJ0eVZhbHVlKFwiY29sb3JcIikpLnNwbGl0KFwicmdiKFwiKVsxXS5zcGxpdChcIilcIilbMF0uc3BsaXQoXCIsXCIpO1xuICAgIGNvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdChOdW1iZXIodGV4dENvbG9yWzBdKSAvIDI1NSwgTnVtYmVyKHRleHRDb2xvclsxXSkgLyAyNTUsIE51bWJlcih0ZXh0Q29sb3JbMl0pIC8gMjU1LCBOdW1iZXIoYmFja2dyb3VuZENvbG9yWzBdKSAvIDI1NSwgTnVtYmVyKGJhY2tncm91bmRDb2xvclsxXSkgLyAyNTUsIE51bWJlcihiYWNrZ3JvdW5kQ29sb3JbMl0pIC8gMjU1KTtcbiAgICAvLyBzZW5kIGNoYW5nZXMgdG8gcGFyZW50IFxuICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IHBsdWdpbk1lc3NhZ2U6IHsgdHlwZTogJ3VwZGF0ZS1jb2xvcnMnLCBpZDogaWQsIHRleHRDb2xvcjogdGV4dENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciB9IH0sICcqJyk7XG4gICAgdmFyIGFhQ2hlY2tzID0gXCJcIjtcbiAgICBpZiAoKChmb250U2l6ZSA+PSAxOSkgJiYgKGNvbnRyYXN0UmF0aW8gPCAzKSkgfHwgKChmb250U2l6ZSA8IDE5KSAmJiAoY29udHJhc3RSYXRpbyA8IDQuNSkpKSB7XG4gICAgICAgIGFhQ2hlY2tzID0gXCI8c3BhbiBpZD0nYWEtZmFpbCc+JiMxMDA2MDsgQUE8L3NwYW4+PHNwYW4gaWQ9J2FhYS1mYWlsJz4mIzEwMDYwOyBBQUEgPC9zcGFuPlwiO1xuICAgIH1cbiAgICBlbHNlIGlmICgoKGZvbnRTaXplID49IDE5KSAmJiAoY29udHJhc3RSYXRpbyA8IDQuNSkpIHx8ICgoZm9udFNpemUgPCAxOSkgJiYgKGNvbnRyYXN0UmF0aW8gPCA3KSkpIHtcbiAgICAgICAgYWFDaGVja3MgPSBcIjxzcGFuIGlkPSdhYS1wYXNzJz4mIzk5ODk7IEFBPC9zcGFuPjxzcGFuIGlkPSdhYWEtZmFpbCc+JiMxMDA2MDsgQUFBIDwvc3Bhbj5cIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFhQ2hlY2tzID0gXCI8c3BhbiBpZD0nYWEtcGFzcyc+JiM5OTg5OyBBQTwvc3Bhbj48c3BhbiBpZD0nYWFhLXBhc3MnPiYjOTk4OTsgQUFBIDwvc3Bhbj5cIjtcbiAgICB9XG4gICAgLy8gdmFyIGNvbnRyYXN0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgLy8gY29udHJhc3RDb2x1bW4uY2xhc3NOYW1lID0gXCJjb250cmFzdC1jb2x1bW5cIjsgXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250cmFzdC1jb2x1bW5cIilbMF0uaW5uZXJIVE1MID0gXCI8aDM+Q29udHJhc3QgUmF0aW88L2gzPlwiICsgY29udHJhc3RSYXRpbyArIFwiPGJyIC8+Jm5ic3A7IDxiciAvPiZuYnNwO1wiICsgYWFDaGVja3M7XG59XG5mdW5jdGlvbiBnZXRUaW50ZWRDb2xvcihjb2xvciwgdikge1xuICAgIGlmIChjb2xvci5sZW5ndGggPiA2KSB7XG4gICAgICAgIGNvbG9yID0gY29sb3Iuc3Vic3RyaW5nKDEsIGNvbG9yLmxlbmd0aCk7XG4gICAgfVxuICAgIHZhciByZ2IgPSBwYXJzZUludChjb2xvciwgMTYpO1xuICAgIHZhciByID0gTWF0aC5hYnMoKChyZ2IgPj4gMTYpICYgMHhGRikgKyB2KTtcbiAgICBpZiAociA+IDI1NSlcbiAgICAgICAgciA9IHIgLSAociAtIDI1NSk7XG4gICAgdmFyIGcgPSBNYXRoLmFicygoKHJnYiA+PiA4KSAmIDB4RkYpICsgdik7XG4gICAgaWYgKGcgPiAyNTUpXG4gICAgICAgIGcgPSBnIC0gKGcgLSAyNTUpO1xuICAgIHZhciBiID0gTWF0aC5hYnMoKHJnYiAmIDB4RkYpICsgdik7XG4gICAgaWYgKGIgPiAyNTUpXG4gICAgICAgIGIgPSBiIC0gKGIgLSAyNTUpO1xuICAgIHZhciByZiA9IChOdW1iZXIociA8IDAgfHwgaXNOYU4ocikpID8gMCA6ICgociA+IDI1NSkgPyAyNTUgOiByKS50b1N0cmluZygxNikpO1xuICAgIGlmIChyZi5sZW5ndGggPT0gMSlcbiAgICAgICAgcmYgPSAnMCcgKyByZjtcbiAgICB2YXIgZ2YgPSAoTnVtYmVyKGcgPCAwIHx8IGlzTmFOKGcpKSA/IDAgOiAoKGcgPiAyNTUpID8gMjU1IDogZykudG9TdHJpbmcoMTYpKTtcbiAgICBpZiAoZ2YubGVuZ3RoID09IDEpXG4gICAgICAgIGdmID0gJzAnICsgZ2Y7XG4gICAgdmFyIGJmID0gKE51bWJlcihiIDwgMCB8fCBpc05hTihiKSkgPyAwIDogKChiID4gMjU1KSA/IDI1NSA6IGIpLnRvU3RyaW5nKDE2KSk7XG4gICAgaWYgKGJmLmxlbmd0aCA9PSAxKVxuICAgICAgICBiZiA9ICcwJyArIGJmO1xuICAgIHJldHVybiBcIiNcIiArIHJmICsgZ2YgKyBiZjtcbn1cbmZ1bmN0aW9uIGNvbnZlcnRSR0IoY29sb3IpIHtcbiAgICBpZiAoY29sb3IgPD0gMC4wNDA0NSlcbiAgICAgICAgcmV0dXJuIGNvbG9yIC8gMTIuOTI7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gTWF0aC5wb3coKGNvbG9yICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG59XG47XG5mdW5jdGlvbiBnZXRDb250cmFzdCh0ciwgdGcsIHRiLCBiciwgYmcsIGJiKSB7XG4gICAgdmFyIHRleHRMdW1pbmFuY2UgPSBjb252ZXJ0UkdCKHRyKSAqIDAuMjEyNiArIGNvbnZlcnRSR0IodGcpICogMC43MTUyICsgY29udmVydFJHQih0YikgKiAwLjA3MjI7XG4gICAgdmFyIGJnTHVtaW5hbmNlID0gY29udmVydFJHQihicikgKiAwLjIxMjYgKyBjb252ZXJ0UkdCKGJnKSAqIDAuNzE1MiArIGNvbnZlcnRSR0IoYmIpICogMC4wNzIyO1xuICAgIHZhciBjb250cmFzdFJhdGlvID0gKE1hdGgubWF4KHRleHRMdW1pbmFuY2UsIGJnTHVtaW5hbmNlKSArIDAuMDUpIC8gKE1hdGgubWluKHRleHRMdW1pbmFuY2UsIGJnTHVtaW5hbmNlKSArIDAuMDUpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGNvbnRyYXN0UmF0aW8udG9GaXhlZCgyKSk7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9