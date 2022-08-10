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

eval("const todayListBox = document.querySelector('.list');\nconst addList = document.querySelector('.fa-check-to-slot');\nconst listInput = document.querySelector('input[name=\"task-input\"]');\nconst listCatalogue = [\n  {\n    index: 4,\n    complete: false,\n    description: 'Task 4',\n  },\n  {\n    index: 2,\n    complete: false,\n    description: 'Task 2',\n  },\n  {\n    index: 3,\n    complete: false,\n    description: 'Task 3',\n  },\n  {\n    index: 1,\n    complete: false,\n    description: 'Task 1',\n  },\n];\n\nclass Task {\n  constructor(description) {\n    this.description = description;\n    this.complete = false;\n    this.index = null;\n  }\n\n  createTask = (index, complete, description) => {\n    listCatalogue.push({ index, complete, description });\n  }\n}\n\nconst todayList = new Task();\n\nconst renderCatalogue = () => {\n  listCatalogue.sort((a, b) => a.index - b.index);\n  listCatalogue.forEach((item) => {\n    todayListBox.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item.description}\" class=\"task-item\" id=\"Task ${item.index}\">\n                    </div>\n                    <div class=\"task-control\">\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n                    </div>\n                </li>`;\n  });\n};\n\nconst addToDoItem = (item) => {\n  const complete = false;\n  const index = listCatalogue.length + 1;\n  todayList.createTask(index, complete, item);\n  todayListBox.innerHTML += `<li class=\"list-item\">\n                    <div class=\"task-display\">\n                        <input type=\"checkbox\" name=\"tasks\" class=\"checkbox\">\n                        <input type=\"text\" name=\"tasks-item\" value=\"${item}\" class=\"task-item\" id=\"Task ${index}\">\n                    </div>\n                    <div class=\"task-control\">\n                        <i class=\"fa-solid fa-trash-can\"></i>\n                        <i class=\"fa-solid fa-ellipsis-vertical\"></i>\n                    </div>\n                </li>`;\n  document.querySelector('input[name=\"task-input\"]').value = '';\n};\n\naddList.addEventListener('click', () => {\n  const toDo = listInput.value;\n  if (toDo.length > 0) {\n    addToDoItem(toDo);\n  }\n});\n\nlistInput.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    const toDo = listInput.value;\n    if (toDo.length > 0) {\n      addToDoItem(toDo);\n    }\n  }\n});\n\nrenderCatalogue();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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