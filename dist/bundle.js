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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var world_1 = __webpack_require__(4);
var world_2 = __webpack_require__(6);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.state = {
            world: new world_2.default(100),
            running: false
        };
        return _this;
    }
    App.prototype.componentDidUpdate = function () {
        var _this = this;
        if (this.state.running) {
            requestAnimationFrame(function () { return _this.setState({ world: _this.state.world.nextGeneration() }); });
        }
    };
    App.prototype.toggle = function () {
        this.setState({ running: !this.state.running });
    };
    App.prototype.render = function () {
        var _this = this;
        var citizens = this.state.world.citizens;
        var buttonText = this.state.running ? 'stop' : 'start';
        return React.createElement("div", { className: "reactor-of-life" },
            React.createElement("h1", { className: "title" },
                "Conway's Reactor of Life - ",
                React.createElement("a", { href: "https://github.com/trentmwillis/reactor-of-life" }, "GitHub")),
            React.createElement(world_1.default, { citizens: citizens }),
            React.createElement("button", { onClick: function () { return _this.toggle(); } }, buttonText));
    };
    return App;
}(React.Component));
exports.default = App;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
function CitizenComponent(citizen) {
    var className = citizen.alive ?
        'citizen alive' :
        'citizen dead';
    return React.createElement("div", { className: className });
}
exports.default = CitizenComponent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var citizen_1 = __webpack_require__(3);
function WorldComponent(world) {
    var citizens = world.citizens.map(function (citizen, index) { return React.createElement(citizen_1.default, { alive: citizen.alive, key: index }); });
    return React.createElement("div", { className: "world" }, citizens);
}
exports.default = WorldComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var app_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(app_1.default, null), document.getElementById('app'));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var World = (function () {
    function World(size, previousGeneration) {
        this.size = size;
        this.populate(previousGeneration);
    }
    World.prototype.populate = function (previousGeneration) {
        if (previousGeneration) {
            this.populateNextGeneration(previousGeneration);
        }
        else {
            this.populateNewWorld();
        }
    };
    World.prototype.populateNewWorld = function () {
        var size = this.size;
        var citizens = this.citizens = new Array(size);
        for (var i = 0; i < size; i++) {
            var offset = i * size;
            for (var j = 0; j < size; j++) {
                citizens[offset + j] = {
                    alive: Math.random() < 0.2 ? true : false
                };
            }
        }
    };
    World.prototype.populateNextGeneration = function (previousGeneration) {
        var size = this.size;
        var citizens = this.citizens = new Array(size);
        for (var i = 0; i < size; i++) {
            var offset = i * size;
            for (var j = 0; j < size; j++) {
                var previousGenerationCitizen = previousGeneration.citizens[offset + j];
                var neighbors = previousGeneration.findNeighbors(i, j);
                var alive = previousGenerationCitizen.alive;
                var aliveNeighbors = 0;
                for (var i_1 = 0; i_1 < 8; i_1++) {
                    if (neighbors[i_1].alive) {
                        aliveNeighbors++;
                    }
                }
                if (alive) {
                    if (aliveNeighbors < 2) {
                        alive = false;
                    }
                    else if (aliveNeighbors > 3) {
                        alive = false;
                    }
                }
                else if (aliveNeighbors === 3) {
                    alive = true;
                }
                citizens[offset + j] = { alive: alive };
            }
        }
    };
    World.prototype.findNeighbors = function (i, j) {
        var citizens = this.citizens;
        var max = this.size - 1;
        var up = (i - 1 < 0 ? max : i - 1) * this.size;
        var down = (i + 1 > max ? 0 : i + 1) * this.size;
        var center = i * this.size;
        var left = j - 1 < 0 ? max : j - 1;
        var right = j + 1 > max ? 0 : j + 1;
        return [
            citizens[up + j],
            citizens[up + left],
            citizens[up + right],
            citizens[center + left],
            citizens[center + right],
            citizens[down + j],
            citizens[down + left],
            citizens[down + right]
        ];
    };
    World.prototype.nextGeneration = function () {
        return new World(this.size, this);
    };
    return World;
}());
exports.default = World;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map