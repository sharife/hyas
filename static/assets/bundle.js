/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function() {

eval("\nwindow.showText = showText;\nwindow.selectTime = selectTime;\n\n\nfunction selectTime(time) {\n\n\n\n  hideButtons();\n\n  var btnRow = document.getElementById(\"button-time-row\"); // move buttons down\n  btnRow.style.marginTop = \"90vh\";\n  var background = document.getElementById(\"background-img\");\n\n  background.style.backgroundImage = \"url(/images/chicago-river-map-\" + time +\".svg)\";\n\n  showText(time + \"-landing\") // show time landing page\n\n\n  // show time specific buttons\n\n  var elements = document.getElementsByClassName(\"content-\" + time);\n\n  for(var i=0; i < elements.length; i++) { \n    elements[i].style.display = \"block\";\n  }\n}\n\n\nfunction hideButtons() {\n\n  var temp = [\"content-past\", \"content-future\", \"content-present\"]\n  for(var i = 0; i< temp.length; i++){\n    var elements = document.getElementsByClassName(temp[i]);\n    for(var j=0; j < elements.length; j++) { \n      elements[j].style.display = \"none\";\n    }\n  }\n}\n\n\n\nfunction showText(temp) {\n      var x = document.getElementById(temp);\n      var arrayOfElements= document.getElementsByClassName(\"story\")\n      for (var i=0; i<arrayOfElements.length;i++){\n         arrayOfElements[i].style.display='none';\n      }\n      if (x.style.display === \"none\") {\n      x.style.display = \"block\";\n      } else {\n      x.style.display = \"none\";\n      }\n}\n\n// JS Goes here - ES6 supported\nif (window.netlifyIdentity) {\n      window.netlifyIdentity.on(\"init\", (user) => {\n        if (!user) {\n          window.netlifyIdentity.on(\"login\", () => {\n            document.location.href = \"/admin/\";\n          });\n        }\n      });\n    }\n    \n\n//# sourceURL=webpack://gethyas/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;