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

eval("window.showStoryText = showStoryText;\nwindow.selectTime = selectTime;\nwindow.showMapText = showMapText;\n\nfunction selectTime(time) {\n\n  hideButtons();\n\n  var btnRow = document.getElementById(\"button-time-row\"); // move buttons down\n  btnRow.style.bottom = \"0\";\n  btnRow.style.marginBottom = \"1vh\";\n\n  toggleTimeButton(time);\n\n  var background = document.getElementById(\"background-img\");\n\n  background.style.backgroundImage = \"url(/images/chicago-river-map-\" + time +\".png)\";\n\n  showStoryText(time + \"-landing\", time, true) // show time landing page\n\n  resetStoryButtons(time);\n\n  showMapText(time + \"-map\");\n\n  var elements = document.getElementsByClassName(\"content-\" + time);\n\n  for(var i=0; i < elements.length; i++) { \n    elements[i].style.display = \"block\";\n  }\n}\n\n\nfunction toggleTimeButton(time){\n  var elements = document.getElementsByClassName(\"time-button\");\n  for(var i=0; i < elements.length; i++) { \n    elements[i].style.backgroundColor = \"#f5f5f5\";\n    elements[i].style.color = \"#707070\";\n  }\n  var select = document.getElementById(\"time-button-\" + time);\n  select.style.backgroundColor = \"#707070\";\n  select.style.color = \"#fefefe\";\n}\n\nfunction hideButtons() {\n\n  var temp = [\"content-past\", \"content-future\", \"content-present\"]\n  for(var i = 0; i< temp.length; i++){\n    var elements = document.getElementsByClassName(temp[i]);\n    for(var j=0; j < elements.length; j++) { \n      elements[j].style.display = \"none\";\n    }\n  }\n}\n\nfunction showMapText(temp) {\n\n  var x = document.getElementById(temp);\n  var arrayOfElements= document.getElementsByClassName(\"maptext\")\n  for (var i=0; i<arrayOfElements.length;i++){\n      arrayOfElements[i].style.display='none';\n  }\n  if (x.style.display === \"none\") {\n  x.style.display = \"block\";\n  } else {\n  x.style.display = \"none\";\n  }\n\n}\n\n\nfunction showStoryText(storyId, time, isLanding) {\n\n  selectStoryButton(storyId, time, isLanding);\n\n\n  var x = document.getElementById(storyId);\n  var arrayOfElements= document.getElementsByClassName(\"story\")\n\n  for (var i=0; i<arrayOfElements.length;i++){\n      arrayOfElements[i].style.display='none';\n  }\n\n  if (x.style.display === \"none\") {\n  x.style.display = \"block\";\n  } else {\n  x.style.display = \"none\";\n  }\n}\n\n\nfunction selectStoryButton(storyId, time, isLanding) {\n\n  if(isLanding == true) {\n    return;\n  }\n\n  resetStoryButtons(time);\n\n  var element = document.getElementById(time + \"-\" + storyId);\n\n  element.children[0].style.backgroundColor = \"white\";\n  element.children[0].style.color = \"#707070\";\n  element.children[1].style.borderTop = \"20px solid white\";\n\n}\n\nfunction resetStoryButtons(time){\n\n  var arrayOfElements = document.getElementsByClassName(\"content-\" + time);\n\n  for (var i=0; i<arrayOfElements.length;i++){\n    console.log(arrayOfElements[i].children[0]);\n\n    arrayOfElements[i].children[0].style.backgroundColor = \"#707070\";\n    arrayOfElements[i].children[0].style.color = \"white\";\n    arrayOfElements[i].children[1].style.borderTop = \"20px solid #707070\";\n  }\n}\n\n\n\n// JS Goes here - ES6 supported\nif (window.netlifyIdentity) {\n      window.netlifyIdentity.on(\"init\", (user) => {\n        if (!user) {\n          window.netlifyIdentity.on(\"login\", () => {\n            document.location.href = \"/admin/\";\n          });\n        }\n      });\n    }\n    \n\n//# sourceURL=webpack://gethyas/./src/js/app.js?");

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