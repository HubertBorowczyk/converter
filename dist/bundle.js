/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

	    var createNewTab = function createNewTab(amount) {
	        var resultsWrapper = document.getElementById('results_wrapper');
	        var resultTab = document.createElement('li');
	        var datetime = new Date().toLocaleString();
	        resultTab.classList = 'result';
	        resultTab.innerText = amount;
	        resultTab.setAttribute('data-content', datetime);
	        resultsWrapper.appendChild(resultTab);
	    };

	    var calculate = function calculate(amount) {
	        var random = Math.floor(Math.random() * 101);
	        var exchangeRate = 4.2 * (1 + (random - 50) / 1000);
	        return amount * exchangeRate;
	    };

	    var btn = document.getElementById('btn_submit');

	    btn.addEventListener('click', function (e) {
	        e.preventDefault();
	        var eurAmount = document.getElementById('amount_input').value;
	        var convertedAmount = calculate(eurAmount).toFixed(3);
	        createNewTab(convertedAmount);
	    });
	});

/***/ }
/******/ ]);