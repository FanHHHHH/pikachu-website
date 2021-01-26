// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"UXvG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var s = ".pikachu {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    position: relative;\n    height: 100vh;\n    background: #ffe600;\n  }\n  .pikachu::before,\n  .pikachu::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  \n  @keyframes shake {\n    0% {\n      transform: rotate(0);\n    }\n    33% {\n      transform: rotate(-10deg);\n    }\n    66% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(0);\n    }\n  }\n  \n  .nose {\n    position: absolute;\n    top: 240px;\n    left: 50%;\n    margin-left: -11px;\n    border: 11px solid black;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    border-bottom: none;\n  }\n  .nose:hover {\n    transform-origin: 50% 100%;\n    animation: shake 0.4s linear infinite;\n    cursor: pointer;\n  }\n  .nose::before {\n    position: absolute;\n    top: -17px;\n    left: -11px;\n    content: '';\n    display: block;\n    width: 22px;\n    height: 10px;\n    border-top: 6px solid black;\n    border-radius: 50%;\n  }\n  \n  .eye {\n    position: absolute;\n    left: 50%;\n    top: 200px;\n    margin-left: -32px;\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n    background-color: #2e2e2e;\n  }\n  .eye::after {\n    display: block;\n    position: absolute;\n    left: 6px;\n    content: '';\n    width: 28px;\n    height: 28px;\n    border: 3px solid #2e2e2e;\n    border-radius: 50%;\n    background: white;\n  }\n  \n  .eye.left {\n    margin-left: -167px;\n  }\n  .eye.right {\n    margin-left: 112px;\n  }\n  .mouth {\n    position: absolute;\n    left: 50%;\n    top: 280px;\n    width: 204px;\n    height: 180px;\n    margin-left: -102px;\n    overflow: hidden;\n  }\n  .mouth .up.lip {\n    position: absolute;\n    top: -9px;\n    width: 100px;\n    height: 30px;\n    border: 4px solid black;\n    border-bottom-left-radius: 40px;\n    border-top-color: transparent;\n    border-left-color: transparent;\n    transform: rotate(-20deg);\n    z-index: 1;\n    background: #ffe600;\n  }\n  .mouth .up.lip.right {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 40px;\n    transform: rotate(20deg);\n    margin-left: 100px;\n  }\n  .mouth .up.lip::after {\n    content: '';\n    position: absolute;\n    top: -8px;\n    border-right: 6px solid #ffe600;\n    height: 30px;\n  }\n  .mouth .up.lip.left::after {\n    right: -5px;\n  }\n  .mouth .up.lip.right::after {\n    left: -5px;\n  }\n  .mouth .down {\n    position: absolute;\n    left: 50%;\n    top: -622px;\n    width: 180px;\n    height: 800px;\n    border: 3px solid black;\n    margin-left: -90px;\n    border-radius: 50%;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  .mouth .down .inner {\n    position: absolute;\n    bottom: -56px;\n    width: 200px;\n    height: 200px;\n    background: #ff485f;\n    margin-left: -10px;\n    z-index: 2;\n    border-radius: 50% 50% 0 0;\n  }\n  .reddot {\n    position: absolute;\n    left: 50%;\n    margin-left: -44px;\n    z-index: 3;\n    top: 324px;\n    width: 88px;\n    height: 88px;\n    border: 3px solid black;\n    border-radius: 50%;\n    background: #ff0000;\n  }\n  .reddot.left {\n    transform: translateX(-178px);\n  }\n  .reddot.right {\n    transform: translateX(178px);\n  }\n";
var _default = s;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _s = _interopRequireDefault(require("./s.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('.demo');
var demo1 = document.querySelector('.demo1');
var speed = document.querySelector('.speed');
var n = 0;
var id = -1;
var playtime = 50;

var s = _s.default.split('\n');

var pause = function pause() {
  window.clearInterval(id);
  id = -1;
};

var play = function play() {
  if (id !== -1) return;

  if (n > s.length) {
    n = 0;
    demo.innerHTML = '';
    demo1.innerHTML = '';
  }

  id = setInterval(function () {
    n += 1;

    if (n > s.length) {
      pause();
      return;
    }

    demo.insertAdjacentHTML('beforeEnd', s.slice(n - 1, n));
    demo1.insertAdjacentHTML('beforeEnd', s.slice(n - 1, n) + '</br>');
    demo1.scrollTop = demo1.scrollHeight;
  }, playtime);
};

var setSpeed = function setSpeed(time, describe) {
  pause();
  playtime = time;
  play();
  speed.textContent = describe;
};

document.querySelector('.btnPause').onclick = pause;
document.querySelector('.btnContinue').onclick = play;

document.querySelector('.btnSlow').onclick = function () {
  setSpeed(300, '当前速度：慢速');
};

document.querySelector('.btnMedium').onclick = function () {
  setSpeed(150, '当前速度：中速');
};

document.querySelector('.btnFast').onclick = function () {
  setSpeed(50, '当前速度：快速');
};
},{"./s.js":"UXvG"}]},{},["epB2"], null)
//# sourceMappingURL=main.ea2e1be1.js.map