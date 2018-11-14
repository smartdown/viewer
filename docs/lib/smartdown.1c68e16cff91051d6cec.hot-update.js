webpackHotUpdatesmartdown("smartdown",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! gifffer */ "../node_modules/gifffer/build/gifffer.min.js"), __webpack_require__(/*! highlight.js/lib/highlight */ "../node_modules/highlight.js/lib/highlight.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_gifffer, _highlight) {
  "use strict";

  _gifffer = _interopRequireDefault(_gifffer);
  _highlight = _interopRequireDefault(_highlight);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  // 'use strict';
  //
  // Smartdown
  // Copyright 2015, Daniel B Keith
  //

  /* eslint no-var: 0 */

  /* eslint prefer-arrow-callback: 0 */

  /* eslint no-useless-escape: 0 */

  /* eslint prefer-template: 0 */

  /* eslint no-multi-spaces: 0 */

  /* eslint global-require: 0 */

  /* eslint no-param-reassign: 0 */

  /* eslint no-continue: 0 */

  /* eslint no-else-return: 0 */

  /* eslint no-plusplus: 0 */

  /* eslint vars-on-top: 0 */

  /* eslint quote-props: 0 */

  /* eslint object-shorthand: 0 */

  /* eslint func-names: 0 */

  /* eslint no-underscore-dangle: 0 */

  /* eslint import/extensions: 0 */

  /* eslint import/newline-after-import: 0 */

  /* eslint import/first: 0 */

  /* eslint import/no-extraneous-dependencies: 0 */

  /* eslint import/no-unresolved: 0 */

  /* global document */

  /* global window */

  /* global useLocalForage */

  /* global useLeaflet */

  /* global useGraphviz */

  /* global useBrython */

  /* global useD3 */

  /* global useLDF */

  /* global usePlotly */

  /* global useP5JS */

  /* global useMathJax */

  /* global useStdlib */

  /* global useMermaid */
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith#Polyfill
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, thisLen) {
      if (thisLen === undefined || thisLen > this.length) {
        thisLen = this.length;
      }

      return this.substring(thisLen - search.length, thisLen) === search;
    };
  } // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#Polyfill_to_support_older_browsers

  /* global Element */


  if (!Element.prototype.addEventListener) {
    var runListeners = function runListeners(oEvent) {
      if (!oEvent) {
        oEvent = window.event;
      }

      for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
            oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
          }

          break;
        }
      }
    };

    var oListeners = {};

    Element.prototype.addEventListener = function (sEventType, fListener
    /* , useCapture (will be ignored!) */
    ) {
      if (oListeners.hasOwnProperty(sEventType)) {
        var oEvtListeners = oListeners[sEventType];
        var nElIdx;
        var iElId;

        for (nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
          if (oEvtListeners.aEls[iElId] === this) {
            nElIdx = iElId;
            break;
          }
        }

        if (nElIdx === -1) {
          oEvtListeners.aEls.push(this);
          oEvtListeners.aEvts.push([fListener]);
          this['on' + sEventType] = runListeners;
        } else {
          var aElListeners = oEvtListeners.aEvts[nElIdx];

          if (this['on' + sEventType] !== runListeners) {
            aElListeners.splice(0);
            this['on' + sEventType] = runListeners;
          }

          for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
            if (aElListeners[iLstId] === fListener) {
              return;
            }
          }

          aElListeners.push(fListener);
        }
      } else {
        oListeners[sEventType] = {
          aEls: [this],
          aEvts: [[fListener]]
        };
        this['on' + sEventType] = runListeners;
      }
    };

    Element.prototype.removeEventListener = function (sEventType, fListener
    /* , useCapture (will be ignored!) */
    ) {
      if (!oListeners.hasOwnProperty(sEventType)) {
        return;
      }

      var oEvtListeners = oListeners[sEventType];
      var nElIdx;
      var iElId;

      for (nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;
          break;
        }
      }

      if (nElIdx === -1) {
        return;
      }

      for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
        if (aElListeners[iLstId] === fListener) {
          aElListeners.splice(iLstId, 1);
        }
      }
    };
  }

  var twitterLoading = false;

  var each = window.lodashEach = __webpack_require__(/*! lodash/forEach */ "../node_modules/lodash/forEach.js");

  var map = window.lodashMap = __webpack_require__(/*! lodash/map */ "../node_modules/lodash/map.js");

  var localForage = {};

  if (false) {}

  var localForageSmartdownPrefix = 'smartdownVariable/';
  window.jsyaml = __webpack_require__(/*! js-yaml */ "../node_modules/js-yaml/index.js");

  var StackTrace = __webpack_require__(/*! stacktraceJS */ "../node_modules/stacktrace-js/dist/stacktrace.min.js");

  function importScriptUrl(sSrc, fOnload, fOnerror) {
    var oHead = document.head || document.getElementsByTagName('head')[0];

    function loadError(oError) {
      if (fOnerror) {
        fOnerror(oError);
      } else {
        throw new URIError('The script ' + oError.target.src + ' is not accessible.');
      }
    }

    var oScript = document.createElement('script');
    oScript.type = 'text\/javascript';
    oScript.onerror = loadError;
    oHead.appendChild(oScript);

    if (fOnload) {
      oScript.onload = function (evt) {
        fOnload(evt);
      };
    }

    oScript.src = sSrc;
  }

  function importTextUrl(url, fOnload, fOnerror) {
    // console.log('importTextUrl', url);

    /* global XMLHttpRequest */
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          fOnload(this.responseText);
        } else {
          // console.log('failed', this);
          fOnerror(this.status);
        }
      }
    };

    xhr.open('GET', url);
    xhr.send();
  }

  var jsModules = {};

  function loadExternal(external, loaded) {
    // console.log('loadExternal...', external);
    if (!jsModules[external]) {
      jsModules[external] = {
        loader: function loader() {
          console.log('why you callin loadExternal', external);
        },
        loaded: null,
        loadedCallbacks: []
      };
    }

    if (jsModules[external].loaded) {
      loaded();
    } else if (jsModules[external].loadedCallbacks.length > 0) {
      jsModules[external].loadedCallbacks.unshift(loaded); // console.log('loadExternal...External is still loading', external);
    } else {
      jsModules[external].loadedCallbacks.unshift(loaded); // console.log('loadExternal...External initiate load', external);

      importScriptUrl(external, function (script1) {
        // console.log('loadExternal...load complete', external);
        var callThese = jsModules[external].loadedCallbacks;
        jsModules[external].loaded = true;
        jsModules[external].loadedCallbacks = [];
        callThese.forEach(function (loadedCb) {
          loadedCb();
        });
      });
    }
  }

  var Stdlib = {};

  if (true) {
    var loadStdlib = function loadStdlib(loaded) {
      // console.log('loadStdlib...', loaded, JSON.stringify(jsModules.stdlib.loadedCallbacks, null, 2));
      if (jsModules.stdlib.loaded) {
        loaded();
      } else if (jsModules.stdlib.loadedCallbacks.length > 0) {
        jsModules.stdlib.loadedCallbacks.unshift(loaded); // console.log('loadStdlib...stdlib is still loading', JSON.stringify(jsModules.stdlib.loadedCallbacks, null, 2));
      } else {
        jsModules.stdlib.loadedCallbacks.unshift(loaded); // console.log('loadStdlib...stdlib initiate load', jsModules.stdlib.loadedCallbacks[0]);

        Promise.all(/*! import() | stdlib */[__webpack_require__.e("vendors~stdlib"), __webpack_require__.e("stdlib")]).then(__webpack_require__.t.bind(null, /*! @stdlib/stdlib/dist/stdlib-tree.min.js */ "../node_modules/@stdlib/stdlib/dist/stdlib-tree.min.js", 7)) // import('@stdlib/stdlib/dist/stdlib-tree.min.js')
        .then(function (stdlib) {
          // console.log('loadStdlib...import success', jsModules.stdlib.loadedCallbacks[0]);
          // console.log(stdlib);
          jsModules.stdlib.loaded = stdlib.default;
          var stdlibPackage = stdlib.default;
          Object.keys(stdlibPackage).forEach(function (slot) {
            // console.log('...slot', slot, stdlibPackage[slot]);
            Stdlib[slot] = stdlibPackage[slot];
          });
          var callThese = jsModules.stdlib.loadedCallbacks;
          jsModules.stdlib.loadedCallbacks = [];
          callThese.forEach(function (loadedCb) {
            loadedCb();
          });
        }).catch(function (error) {
          console.log('loadStdlib error', error);
        });
      }
    }; // Stdlib.loadStdlib = loadStdlib;


    Stdlib.vdomToHtml = __webpack_require__(/*! vdom-to-html */ "../node_modules/vdom-to-html/index.js");
    Stdlib.datasets = {
      'stopwords-en': __webpack_require__(/*! stdlibDatasets/stopwords-en */ "../node_modules/@stdlib/stdlib/lib/node_modules/@stdlib/datasets/stopwords-en/lib/browser.js")
    };

    Stdlib.loadSOTU = function loadSOTU(loaded) {
      // require.ensure(
      //  dependencies: String[],
      //  callback: function(require),
      //  errorCallback: function(error),
      //  chunkName: String)
      // require.ensure(
      //   [],
      //   function (require) {
      //     const sotu = require('@stdlib/datasets/sotu/lib/browser_db.js');
      //     Stdlib.datasets['sotu-data'] = sotu;
      //     loaded();
      //   },
      //   function (error) {
      //     console.log('loadSOTU error', error);
      //   },
      //   'stdlib-sotu',
      // );
      __webpack_require__.e(/*! import() | stdlib-sotu */ "vendors~stdlib-sotu").then(__webpack_require__.t.bind(null, /*! stdlibSOTU */ "../node_modules/@stdlib/stdlib/lib/node_modules/@stdlib/datasets/sotu/lib/browser_db.js?FooBar", 7)) // @stdlib/datasets/sotu/lib/browser_db.js')
      // import('stdlibSOTU')  // @stdlib/datasets/sotu/lib/browser_db.js')
      .then(function (sotu) {
        // console.log('loadSOTU success', Stdlib, sotu, sotu.default);
        Stdlib.datasets['sotu-data'] = sotu.default;
        loaded();
      }).catch(function (error) {
        console.log('loadSOTU error', error);
      });
    };

    jsModules.stdlib = {
      loader: loadStdlib,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var P5Loader = {};
  var P5VarDefs = null;
  var P5UserFunctionDefs = null;
  var P5SystemVarDecls = null;
  var P5SystemVarUpdates = null;
  var P5SystemVarDefs = null; // From https://github.com/processing/p5.js/blob/master/utils/sample-linter.js

  var P5UserFunctions = ['draw', 'setup', 'preload', 'mousePressed', 'mouseDragged', 'mouseMoved', 'mouseReleased', 'mouseClicked', 'mouseWheel', 'doubleClicked', 'windowResized', 'touchStarted', 'touchMoved', 'touchEnded', 'deviceMoved', 'deviceTurned', 'deviceShaken', 'keyPressed', 'keyReleased', 'keyTyped']; // P5UserFunctions = P5UserFunctions.slice(0, 2);

  var P5SystemVars = ['canvas', 'frameCount', 'width', 'height', 'windowWidth', 'windowHeight', 'mouseX', 'mouseY', 'winMouseX', 'winMouseY', 'pmouseX', 'pmouseY', 'pwinMouseX', 'pwinMouseY', 'mouseButton', 'mouseIsPressed', 'touches', 'pAccelerationX', 'pAccelerationY', 'pAccelerationZ', 'pRotationX', 'pRotationY', 'pRotationZ', 'pAccelerationX', 'pAccelerationY', 'deviceOrientation', 'turnAxis', 'key', 'isKeyPressed', 'keyIsPressed', 'keyCode']; // P5SystemVars = P5SystemVars.slice(0, 2);
  // Generated with:
  //  for (let f in P5Loader.prototype) {
  //    console.log(f, typeof P5Loader.prototype[f]);
  //

  var P5LoaderPrototypeInfo = {
    '_initializeInstanceVariables': 'function',
    'P2D': 'string',
    'WEBGL': 'string',
    'ARROW': 'string',
    'CROSS': 'string',
    'HAND': 'string',
    'MOVE': 'string',
    'TEXT': 'string',
    'WAIT': 'string',
    'HALF_PI': 'number',
    'PI': 'number',
    'QUARTER_PI': 'number',
    'TAU': 'number',
    'TWO_PI': 'number',
    'DEGREES': 'string',
    'RADIANS': 'string',
    'DEG_TO_RAD': 'number',
    'RAD_TO_DEG': 'number',
    'CORNER': 'string',
    'CORNERS': 'string',
    'RADIUS': 'string',
    'RIGHT': 'string',
    'LEFT': 'string',
    'CENTER': 'string',
    'TOP': 'string',
    'BOTTOM': 'string',
    'BASELINE': 'string',
    'POINTS': 'number',
    'LINES': 'number',
    'LINE_STRIP': 'number',
    'LINE_LOOP': 'number',
    'TRIANGLES': 'number',
    'TRIANGLE_FAN': 'number',
    'TRIANGLE_STRIP': 'number',
    'QUADS': 'string',
    'QUAD_STRIP': 'string',
    'CLOSE': 'string',
    'OPEN': 'string',
    'CHORD': 'string',
    'PIE': 'string',
    'PROJECT': 'string',
    'SQUARE': 'string',
    'ROUND': 'string',
    'BEVEL': 'string',
    'MITER': 'string',
    'RGB': 'string',
    'HSB': 'string',
    'HSL': 'string',
    'AUTO': 'string',
    'ALT': 'number',
    'BACKSPACE': 'number',
    'CONTROL': 'number',
    'DELETE': 'number',
    'DOWN_ARROW': 'number',
    'ENTER': 'number',
    'ESCAPE': 'number',
    'LEFT_ARROW': 'number',
    'OPTION': 'number',
    'RETURN': 'number',
    'RIGHT_ARROW': 'number',
    'SHIFT': 'number',
    'TAB': 'number',
    'UP_ARROW': 'number',
    'BLEND': 'string',
    'ADD': 'string',
    'DARKEST': 'string',
    'LIGHTEST': 'string',
    'DIFFERENCE': 'string',
    'EXCLUSION': 'string',
    'MULTIPLY': 'string',
    'SCREEN': 'string',
    'REPLACE': 'string',
    'OVERLAY': 'string',
    'HARD_LIGHT': 'string',
    'SOFT_LIGHT': 'string',
    'DODGE': 'string',
    'BURN': 'string',
    'THRESHOLD': 'string',
    'GRAY': 'string',
    'OPAQUE': 'string',
    'INVERT': 'string',
    'POSTERIZE': 'string',
    'DILATE': 'string',
    'ERODE': 'string',
    'BLUR': 'string',
    'NORMAL': 'string',
    'ITALIC': 'string',
    'BOLD': 'string',
    '_DEFAULT_TEXT_FILL': 'string',
    '_DEFAULT_LEADMULT': 'number',
    '_CTX_MIDDLE': 'string',
    'LINEAR': 'string',
    'QUADRATIC': 'string',
    'BEZIER': 'string',
    'CURVE': 'string',
    'STROKE': 'string',
    'FILL': 'string',
    'TEXTURE': 'string',
    'IMMEDIATE': 'string',
    'LANDSCAPE': 'string',
    'PORTRAIT': 'string',
    '_DEFAULT_STROKE': 'string',
    '_DEFAULT_FILL': 'string',
    '_preloadMethods': 'object',
    '_registeredMethods': 'object',
    '_registeredPreloadMethods': 'object',
    'registerPreloadMethod': 'function',
    'registerMethod': 'function',
    '_createFriendlyGlobalFunctionBinder': 'function',
    '_helpForMisusedAtTopLevelCode': 'function',
    'alpha': 'function',
    'blue': 'function',
    'brightness': 'function',
    'color': 'function',
    'green': 'function',
    'hue': 'function',
    'lerpColor': 'function',
    'lightness': 'function',
    'red': 'function',
    'saturation': 'function',
    'background': 'function',
    'clear': 'function',
    'colorMode': 'function',
    'fill': 'function',
    'noFill': 'function',
    'noStroke': 'function',
    'stroke': 'function',
    'float': 'function',
    'int': 'function',
    'str': 'function',
    'boolean': 'function',
    'byte': 'function',
    'char': 'function',
    'unchar': 'function',
    'hex': 'function',
    'unhex': 'function',
    'append': 'function',
    'arrayCopy': 'function',
    'concat': 'function',
    'reverse': 'function',
    'shorten': 'function',
    'shuffle': 'function',
    'sort': 'function',
    'splice': 'function',
    'subset': 'function',
    'join': 'function',
    'match': 'function',
    'matchAll': 'function',
    'nf': 'function',
    'nfc': 'function',
    'nfp': 'function',
    'nfs': 'function',
    'split': 'function',
    'splitTokens': 'function',
    'trim': 'function',
    '_frameRate': 'number',
    '_lastFrameTime': 'number',
    '_targetFrameRate': 'number',
    'print': 'function',
    'frameCount': 'number',
    'focused': 'boolean',
    'cursor': 'function',
    'frameRate': 'function',
    'getFrameRate': 'function',
    'setFrameRate': 'function',
    'noCursor': 'function',
    'displayWidth': 'number',
    'displayHeight': 'number',
    'windowWidth': 'number',
    'windowHeight': 'number',
    '_onresize': 'function',
    'width': 'number',
    'height': 'number',
    'fullscreen': 'function',
    'pixelDensity': 'function',
    'displayDensity': 'function',
    'getURL': 'function',
    'getURLPath': 'function',
    'getURLParams': 'function',
    'createImage': 'function',
    'saveCanvas': 'function',
    'saveFrames': 'function',
    '_makeFrame': 'function',
    'loadImage': 'function',
    'image': 'function',
    'tint': 'function',
    'noTint': 'function',
    '_getTintedImageCanvas': 'function',
    'imageMode': 'function',
    'pixels': 'object',
    'blend': 'function',
    'copy': 'function',
    'filter': 'function',
    'get': 'function',
    'loadPixels': 'function',
    'set': 'function',
    'updatePixels': 'function',
    'loadJSON': 'function',
    'loadStrings': 'function',
    'loadTable': 'function',
    'loadXML': 'function',
    'loadBytes': 'function',
    'httpGet': 'function',
    'httpPost': 'function',
    'httpDo': 'function',
    '_pWriters': 'object',
    'createWriter': 'function',
    'save': 'function',
    'saveJSON': 'function',
    'saveJSONObject': 'function',
    'saveJSONArray': 'function',
    'saveStrings': 'function',
    'saveTable': 'function',
    'writeFile': 'function',
    'downloadFile': 'function',
    '_checkFileExtension': 'function',
    '_isSafari': 'function',
    'isKeyPressed': 'boolean',
    'keyIsPressed': 'boolean',
    'key': 'string',
    'keyCode': 'number',
    '_onkeydown': 'function',
    '_onkeyup': 'function',
    '_onkeypress': 'function',
    '_onblur': 'function',
    'keyIsDown': 'function',
    'deviceOrientation': 'undefined',
    'accelerationX': 'number',
    'accelerationY': 'number',
    'accelerationZ': 'number',
    'pAccelerationX': 'number',
    'pAccelerationY': 'number',
    'pAccelerationZ': 'number',
    '_updatePAccelerations': 'function',
    'rotationX': 'number',
    'rotationY': 'number',
    'rotationZ': 'number',
    'pRotationX': 'number',
    'pRotationY': 'number',
    'pRotationZ': 'number',
    '_updatePRotations': 'function',
    'turnAxis': 'undefined',
    'setMoveThreshold': 'function',
    'setShakeThreshold': 'function',
    '_ondeviceorientation': 'function',
    '_ondevicemotion': 'function',
    '_handleMotion': 'function',
    '_hasMouseInteracted': 'boolean',
    'mouseX': 'number',
    'mouseY': 'number',
    'pmouseX': 'number',
    'pmouseY': 'number',
    'winMouseX': 'number',
    'winMouseY': 'number',
    'pwinMouseX': 'number',
    'pwinMouseY': 'number',
    'mouseButton': 'number',
    'mouseIsPressed': 'boolean',
    '_updateNextMouseCoords': 'function',
    '_updateMouseCoords': 'function',
    '_setMouseButton': 'function',
    '_onmousemove': 'function',
    '_onmousedown': 'function',
    '_onmouseup': 'function',
    '_ondragend': 'function',
    '_ondragover': 'function',
    '_onclick': 'function',
    '_ondblclick': 'function',
    '_onwheel': 'function',
    'day': 'function',
    'hour': 'function',
    'minute': 'function',
    'millis': 'function',
    'month': 'function',
    'second': 'function',
    'year': 'function',
    'touches': 'object',
    '_updateTouchCoords': 'function',
    '_ontouchstart': 'function',
    '_ontouchmove': 'function',
    '_ontouchend': 'function',
    'createVector': 'function',
    'abs': 'function',
    'ceil': 'function',
    'constrain': 'function',
    'dist': 'function',
    'exp': 'function',
    'floor': 'function',
    'lerp': 'function',
    'log': 'function',
    'mag': 'function',
    'map': 'function',
    'max': 'function',
    'min': 'function',
    'norm': 'function',
    'pow': 'function',
    'round': 'function',
    'sq': 'function',
    'sqrt': 'function',
    'randomSeed': 'function',
    'random': 'function',
    'randomGaussian': 'function',
    'noise': 'function',
    'noiseDetail': 'function',
    'noiseSeed': 'function',
    '_angleMode': 'string',
    'acos': 'function',
    'asin': 'function',
    'atan': 'function',
    'atan2': 'function',
    'cos': 'function',
    'sin': 'function',
    'tan': 'function',
    'degrees': 'function',
    'radians': 'function',
    'angleMode': 'function',
    '_toRadians': 'function',
    '_toDegrees': 'function',
    '_fromRadians': 'function',
    'setAttributes': 'function',
    '_assert3d': 'function',
    'createCanvas': 'function',
    'resizeCanvas': 'function',
    'noCanvas': 'function',
    'createGraphics': 'function',
    'blendMode': 'function',
    'arc': 'function',
    'ellipse': 'function',
    'line': 'function',
    'point': 'function',
    'quad': 'function',
    'rect': 'function',
    'triangle': 'function',
    'ellipseMode': 'function',
    'noSmooth': 'function',
    'rectMode': 'function',
    'smooth': 'function',
    'strokeCap': 'function',
    'strokeJoin': 'function',
    'strokeWeight': 'function',
    'bezier': 'function',
    'bezierDetail': 'function',
    'bezierPoint': 'function',
    'bezierTangent': 'function',
    'curve': 'function',
    'curveDetail': 'function',
    'curveTightness': 'function',
    'curvePoint': 'function',
    'curveTangent': 'function',
    'beginContour': 'function',
    'beginShape': 'function',
    'bezierVertex': 'function',
    'curveVertex': 'function',
    'endContour': 'function',
    'endShape': 'function',
    'quadraticVertex': 'function',
    'vertex': 'function',
    'exit': 'function',
    'noLoop': 'function',
    'loop': 'function',
    'push': 'function',
    'pop': 'function',
    'pushStyle': 'function',
    'popStyle': 'function',
    'redraw': 'function',
    'size': 'function',
    'applyMatrix': 'function',
    'popMatrix': 'function',
    'printMatrix': 'function',
    'pushMatrix': 'function',
    'resetMatrix': 'function',
    'rotate': 'function',
    'rotateX': 'function',
    'rotateY': 'function',
    'rotateZ': 'function',
    'scale': 'function',
    'shearX': 'function',
    'shearY': 'function',
    'translate': 'function',
    'textAlign': 'function',
    'textLeading': 'function',
    'textSize': 'function',
    'textStyle': 'function',
    'textWidth': 'function',
    'textAscent': 'function',
    'textDescent': 'function',
    '_updateTextMetrics': 'function',
    'loadFont': 'function',
    'text': 'function',
    'textFont': 'function',
    'createStringDict': 'function',
    'createNumberDict': 'function',
    'plane': 'function',
    'box': 'function',
    'sphere': 'function',
    'cylinder': 'function',
    'cone': 'function',
    'ellipsoid': 'function',
    'torus': 'function',
    'loadModel': 'function',
    'model': 'function',
    'loadShader': 'function',
    'createShader': 'function',
    'shader': 'function',
    'normalMaterial': 'function',
    'texture': 'function',
    'ambientMaterial': 'function',
    'specularMaterial': 'function',
    'ambientLight': 'function',
    'directionalLight': 'function',
    'pointLight': 'function',
    // 'camera': 'function',
    'perspective': 'function',
    'ortho': 'function',
    'orbitControl': 'function',
    'select': 'function',
    'selectAll': 'function',
    '_wrapElement': 'function',
    'removeElements': 'function',
    'createDiv': 'function',
    'createP': 'function',
    'createSpan': 'function',
    'createImg': 'function',
    'createA': 'function',
    'createSlider': 'function',
    'createButton': 'function',
    'createCheckbox': 'function',
    'createSelect': 'function',
    'createRadio': 'function',
    'createInput': 'function',
    'createFileInput': 'function',
    'createVideo': 'function',
    'createAudio': 'function',
    'VIDEO': 'string',
    'AUDIO': 'string',
    'createCapture': 'function',
    'createElement': 'function',
    'getAudioContext': 'function',
    'isSupported': 'function',
    'isFileSupported': 'function',
    'getMasterVolume': 'function',
    'masterVolume': 'function',
    'soundOut': 'object',
    'sampleRate': 'function',
    'freqToMidi': 'function',
    'midiToFreq': 'function',
    'soundFormats': 'function',
    'disposeSound': 'function',
    '_checkFileFormats': 'function',
    '_mathChain': 'function',
    'loadSound': 'function',
    'createConvolver': 'function',
    'setBPM': 'function',
    'saveSound': 'function'
  };

  if (true) {
    var loadP5JS = function loadP5JS(loaded) {
      // console.log('loadP5JS...', loaded, JSON.stringify(jsModules.p5js.loadedCallbacks, null, 2));
      if (jsModules.p5js.loaded) {
        loaded();
      } else if (jsModules.p5js.loadedCallbacks.length > 0) {
        jsModules.p5js.loadedCallbacks.unshift(loaded); // console.log('loadP5JS...p5js is still loading', JSON.stringify(jsModules.p5js.loadedCallbacks, null, 2));
      } else {
        jsModules.p5js.loadedCallbacks.unshift(loaded); // console.log('loadP5JS...p5js initiate load', jsModules.p5js.loadedCallbacks[0]);

        __webpack_require__.e(/*! import() | p5js */ "vendors~p5DOM~p5Sound~p5js").then(__webpack_require__.t.bind(null, /*! p5JS */ "../node_modules/p5/lib/p5.min.js", 7)).then(function (p5js) {
          Promise.all(/*! import() | p5DOM */[__webpack_require__.e("vendors~p5DOM~p5Sound~p5js"), __webpack_require__.e("vendors~p5DOM")]).then(__webpack_require__.t.bind(null, /*! p5/lib/addons/p5.dom.min.js */ "../node_modules/p5/lib/addons/p5.dom.min.js", 7)).then(function (p5DOM) {
            Promise.all(/*! import() | p5Sound */[__webpack_require__.e("vendors~p5DOM~p5Sound~p5js"), __webpack_require__.e("vendors~p5Sound")]).then(__webpack_require__.t.bind(null, /*! p5/lib/addons/p5.sound.min.js */ "../node_modules/p5/lib/addons/p5.sound.min.js", 7)).then(function (p5Sound) {
              jsModules.p5js.loaded = p5js;
              P5Loader = p5js.default; // window.p5js = p5js;

              window.p5 = P5Loader;
              /*
                                var implicitP5VarDefs = [];
                                // console.log('P5Loader.prototype');
                                // for (let f in P5Loader.prototype) {
                                //   console.log(f, typeof P5Loader.prototype[f]);
                                for (let f in P5LoaderPrototypeInfo) {
                                  if (f.indexOf('_') !== 0) {
                                    if (P5SystemVars.indexOf(f) !== -1) {
                                      // console.log('Skipping ', f);
                                    }
                                    else {
                                      const val = P5LoaderPrototypeInfo[f];
                                      // console.log('...f', f, P5Loader[f], val);
                                      if (val === 'function') {
                                        if (f === 'loadFont') {
                                          const loadFontWrapper =
                                            `
                                            function loadFontWrapper(p5, path, callback, onError) {
                                              return p5.loadFont(path, callback, onError);
                                            }
                                            const loadFont = loadFontWrapper.bind(p5, p5);
                                            `;
                                          implicitP5VarDefs.push(loadFontWrapper);
                                        }
                                        else if (f === 'createCanvas') {
                                          const createCanvasWrapper =
                                            `
                                            function createCanvasWrapper(p5, w, h, renderer) {
                                              //console.log('in createCanvasWrapper', w, h, renderer);
                                              p5.createCanvas(w, h, renderer);
                                              width = p5.width;
                                              height = p5.height;
                                            }
                                            const createCanvas = createCanvasWrapper.bind(p5, p5);
                                            `;
                                          implicitP5VarDefs.push(createCanvasWrapper);
                                        }
                                        else {
                                          implicitP5VarDefs.push('const ' + f + ' = p5.' + f + '.bind(p5);');
                                        }
                                      }
                                      else {
                                        implicitP5VarDefs.push('const ' + f + ' = p5.' + f + ';');
                                      }
                                    }
                                  }
                                }
                                P5VarDefs = implicitP5VarDefs.join('\n');
                                console.log('P5VarDefs', P5VarDefs);
              
                                var implicitP5SystemVarDecls = [];
                                var implicitP5SystemVarUpdates = [];
                                var implicitP5SystemVarDefs = [];
                                P5SystemVars.forEach(f => {
                                  implicitP5SystemVarDecls.push(`var ${f};`);
                                  implicitP5SystemVarUpdates.push(`${f} = p5.${f};`);
                                  implicitP5SystemVarDefs.push(`const ${f} = p5.${f};`);
                                });
              
                                P5SystemVarDecls = implicitP5SystemVarDecls.join('\n');
                                P5SystemVarUpdates = implicitP5SystemVarUpdates.join('');
                                P5SystemVarDefs = implicitP5SystemVarDefs.join('');
              
                                var implicitP5UserFunctionDefs = [];
                                P5UserFunctions.forEach(f => {
                                  const userFunctionSource =
                                    `if (typeof ${f} === 'function') {
                                      p5.${f} = function(p5, ${f}) {
                                        ${P5SystemVarUpdates}
              
                                        ${f}();
                                      };
                                      p5.${f} = p5.${f}.bind(this, p5, ${f});
                                    }`;
              
                                  implicitP5UserFunctionDefs.push(userFunctionSource);
                                });
              
                                P5UserFunctionDefs = implicitP5UserFunctionDefs.join('\n');
              
                                console.log('implicitP5SystemVarDecls', implicitP5SystemVarDecls);
                                console.log('P5SystemVarDecls', P5SystemVarDecls);
                                console.log('P5SystemVarUpdates', P5SystemVarDecls);
                                console.log('P5SystemVarDefs', P5SystemVarDefs);
                                console.log('P5UserFunctionDefs', P5UserFunctionDefs);
              */

              var callThese = jsModules.p5js.loadedCallbacks;
              jsModules.p5js.loadedCallbacks = [];
              callThese.forEach(function (loadedCb) {
                loadedCb();
              });
            }).catch(function (error) {
              console.log('loadP5Sound error', error);
            });
          }).catch(function (error) {
            console.log('loadP5DOM error', error);
          });
        }).catch(function (error) {
          console.log('loadP5JSerror', error);
        });
      }
    };

    var isTesting = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env.TEST_RUN;

    if (isTesting) {
      document.hasFocus = document.hasFocus || function () {
        return false;
      }; // require('./webaudio-mocks.js');

    }

    jsModules.p5js = {
      loader: loadP5JS,
      loaded: null,
      loadedCallbacks: []
    };
    var implicitP5VarDefs = []; // console.log('P5Loader.prototype');
    // for (let f in P5Loader.prototype) {
    //   console.log(f, typeof P5Loader.prototype[f]);

    for (var f in P5LoaderPrototypeInfo) {
      if (f.indexOf('_') !== 0) {
        if (P5SystemVars.indexOf(f) !== -1) {// console.log('Skipping ', f);
        } else {
          var val = P5LoaderPrototypeInfo[f]; // console.log('...f', f, P5Loader[f], val);

          if (val === 'function') {
            if (f === 'loadFont') {
              var loadFontWrapper = "\n              function loadFontWrapper(p5, path, callback, onError) {\n                return p5.loadFont(path, callback, onError);\n              }\n              const loadFont = loadFontWrapper.bind(p5, p5);\n              ";
              implicitP5VarDefs.push(loadFontWrapper);
            } else if (f === 'createCanvas') {
              var createCanvasWrapper = "\n              function createCanvasWrapper(p5, w, h, renderer) {\n                //console.log('in createCanvasWrapper', w, h, renderer);\n                p5.createCanvas(w, h, renderer);\n                width = p5.width;\n                height = p5.height;\n              }\n              const createCanvas = createCanvasWrapper.bind(p5, p5);\n              ";
              implicitP5VarDefs.push(createCanvasWrapper);
            } else {
              // implicitP5VarDefs.push(`console.log('p5.${f}', p5.${f}, typeof p5.${f});const ${f} = p5.${f}.bind(p5);`);
              implicitP5VarDefs.push("const ".concat(f, " = p5.").concat(f, ".bind(p5);"));
            }
          } else {
            implicitP5VarDefs.push('const ' + f + ' = p5.' + f + ';');
          }
        }
      }
    }

    P5VarDefs = implicitP5VarDefs.join('\n');
    var implicitP5SystemVarDecls = [];
    var implicitP5SystemVarUpdates = [];
    var implicitP5SystemVarDefs = [];
    P5SystemVars.forEach(function (f) {
      implicitP5SystemVarDecls.push("var ".concat(f, ";"));
      implicitP5SystemVarUpdates.push("".concat(f, " = p5.").concat(f, ";"));
      implicitP5SystemVarDefs.push("const ".concat(f, " = p5.").concat(f, ";"));
    });
    P5SystemVarDecls = implicitP5SystemVarDecls.join('\n');
    P5SystemVarUpdates = implicitP5SystemVarUpdates.join('');
    P5SystemVarDefs = implicitP5SystemVarDefs.join('');
    var implicitP5UserFunctionDefs = [];
    P5UserFunctions.forEach(function (f) {
      var userFunctionSource = "if (typeof ".concat(f, " === 'function') {\n        p5.").concat(f, " = function(p5, ").concat(f, ") {\n          ").concat(P5SystemVarUpdates, "\n\n          ").concat(f, "();\n        };\n        p5.").concat(f, " = p5.").concat(f, ".bind(this, p5, ").concat(f, ");\n      }");
      implicitP5UserFunctionDefs.push(userFunctionSource);
    });
    P5UserFunctionDefs = implicitP5UserFunctionDefs.join('\n'); // console.log('implicitP5SystemVarDecls', implicitP5SystemVarDecls);
    // console.log('P5SystemVarDecls', P5SystemVarDecls);
    // console.log('P5SystemVarUpdates', P5SystemVarDecls);
    // console.log('P5SystemVarDefs', P5SystemVarDefs);
    // console.log('P5UserFunctionDefs', P5UserFunctionDefs);
  }

  var Three = {};

  if (true) {
    var loadThree = function loadThree(loaded) {
      // console.log('loadThree...', loaded, JSON.stringify(jsModules.three.loadedCallbacks, null, 2));
      if (jsModules.three.loaded) {
        loaded();
      } else if (jsModules.three.loadedCallbacks.length > 0) {
        jsModules.three.loadedCallbacks.unshift(loaded); // console.log('loadthree...three is still loading', JSON.stringify(jsModules.three.loadedCallbacks, null, 2));
      } else {
        jsModules.three.loadedCallbacks.unshift(loaded); // console.log('loadthree...three initiate load', jsModules.three.loadedCallbacks[0]);

        __webpack_require__.e(/*! import() | three */ "vendors~three").then(__webpack_require__.t.bind(null, /*! three */ "../node_modules/three/build/three.min.js", 7)).then(function (three) {
          // console.log('loadthree...import success', three, jsModules.three.loadedCallbacks[0]);
          jsModules.three.loaded = three;
          var threePackage = three;
          Object.keys(threePackage).forEach(function (slot) {
            // console.log('...slot', slot, threePackage[slot]);
            Three[slot] = threePackage[slot];
          });
          var callThese = jsModules.three.loadedCallbacks;
          jsModules.three.loadedCallbacks = [];
          callThese.forEach(function (loadedCb) {
            loadedCb();
          });
        }).catch(function (error) {
          console.log('loadthree error', error);
        });
      }
    };

    jsModules.three = {
      loader: loadThree,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var LDF = {};

  if (true) {
    var loadLDF = function loadLDF(loaded) {
      // console.log('loadLDF...', loaded, JSON.stringify(jsModules.ldf.loadedCallbacks, null, 2));
      if (jsModules.ldf.loaded) {
        loaded();
      } else if (jsModules.ldf.loadedCallbacks.length > 0) {
        jsModules.ldf.loadedCallbacks.unshift(loaded); // console.log('loadldf...ldf is still loading', JSON.stringify(jsModules.ldf.loadedCallbacks, null, 2));
      } else {
        jsModules.ldf.loadedCallbacks.unshift(loaded); // console.log('loadldf...ldf initiate load', jsModules.ldf.loadedCallbacks[0]);

        __webpack_require__.e(/*! import() | ldf */ "ldf").then(__webpack_require__.t.bind(null, /*! ldfJS */ "./external/ldf-client-browser.js", 7)).then(function (ldf) {
          // console.log('loadldf...import success', ldf, jsModules.ldf.loadedCallbacks[0]);
          jsModules.ldf.loaded = ldf;
          var ldfPackage = ldf;
          Object.keys(ldfPackage).forEach(function (slot) {
            // console.log('...slot', slot, ldfPackage[slot]);
            LDF[slot] = ldfPackage[slot];
          });
          var callThese = jsModules.ldf.loadedCallbacks;
          jsModules.ldf.loadedCallbacks = [];
          callThese.forEach(function (loadedCb) {
            loadedCb();
          });
        }).catch(function (error) {
          console.log('loadldf error', error);
        });
      }
    };

    jsModules.ldf = {
      loader: loadLDF,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var Brython;

  if (true) {
    var loadBrython = function loadBrython(loaded) {
      // console.log('loadBrython...', loaded, JSON.stringify(jsModules.brython.loadedCallbacks, null, 2));
      if (jsModules.brython.loaded) {
        loaded();
      } else if (jsModules.brython.loadedCallbacks.length > 0) {
        jsModules.brython.loadedCallbacks.unshift(loaded); // console.log('loadbrython...brython is still loading', JSON.stringify(jsModules.brython.loadedCallbacks, null, 2));
      } else {
        jsModules.brython.loadedCallbacks.unshift(loaded);
        var debugging = false;

        if (debugging) {
          var callThese = jsModules.brython.loadedCallbacks;
          jsModules.brython.loadedCallbacks = [];
          callThese.forEach(function (loadedCb) {
            loadedCb();
          });
        } else {
          importScriptUrl( // 'https://cdn.rawgit.com/brython-dev/brython/3.6.2/www/src/brython.js',
          baseURL + 'lib/brython.js', function (script1) {
            importScriptUrl( // 'https://cdn.rawgit.com/brython-dev/brython/3.6.2/www/src/brython_stdlib.js',
            baseURL + 'lib/brython_stdlib.js', function (script2) {
              Brython = window.brython;
              jsModules.brython.loaded = Brython;
              var callThese = jsModules.brython.loadedCallbacks;
              jsModules.brython.loadedCallbacks = [];
              callThese.forEach(function (loadedCb) {
                loadedCb();
              });
            });
          });
        }
      }
    };

    jsModules.brython = {
      loader: loadBrython,
      loaded: null,
      loadedCallbacks: []
    };
  }

  function mathjaxConfigure() {
    // https://github.com/mathjax/MathJax/blob/master/config/default.js
    MathJax.Hub.Config({
      "fast-preview": {
        disabled: true
      },
      TeX: {
        MultLineWidth: '85%',
        equationNumbers: {
          autoNumber: 'none'
        },
        extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js', 'autobold.js', 'AMScd.js', 'mhchem.js', 'action.js', 'extpfeil.js', window.xypicURL]
      },
      tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'annotation', 'annotation-xml']
      },
      asciimath2jax: {
        delimiters: [['@', '@']]
      },
      // Custom config
      skipStartupTypeset: true,
      // showProcessingMessages: false,
      // messageStyle: 'none',
      displayAlign: 'center',
      // processSectionDelay: 0,
      positionToHash: false // showMathMenu: false,
      // showMathMenuMSIE: false,

    });
    MathJax.Hub.Register.MessageHook("Math Processing Error", function (message) {
      console.log('Math Processing Error', message, MathJax.Hub.lastError);
    });
  }

  var Plotly = {};

  if (true) {
    var loadPlotly = function loadPlotly(loaded) {
      // console.log('loadPlotly...', jsModules.plotly.loadedCallbacks.length, loaded, JSON.stringify(jsModules.plotly.loadedCallbacks, null, 2));
      if (jsModules.plotly.loaded) {
        loaded();
      } else if (jsModules.plotly.loadedCallbacks.length > 0) {
        jsModules.plotly.loadedCallbacks.unshift(loaded); // console.log('loadplotly...plotly is still loading', JSON.stringify(jsModules.plotly.loadedCallbacks, null, 2));
      } else {
        jsModules.plotly.loadedCallbacks.unshift(loaded);
        importScriptUrl('https://cdn.plot.ly/plotly-latest.min.js', function (script) {
          /* global Plotly */
          var plotlyPackage = window.Plotly;
          Object.keys(plotlyPackage).forEach(function (slot) {
            // console.log('...slot', slot, plotlyPackage[slot]);
            Plotly[slot] = plotlyPackage[slot];
          }); // console.log('loaded Plotly', plotlyPackage, window, Plotly);

          if (window.d3v5) {
            var d3sankey = __webpack_require__(/*! d3-sankey */ "../node_modules/d3-sankey/index.js");

            window.d3v5.sankey = d3sankey.sankey;
          } // Undo any ill effects from Plotly's MathJax config.


          mathjaxConfigure();
          var callThese = jsModules.plotly.loadedCallbacks;
          jsModules.plotly.loadedCallbacks = [];
          callThese.forEach(function (loadedCb) {
            loadedCb();
          });
        });
      }
    };

    jsModules.plotly = {
      loader: loadPlotly,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var D3 = {};

  if (true) {
    var loadD3 = function loadD3(loaded) {
      // console.log('loadD3...', loaded, JSON.stringify(jsModules.d3.loadedCallbacks, null, 2));
      if (jsModules.d3.loaded) {
        loaded();
      } else if (jsModules.d3.loadedCallbacks.length > 0) {
        jsModules.d3.loadedCallbacks.unshift(loaded); // console.log('loadD3...D3 is still loading', JSON.stringify(jsModules.d3.loadedCallbacks, null, 2));
      } else {
        jsModules.d3.loadedCallbacks.unshift(loaded); // console.log('loadD3...D3 initiate load');

        __webpack_require__.e(/*! import() | d3 */ "vendors~d3~d3dc").then(__webpack_require__.t.bind(null, /*! d3JS */ "../node_modules/d3/dist/d3.min.js", 7)).then(function (d3) {
          // console.log('loadD3...import success', d3);
          jsModules.d3.loaded = d3;
          window.d3v5 = window.d3 = d3;
          window.smartdown.d3v5 = window.d3v5;
          __webpack_require__.e(/*! import() | d3cloudJS */ "vendors~d3cloudJS").then(__webpack_require__.t.bind(null, /*! d3cloudJS */ "../node_modules/d3-cloud/build/d3.layout.cloud.js", 7)).then(function (d3cloud) {
            // console.log('loadD3 d3cloud...import success', d3cloud);
            window.d3cloud = d3cloud.default;
            window.smartdown.d3cloud = window.d3cloud;
            __webpack_require__.e(/*! import() | topojson */ "vendors~topojson").then(__webpack_require__.t.bind(null, /*! topojson */ "../node_modules/topojson/dist/topojson.min.js", 7)).then(function (topojson) {
              // console.log('loadD3 topojson...import success', topojson);
              window.topojson = topojson;
              window.smartdown.topojson = window.topojson;
              var wcl = baseURL + 'lib/webcomponents-loader.js';
              console.log('wcl', wcl);
              importScriptUrl(wcl, function (script1) {
                __webpack_require__.e(/*! import() | d3fc */ "vendors~d3fc").then(__webpack_require__.t.bind(null, /*! d3fcJS */ "../node_modules/d3fc/build/d3fc.min.js", 7)).then(function (d3fc) {
                  // console.log('loadD3 d3fc...import success', d3fc);
                  window.d3fc = d3fc;
                  window.smartdown.d3fc = window.d3fc;
                  Promise.all(/*! import() | d3dc */[__webpack_require__.e("vendors~d3~d3dc"), __webpack_require__.e("vendors~d3dc")]).then(__webpack_require__.t.bind(null, /*! d3dcJS */ "../node_modules/dc/dc.min.js", 7)).then(function (d3dc) {
                    // console.log('loadD3 d3fc...import success', d3dc);
                    window.d3dc = d3dc;
                    window.smartdown.d3dc = window.d3dc;
                    window.d3dc.config.defaultColors(window.d3v5.schemeAccent);
                    __webpack_require__.e(/*! import() | d3dcCSS */ "d3dcCSS").then(__webpack_require__.t.bind(null, /*! d3dcCSS */ "../node_modules/dc/dc.min.css", 7)).then(function (d3dcCSS) {
                      // console.log('loadD3 d3dcCSS...import success', d3dcCSS);
                      var callThese = jsModules.d3.loadedCallbacks;
                      jsModules.d3.loadedCallbacks = [];
                      callThese.forEach(function (loadedCb) {
                        loadedCb();
                      });
                    }).catch(function (error) {
                      console.log('loadD3 d3dcCSS error', error);
                    });
                  }).catch(function (error) {
                    console.log('loadD3 d3dc error', error);
                  });
                }).catch(function (error) {
                  console.log('loadD3 d3fc error', error);
                });
              });
            }).catch(function (error) {
              console.log('loadD3 topojson error', error);
            });
          }).catch(function (error) {
            console.log('loadD3 d3cloud error', error);
          });
        }).catch(function (error) {
          console.log('loadD3 error', error);
        });
      }
    };

    jsModules.d3 = {
      loader: loadD3,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var Viz;

  if (true) {
    var loadGraphviz = function loadGraphviz(loaded) {
      // console.log('loadGraphviz...', loaded, JSON.stringify(jsModules.graphviz.loadedCallbacks, null, 2));
      if (jsModules.graphviz.loaded) {
        loaded();
      } else if (jsModules.graphviz.loadedCallbacks.length > 0) {
        jsModules.graphviz.loadedCallbacks.unshift(loaded); // console.log('loadgraphviz...graphviz is still loading', JSON.stringify(jsModules.graphviz.loadedCallbacks, null, 2));
      } else {
        jsModules.graphviz.loadedCallbacks.unshift(loaded);
        importScriptUrl(baseURL + 'lib/viz.js', function (script1) {
          importScriptUrl(baseURL + 'lib/lite.render.js', function (script2) {
            Viz = window.Viz;
            registerMediaWithGraphviz();
            var callThese = jsModules.graphviz.loadedCallbacks;
            jsModules.graphviz.loadedCallbacks = [];
            callThese.forEach(function (loadedCb) {
              loadedCb();
            });
          });
        });
      }
    };

    jsModules.graphviz = {
      loader: loadGraphviz,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var mermaid = null;
  var mermaidAPI = null;

  function fixupMermaidSVG(svgCode) {
    svgCode = svgCode.replace(/\n/g, '');
    var beginStyleTag = '<style>';
    var endStyleTag = '</style>';
    var beginStyle = svgCode.indexOf(beginStyleTag);
    var endStyle = svgCode.indexOf(endStyleTag);
    var svgStyle = svgCode.slice(beginStyle + beginStyleTag.length, endStyle).trim();
    var svgStyleLines = svgStyle.split(/}/g);
    --svgStyleLines.length; // Assumes last element is ''

    var svgNewStyleLines = svgStyleLines.map(function (line) {
      var bracePos = line.indexOf('{');
      var selectors = line.slice(0, bracePos);
      var body = line.slice(bracePos);
      var selectorsNew = selectors.replace(/,/g, ',.mermaid ');
      selectorsNew = '.mermaid ' + selectorsNew;
      selectorsNew = selectorsNew.replace(/.mermaid .mermaid/g, '.mermaid');
      var newLine = selectorsNew + body;
      return newLine;
    });
    var svgNewStyle = beginStyleTag + svgNewStyleLines.join('}') + endStyleTag;
    svgCode = svgCode.slice(0, beginStyle) + svgNewStyle + svgCode.slice(endStyle + endStyleTag.length);
    return svgCode;
  }

  function mermaidRender(div, code) {
    if (mermaid) {
      div.classList.add('mermaid');
      mermaid.render(div.id + '_svg', code, function (svgCode) {
        var svgCodeNew = fixupMermaidSVG(svgCode);
        div.innerHTML = svgCodeNew;
      }, div);
    } else {
      div.innerHTML = 'mermaidjs not loaded';
    }
  }

  if (true) {
    var initializeMermaid = function initializeMermaid() {
      mermaid = window.mermaid;
      mermaidAPI = mermaid;
      var config = {
        startOnLoad: false,
        cloneCssStyles: false,
        logLevel: 3,
        // theme: 'dark',
        // logLevel , decides the amount of logging to be used.
        //    * debug: 1
        //    * info: 2
        //    * warn: 3
        //    * error: 4
        //    * fatal: 5
        htmlLabels: true,
        fontSize: 16,
        flowchart: {
          htmlLabels: true,
          useMaxWidth: false
        },
        sequenceDiagram: {
          diagramMarginX: 50,
          diagramMarginY: 20,
          actorMargin: 40,
          width: 120,
          height: 40,
          boxMargin: 20,
          boxTextMargin: 5,
          noteMargin: 5,
          messageMargin: 55,
          mirrorActors: false,
          bottomMarginAdj: 0,
          useMaxWidth: false
        },
        ganttchart: {
          titleTopMargin: 15,
          diagramMarginX: 10,
          diagramMarginY: 10,
          barHeight: 20,
          barGap: 4,
          topPadding: 50,
          sidePadding: 75,
          gridLineStartPadding: 35,
          fontSize: 16,
          numberSectionStyles: 3,
          useMaxWidth: false // axisFormatter: [
          //   // Within a day
          //   ['%I:%M', function (d) {
          //     return d.getHours();
          //   }],
          //   // Monday a week
          //   ['w. %U', function (d) {
          //     return d.getDay() === 1;
          //   }],
          //   // Day within a week (not monday)
          //   ['%a %d', function (d) {
          //     return d.getDay() && d.getDate() !== 1;
          //   }],
          //   // within a month
          //   ['%b %d', function (d) {
          //     return d.getDate() !== 1;
          //   }],
          //   // Month
          //   ['%m-%y', function (d) {
          //     return d.getMonth();
          //   }]
          // ]

        }
      };
      mermaidAPI.initialize(config);
    };

    var loadMermaid = function loadMermaid(loaded) {
      // console.log('loadMermaid...', jsModules.mermaid.loadedCallbacks.length, loaded, JSON.stringify(jsModules.mermaid.loadedCallbacks, null, 2));
      if (jsModules.mermaid.loaded) {
        loaded();
      } else if (jsModules.mermaid.loadedCallbacks.length > 0) {
        jsModules.mermaid.loadedCallbacks.unshift(loaded); // console.log('loadmermaid...mermaid is still loading', JSON.stringify(jsModules.mermaid.loadedCallbacks, null, 2));
      } else {
        jsModules.mermaid.loadedCallbacks.unshift(loaded);
        var url = 'https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js';
        importScriptUrl(url, function (script) {
          /* global Mermaid */
          // mermaid = window.mermaid;
          // console.log('mermaidPackage', mermaidPackage);
          // Object.keys(mermaidPackage).forEach(slot => {
          //   // console.log('...slot', slot, mermaidPackage[slot]);
          //   Mermaid[slot] = mermaidPackage[slot];
          // });
          initializeMermaid();
          var callThese = jsModules.mermaid.loadedCallbacks;
          jsModules.mermaid.loadedCallbacks = [];
          callThese.forEach(function (loadedCb) {
            loadedCb();
          });
        });
      }
    };

    jsModules.mermaid = {
      loader: loadMermaid,
      loaded: null,
      loadedCallbacks: []
    };
  }

  var playableArgNames = ['playable', 'env', 'P5', 'd3', 'fc', 'dc', 'topojson', 'Plotly', 'L', 'stdlib', 'THREE', 'smartdown', 'p5'];

  __webpack_require__(/*! highlight.js/styles/default.css */ "../node_modules/highlight.js/styles/default.css");

  __webpack_require__(/*! ./styles.css */ "./styles.css"); // if (useD3) {
  //   window.d3v5 = require('d3JS');
  //   require('@webcomponents/webcomponentsjs/webcomponents-bundle');
  //   window.d3fc = require('d3fcJS');
  //   window.d3dc = require('d3dcJS');
  //   window.d3dc.config.defaultColors(window.d3v5.schemeAccent);
  //   require('d3dcCSS');
  //   window.d3cloud = require('d3cloudJS');
  //   window.topojson = require('topojson');
  // }


  var Leaflet = {};

  if (true) {
    /* global L */
    Leaflet = __webpack_require__(/*! leafletJS */ "../node_modules/leaflet/dist/leaflet.js");

    __webpack_require__(/*! leaflet/dist/leaflet.css */ "../node_modules/leaflet/dist/leaflet.css");

    delete Leaflet.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'marker-icon-2x.png',
      iconUrl: 'marker-icon.png',
      shadowUrl: 'marker-shadow.png'
    });
  }

  global.hljs = _highlight.default;
  window.hljs = _highlight.default;

  _highlight.default.registerLanguage('bash', __webpack_require__(/*! highlight.js/lib/languages/bash */ "../node_modules/highlight.js/lib/languages/bash.js"));

  _highlight.default.registerLanguage('css', __webpack_require__(/*! highlight.js/lib/languages/css */ "../node_modules/highlight.js/lib/languages/css.js"));

  _highlight.default.registerLanguage('markdown', __webpack_require__(/*! highlight.js/lib/languages/markdown */ "../node_modules/highlight.js/lib/languages/markdown.js"));

  _highlight.default.registerLanguage('ruby', __webpack_require__(/*! highlight.js/lib/languages/ruby */ "../node_modules/highlight.js/lib/languages/ruby.js"));

  _highlight.default.registerLanguage('javascript', __webpack_require__(/*! highlight.js/lib/languages/javascript */ "../node_modules/highlight.js/lib/languages/javascript.js"));

  _highlight.default.registerLanguage('json', __webpack_require__(/*! highlight.js/lib/languages/json */ "../node_modules/highlight.js/lib/languages/json.js"));

  _highlight.default.registerLanguage('php', __webpack_require__(/*! highlight.js/lib/languages/php */ "../node_modules/highlight.js/lib/languages/php.js"));

  _highlight.default.registerLanguage('processing', __webpack_require__(/*! highlight.js/lib/languages/processing */ "../node_modules/highlight.js/lib/languages/processing.js"));

  _highlight.default.registerLanguage('python', __webpack_require__(/*! highlight.js/lib/languages/python */ "../node_modules/highlight.js/lib/languages/python.js"));

  _highlight.default.registerLanguage('r', __webpack_require__(/*! highlight.js/lib/languages/r */ "../node_modules/highlight.js/lib/languages/r.js"));

  _highlight.default.registerLanguage('sql', __webpack_require__(/*! highlight.js/lib/languages/sql */ "../node_modules/highlight.js/lib/languages/sql.js"));

  _highlight.default.registerLanguage('yaml', __webpack_require__(/*! highlight.js/lib/languages/yaml */ "../node_modules/highlight.js/lib/languages/yaml.js"));

  var baseURL = null;
  var cardLoader = null;
  var calcHandlers = null;
  var linkRules = [];
  var currentHomeDiv = null;
  var currentMD = null;
  var playableTypes = {
    'brython': {
      highlight: 'python',
      javascript: true
    },
    'go': {
      highlight: 'go',
      transform: 'gopherjs',
      javascript: true
    },
    'javascript': {
      highlight: 'javascript',
      javascript: true
    },
    'd3': {
      highlight: 'javascript',
      javascript: true
    },
    'leaflet': {
      highlight: 'javascript',
      javascript: true
    },
    'plotly': {
      highlight: 'javascript',
      javascript: true
    },
    'stdlib': {
      highlight: 'javascript',
      javascript: true
    },
    'three': {
      highlight: 'javascript',
      javascript: true
    },
    'p5js': {
      highlight: 'javascript',
      javascript: true
    },
    'P5JS': {
      highlight: 'javascript',
      javascript: true
    },
    'smartdown': {
      highlight: 'markdown',
      javascript: false
    },
    'graphviz': {
      highlight: 'graphviz',
      javascript: false
    },
    'mermaid': {
      highlight: 'mermaid',
      javascript: false
    }
  };
  var perPageState = {
    expressionsRegistered: {},
    playablesRegistered: {},
    playablesRegisteredOrder: []
  };
  var currentRenderDiv = null;
  var currentBackpatches = {};
  var cellIndex = 0;
  var smartdownCells = {};
  var cardLoading = false;
  var smartdownVariables = {};
  var smartdownScripts = [];
  var smartdownScriptsMap = {};
  var mediaRegistry = {};
  var scriptIndex = 0;

  var markedModule = __webpack_require__(/*! marked */ "../node_modules/marked/lib/marked.js");

  function escapeQuotes(s) {
    return s.replace(/'/g, '\\\'').replace(/"/g, '\\\"');
  }

  function escapeSingle(s) {
    return s.replace(/'/g, '\\\'');
  }

  function entityEscape(html, encode) {
    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  /* global escape */


  var globalescape = escape || function (s) {
    return "noglobalescape(".concat(s, ")");
  };

  var windowescape = window.escape;
  var escape = entityEscape;
  var markedOpts = {
    renderer: 'crashNoRenderer',
    gfm: true,
    tables: true,
    breaks: true,
    gfmBreaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: function highlight(code, lang) {
      // , callback)
      var playableType = playableTypes[lang];
      var result;

      if (lang && playableType) {
        var mappedLanguage = playableType ? playableType.highlight : lang;
        result = _highlight.default.highlightAuto(code, [mappedLanguage]);
      } else {
        result = _highlight.default.highlightAuto(code, [lang]);
      }

      return result.value;
    }
  };

  function expandHrefWithLinkRules(href) {
    var result = href;

    for (var i = 0; i < linkRules.length; ++i) {
      var rule = linkRules[i];

      if (href.indexOf(rule.prefix) === 0) {
        if (typeof rule.replace === 'string') {
          var newHRef = rule.replace + href.slice(rule.prefix.length);

          if (newHRef.indexOf(window.location.origin) === 0) {
            newHRef = newHRef.slice(window.location.origin.length);
          }

          result = newHRef;
          break;
        } else if (typeof rule.replace === 'function') {
          var replacer = rule.replace(href);
          result = replacer + href.slice(rule.prefix.length);
        }
      }
    } // console.log('expandHrefWithLinkRules', linkRules, href, result, JSON.stringify(window.location, null, 2));


    return result;
  } // https://github.com/mdaines/viz.js/wiki/API#render-options


  var graphvizImages = null;

  function registerMediaWithGraphviz() {
    graphvizImages = [];
    each(mediaRegistry, function (data, _key) {
      //     graphvizFiles.push({
      //       path: data.url,
      //       data:
      // `
      // <?xml version="1.0" encoding="UTF-8" standalone="no"?>
      // <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      // <svg height="100" width="100">
      //   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      //   Sorry, your browser does not support inline SVG.
      // </svg>
      // `
      //     });
      // console.log('registerMediaWithGraphviz', key, data.url);
      graphvizImages.push({
        path: data.url,
        width: '200px',
        height: '200px'
      });
    });
    window.graphvizImages = graphvizImages;
  } // Copied from https://github.com/jashkenas/underscore/blob/e944e0275abb3e1f366417ba8facb5754a7ad273/underscore.js#L1458


  var unescapeMap = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#x27;': "'",
    '&#39;': "'",
    '&#x60;': '`'
  }; // Functions for escaping and unescaping strings to/from HTML interpolation.

  var createEscaper = function createEscaper(map) {
    var escaper = function escaper(match) {
      return map[match];
    }; // Regexes for identifying a key that needs to be escaped.


    var source = '(?:' + Object.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function (string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };

  var decodeInlineScript = createEscaper(unescapeMap);

  function getServiceOrigin() {
    var result = window.location.origin;

    if (window.location.protocol === 'file:') {
      result = 'http://127.0.0.1:3000';
    }

    return result;
  }

  var youtubeDimensions = {
    thumbnail: 'width="426" height="240"',
    halfwidth: 'width="640" height="360"',
    fullwidth: 'width="1280" height="720"'
  };
  var youtubeClasses = {
    thumbnail: 'thumbnail',
    halfwidth: 'halfwidth',
    fullwidth: 'fullwidth'
  };
  var uniqueYouTubeId = 0;

  function convertYoutubeFragmentToEmbed(href, title) {
    // console.log('convertYoutubeFragmentToEmbed', href, title);
    var result = null;
    var titleParts = title.split('|');
    title = titleParts[0];
    var shortPrefixes = ['http://youtu.be/', 'https://youtu.be/'];
    var longPrefixes = ['http://www.youtube.com/watch?v=', 'https://www.youtube.com/watch?v='];
    var sizing = youtubeDimensions[title] || '';
    var classList = youtubeClasses[title] || '';
    shortPrefixes.every(function (prefix) {
      if (href.indexOf(prefix) === 0) {
        var suffix = href.substr(prefix.length);
        ++uniqueYouTubeId;
        var enablejsapi = '';
        var apiButton = '';
        var apiPlayerKey = "player_".concat(uniqueYouTubeId);

        if (titleParts.length > 1) {
          var apiParts = titleParts[1].split('=');

          if (apiParts[0] === 'api') {
            if (apiParts.length > 1) {
              apiPlayerKey = apiParts[1];
            }

            enablejsapi = '&enablejsapi=1';
            apiButton = "\n            <button\n              type=\"button\"\n              id=\"youtube-api-".concat(uniqueYouTubeId, "\"\n              href=\"#\"\n              onclick=\"smartdown.setupYouTubePlayer('youtube-iframe-").concat(uniqueYouTubeId, "', '").concat(apiPlayerKey, "')\"\n              class=\"api-button\">\n              Enable API for player <b>").concat(apiPlayerKey, "</b>\n            </button>\n            ");
          }
        }

        result = "<div class=\"video-container youtube ".concat(classList, "\">\n          <iframe\n            id=\"youtube-iframe-").concat(uniqueYouTubeId, "\"\n            ").concat(sizing, "\n            src=\"https://www.youtube.com/embed/").concat(suffix, "?html5=1&ecver=2&modestbranding=1").concat(enablejsapi, "\"\n            frameborder=\"0\"\n\n            allowfullscreen>\n          </iframe>\n        </div>\n        ").concat(apiButton, "\n        "); // console.log(result);

        return false;
      } else {
        return true;
      }
    });

    if (!result) {
      longPrefixes.every(function (prefix) {
        if (href.indexOf(prefix) === 0) {
          var suffix = href.substr(prefix.length);
          result = "<div\n  class=\"video-container youtube ".concat(classList, "\">\n  <iframe\n    ").concat(sizing, "\n    src=\"https://www.youtube.com/embed/").concat(suffix, "\"\n    frameborder=\"0\"\n    allowfullscreen>\n  </iframe>\n</div>\n");
          return false;
        } else {
          return true;
        }
      });
    }

    return result;
  }

  function convertVimeoFragmentToEmbed(href, title) {
    var result = null;
    var shortPrefixes = ['http://vimeo.com/', 'https://vimeo.com/'];
    var classList = title === 'thumbnail' ? 'thumbnail' : 'fullwidth';
    shortPrefixes.every(function (prefix) {
      if (href.indexOf(prefix) === 0) {
        var suffix = href.substr(prefix.length);
        var opts = '?title=0&byline=0&portrait=0&badge=0';
        result = "<div class=\"video-container vimeo ".concat(classList, "\">\n  <iframe\n    src=\"https://player.vimeo.com/video/").concat(suffix).concat(opts, "\"\n    width=\"640\"\n    height=\"360\"\n    frameborder=\"0\"\n    webkitallowfullscreen\n    mozallowfullscreen\n    allowfullscreen>\n  </iframe>\n</div>\n");
        return false;
      } else {
        return true;
      }
    });
    return result;
  }

  function areValuesSameEnough(oldValue, newValue) {
    var result = JSON.stringify(oldValue) === JSON.stringify(newValue); //  let result = oldValue === newValue;
    //
    //  if ((typeof oldValue === 'number') && isNaN(oldValue) &&
    //      (typeof newValue === 'number') && isNaN(newValue)) {
    //    result = true;
    //  }
    //
    //  if (!result) {
    //    console.log('areValuesSameEnough', oldValue, newValue, typeof oldValue, typeof newValue);
    //  }

    return result;
  } //
  // Marked rendering extensions
  //


  function recursivelyLoadIncludes(prefixCode, language, includesRemaining, done) {
    if (includesRemaining.length > 0) {
      var nextInclude = includesRemaining.shift(); // console.log('nextInclude', nextInclude);

      importTextUrl(nextInclude, function (nextIncludeText) {
        // console.log('recursivelyLoadIncludes success', nextInclude, nextIncludeText.slice(0, 50));
        recursivelyLoadIncludes(prefixCode + nextIncludeText, language, includesRemaining, done);
      }, function (error) {
        console.log('recursivelyLoadIncludes error', nextInclude, error);
        var errorText = "\n//\n// Unable to include ".concat(nextInclude, ": ").concat(error, "\n//\n");
        recursivelyLoadIncludes(prefixCode + errorText, language, includesRemaining, done);
      });
    } else if (done) {
      done(prefixCode);
    }
  }

  function getPrelude(language, code) {
    var playableType = playableTypes[language];
    var imports = [];
    var includes = [];
    var loadableLanguages = ['d3', 'brython', 'stdlib', 'p5js', 'P5JS', 'three', 'ldf', 'plotly', 'graphviz', 'mermaid'];

    if (loadableLanguages.indexOf(language) >= 0) {
      imports.push(language);
    }

    if (playableTypes.javascript) {
      var lines = code.split('\n');
      var usePrefix = '//smartdown.import=';
      var includePrefix = '//smartdown.include=';
      lines.forEach(function (line) {
        if (line.indexOf(usePrefix) === 0) {
          var rhs = line.slice(usePrefix.length);
          imports.push(rhs);
        } else if (line.indexOf(includePrefix) === 0) {
          var _rhs = line.slice(includePrefix.length);

          includes.push(_rhs);
        }
      });
    } // console.log('getPrelude', language, imports);


    return {
      imports: imports,
      includes: includes
    };
  }

  function renderCodeInternal(renderDivId, code, language, prelude) {
    language = language || '';
    var languageElements = language.split('/');
    var languageOpts = languageElements.slice(1);
    var playable = languageOpts.indexOf('playable') >= 0;
    var autoplay = languageOpts.indexOf('autoplay') >= 0;
    var debug = languageOpts.indexOf('debug') >= 0;
    language = languageElements[0];
    var playableType = playableTypes[language];

    if (playableType && (playable || autoplay)) {
      // console.log('renderCodeInternal', renderDivId, code, language, languageOpts, prelude);
      ++scriptIndex;
      var scriptId = "script_playable_".concat(scriptIndex);
      var divId = "div_playable_".concat(scriptIndex);
      var preId = "pre_playable_".concat(scriptIndex);
      var dbgId = "dbg_playable_".concat(scriptIndex);
      var dbgToggleId = "".concat(dbgId, "-toggle");
      var functionId = "function_playable_".concat(scriptIndex);
      var playId = "play_playable_".concat(scriptIndex);
      var stopId = "stop_playable_".concat(scriptIndex);
      var progressId = "progress_playable_".concat(scriptIndex);
      var registeredPlayable = smartdown.registerPlayable(prelude, language, renderDivId, divId, preId, dbgId, scriptId, functionId, playId, stopId, dbgToggleId, progressId, autoplay, code, playableType.transform);
      var playableScript = '';

      if (playableType.javascript) {
        var transformedCode = registeredPlayable.augmentedCode; //       if (language === 'go' && playableType.transform) {
        //         transformedCode =
        // `
        // // console.log('playable:${scriptIndex}:', playable);
        // eval(playable.transformedCode);
        // //        this.div.innerHTML='<pre><code>' + playable.transformedCode + '</code></pre>';
        // `;
        //       }

        playableScript = "\n<script id=\"".concat(scriptId, "\">\n").concat(transformedCode, "\n</script>\n");
      } else {
        playableScript = "\n<script id=\"".concat(scriptId, "\" type=\"application/x-").concat(language, "\">").concat(code, "</script>\n");
      }

      var highlightLanguage = playableType ? playableType.highlight : 'javascript';
      var highlightedCode = global.hljs.highlightAuto(code, [highlightLanguage]).value;
      var highlightedAugmentedCode = global.hljs.highlightAuto(registeredPlayable.augmentedCode, ['javascript']).value;
      var showAugmentedCode = smartdown.showAugmentedCode || debug;
      var debugIsHidden = showAugmentedCode ? '' : 'hidden';

      if (autoplay && !playable) {
        var playableWrapper = "\n<div class=\"playable-wrapper\">\n<div class=\"smartdown-playable smartdown-".concat(language, "\" id=\"").concat(divId, "\"></div>\n</div>\n<div id=\"").concat(progressId, "\" class=\"smartdown-progress\">\n    <div\n      class=\"smartdown-progress-bar smartdown-progress-active\"\n      data-percent=\"100\" style=\"width: 100%;\">\n      <span class=\"smartdown-progress-label\"></span>\n    </div>\n</div>\n<button\n  type=\"button\"\n  id=\"").concat(dbgId, "-toggle\"\n  href=\"#\"\n  onclick=\"smartdown.toggleDebug('").concat(dbgId, "')\"\n  ").concat(debugIsHidden, "\n  class=\"debug-button\">\n  Augmented Javascript\n</button>\n\n<pre\n  id=\"").concat(dbgId, "\"\n  class=\"playable-debug-source\">\n").concat(highlightedAugmentedCode, "\n</pre>\n\n<div class=\"playable-bottom-spacer\"></div>\n");
        return playableScript + playableWrapper;
      } else {
        var playableButtons = "\n  <button type=\"button\"\n    href=\"#\"\n    id=\"".concat(playId, "\"\n    onclick=\"smartdown.playPlayable('").concat(language, "', '").concat(divId, "')\"\n    class=\"playable-button playable-button-play\">\n    <span>&#x25B6;&nbsp;&nbsp;&nbsp;Play&nbsp;&nbsp;&nbsp;&#x25B6;</span>\n  </button>\n  <button type=\"button\"\n    id=\"").concat(stopId, "\"\n    style=\"display: none\"\n    href=\"#\"\n    onclick=\"smartdown.resetPlayable('").concat(language, "', '").concat(divId, "', false)\"\n    class=\"playable-button playable-button-stop\">\n    <span>&#x25A3;&nbsp;&nbsp;&nbsp;Stop&nbsp;&nbsp;&nbsp;&#x25A3;</span>\n  </button>\n");
        var playableCodeDisplay = "\n<div class=\"playable-wrapper\">\n<div id=\"".concat(preId, "\" class=\"playable-source\">\n  <pre>").concat(highlightedCode, "</pre>\n</div>\n\n<div class=\"smartdown-playable smartdown-").concat(language, "\" id=\"").concat(divId, "\"></div>\n</div>\n<div id=\"").concat(progressId, "\" class=\"smartdown-progress\">\n    <div\n      class=\"smartdown-progress-bar smartdown-progress-active\"\n      data-percent=\"100\" style=\"width: 100%;\">\n      <span class=\"smartdown-progress-label\"></span>\n    </div>\n</div>\n\n<button\n  type=\"button\"\n  id=\"").concat(dbgId, "-toggle\"\n  href=\"#\"\n  onclick=\"smartdown.toggleDebug('").concat(dbgId, "')\"\n  ").concat(debugIsHidden, "\n  class=\"debug-button\">\n  Augmented Javascript\n</button>\n\n<pre\n  id=\"").concat(dbgId, "\"\n  class=\"playable-debug-source\">\n").concat(highlightedAugmentedCode, "\n</pre>\n\n<div class=\"playable-bottom-spacer\"></div>\n");
        return playableScript + playableButtons + playableCodeDisplay;
      }
    } else {
      // console.log('renderCode2', code, language);
      return markedOpts.renderer.baseCodeRenderer(code, language);
    }
  }

  function renderCode(code, language) {
    language = language || '';
    var languageElements = language.split('/');
    var languageOpts = languageElements.slice(1);
    var playable = languageOpts.indexOf('playable') >= 0;
    var autoplay = languageOpts.indexOf('autoplay') >= 0; // // var debug = languageOpts.indexOf('debug') >= 0;

    var baseLanguage = languageElements[0];
    var prelude = getPrelude(baseLanguage, code);
    var bp = currentBackpatches[currentRenderDiv.id];

    if ((playable || autoplay) && prelude.includes.length > 0) {
      var backpatchIndex = bp.length;
      var deferredCode = "<pre>backpatch_".concat(backpatchIndex, "_").concat(currentRenderDiv.id, "</pre>");
      var backpatch = {
        currentRenderDiv: currentRenderDiv,
        key: deferredCode,
        replace: null
      };
      bp.push(backpatch); // console.log('renderCode added bp', deferredCode, currentRenderDiv.id);

      var includesRemaining = prelude.includes.slice(0); // Copy

      var prefixCode = '';
      recursivelyLoadIncludes(prefixCode, language, includesRemaining, function (includedCode) {
        var saveRenderDiv = currentRenderDiv; // console.log('renderCode1', (currentRenderDiv ? currentRenderDiv.id : 'NOID'), includedCode.slice(0, 100));

        currentRenderDiv = backpatch.currentRenderDiv;
        var renderedExpandedCode = renderCodeInternal(currentRenderDiv.id, includedCode, language, prelude); // console.log('renderCode2', (currentRenderDiv ? currentRenderDiv.id : 'NOID'), renderedExpandedCode.slice(0, 100));

        currentRenderDiv = saveRenderDiv;
        var patch = bp[backpatchIndex];

        if (patch.key === deferredCode) {
          patch.replace = renderedExpandedCode;
        } else {
          console.log('renderCode patch anomaly', backpatchIndex);
          console.log(deferredCode);
          console.log(patch.key);
        }
      });
      return deferredCode;
    } else {
      return renderCodeInternal(currentRenderDiv.id, code, language, prelude);
    }
  }

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    return {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return this;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
  }

  function smartdownLexer(src) {
    var out = '',
        link,
        text,
        href,
        title,
        cap,
        prevCapZero;
    var mathRules = /^(\$+)[^$]*\1/;
    var kludgeGFMURLRules = edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*/) // .replace('email', inline._email)
    .getRegex();
    var renderer = markedOpts.renderer;

    while (src) {
      // math
      if (cap = mathRules.exec(src)) {
        src = src.substring(cap[0].length);
        var escaped = cap[0].replace(/</g, '< ');
        out += escaped;
        continue;
      } // escape


      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += cap[1];
        continue;
      } // autolink


      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[2] === '@') {
          text = escape(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }

        out += renderer.link(href, null, text);
        continue;
      } // // url (gfm)
      // if (!this.inLink && (cap = this.rules.url.exec(src))) {


      if (!this.inLink && (cap = kludgeGFMURLRules.exec(src))) {
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);

        src = src.substring(cap[0].length);

        if (cap[2] === '@') {
          text = escape(cap[0]);
          href = 'mailto:' + text;
        } else {
          text = escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        out += renderer.link(href, null, text);
        continue;
      } // tag


      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }

        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      } // link


      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.inLink = true;
        href = cap[2];

        if (this.options.pedantic) {
          link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        out += this.outputLink(cap, {
          href: markedModule.InlineLexer.escapes(href),
          title: markedModule.InlineLexer.escapes(title)
        });
        this.inLink = false;
        continue;
      } // reflink, nolink


      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];

        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }

        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      } // strong


      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      } // em


      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      } // code


      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += renderer.codespan(escape(cap[2].trim(), true));
        continue;
      } // br


      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += renderer.br();
        continue;
      } // del (gfm)


      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += renderer.del(this.output(cap[1]));
        continue;
      } // text


      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        out += renderer.text(escape(this.smartypants(cap[0])));
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  }

  function isGifferable(href, title, text) {
    return (text === 'player' || text === 'halfwidth' || text === 'fullwidth' || text === 'thumbnail') && (href.endsWith('.gif') || href.indexOf('data:image/gif;base64') === 0);
  }

  function renderImage(href, title, text) {
    href = expandHrefWithLinkRules(href);
    var out = '';
    var specialClass = null;
    var mediaLink = href.lastIndexOf('/media/', 0) >= 0;

    if (mediaLink) {
      var pathElements = href.split('/').reverse(); // console.log('render', href, pathElements);

      var e1 = pathElements.pop();

      if (e1 !== '') {
        console.log('Unexpected /media syntax: ', href);
      }

      var e2 = pathElements.pop();

      if (e2 === 'media') {
        var imageName = pathElements.pop();
        var imageClass = pathElements.pop() || '';
        var fgClass = "media-image ".concat(imageClass);
        var media = mediaRegistry[imageName];

        if (media) {
          var inlineData = media.svgData;
          out += '<div class="' + fgClass + '">';
          out += inlineData;
          out += '</div>';
        } else {
          console.log('Media not found', imageName);
          out += '<h6 style="color:red;">';
          out += "Media not found: ".concat(imageName);
          out += '</h6>';
        }
      }
    } else if (href.indexOf('https://twitter.com') === 0) {
      var showCards = /\&amp\;showmedia$/i.test(href);
      out = '<blockquote class="twitter-tweet"';
      out += ' data-width="250"';
      out += ' align="center"';

      if (!showCards) {
        out += ' data-cards="hidden"';
      }

      out += ' data-conversation="none"';
      out += ' data-dnt="true"';
      out += ' style="border:4px solid darkgray;">';
      out += '<a href="' + href + '">' + (text || href) + '</a>';
      out += '</blockquote>';
    } else if (isGifferable(href, title, text)) {
      var width = text === 'fullwidth' ? 'width:100%;' : text === 'halfwidth' || text === 'player' ? 'width:50%;' : text === 'thumbnail' ? 'width:320px;' : '';
      out += "<div style=\"".concat(width, "margin:auto;padding:0;\" class=\"giffer-container\"><img style=\"padding:0;\" data-gifffer-width=\"100%\" data-gifffer=\"").concat(href, "\" data-gifffer-alt=\"").concat(text, "\"");

      if (title) {
        out += ' title="' + title + '"';
      }

      if (specialClass) {
        out += ' class="' + specialClass + '"';
      }

      out += this.options.xhtml ? '/>' : '></div>';
    } else if (text === 'iframe') {
      out += "\n      <div class=\"resp-iframe-container\">\n        <iframe\n          src=\"".concat(href, "\"\n          xwidth=\"800\"\n          xheight=\"600\"\n          frameborder=\"0\"\n          allowfullscreen>\n        </iframe>\n      </div>");
    } else if (href.endsWith('.mp3')) {
      out += '<div style="margin:auto;padding:0;">\n';
      out += '<audio preload="auto" controls>\n';
      out += '<source type="audio/mpeg" src="' + href + '"/>\n';
      out += '</audio>\n';
      out += '</div>\n';
    } else {
      var youtubeEmbed = convertYoutubeFragmentToEmbed(href, text);
      var vimeoEmbed = convertVimeoFragmentToEmbed(href, text);

      if (youtubeEmbed) {
        out += youtubeEmbed;
      } else if (vimeoEmbed) {
        out += vimeoEmbed;
      } else if (text === 'swatch') {
        var bgColor = href || 'pink';
        out += "<div class=\"smartdown-swatch\" style=\"background:".concat(bgColor, "\"></div>");
      } else {
        var styles = {
          default: '',
          thumbnail: 'thumbnail',
          halfwidth: 'halfwidth',
          fullwidth: 'fullwidth'
        };
        var className = styles[text] || styles.default;
        out += '<img class="' + className + '" src="' + href + '" alt="' + text + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        if (specialClass) {
          out += ' class="' + specialClass + '"';
        }

        out += this.options.xhtml ? '/>' : '>';
      }
    }

    return out;
  }

  function importCssCode(cssCode) {
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';

    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = cssCode;
    } else {
      styleElement.appendChild(document.createTextNode(cssCode));
    }

    document.getElementsByTagName('head')[0].appendChild(styleElement);
  }

  function renderLink(href, title, text) {
    var smartdownTag = ':';
    var useNewWindow = true;
    var handled = false;

    for (var i = 0; i < linkRules.length; ++i) {
      var rule = linkRules[i];

      if (href.indexOf(rule.prefix) === 0) {
        var newHRef = rule.replace + href.slice(rule.prefix.length); // console.log('linkRule', href, newHRef, rule);

        href = newHRef;
        handled = true;
        useNewWindow = false;
        break;
      }
    }

    if (handled) {//
    } else if (href.indexOf(smartdownTag) === 0) {// x
    } else if (href.indexOf('http://') === -1 && href.indexOf('https://') === -1) {
      href = getServiceOrigin() + href;
    }

    var titleAttr = title ? "title=\"".concat(title, "\" ") : '';
    var linkHead = '<a ' + titleAttr + ' class="smartdown-link" href="' + href;

    if (useNewWindow) {
      linkHead += '" target="_blank" rel="noopener">';
    } else {
      linkHead += '">';
    }

    var linkBody = text;
    var lowerhref = href.toLowerCase();
    var linkTail = '</a>';
    var result = linkHead + linkBody + linkTail;

    if (lowerhref.indexOf(smartdownTag) === 0) {
      var cellscript = decodeInlineScript(href.slice(smartdownTag.length));
      var op = null;
      var lhs = null;
      var rhs = null;

      if (cellscript.indexOf('?') === 0) {
        op = 'INPUT';
        lhs = cellscript.slice(1);
      } else if (cellscript.indexOf('-') === 0) {
        op = 'INPUTRANGE';
        lhs = cellscript.slice(1);
      } else if (cellscript.indexOf('X') === 0) {
        op = 'INPUTCHECKBOX';
        lhs = cellscript.slice(1);
      } else if (cellscript.indexOf('!') === 0) {
        op = 'GET';
        lhs = cellscript.slice(1);
      } else if (cellscript.indexOf('@') === 0) {
        op = 'GO';
        lhs = cellscript.slice(1);
      } else if (cellscript.indexOf('=') === 0) {
        op = 'CALC';
        cellscript = cellscript.slice(1);
        var exprs = cellscript.split(';');

        if (exprs.length === 1) {
          var eqIndex = cellscript.indexOf('=');
          lhs = [cellscript.slice(0, eqIndex)];
          rhs = [cellscript.slice(eqIndex + 1)];
        } else {
          lhs = [];
          rhs = [];
          exprs.forEach(function (e) {
            var eqIndex = e.indexOf('=');
            lhs.push(e.slice(0, eqIndex));
            rhs.push(e.slice(eqIndex + 1));
          });
        } // console.log('lhs/rhs', lhs, rhs);

      } else if (cellscript.indexOf('/') === 0) {
        var parts2 = cellscript.split('@');
        op = parts2[0];
        lhs = parts2[1];
      } else if (cellscript.indexOf(':') === 0) {
        op = 'REVEAL';
        cellscript = cellscript.slice(1);

        if (cellscript.indexOf('/') >= 0) {
          var parts = cellscript.split('/');

          var _parts = _slicedToArray(parts, 2);

          lhs = _parts[0];
          rhs = _parts[1];
        } else {
          lhs = cellscript;
        }
      }

      var newHTML = '';
      var hasLabel = text && text.length > 0;

      if (op === 'INPUT') {
        cellIndex++;
        var inputCellId = 'INPUT' + cellIndex;
        var inputCellIdParts = lhs.split(/[\|\!]/g);
        var inputType = 'text';
        var liveBlur = false;

        if (inputCellIdParts.length > 1) {
          lhs = inputCellIdParts[0];
          inputType = inputCellIdParts[1];
        } else {
          liveBlur = true;
        }

        smartdownCells[inputCellId] = {
          cellBinding: lhs,
          cellID: inputCellId,
          cellType: 'input',
          datatype: inputType
        };

        if (hasLabel) {
          newHTML += '<span class="infocell-group">\n';
          newHTML += '<span class="infocell-group-addon"><span class="infocell-label">' + decodeURIComponent(text) + '</span></span>';

          if (inputType === 'number') {
            newHTML += '<input type="number" class="infocell-input"';
          } else {
            newHTML += '<textarea rows="1" type="text" class="infocell-textarea"';
          }
        } else if (inputType === 'number') {
          newHTML += '<input type="number" class="infocell-input"';
        } else {
          newHTML += '<textarea rows="1" type="text" class="infocell-textarea"';
        }

        if (inputType === 'number' || !liveBlur) {
          newHTML += ' onblur="smartdown.setVariable(\'' + lhs + '\', this.value, \'' + inputType + '\')"';
        } else {
          newHTML += ' onkeyup="smartdown.setVariable(\'' + lhs + '\', this.value, \'' + inputType + '\')"';
        }

        newHTML += ' id="' + inputCellId + '"'; // newHTML += ' placeholder="' + decodeURIComponent(text) + '" aria-describedby="' + lhs + '"';

        newHTML += '>';

        if (inputType === 'number') {
          newHTML += '\n';
        } else {
          newHTML += '</textarea>\n';
        }

        if (hasLabel) {
          newHTML += '</span>';
        }
      } else if (op === 'INPUTRANGE') {
        cellIndex++;
        var inputRangeCellId = 'INPUTRANGE' + cellIndex;
        var lhsElements = lhs.split('/');
        lhs = lhsElements[0];
        var min = lhsElements[1];
        var max = lhsElements[2];
        var step = lhsElements[3];
        min = min && min.length > 0 ? min : 0.0;
        max = max && max.length > 0 ? max : 100.0;
        step = step && step.length > 0 ? step : 1.0;
        smartdownCells[inputRangeCellId] = {
          cellBinding: lhs,
          cellID: inputRangeCellId,
          cellType: 'inputrange',
          datatype: 'number'
        };

        if (hasLabel) {
          newHTML += '<span class="infocell-group">\n';
          newHTML += '<span class="infocell-group-addon" id="' + lhs + '"><span class="infocell-label">' + decodeURIComponent(text) + '</span></span>';
        } // <input type="range" min="5" max="10" step="0.01">


        newHTML += '<input type="range"';
        newHTML += ' class="infocell-input-range"';
        newHTML += ' style="width:40%;"';
        newHTML += ' min="' + min + '"';
        newHTML += ' max="' + max + '"';
        newHTML += ' step="' + step + '"';
        newHTML += ' id="' + inputRangeCellId + '"';
        newHTML += ' oninput="smartdown.setVariable(\'' + lhs + '\', this.valueAsNumber, \'number\')"';
        newHTML += '</input>';

        if (hasLabel) {
          newHTML += '</span>';
        }
      } else if (op === 'INPUTCHECKBOX') {
        cellIndex++;
        var inputCheckboxCellId = 'INPUTCHECKBOX' + cellIndex;
        smartdownCells[inputCheckboxCellId] = {
          cellBinding: lhs,
          cellID: inputCheckboxCellId,
          cellType: 'inputcheckbox',
          datatype: 'boolean'
        };

        if (hasLabel) {
          newHTML += '<span class="infocell-group">\n';
          newHTML += '<span class="infocell-group-addon" id="' + lhs + '"><span class="infocell-label">' + decodeURIComponent(text) + '</span></span>';
        }

        newHTML += '<input type="checkbox"';
        newHTML += ' id="' + inputCheckboxCellId + '"';
        newHTML += ' onchange="smartdown.setVariable(\'' + lhs + '\', this.checked, \'boolean\')"';
        newHTML += '</input>';

        if (hasLabel) {
          newHTML += '</span>';
        }
      } else if (op === 'CALC') {
        ++cellIndex;
        var manualInvoke = hasLabel;
        var expr = smartdown.registerExpression(cellIndex, text, lhs, rhs, hasLabel);

        if (manualInvoke) {
          newHTML += "<button\n  class=\"btn-infocell btn-infocell-calc\"\n  onclick=\"smartdown.computeStoredExpression('".concat(expr.exprId, "')\">\n  <span id=\"").concat(expr.labelId, "\">").concat(expr.labelText, "</span>\n</button>");
        } else {
          newHTML += "<span style=\"display:none;\" id=\"".concat(expr.labelId, "\"></span>");
        }
      } else if (op === 'GO') {
        newHTML += '<button class="btn-infocell btn-infocell-go" onclick="smartdown.goToCard(\'' + lhs + '\')">' + decodeURIComponent(text) + '</button>';
      } else if (op === 'GET') {
        cellIndex++;
        var outputCellId = 'OUTPUT_' + cellIndex;
        var outputCellIdParts = lhs.split(/[\|\!]/g);
        var outputType = 'text';

        if (outputCellIdParts.length > 1) {
          lhs = outputCellIdParts[0];
          outputType = outputCellIdParts[1];
        }

        smartdownCells[outputCellId] = {
          cellBinding: lhs,
          cellID: outputCellId,
          cellType: 'output',
          datatype: outputType
        };

        if (hasLabel) {
          newHTML += '<span class="infocell-group">\n';

          if (text && text.length > 0) {
            newHTML += '<span class="infocell-group-addon"><span class="infocell-label">' + decodeURIComponent(text) + '</span></span>';
          }
        }

        if (outputType !== '' && outputType !== 'text' && outputType !== 'url') {
          var smartdownClass = 'smartdown-' + outputType;
          newHTML += "<div class=\"infocell-output ".concat(smartdownClass, "\" id=\"").concat(outputCellId, "\"></div>");
        } else {
          newHTML += "<span class=\"infocell-output\" id=\"".concat(outputCellId, "\"></span>");
        }

        if (hasLabel) {
          newHTML += '</span>';
        }
      } else if (op === 'REVEAL') {
        cellIndex++;
        var body = decodeURIComponent(text);

        if (rhs === null) {
          newHTML += "<button\n                  id=\"trigger_".concat(lhs, "\"\n                  class=\"btn-infocell btn-infocell-disclosable\"\n                  onclick=\"smartdown.toggleDisclosureButton('").concat(lhs, "', 'visible');\">\n                  <span id=\"span_").concat(lhs, "_closed\">&#9655;&nbsp;").concat(body, "</span>\n                  <span id=\"span_").concat(lhs, "_opened\" style=\"display: none\">&#9661;&nbsp;").concat(body, "</span>\n                  </button>");
        } else if (rhs === 'tooltip') {
          newHTML += "<span\n                      class=\"infocell-tooltip-disclosable-wrapper\"\n                      onmouseleave=\"smartdown.tooltipWrapperExit('".concat(lhs, "', 'tooltip');\">\n                    <a\n                      id=\"trigger_").concat(lhs, "_").concat(cellIndex, "\"\n                      class=\"infocell-tooltip-disclosable\"\n                      onmouseenter=\"smartdown.tooltipTriggerEnter('").concat(lhs, "', 'trigger_").concat(lhs, "_").concat(cellIndex, "', 'tooltip');\">\n                      ").concat(body, "\n                    </a></span>");
        }
      }

      result = newHTML;
    }

    return result;
  }

  function renderParagraph(text) {
    var result = '<p class="smartdown_p">' + text + '</p>\n'; // if (text[0] === '<') {
    //   result = text;
    // }

    return result.trim();
  }

  function renderBr() {
    return this.options.xhtml ? '<br/>' : '<br class="smartdown_br">';
  }

  var disclosableDivsOpened = 0;

  function renderHeading(text, level, raw) {
    var result = "";
    var i = text.lastIndexOf('::::');

    if (i >= 0) {
      var disclosableDeclaration = text.slice(i + 4).trim();
      text = text.slice(0, i);

      if (disclosableDivsOpened > 0 && disclosableDeclaration.length === 0) {
        disclosableDivsOpened -= 1;
        result += "</div>";
      } else {
        disclosableDivsOpened += 1;
        result += "\n              <div\n                id=\"".concat(disclosableDeclaration, "\"\n                class=\"disclosable-content\"\n              > ");
      }
    } else {
      result = markedOpts.renderer.baseHeadingRenderer(text, level, raw);
    }

    return result;
  } // function renderList(body, ordered, start) {
  //   var result = markedModule.Renderer.prototype.list(body, ordered, start);
  //   return result.trim();
  // }
  // function renderListItem(text) {
  //   var result = markedModule.Renderer.prototype.listitem(text);
  //   return result.trim();
  // }
  // function renderTableCell(content, flags) {
  //   console.log('renderTableCell', content, flags);
  //   var type = flags.header ? 'th' : 'td';
  //   var tag = flags.align
  //     ? '<' + type + ' style="text-align:' + flags.align + '">'
  //     : '<' + type + '>';
  //   return tag + content + '</' + type + '>\n';
  // }


  function enhanceMarkedAndOpts() {
    markedModule.InlineLexer.prototype.output = smartdownLexer;
    markedModule.InlineLexer.prototype.output.bind(markedModule.InlineLexer.prototype);
    var renderer = new markedModule.Renderer();

    function replace(regex, opt) {
      regex = regex.source;
      opt = opt || '';
      return function self(name, val) {
        if (!name) {
          return new RegExp(regex, opt);
        }

        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return self;
      };
    }
    /* eslint no-spaced-func: 0 */

    /* eslint no-unexpected-multiline: 0 */


    markedOpts.renderer = renderer; // var aLexer = new markedModule.Lexer(markedOpts);
    // aLexer.rules.paragraph = replace(aLexer.rules.paragraph)
    //   ('*(#{1,6}) +', '*(#{1,6}) *')
    //   ();
    // aLexer.rules.heading = replace(aLexer.rules.heading)
    //   ('*(#{1,6}) +', '*(#{1,6}) *')
    //   ();
    // renderer.$compile = null;
    // renderer.$scope = null;

    renderer.baseCodeRenderer = renderer.code;
    renderer.code = renderCode;
    renderer.link = renderLink;
    renderer.image = renderImage;
    renderer.paragraph = renderParagraph;
    renderer.br = renderBr;
    renderer.baseHeadingRenderer = renderer.heading;
    renderer.heading = renderHeading; // renderer.list = renderList;
    // renderer.listitem = renderListItem;
    // renderer.tablecell = renderTableCell;
  } //
  // End of marked.js extensions
  //


  function partitionMultipart(markdown) {
    markdown = '\n' + markdown; // deal with lack of leading \n

    var splits = markdown.split(/\n# ([a-zA-Z0-9_]+)\n\-\-\-\n/);
    var result = {};
    var firstKey = null;

    for (var i = 1; i < splits.length; i += 2) {
      result[splits[i]] = splits[i + 1];

      if (!firstKey) {
        firstKey = splits[i];
      }
    }

    var defaultKeyName = '_default_';

    if (!firstKey) {
      result[defaultKeyName] = markdown;
    } else {
      result[defaultKeyName] = result[firstKey];
    }

    return result;
  }

  function registerExpression(cellIndex, labelText, lhss, rhss, manual) {
    if (lhss.length !== rhss.length) {
      console.log('###registerExpression, lhss.length !== rhss.length', lhss, rhss);
      return null;
    }

    labelText = decodeInlineScript(labelText);
    labelText = labelText.replace(/<code>/g, '`');
    labelText = labelText.replace(/<\/code>/g, '`');
    var types = [];

    for (var i = 0; i < lhss.length; ++i) {
      var lhs = lhss[i];
      var calcCellIdParts = lhs.split(/[\|\!]/g);
      var calcType = 'text';

      if (calcCellIdParts.length > 1) {
        lhs = calcCellIdParts[0];
        calcType = calcCellIdParts[1];
      }

      lhss[i] = lhs;
      types.push(calcType);
    }

    var rootDivId = currentRenderDiv.id;
    var exprId = "expr-".concat(cellIndex);
    var labelId = "label-".concat(exprId);
    var expr = {
      rootDivId: rootDivId,
      exprId: exprId,
      labelId: labelId,
      labelText: labelText,
      manual: manual,
      lhss: lhss,
      rhss: rhss,
      types: types
    };
    perPageState.expressionsRegistered[exprId] = expr;
    return expr;
  }

  function computeExpressions() {
    // console.log('computeExpressions', perPageState.expressionsRegistered);
    for (var exprId in perPageState.expressionsRegistered) {
      var entry = perPageState.expressionsRegistered[exprId];

      if (!entry) {
        console.log('computeExpressions DELETED', exprId);
      } else {
        if (entry.labelId) {
          var rootDiv = document.getElementById(entry.rootDivId);
          var labelElement = document.getElementById(entry.labelId);

          if (!labelElement) {
            console.log('computeExpressions NO LABEL', entry, entry.labelId, entry.rootDivId, rootDiv); // debugger;
          } else {
            labelElement.innerHTML = expandStringWithSubstitutions(entry.labelText);
          }
        }

        if (!entry.manual) {
          smartdown.computeExpression(entry);
        }
      }
    }
  }

  function registerPlayable(prelude, language, rootDivId, divId, preId, dbgId, scriptId, functionId, playId, stopId, dbgToggleId, progressId, autoplay, code, transform) {
    var augmentedCode = code;
    var playableType = playableTypes[language];
    var imports = prelude.imports;
    var includes = prelude.includes; // console.log('registerPlayable', prelude, language, rootDivId, divId, preId, code.slice(0, 50), playId, stopId);

    if (playableType.javascript) {
      if (language === 'go' && playableType.transform) {
        augmentedCode = "\n// Augmented JS to support GoDown\n// console.log('playable:".concat(scriptIndex, ":', playable);\neval(playable.transformedCode);\n//        this.div.innerHTML='<pre><code>' + playable.transformedCode + '</code></pre>';\n");
      } else if (language === 'brython') {
        var brythonScriptId = scriptId + '_brython';
        augmentedCode = "\nconst pythonSource =\n`".concat(code, "`;\n\n\nlet s = document.getElementById('").concat(brythonScriptId, "');\nif (!s) {\n  s = document.createElement('script');\n  s.type = 'text/python3';\n  s.id = '").concat(brythonScriptId, "';\n}\n\ns.innerHTML = '';\n\ntry {\n  s.appendChild(document.createTextNode(pythonSource));\n  document.body.appendChild(s);\n} catch (e) {\n  s.text = code;\n  document.body.appendChild(s);\n}\n\nconst div = document.getElementById(\"").concat(divId, "\");\nconst smartdownPlayableContext = {\n  smartdown: smartdown,\n  divId: \"").concat(divId, "\",\n  div: div,\n  this: this,\n  env: env\n};\n\nif (typeof __BRYTHON__ === 'object') {\n  if (!__BRYTHON__.isConfiguredForSmartdown) {\n    const brythonResult = brython({\n     debug: 1,\n     static_stdlib_import: false,\n     ipy_id: []});\n    __BRYTHON__.isConfiguredForSmartdown = true;\n  }\n\n  const moduleName = '").concat(brythonScriptId, "'; // '__main__';\n  const localsId = '").concat(brythonScriptId, "';\n  const lineInfo = null;\n\n  __BRYTHON__.$options = {\n    debug: 1\n  };\n  const tree = __BRYTHON__.py2js(\n                pythonSource,\n                moduleName,\n                moduleName, // localsId,\n                lineInfo); // .to_js();\n  let js = tree.to_js();\n  var ns = __BRYTHON__.$call(__BRYTHON__.builtins.dict)();\n  __BRYTHON__.smartdown = smartdownPlayableContext;\n  __BRYTHON__.__ARGV = [smartdownPlayableContext];\n\n  eval(js, ns);\n}\nelse {\n  const errorMsg = '__BRYTHON__ is not defined. Probably due to debugging or some failure to load the Brython library';\n  console.log(errorMsg);\n  div.innerHTML = '<h4>' + errorMsg + '</h4>';\n}\n"); // Other tactics that failed...
        // eval(__BRYTHON__.py2js(src).to_js()))
        // $B.py2js = function(src, module, locals_id, parent_scope, line_info){
        //     // src = Python source (string)
        //     // module = module name (string)
        //     // locals_id = the id of the block that will be created
        //     // parent_scope = the scope where the code is created
        //     // line_info = [line_num, parent_block_id] if debug mode is set
        //     //
        //     // Returns a tree structure representing the Python source code
        // {
        //   const brythonResult = brython({
        //    debug: 1,
        //    ipy_id: ['${brythonScriptId}'],
        //    args: [smartdownPlayableContext, '${brythonScriptId}']});
        //   console.log('__BRYTHON__.__ARGV', __BRYTHON__.__ARGV);
        // }
        // else if (true) {
        // {
        //   const $B = __BRYTHON__;
        //   console.log('$B defined', $B);
        //   console.log('$B.builtins.dict', $B.builtins.dict);
        //   var ns = $B.$call($B.builtins.dict)();
        //   const brythonResult2 = $B.builtins.exec(pythonSource, ns);
        //   console.log('brythonResult2', brythonResult2);
        // }
      } else if (language.toLowerCase() === 'p5js') {
        if (language === 'P5JS') {
          augmentedCode = "\n// Augmented P5JS script to support Global Mode emulation.\n// function(".concat(playableArgNames.join(', '), ")\np5.TriOsc = P5.TriOsc;\np5.FFT = P5.FFT;\np5.Vector = P5.Vector;\n\n//P5SystemVarDecls\n").concat(P5SystemVarDecls, "\n\n//P5VarDefs\n").concat(P5VarDefs, "\n\n// -----------------\n// Begin User Script\n").concat(code, "\n// End User Script\n// -----------------\n\n//P5UserFunctionDefs\n").concat(P5UserFunctionDefs, "\n"); // console.log('P5JS augmentedCode in registerplayable');
          // console.log(augmentedCode);
        } else {
          augmentedCode = "\n// Begin Augmented script\n// function(".concat(playableArgNames.join(', '), ")\n\np5.TriOsc = P5.TriOsc;\np5.FFT = P5.FFT;\np5.Vector = P5.Vector;\n\n// End Augmented script\n\n// Begin User Script\n").concat(code, "\n// End User Script\n");
        }
      }
    }

    perPageState.playablesRegistered[divId] = {
      language: language,
      rootDivId: rootDivId,
      divId: divId,
      preId: preId,
      dbgId: dbgId,
      scriptId: scriptId,
      functionId: functionId,
      playId: playId,
      stopId: stopId,
      dbgToggleId: dbgToggleId,
      progressId: progressId,
      autoplay: autoplay,
      playing: false,
      dependLastValues: {},
      p5: null,
      embedThis: {},
      index: perPageState.playablesRegisteredOrder.length,
      code: code,
      transform: transform,
      transformedCode: null,
      augmentedCode: augmentedCode,
      imports: imports,
      includes: includes
    };
    perPageState.playablesRegisteredOrder.push(perPageState.playablesRegistered[divId]);
    return perPageState.playablesRegistered[divId];
  }

  function playPlayableInternal(language, divId) {
    var playable = perPageState.playablesRegistered[divId];
    var div = document.getElementById(playable.divId);
    var divPre = document.getElementById(playable.preId); // var divDbg = document.getElementById(playable.dbgId);
    // var divDbgToggle = document.getElementById(playable.dbgToggleId);

    var play = document.getElementById(playable.playId);
    var stop = document.getElementById(playable.stopId);
    var script = document.getElementById(playable.scriptId);
    var progress = document.getElementById(playable.progressId);

    if (play) {
      play.style.display = 'none';
      stop.style.display = 'inline-block';
    }

    if (divPre) {
      divPre.style.display = 'none';
    }

    div.style.display = 'block';

    if (progress) {
      progress.style.display = 'block';
    }

    playable.playing = true;

    if (div) {
      div.style.display = 'block';
    }

    var playableType = playableTypes[language];

    if (playableType.javascript) {
      /* eslint no-new-func: 0 */
      var argvalues = [playable, smartdownVariables, P5Loader, window.d3v5, window.d3fc, window.d3dc, window.topojson, Plotly, Leaflet, Stdlib, Three, module.exports, {} // This will be a p5 obj in the case of using P5Loader
      ];
      playable.embedThis = {
        env: smartdownVariables,
        div: div,
        progress: progress,
        dependOn: [],
        depend: null,
        atExitHandlers: [],
        atExit: function atExit(func) {
          // console.log('atExit', func, this);
          this.atExitHandlers.push(func);
        }
      };

      if (language.toLowerCase() !== 'p5js') {
        var func = _construct(Function, playableArgNames.concat([script.text]));

        try {
          var embedResult = func.apply(playable.embedThis, argvalues);

          if (language === 'leaflet') {
            if (!playable.embedThis.leafletMap) {
              playable.embedThis.leafletMap = embedResult;
            }
          }
        } catch (e) {
          console.log('#### Error playing ', language, e);
          div.innerHTML = "\n<pre><code style=\"color:tomato;\">\n<b>Error Initializing ".concat(language, "</b>\n").concat(e, "\n</code></pre>\n");
        }
      } else {
        var _func2;

        // if (playable.language === 'P5JS') {
        //   playable.augmentedCode =
        //     `
        //     // Augmented P5JS script to support Global Mode emulation.
        //     // function(${playableArgNames.join(', ')})
        //     p5.TriOsc = P5.TriOsc;
        //     p5.FFT = P5.FFT;
        //     p5.Vector = P5.Vector;
        //     //P5SystemVarDecls
        //     ${P5SystemVarDecls}
        //     //P5VarDefs
        //     ${P5VarDefs}
        //     // -----------------
        //     // Begin User Script
        //     ${playable.code}
        //     // End User Script
        //     // -----------------
        //     //P5UserFunctionDefs
        //     ${P5UserFunctionDefs}
        //     `;
        // }
        // else {
        //   playable.augmentedCode =
        //     `
        //     // Augmented P5JS script
        //     // function(${playableArgNames.join(', ')})
        //     p5.TriOsc = P5.TriOsc;
        //     p5.FFT = P5.FFT;
        //     p5.Vector = P5.Vector;
        //     // -----------------
        //     // Begin User Script
        //     ${playable.code}
        //     // End User Script
        //     // -----------------
        //     `;
        // }
        // divDbg.innerHTML = playable.augmentedCode;
        var _func = _construct(Function, playableArgNames.concat([playable.augmentedCode]));
        /* eslint no-eval: 0 */
        // /* eslint no-inner-declarations: 0 */
        // function patchedDisposeSound() {
        //   /* eslint no-invalid-this: 0 */
        //   for (var i = 0; i < P5Loader.soundOut.soundArray.length; i++) {
        //     var soundResource = P5Loader.soundOut.soundArray[i];
        //     if (!soundResource.owner ||
        //         soundResource.owner === this) {
        //       // console.log('DISPOSE [' + i + '] disposeSound soundResource:', soundResource);
        //       soundResource.dispose();
        //     }
        //   }
        // }
        // var removeHandlers = P5Loader.prototype._registeredMethods.remove;
        // for (var i = 0; i < removeHandlers.length; ++i) {
        //   if (removeHandlers[i] === P5Loader.prototype.disposeSound) {
        //     removeHandlers[i] = patchedDisposeSound;
        //   }
        // }
        // var oldmousemove = P5Loader.prototype._onmousemove;
        // P5Loader.prototype._onmousemove = function(e) {
        //   console.log('onmousemove', e);
        // };
        // var oldtouchend = P5Loader.prototype._ontouchend;


        P5Loader.prototype._ontouchend = function (e) {
          // Smartdown addition to capture page dimensions
          e.clientX = e.pageX;
          e.clientY = e.pageY; // return oldtouchend.apply(this, arguments);
          // This code will be needed until a fix is made to 0.5.8 of P5JS
          // Copied from 0.5.8 of P5JS
          // Working around bug in https://github.com/processing/p5.js/pull/1820/files

          this._updateTouchCoords(e);

          this._updateNextMouseCoords(e);

          if (this.touches.length === 0) {
            this._setProperty('touchIsDown', false);
          }

          var context = this._isGlobal ? window : this;
          var executeDefault;

          if (typeof context.touchEnded === 'function') {
            executeDefault = context.touchEnded(e);

            if (executeDefault === false) {
              e.preventDefault();
            }
          } else if (typeof context.mouseReleased === 'function') {
            executeDefault = context.mouseReleased(e);

            if (executeDefault === false) {
              e.preventDefault();
            }
          } // BUGGY 0.58 code: else {
          // BUGGY 0.58 code:   e.preventDefault();
          // BUGGY 0.58 code:   return false;
          // BUGGY 0.58 code: }

        };

        playable.embedThis.IAMP5 = 'IAMP5';
        _func = (_func2 = _func).bind.apply(_func2, [playable.embedThis].concat(_toConsumableArray(argvalues.slice(0, -1))));

        try {
          var keydownHandler = function keydownHandler(e) {
            // console.log('keydownHandler', e.target.tagName, e);
            var ignoreKeys = [myP5.LEFT_ARROW, myP5.RIGHT_ARROW, myP5.UP_ARROW, myP5.DOWN_ARROW, 32];

            if (e.target.tagName === 'BODY' && ignoreKeys.indexOf(e.keyCode) >= 0) {
              // console.log('ignoring', e);
              e.preventDefault();
            }
          };

          var myP5 = new P5Loader(_func, div); // console.log('myP5', myP5);

          myP5.frameRate(25);

          myP5._onresize();

          myP5.keydownHandler = keydownHandler;
          window.addEventListener('keydown', keydownHandler, false);
          playable.p5 = myP5;
        } catch (e) {
          console.log('#### Error initializing P5JS', e);
          div.innerHTML = "\n<pre><code style=\"color:tomato;\">\n<b>Error Initializing P5JS</b>\n".concat(e, "\n</code></pre>\n"); // resetPlayable(language, divId);
        }
      }

      if (playable && playable.playing) {
        var _playable$embedThis = playable.embedThis,
            depend = _playable$embedThis.depend,
            dependOn = _playable$embedThis.dependOn;
        var lastValues = playable.dependLastValues;
        var possiblyModifiedProgressDiv = playable.embedThis.progress;

        if (depend) {
          var signal = false;

          if (dependOn) {
            var atLeastOneUndefined = false;
            dependOn.forEach(function (varname) {
              // console.log('...varname', varname, lastValues[varname]);
              var newValue = smartdownVariables[varname];

              if (newValue === undefined) {
                atLeastOneUndefined = true;
              }

              lastValues[varname] = newValue;
            });
            signal = !atLeastOneUndefined;
          } else {
            signal = true;
          }

          if (signal) {
            if (possiblyModifiedProgressDiv) {
              possiblyModifiedProgressDiv.style.display = 'none';
            }

            depend.apply(playable.embedThis);
          }
        } else if (possiblyModifiedProgressDiv) {
          possiblyModifiedProgressDiv.style.display = 'none';
        }
      }
    } else if (language === 'mermaid') {
      mermaidRender(div, script.text);

      if (progress) {
        progress.style.display = 'none';
      }
    } else if (language === 'graphviz') {
      div.innerHTML = '<i>...rendering graphviz...</i>';
      jsModules.graphviz.loader(function () {
        var options = {
          images: graphvizImages
        };
        new Viz().renderString(script.text, options).then(function (result) {
          if (progress) {
            progress.style.display = 'none';
          }

          div.innerHTML = result;
        });
      });
    }
  }

  function recursivelyLoadImports(language, divId, importsRemaining, done) {
    if (importsRemaining.length > 0) {
      var nextImport = importsRemaining.shift(); // console.log('nextImport', nextImport);
      // DRY THIS UP

      if (nextImport === 'stdlib') {
        smartdown.jsModules.stdlib.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'd3') {
        smartdown.jsModules.d3.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'brython') {
        smartdown.jsModules.brython.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport.toLowerCase() === 'p5js') {
        smartdown.jsModules.p5js.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'three') {
        smartdown.jsModules.three.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'ldf') {
        smartdown.jsModules.ldf.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'plotly') {
        smartdown.jsModules.plotly.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'graphviz') {
        smartdown.jsModules.graphviz.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else if (nextImport === 'mermaid') {
        smartdown.jsModules.mermaid.loader(function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      } else {
        loadExternal(nextImport, function () {
          recursivelyLoadImports(language, divId, importsRemaining, done);
        });
      }
    } else if (done) {
      done();
    }
  }

  function playPlayable(language, divId) {
    var playable = perPageState.playablesRegistered[divId];

    if (playable) {
      var importsRemaining = playable.imports.slice(0); // Copy

      recursivelyLoadImports(language, divId, importsRemaining, function () {
        playPlayableInternal(language, divId);
      });
    } else {
      console.log('playPlayable... not found', language, divId, perPageState.playablesRegistered, perPageState.playablesRegisteredOrder);
    }
  }

  function resetPlayable(language, divId, throwAway) {
    var playable = perPageState.playablesRegistered[divId];

    if (!playable.playing) {// console.log('resetPlayable NOT PLAYING', language, divId);
    } else {
      // console.log('resetPlayable PLAYING', playable.divId, playable);
      var div = document.getElementById(playable.divId);
      var play = document.getElementById(playable.playId);
      var stop = document.getElementById(playable.stopId);
      var progress = document.getElementById(playable.progressId);

      if (play) {
        play.style.display = 'inline-block';
        stop.style.display = 'none';
      }

      if (progress) {
        progress.style.display = 'none';
      }

      var divPre = document.getElementById(playable.preId);

      if (divPre && !throwAway) {
        divPre.style.display = 'block';
      }

      var playableType = playableTypes[language];
      playable.playing = false;
      div.style.display = 'none';

      if (playableType.javascript) {
        var atExitHandlers = playable.embedThis.atExitHandlers;
        atExitHandlers.forEach(function (func) {
          // console.log('resetPlayable... calling atExitHandler', func);
          func();
        });

        if (language.toLowerCase() === 'p5js') {
          var myP5 = playable.p5;

          if (myP5) {
            window.removeEventListener('keydown', myP5.keydownHandler); // myP5.noLoop();

            playable.p5 = null;
            myP5.remove();

            if (div) {
              var canvas = div.getElementsByTagName('canvas');

              if (canvas && canvas.length > 0) {
                div.removeChild(canvas[0]);
              }
            }
          }
        } else if (language === 'leaflet') {
          if (!playable.embedThis) {
            console.log('   playable.embedThis', playable.embedThis, playable, divId);
          }

          if (playable.embedThis.leafletMap) {
            // console.log('leaflet playable.embedThis.leafletMap', playable.embedThis.leafletMap);
            playable.embedThis.leafletMap.remove();
            delete playable.embedThis.leafletMap;
          }
        } else if (language === 'go') {
          if (playable.isGodownMain) {
            try {
              /* global Godown_Shutdown */
              Godown_Shutdown();
            } catch (e) {
              console.log('exception from runtime.Goexit', e);
            }
          }
        }
      }

      div.innerHTML = '';
    }
  }

  function toggleDebug(divId) {
    var div = document.getElementById(divId);
    var newStyle = div.style.display === 'block' ? 'none' : 'block';
    div.style.display = newStyle;
  }

  function activateTooltip(divId, triggerId) {
    var _this = this;

    var div = document.getElementById(divId);
    window.clearTimeout(div.disclosableTimer);
    div.disclosableTimer = null;

    if (div.classList.contains('tooltip')) {// console.log('activateTooltip ERROR. classList already has tooltip');
    } else {
      // console.log('activateTooltip', divId, triggerId, div);
      div.disclosableLocked = false;
      var trigger = document.getElementById(triggerId);
      div.style.top = "".concat(trigger.offsetTop + trigger.offsetHeight, "px");
      var tooltipWidth = Math.floor(window.innerWidth / 3);

      if (trigger.offsetLeft + tooltipWidth < window.innerWidth) {
        div.style.left = "".concat(trigger.offsetLeft, "px");
      } else {
        var tooltipLeft = trigger.offsetLeft + trigger.offsetWidth - tooltipWidth;
        div.style.left = "".concat(tooltipLeft, "px");
      }

      div.classList.add('tooltip');

      div.onmouseenter = function (e) {
        div.disclosableLocked = true;
        window.clearTimeout(div.disclosableTimer);
        div.disclosableTimer = null;
      };

      div.onmouseleave = function (e) {
        if (e.pageX <= div.offsetLeft || e.pageX >= div.offsetLeft + div.offsetWidth || e.pageY <= div.offsetTop || e.pageY >= div.offsetTop + div.offsetHeight) {
          // console.log('nonbogus mouseleave', e.clientY, e.pageY, div.offsetTop, div.offsetHeight, e);
          div.disclosableLocked = false;
          div.disclosableTimer = window.setTimeout(function (_) {
            _this.deactivateTooltip(divId);
          }, 200);
        } else {// Scrolling induces mouseLeave events even thought the mouse
          // is within its element. The above code verifies that it is
          // an authentic mouseleave.
          // console.log('ignoring bogus mouseleave', e.clientY, e.pageY, div.offsetTop, div.offsetHeight, e);
        }
      };
    }
  }

  function deactivateTooltip(divId, overrideLocked) {
    var div = document.getElementById(divId);

    if (overrideLocked || !div.disclosableLocked) {
      window.clearTimeout(div.disclosableTimer);
      div.disclosableTimer = null;
      div.disclosableLocked = false;

      if (!div.classList.contains('tooltip')) {// console.log('deactivateTooltip ERROR. classList has no tooltip');
      } else {
        div.classList.remove('tooltip');
        div.onmouseenter = null;
        div.onmouseleave = null;
      }
    }
  }

  function tooltipWrapperExit(divId) {
    var _this2 = this;

    var div = document.getElementById(divId);
    div.disclosableTimer = window.setTimeout(function (_) {
      _this2.deactivateTooltip(divId);
    }, 500);
  }

  function tooltipTriggerEnter(divId, triggerId) {
    this.activateTooltip(divId, triggerId);
  }

  function toggleDisclosureButton(divId, disclosureType) {
    var div = document.getElementById(divId);
    var willBeOpen = !div.classList.contains(disclosureType);
    div.classList.toggle(disclosureType);
    var openedSpan = document.getElementById("span_".concat(divId, "_opened"));
    openedSpan.style.display = willBeOpen ? 'inline' : 'none';
    var closedSpan = document.getElementById("span_".concat(divId, "_closed"));
    closedSpan.style.display = willBeOpen ? 'none' : 'inline';
  }

  function toggleDisclosure(divId, disclosureType) {
    var div = document.getElementById(divId); // console.log('td', divId, div);

    var willBeOpen = !div.classList.contains(disclosureType);
    div.classList.toggle(disclosureType);
  }

  function pause() {
    each(perPageState.playablesRegisteredOrder, function (playable) {
      if (playable && playable.p5) {
        playable.p5.getAudioContext().suspend();
      }
    });
  }

  function resume() {
    each(perPageState.playablesRegisteredOrder, function (playable) {
      if (playable && playable.p5) {
        playable.p5.getAudioContext().resume();
      }
    });
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      pause();
    } else {
      resume();
    }
  }

  function startAutoplay(outputDiv) {
    // console.log('startAutoplay', outputDiv, mermaid, mermaidAPI);
    if (outputDiv && outputDiv.id) {
      each(perPageState.playablesRegisteredOrder, function (playable) {
        // console.log('startAutoplay', outputDiv, outputDiv.id, playable);
        if (playable.autoplay && !playable.playing) {
          var sel = '#' + outputDiv.id + ' #' + playable.divId;
          var divHere = document.querySelectorAll(sel);

          if (divHere && divHere.length > 0) {
            playPlayable(playable.language, playable.divId);
          } else {// console.log('...startAutoplay DIV NOT FOUND', sel, outputDiv, outputDiv.id, playable);
          }
        }
      });
    }
  }

  function resetPerPageState() {
    perPageState.expressionsRegistered = {};
    perPageState.playablesRegistered = {};
    perPageState.playablesRegisteredOrder = [];
  }

  function cleanupOrphanedStuff() {
    var newER = {};

    for (var exprId in perPageState.expressionsRegistered) {
      var expr = perPageState.expressionsRegistered[exprId];

      if (!expr) {// console.log('cleanupOrphanedStuff expr DELETED', exprId);
      } else {
        var element = document.getElementById(expr.rootDivId);
        var labelElement = document.getElementById(expr.labelId); // console.log('cleanupOrphanedStuff/expr', expr.rootDivId, expr);

        if (element && labelElement) {
          newER[expr.exprId] = expr; // console.log('...cleanupOrphanedStuff/expr div found', expr.rootDivId, expr, element);
        } else {// console.log('...cleanupOrphanedStuff/expr divs not found', expr.rootDivId, expr.labelId, expr, element, labelElement);
          }
      }
    }

    perPageState.expressionsRegistered = newER;
    var newPRO = [];
    var newPR = {};
    each(perPageState.playablesRegisteredOrder, function (playable) {
      // console.log('cleanupOrphanedStuff/playable', playable.divId, playable.scriptId, playable);
      var element1 = document.getElementById(playable.divId);
      var element2 = document.getElementById(playable.scriptId);

      if (element1 && element2) {
        newPRO.push(playable);
        newPR[playable.divId] = playable; // console.log('...cleanupOrphanedStuff/playable div found', playable.playing, playable.divId, playable.scriptId, playable, element1, element2);
      } else {
        playable.deleted = true; // console.log('...cleanupOrphanedStuff/playable div not found', playable.playing, playable.divId, playable.scriptId, playable, element1, element2);
      }
    }); // console.log('pruning candidates old/new');
    // console.log(perPageState.playablesRegistered);
    // console.log(newPR);
    // console.log(perPageState.playablesRegisteredOrder);
    // console.log(newPRO);

    perPageState.playablesRegistered = newPR;
    perPageState.playablesRegisteredOrder = newPRO; // console.log('newPRO', newPRO);
  }

  function resetAllPlayables(outputDiv, throwAway) {
    // console.log('resetAllPlayables', perPageState.playablesRegisteredOrder);
    each(perPageState.playablesRegisteredOrder, function (playable) {
      if (outputDiv.id === playable.rootDivId && playable.divId) {
        var playableElement = document.getElementById(playable.divId);

        if (playableElement) {
          // console.log('resetAllPlayables', playable.divId, playableElement, perPageState.playablesRegisteredOrder);
          var playableScript = document.getElementById(playable.scriptId);

          if (playableScript) {
            resetPlayable(playable.language, playable.divId, throwAway);
          } else {
            console.log('resetAllPlayables SCRIPT DIV NOT FOUND', outputDiv.id, playable.divId, playable.scriptId, playable);
          }
        } else {
          console.log('resetAllPlayables PLAYABLE DIV NOT FOUND', outputDiv.id, playable.divId, playable.scriptId, playable);
        }
      }
    });
    pause();
  }

  function transformPlayables(outputDiv, done) {
    var playablesToTransform = [];

    if (window.godownTranslate) {
      each(perPageState.playablesRegisteredOrder, function (playable) {
        if (playable.transform) {
          if (outputDiv.id) {
            var sel = '#' + outputDiv.id + ' #' + playable.scriptId;
            var divHere = document.querySelectorAll(sel);

            if (divHere && divHere.length > 0) {
              playablesToTransform.push(playable);
            }
          }
        }
      });
    }

    function recursiveTransform(playablesToTransform, done) {
      if (playablesToTransform.length === 0) {
        done();
      } else {
        var playable = playablesToTransform[0];
        var code = playable.code;
        var packageIndex = code.indexOf('package ');

        if (packageIndex === 0) {
          var packageEndIndex = code.indexOf('\n');

          if (packageEndIndex !== 0) {
            var packageName = code.slice('package '.length, packageEndIndex);
            var divAccessCode = "\nwindow.godownDiv_".concat(packageName, " = '").concat(playable.divId, "';\nconsole.log('window.godownDiv_").concat(packageName, "', window.godownDiv_").concat(packageName, ");\n");

            try {
              window.godownTranslate(packageName, code, function (transformedCodeResult) {
                playable.isGodownMain = packageName === 'main';
                playable.transformedCode = divAccessCode + transformedCodeResult;
                recursiveTransform(playablesToTransform.slice(1), done);
              });
            } catch (e) {
              console.log('# Exception during transform', e);
            }
          }
        }
      }
    }

    recursiveTransform(playablesToTransform, done);
  }

  function configure(options, configurationCompletedHandler) {
    var loadedHandler = configurationCompletedHandler;
    var media = options.media;
    var _baseURL = options.baseURL;
    var _cardLoader = options.cardLoader;
    var _calcHandlers = options.calcHandlers;
    var _linkRules = options.linkRules;
    document.addEventListener('visibilitychange', handleVisibilityChange);
    /* global navigator */

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      document.querySelector('meta[name=viewport]').setAttribute('content', 'initial-scale=1.0001, minimum-scale=1.0001, maximum-scale=1.0001, user-scalable=no');
    }

    cardLoader = _cardLoader;
    calcHandlers = _calcHandlers;

    if (_linkRules) {
      setLinkRules(_linkRules);
    }

    mediaRegistry = media || {};
    window.mediaRegistry = mediaRegistry;
    /* global MathJax */

    /* eslint-disable */

    /* eslint new-cap: 0 */

    /* eslint no-native-reassign: 0 */

    /* eslint no-trailing-spaces: 0 */

    /* global smartdown */

    function svgLoaded() {
      /* eslint no-invalid-this: 0 */
      var sourceText = this.responseText;
      var media = mediaRegistry[this.svgKey];
      media.svgData = sourceText;
      media.type = 'svginline'; // console.log('svgLoaded', this.svgKey, media, sourceText.slice(0, 40));
    }

    for (var key in mediaRegistry) {
      var url = mediaRegistry[key];
      mediaRegistry[key] = {
        type: '',
        url: '',
        expandedurl: '',
        svgData: ''
      };

      if (url.indexOf('<svg ') === 0) {
        mediaRegistry[key].type = 'svg';
        mediaRegistry[key].url = key;
        mediaRegistry[key].expandedurl = key;
        mediaRegistry[key].svgData = url;
      } else if (url.endsWith('.svg')) {
        var oReq = new XMLHttpRequest();
        oReq.svgKey = key;
        oReq.addEventListener('load', svgLoaded);
        mediaRegistry[key].type = 'svg';
        mediaRegistry[key].url = url;
        mediaRegistry[key].expandedurl = expandHrefWithLinkRules(url);
        oReq.open('GET', mediaRegistry[key].expandedurl);
        oReq.send();
      } else {
        mediaRegistry[key].type = 'url';
        mediaRegistry[key].url = url;
        mediaRegistry[key].expandedurl = expandHrefWithLinkRules(url);
      }
    }

    baseURL = _baseURL || window.location.origin + '/';
    window.xypicURL = baseURL + 'lib/xypic.js';
    var st = StackTrace.getSync();
    var currentBase = st[0].fileName;
    var lastSlash = currentBase.lastIndexOf('/');
    __webpack_require__.p = currentBase.slice(0, lastSlash + 1);
    console.log('__webpack_public_path__', __webpack_require__.p);
    window.MathJax = {
      delayStartupUntil: 'configured',
      AuthorInit: function AuthorInit() {
        MathJax.Ajax.fileRev = function (file) {
          var ver = MathJax.cdnFileVersions[file] || MathJax.cdnVersion || '';
          if (ver) ver = '?ver=' + ver;

          if (file.indexOf('xypic.js') !== -1) {
            ver = '';
          }

          return ver;
        };
      }
    };

    if (isTesting) {
      enhanceMarkedAndOpts();
      window.setTimeout(loadedHandler, 0);
    } else {
      var completeStartup = function completeStartup() {
        enhanceMarkedAndOpts();
        window.setTimeout(loadedHandler, 0);
      };

      if (true) {
        importScriptUrl( //xyjax doesn't work here
        'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_HTMLorMML-full&delayStartupUntil=configured', function () {
          mathjaxConfigure();
          MathJax.Hub.Register.StartupHook('End', function () {
            completeStartup();
          });
          MathJax.Hub.Configured();
        });
      } else {}
    }
  }

  function initialize(media, baseURL, loadedHandler, cardLoader, calcHandlers, linkRules) {
    var options = {
      media: media,
      baseURL: baseURL,
      cardLoader: cardLoader,
      calcHandlers: calcHandlers,
      linkRules: linkRules
    };
    configure(options, loadedHandler);
  }

  var patchesUnresolvedKludgeLimit = 0;

  function renderCell(cellID, variableId, newValue) {
    var cellInfo = smartdownCells[cellID];
    var element = document.getElementById(cellID); // console.log('renderCell', cellInfo, newValue, element, element.type, element.tagName, cellInfo.cellType, cellInfo.datatype, s);

    var s = JSON.stringify(newValue, null, 2);

    if (s) {
      s = s.slice(0, 20);
    }

    if (!element) {
      console.log('...renderCell cellID not found', cellID, variableId, newValue);
    } else if (element.type === 'checkbox') {
      element.checked = !!newValue;
    } else if (cellInfo.cellType === 'inputrange') {
      element.value = newValue;
    } else if (cellInfo.datatype === 'code') {
      if (newValue === undefined) {
        element.innerHTML = '';
      } else {
        element.innerHTML = '<pre class="infocell-output-pre">' + entityEscape(newValue) + '</pre>';
      }
    } else if (cellInfo.datatype === 'json') {
      var stringified = JSON.stringify(newValue, null, 2);
      var escaped = entityEscape(stringified, true); // console.log('stringified', stringified);

      element.innerHTML = '<pre class="infocell-output-pre">' + escaped + '</pre>';
    } else if (cellInfo.datatype === 'url') {
      // console.log('cellInfo', cellInfo);
      element.innerHTML = "<a target=\"_blank\" rel=\"noopener\" href=\"".concat(newValue, "\" style=\"word-break:break-all;font-size:0.9em;line-height:1.15em;\">").concat(newValue, "</a>");
    } else if (cellInfo.datatype === 'markdown') {
      if (typeof newValue === 'string') {
        smartdown.setSmartdown(newValue, element);
      } else {
        element.innerHTML = '';
      }
    } else if (cellInfo.datatype === 'graphviz') {
      element.innerHTML = '<i>...rendering graphviz...</i>';

      if (typeof newValue === 'string' && newValue.length > 0) {
        jsModules.graphviz.loader(function () {
          var options = {
            images: graphvizImages
          };
          new Viz().renderString(newValue, options).then(function (result) {
            element.innerHTML = result;
          });
        });
      }
    } else if (cellInfo.datatype === 'svg') {
      element.innerHTML = newValue;
    } else if (cellInfo.datatype === 'mermaid') {
      if (newValue === undefined) {
        element.innerHTML = '';
      } else {
        mermaidRender(element, newValue);
      }
    } else if (Array.isArray(newValue)) {
      // console.log('array', newValue, newValue.elementType);
      var isImage = newValue.elementType === 'image';
      var isURLTitle = newValue.elementType === 'title/url';
      var elementList = '<ul class="infocell-output-list">';

      for (var elementIndex = 0; elementIndex < newValue.length; ++elementIndex) {
        var newElement = newValue[elementIndex];

        if (isImage) {
          elementList += '<li><img src="' + newElement + '"></li>';
        } else if (isURLTitle) {
          elementList += '<li><a target="_blank" rel="noopener" href="' + newElement.url + '">' + newElement.title + '</a></li>';
        } else if (typeof newElement === 'string') {
          elementList += '<li>' + newElement + '</li>';
        } else {
          elementList += '<li>' + '<pre class="infocell-output-pre">' + JSON.stringify(newElement, null, 2) + '</pre>' + '</li>';
        }
      }

      elementList += '</ul>';
      element.innerHTML = elementList;
    } else if (_typeof(newValue) === 'object') {
      element.innerHTML = '<pre class="infocell-output-pre">' + JSON.stringify(newValue, null, 2) + '</pre>'; // element.value = newValue;
    } else if (typeof newValue === 'string' && newValue.indexOf('https://upload.wikimedia.org') === 0) {
      element.innerHTML = '<img src="' + newValue + '">';
    } else if (newValue === undefined) {
      element.innerHTML = '';
    } else {
      if (element.tagName === 'TEXTAREA') {
        element.value = newValue; // newValue.replace('\n', '<br>');
      } else if (typeof newValue === 'string') {
        element.innerHTML = entityEscape(newValue); // .replace(/\n/g, '<br>');
      } else {
        element.innerHTML = newValue; //  = newValue.replace(/\n/g, '<br>');

        element.value = newValue; //  = newValue.replace(/\n/g, '<br>');
      }
    }
  }

  function propagateModel() {
    ensureCells();
    ensureVariables();
    each(smartdownVariables, function (v, k) {
      propagateChangedVariable(k, v);
    });
  }

  function updateProcesses(id, newValue) {
    // console.log('.....updateProcesses', id, newValue);
    smartdown.computeExpressions();

    if (id) {
      // each(smartdownCells, function(newCell, cellID) {
      //   console.log('........newCellCheck', id, newCell, newCell.cellBinding, cellID);
      // });
      each(smartdownCells, function (newCell, cellID) {
        // console.log('........newCell', id, newCell, newCell.cellBinding, cellID);
        if (id === newCell.cellBinding) {
          renderCell(cellID, newCell.cellBinding, newValue);
        }
      });
    } else {
      each(smartdownCells, function (newCell, cellID) {
        var oldValue = smartdownVariables[newCell.cellBinding];
        renderCell(cellID, newCell.cellBinding, oldValue);
      });
    }

    each(perPageState.playablesRegisteredOrder, function (playable) {
      if (playable) {
        var progress = document.getElementById(playable.progressId);

        if (playable.playing) {
          var _playable$embedThis2 = playable.embedThis,
              depend = _playable$embedThis2.depend,
              dependOn = _playable$embedThis2.dependOn; // console.log('.........playable', playable, dependOn, depend);

          if (depend) {
            var signal = false;

            if (dependOn) {
              var atLeastOneUndefined = false;
              dependOn.forEach(function (varname) {
                var oldValue = playable.dependLastValues[varname];
                var newValue = smartdownVariables[varname];
                playable.dependLastValues[varname] = newValue;

                if (newValue === undefined) {
                  atLeastOneUndefined = true;
                } // console.log('............varname', varname, oldValue, newValue);


                if (!areValuesSameEnough(oldValue, newValue)) {
                  signal = true;
                }
              });

              if (atLeastOneUndefined) {
                signal = false;
              }
            } else {
              signal = true;
            }

            if (signal) {
              if (progress) {
                progress.style.display = 'none';
              }

              depend.apply(playable.embedThis);
            }
          }
        } else {
          if (progress) {
            progress.style.display = 'none';
          }
        }
      }
    });
  }

  function changeVariable(id, newValue) {
    smartdownVariables[id] = newValue;

    if (false) { var value, key; }
  }

  function propagateChangedVariable(id, newValue, force) {
    var oldValue = smartdownVariables[id];
    changeVariable(id, newValue); // console.log('...propagateChangedVariable', id, oldValue, newValue, areValuesSameEnough(oldValue, newValue), smartdownVariables);

    if (force || !areValuesSameEnough(oldValue, newValue)) {
      updateProcesses(id, newValue);
    }
  }

  function ensureCells() {
    each(smartdownCells, function (newCell, cellID) {
      var element = document.getElementById(cellID);

      if (!element) {
        // console.log('...ensureCells element for cellID not found', cellID, smartdownCells[cellID]);
        delete smartdownCells[cellID];
      }
    });
  }

  function ensureVariables() {
    each(smartdownCells, function (newCell, cellID) {
      var oldValue = smartdownVariables[newCell.cellBinding];
      changeVariable(newCell.cellBinding, oldValue);
    });
  }

  function resetVariables() {
    smartdownVariables = {};
    changeVariable(null, null);
    ensureVariables();
  }

  var scrollHoverDisableEnabled = false;
  var lastY;

  function setupScrollHoverDisable() {
    lastY = 0;

    if (!scrollHoverDisableEnabled) {
      var timer;
      scrollHoverDisableEnabled = true; // https://www.thecssninja.com/css/pointer-events-60fps

      var body = document.getElementsByTagName('body')[0];
      window.addEventListener('scroll', function (e) {
        var currentY = window.scrollY;
        var delta = Math.abs(lastY - currentY);

        if (delta > 25) {
          body.classList.add('disable-hover');
          clearTimeout(timer);
          timer = setTimeout(function () {
            body.classList.remove('disable-hover');
          }, 700);
        }

        lastY = currentY;
      }, false);
    }
  }

  function setSmartdown(md, outputDiv, done) {
    if (currentRenderDiv) {
      console.log('setSmartdown REENTRANCY FAIL', currentRenderDiv.id, md.slice(0, 40));
    } else {
      currentRenderDiv = outputDiv;
    }

    currentBackpatches[outputDiv.id] = [];
    setupScrollHoverDisable();
    cleanupOrphanedStuff();
    resetAllPlayables(outputDiv, true);

    function completeTypeset() {
      // console.log('MathJax.Message.Log()', MathJax.Message.Log());
      var that = this;
      var resizeTimeout;

      function actualResizeHandler() {
        for (var k in perPageState.playablesRegistered) {
          var playable = perPageState.playablesRegistered[k];

          if (true) {
            if (playable.playing && playable.language === 'plotly') {
              var d = document.getElementById(playable.divId);

              if (d) {
                try {
                  // Plotly.Plots.resize(d);
                  var newLayout = {
                    autosize: true
                  };

                  if (smartdownVariables.PLOT_TITLE) {
                    newLayout.title = smartdownVariables.PLOT_TITLE;
                  }

                  Plotly.relayout(d, newLayout);
                } catch (e) {// console.log('plotly resize exception:', e);
                  // throw e;
                }
              }
            }
          }
        }
      }

      function resizeThrottler() {
        // ignore resize events as long as an actualResizeHandler execution is in the queue
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function () {
            resizeTimeout = null;
            actualResizeHandler();
          }, 500);
        }
      }

      function finishLoad() {
        ensureCells();
        ensureVariables(); // resetAllPlayables(outputDiv, false);

        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(outputDiv);
        }

        (0, _gifffer.default)({
          playButtonStyles: {
            'width': '60px',
            'height': '60px',
            'border-radius': '30px',
            'background': 'rgba(200, 200, 200, 0.5)',
            'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'margin': '-30px 0 0 -30px'
          },
          playButtonIconStyles: {
            'width': '0',
            'height': '0',
            'border-top': '14px solid transparent',
            'border-bottom': '14px solid transparent',
            'border-left': '14px solid rgba(0, 0, 0, 0.5)',
            'position': 'absolute',
            'left': '26px',
            'top': '16px'
          }
        });
        transformPlayables(outputDiv, function () {
          if (cardLoading) {
            cardLoading = false;
            propagateModel();
            updateProcesses();
          }

          if (done) {
            done();
          }
        });
      }

      window.onresize = resizeThrottler; // window.addEventListener("resize", resizeThrottler, false);

      var firstTweetIndex = md.search(/\!\[[^\]]*\]\(https\:\/\/twitter\.com\//);

      if (firstTweetIndex >= 0) {
        if (!twitterLoading) {
          twitterLoading = true;
          importScriptUrl('https://platform.twitter.com/widgets.js', function () {
            console.log('Twitter loaded... window.twttr', window.twttr);
            finishLoad(); //   window.setTimeout(function () {
            //     console.log('window.twttr.widgets.load');
            //     window.twttr.widgets.load();
            //   }, 5000);   // I hate myself
          });
        } else {
          finishLoad();
        }
      } else {
        finishLoad();
      }
    }

    var frontMatterText = null; // Try to extract front-matter

    if (md.indexOf('\n---\n') === 0) {
      var frontMatterBegin = md.slice(4);
      var frontMatterEndIndex = frontMatterBegin.indexOf('\n---\n\n');

      if (frontMatterEndIndex >= 0) {
        frontMatterText = frontMatterBegin.slice(0, frontMatterEndIndex);
        md = frontMatterBegin.slice(frontMatterEndIndex + '\n---\n\n'.length);
      }
    }

    if (frontMatterText !== null) {
      var frontMatter = jsyaml.safeLoad(frontMatterText); // console.log('frontMatterText', frontMatterText);
      // console.log('frontMatter', frontMatter);
      // console.log('md', md.slice(0, 50));

      outputDiv.frontMatter = frontMatter;
    }

    var result = markedModule(md, markedOpts);
    currentRenderDiv = null;

    function applyBackpatches(done) {
      var bp = currentBackpatches[outputDiv.id];
      var patchesUnresolved = 0;
      bp.forEach(function (patch) {
        if (patch.key) {
          if (patch.replace) {
            // console.log('###Resolved patch', patch.key);
            result = result.replace(patch.key, patch.replace);
            patch.key = null;
          } else {
            // console.log('###Unresolved patch', patch.key);
            ++patchesUnresolved;
          }
        } else {
          console.log('applyBackpatches anomaly no key', outputDiv.id, patch);
        }
      });

      if (patchesUnresolved > 0) {
        if (--patchesUnresolvedKludgeLimit <= 0) {
          console.log('Aborting applyBackpatches recursion...', bp);
        } else {
          // console.log('patchesUnresolved', patchesUnresolved, patchesUnresolvedKludgeLimit);
          window.setTimeout(function () {
            applyBackpatches(function () {
              done();
            });
          }, 1000);
        }
      } else {
        done();
      }
    }

    patchesUnresolvedKludgeLimit = 5; // console.log('applyBackpatches BEGIN', outputDiv.id, currentRenderDiv);

    applyBackpatches(function () {
      if (isTesting) {
        outputDiv.innerHTML = result;
        propagateModel();

        if (done) {
          done();
        }
      } else if (true) {
        var finishIt = function finishIt() {
          outputDiv.innerHTML = renderDiv.innerHTML;
          completeTypeset();
        };

        var renderDivId = outputDiv.id + '-render';
        var renderDiv = document.getElementById(renderDivId);

        if (!renderDiv) {
          renderDiv = document.createElement('div');
          renderDiv.id = renderDivId;
          outputDiv.appendChild(renderDiv);
        }

        renderDiv.style.display = 'none';
        renderDiv.innerHTML = result;
        MathJax.Hub.Typeset(renderDiv, finishIt);
      } else {}
    });
  }

  function setHome(md, outputDiv, done) {
    currentMD = md;
    currentHomeDiv = outputDiv;
    resetPerPageState();

    if (false) {} else {
      setSmartdown(md, outputDiv, done);
    }
  }

  function setLinkRules(_linkRules) {
    linkRules.length = 0;

    _linkRules.forEach(function (link) {
      linkRules.push(link);
    });
  }
  /*
  function forceVariable(id, newValue, type) {
    if (type === 'number') {
      newValue = Number(newValue);
    }
    try {
      ensureCells();
    }
    catch (e) {
      console.log('exception during ensureCells', id, e);
    }
  
    try {
      propagateChangedVariable(id, newValue, true);
    }
    catch (e) {
      console.log('exception during propagateChangedVariable', id, e);
    }
  }
  */


  function setVariable(id, newValue, type) {
    // console.log('setVariable', id, JSON.stringify(newValue).slice(0, 20), type);
    if (type === 'number') {
      newValue = Number(newValue);
    }

    try {
      ensureCells();
    } catch (e) {
      console.log('exception during ensureCells', id, e);
    }

    try {
      propagateChangedVariable(id, newValue);
    } catch (e) {
      console.log('exception during propagateChangedVariable', id, e);
    }
  }

  function setVariables(assignments) {
    each(assignments, function (assignment) {
      var newValue = assignment.rhs;

      if (assignment.type === 'number') {
        newValue = Number(newValue);
      }

      changeVariable(assignment.lhs, newValue);
    });
    ensureCells();
    updateProcesses();
  }

  function computeStoredExpression(exprId) {
    var entry = perPageState.expressionsRegistered[exprId];

    if (!entry) {
      console.log('computeStoredExpression no such expression', exprId, perPageState.expressionsRegistered); // debugger;
    } else if (entry.manual) {
      // console.log('computeStoredExpression', exprId, entry);
      computeExpression(entry, function () {
        updateProcesses();
      }); // ensureCells();
      // ensureVariables();
      // propagateModel();
    }
  }

  function expandStringWithSubstitutions(expr) {
    if (expr.indexOf('`') >= 0) {
      var newExpr = '';
      var splits = expr.split('`');

      for (var i = 0; i < splits.length; ++i) {
        var prefix = splits[i];
        newExpr += prefix;

        if (i < splits.length - 1) {
          var varName = splits[++i];
          var varValue = smartdownVariables[varName];

          if (varValue) {
            newExpr += "".concat(varValue);
          } else {
            newExpr += "`".concat(varName, "`");
          }
        }
      }

      expr = newExpr;
    }

    return expr;
  }

  function computeExpression(entry, done) {
    var lhss = entry.lhss,
        rhss = entry.rhss,
        types = entry.types,
        labelId = entry.labelId; // console.log('computeExpression', lhss, rhss, types, labelId, entry);

    if (lhss.length !== rhss.length || types.length !== lhss.length) {
      console('lhss.length !== rhss.length || types.length !== lhss.length', lhss.length, rhss.length, types.length);
    } else {
      var calcParts;
      var bracketIndex;
      var slashIndex;
      var calcKey;
      var calcBody;
      var calcHandler;
      var vars;
      var vals;
      var f;
      var newValue;

      (function () {
        var numPending = 0;

        var _loop = function _loop(i) {
          var lhs = lhss[i];
          var rhs = rhss[i];
          var type = types[i];
          rhs = expandStringWithSubstitutions(rhs);

          if (lhs === 'TEMPLATECELLID') {// PASS
          } else if (!rhs) {//  smartdownVariables[lhs] = smartdownVariables[lhs] || '';
          } else if (rhs[0] === '/') {
            rhs = rhs.slice(1);

            if (calcHandlers) {
              calcParts = rhs.split(/[\./[]/);
              bracketIndex = rhs.indexOf('[');
              slashIndex = rhs.indexOf('/');
              calcKey = calcParts[0];
              calcBody = rhs.slice(calcKey.length);
              calcHandler = calcHandlers[calcKey];

              if (calcHandler) {
                ++numPending;
                calcHandler(calcKey, calcBody, function (result) {
                  // propagateChangedVariable(lhs, result);
                  var oldValue = smartdownVariables[lhs];
                  changeVariable(lhs, result);

                  if (--numPending === 0) {
                    if (done) {
                      done();
                    }
                  } // console.log('...calcHandler', lhs, oldValue, newValue, entry);

                });
              }
            }
          } else {
            vars = '';
            each(smartdownVariables, function (v, k) {
              vars += ',' + k;
            });
            vars = vars.slice(1);
            vals = lodashMap(smartdownVariables, function (v, k) {
              return v;
            });
            /* eslint no-new-func: 0 */

            f = new Function(vars, 'return ' + rhs + ';');
            newValue = f.apply({}, vals); // console.log('#rhs', f, vars, rhs, vals, type);

            if (type === 'number') {
              newValue = Number(newValue);
            }

            propagateChangedVariable(lhs, newValue); // const oldValue = smartdownVariables[lhs];
            // smartdownVariables[lhs] = newValue;
            // console.log('...', lhs, oldValue, newValue, entry);
          }
        };

        for (var i = 0; i < lhss.length; ++i) {
          _loop(i);
        }

        if (numPending > 0) {// console.log('computeExpression PENDING', entry, numPending);
        } else if (done) {
          done();
        }
      })();
    }
  }

  function goToCard(cardKey) {
    cardLoading = true;

    if (cardLoader) {
      cardLoader(cardKey);
    } else {
      var that = this;
      var modelAsMarkdown = null;

      if (!cardKey || cardKey === 'Home') {
        modelAsMarkdown = currentMD;
      } else {
        var scriptx = smartdownScriptsMap[cardKey];

        if (scriptx) {
          modelAsMarkdown = scriptx.text;
        }
      }

      if (modelAsMarkdown) {
        setSmartdown(modelAsMarkdown, currentHomeDiv, null);
      }
    }
  }

  function loadCardsFromDocumentScripts() {
    smartdownScripts.length = 0;

    for (var k in smartdownScriptsMap) {
      delete smartdownScriptsMap[k];
    }

    var scripts = document.scripts;

    for (var s in scripts) {
      var script = scripts[s];

      if (script && script.type && script.type === 'text/x-smartdown') {
        smartdownScripts.push(script);
        smartdownScriptsMap[script.id] = script;
      }
    }
  }

  function getMedia(mediaKey) {
    return mediaRegistry[mediaKey];
  }

  var youtubeIframeAPILoaded = false;
  var youtubeIframeAPILoadedCbs = [];

  function onYouTubeIframeAPIReady() {
    // console.log('onYouTubeIframeAPIReady');
    youtubeIframeAPILoaded = true;
    youtubeIframeAPILoadedCbs.forEach(function (cb) {
      cb();
    });
    youtubeIframeAPILoadedCbs = [];
  }

  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  function loadYouTubeIframeAPI(done) {
    youtubeIframeAPILoadedCbs.push(done);
    importScriptUrl('https://www.youtube.com/iframe_api', function () {// console.log('https://www.youtube.com/iframe_api loaded');
    });
  }

  function setupYouTubePlayer(div, varName) {
    // console.log('setupYouTubePlayer', div, varName, youtubeIframeAPILoaded);
    if (youtubeIframeAPILoaded) {
      var playerDiv = document.getElementById(div);
      var player; // console.log('YT', Object.keys(YT), YT.Player);

      player = new YT.Player(playerDiv, {
        events: {
          'onReady': function onReady(event) {
            // console.log('onPlayerReady', event);
            // console.log(player);
            smartdown.setVariable(varName, player, 'json');
          },
          'onStateChange': function onStateChange(event) {// console.log('onPlayerStateChange', event);
          }
        }
      });
    } else {
      loadYouTubeIframeAPI(function () {
        setupYouTubePlayer(div, varName);
      });
    }
  } // YouTube API


  module.exports = {
    tweek: null,
    initialize: initialize,
    jsModules: jsModules,
    perPageState: perPageState,
    playablesRegistered: perPageState.playablesRegistered,
    playablesRegisteredOrder: perPageState.playablesRegisteredOrder,
    smartdownVariables: smartdownVariables,
    enhanceMarkedAndOpts: enhanceMarkedAndOpts,
    partitionMultipart: partitionMultipart,
    registerPlayable: registerPlayable,
    playPlayable: playPlayable,
    resetPlayable: resetPlayable,
    toggleDebug: toggleDebug,
    toggleDisclosure: toggleDisclosure,
    activateTooltip: activateTooltip,
    deactivateTooltip: deactivateTooltip,
    tooltipWrapperExit: tooltipWrapperExit,
    tooltipTriggerEnter: tooltipTriggerEnter,
    toggleDisclosureButton: toggleDisclosureButton,
    startAutoplay: startAutoplay,
    setSmartdown: setSmartdown,
    setHome: setHome,
    resetVariables: resetVariables,
    loadCardsFromDocumentScripts: loadCardsFromDocumentScripts,
    registerExpression: registerExpression,
    computeExpressions: computeExpressions,
    computeStoredExpression: computeStoredExpression,
    setVariable: setVariable,
    // forceVariable: forceVariable,
    setVariables: setVariables,
    computeExpression: computeExpression,
    goToCard: goToCard,
    smartdownScripts: smartdownScripts,
    smartdownScriptsMap: smartdownScriptsMap,
    currentHomeDiv: currentHomeDiv,
    cardLoader: cardLoader,
    calcHandlers: calcHandlers,
    importCssCode: importCssCode,
    importScriptUrl: importScriptUrl,
    importTextUrl: importTextUrl,
    setLinkRules: setLinkRules,
    getMedia: getMedia,
    resetPerPageState: resetPerPageState,
    decodeInlineScript: decodeInlineScript,
    hljs: _highlight.default,
    marked: markedModule,
    markedOpts: markedOpts,
    Stdlib: Stdlib,
    ldf: LDF,
    P5Loader: P5Loader,
    d3: null,
    d3v5: null,
    d3fc: null,
    d3cloud: null,
    topojson: null,
    Three: Three,
    lodashEach: lodashEach,
    lodashMap: lodashMap,
    jsyaml: jsyaml,
    updateProcesses: updateProcesses,
    cleanupOrphanedStuff: cleanupOrphanedStuff,
    linkRules: linkRules,
    showAugmentedCode: false,
    version: '0.0.94',
    baseURL: baseURL,
    setupYouTubePlayer: setupYouTubePlayer,
    entityEscape: entityEscape
  };
  window.smartdown = module.exports;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/process/browser.js */ "../node_modules/node-libs-browser/node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=smartdown.1c68e16cff91051d6cec.hot-update.js.map