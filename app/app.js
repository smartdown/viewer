import angular from 'angular';
// import './bootswatch-simplex.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-reboot.min.css';
// import './bootswatch-spacelab.min.css';
import nguibootstrap from 'ui-bootstrap4';

import ngResource from 'angular-resource';
import ngFileUpload from 'ng-file-upload';

import CodeMirror from 'codemirrorJS';
window.CodeMirror = CodeMirror;
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/display/fullscreen.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/addon/mode/overlay.js';
import 'codemirror/addon/display/placeholder.js';
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/xml/xml.js';

import MainController from './MainController.js';
import HelpController from './HelpController.js';
import smartdown from 'smartdownJS';
// import 'smartdownCalcHandlersJS';

import 'smartdownCSS';
import 'smartdownFontsCSS';
require('./style.css');

window.smartdown = smartdown;

var dependentModules = [nguibootstrap, ngResource, ngFileUpload, 'ui.codemirror']; // , 'simplemde'];

var app = angular.module('app', dependentModules);

app.config(['$httpProvider', function config($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
  $httpProvider.defaults.useXDomain = true;
}]);


app.config( ['$provide', function ($provide) {
    $provide.decorator('$browser', ['$delegate', function ($delegate) {
        $delegate.onUrlChange = function(newUrl, newState) {
        };
        $delegate.url = function (url) {
                                      return '';
                                    };
        return $delegate;
    }]);
}]);

app.config(['$locationProvider', function config($locationProvider) {
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: true
  // });
}]);

app.controller(
  'MainController',
  ['$scope', '$resource', '$http', '$timeout', '$location', '$anchorScroll', '$uibModal',
  function ($scope, $resource, $http, $timeout, $location, $anchorScroll, $uibModal) {
    return new MainController($scope, $resource, $http, $timeout, $location, $anchorScroll, $uibModal);
  }]);

app.controller(
  'HelpController',
  ['$http', '$uibModalInstance', 'modalInfo',
  function($http, $uibModalInstance, modalInfo) {
    return new HelpController($http, $uibModalInstance, modalInfo);
  }]);


/*
ng.module('simplemde', []).directive('simplemde', [
  '$parse', function($parse) {
    return {
      restrict: 'A',
      require: 'ngModel',
      controller: ['$scope', function($scope) {
        return {
          get: function() {
            return $scope.simplemde.instance;
          },
          rerenderPreview: function(val) {
            return $scope.simplemde.rerenderPreview(val);
          }
        };
      }],
      link: function(scope, element, attrs, ngModel) {
        var options, rerenderPreview;
        options = $parse(attrs.simplemde)(scope) || {};
        options.element = element[0];
        var mde = new SimpleMDE(options);
        mde.codemirror.on('change', function() {
          scope.$applyAsync(function() {
            ngModel.$setViewValue(mde.value());
          });
        });
        ngModel.$render = function() {
          var val = ngModel.$modelValue || options.default;
          mde.value(val);
          if (mde.isPreviewActive()) {
            rerenderPreview(val);
          }
        };
        rerenderPreview = function(val) {};
        scope.simplemde = {
          instance: mde,
          rerenderPreview: rerenderPreview
        };
      }
    };
  }
]);
*/


// https://github.com/angular-ui/ui-codemirror
function uiCodemirrorDirective($timeout, uiCodemirrorConfig) {

  function newCodemirrorEditor(iElement, codemirrorOptions) {
    var codemirrot;

    if (iElement[0].tagName === 'TEXTAREA') {
      // Might bug but still ...
      codemirrot = window.CodeMirror.fromTextArea(iElement[0], codemirrorOptions);
    }
    else {
      iElement.html('');
      codemirrot = new window.CodeMirror(function(cmElement) {
        iElement.append(cmElement);
      }, codemirrorOptions);
    }

    return codemirrot;
  }

  function configOptionsWatcher(codemirrot, uiCodemirrorAttr, scope) {
    if (!uiCodemirrorAttr) {
      return;
    }

    var codemirrorDefaultsKeys = Object.keys(window.CodeMirror.defaults);
    function updateOptions(newValues, oldValue) {
      if (!angular.isObject(newValues)) {
        return;
      }
      codemirrorDefaultsKeys.forEach(function(key) {
        if (newValues.hasOwnProperty(key)) {

          if (oldValue && newValues[key] === oldValue[key]) {
            return;
          }

          codemirrot.setOption(key, newValues[key]);
        }
      });
    }

    scope.$watch(uiCodemirrorAttr, updateOptions, true);
  }

  function configNgModelLink(codemirror, ngModel, scope) {
    if (!ngModel) {
      return;
    }
    // CodeMirror expects a string, so make sure it gets one.
    // This does not change the model.
    ngModel.$formatters.push(function(value) {
      if (angular.isUndefined(value) || value === null) {
        return '';
      }
      else if (angular.isObject(value) || angular.isArray(value)) {
        throw new Error('ui-codemirror cannot use an object or an array as a model');
      }
      return value;
    });


    // Override the ngModelController $render method, which is what gets called when the model is updated.
    // This takes care of the synchronizing the codeMirror element with the underlying model, in the case that it is changed by something else.
    ngModel.$render = function() {
      // Code mirror expects a string so make sure it gets one
      // Although the formatter have already done this, it can be possible that another formatter returns undefined (for example the required directive)
      var safeViewValue = ngModel.$viewValue || '';
      codemirror.setValue(safeViewValue);
    };


    // Keep the ngModel in sync with changes from CodeMirror
    codemirror.on('change', function(instance) {
      var newValue = instance.getValue();
      if (newValue !== ngModel.$viewValue) {
        scope.$evalAsync(function() {
          ngModel.$setViewValue(newValue);
        });
      }
    });
  }

  function configUiRefreshAttribute(codeMirror, uiRefreshAttr, scope) {
    if (!uiRefreshAttr) {
      return;
    }

    scope.$watch(uiRefreshAttr, function(newVal, oldVal) {
      // Skip the initial watch firing
      if (newVal !== oldVal) {
        $timeout(function() {
          codeMirror.refresh();
        });
      }
    });
  }


  function postLink(scope, iElement, iAttrs, ngModel) {

    var codemirrorOptions = angular.extend(
      { value: iElement.text() },
      uiCodemirrorConfig.codemirror || {},
      scope.$eval(iAttrs.uiCodemirror),
      scope.$eval(iAttrs.uiCodemirrorOpts)
    );

    var codemirror = newCodemirrorEditor(iElement, codemirrorOptions);

    configOptionsWatcher(
      codemirror,
      iAttrs.uiCodemirror || iAttrs.uiCodemirrorOpts,
      scope
    );

    configNgModelLink(codemirror, ngModel, scope);

    configUiRefreshAttribute(codemirror, iAttrs.uiRefresh, scope);

    // Allow access to the CodeMirror instance through a broadcasted event
    // eg: $broadcast('CodeMirror', function(cm){...});
    scope.$on('CodeMirror', function(event, callback) {
      if (angular.isFunction(callback)) {
        return callback(codemirror);
      }
      else {
        throw new Error('the CodeMirror event requires a callback function');
      }
    });

    // onLoad callback
    if (angular.isFunction(codemirrorOptions.onLoad)) {
      codemirrorOptions.onLoad(codemirror);
    }
  }

  return {
    restrict: 'EA',
    require: '?ngModel',
    compile: function compile() {

      // Require CodeMirror
      if (angular.isUndefined(window.CodeMirror)) {
        throw new Error('ui-codemirror needs CodeMirror to work... (o rly?)');
      }

      return postLink;
    }
  };
}
uiCodemirrorDirective.$inject = ['$timeout', 'uiCodemirrorConfig'];

/**
 * Binds a CodeMirror widget to a <textarea> element.
 */
angular.module('ui.codemirror', [])
  .constant('uiCodemirrorConfig', {})
  .directive('uiCodemirror', uiCodemirrorDirective);


app.run(['$rootScope',
  function($rootScope) {
    /* global BASE_URL */
    var baseURL = BASE_URL; // 'https://smartdown.site/';

    /* eslint no-trailing-spaces: 0 */
    /* global smartdown */
    var icons = {
      'cloud': '/gallery/resources/cloud.jpg',
      'badge': '/gallery/resources/badge.svg',
      'hypercube': '/gallery/resources/Hypercube.svg',
      'StalactiteStalagmite': '/gallery/resources/StalactiteStalagmite.svg',
      'church': '/gallery/resources/church.svg',
      'lighthouse': '/gallery/resources/lighthouse.svg',
      'barn': '/gallery/resources/barn.svg',
      'medieval-gate': '/gallery/resources/medieval-gate.svg'
    };

    function calcWikidata(key, body, done) {
      function lookupComplete() {
        /* eslint no-invalid-this: 0 */
        var lookupResult = this.responseText;
        var parsedResult = JSON.parse(lookupResult).query.pages;

        var thumbs = [];
        parsedResult.forEach(function(val, idx) {
          if (val.thumbnail) {
            thumbs.push(val.thumbnail.source);
          }
        });
        done(thumbs);
      }

      var wdKey = body;
      if (body.indexOf('[') === 0) {
        var possibleJSONArray = JSON.parse(body);
        if (Array.isArray(possibleJSONArray)) {
          wdKey = '';
          possibleJSONArray.forEach(function(val, idx) {
            wdKey += val;
            if (idx < possibleJSONArray.length - 1) {
              wdKey += '|';
            }
          });
        }
      }
      var oReq = new XMLHttpRequest();
      oReq.addEventListener('load', lookupComplete);
      var url = 'https://en.wikipedia.org/w/api.php?action=query&formatversion=2&prop=pageimages%7Cpageterms&';
      url += 'titles=' + encodeURI(wdKey);  // Albert%20Einstein%7CAlbert%20Ellis%7CAlbert%20Estopinal';
      url += '&pilimit=3&piprop=thumbnail&wbptterms=description&redirects=&format=json&origin=*';

      oReq.open('GET', url);
      oReq.send();
    }

    var calcHandlers = {
      wikidata: calcWikidata
    };

    calcHandlers = smartdown.defaultCalcHandlers;
    function loadExample() {
      $rootScope.$broadcast('smartdown-loaded');
    }

    function cardLoader(cardKey) {
      // console.log('cardLoader', cardKey);
      $rootScope.$broadcast('go-to-card', cardKey);
    }

    // DRY this up. Duplicate of MainController.js version
    const gistPrefix = 'https://gist.githubusercontent.com/';
    function shortenGistRawURL(url) {
      var result = url;

      var gistRawRE = new RegExp(`^${gistPrefix}([^/]+)/([^/]+)/raw/([^/]+)/(\\w*).md`, 'g');
      var match = gistRawRE.exec(url);

      if (match) {
        result = `gist/${match[1]}/${match[2]}/${match[4]}.md`;
      }

      return result;
    }


    window.onpopstate = function(event) {
      const urlSearchPrefix = '?url=';
      if ((document.location.origin === window.location.origin) &&
          (document.location.pathname === window.location.pathname)) {
        const search = window.location.search;
        const hash = window.location.hash;
        const re = /^\?url=lib\/gallery\/(\w+)\.md$/;
        const match = search.match(re);
        let url = window.location.origin + window.location.pathname + search + document.location.hash;
        if (match) {
          url = match[1];
        }
        else if (search.indexOf(urlSearchPrefix) === 0) {
          url = search.slice(urlSearchPrefix.length);
        }
        else if (hash.indexOf('#') === 0) {
          url = hash.slice(1);
          url = shortenGistRawURL(url);
        }

        console.log('onpopstate', url, search, hash, match, document.location.origin, document.location.pathname);

        $rootScope.$broadcast('go-to-card', url);
      }
    };

    let linkRules = [
      {
        prefix: '/resources/',
        replace: '/gallery/resources/'
      }
    ];
    console.log('baseURL', baseURL);
    smartdown.initialize(icons, baseURL, loadExample, cardLoader, calcHandlers, linkRules);
  }]);

