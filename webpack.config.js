var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin')
var path = require('path');
var fs = require('fs');

process.noDeprecation = true;   // https://github.com/babel/babel-loader/issues/392

var nodeEnvironment = process.env.BUILD;
var production = nodeEnvironment === 'production';
var development = nodeEnvironment === 'development';

var dist = path.join(__dirname, 'dist/');
var app = path.join(__dirname, 'app');
var nm = path.join(__dirname, 'node_modules');
var angularJS = path.join(nm, '/angular/angular.min.js');
var bsRoot = path.join(nm, '/bootstrap/dist/');
var bs = path.join(nm, '/bootstrap/dist/js/bootstrap.min.js');
var fa = path.join(nm, '/font-awesome');
var codemirror = path.join(nm, '/codemirror/');
var codemirrorJS = path.join(codemirror, '/lib/codemirror.js');
// var smartdownRoot = '/Users/bud/DoctorBud/smartdown/dist/';
var smartdownRoot = path.join(nm, 'smartdown/dist/');
var smartdown = path.join(smartdownRoot, 'lib/');
var smartdownDoc = path.join(smartdownRoot, 'doc/');
// var smartdownGallery = '/Users/bud/DoctorBud/smartdown-gallery/';
var smartdownGallery = path.join(nm, 'smartdown-gallery/');
var smartdownGalleryRsrc = path.join(nm, 'smartdown-gallery/resources/');
var smartdownJS = path.join(smartdown, 'smartdown.js');
var smartdownCalcHandlersJS = path.join(smartdown, 'calc_handlers.js');
// var smartdownCalcHandlersJS = path.join(app, 'calc_handlers.js');
var smartdownCSS = path.join(smartdown, 'smartdown.css');
var smartdownFontsCSS = path.join(smartdown, 'fonts.css');
var noParse = [
                // new RegExp(smartdownJS),
                new RegExp(codemirrorJS),
                new RegExp('smartdownJS'),
                // new RegExp(angularJS),
                // new RegExp('angularJS'),
                new RegExp('codemirrorJS')
              ];


var entryFile = './app.js';
var outputPath = dist;
var outputFile = './bundle.js';
var indexFile = 'index.ejs';
var baseURL = '/'; // development ? '/' : '/viewer/';

var galleryIgnores = [
  '.git/**',
  'README.md',
  'LICENSE',
  'package.json',
  'index.html',
  'AAADebug.md',
  'DBpedia.md',
  'ExtensionsPlayableP5X.js',
  'LDFPic.md',
  'MusicTest.md',
  'Wikidata.md'];

var config = {
  mode: nodeEnvironment,
  context: app,

  entry: entryFile,

  output: {
    path: outputPath,
    filename: outputFile
  },

  resolve: {
    alias: {
      smartdownJS$: smartdownJS,
      smartdownGallery$: smartdownGallery,
      smartdownCalcHandlersJS$: smartdownCalcHandlersJS,
      smartdownCSS$: smartdownCSS,
      smartdownFontsCSS$: smartdownFontsCSS,
      angular$: angularJS,
      // angularJS$: angularJS,
      codemirrorJS$: codemirrorJS
    },
    modules: [
      app,
      'node_modules'
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new CopyWebpackPlugin(
      [
        { from: '../CNAME' },

        { from: smartdown },
        { from: smartdownDoc, to: 'smartdown/doc/' },

        { from: smartdown, to: 'lib/' },
        { from: smartdown, to: 'gist/' },

        // { from: path.join(smartdownRoot, 'index.html'), to: 'lib/' },

        { from: smartdownGallery, to: 'gallery/', ignore: galleryIgnores },
        { from: path.join(smartdownGallery, 'LDF.md') },
        { from: smartdownGalleryRsrc, to: 'resources/' },
        { from: path.join(smartdown, '../../README.md'), to: 'gallery/' },
        // { from: path.join(smartdown, '../../LICENSE.md'), to: 'gallery/' },
        // { from: path.join(smartdown, '../../CODE_OF_CONDUCT.md'), to: 'gallery/' },
        // { from: path.join(smartdown, '../../CONTRIBUTING.md'), to: 'gallery/' },
        // { from: path.join(smartdown, '../gallery/favicon.ico'), to: 'gallery/' },
      ]
    ),

    new webpack.DefinePlugin({
      'INCLUDE_ALL_MODULES': function includeAllModulesGlobalFn(modulesArray, application) {
        modulesArray.forEach(function executeModuleIncludesFn(moduleFn) {
            moduleFn(application);
        });
      },
      ENVIRONMENT: JSON.stringify(nodeEnvironment),
      BASE_URL: JSON.stringify(baseURL)
    })
  ],

  module: {
    noParse: noParse,
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      {
        test: /\.scss$/,
        // loader: 'style!css!sass?includePaths[]=' + bootstrap
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      {
          test: new RegExp(angularJS),
          loader: 'exports-loader?angular'
      },

      {
        // Reference: https://github.com/babel/babel-loader
        test: /\.js$/,
        exclude: /node_modules/,
        include: [app, smartdown],
        use: {
          loader: 'babel-loader',
          options: {
            comments: true,
            cacheDirectory: false,
            presets: ['@babel/preset-env'],
            plugins: [
              // '@babel/plugin-syntax-dynamic-import',
              // '@babel/plugin-transform-modules-umd',
              // '@babel/plugin-transform-block-scoping'
            ]
          },
        }
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|txt|ico)$/,
        loader: 'file-loader',
        include: [bsRoot, app, smartdown]
      },

      {
        test: /\.(html)$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  devServer: {
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true"
    },
    hot: false,
    inline: true,
    // https: true,
    https: {
      key: fs.readFileSync("./server.key"),
      cert: fs.readFileSync("./server.crt"),
      // ca: fs.readFileSync("/path/to/ca.pem"),
    },
    contentBase: dist,
    watchContentBase: true,
    historyApiFallback: true,
    stats: {
      modules: true,
      cached: true,
      colors: true,
      chunk: true
    }
  }
};

config.plugins.push(
  new HtmlWebpackPlugin({
    template: path.join(app, indexFile),
    inject: 'head',
    baseUrl: baseURL
  }));

config.plugins.push(new HtmlWebpackPlugin(
  {
    template: '../SimpleSiteExample/index.ejs',
    inject: false,
    filename: path.join(outputPath, 'lib/index.html'),
    smartdownIndexTitle: 'Simple Smartdown Site',
    smartdownRawPrefix: `window.location.origin + '${baseURL}gallery/'`,
    smartdownBaseURL: baseURL,
  }));

config.plugins.push(new HtmlWebpackPlugin(
  {
    template: '../SimpleSiteExample/index.ejs',
    inject: false,
    filename: path.join(outputPath, 'gist/index.html'),
    smartdownGistHashPrefix: '',
    smartdownGistPathPrefix: 'gist/',
    smartdownIndexTitle: 'Smartdown Gists',
    smartdownDefaultHome: 'Gists',
    smartdownRawPrefix: `window.location.origin + '${baseURL}gallery/'`,
    smartdownBaseURL: baseURL,
  }));


switch (nodeEnvironment) {
  case 'production':
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      new TerserJSPlugin({
        sourceMap: false,
        terserOptions: {
          ecma: 8,
          output: {
            comments: false,
            beautify: false,
          },
          mangle: {
            keep_fnames: true
          },
          compress: {
            warnings: true,
          },
          comments: false
        }
      })
    );

    config.output.filename = '[name].js';

    config.entry = {
      bundle: entryFile,
      // vendor: ['angular', 'codemirror'] // , 'smartdownJS']
    };

    config.devtool = false;
    break;

  case 'test':
    config.entry = entryFile;
    break;

  case 'development':
    config.entry = [entryFile, 'webpack/hot/dev-server'];
    config.devtool = 'source-map';
    break;

  case 'analyze':
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      }));
    break;

  default:
    console.warn('Unknown or Undefined Node Environment. Please refer to package.json for available build commands.');
}

module.exports = config;
