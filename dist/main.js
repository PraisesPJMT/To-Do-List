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

/***/ "./src/complete_functions.js":
/*!***********************************!*\
  !*** ./src/complete_functions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkFunction\": () => (/* binding */ checkFunction)\n/* harmony export */ });\nconst checkFunction = (item, checkbox) => {\n  const task = item.querySelector('.task-item');\n  if (checkbox.checked) {\n    task.style.fontStyle = 'italic';\n    task.style.color = '#b0b0b0';\n    task.style.textDecoration = 'line-through';\n    item.querySelector('.fa-trash-can').style.display = 'block';\n    item.querySelector('.func').style.display = 'none';\n  } else {\n    task.style.fontStyle = 'normal';\n    task.style.color = '#000';\n    task.style.textDecoration = 'none';\n    item.querySelector('.fa-trash-can').style.display = 'none';\n    item.querySelector('.func').style.display = 'block';\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/complete_functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/reset_functions.js\");\n/* harmony import */ var _list_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list_functions.js */ \"./src/list_functions.js\");\n/* harmony import */ var _task_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task_render.js */ \"./src/task_render.js\");\n/* harmony import */ var _complete_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./complete_functions.js */ \"./src/complete_functions.js\");\n\n\n\n\n\n\nconst todayListBox = document.querySelector('.list');\nconst addList = document.querySelector('.fa-check-to-slot');\nconst listInput = document.querySelector('input[name=\"task-input\"]');\nconst taskInput = document.querySelectorAll('input');\n\n(0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n\naddList.addEventListener('click', () => {\n  const toDo = listInput.value;\n  if (toDo.length > 0) {\n    (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.addToDoItem)(toDo);\n  }\n});\n\nlistInput.addEventListener('keypress', (event) => {\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n  if (event.key === 'Enter') {\n    const toDo = listInput.value;\n    if (toDo.length > 0) {\n      (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.addToDoItem)(toDo);\n    }\n  }\n});\n\nlistInput.addEventListener('click', () => {\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetList)();\n  (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n});\n\ntaskInput.forEach((input) => {\n  input.addEventListener('click', () => {\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetList)();\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n  });\n});\n\ntodayListBox.addEventListener('click', (event) => {\n  if (event.target.classList.contains('func') || event.target.classList.contains('task-item')) {\n    const item = event.target.parentElement;\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetList)();\n    (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_1__.resetColors)();\n    (0,_list_functions_js__WEBPACK_IMPORTED_MODULE_2__.taskFunction)(item);\n  } else if (event.target.classList.contains('fa-trash-can')) {\n    const item = event.target.parentElement;\n    _list_functions_js__WEBPACK_IMPORTED_MODULE_2__.todayList.removeTask(item);\n    todayListBox.removeChild(item);\n  } else if (event.target.classList.contains('checkbox')) {\n    const item = event.target.parentElement.parentElement;\n    const checkbox = event.target;\n    (0,_complete_functions_js__WEBPACK_IMPORTED_MODULE_4__.checkFunction)(item, checkbox);\n    // const task = item.querySelector('.task-item');\n    // if ( checkbox.checked ) {\n    //   task.style.fontStyle = 'italic';\n    //   task.style.color = '#b0b0b0';\n    //   task.style.textDecoration = 'line-through';\n    //   item.querySelector('.fa-trash-can').style.display = 'block';\n    //   item.querySelector('.func').style.display = 'none';\n    // } else {\n    //   task.style.fontStyle = 'normal';\n    //   task.style.color = '#000';\n    //   task.style.textDecoration = 'none';\n    //   item.querySelector('.fa-trash-can').style.display = 'none';\n    //   item.querySelector('.func').style.display = 'block';\n    // }\n  }\n});\n\n(0,_task_render_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/list_functions.js":
/*!*******************************!*\
  !*** ./src/list_functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDoItem\": () => (/* binding */ addToDoItem),\n/* harmony export */   \"taskFunction\": () => (/* binding */ taskFunction),\n/* harmony export */   \"todayList\": () => (/* binding */ todayList)\n/* harmony export */ });\n/* harmony import */ var _task_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task_functions.js */ \"./src/task_functions.js\");\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n/* harmony import */ var _reset_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset_functions.js */ \"./src/reset_functions.js\");\n\n\n\n\nconst todayListBox = document.querySelector('.list');\n\nconst todayList = new _task_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nconst addToDoItem = (item) => {\n  const complete = false;\n  const index = _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.length + 1;\n  todayList.createTask(index, complete, item);\n  todayListBox.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item}\" class=\"task-item\" id=\"task-${index}\" readonly>\n                    </div>\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid func fa-ellipsis-vertical\"></i>\n                </li>`;\n  document.querySelector('input[name=\"task-input\"]').value = '';\n};\n\nconst taskFunction = (item) => {\n  if (item.classList.contains('task-display')) {\n    item = item.parentElement;\n  }\n  const func = item.querySelector('.func');\n  const del = item.querySelector('.fa-trash-can');\n  const input = item.querySelector('input[name=\"tasks-item\"]');\n  const inputValue = input.value;\n  let ident;\n  item.style.backgroundColor = '#fcf299';\n  input.style.backgroundColor = '#fcf299';\n  func.style.display = 'none';\n  del.style.display = 'block';\n  input.removeAttribute('readonly');\n  input.focus();\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.forEach((task) => {\n    if (task.description === inputValue) {\n      ident = task.index;\n    }\n  });\n  input.addEventListener('keyup', () => {\n    _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.forEach((task) => {\n      if (task.index === ident) {\n        task.description = item.querySelector('input[name=\"tasks-item\"]').value;\n        (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateCollection)();\n      }\n    });\n  });\n  input.addEventListener('keypress', (event) => {\n    if (event.key === 'Enter') {\n      _local_storage_js__WEBPACK_IMPORTED_MODULE_1__.listCatalogue.forEach((task) => {\n        if (task.index === ident) {\n          task.description = item.querySelector('input[name=\"tasks-item\"]').value;\n          input.setAttribute('readonly', 'readonly');\n          (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_2__.resetList)();\n          (0,_reset_functions_js__WEBPACK_IMPORTED_MODULE_2__.resetColors)();\n        }\n      });\n    }\n  });\n};\n\n//# sourceURL=webpack://to-do-list/./src/list_functions.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local_storage.js */ \"./src/local_storage.js\");\n\n\nconst todayListBox = document.querySelector('.list');\nconst renderCatalogue = () => {\n  (0,_local_storage_js__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();\n  _local_storage_js__WEBPACK_IMPORTED_MODULE_0__.listCatalogue.forEach((item) => {\n    todayListBox.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item.description}\" class=\"task-item\" id=\"task-${item.index}\" readonly>\n                    </div>\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid func fa-ellipsis-vertical\"></i>\n                </li>`;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCatalogue);\n\n//# sourceURL=webpack://to-do-list/./src/task_render.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;