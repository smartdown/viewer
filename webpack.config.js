var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var path = require('path');
var fs = require('fs');

process.noDeprecation = true;   // https://github.com/babel/babel-loader/issues/392

var nodeEnvironment = process.env.BUILD;
var production = nodeEnvironment === 'production';
var development = nodeEnvironment === 'development';

var dist = path.join(__dirname, 'docs/');
var app = path.join(__dirname, 'app');
var nm = path.join(__dirname, 'node_modules');
var angularJS = path.join(nm, '/angular/angular.min.js');
var bsRoot = path.join(nm, '/bootstrap/dist/');
var bs = path.join(nm, '/bootstrap/dist/js/bootstrap.min.js');
var fa = path.join(nm, '/font-awesome');
var codemirror = path.join(nm, '/codemirror/');
var codemirrorJS = path.join(codemirror, '/lib/codemirror.js');
// var smartdown = path.join(nm, 'smartdown/docs/lib/');
var smartdown = '/Users/bud/DoctorBud/smartdown/docs/lib/';
var smartdownGallery = path.join(nm, 'smartdown-gallery/');
var smartdownJS = path.join(smartdown, 'smartdown.js');
var smartdownCalcHandlersJS = path.join(smartdown, 'calc_handlers.js');
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
var baseURL = ''; // development ? '/' : '/viewer/';

var galleryIgnores = [
  '.git/**',
  'README.md',
  'LICENSE',
  'package.json',
  'index.html',
  'AAADebug.md',
  'ExtensionsPlayableP5X.js'];

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

        // { from: path.join(smartdown, '8.smartdown.css') },
        // { from: path.join(smartdown, '8.smartdown.css.map') },

        // { from: path.join(smartdown, 'smartdown_d3cloudJS.js') },
        // { from: path.join(smartdown, 'smartdown_d3cloudJS.js.map') },
        // { from: path.join(smartdown, 'smartdown_d3dcCSS.js') },
        // { from: path.join(smartdown, 'smartdown_d3dcCSS.js.map') },
        // { from: path.join(smartdown, 'smartdown_ldf.js') },
        // { from: path.join(smartdown, 'smartdown_ldf.js.map') },
        // { from: path.join(smartdown, 'smartdown_p5DOM.js') },
        // { from: path.join(smartdown, 'smartdown_p5DOM.js.map') },
        // { from: path.join(smartdown, 'smartdown_stdlib.js') },
        // { from: path.join(smartdown, 'smartdown_stdlib.js.map') },
        // { from: path.join(smartdown, 'smartdown_topojson.js') },
        // { from: path.join(smartdown, 'smartdown_topojson.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~d3dc.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~d3dc.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~d3fc.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~d3fc.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~d3~d3dc.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~d3~d3dc.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~p5DOM~p5Sound~p5js.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~p5DOM~p5Sound~p5js.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~p5Sound.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~p5Sound.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~stdlib-sotu.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~stdlib-sotu.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~stdlib.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~stdlib.js.map') },
        // { from: path.join(smartdown, 'smartdown_vendors~three.js') },
        // { from: path.join(smartdown, 'smartdown_vendors~three.js.map') },

        { from: path.join(smartdown, 'brython.js'), to: 'lib/' },
        { from: path.join(smartdown, 'brython_stdlib.js'), to: 'lib/' },
        { from: path.join(smartdown, 'xypic.js'), to: 'lib/' },
        { from: path.join(smartdown, 'viz.js'), to: 'lib/' },
        { from: path.join(smartdown, 'lite.render.js'), to: 'lib/' },
        { from: path.join(smartdown, 'webcomponents-loader.js'), to: 'lib/' },

        // { from: path.join(smartdown, 'marker-icon-2x.png') },
        // { from: path.join(smartdown, 'marker-icon.png') },
        // { from: path.join(smartdown, 'marker-shadow.png') },

        { from: smartdownGallery, to: 'gallery/', ignore: galleryIgnores },
        { from: path.join(smartdown, '../gallery/README.md'), to: 'gallery/' },
        { from: path.join(smartdown, '../gallery/favicon.ico'), to: 'gallery/' },
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

switch (nodeEnvironment) {
  case 'production':
    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),

      new UglifyJSPlugin({
        sourceMap: false,
        uglifyOptions: {
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
