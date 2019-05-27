## Smartdown Source Viewer App

### All docs except for the following are likely out of date

> I'm currently extracting this AngularJS viewer app from the main smartdown distribution. So the docs below assume that this source is located as a subdirectory of the Smartdown source tree, which is no longer the case. Rather, this app now includes the Smartdown NPM module as a dependency, and also copies the SimpleSiteExample/ from Smartdown so that it can be served via smartdown.site. This is a transitional form of the breakup.

---

# Developer Notes

## Obtaining the Smartdown Library and Examples

Although Smartdown will eventually have all of its source code published and licensed under an open source license, it is currently in a rapid development phase and I'm just one person (so far), so I haven't nailed down all the niceties of a proper open source project. In order to effectively beta-test this software, however, I am making available many of the tools and examples as well as the compiled and bundled Smartdown library via `npm` and via [`https://unpkg.com/smartdown@0.0.63/docs/lib/`](https://unpkg.com/smartdown@0.0.63/docs/lib/). The `npm` `smartdown` module contains the source necessary to render a site similar to the [Simple Viewer Site](https://smartdown.site/lib) described above.

### Local Smartdown Viewing

The examples in [Smartdown Site Gallery](https://github.com/DoctorBud/smartdown/tree/master/SimpleSiteExample/gallery) can be run by using an HTTP server and basing the server's root such that `/` refers to your downloaded `smartdown/docs/` directory. This same directory is served via GitHub Pages at [Smartdown Gallery](http://smartdown.site/?url=gallery/Home.md).

In order to test locally, you will need an HTTP server and will need to arrange for it to deliver `smartdown/docs` as `/`, to correspond with the expectations of GitHub Pages.

I do my testing using the wonderful and light [http-server](https://github.com/indexzero/http-server). The configuration I use is something like:

```bash
  cd smartdown/   # This is the root of the working directory
  http-server --cors -c-1 docs/    # Enable CORS, disable caching
```

You can then open your browser to [http://127.0.0.1:8080/gallery/](http://127.0.0.1:8080/gallery/) to see the example.

If you want to run `http-server` from a different root directory, then you may need to adjust the line in `/gallery/index.html` from:

```
  <base href="/">
```

to something that points to the `smartdown/docs/` directory when expressed via your web server.



### Usage via CDN

The easiest way to play with smartdown is to include the JS and CSS via a CDN. I'm currently using [unpkg.com](https://unpkg.com/) to distribute the compiled `smartdown` NPM module and its assets via CDN.


### Usage via `npm`

To use smartdown in a modern web application that has been through a bundler like `browserify` or `webpack`, you can install via npm and then `require('smartdown')` in your application's bundle file (e.g., `app.js` or whatever file contains your `require` statements and application initialization).

```bash
npm install smartdown --save
```

Unit tests are currently not working, but once they are fixed...

  npm test

---

# smartdown-site

This lightweight web application is intended to be deployed as a static single-page website, where the site can then be used to view and render Smartdown files easily.

## Usage

### Examples

The app has a few preloaded Smartdown examples.

### Load File or Drag-and-Drop

A local Smartdown file can be viewed through the app by using the 'Load File' button or by dragging and dropping a file onto the dropzone

### Load URL

A remote Smartdown file can be loaded via URL.

*Note that if the remote file is hosted on a website that does not support CORS, then the request will be rejected. Such files can be copied locally and then viewed that way, however.*

### The `url` parameter

The `smartdown-viewer` app is designed so that the URL pointing to the app can be amended with an optional `url` parameter that points to a Smartdown file, subject to the same restrictions as Load URL above. For example, suppose this app is hosted on [http://smartdown.site](http://smartdown.site) and a desired Smartdown file is hosted on [http://www.example.com/MySmartdownFile.md](http://www.example.com/MySmartdownFile.md). Then the following URL will launch the smartdown-viewer app and cause it to load and render the specified file:

> [http://smartdown.site?url=http://www.example.com/MySmartdownFile.md](http://smartdown.site?url=http://www.example.com/MySmartdownFile.md)

## Requirements to build

This is what I use, you may get lucky with slightly older/newer versions.

- Node 6.11.2
- NPM 5.5.1


## Requirements to run

Tested on MacOSX Safari, Chrome and FireFox. Requires some form of http-server. `npm run dev` will invoke the WebPack server for auto-bundling during development, and this is sufficient for demo purposes.


## Building

```
cd smartdown/ # If you aren't already there
npm install
npm run build
```

## Running

```
cd site/
npm run dev
open http://localhost:8080/webpack-dev-server/smartdown-viewer # On MacOSX
# Alternatively, point your browser to:
#   http://localhost:8080/webpack-dev-server/smartdown-viewer
#
```


## Version History

- **0.0.1** - First isolation from Smartdown's site/ directory.
- **0.0.2** - Update to latest draft version of Smartdown 0.0.88
- **0.0.3** - Apply this site as smartdown.site via CNAME.
- **0.0.4** - Upgrade to SD 0.0.89. Populate the /lib directory for legacy clients who expected smartdown.site/lib/ to be where SD lives.
- **0.0.5** - Add SimpleSiteExample to gist/ and lib/ for compatibility with existing users of gist/ and lib/ on smartdown.site.
- **0.0.6** - Update to SD 0.0.92. Fix target=_blank links to use rel=noopener.
- **0.0.7** - Update to SD 0.0.93.
- **0.0.8** - Update to SD 0.0.94. Add temporary 'important' CSS qualifer for Disclosable Tooltip-style links. Smartdown CSS needs a more-specific selector, or the Viewer needs to have a more relaxed selector for text color. This is a hack.
- **0.0.9** - Update to SD 0.0.95.
- **0.0.10** - Update to SD 0.0.97.
- **0.0.11** - SD 0.0.98.
- **0.0.12** - SD 0.0.99. Use dist/ instead of docs/. Add publish.sh
- **0.0.13** - SD 0.0.100. SD Gallery 0.0.20
- **0.0.14** - SD 0.0.102. SD Gallery 0.0.22
- **0.0.15** - SD 0.0.111. SD Gallery 0.0.23. Ensure Smartdown API docs are available. Includes Decoration capability.
- **0.0.16** - SD 0.0.112.
- **0.0.17** - SD 0.0.113, Gallery 0.0.25 (DisclosablesPlus and Decorations)
- **0.0.18** - SD 0.0.114.
- **0.0.19** - SD 0.0.115. Use Terser webpack plugin instead of UglifyJS.
- **0.0.20** - SD 0.0.116. Gallery 0.0.26.
- **0.0.21** - SD 0.0.117. Gallery 0.0.28.
- **0.0.22** - SD 0.0.118. Gallery 0.0.29.
- **0.0.23** - SD 1.0.0. Gallery 0.0.29.
- **0.0.24** - SD 1.0.1. Gallery 0.0.30.
- **0.0.25** - SD 1.0.2. Gallery 0.0.30.
- **0.0.26** - SD 1.0.5. Gallery 0.0.33.
