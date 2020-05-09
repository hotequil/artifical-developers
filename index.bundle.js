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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/accessibility.js":
/*!******************************************!*\
  !*** ./src/javascripts/accessibility.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('.accessibility-bar__button').on('click keydown', function(e){\n    if((e.type === \"keydown\" && e.keyCode === 13) || e.type === \"click\") {\n        e.preventDefault();\n\n        let body = $('body');\n        let bodyFontSize = $('body').css(\"fontSize\");\n\n        if(e.currentTarget.innerHTML.includes('A+')){\n            if(bodyFontSize === '16px' || bodyFontSize === ''){\n                body.css('fontSize', '17px');\n            } else if(bodyFontSize === '17px'){\n                body.css('fontSize', '18px');\n            };\n        } else if(e.currentTarget.innerHTML.includes('A-')){\n            if(bodyFontSize === '18px'){\n                body.css('fontSize', '17px');\n            } else if(bodyFontSize === '17px'){\n                body.css('fontSize', '16px');\n            };\n        } else if(e.currentTarget.innerHTML === 'Alto contraste'){\n            body.toggleClass('high-contrast');\n        };\n    };\n});\n\n//# sourceURL=webpack:///./src/javascripts/accessibility.js?");

/***/ }),

/***/ "./src/javascripts/fancy-scroll.js":
/*!*****************************************!*\
  !*** ./src/javascripts/fancy-scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('a[href^=\"#\"]').on('click', function(e) {\n    e.preventDefault();\n\n    let id = $(this).attr('href'), targetOffset = $(id).offset().top;\n\n    $('.menu-bar--mobile').removeClass('in');\n    $('.menu-hamburguer').removeClass('open');\n\n    $('html, body').animate({\n        scrollTop: targetOffset - 332\n    }, 750);\n\n    setTimeout(function(){\n        if($(id).find('h2').length){\n            $(id).find('h2').focus();\n        } else{\n            $('.presentation__title').focus();\n        };\n    }, 750);\n});\n\n//# sourceURL=webpack:///./src/javascripts/fancy-scroll.js?");

/***/ }),

/***/ "./src/javascripts/menu-control.js":
/*!*****************************************!*\
  !*** ./src/javascripts/menu-control.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let listItems = ['.list__item', '.list__item--mobile'];\nlet hashValue = '#home';\n\n$(listItems.toString()).on('click keydown', function(e) {\n    if((e.type === \"keydown\" && e.keyCode === 13) || e.type === \"click\") {\n        addClass(this);\n    };\n});\n\n$( window ).resize(function(e) {\n    let elementDesktop = $(\"a[href='\" + hashValue + \"'].list__item__link\")[0].parentNode;\n    let elementMobile = $(\"a[href='\" + hashValue + \"'].list__item__link--mobile\")[0].parentNode;\n\n    addClass(elementDesktop, elementMobile);\n});\n\nfunction addClass(...elems) {\n    listItems.forEach(function (item) {\n        $(item).removeClass('list__item--active');\n        $(item).removeClass('list__item--active--mobile');\n    });\n\n    hashValue = $(elems).find('a')[0].hash;\n\n    elems.forEach(function(item){\n        $(item).addClass('list__item--active list__item--active--mobile');\n    });\n}\n\n//# sourceURL=webpack:///./src/javascripts/menu-control.js?");

/***/ }),

/***/ "./src/javascripts/menu-hamburguer.js":
/*!********************************************!*\
  !*** ./src/javascripts/menu-hamburguer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\n    $('.menu-hamburguer').click(function(){\n        menuOpenAndClose();\n    });\n\n    $('.menu-hamburguer').keyup(function(event){\n        if (event.keyCode === 13) {\n            menuOpenAndClose();\n        }\n    });\n\n    function menuOpenAndClose() {\n        $('.menu-hamburguer').toggleClass('open');\n        $('.menu-bar--mobile').toggleClass('in');\n    }\n});\n\n$( window ).resize(function(e) {\n    let browserWidth = this.innerWidth;\n\n    if(browserWidth <= 1100){\n        $('.menu-hamburguer').removeClass('open');\n        $('.menu-bar--mobile').removeClass('in');\n    };\n});\n\n//# sourceURL=webpack:///./src/javascripts/menu-hamburguer.js?");

/***/ }),

/***/ "./src/javascripts/minify-texts.js":
/*!*****************************************!*\
  !*** ./src/javascripts/minify-texts.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$( window ).resize(function(e){\n    let browserWidth = this.innerWidth;\n\n    $('.section__text.ethical-commitment__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod... <br/><a href=\"/\" class=\"presentation__link presentation__link--white presentation__link--read-more\">Read more about ethic</a>' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue. Sit amet venenatis urna cursus eget nunc scelerisque viverra.';\n    $('.presentation__text')[0].innerHTML = browserWidth <= 600 ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';\n\n    [...$('.trail-card__text')].forEach(function(item, index){\n        if(browserWidth <= 800) {\n            item.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore... <br/><a href=\"/\" class=\"presentation__link presentation__link--read-more\">Read more about ${index === 0 ? 'database' : index === 1 ? 'interface' : 'hardware'}</a>`;\n        } else{\n            item.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus molestie nunc non blandit massa enim nec. Sed faucibus turpis in eu mi bibendum neque egestas congue.';\n        };\n    });\n\n    [...$('.card__text')].forEach(function(item, index){\n        if(browserWidth <= 500) {\n            item.innerHTML = `Nunc sed blandit libero volutpat sed cras... <br/><a href=\"/\" class=\"presentation__link presentation__link--read-more\">Read more about ${index === 0 ? 'practicality' : index === 1 ? 'safety' : 'structure'}</a>`;\n        } else{\n            item.innerHTML = 'Nunc sed blandit libero volutpat sed cras. Porttitor lacus luctus accumsan tortor posuere ac ut. Elementum facilisis leo vel fringilla. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.';\n        };\n    });\n});\n\n//# sourceURL=webpack:///./src/javascripts/minify-texts.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** multi ./src/javascripts/menu-hamburguer.js ./src/javascripts/menu-control.js ./src/javascripts/minify-texts.js ./src/javascripts/fancy-scroll.js ./src/javascripts/accessibility.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/javascripts/menu-hamburguer.js */\"./src/javascripts/menu-hamburguer.js\");\n__webpack_require__(/*! ./src/javascripts/menu-control.js */\"./src/javascripts/menu-control.js\");\n__webpack_require__(/*! ./src/javascripts/minify-texts.js */\"./src/javascripts/minify-texts.js\");\n__webpack_require__(/*! ./src/javascripts/fancy-scroll.js */\"./src/javascripts/fancy-scroll.js\");\nmodule.exports = __webpack_require__(/*! ./src/javascripts/accessibility.js */\"./src/javascripts/accessibility.js\");\n\n\n//# sourceURL=webpack:///multi_./src/javascripts/menu-hamburguer.js_./src/javascripts/menu-control.js_./src/javascripts/minify-texts.js_./src/javascripts/fancy-scroll.js_./src/javascripts/accessibility.js?");

/***/ })

/******/ });