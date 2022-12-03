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

eval("\nwindow.showText = showText;\n\n\nvar collection1 = document.getElementById(\"Index one*\").addEventListener(\"click\", showText(\"Index one\"))\nvar collection2 = document.getElementById(\"Index 2*\").addEventListener(\"click\", showText(\"Index 2\"))\n\n\n\n// var collection = document.getElementsByClassName(\"content-button\");\n\n// console.log(collection)\n\n// for (var i=0; i<collection.length;i++){\n\n//       // collection[i].addEventListener(\"click\", showText(collection[i].id.slice(0,-1)))\n//       collection[i].onclick = showText(collection[i].id.slice(0,-1))\n// }\n// console.log(collection)\n\n\nfunction showText(temp) {\n      var x = document.getElementById(temp);\n      var arrayOfElements= document.getElementsByClassName(\"story\")\n      for (var i=0; i<arrayOfElements.length;i++){\n         arrayOfElements[i].style.display='none';\n      }\n      if (x.style.display === \"none\") {\n      x.style.display = \"block\";\n      } else {\n      x.style.display = \"none\";\n      }\n}\n\n// JS Goes here - ES6 supported\nif (window.netlifyIdentity) {\n      window.netlifyIdentity.on(\"init\", (user) => {\n        if (!user) {\n          window.netlifyIdentity.on(\"login\", () => {\n            document.location.href = \"/admin/\";\n          });\n        }\n      });\n    }\n    \n\n//# sourceURL=webpack://gethyas/./src/js/app.js?");

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