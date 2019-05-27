import angular from 'angular';

/* eslint new-cap: 0 */

import Split from 'split.js'
const lodashThrottle = require('lodash/throttle');

var rawPrefix = window.location.origin;
var gistPrefix = 'https://gist.githubusercontent.com/';
var defaultHome = 'Home';
var gistPathPrefix = '';
var gistHashPrefix = 'gist/';
var gistOrg = '';
var gistID = '';
var gistRE = new RegExp(`^/?${gistHashPrefix}([^/]+)/([^/]+)(/(\\w*))?(\.md)?$`, 'g');

export default class MainController {
  // constructor arglist must match invocation in app.js
  constructor($scope, $resource, $http, $timeout, $location, $anchorScroll, $uibModal) {
    var that = this;
    this.lastLoadedRawPrefix = rawPrefix;
    this.watchEditEnabled = false;
    this.editSource = null;
    this.inhibitHash = '';
    this.smartdown = window.smartdown;
    this.$scope = $scope;
    this.$resource = $resource;
    this.$http = $http;
    this.$timeout = $timeout;
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
    this.$uibModal = $uibModal;
    this.showInputSource = false;
    this.inputSource = '';
    this.inputTitle = '';
    this.inputURL = '';
    this.editedSource = null;
    this.zoomed = false;
    this.errorMessage = null;
    this.defaultType = 'smartdown';
    this.defaultSource = '#### Hello World';
    this.defaultTitle = 'Very Simple Smartdown Example';
    this.examples = [
      {
        url: 'gallery/Home.md',
        title: 'Smartdown Gallery'
      },
      {
        url: 'gallery/README.md',
        title: 'Smartdown README.md'
      }
    ];

    this.defaultURL = this.examples[0].url;
    this.defaultTitle = this.examples[0].title;

    const extraKeys = {
      'Enter': 'newlineAndIndentContinueMarkdownList',
      "Esc": function(x) {
          console.log('ESC', x);
        }
    };
    this.$scope.uicmOptions = that.uicmOptions = {
      autofocus: true,
      theme: 'neat',
      indentUnit: 2,
      mode: 'markdown',
      lineNumbers: true,
      lineWrapping: true,
      extraKeys: extraKeys,
      onLoad: function(_editor) {
        that.codemirrorLoaded(_editor);
      }
    };

    // this.$scope.codemirrorLoaded = function(_editor) {
    //     console.log('codemirrorLoaded', _editor);
    //     that.codemirrorLoaded(_editor);
    //   };

    this.$scope.$on('smartdown-loaded', function(event) {
      /*
      this.simpleMDEOptions = {
        // https://github.com/NextStepWebs/simplemde-markdown-editor
        // autoDownloadFontAwesome: false,
        spellChecker: false,
        autosave: {
          enabled: true,
          delay: 1000,
          uniqueId: 'gosms'
        },
        indentWithTabs: false,
        lineWrapping: false,
        parsingConfig: {
          allowAtxHeaderWithoutSpace: true,
        },
        previewRender: function(plainText, previewDiv) {
          that.$timeout(function() {
            that.smartdown.setHome(plainText, previewDiv);
          }, 250);

          return "Loading...";
        }
      };
      */

      /*
      that.$timeout(function() {
        var a = document.getElementById('myTextarea');
        a.innerText = that.editSource;
        var cmopts = {
          // theme: 'monokai',
          indentUnit: 2,
          mode: 'markdown',
          lineNumbers: false,
          extraKeys: {'Enter': 'newlineAndIndentContinueMarkdownList'}
        };
        that.cm = CodeMirror.fromTextArea(a, cmopts);
        that.cm.on('change', function() {
          console.log('changesave1', that.cm.getTextArea().innerText);
          that.cm.save();
          console.log('changesave2', that.cm.getTextArea().innerText);
        });

      }, 500);
      */
      that.loadDefault();
    });

    // that.loadDefault();

    this.$scope.$watch('c.file', function () {
      that.loadFile(that.file);
    });

    // https://lodash.com/docs/#throttle
    this.throttleEditSourceChanged = lodashThrottle(function() {
      that.editSourceChanged();
    }, 500, {
      leading: false,
      trailing: true
    });

    this.$scope.$on('go-to-card', function(event, cardKey) {
      // console.log('go-to-card', cardKey, event);
      if (that.showInputSource) {
        that.hideEditor();
      }
      that.loadURL(cardKey);
    });
  }

  hideEditor() {
    var that = this;
    if (that.showInputSource) {
      this.$timeout(function() {
        that.showInputSource = false;
        // that.cmInstance.save();
        // that.cmInstance.refresh();

        if (that.split) {
          that.split.destroy();
          that.split = null;
          that.editSource = null;
        }
      }, 10);
    }
  }

  toggleInputSource() {
    var that = this;
    this.showInputSource = !this.showInputSource;
    if (this.showInputSource) {
      this.editSource = this.inputSource;
      this.$timeout(function() {
        that.editSourceChanged();
        that.cmInstance.save();
        that.cmInstance.refresh();

        that.$timeout(function() {
          that.split = Split(['#split-left', '#split-right'], {
            direction: 'horizontal',
            minSize: 200,
            sizes: [50, 50]
          });
        }, 100);
      }, 100);
    }
    else {
      this.$timeout(function() {
        that.editSourceChanged();
        that.cmInstance.save();
        that.cmInstance.refresh();

        if (that.split) {
          that.split.destroy();
          that.split = null;
          that.editSource = null;
        }
      }, 10);
    }
  }


  codemirrorLoaded(_editor) {
    this.cmInstance = _editor;

    // // Editor part
    // var _doc = _editor.getDoc();
    // _editor.focus();

    // // Options
    // _editor.setOption('firstLineNumber', 10);
    // _doc.markClean();

    // // Events
    // _editor.on("beforeChange", function(){ ... });
    // _editor.on("change", function(){ ... });
  }


  setError(error) {
    this.errorMessage = error;
    this.inputURL = '';
    this.inputSource = '';
  }

  showHelp() {
    var that = this;
    var modalInstance = this.$uibModal.open({
      animation: this.animationsEnabled,
      templateUrl: 'Help.tpl.html',
      controller: 'HelpController',
      controllerAs: 'help',
      resolve: {
        modalInfo: function () {
          return that.modalInfo;
        }
      }
    });
  }

  editSourceChanged() {
    if (this.editSource && (this.inputSource !== this.editSource)) {
      // console.log('editSourceChanged', this.inputSource.slice(-20), this.editSource.slice(-20), this.inputTitle, this.inputURL);
      this.loadSource(this.editSource, this.inputTitle, this.inputURL);
    }
  }

  renderInput(source) {
    // console.log('renderInput', source.slice(0, 30), this.inputURL);
    var that = this;
    var renderElement = document.getElementById('InputRender');
    // this.$anchorScroll('InputRender');

    if (that.inputURL.indexOf('http') === 0) {
      var prefix = that.inputURL.slice(0, that.inputURL.lastIndexOf('/'));
      const replace = prefix + '/';

      // FIXME: DRY up this code with respect to identical code in app.js
      function getGistPrefix(href) {
        var result = that.lastLoadedRawPrefix;
        var hash = window.location.hash;

        if (gistHashPrefix.length > 0 && hash.indexOf('#' + gistHashPrefix) === 0) {
          var re = `^#${gistHashPrefix}([^/]+)/([^/]+)(/(\\w*))?`;
          var gistRE = new RegExp(re, 'g');
          var match = gistRE.exec(hash);
          if (match) {
            let gistOrg = match[1];
            let gistID = match[2];
            result = `https://gist.githubusercontent.com/${gistOrg}/${gistID}/raw/`;
          }
        }

        // console.log('getGistPrefix', href, result, that.lastLoadedRawPrefix, hash);

        return result;
      }

      const linkRules = [
          {
            prefix: '/block/',
            replace: getGistPrefix
          },
          {
            prefix: 'block/',
            replace: getGistPrefix
          },
          {
            prefix: '/assets/',
            replace: replace + 'assets/'
          },
          {
            prefix: 'assets/',
            replace: replace + 'assets/'
          },
      ];
      console.log('setLinkRules1', linkRules, that.inputURL);
      that.smartdown.setLinkRules(linkRules);
    }
    else {
      let linkRules = [
        {
          prefix: '/resources/',
          replace: '/gallery/resources/'
        }
      ];
      console.log('setLinkRules2[]', that.inputURL);
      that.smartdown.setLinkRules(linkRules);
    }

    that.smartdown.setHome(source, renderElement, function() {
      that.smartdown.startAutoplay(renderElement);
      if (that.showInputSource) {
        //
      }
      else {
        window.setTimeout(function() {
          document.body.scrollTop = 0; // For Chrome, Safari and Opera
          document.documentElement.scrollTop = 0; // For IE and Firefox
        }, 20);
      }

      if (!that.watchEditEnabled) {
        // window.setTimeout(function() {
        //   document.body.scrollTop = 0; // For Chrome, Safari and Opera
        //   document.documentElement.scrollTop = 0; // For IE and Firefox
        // }, 20);

        that.watchEditEnabled = true;
        that.$scope.$watch('c.editSource', function () {
          that.throttleEditSourceChanged();
        });
      }

    });
  }

  shortenGistRawURL(url) {
    var result = url;

    var gistRawRE = new RegExp(`^${gistPrefix}([^/]+)/([^/]+)/raw/([^/]+)/(\\w*).md`, 'g');
    var match = gistRawRE.exec(url);

    if (match) {
      result = `gist/${match[1]}/${match[2]}/${match[4]}.md`;
    }
    // if (url.indexOf(gistPrefix) === 0) {
    //   var shorterURL = gistHashPrefix + url.slice(gistPrefix.length);
    //   console.log('shorterURL', url, shorterURL);
    //   url = shorterURL;
    // }

    return result;
  }


  loadSource(source, cardKey, url) {
    // console.log('loadSource', source.slice(-20), cardKey, url);
    this.inputSource = source;
    this.inputTitle = cardKey;
    // this.editSource = source;
    this.inputURL = url;
    this.errorMessage = null;


    var stateObj = window.history.state;
    // console.log('loadSource', source.slice(0, 20), cardKey, url, JSON.stringify(stateObj));
    if (url === null) {
      // console.log('###loadSource...url null');
    }
    else if (url === '/') {
      console.log('###loadSource...url empty. push current path', window.location.pathname);

      window.history.pushState(stateObj, cardKey, window.location.pathname);
    }
    else {
      url = this.shortenGistRawURL(url);
      var suffix = '#' + url;
      // console.log('oldhash:', this.$location.hash());
      // console.log('newhash:', hash);
      // this.$location.hash(hash); //  {url: url});
      // console.log('sethash:', this.$location.hash());
      var oldURL = window.location.pathname + window.location.hash;
      var newURL =  // window.location.protocol +
                    // window.location.host +
                    window.location.pathname +
                    suffix;
      // console.log('...push', cardKey, oldURL, newURL);
      if (newURL !== oldURL) {
        // console.log('###loadSource...url difference. push oldURL->newURL', oldURL, newURL);

        window.history.pushState(stateObj, cardKey, newURL);
      }
      // this.$location.search({url: url});
    }

    this.multiparts = this.smartdown.partitionMultipart(this.inputSource);
    var partSource = this.multiparts._default_;

    var readmePrefix =
`# smartdown

`;
    // console.log('backtohome', this.inputSource.slice(-30));
    var backToHome = '\n\n---\n\n[Back to Home](:@Home)\n\n';
    if (this.inputSource.indexOf(readmePrefix) === 0) {
      partSource += backToHome;
    }

    this.renderInput(partSource);
  }

  loadSourcePart(source, cardKey) {
    this.renderInput(source);
  }


  loadAsyncCard(cardKey, cardURL) {
    var that = this;

    that.$http.get(cardURL, {withCredentials: false}).then(
      function(result) {
        // console.log('loadAsyncCard success', cardURL, cardKey, result.data.slice(0, 40));
        that.inputURL = cardURL;
        that.loadSource(result.data, cardKey, cardURL);
      },
      function(error) {
        console.log('loadAsyncCard error', cardURL, cardKey, error);
        that.setError('Error loading URL ' + cardURL + '\n\n' + JSON.stringify(error));
      }
    );
  }

  loadURL(cardKey, title) {
    // console.log('loadURL', cardKey, title);
    this.hideEditor();
    var that = this;

    if (that.multiparts && that.multiparts[cardKey]) {
      var part = that.multiparts[cardKey];
      that.loadSourcePart(part, cardKey);
    }
    else {
      cardKey = this.shortenGistRawURL(cardKey);

      var match = gistRE.exec(cardKey);
      if (match) {
        gistOrg = match[1];
        gistID = match[2];
        var newCardKey = match[4] || defaultHome;
        cardKey = newCardKey;
      }

      if (cardKey.indexOf(rawPrefix) === 0) {
        console.log('.....fixup cardkey', rawPrefix, cardKey);
        cardKey = defaultHome;
      }

      if (cardKey.indexOf('http') === 0) {
        gistOrg = '';
        gistID = '';

        var endOfPath = cardKey.lastIndexOf('/');
        if (endOfPath > 0) {
          this.lastLoadedRawPrefix = cardKey.slice(0, endOfPath + 1);
        }
        // console.log('...lastLoadedRawPrefix1', endOfPath, cardKey, that.lastLoadedRawPrefix);

        that.loadAsyncCard(cardKey, cardKey);
      }
      else if (cardKey.indexOf('gallery/') === 0) {
        gistOrg = '';
        gistID = '';
        that.lastLoadedRawPrefix = rawPrefix;
        // console.log('...lastLoadedRawPrefix2', cardKey, that.lastLoadedRawPrefix);
        that.loadAsyncCard(cardKey, cardKey);
      }
      else if (gistOrg !== '' && gistID !== '') {
        var gistAPIBase = `https://api.github.com/gists/${gistID}`;

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function() {
          var gistResponse = JSON.parse(this.responseText);
          // console.log('gist Response', gistAPIBase, gistOrg, gistID, cardKey, gistResponse);
          var gistFile = gistResponse.files[cardKey + '.md'];
          if (gistFile) {
            var gistFileURL = gistFile.raw_url;
            cardKey = `${gistHashPrefix}${gistOrg}/${gistID}/${cardKey}`;
            // console.log('...lastLoadedRawPrefix3', cardKey, gistFileURL);
            that.loadAsyncCard(cardKey, gistFileURL);
          }
          else {
            console.log('gistResponse', gistResponse);
          }
        });
        oReq.open("GET", gistAPIBase);
        oReq.send();
      }
      else {
        gistOrg = '';
        gistID = '';
        var suffix = (cardKey === '') ? '' : (cardKey + '.md');

        if (this.lastLoadedRawPrefix !== rawPrefix) {
          var cardURL = this.lastLoadedRawPrefix + suffix;
          // console.log('defaultCard1', this.lastLoadedRawPrefix, cardKey, cardURL);
          that.loadAsyncCard(cardKey, cardURL);
        }
        else {
          var cardURL = 'gallery/' + cardKey + '.md';
          // console.log('defaultCard2', cardKey, cardURL);
          that.loadAsyncCard(cardKey, cardURL);
        }
      }
    }
  }

  loadSourceItem(source, title, url) {
    if (source) {
      // console.log('loadSourceItem', source.slice(-20), title, url);
      this.hideEditor();
      this.loadSource(source, title, url);
    }
    else {
      // console.log('loadSourceItem loadURL', url);
      this.loadURL(url);
    }
  }

  loadDefault() {
    var that = this;
    var search = window.location.search;
    var hash = window.location.hash;
    if (search && search.indexOf('?url=') === 0) {
      search = search.slice(5);
      // console.log('loadDefault url', search);
      that.loadURL(search);
    }
    else if (hash && hash.indexOf('#') === 0) {
      hash = hash.slice(1);
      let url = hash;
      // console.log('loadDefault hash', hash);
      that.loadURL(url);
    }
    else if (that.defaultURL) {
      // console.log('loadDefault defaultURL', that.defaultURL);
      that.loadURL(that.defaultURL, that.defaultTitle);
    }
    else {
      // console.log('loadDefault loadSource', that.defaultSource.slice(-20), that.defaultTitle, '');
      that.loadSource(that.defaultSource, that.defaultTitle, '');
    }
  }

  loadFile(file) {
    var that = this;

    if (file) {
      if (!file.$error) {
        var reader = new FileReader();
        var blobText = '';
        /* eslint no-loop-func: 0 */
        reader.addEventListener("loadend", function() {
          blobText = reader.result;
          // console.log('loadFile', blobText.slice(0, 20));
          that.loadSource(blobText, file.name, '');
        });
        reader.readAsText(file);
      }
    }
  }
}
