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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: sans-serif;\n  padding: 2rem;\n  background-color: #f4f4f4;\n}\n\nform {\n  margin-bottom: 1rem;\n}\n\ninput {\n  padding: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n#todo-form {\n    margin-bottom: 1rem;\n}\n\n#todo-form input,\n#todo-form select,\n#todo-form button {\n    margin-right: 0.5rem;\n    padding: 0.4rem;\n}\n\n.priority-high {\n  border-left: 4px solid red;\n  background-color: #ffe5e5;\n}\n\n.priority-normal {\n  border-left: 4px solid gray;;\n  background-color: #f5f5f5;\n}\n\n.priority-low {\n  border-left: 4px solid green;\n  background-color: #e5ff35;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n\n\n\n\n\nvar task = (0,_modules_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Complete course\", \"Complete JavaScript project to-do list\", \"2025-05-10\", \"High\", \"Test in browser\", [\"Structure\", \"Modules\", \"localStorage\"]);\nvar project = (0,_modules_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"My first Project\");\nproject.addTask(task);\n_modules_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\n_modules_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(\"Work\");\n_modules_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(\"Privat\");\nvar work = _modules_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProjectByName(\"Work\");\nwork.addTask((0,_modules_task__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Reply to email\", \"Important!\", \"2025-05-04\"));\n_modules_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].removeProject(\"Privat\");\nproject.removeTask(\"Course completed\");\ntask.toggleComplete();\n_modules_dom__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/app.js":
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n//app.js\n\nvar projectManager = function () {\n  var projects = [];\n\n  // On first load: A default project\n  var init = function init() {\n    if (projects.length === 0) {\n      var defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Standard project\");\n      projects.push(defaultProject);\n    }\n  };\n  var getProjects = function getProjects() {\n    return projects;\n  };\n  var addProject = function addProject(name) {\n    var newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n    projects.push(newProject);\n  };\n  var removeProject = function removeProject(name) {\n    var index = projects.findIndex(function (proj) {\n      return proj.getName() === name;\n    });\n    if (index !== -1) {\n      projects.splice(index, 1);\n    }\n  };\n  var getProjectByName = function getProjectByName(name) {\n    return projects.find(function (proj) {\n      return proj.getName() === name;\n    });\n  };\n  var clearProjects = function clearProjects() {\n    projects.length = 0;\n  };\n  return {\n    init: init,\n    getProjects: getProjects,\n    addProject: addProject,\n    removeProject: removeProject,\n    getProjectByName: getProjectByName,\n    clearProjects: clearProjects\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);\n\n//# sourceURL=webpack://todo-list/./src/modules/app.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/modules/app.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/modules/task.js\");\n\n\nvar todoForm = document.getElementById(\"todo-form\");\nvar todoTitleInput = document.getElementById(\"todo-title\");\nvar todoDueDateInput = document.getElementById(\"todo-due-date\");\nvar todoDescriptionInput = document.getElementById(\"todo-description\");\nvar todoPrioritySelect = document.getElementById(\"todo-priority\");\nvar todoNotesInput = document.getElementById(\"todo-notes\");\nvar todoProjectSelect = document.getElementById(\"todo-project-select\");\nvar domController = function () {\n  var currentTaskToEdit = null;\n  var appContainer = document.getElementById(\"app\");\n  var projectForm = document.getElementById(\"project-form\");\n  var projectNameInput = document.getElementById(\"project-name\");\n  var saveToLocalStorage = function saveToLocalStorage() {\n    var projects = _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects();\n    var data = projects.map(function (project) {\n      return {\n        name: project.getName(),\n        tasks: project.getTasks().map(function (task) {\n          return task.getInfo();\n        })\n      };\n    });\n    localStorage.setItem(\"todoData\", JSON.stringify(data));\n  };\n  var loadFromLocalStorage = function loadFromLocalStorage() {\n    var savedData = JSON.parse(localStorage.getItem(\"todoData\"));\n    if (!savedData) return;\n    _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearProjects();\n    savedData.forEach(function (proj) {\n      _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(proj.name);\n    });\n    savedData.forEach(function (proj) {\n      var project = _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().find(function (p) {\n        return p.getName() === proj.name;\n      });\n      if (!project) return;\n      proj.tasks.forEach(function (task) {\n        var newTask = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(task.title, task.description, task.dueDate, task.priority, task.notes, task.id);\n        if (task.completed) {\n          newTask.toggleComplete();\n        }\n        project.addTask(newTask);\n      });\n    });\n  };\n  var updateProjectDropdown = function updateProjectDropdown() {\n    todoProjectSelect.innerText = \"\";\n    _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().forEach(function (project) {\n      var option = document.createElement(\"option\");\n      option.value = project.getName();\n      option.textContent = project.getName();\n      todoProjectSelect.appendChild(option);\n    });\n  };\n  var _renderProjects = function renderProjects() {\n    appContainer.innerHTML = \"\";\n    updateProjectDropdown();\n    var projects = _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects();\n    projects.forEach(function (project) {\n      var projectDiv = document.createElement(\"div\");\n      projectDiv.classList.add(\"project\");\n      var title = document.createElement(\"h2\");\n      title.textContent = project.getName();\n      projectDiv.appendChild(title);\n      var taskList = document.createElement(\"ul\");\n      project.getTasks().forEach(function (task) {\n        var li = document.createElement(\"li\");\n        var info = task.getInfo();\n        li.classList.add(\"priority-\".concat(info.priority));\n        var checkBox = document.createElement(\"input\");\n        checkBox.type = \"checkbox\";\n        checkBox.checked = info.completed;\n        checkBox.addEventListener(\"change\", function () {\n          task.toggleComplete();\n          _renderProjects();\n          saveToLocalStorage();\n        });\n        li.appendChild(checkBox);\n        var contentDiv = document.createElement(\"div\");\n        var titleEl = document.createElement(\"strong\");\n        titleEl.textContent = info.title;\n        var dueDateEl = document.createElement(\"span\");\n        dueDateEl.innerHTML = \"(Due: \".concat(info.dueDate, \")\");\n        var descriptionEl = document.createElement(\"div\");\n        descriptionEl.textContent = \"Description: \".concat(info.description || \"-\");\n        var priorityEl = document.createElement(\"div\");\n        priorityEl.textContent = \"Priority: \".concat(info.priority);\n        var noteEl = document.createElement(\"div\");\n        noteEl.textContent = \"Notes: \".concat(info.notes || \"-\");\n        var completedEl = document.createElement(\"div\");\n        completedEl.innerHTML = \"<em>completed:</em> \".concat(info.completed ? \"✅\" : \"❌\");\n        var editButton = document.createElement(\"button\");\n        editButton.textContent = \"Edit\";\n        editButton.addEventListener(\"click\", function () {\n          todoTitleInput.value = info.title;\n          todoDueDateInput.value = info.dueDate;\n          todoDescriptionInput.value = info.description;\n          todoPrioritySelect.value = info.priority;\n          todoNotesInput.value = info.notes;\n          currentTaskToEdit = task;\n        });\n        var removeButton = document.createElement(\"button\");\n        removeButton.textContent = \"Remove\";\n        removeButton.addEventListener(\"click\", function () {\n          project.removeTask(info.id);\n          var projectName = project.getName();\n          var isStandardProject = projectName.toLowerCase() === \"standard project\";\n          if (project.getTasks().length === 0 && !isStandardProject) {\n            _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeProject(projectName);\n          }\n\n          // Jetzt synchronisieren:\n          saveToLocalStorage();\n          _renderProjects();\n        });\n        contentDiv.appendChild(titleEl);\n        contentDiv.appendChild(dueDateEl);\n        contentDiv.appendChild(descriptionEl);\n        contentDiv.appendChild(priorityEl);\n        contentDiv.appendChild(noteEl);\n        contentDiv.appendChild(completedEl);\n        contentDiv.appendChild(editButton);\n        contentDiv.appendChild(removeButton);\n        li.appendChild(contentDiv);\n        taskList.appendChild(li);\n        if (info.completed) {\n          li.style.textDecoration = \"line-through\";\n          li.style.opacity = \"0.6\";\n        }\n      });\n      projectDiv.appendChild(taskList);\n      appContainer.appendChild(projectDiv);\n    });\n  };\n  var setupEventListeners = function setupEventListeners() {\n    projectForm.addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      var name = projectNameInput.value.trim();\n      if (name === \"\") return;\n      _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(name);\n      projectNameInput.value = \"\";\n      _renderProjects();\n      saveToLocalStorage();\n    });\n    todoForm.addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      var title = todoTitleInput.value.trim();\n      var dueDate = todoDueDateInput.value;\n      var description = todoDescriptionInput.value.trim();\n      var priority = todoPrioritySelect.value;\n      var notes = todoNotesInput.value.trim();\n      var projectName = todoProjectSelect.value;\n      if (!title || !dueDate || !projectName) return;\n      var project = _app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects().find(function (proj) {\n        return proj.getName() === projectName;\n      });\n      if (!project) return;\n      if (currentTaskToEdit) {\n        currentTaskToEdit.edit(title, description, dueDate, priority, notes);\n        saveToLocalStorage();\n        currentTaskToEdit = null;\n      } else {\n        var task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title, description, dueDate, priority, notes);\n        project.addTask(task);\n        saveToLocalStorage();\n      }\n      todoTitleInput.value = \"\";\n      todoDueDateInput.value = \"\";\n      todoDescriptionInput.value = \"\";\n      todoPrioritySelect.value = \"normal\";\n      todoNotesInput.value = \"\";\n      _renderProjects();\n      saveToLocalStorage();\n    });\n  };\n  var init = function init() {\n    loadFromLocalStorage();\n    setupEventListeners();\n    _renderProjects();\n  };\n  return {\n    init: init,\n    renderProjects: _renderProjects\n  };\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);\n\n//# sourceURL=webpack://todo-list/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createProject = function createProject(name) {\n  var tasks = [];\n  var addTask = function addTask(task) {\n    tasks.push(task);\n  };\n\n  // Hinzufügen der removeTask-Methode\n  var removeTask = function removeTask(taskId) {\n    var index = tasks.findIndex(function (task) {\n      return task.getInfo().id === taskId;\n    });\n    if (index !== -1) {\n      tasks.splice(index, 1); // Entfernt die Aufgabe anhand des Titels\n    }\n  };\n  var clearProjects = function clearProjects() {\n    projects.length = 0; // Leert das Projekt-Array\n  };\n  var getTasks = function getTasks() {\n    return tasks;\n  };\n  var getName = function getName() {\n    return name;\n  };\n  return {\n    addTask: addTask,\n    removeTask: removeTask,\n    // Die Methode wird hier exportiert\n    getTasks: getTasks,\n    getName: getName\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createTask = function createTask(title, description, dueDate, priority, notes) {\n  var id = Date.now().toString();\n  var completed = false;\n  var toggleComplete = function toggleComplete() {\n    completed = !completed;\n  };\n  var edit = function edit(newTitle, newDescription, newDueDate, newPriority, newNotes) {\n    title = newTitle;\n    description = newDescription;\n    dueDate = newDueDate;\n    priority = newPriority;\n    notes = newNotes;\n  };\n  var getInfo = function getInfo() {\n    return {\n      id: id,\n      title: title,\n      description: description,\n      dueDate: dueDate,\n      priority: priority,\n      notes: notes,\n      completed: completed\n    };\n  };\n  return {\n    toggleComplete: toggleComplete,\n    edit: edit,\n    getInfo: getInfo\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

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