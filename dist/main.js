/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* TO DO LIST APP STYLES */\\n\\n/* Global Styles */\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nmain {\\n  display: flex;\\n  justify-content: center;\\n  align-content: center;\\n}\\n\\n/* Typography */\\n\\nh1 {\\n  font-family: 'Roboto', sans-serif;\\n  font-weight: 600;\\n  font-size: 1.5em;\\n}\\n\\ninput,\\nlabel {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 1em;\\n}\\n\\n/* App Styles */\\n\\n.app-container {\\n  margin: 3em 0;\\n  width: 80%;\\n  max-width: 500px;\\n  padding: 0.05em;\\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);\\n}\\n\\n.app-header,\\n.list-input,\\n.list-item {\\n  height: 40px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  border-bottom: 1px solid #d3d3d3;\\n  padding: 0 0.5em;\\n}\\n\\n.task-input {\\n  width: 80%;\\n  height: 30px;\\n  padding: 0.3em 0.6em;\\n  border: none;\\n}\\n\\n.clear {\\n  width: 100%;\\n  height: 40px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.task-display {\\n  display: flex;\\n  align-items: center;\\n  gap: 0.4em;\\n}\\n\\ninput[name=\\\"tasks-item\\\"] {\\n  border: none;\\n}\\n\\ninput[name=\\\"tasks-item\\\"]:focus,\\ninput[name=\\\"task-input\\\"]:focus {\\n  outline: none;\\n  border: none;\\n}\\n\\n/* Icons Styles */\\n\\n.fa-solid {\\n  color: #b0b0b0;\\n  font-size: 18px;\\n  cursor: pointer;\\n}\\n\\n.func {\\n  display: block;\\n}\\n\\n.fa-trash-can {\\n  display: none;\\n}\\n\\n/* Checkbox Styles */\\n\\ninput[type=\\\"checkbox\\\"] {\\n  appearance: none;\\n  content: '';\\n  height: 20px;\\n  width: 20px;\\n  background-color: #fff;\\n  border: 1px solid #b0b0b0;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  transition: 0.3s all ease-in-out;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  outline: none;\\n}\\n\\ninput[type=\\\"checkbox\\\"]::after {\\n  content: '\\\\f00c';\\n  font-family: 'FontAwesome', sans-serif;\\n  font-weight: 800;\\n  font-size: 18px;\\n  color: blue;\\n  background: none;\\n  display: none;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:hover {\\n  background: #b0b0b0;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked {\\n  background: #fff;\\n  border: none;\\n}\\n\\ninput[type=\\\"checkbox\\\"]:checked::after {\\n  display: block;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/complete_functions.js":
/*!***********************************!*\
  !*** ./src/complete_functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkFunction\": () => (/* binding */ checkFunction),\n/* harmony export */   \"checkedFormat\": () => (/* binding */ checkedFormat),\n/* harmony export */   \"uncheckedFormat\": () => (/* binding */ uncheckedFormat)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n\n\nconst checkedFormat = (item, task) => {\n  task.style.fontStyle = 'italic';\n  task.style.color = '#b0b0b0';\n  task.style.textDecoration = 'line-through';\n  item.querySelector('.fa-trash-can').style.display = 'block';\n  item.querySelector('.func').style.display = 'none';\n};\n\nconst uncheckedFormat = (item, task) => {\n  task.style.fontStyle = 'normal';\n  task.style.color = '#000';\n  task.style.textDecoration = 'none';\n  item.querySelector('.fa-trash-can').style.display = 'none';\n  item.querySelector('.func').style.display = 'block';\n};\n\nconst checkFunction = (item, checkbox) => {\n  const task = item.querySelector('.task-item');\n  const { value } = item.querySelector('input[name=\"tasks-item\"]');\n  if (checkbox.checked) {\n    checkedFormat(item, task);\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.forEach((listItem) => {\n      if (listItem.description === value) {\n        listItem.complete = true;\n      }\n    });\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n  } else {\n    uncheckedFormat(item, task);\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.forEach((listItem) => {\n      if (listItem.description === value) {\n        listItem.complete = false;\n      }\n    });\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/complete_functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/reset_functions.js\");\n/* harmony import */ var _list_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_functions.js */ \"./src/list_functions.js\");\n/* harmony import */ var _task_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task_render.js */ \"./src/task_render.js\");\n/* harmony import */ var _complete_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete_functions.js */ \"./src/complete_functions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nconst todayListBox = document.querySelector('.list');\nconst addList = document.querySelector('.fa-check-to-slot');\nconst listInput = document.querySelector('input[name=\"task-input\"]');\nconst taskInput = document.querySelectorAll('input');\nconst appBox = document.querySelector('.app-container');\n\n(0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n\naddList.addEventListener('click', () => {\n  const toDo = listInput.value;\n  if (toDo.length > 0) {\n    (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.addToDoItem)(toDo);\n  }\n});\n\nlistInput.addEventListener('keypress', (event) => {\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n  if (event.key === 'Enter') {\n    const toDo = listInput.value;\n    if (toDo.length > 0) {\n      (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.addToDoItem)(toDo);\n    }\n  }\n});\n\nlistInput.addEventListener('click', () => {\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetList)();\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n});\n\ntaskInput.forEach((input) => {\n  input.addEventListener('click', () => {\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetList)();\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n  });\n});\n\ntodayListBox.addEventListener('click', (event) => {\n  if (event.target.classList.contains('func') || event.target.classList.contains('task-item')) {\n    const item = event.target.parentElement;\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetList)();\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n    (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.taskFunction)(item);\n  } else if (event.target.classList.contains('fa-trash-can')) {\n    const item = event.target.parentElement;\n    _list_functions_js__WEBPACK_IMPORTED_MODULE_2__.todayList.removeTask(item);\n    todayListBox.removeChild(item);\n  } else if (event.target.classList.contains('checkbox')) {\n    const item = event.target.parentElement.parentElement;\n    const checkbox = event.target;\n    (0,_complete_functions_js__WEBPACK_IMPORTED_MODULE_4__.checkFunction)(item, checkbox);\n  }\n});\n\nappBox.addEventListener('click', (event) => {\n  if (event.target.classList.contains('clear')) {\n    const checkboxes = appBox.querySelectorAll('.checkbox');\n    checkboxes.forEach((checkbox) => {\n      if (checkbox.checked) {\n        const item = checkbox.parentElement.parentElement;\n        (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.clearTasks)(item);\n        todayListBox.removeChild(item);\n      }\n    });\n  }\n});\n\n(0,_task_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/list_functions.js":
/*!*******************************!*\
  !*** ./src/list_functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDoItem\": () => (/* binding */ addToDoItem),\n/* harmony export */   \"clearTasks\": () => (/* binding */ clearTasks),\n/* harmony export */   \"taskFunction\": () => (/* binding */ taskFunction),\n/* harmony export */   \"todayList\": () => (/* binding */ todayList)\n/* harmony export */ });\n/* harmony import */ var _task_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_functions.js */ \"./src/task_functions.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/reset_functions.js\");\n\n\n\n\nconst todayListBox = document.querySelector('.list');\n\nconst todayList = new _task_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst addToDoItem = (item) => {\n  const complete = false;\n  const index = _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.length + 1;\n  todayList.createTask(index, complete, item);\n  todayListBox.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item}\" class=\"task-item\" id=\"task-${index}\" readonly>\n                    </div>\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid func fa-ellipsis-vertical\"></i>\n                </li>`;\n  document.querySelector('input[name=\"task-input\"]').value = '';\n};\n\nconst taskFunction = (item) => {\n  if (item.classList.contains('task-display')) {\n    item = item.parentElement;\n  }\n  const func = item.querySelector('.func');\n  const del = item.querySelector('.fa-trash-can');\n  const input = item.querySelector('input[name=\"tasks-item\"]');\n  const inputValue = input.value;\n  let ident;\n  item.style.backgroundColor = '#fcf299';\n  input.style.backgroundColor = '#fcf299';\n  func.style.display = 'none';\n  del.style.display = 'block';\n  input.removeAttribute('readonly');\n  input.focus();\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.forEach((task) => {\n    if (task.description === inputValue) {\n      ident = task.index;\n    }\n  });\n  input.addEventListener('keyup', () => {\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.forEach((task) => {\n      if (task.index === ident) {\n        task.description = item.querySelector('input[name=\"tasks-item\"]').value;\n        (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateCollection)();\n      }\n    });\n  });\n  input.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.forEach((task) => {\n        if (task.index === ident) {\n          task.description = item.querySelector('input[name=\"tasks-item\"]').value;\n          input.setAttribute('readonly', 'readonly');\n          (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_2__.resetList)();\n          (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_2__.resetColors)();\n        }\n      });\n    }\n  });\n};\n\nconst clearTasks = (item) => {\n  todayList.removeTask(item);\n};\n\n//# sourceURL=webpack://to-do-list/./src/list_functions.js?");

/***/ }),

/***/ "./src/local_storage.js":
/*!******************************!*\
  !*** ./src/local_storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listCatalogue\": () => (/* binding */ listCatalogue),\n/* harmony export */   \"sortTasks\": () => (/* binding */ sortTasks),\n/* harmony export */   \"updateCollection\": () => (/* binding */ updateCollection)\n/* harmony export */ });\nconst listCatalogue = JSON.parse(localStorage.getItem('listCatalogue')) || [];\nconst updateCollection = () => {\n  localStorage.setItem('listCatalogue', JSON.stringify(listCatalogue));\n};\nconst sortTasks = () => {\n  listCatalogue.sort((a, b) => a.index - b.index);\n  let i = 1;\n  listCatalogue.forEach((task) => {\n    task.index = i;\n    i += 1;\n  });\n  updateCollection();\n};\n\n//# sourceURL=webpack://to-do-list/./src/local_storage.js?");

/***/ }),

/***/ "./src/reset_functions.js":
/*!********************************!*\
  !*** ./src/reset_functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resetColors\": () => (/* binding */ resetColors),\n/* harmony export */   \"resetList\": () => (/* binding */ resetList)\n/* harmony export */ });\nconst todayListBox = document.querySelector('.list');\n\nconst resetColors = () => {\n  const listItems = document.querySelectorAll('li');\n  const inputs = document.querySelectorAll('input');\n  listItems.forEach((item) => {\n    item.style.backgroundColor = '#fff';\n  });\n  inputs.forEach((input) => {\n    input.style.backgroundColor = '#fff';\n  });\n};\n\nconst resetList = () => {\n  todayListBox.querySelectorAll('.func').forEach((button) => {\n    button.style.display = 'block';\n  });\n  todayListBox.querySelectorAll('.fa-trash-can').forEach((button) => {\n    button.style.display = 'none';\n  });\n};\n\n//# sourceURL=webpack://to-do-list/./src/reset_functions.js?");

/***/ }),

/***/ "./src/task_functions.js":
/*!*******************************!*\
  !*** ./src/task_functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n\n\nclass Task {\n  constructor(description) {\n    this.description = description;\n    this.complete = false;\n    this.index = null;\n  }\n\n  createTask = (index, complete, description) => {\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.push({ index, complete, description });\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.updateCollection)();\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n  }\n\n  removeTask = (item) => {\n    const task = item.querySelector('input[type=\"text\"]').value;\n    const filt = _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.filter((listItem) => task === listItem.description);\n    const filtTask = _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.indexOf(filt[0]);\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.splice(filtTask, 1);\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.updateCollection)();\n    (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/task_functions.js?");

/***/ }),

/***/ "./src/task_render.js":
/*!****************************!*\
  !*** ./src/task_render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n/* harmony import */ var _complete_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complete_functions.js */ \"./src/complete_functions.js\");\n\n\n\nconst todayListBox = document.querySelector('.list');\nconst renderCatalogue = () => {\n  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.forEach((item) => {\n    todayListBox.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\" id=\"task-${item.index}\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item.description}\" class=\"task-item\" readonly>\n                    </div>\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid func fa-ellipsis-vertical\"></i>\n                </li>`;\n  });\n  const list = document.querySelectorAll('.list-item');\n  list.forEach((listItem) => {\n    const task = listItem.querySelector('.task-item').value;\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.forEach((item) => {\n      if (item.description === task && item.complete === true) {\n        listItem.querySelector('.checkbox').checked = true;\n        const locTask = listItem.querySelector('.task-item');\n        (0,_complete_functions_js__WEBPACK_IMPORTED_MODULE_1__.checkedFormat)(listItem, locTask);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCatalogue);\n\n//# sourceURL=webpack://to-do-list/./src/task_render.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;