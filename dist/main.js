/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const todayList = document.querySelector('.list');\nconst listCatalogue = [\n  {\n    index: 4,\n    complete: false,\n    description: 'Task 4',\n  },\n  {\n    index: 2,\n    complete: false,\n    description: 'Task 2',\n  },\n  {\n    index: 3,\n    complete: false,\n    description: 'Task 3',\n  },\n  {\n    index: 1,\n    complete: false,\n    description: 'Task 1',\n  },\n];\n\nconst renderCatalogue = () => {\n  listCatalogue.sort((a, b) => a.index - b.index);\n  listCatalogue.forEach((item) => {\n    todayList.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item.description}\" class=\"task-item\" id=\"Task ${item.index}\">\n                    </div>\n                    <div class=\"task-control\">\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n                    </div>\n                </li>`;\n  });\n};\nrenderCatalogue();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;