import angular from 'angular';

/* eslint new-cap: 0 */

import Split from 'split.js';
const lodashThrottle = require('lodash/throttle');

var rawPrefix = window.location.origin + window.location.pathname;
var gistPrefix = 'https://gist.githubusercontent.com/';
var defaultHome = 'Home';
var gistPathPrefix = '';
var gistHashPrefix = 'gist/';
var gistOrg = '';
var gistID = '';
var gistRE = new RegExp(`^/?${gistHashPrefix}([^/]+)/([^/]+)(/(\\w*))?(.md)?$`, 'g');

export default class MainController {
  // constructor arglist must match invocation in app.js
  constructor($scope, $resource, $http, $timeout, $location, $anchorScroll, $uibModal) {
    var that = this;
    this.lastLoadedRawPrefix = rawPrefix;
    this.watchEditEnabled = false;
    this.editSource = null;
    this.rootHash = '';
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
      mode: 'text',
      inputStyle: 'contenteditable',
      lineNumbers: true,
      lineWrapping: true,
      extraKeys: extraKeys,
      onLoad: function(_editor) {
        that.codemirrorLoaded(_editor);
      }
    };

    this.$scope.$on('smartdown-loaded', function(event) {
      that.loadDefault();
    });

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

    // Navigation

    this.$scope.$on('go-to-card', function(event, cardKey) {
      if (that.showInputSource) {
        that.hideEditor();
      }
      that.loadURL(cardKey);
    });

    window.onpopstate = function(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      let cardKey = window.location.href;
      // console.log('onpopstate cardKey', cardKey, that.lastLoadedRawPrefix);

      if (cardKey.indexOf(that.lastLoadedRawPrefix) === 0) {
        cardKey = cardKey.slice(that.lastLoadedRawPrefix.length);
        // console.log('...strip lastLoadedRawPrefix', cardKey);
      }

      if (cardKey.indexOf('##') === 0) {
        cardKey = that.rootHash + cardKey.slice(1);
        // console.log('...insert before subhash', cardKey);
      }

      $scope.$broadcast('go-to-card', cardKey);
    };
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
      that.split = Split(['#split-left', '#split-right'], {
        direction: 'horizontal',
        minSize: 200,
        sizes: [50, 50]
      });

      that.editSource = that.inputSource;

      this.$timeout(function() {
        that.cmInstance.refresh();
        that.cmInstance.focus();
      }, 200);
    }
    else {
      this.$timeout(function() {
        that.editSourceChanged();
        that.cmInstance.save();
        // that.cmInstance.refresh();
        if (that.split) {
          that.split.destroy();
          that.split = null;
          that.editSource = null;
        }
      }, 10);
    }
  }

  renderInput(source, subHash) {
    // console.log('renderInput', source.slice(0, 30), this.inputURL);
    var that = this;
    var renderElement = document.getElementById('InputRender');
    // this.$anchorScroll('InputRender');

    if (that.inputURL.indexOf('http') === 0) {
      var prefix = that.inputURL.slice(0, that.inputURL.lastIndexOf('/'));
      const replace = prefix + '/';

      // FIXME: DRY up this code with respect to identical code in app.js
      /* eslint-disable no-inner-declarations */
      function getGistPrefix(href) {
        let result = that.lastLoadedRawPrefix;
        const hash = window.location.hash;

        if (gistHashPrefix.length > 0 && hash.indexOf('#' + gistHashPrefix) === 0) {
          const reSrc = `^#${gistHashPrefix}([^/]+)/([^/]+)(/(\\w*))?`;
          const re = new RegExp(reSrc, 'g');
          const match = re.exec(hash);
          if (match) {
            const org = match[1];
            const id = match[2];
            result = `https://gist.githubusercontent.com/${org}/${id}/raw/`;
          }
        }

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
      // console.log('setLinkRules1', linkRules, that.inputURL);
      that.smartdown.setLinkRules(linkRules);
    }
    else {
      let linkRules = [
        {
          prefix: '/resources/',
          replace: '/gallery/resources/'
        }
      ];
      // console.log('setLinkRules2[]', that.inputURL);
      that.smartdown.setLinkRules(linkRules);
    }

    that.smartdown.setHome(source, renderElement, function() {
      if (subHash) {
        // console.log('setHome subhash', subHash, window.location.hash, `#${that.rootHash}${subHash}`);
        window.history.pushState(null, subHash, `#${that.rootHash}${subHash}`);
      }
      that.smartdown.startAutoplay(renderElement);
      if (that.showInputSource) {
        //
        window.setTimeout(function() {
          that.cmInstance.refresh();
        }, 10);
      }
      else {
        window.setTimeout(function() {
          document.body.scrollTop = 0; // For Chrome, Safari and Opera
          document.documentElement.scrollTop = 0; // For IE and Firefox
          if (subHash) {
            const target = document.getElementById(subHash.slice(1));
            if (target) {
              target.scrollIntoView();
            }
          }
        }, 10);
      }

      if (!that.watchEditEnabled) {
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

    return result;
  }


  loadSource(source, cardKey, url, subHash) {
    // console.log('loadSource', source.slice(-20), cardKey, url, subHash);
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
      // console.log('###loadSource...url empty. push current path', window.location.pathname);

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
      var newURL = window.location.pathname + suffix;
      // console.log('...push', cardKey, oldURL, newURL);
      if (newURL !== oldURL) {
        // console.log('###loadSource...url difference. push oldURL->newURL', oldURL, newURL);

        window.history.pushState(stateObj, cardKey, newURL);
      }
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

    this.renderInput(partSource, subHash);
  }

  loadSourcePart(source, cardKey) {
    this.renderInput(source);
  }


  loadAsyncCard(cardKey, cardURL, subHash) {
    // console.log('loadAsyncCard', cardKey, cardURL, subHash);
    var that = this;

    that.$http.get(cardURL, {withCredentials: false}).then(
      function(result) {
        // console.log('loadAsyncCard success', cardURL, cardKey, result.data.slice(0, 40));
        that.inputURL = cardURL;
        that.rootHash = cardKey;

        that.loadSource(result.data, cardKey, cardURL, subHash);
      },
      function(error) {
        console.log('loadAsyncCard error', cardURL, cardKey, error);
        that.setError('Error loading URL ' + cardURL + '\n\n' + JSON.stringify(error));
      }
    );
  }

  loadURL(cardKey) {
    // console.log('loadURL', cardKey, this.rootHash);
    this.hideEditor();
    var that = this;

    if (that.multiparts && that.multiparts[cardKey]) {
      var part = that.multiparts[cardKey];
      that.loadSourcePart(part, cardKey);
    }
    else {
      cardKey = this.shortenGistRawURL(cardKey);
      // console.log('cardKey...', cardKey, this.lastLoadedRawPrefix, this.rootHash);

      if (cardKey.indexOf('#') === 0) {
        cardKey = cardKey.slice(1);
        // console.log('...trim leading hash', cardKey);
      }

      let subHash = null;
      const subHashIndex = cardKey.indexOf('#');
      if (subHashIndex >= 0) {
        subHash = cardKey.slice(subHashIndex);
        cardKey = cardKey.slice(0, subHashIndex);
        // console.log('...subhash found', subHash, cardKey);
      }

      if (cardKey.indexOf(that.lastLoadedRawPrefix) === 0) {
        cardKey = cardKey.slice(that.lastLoadedRawPrefix.length + 1);
        // console.log('...trim lastLoadedRawPrefix', cardKey);
      }

      if (cardKey.indexOf('http') === 0) {
        gistOrg = '';
        gistID = '';

        var endOfPath = cardKey.lastIndexOf('/');
        if (endOfPath > 0) {
          this.lastLoadedRawPrefix = cardKey.slice(0, endOfPath);
          // console.log('...lastLoadedRawPrefix', this.lastLoadedRawPrefix);
        }

        that.loadAsyncCard(cardKey, cardKey, subHash);
      }
      else if (cardKey.indexOf('gallery/') === 0) {
        gistOrg = '';
        gistID = '';
        that.lastLoadedRawPrefix = rawPrefix;
        that.rootHash = cardKey;
        // console.log('...adjust rawPrefix/rootHash', rawPrefix, cardKey);
        that.loadAsyncCard(cardKey, cardKey, subHash);
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
            that.loadAsyncCard(cardKey, gistFileURL, subHash);
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
        // console.log('this.lastLoadedRawPrefix !== rawPrefix', this.lastLoadedRawPrefix, rawPrefix);
        if (this.lastLoadedRawPrefix !== rawPrefix) {
          const cardURL = this.lastLoadedRawPrefix + suffix;
          // console.log('defaultCard1', this.lastLoadedRawPrefix, cardKey, cardURL);
          that.loadAsyncCard(cardKey, cardURL, subHash);
        }
        else {
          let cardURL = 'gallery/' + cardKey + '.md';
          if (subHash) {
            cardURL = cardKey;
            // console.log('leave rootHash along with subhash ', that.rootHash, subHash);
          }
          else {
            that.rootHash = cardURL;
            // cardURL = cardKey = that.rootHash;
            // console.log('adjust rootHash ', that.rootHash);
          }
          // console.log('defaultCard2', cardKey, cardURL, that.rootHash, subHash);
          that.loadAsyncCard(cardURL, cardURL, subHash);
        }
      }
    }
  }

  loadSourceItem(source, title, url) {
    if (source) {
      // console.log('loadSourceItem', source.slice(-20), title, url);
      this.hideEditor();
      this.loadSource(source, title, url, null);
    }
    else {
      // console.log('loadSourceItem loadURL', url);
      this.loadURL(url);
    }
  }

  loadDefault() {
    var that = this;
    var hash = window.location.hash;
    if (hash && hash.indexOf('#') === 0) {
      hash = hash.slice(1);
      let url = hash;
      // console.log('loadDefault hash', hash);
      that.loadURL(url);
    }
    else if (that.defaultURL) {
      // console.log('loadDefault defaultURL', that.defaultURL);
      that.loadURL(that.defaultURL);
    }
    else {
      // console.log('loadDefault loadSource', that.defaultSource.slice(-20), that.defaultTitle, '');
      that.loadSource(that.defaultSource, that.defaultTitle, null, null);
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
          that.loadSource(blobText, file.name, null, null);
        });
        reader.readAsText(file);
      }
    }
  }



  codemirrorLoaded(_editor) {
    // console.log('codemirrorLoaded', _editor);
    this.cmInstance = _editor;
    this.cmInstance.focus();

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
      this.loadSource(this.editSource, this.inputTitle, this.inputURL, null);
    }
  }
}
