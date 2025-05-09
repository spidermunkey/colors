// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6PeTU":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b874723119023f86";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"iI2BD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
var _dashboardJs = require("./js/components/Dashboard.js");
var _colorPreviewJs = require("./js/components/ColorPreview.js");
var _contextJs = require("./js/components/Context.js");
var _searchPanelJs = require("./js/components/SearchPanel.js");
var _scrollStackerJs = require("./js/components/ScrollStacker.js");
"use strict";
// const ScrollStack = new ScrollStacker( $('.search-info .scroll-stacker'), $('.search-info .content') );
const dPanelStacker = app.components.stackers.dPanel = new (0, _scrollStackerJs.ScrollStacker)($(".cc-variants.shades"));
const lPanelStacker = app.components.stackers.lPanel = new (0, _scrollStackerJs.ScrollStacker)($(".cc-variants.tints"));
const TaskManager = app.emitter = new EventEmitter();
const menus = app.menus;
const palettes = app.palettes;
const collections = app.collections;
const copyButtons = $$(".btn-copy");
const hueFilterOptions = $$(".hue-options .option input");
const toneFilterOptions = $$(".tone-options .option input");
const sliderInputFields = $$(".val-label input");
const defaultCollectionsMenu = $(".palettes .option__modal");
const userPalettesMenu = $(".collections .option__modal .option__modal--list");
const addToCollectionFromPreviewMenu = $(".a2c_modal ul");
const nestedMenuElements = $$('[data-role="tabButton"][data-type="nested"]');
const dashboardModal = $(".dashboard__modal");
const dashboardPanel = $(".dashboard__panel");
const fsDashboardPreview = $(".dashboard__overlay.dashboard__fullscreen");
const previewElement = $(".dashboard-preview");
const passivePreviewElement = $(".passive-preview");
const infoElement = $(".preview__mini-modal .info", passivePreviewElement);
const preview = app.preview = {
    element: previewElement,
    passiveElement: passivePreviewElement,
    infoElement,
    tinter: $(".tinter", previewElement),
    shader: $(".shader", previewElement),
    btnLiteMode: $(".liter", previewElement),
    btnDarkMode: $(".darker", previewElement),
    btnColorizer: $(".colorizer", previewElement),
    btnFavorite: $(".btn.like"),
    nameFieldPreview: $(".color-title .edit-text"),
    nameFieldEditor: $(".color-content .color-title")
};
const colorPreview = preview.interface = new (0, _colorPreviewJs.ColorPreview)();
const colorContextMenu = new (0, _contextJs.ColorContextMenu)();
const searchPanel = new (0, _searchPanelJs.SearchPanel)();
const menuTabber = new Tabber();
const sortingAndFilteringMenu = new Modal($(".menu-options"), "active");
sortingAndFilteringMenu.bindToggler($(".filter-options"));
listenAll(copyButtons, copyCurrentHex);
listenAll(hueFilterOptions, filterHuesOnInput, "input");
listenAll(toneFilterOptions, filterTonesOnInput, "input");
listenAll(sliderInputFields, focusInputOnClick);
// listen(cpCanvas, handleCanvasPosition);
listen($(".option.reset-hues"), resetHueFilterCheckBoxesThenRender);
listen($(".reset-current-color"), colorPreview.returnToSelectedColor.bind(colorPreview));
listen($(".btn.info"), showFullScreenPreview);
listen($(".close-editor"), closeFullScreenPreview);
listen($(".search-results"), updateSearchPreviewColorOnClick);
$(".theme-color .current-color").listen();
const ready = async function fetchMenuDataThenCreateCorrespondingElements() {
    const { collections , palettes  } = await api.listCollectionsAndPalettes();
    collections.forEach(createPalette);
    palettes.forEach(createCollection);
    const defaultCollections = app.menus.defaultCollections = new MenuList(collections, [
        "menu-items"
    ]);
    const userPalettes = app.menus.userPalettes = new MenuList(palettes, [
        "menu-items"
    ]);
    const a2cMenu = app.menus.a2cMenu = new MenuList(palettes, [
        "menu-items"
    ]);
    defaultCollections.items.map(({ element  })=>hydratePaletteLink(element));
    userPalettes.items.map(({ element  })=>createCollectionLink(element));
    a2cMenu.items.map(({ element  })=>hydrateA2CLink(element));
    defaultCollectionsMenu.innerHTML = "";
    defaultCollections.render(defaultCollectionsMenu);
    userPalettes.render(userPalettesMenu);
    a2cMenu.render(addToCollectionFromPreviewMenu);
    // allow show hide of rendered menu elements container only after names have been rendered
    nestedMenuElements.forEach((element)=>listen(element, toggleActiveMenuOnClick(element)));
}();
// ---------- just a loading animation
(function getDefaultColorsForHomePage() {
    const defaultHues = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "orange",
        "rose"
    ];
    defaultHues.forEach(getDefaultHueAndPaint);
    // -------- paint n hue dots with first n number of colors of same hue in db
    async function getDefaultHueAndPaint(hue) {
        const { data  } = await (0, _axiosDefault.default).get(`http://localhost:1279/colors/crayolaExtended?hue=${hue}`);
        let previewColors = [
            ...document.querySelectorAll(`.h-panel.${hue} .panel-preview .clr`)
        ];
        // -------- count hue dots & for each number of dots...
        for(let i = 0; i < previewColors.length; i++)// -------- paint
        previewColors[i].style.backgroundColor = data[i].hex;
    }
})();
(function handleRightClickOnColor() {
    listen(document, colorContextMenu.handleClickOutside.bind(colorContextMenu));
    listen(document, handleContextMenuEvent, "contextmenu");
})();
(function handleClickOnColor() {
    document.addEventListener("dblclick", openPreviewOnDoubleClick);
    dashboardPanel.addEventListener("mousedown", updateCurrentColorOnClick);
})();
(function hydratePreviewElement() {
    listen(preview.infoElement, colorPreview.open.bind(colorPreview), "click", true);
    listen(preview.tinter, toggleTinter);
    listen(preview.shader, toggleShader);
    listen(preview.btnLiteMode, togglePreviewLight);
    listen(preview.btnDarkMode, togglePreviewDark);
    listen(preview.btnColorizer, togglePreviewCurrentColor);
    listen(preview.btnFavorite, addCurrentColorToFavorites);
    listen(preview.nameFieldPreview, handleNameChange);
    listen(preview.nameFieldEditor, handleNameChange, "dblclick");
})();
const createCollectionControls = function hydrateCreateCollectionModal() {
    let ccModalFormState = "inactive";
    const ccModal = document.querySelector(".ccModal");
    const ccForm = document.querySelector(".ccForm");
    const nameInput = document.getElementById("cName");
    // handle click outside
    ccModal.addEventListener("click", (e)=>{
        if (!e.target.closest(".ccForm")) {
            e.preventDefault();
            createCollectionControls.closeContext();
        }
    });
    document.querySelector('[data-tab="collections"] button').addEventListener("click", function toggleOnClick(e) {
        createCollectionControls.openContext();
        return;
    });
    ccForm.querySelector("form").addEventListener("submit", async function postData(e) {
        e.preventDefault();
        let name = document.getElementById("cName").value.trim();
        let desc = document.getElementById("cDesc").value.trim();
        const res = await api.routes.create(name, desc);
        console.log("submiting form");
        if (res) {
            const link = (await menus).collectionMenu.addItem(name);
            const link2 = (await menus).a2cMenu.addItem(name);
            createCollectionLink(link);
            createCollection(name);
            hydrateA2CLink(link2);
        }
    });
    function openContext() {
        ccForm.classList.add("active");
        ccModal.classList.add("active");
        ccModalFormState = "active";
        nameInput.setAttribute("tabIndex", "0");
        nameInput.focus();
        console.log("opening context");
        return ccModalFormState;
    }
    function closeContext() {
        ccModal.classList.remove("active");
        ccForm.classList.remove("active");
        ccModalFormState = "inactive";
        console.log("closing context");
        return ccModalFormState;
    }
    return {
        state: ccModalFormState,
        openContext,
        closeContext
    };
}();
(function logAppIdentity() {
    let stamp = DateTime.stamp();
    console.log("%cCOLORS -- PORT 3333", "color: aqua; font-family: arial; font-size:20px");
    console.log(`%c${stamp.day}, ${stamp.month} ${stamp.date}  ${stamp.time}`, "color:orange; font:arial; font-size:18px");
    console.log(app);
})();
async function updatePreview(colorElement) {
    let { id  } = colorElement.dataset;
    const props = await currentPalette.checkColor(id);
    if (!props) return console.error("invalid color");
    console.dir("color validated", props);
    app.color = props;
    colorPreview.update(props);
    // themebarControls.toFirst();
    console.log("app and colorPreview updated", app.color);
    console.log("tab name is", app.tab.name);
    console.log(app);
}
function openPreviewOnDoubleClick(event) {
    if (clickedColorElement(event)) colorPreview.open();
}
function updateCurrentColorOnClick(event) {
    console.log(previewIsOpen());
    const rightClick = !mouseClickLeft(event);
    if (rightClick) return;
    else if (colorContextMenu && colorContextMenu.state === "active") return colorContextMenu.close();
    const clickedColor = clickedColorElement(event);
    if (clickedColor) updatePreview(clickedColor);
    // handle click outside
    if (!clickedColor && previewIsOpen() && !clickedColorElement(event) && !clickedPreviewElement(event) && !clickedPassivePreviewElement(event)) colorPreview.close();
}
function updateSearchPreviewColorOnClick(event) {
    const rightClick = !mouseClickLeft(event);
    if (rightClick) return;
    else if (colorContextMenu && colorContextMenu.state === "active") return colorContextMenu.close();
    const clickedColor = clickedColorElement(event);
    if (clickedColor) {
        if (app.tab.set) {
            const found = app.tab.set.find((clr)=>{
                if (clr._id == clickedColor.dataset.id) return clr;
            });
            if (found) {
                let clr = new Color(found);
                let { tints , shades , darks , lights  } = clr;
                let tPanel = frag();
                let sPanel = frag();
                let dPanel = frag();
                let lPanel = frag();
                for(let i = tints.length - 1; i >= 0; i--){
                    // log(i)
                    let vari = div();
                    vari.classList.add("vari", "view-panel--clr");
                    vari.style.background = tints[i];
                    vari.dataset.hex = tints[i];
                    tPanel.appendChild(vari);
                }
                for(let i = shades.length - 1; i >= 0; i--){
                    let vari = div();
                    vari.classList.add("vari", "view-panel--clr");
                    vari.style.background = shades[i];
                    vari.dataset.hex = shades[i];
                    sPanel.appendChild(vari);
                }
                for(let i = 0; i <= darks.length - 1; i++){
                    let vari = div();
                    vari.classList.add("vari", "view-panel--clr");
                    vari.style.background = darks[i];
                    vari.dataset.hex = darks[i];
                    dPanel.appendChild(vari);
                }
                for(let i = 0; i <= lights.length - 1; i++){
                    let vari = div();
                    vari.classList.add("vari", "view-panel--clr");
                    vari.style.background = lights[i];
                    vari.dataset.hex = lights[i];
                    lPanel.appendChild(vari);
                }
                log("darks", darks, dPanel);
                log("lights", lights, lPanel);
                $(".cc-variants.tints .variants.p1").innerHTML = "";
                $(".cc-variants.tints .variants.p1").appendChild(lPanel);
                $(".cc-variants.shades .variants.p1").innerHTML = "";
                $(".cc-variants.shades .variants.p1").appendChild(dPanel);
                $(".cc-variants.tints .variants.p2").innerHTML = "";
                $(".cc-variants.tints .variants.p2").appendChild(tPanel);
                $(".cc-variants.shades .variants.p2").innerHTML = "";
                $(".cc-variants.shades .variants.p2").appendChild(sPanel);
                $(".cc-banner").style.backgroundColor = found.hex;
                $(".cc-name").textContent = found.name;
                $(".cc-hex").textContent = found.hex;
                $(".cc-tone").textContent = found.primaryTone;
            }
        }
    }
// handle click outside
// if ( colorPreview.state === 'active' &&
//      !clickedColor && 
//       !clickedPreview &&
//        !clickedPassivePreview ) colorPreview.close();
}
// -------------------------
// ROUTES
// -----------------------------------------
async function addCurrentColorToFavorites() {
    if (!(0, _colorPreviewJs.ColorPreview).color) return;
    let { name , hex  } = (0, _colorPreviewJs.ColorPreview).color;
    const response = await api.routes.add("favorites", name, hex);
    alert("success");
    return response;
}
async function addCurrentColorToCollection(collectionName) {
    if (!(0, _colorPreviewJs.ColorPreview).color) return;
    let { name , hex  } = (0, _colorPreviewJs.ColorPreview).color;
    const response = await api.routes.add(collectionName, name, hex);
    alert("success");
    return response;
}
function resetHueFilterCheckboxes() {
    each($$(".hue-options .option input"), (input)=>input.checked = false);
    currentPalette.filters.hues = [];
}
function resetHueFilterCheckBoxesThenRender() {
    resetHueFilterCheckboxes();
    if (currentPalette) currentPalette.render();
}
async function filterHuesOnInput(option) {
    option = option.srcElement;
    let hue = option.name;
    let inputSelected = option.checked === true;
    let checkedOptions = currentPalette.filters.hues;
    let indexOfHueSelected = checkedOptions.indexOf(hue);
    if (!currentPalette || !hue) {
        option.checked = false;
        return;
    }
    if (inputSelected && indexOfHueSelected === -1) checkedOptions.push(hue);
    else if (indexOfHueSelected !== -1) checkedOptions.splice(indexOfHueSelected, 1);
    checkedOptions.length === 0 && currentPalette.filters.hues.length === 0 ? currentPalette.render() : currentPalette.renderFilteredState();
}
async function filterTonesOnInput(option) {
    option = option.srcElement;
    let tone = option.name;
    let inputSelected = option.checked === true;
    let checkedOptions = currentPalette.filters.tones;
    let indexOfToneSelected = checkedOptions.indexOf(tone);
    // console.log(tone)
    // console.log(checkedOptions,currentPalette)
    if (!currentPalette || !tone) {
        option.checked = false;
        return;
    }
    if (inputSelected && indexOfToneSelected === -1) checkedOptions.push(tone);
    else if (indexOfToneSelected !== -1) // console.log(indexOfToneSelected)
    checkedOptions.splice(indexOfToneSelected, 1);
    // console.log(checkedOptions,currentPalette)
    checkedOptions.length === 0 && currentPalette.filters.hues.length === 0 ? currentPalette.render() : currentPalette.renderFilteredState();
}
function createPalette(name) {
    const palette = new (0, _dashboardJs.Dashboard)(`http://localhost:1279/colors/${name}`, name, "palette");
    palettes[name] = palette;
}
function createCollection(name) {
    collections[name] = new (0, _dashboardJs.Dashboard)(`http://localhost:1279/colors/collections/${name}`, name, "collection");
}
function hydratePaletteLink(link) {
    // console.log('creating palette link',link)
    link.addEventListener("click", async function() {
        const tabName = link.dataset.tab;
        if (palettes[tabName]) {
            const clrSet = await palettes[tabName].getAllColors();
            currentPalette = palettes[tabName];
            resetHueFilterCheckBoxesThenRender();
            app.tab.name = tabName;
            app.tab.component = palettes[tabName];
            app.tab.set = clrSet;
        }
    });
    return link;
}
function hydrateA2CLink(link) {
    // console.log('creating add to collection link',link);
    link.addEventListener("click", async function(e) {
        const tabName = link.dataset.tab;
        if (collections[tabName] && colorPreview.color) addCurrentColorToCollection(tabName);
    });
}
function hydrateCollectionLink(link) {
    link.addEventListener("click", async function(e) {
        const tabName = link.dataset.tab;
        if (e.target.closest(".del")) {
            alert(`attempting to delete ${tabName}`);
            if (confirm(`are you sure you want to delete ${tabName}?`)) {
                const response = await api.routes.delete(tabName);
                if (response) {
                    link.remove();
                    const ref = (await menus).a2cMenu.links.find((link)=>link.dataset.tab == tabName);
                    if (ref) ref.remove();
                    createCollectionControls.closeContext();
                    console.log("confirmed");
                }
                return response;
            }
            return;
        } else if (collections[tabName]) {
            const clrSet = await collections[tabName].getAllColors();
            console.log("rendering");
            currentPalette = collections[tabName];
            resetHueFilterCheckBoxesThenRender();
            app.tab.name = tabName;
            app.tab.component = collections[tabName];
            app.tab.set = clrSet;
        }
    });
    return link;
}
function createCollectionLink(link) {
    hydrateCollectionLink(link);
    if (link.dataset.tab !== "favorites") {
        appendDeleteButton(link);
        function appendDeleteButton(link) {
            const delButton = document.createElement("span");
            delButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"></path></svg>`;
            delButton.classList.add("del");
            link.appendChild(delButton);
        }
    }
}
function handleContextMenuEvent(event) {
    const clickedColor = colorClicked(event);
    if (clickedColor && isFavorite(clickedColor)) highlightFavoriteIcon();
    else hideFavoriteIcon();
    colorContextMenu.handleRightClick(event);
}
function showFullScreenPreview() {
    fsDashboardPreview.classList.toggle("active");
}
function closeFullScreenPreview() {
    fsDashboardPreview.classList.remove("active");
}
// -------------------------
// UTILITIES
// -----------------------------------------
function toggleTinter() {
    $(".variations").classList.remove("shade");
    $(".variations").classList.add("tint");
}
function toggleShader() {
    $(".variations").classList.remove("tint");
    $(".variations").classList.add("shade");
}
function togglePreviewDark() {
    preview.element.classList.add("dark");
    preview.element.classList.remove("lite", "primary");
}
function togglePreviewLight() {
    preview.element.classList.add("lite");
    preview.element.classList.remove("dark", "primary");
}
function togglePreviewCurrentColor() {
    preview.element.classList.add("primary");
    preview.element.classList.remove("lite", "dark");
}
function toggleActiveMenuOnClick(tab) {
    console.log(arguments);
    const others = $$(".option").filter((menuTab)=>menuTab !== tab);
    const correspondingModal = $(`.option__modal[data-tab="${tab.dataset.tab}"]`);
    return function HandleTransformsOnClick(e) {
        if (!e.target.closest('[data-tab="collections"] button') && !e.target.closest(".del")) {
            const distanceFromLeft = correspondingModal.getBoundingClientRect().left - 20;
            const distanceToTop = tab.getBoundingClientRect().bottom - tab.parentElement.getBoundingClientRect().top;
            others.forEach((tab)=>tab.classList.toggle("passive"));
            tab.style.setProperty("--dft", `${-distanceToTop}px`);
            tab.classList.toggle("active");
            const activeModal = $(".option__modal.active");
            if (activeModal && activeModal !== correspondingModal) activeModal.classList.remove("active");
            correspondingModal.style.setProperty("--dfl", `-${distanceFromLeft}px`);
            correspondingModal.classList.toggle("active");
        }
    };
}
function clickedColorElement(event) {
    return event.target.closest(".view-panel--clr");
}
function clickedPreviewElement(event) {
    return event.target.closest(".dashboard-preview");
}
function clickedPassivePreviewElement(event) {
    return event.target.closest(".passive-preview");
}
function previewIsOpen() {
    return colorPreview.state === "active";
}
$(".theme-navigator").addEventListener("click", (e)=>{
    if (e.target.closest(".tggle-right")) themebarControls.next();
    else if (e.target.closest(".tggle-left")) themebarControls.prev();
    console.log(e.target);
});
$(".theme-label").addEventListener("click", (e)=>{
    if (e.target.closest(".ttl")) themebarControls.toggleOptions();
});
$(".theme-options").addEventListener("click", (e)=>{
    let clickedOption = e.target.closest(".opt");
    if (clickedOption) {
        let element = clickedOption;
        themebarControls.toOption.call(themebarControls, element.dataset.ttl);
    }
    console.log(clickedOption);
});
// $('.btn-tk.ecg').addEventListener('click',() => {
//     themebarControls.toggleCtrlPanel.call(themebarControls);
//     $('.btn-tk.ecg').classList.toggle('active');
// })
// $('.btn-tk.ccg').addEventListener('click',() => {
//     $('.gradient-export--overlay').classList.toggle('active')
// })
const themebarControls = app.components.themebar = {
    index: 1,
    sections: $$(".side-menu .theme-bar"),
    options: $$(".theme-options .opt"),
    title: $(".side-menu .theme-label .ttl"),
    theme: "mono",
    get color () {
        return colorPreview.color;
    },
    next () {
        let ttl1 = $(".side-menu .theme-label .ttl"), element, theme;
        this.index = this.index + 1;
        if (this.index > this.sections.length - 1) this.index = 0;
        this.sections.forEach((section)=>{
            section.classList.remove("primary");
            section.classList.add("passive");
        });
        element = this.sections[this.index];
        element.classList.add("primary");
        theme = element.dataset.theme;
        ttl1.textContent = element.dataset.ttl;
        this.theme = theme;
        $(".opt.current").classList.remove("current");
        $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add("current");
        colorPreview.requestGradientUpdate(this.theme);
    },
    prev () {
        let ttl1 = $(".side-menu .theme-label .ttl"), element, theme;
        this.index = this.index - 1;
        if (this.index < 0) this.index = this.sections.length - 1;
        this.sections.forEach((section)=>{
            section.classList.remove("primary");
            section.classList.add("passive");
        });
        element = this.sections[this.index];
        element.classList.add("primary");
        theme = element.dataset.theme;
        ttl1.textContent = element.dataset.ttl;
        this.theme = theme;
        $(".opt.current").classList.remove("current");
        $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add("current");
        colorPreview.requestGradientUpdate(this.theme);
    },
    toFirst () {
        let ttl1 = $(".side-menu .theme-label .ttl"), element, theme;
        this.index = 0;
        this.sections.forEach((section)=>{
            section.classList.remove("primary");
            section.classList.add("passive");
        });
        element = this.sections[this.index];
        element.classList.add("primary");
        theme = element.dataset.theme;
        ttl1.textContent = element.dataset.ttl;
        this.theme = theme;
        $(".opt.current").classList.remove("current");
        $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add("current");
        colorPreview.requestGradientUpdate(this.theme);
    },
    showOptions () {
        $(".theme-navigator").classList.add("passive");
        $(".theme-color").classList.add("passive");
        $(".theme-options").classList.add("active");
    },
    hideOptions () {
        $(".theme-navigator").classList.remove("passive");
        $(".theme-color").classList.remove("passive");
        $(".theme-options").classList.remove("active");
    },
    toggleOptions () {
        $(".theme-navigator").classList.toggle("passive");
        $(".theme-color").classList.toggle("passive");
        $(".theme-options").classList.toggle("active");
    },
    toOption (title) {
        // this.sections.forEach(section => {
        //     section.classList.remove('primary');
        //     section.classList.add('passive');
        // })
        let element = this.sections.find((section)=>section.dataset.ttl === title);
        ttl = $(".side-menu .theme-label .ttl");
        if (element) {
            console.log("found", element);
            console.log(element, this.sections.indexOf(element));
            this.index = this.sections.indexOf(element);
            this.sections.forEach((section)=>{
                section.classList.remove("primary");
                section.classList.add("passive");
            });
            element.classList.add("primary");
            let theme = element.dataset.theme;
            ttl.textContent = element.dataset.ttl;
            this.theme = theme;
            this.hideOptions();
            console.log(this);
            this.title.textContent = element.dataset.ttl;
            $(".opt.current").classList.remove("current");
            $(`.opt[data-ttl="${element.dataset.ttl}"]`).classList.add("current");
            colorPreview.requestGradientUpdate(this.theme);
        }
    },
    showCtrlPanel () {},
    hideCtrlPanel () {},
    toggleCtrlPanel () {
        $(".ctrl-panel").classList.toggle("active");
    }
};
colorPreview.update(new Color({
    name: "Sample",
    hex: "#F6768E",
    tone: "Clean"
})) // #F6768E
;

},{"axios":"jo6P5","./js/components/Dashboard.js":"aDcaG","./js/components/ColorPreview.js":"14aeW","./js/components/Context.js":"3OGEE","./js/components/SearchPanel.js":"3AaeL","./js/components/ScrollStacker.js":"cqTGX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _axiosJsDefault.default));
parcelHelpers.export(exports, "Axios", ()=>Axios);
parcelHelpers.export(exports, "AxiosError", ()=>AxiosError);
parcelHelpers.export(exports, "CanceledError", ()=>CanceledError);
parcelHelpers.export(exports, "isCancel", ()=>isCancel);
parcelHelpers.export(exports, "CancelToken", ()=>CancelToken);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "Cancel", ()=>Cancel);
parcelHelpers.export(exports, "isAxiosError", ()=>isAxiosError);
parcelHelpers.export(exports, "spread", ()=>spread);
parcelHelpers.export(exports, "toFormData", ()=>toFormData);
parcelHelpers.export(exports, "AxiosHeaders", ()=>AxiosHeaders);
parcelHelpers.export(exports, "HttpStatusCode", ()=>HttpStatusCode);
parcelHelpers.export(exports, "formToJSON", ()=>formToJSON);
parcelHelpers.export(exports, "mergeConfig", ()=>mergeConfig);
var _axiosJs = require("./lib/axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios , AxiosError , CanceledError , isCancel , CancelToken , VERSION , all , Cancel , isAxiosError , spread , toFormData , AxiosHeaders , HttpStatusCode , formToJSON , mergeConfig  } = (0, _axiosJsDefault.default);

},{"./lib/axios.js":"63MyY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63MyY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _axiosJs = require("./core/Axios.js");
var _axiosJsDefault = parcelHelpers.interopDefault(_axiosJs);
var _mergeConfigJs = require("./core/mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _indexJs = require("./defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("./helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
var _canceledErrorJs = require("./cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _cancelTokenJs = require("./cancel/CancelToken.js");
var _cancelTokenJsDefault = parcelHelpers.interopDefault(_cancelTokenJs);
var _isCancelJs = require("./cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _dataJs = require("./env/data.js");
var _toFormDataJs = require("./helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _axiosErrorJs = require("./core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _spreadJs = require("./helpers/spread.js");
var _spreadJsDefault = parcelHelpers.interopDefault(_spreadJs);
var _isAxiosErrorJs = require("./helpers/isAxiosError.js");
var _isAxiosErrorJsDefault = parcelHelpers.interopDefault(_isAxiosErrorJs);
var _axiosHeadersJs = require("./core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _httpStatusCodeJs = require("./helpers/HttpStatusCode.js");
var _httpStatusCodeJsDefault = parcelHelpers.interopDefault(_httpStatusCodeJs);
"use strict";
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    const context = new (0, _axiosJsDefault.default)(defaultConfig);
    const instance = (0, _bindJsDefault.default)((0, _axiosJsDefault.default).prototype.request, context);
    // Copy axios.prototype to instance
    (0, _utilsJsDefault.default).extend(instance, (0, _axiosJsDefault.default).prototype, context, {
        allOwnKeys: true
    });
    // Copy context to instance
    (0, _utilsJsDefault.default).extend(instance, context, null, {
        allOwnKeys: true
    });
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance((0, _mergeConfigJsDefault.default)(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
const axios = createInstance((0, _indexJsDefault.default));
// Expose Axios class to allow class inheritance
axios.Axios = (0, _axiosJsDefault.default);
// Expose Cancel & CancelToken
axios.CanceledError = (0, _canceledErrorJsDefault.default);
axios.CancelToken = (0, _cancelTokenJsDefault.default);
axios.isCancel = (0, _isCancelJsDefault.default);
axios.VERSION = (0, _dataJs.VERSION);
axios.toFormData = (0, _toFormDataJsDefault.default);
// Expose AxiosError class
axios.AxiosError = (0, _axiosErrorJsDefault.default);
// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = (0, _spreadJsDefault.default);
// Expose isAxiosError
axios.isAxiosError = (0, _isAxiosErrorJsDefault.default);
// Expose mergeConfig
axios.mergeConfig = (0, _mergeConfigJsDefault.default);
axios.AxiosHeaders = (0, _axiosHeadersJsDefault.default);
axios.formToJSON = (thing)=>(0, _formDataToJSONJsDefault.default)((0, _utilsJsDefault.default).isHTMLForm(thing) ? new FormData(thing) : thing);
axios.HttpStatusCode = (0, _httpStatusCodeJsDefault.default);
axios.default = axios;
// this module should only have a default export
exports.default = axios;

},{"./utils.js":"5By4s","./helpers/bind.js":"haRQb","./core/Axios.js":"cpqD8","./core/mergeConfig.js":"b85oP","./defaults/index.js":"hXfHM","./helpers/formDataToJSON.js":"01RfH","./cancel/CanceledError.js":"9PwCG","./cancel/CancelToken.js":"45wzn","./cancel/isCancel.js":"a0VmF","./env/data.js":"h29L9","./helpers/toFormData.js":"ajoez","./core/AxiosError.js":"3u8Tl","./helpers/spread.js":"dyQ8N","./helpers/isAxiosError.js":"eyiLq","./core/AxiosHeaders.js":"cgSSx","./helpers/HttpStatusCode.js":"fdR61","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5By4s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _bindJs = require("./helpers/bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var global = arguments[3];
"use strict";
// utils is a library of generic helper functions non-specific to axios
const { toString  } = Object.prototype;
const { getPrototypeOf  } = Object;
const kindOf = ((cache)=>(thing)=>{
        const str = toString.call(thing);
        return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    })(Object.create(null));
const kindOfTest = (type)=>{
    type = type.toLowerCase();
    return (thing)=>kindOf(thing) === type;
};
const typeOfTest = (type)=>(thing)=>typeof thing === type;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */ const { isArray  } = Array;
/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */ const isUndefined = typeOfTest("undefined");
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ const isArrayBuffer = kindOfTest("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    let result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && isArrayBuffer(val.buffer);
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */ const isString = typeOfTest("string");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ const isFunction = typeOfTest("function");
/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */ const isNumber = typeOfTest("number");
/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */ const isObject = (thing)=>thing !== null && typeof thing === "object";
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */ const isBoolean = (thing)=>thing === true || thing === false;
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */ const isPlainObject = (val)=>{
    if (kindOf(val) !== "object") return false;
    const prototype = getPrototypeOf(val);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */ const isDate = kindOfTest("Date");
/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFile = kindOfTest("File");
/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */ const isBlob = kindOfTest("Blob");
/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */ const isFileList = kindOfTest("FileList");
/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */ const isStream = (val)=>isObject(val) && isFunction(val.pipe);
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */ const isFormData = (thing)=>{
    let kind;
    return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
    kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ const isURLSearchParams = kindOfTest("URLSearchParams");
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */ const trim = (str)=>str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */ function forEach(obj, fn, { allOwnKeys =false  } = {}) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    let i;
    let l;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
        const len = keys.length;
        let key;
        for(i = 0; i < len; i++){
            key = keys[i];
            fn.call(null, obj[key], key, obj);
        }
    }
}
function findKey(obj, key) {
    key = key.toLowerCase();
    const keys = Object.keys(obj);
    let i = keys.length;
    let _key;
    while(i-- > 0){
        _key = keys[i];
        if (key === _key.toLowerCase()) return _key;
    }
    return null;
}
const _global = (()=>{
    /*eslint no-undef:0*/ if (typeof globalThis !== "undefined") return globalThis;
    return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context)=>!isUndefined(context) && context !== _global;
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */ function merge() {
    const { caseless  } = isContextDefined(this) && this || {};
    const result = {};
    const assignValue = (val, key)=>{
        const targetKey = caseless && findKey(result, key) || key;
        if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val);
        else if (isPlainObject(val)) result[targetKey] = merge({}, val);
        else if (isArray(val)) result[targetKey] = val.slice();
        else result[targetKey] = val;
    };
    for(let i = 0, l = arguments.length; i < l; i++)arguments[i] && forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */ const extend = (a, b, thisArg, { allOwnKeys  } = {})=>{
    forEach(b, (val, key)=>{
        if (thisArg && isFunction(val)) a[key] = (0, _bindJsDefault.default)(val, thisArg);
        else a[key] = val;
    }, {
        allOwnKeys
    });
    return a;
};
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */ const stripBOM = (content)=>{
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
};
/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */ const inherits = (constructor, superConstructor, props, descriptors)=>{
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, "super", {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};
/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */ const toFlatObject = (sourceObj, destObj, filter, propFilter)=>{
    let props;
    let i;
    let prop;
    const merged = {};
    destObj = destObj || {};
    // eslint-disable-next-line no-eq-null,eqeqeq
    if (sourceObj == null) return destObj;
    do {
        props = Object.getOwnPropertyNames(sourceObj);
        i = props.length;
        while(i-- > 0){
            prop = props[i];
            if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
            }
        }
        sourceObj = filter !== false && getPrototypeOf(sourceObj);
    }while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
    return destObj;
};
/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */ const endsWith = (str, searchString, position)=>{
    str = String(str);
    if (position === undefined || position > str.length) position = str.length;
    position -= searchString.length;
    const lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
};
/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */ const toArray = (thing)=>{
    if (!thing) return null;
    if (isArray(thing)) return thing;
    let i = thing.length;
    if (!isNumber(i)) return null;
    const arr = new Array(i);
    while(i-- > 0)arr[i] = thing[i];
    return arr;
};
/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */ // eslint-disable-next-line func-names
const isTypedArray = ((TypedArray)=>{
    // eslint-disable-next-line func-names
    return (thing)=>{
        return TypedArray && thing instanceof TypedArray;
    };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */ const forEachEntry = (obj, fn)=>{
    const generator = obj && obj[Symbol.iterator];
    const iterator = generator.call(obj);
    let result;
    while((result = iterator.next()) && !result.done){
        const pair = result.value;
        fn.call(obj, pair[0], pair[1]);
    }
};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */ const matchAll = (regExp, str)=>{
    let matches;
    const arr = [];
    while((matches = regExp.exec(str)) !== null)arr.push(matches);
    return arr;
};
/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */ const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str)=>{
    return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
        return p1.toUpperCase() + p2;
    });
};
/* Creating a function that will check if an object has a property. */ const hasOwnProperty = (({ hasOwnProperty  })=>(obj, prop)=>hasOwnProperty.call(obj, prop))(Object.prototype);
/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */ const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer)=>{
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    const reducedDescriptors = {};
    forEach(descriptors, (descriptor, name)=>{
        if (reducer(descriptor, name, obj) !== false) reducedDescriptors[name] = descriptor;
    });
    Object.defineProperties(obj, reducedDescriptors);
};
/**
 * Makes all methods read-only
 * @param {Object} obj
 */ const freezeMethods = (obj)=>{
    reduceDescriptors(obj, (descriptor, name)=>{
        // skip restricted props in strict mode
        if (isFunction(obj) && [
            "arguments",
            "caller",
            "callee"
        ].indexOf(name) !== -1) return false;
        const value = obj[name];
        if (!isFunction(value)) return;
        descriptor.enumerable = false;
        if ("writable" in descriptor) {
            descriptor.writable = false;
            return;
        }
        if (!descriptor.set) descriptor.set = ()=>{
            throw Error("Can not rewrite read-only method '" + name + "'");
        };
    });
};
const toObjectSet = (arrayOrString, delimiter)=>{
    const obj = {};
    const define = (arr)=>{
        arr.forEach((value)=>{
            obj[value] = true;
        });
    };
    isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
    return obj;
};
const noop = ()=>{};
const toFiniteNumber = (value, defaultValue)=>{
    value = +value;
    return Number.isFinite(value) ? value : defaultValue;
};
const ALPHA = "abcdefghijklmnopqrstuvwxyz";
const DIGIT = "0123456789";
const ALPHABET = {
    DIGIT,
    ALPHA,
    ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT)=>{
    let str = "";
    const { length  } = alphabet;
    while(size--)str += alphabet[Math.random() * length | 0];
    return str;
};
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */ function isSpecCompliantForm(thing) {
    return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
const toJSONObject = (obj)=>{
    const stack = new Array(10);
    const visit = (source, i)=>{
        if (isObject(source)) {
            if (stack.indexOf(source) >= 0) return;
            if (!("toJSON" in source)) {
                stack[i] = source;
                const target = isArray(source) ? [] : {};
                forEach(source, (value, key)=>{
                    const reducedValue = visit(value, i + 1);
                    !isUndefined(reducedValue) && (target[key] = reducedValue);
                });
                stack[i] = undefined;
                return target;
            }
        }
        return source;
    };
    return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing)=>thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
exports.default = {
    isArray,
    isArrayBuffer,
    isBuffer,
    isFormData,
    isArrayBufferView,
    isString,
    isNumber,
    isBoolean,
    isObject,
    isPlainObject,
    isUndefined,
    isDate,
    isFile,
    isBlob,
    isRegExp,
    isFunction,
    isStream,
    isURLSearchParams,
    isTypedArray,
    isFileList,
    forEach,
    merge,
    extend,
    trim,
    stripBOM,
    inherits,
    toFlatObject,
    kindOf,
    kindOfTest,
    endsWith,
    toArray,
    forEachEntry,
    matchAll,
    isHTMLForm,
    hasOwnProperty,
    hasOwnProp: hasOwnProperty,
    reduceDescriptors,
    freezeMethods,
    toObjectSet,
    toCamelCase,
    noop,
    toFiniteNumber,
    findKey,
    global: _global,
    isContextDefined,
    ALPHABET,
    generateString,
    isSpecCompliantForm,
    toJSONObject,
    isAsyncFn,
    isThenable
};

},{"./helpers/bind.js":"haRQb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haRQb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>bind);
"use strict";
function bind(fn, thisArg) {
    return function wrap() {
        return fn.apply(thisArg, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cpqD8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _buildURLJs = require("../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _interceptorManagerJs = require("./InterceptorManager.js");
var _interceptorManagerJsDefault = parcelHelpers.interopDefault(_interceptorManagerJs);
var _dispatchRequestJs = require("./dispatchRequest.js");
var _dispatchRequestJsDefault = parcelHelpers.interopDefault(_dispatchRequestJs);
var _mergeConfigJs = require("./mergeConfig.js");
var _mergeConfigJsDefault = parcelHelpers.interopDefault(_mergeConfigJs);
var _buildFullPathJs = require("./buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _validatorJs = require("../helpers/validator.js");
var _validatorJsDefault = parcelHelpers.interopDefault(_validatorJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const validators = (0, _validatorJsDefault.default).validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */ class Axios {
    constructor(instanceConfig){
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new (0, _interceptorManagerJsDefault.default)(),
            response: new (0, _interceptorManagerJsDefault.default)()
        };
    }
    /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */ request(configOrUrl, config) {
        /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
        if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
        } else config = configOrUrl || {};
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const { transitional , paramsSerializer , headers  } = config;
        if (transitional !== undefined) (0, _validatorJsDefault.default).assertOptions(transitional, {
            silentJSONParsing: validators.transitional(validators.boolean),
            forcedJSONParsing: validators.transitional(validators.boolean),
            clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
        if (paramsSerializer != null) {
            if ((0, _utilsJsDefault.default).isFunction(paramsSerializer)) config.paramsSerializer = {
                serialize: paramsSerializer
            };
            else (0, _validatorJsDefault.default).assertOptions(paramsSerializer, {
                encode: validators.function,
                serialize: validators.function
            }, true);
        }
        // Set config.method
        config.method = (config.method || this.defaults.method || "get").toLowerCase();
        let contextHeaders;
        // Flatten headers
        contextHeaders = headers && (0, _utilsJsDefault.default).merge(headers.common, headers[config.method]);
        contextHeaders && (0, _utilsJsDefault.default).forEach([
            "delete",
            "get",
            "head",
            "post",
            "put",
            "patch",
            "common"
        ], (method)=>{
            delete headers[method];
        });
        config.headers = (0, _axiosHeadersJsDefault.default).concat(contextHeaders, headers);
        // filter out skipped interceptors
        const requestInterceptorChain = [];
        let synchronousRequestInterceptors = true;
        this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
        });
        const responseInterceptorChain = [];
        this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
        });
        let promise;
        let i = 0;
        let len;
        if (!synchronousRequestInterceptors) {
            const chain = [
                (0, _dispatchRequestJsDefault.default).bind(this),
                undefined
            ];
            chain.unshift.apply(chain, requestInterceptorChain);
            chain.push.apply(chain, responseInterceptorChain);
            len = chain.length;
            promise = Promise.resolve(config);
            while(i < len)promise = promise.then(chain[i++], chain[i++]);
            return promise;
        }
        len = requestInterceptorChain.length;
        let newConfig = config;
        i = 0;
        while(i < len){
            const onFulfilled = requestInterceptorChain[i++];
            const onRejected = requestInterceptorChain[i++];
            try {
                newConfig = onFulfilled(newConfig);
            } catch (error) {
                onRejected.call(this, error);
                break;
            }
        }
        try {
            promise = (0, _dispatchRequestJsDefault.default).call(this, newConfig);
        } catch (error) {
            return Promise.reject(error);
        }
        i = 0;
        len = responseInterceptorChain.length;
        while(i < len)promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
        return promise;
    }
    getUri(config) {
        config = (0, _mergeConfigJsDefault.default)(this.defaults, config);
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        return (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer);
    }
}
// Provide aliases for supported request methods
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
            method,
            url,
            data: (config || {}).data
        }));
    };
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ function generateHTTPMethod(isForm) {
        return function httpMethod(url, data, config) {
            return this.request((0, _mergeConfigJsDefault.default)(config || {}, {
                method,
                headers: isForm ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
            }));
        };
    }
    Axios.prototype[method] = generateHTTPMethod();
    Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
exports.default = Axios;

},{"./../utils.js":"5By4s","../helpers/buildURL.js":"3bwC2","./InterceptorManager.js":"1VRIM","./dispatchRequest.js":"6sjJ6","./mergeConfig.js":"b85oP","./buildFullPath.js":"1I5TW","../helpers/validator.js":"9vgkY","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3bwC2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildURL);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosURLSearchParamsJs = require("../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */ function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    const _encode = options && options.encode || encode;
    const serializeFn = options && options.serialize;
    let serializedParams;
    if (serializeFn) serializedParams = serializeFn(params, options);
    else serializedParams = (0, _utilsJsDefault.default).isURLSearchParams(params) ? params.toString() : new (0, _axiosURLSearchParamsJsDefault.default)(params, options).toString(_encode);
    if (serializedParams) {
        const hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
}

},{"../utils.js":"5By4s","../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hz84m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
"use strict";
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */ function encode(str) {
    const charMap = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\x00"
    };
    return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
        return charMap[match];
    });
}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */ function AxiosURLSearchParams(params, options) {
    this._pairs = [];
    params && (0, _toFormDataJsDefault.default)(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
    this._pairs.push([
        name,
        value
    ]);
};
prototype.toString = function toString(encoder) {
    const _encode = encoder ? function(value) {
        return encoder.call(this, value, encode);
    } : encode;
    return this._pairs.map(function each(pair) {
        return _encode(pair[0]) + "=" + _encode(pair[1]);
    }, "").join("&");
};
exports.default = AxiosURLSearchParams;

},{"./toFormData.js":"ajoez","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ajoez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored
var _formDataJs = require("../platform/node/classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var Buffer = require("adfd9b103875c2dd").Buffer;
"use strict";
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */ function isVisitable(thing) {
    return (0, _utilsJsDefault.default).isPlainObject(thing) || (0, _utilsJsDefault.default).isArray(thing);
}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */ function removeBrackets(key) {
    return (0, _utilsJsDefault.default).endsWith(key, "[]") ? key.slice(0, -2) : key;
}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */ function renderKey(path, key, dots) {
    if (!path) return key;
    return path.concat(key).map(function each(token, i) {
        // eslint-disable-next-line no-param-reassign
        token = removeBrackets(token);
        return !dots && i ? "[" + token + "]" : token;
    }).join(dots ? "." : "");
}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */ function isFlatArray(arr) {
    return (0, _utilsJsDefault.default).isArray(arr) && !arr.some(isVisitable);
}
const predicates = (0, _utilsJsDefault.default).toFlatObject((0, _utilsJsDefault.default), {}, null, function filter(prop) {
    return /^is[A-Z]/.test(prop);
});
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/ /**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */ function toFormData(obj, formData, options) {
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("target must be an object");
    // eslint-disable-next-line no-param-reassign
    formData = formData || new ((0, _formDataJsDefault.default) || FormData)();
    // eslint-disable-next-line no-param-reassign
    options = (0, _utilsJsDefault.default).toFlatObject(options, {
        metaTokens: true,
        dots: false,
        indexes: false
    }, false, function defined(option, source) {
        // eslint-disable-next-line no-eq-null,eqeqeq
        return !(0, _utilsJsDefault.default).isUndefined(source[option]);
    });
    const metaTokens = options.metaTokens;
    // eslint-disable-next-line no-use-before-define
    const visitor = options.visitor || defaultVisitor;
    const dots = options.dots;
    const indexes = options.indexes;
    const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
    const useBlob = _Blob && (0, _utilsJsDefault.default).isSpecCompliantForm(formData);
    if (!(0, _utilsJsDefault.default).isFunction(visitor)) throw new TypeError("visitor must be a function");
    function convertValue(value) {
        if (value === null) return "";
        if ((0, _utilsJsDefault.default).isDate(value)) return value.toISOString();
        if (!useBlob && (0, _utilsJsDefault.default).isBlob(value)) throw new (0, _axiosErrorJsDefault.default)("Blob is not supported. Use a Buffer instead.");
        if ((0, _utilsJsDefault.default).isArrayBuffer(value) || (0, _utilsJsDefault.default).isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([
            value
        ]) : Buffer.from(value);
        return value;
    }
    /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */ function defaultVisitor(value, key, path) {
        let arr = value;
        if (value && !path && typeof value === "object") {
            if ((0, _utilsJsDefault.default).endsWith(key, "{}")) {
                // eslint-disable-next-line no-param-reassign
                key = metaTokens ? key : key.slice(0, -2);
                // eslint-disable-next-line no-param-reassign
                value = JSON.stringify(value);
            } else if ((0, _utilsJsDefault.default).isArray(value) && isFlatArray(value) || ((0, _utilsJsDefault.default).isFileList(value) || (0, _utilsJsDefault.default).endsWith(key, "[]")) && (arr = (0, _utilsJsDefault.default).toArray(value))) {
                // eslint-disable-next-line no-param-reassign
                key = removeBrackets(key);
                arr.forEach(function each(el, index) {
                    !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && formData.append(// eslint-disable-next-line no-nested-ternary
                    indexes === true ? renderKey([
                        key
                    ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                });
                return false;
            }
        }
        if (isVisitable(value)) return true;
        formData.append(renderKey(path, key, dots), convertValue(value));
        return false;
    }
    const stack = [];
    const exposedHelpers = Object.assign(predicates, {
        defaultVisitor,
        convertValue,
        isVisitable
    });
    function build(value, path) {
        if ((0, _utilsJsDefault.default).isUndefined(value)) return;
        if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
        stack.push(value);
        (0, _utilsJsDefault.default).forEach(value, function each(el, key) {
            const result = !((0, _utilsJsDefault.default).isUndefined(el) || el === null) && visitor.call(formData, el, (0, _utilsJsDefault.default).isString(key) ? key.trim() : key, path, exposedHelpers);
            if (result === true) build(el, path ? path.concat(key) : [
                key
            ]);
        });
        stack.pop();
    }
    if (!(0, _utilsJsDefault.default).isObject(obj)) throw new TypeError("data must be an object");
    build(obj);
    return formData;
}
exports.default = toFormData;

},{"adfd9b103875c2dd":"fCgem","../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","../platform/node/classes/FormData.js":"aFlee","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCgem":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ "use strict";
var base64 = require("9c62938f1dccc73c");
var ieee754 = require("aceacb6a4531a9d2");
var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" // eslint-disable-line dot-notation
 ? Symbol["for"]("nodejs.util.inspect.custom") // eslint-disable-line dot-notation
 : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 0x7fffffff;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192 // not used by this implementation
;
function from(value, encodingOrOffset, length) {
    if (typeof value === "string") return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== "number") throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") encoding = "utf8";
    if (!Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case "ascii":
        case "latin1":
        case "binary":
            return len;
        case "utf8":
        case "utf-8":
            return utf8ToBytes(string).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return len * 2;
        case "hex":
            return len >>> 1;
        case "base64":
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            ;
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return "";
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return "";
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return "";
    if (!encoding) encoding = "utf8";
    while(true)switch(encoding){
        case "hex":
            return hexSlice(this, start, end);
        case "utf8":
        case "utf-8":
            return utf8Slice(this, start, end);
        case "ascii":
            return asciiSlice(this, start, end);
        case "latin1":
        case "binary":
            return latin1Slice(this, start, end);
        case "base64":
            return base64Slice(this, start, end);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return "";
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = "";
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) str += " ... ";
    return "<Buffer " + str + ">";
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === "string") val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === "number") {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = "utf8";
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    if (!encoding) encoding = "utf8";
    var loweredCase = false;
    for(;;)switch(encoding){
        case "hex":
            return hexWrite(this, string, offset, length);
        case "utf8":
        case "utf-8":
            return utf8Write(this, string, offset, length);
        case "ascii":
        case "latin1":
        case "binary":
            return asciiWrite(this, string, offset, length);
        case "base64":
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = "";
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = "";
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = "";
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = "";
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
    if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError("Index out of range");
    if (offset < 0) throw new RangeError("Index out of range");
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError("targetStart out of bounds");
    if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
    if (end < 0) throw new RangeError("sourceEnd out of bounds");
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== "string") throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === "number") val = val & 255;
    else if (typeof val === "boolean") val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === "number") for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split("=")[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, "");
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return "";
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + "=";
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error("Invalid code point");
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = "0123456789abcdef";
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"9c62938f1dccc73c":"eIiSV","aceacb6a4531a9d2":"cO95r"}],"eIiSV":[function(require,module,exports) {
"use strict";
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf("=");
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join("");
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + "==");
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + "=");
    }
    return parts.join("");
}

},{}],"cO95r":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"3u8Tl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */ function AxiosError(message, code, config, request, response) {
    Error.call(this);
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor);
    else this.stack = new Error().stack;
    this.message = message;
    this.name = "AxiosError";
    code && (this.code = code);
    config && (this.config = config);
    request && (this.request = request);
    response && (this.response = response);
}
(0, _utilsJsDefault.default).inherits(AxiosError, Error, {
    toJSON: function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: (0, _utilsJsDefault.default).toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});
const prototype = AxiosError.prototype;
const descriptors = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
].forEach((code)=>{
    descriptors[code] = {
        value: code
    };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {
    value: true
});
// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps)=>{
    const axiosError = Object.create(prototype);
    (0, _utilsJsDefault.default).toFlatObject(error, axiosError, function filter(obj) {
        return obj !== Error.prototype;
    }, (prop)=>{
        return prop !== "isAxiosError";
    });
    AxiosError.call(axiosError, error.message, code, config, request, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
};
exports.default = AxiosError;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFlee":[function(require,module,exports) {
// eslint-disable-next-line strict
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VRIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
class InterceptorManager {
    constructor(){
        this.handlers = [];
    }
    /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */ use(fulfilled, rejected, options) {
        this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
        });
        return this.handlers.length - 1;
    }
    /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */ eject(id) {
        if (this.handlers[id]) this.handlers[id] = null;
    }
    /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */ clear() {
        if (this.handlers) this.handlers = [];
    }
    /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */ forEach(fn) {
        (0, _utilsJsDefault.default).forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) fn(h);
        });
    }
}
exports.default = InterceptorManager;

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sjJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dispatchRequest);
var _transformDataJs = require("./transformData.js");
var _transformDataJsDefault = parcelHelpers.interopDefault(_transformDataJs);
var _isCancelJs = require("../cancel/isCancel.js");
var _isCancelJsDefault = parcelHelpers.interopDefault(_isCancelJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _adaptersJs = require("../adapters/adapters.js");
var _adaptersJsDefault = parcelHelpers.interopDefault(_adaptersJs);
"use strict";
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new (0, _canceledErrorJsDefault.default)(null, config);
}
function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    config.headers = (0, _axiosHeadersJsDefault.default).from(config.headers);
    // Transform request data
    config.data = (0, _transformDataJsDefault.default).call(config, config.transformRequest);
    if ([
        "post",
        "put",
        "patch"
    ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
    const adapter = (0, _adaptersJsDefault.default).getAdapter(config.adapter || (0, _indexJsDefault.default).adapter);
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, response);
        response.headers = (0, _axiosHeadersJsDefault.default).from(response.headers);
        return response;
    }, function onAdapterRejection(reason) {
        if (!(0, _isCancelJsDefault.default)(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = (0, _transformDataJsDefault.default).call(config, config.transformResponse, reason.response);
                reason.response.headers = (0, _axiosHeadersJsDefault.default).from(reason.response.headers);
            }
        }
        return Promise.reject(reason);
    });
}

},{"./transformData.js":"eRqJY","../cancel/isCancel.js":"a0VmF","../defaults/index.js":"hXfHM","../cancel/CanceledError.js":"9PwCG","../core/AxiosHeaders.js":"cgSSx","../adapters/adapters.js":"d7JxI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRqJY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transformData);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../defaults/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
function transformData(fns, response) {
    const config = this || (0, _indexJsDefault.default);
    const context = response || config;
    const headers = (0, _axiosHeadersJsDefault.default).from(context.headers);
    let data = context.data;
    (0, _utilsJsDefault.default).forEach(fns, function transform(fn) {
        data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
    });
    headers.normalize();
    return data;
}

},{"./../utils.js":"5By4s","../defaults/index.js":"hXfHM","../core/AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXfHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _transitionalJs = require("./transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _toFormDataJs = require("../helpers/toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _toURLEncodedFormJs = require("../helpers/toURLEncodedForm.js");
var _toURLEncodedFormJsDefault = parcelHelpers.interopDefault(_toURLEncodedFormJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _formDataToJSONJs = require("../helpers/formDataToJSON.js");
var _formDataToJSONJsDefault = parcelHelpers.interopDefault(_formDataToJSONJs);
"use strict";
const DEFAULT_CONTENT_TYPE = {
    "Content-Type": undefined
};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */ function stringifySafely(rawValue, parser, encoder) {
    if ((0, _utilsJsDefault.default).isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return (0, _utilsJsDefault.default).trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
    transitional: (0, _transitionalJsDefault.default),
    adapter: [
        "xhr",
        "http"
    ],
    transformRequest: [
        function transformRequest(data, headers) {
            const contentType = headers.getContentType() || "";
            const hasJSONContentType = contentType.indexOf("application/json") > -1;
            const isObjectPayload = (0, _utilsJsDefault.default).isObject(data);
            if (isObjectPayload && (0, _utilsJsDefault.default).isHTMLForm(data)) data = new FormData(data);
            const isFormData = (0, _utilsJsDefault.default).isFormData(data);
            if (isFormData) {
                if (!hasJSONContentType) return data;
                return hasJSONContentType ? JSON.stringify((0, _formDataToJSONJsDefault.default)(data)) : data;
            }
            if ((0, _utilsJsDefault.default).isArrayBuffer(data) || (0, _utilsJsDefault.default).isBuffer(data) || (0, _utilsJsDefault.default).isStream(data) || (0, _utilsJsDefault.default).isFile(data) || (0, _utilsJsDefault.default).isBlob(data)) return data;
            if ((0, _utilsJsDefault.default).isArrayBufferView(data)) return data.buffer;
            if ((0, _utilsJsDefault.default).isURLSearchParams(data)) {
                headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                return data.toString();
            }
            let isFileList;
            if (isObjectPayload) {
                if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return (0, _toURLEncodedFormJsDefault.default)(data, this.formSerializer).toString();
                if ((isFileList = (0, _utilsJsDefault.default).isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                    const _FormData = this.env && this.env.FormData;
                    return (0, _toFormDataJsDefault.default)(isFileList ? {
                        "files[]": data
                    } : data, _FormData && new _FormData(), this.formSerializer);
                }
            }
            if (isObjectPayload || hasJSONContentType) {
                headers.setContentType("application/json", false);
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            const transitional = this.transitional || defaults.transitional;
            const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            const JSONRequested = this.responseType === "json";
            if (data && (0, _utilsJsDefault.default).isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                const silentJSONParsing = transitional && transitional.silentJSONParsing;
                const strictJSONParsing = !silentJSONParsing && JSONRequested;
                try {
                    return JSON.parse(data);
                } catch (e) {
                    if (strictJSONParsing) {
                        if (e.name === "SyntaxError") throw (0, _axiosErrorJsDefault.default).from(e, (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE, this, null, this.response);
                        throw e;
                    }
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: (0, _indexJsDefault.default).classes.FormData,
        Blob: (0, _indexJsDefault.default).classes.Blob
    },
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
(0, _utilsJsDefault.default).forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
(0, _utilsJsDefault.default).forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = (0, _utilsJsDefault.default).merge(DEFAULT_CONTENT_TYPE);
});
exports.default = defaults;

},{"../utils.js":"5By4s","../core/AxiosError.js":"3u8Tl","./transitional.js":"lM32f","../helpers/toFormData.js":"ajoez","../helpers/toURLEncodedForm.js":"9hjry","../platform/index.js":"7tDev","../helpers/formDataToJSON.js":"01RfH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lM32f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hjry":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>toURLEncodedForm);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _toFormDataJs = require("./toFormData.js");
var _toFormDataJsDefault = parcelHelpers.interopDefault(_toFormDataJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
function toURLEncodedForm(data, options) {
    return (0, _toFormDataJsDefault.default)(data, new (0, _indexJsDefault.default).classes.URLSearchParams(), Object.assign({
        visitor: function(value, key, path, helpers) {
            if ((0, _indexJsDefault.default).isNode && (0, _utilsJsDefault.default).isBuffer(value)) {
                this.append(key, value.toString("base64"));
                return false;
            }
            return helpers.defaultVisitor.apply(this, arguments);
        }
    }, options));
}

},{"../utils.js":"5By4s","./toFormData.js":"ajoez","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tDev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _indexJsDefault.default));
var _indexJs = require("./node/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./node/index.js":"cVeqE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cVeqE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _urlsearchParamsJs = require("./classes/URLSearchParams.js");
var _urlsearchParamsJsDefault = parcelHelpers.interopDefault(_urlsearchParamsJs);
var _formDataJs = require("./classes/FormData.js");
var _formDataJsDefault = parcelHelpers.interopDefault(_formDataJs);
var _blobJs = require("./classes/Blob.js");
var _blobJsDefault = parcelHelpers.interopDefault(_blobJs);
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */ const isStandardBrowserEnv = (()=>{
    let product;
    if (typeof navigator !== "undefined" && ((product = navigator.product) === "ReactNative" || product === "NativeScript" || product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
})();
/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */ const isStandardBrowserWebWorkerEnv = (()=>{
    return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
exports.default = {
    isBrowser: true,
    classes: {
        URLSearchParams: (0, _urlsearchParamsJsDefault.default),
        FormData: (0, _formDataJsDefault.default),
        Blob: (0, _blobJsDefault.default)
    },
    isStandardBrowserEnv,
    isStandardBrowserWebWorkerEnv,
    protocols: [
        "http",
        "https",
        "file",
        "blob",
        "url",
        "data"
    ]
};

},{"./classes/URLSearchParams.js":"5cIHE","./classes/FormData.js":"7i1jd","./classes/Blob.js":"8chF6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cIHE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosURLSearchParamsJs = require("../../../helpers/AxiosURLSearchParams.js");
var _axiosURLSearchParamsJsDefault = parcelHelpers.interopDefault(_axiosURLSearchParamsJs);
"use strict";
exports.default = typeof URLSearchParams !== "undefined" ? URLSearchParams : (0, _axiosURLSearchParamsJsDefault.default);

},{"../../../helpers/AxiosURLSearchParams.js":"hz84m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7i1jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof FormData !== "undefined" ? FormData : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8chF6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = typeof Blob !== "undefined" ? Blob : null;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"01RfH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */ function parsePropPath(name) {
    // foo[x][y][z]
    // foo.x.y.z
    // foo-x-y-z
    // foo x y z
    return (0, _utilsJsDefault.default).matchAll(/\w+|\[(\w*)]/g, name).map((match)=>{
        return match[0] === "[]" ? "" : match[1] || match[0];
    });
}
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */ function arrayToObject(arr) {
    const obj = {};
    const keys = Object.keys(arr);
    let i;
    const len = keys.length;
    let key;
    for(i = 0; i < len; i++){
        key = keys[i];
        obj[key] = arr[key];
    }
    return obj;
}
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */ function formDataToJSON(formData) {
    function buildPath(path, value, target, index) {
        let name = path[index++];
        const isNumericKey = Number.isFinite(+name);
        const isLast = index >= path.length;
        name = !name && (0, _utilsJsDefault.default).isArray(target) ? target.length : name;
        if (isLast) {
            if ((0, _utilsJsDefault.default).hasOwnProp(target, name)) target[name] = [
                target[name],
                value
            ];
            else target[name] = value;
            return !isNumericKey;
        }
        if (!target[name] || !(0, _utilsJsDefault.default).isObject(target[name])) target[name] = [];
        const result = buildPath(path, value, target[name], index);
        if (result && (0, _utilsJsDefault.default).isArray(target[name])) target[name] = arrayToObject(target[name]);
        return !isNumericKey;
    }
    if ((0, _utilsJsDefault.default).isFormData(formData) && (0, _utilsJsDefault.default).isFunction(formData.entries)) {
        const obj = {};
        (0, _utilsJsDefault.default).forEachEntry(formData, (name, value)=>{
            buildPath(parsePropPath(name), value, obj, 0);
        });
        return obj;
    }
    return null;
}
exports.default = formDataToJSON;

},{"../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgSSx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _parseHeadersJs = require("../helpers/parseHeaders.js");
var _parseHeadersJsDefault = parcelHelpers.interopDefault(_parseHeadersJs);
"use strict";
const $internals = Symbol("internals");
function normalizeHeader(header) {
    return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
    if (value === false || value == null) return value;
    return (0, _utilsJsDefault.default).isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
    const tokens = Object.create(null);
    const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let match;
    while(match = tokensRE.exec(str))tokens[match[1]] = match[2];
    return tokens;
}
const isValidHeaderName = (str)=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
    if ((0, _utilsJsDefault.default).isFunction(filter)) return filter.call(this, value, header);
    if (isHeaderNameFilter) value = header;
    if (!(0, _utilsJsDefault.default).isString(value)) return;
    if ((0, _utilsJsDefault.default).isString(filter)) return value.indexOf(filter) !== -1;
    if ((0, _utilsJsDefault.default).isRegExp(filter)) return filter.test(value);
}
function formatHeader(header) {
    return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str)=>{
        return char.toUpperCase() + str;
    });
}
function buildAccessors(obj, header) {
    const accessorName = (0, _utilsJsDefault.default).toCamelCase(" " + header);
    [
        "get",
        "set",
        "has"
    ].forEach((methodName)=>{
        Object.defineProperty(obj, methodName + accessorName, {
            value: function(arg1, arg2, arg3) {
                return this[methodName].call(this, header, arg1, arg2, arg3);
            },
            configurable: true
        });
    });
}
class AxiosHeaders {
    constructor(headers){
        headers && this.set(headers);
    }
    set(header, valueOrRewrite, rewrite) {
        const self = this;
        function setHeader(_value, _header, _rewrite) {
            const lHeader = normalizeHeader(_header);
            if (!lHeader) throw new Error("header name must be a non-empty string");
            const key = (0, _utilsJsDefault.default).findKey(self, lHeader);
            if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) self[key || _header] = normalizeValue(_value);
        }
        const setHeaders = (headers, _rewrite)=>(0, _utilsJsDefault.default).forEach(headers, (_value, _header)=>setHeader(_value, _header, _rewrite));
        if ((0, _utilsJsDefault.default).isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
        else if ((0, _utilsJsDefault.default).isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders((0, _parseHeadersJsDefault.default)(header), valueOrRewrite);
        else header != null && setHeader(valueOrRewrite, header, rewrite);
        return this;
    }
    get(header, parser) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            if (key) {
                const value = this[key];
                if (!parser) return value;
                if (parser === true) return parseTokens(value);
                if ((0, _utilsJsDefault.default).isFunction(parser)) return parser.call(this, value, key);
                if ((0, _utilsJsDefault.default).isRegExp(parser)) return parser.exec(value);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(header, matcher) {
        header = normalizeHeader(header);
        if (header) {
            const key = (0, _utilsJsDefault.default).findKey(this, header);
            return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
        }
        return false;
    }
    delete(header, matcher) {
        const self = this;
        let deleted = false;
        function deleteHeader(_header) {
            _header = normalizeHeader(_header);
            if (_header) {
                const key = (0, _utilsJsDefault.default).findKey(self, _header);
                if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                    delete self[key];
                    deleted = true;
                }
            }
        }
        if ((0, _utilsJsDefault.default).isArray(header)) header.forEach(deleteHeader);
        else deleteHeader(header);
        return deleted;
    }
    clear(matcher) {
        const keys = Object.keys(this);
        let i = keys.length;
        let deleted = false;
        while(i--){
            const key = keys[i];
            if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                delete this[key];
                deleted = true;
            }
        }
        return deleted;
    }
    normalize(format) {
        const self = this;
        const headers = {};
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            const key = (0, _utilsJsDefault.default).findKey(headers, header);
            if (key) {
                self[key] = normalizeValue(value);
                delete self[header];
                return;
            }
            const normalized = format ? formatHeader(header) : String(header).trim();
            if (normalized !== header) delete self[header];
            self[normalized] = normalizeValue(value);
            headers[normalized] = true;
        });
        return this;
    }
    concat(...targets) {
        return this.constructor.concat(this, ...targets);
    }
    toJSON(asStrings) {
        const obj = Object.create(null);
        (0, _utilsJsDefault.default).forEach(this, (value, header)=>{
            value != null && value !== false && (obj[header] = asStrings && (0, _utilsJsDefault.default).isArray(value) ? value.join(", ") : value);
        });
        return obj;
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([header, value])=>header + ": " + value).join("\n");
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(thing) {
        return thing instanceof this ? thing : new this(thing);
    }
    static concat(first, ...targets) {
        const computed = new this(first);
        targets.forEach((target)=>computed.set(target));
        return computed;
    }
    static accessor(header) {
        const internals = this[$internals] = this[$internals] = {
            accessors: {}
        };
        const accessors = internals.accessors;
        const prototype = this.prototype;
        function defineAccessor(_header) {
            const lHeader = normalizeHeader(_header);
            if (!accessors[lHeader]) {
                buildAccessors(prototype, _header);
                accessors[lHeader] = true;
            }
        }
        (0, _utilsJsDefault.default).isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
        return this;
    }
}
AxiosHeaders.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
]);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders.prototype);
(0, _utilsJsDefault.default).freezeMethods(AxiosHeaders);
exports.default = AxiosHeaders;

},{"../utils.js":"5By4s","../helpers/parseHeaders.js":"kqDd5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqDd5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = (0, _utilsJsDefault.default).toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
]);
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ exports.default = (rawHeaders)=>{
    const parsed = {};
    let key;
    let val;
    let i;
    rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
        i = line.indexOf(":");
        key = line.substring(0, i).trim().toLowerCase();
        val = line.substring(i + 1).trim();
        if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
        if (key === "set-cookie") {
            if (parsed[key]) parsed[key].push(val);
            else parsed[key] = [
                val
            ];
        } else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    });
    return parsed;
};

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0VmF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isCancel);
"use strict";
function isCancel(value) {
    return !!(value && value.__CANCEL__);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PwCG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */ function CanceledError(message, config, request) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    (0, _axiosErrorJsDefault.default).call(this, message == null ? "canceled" : message, (0, _axiosErrorJsDefault.default).ERR_CANCELED, config, request);
    this.name = "CanceledError";
}
(0, _utilsJsDefault.default).inherits(CanceledError, (0, _axiosErrorJsDefault.default), {
    __CANCEL__: true
});
exports.default = CanceledError;

},{"../core/AxiosError.js":"3u8Tl","../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d7JxI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _httpJs = require("./http.js");
var _httpJsDefault = parcelHelpers.interopDefault(_httpJs);
var _xhrJs = require("./xhr.js");
var _xhrJsDefault = parcelHelpers.interopDefault(_xhrJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
const knownAdapters = {
    http: (0, _httpJsDefault.default),
    xhr: (0, _xhrJsDefault.default)
};
(0, _utilsJsDefault.default).forEach(knownAdapters, (fn, value)=>{
    if (fn) {
        try {
            Object.defineProperty(fn, "name", {
                value
            });
        } catch (e) {
        // eslint-disable-next-line no-empty
        }
        Object.defineProperty(fn, "adapterName", {
            value
        });
    }
});
exports.default = {
    getAdapter: (adapters)=>{
        adapters = (0, _utilsJsDefault.default).isArray(adapters) ? adapters : [
            adapters
        ];
        const { length  } = adapters;
        let nameOrAdapter;
        let adapter;
        for(let i = 0; i < length; i++){
            nameOrAdapter = adapters[i];
            if (adapter = (0, _utilsJsDefault.default).isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter) break;
        }
        if (!adapter) {
            if (adapter === false) throw new (0, _axiosErrorJsDefault.default)(`Adapter ${nameOrAdapter} is not supported by the environment`, "ERR_NOT_SUPPORT");
            throw new Error((0, _utilsJsDefault.default).hasOwnProp(knownAdapters, nameOrAdapter) ? `Adapter '${nameOrAdapter}' is not available in the build` : `Unknown adapter '${nameOrAdapter}'`);
        }
        if (!(0, _utilsJsDefault.default).isFunction(adapter)) throw new TypeError("adapter is not a function");
        return adapter;
    },
    adapters: knownAdapters
};

},{"../utils.js":"5By4s","./http.js":"aFlee","./xhr.js":"ldm57","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ldm57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _settleJs = require("./../core/settle.js");
var _settleJsDefault = parcelHelpers.interopDefault(_settleJs);
var _cookiesJs = require("./../helpers/cookies.js");
var _cookiesJsDefault = parcelHelpers.interopDefault(_cookiesJs);
var _buildURLJs = require("./../helpers/buildURL.js");
var _buildURLJsDefault = parcelHelpers.interopDefault(_buildURLJs);
var _buildFullPathJs = require("../core/buildFullPath.js");
var _buildFullPathJsDefault = parcelHelpers.interopDefault(_buildFullPathJs);
var _isURLSameOriginJs = require("./../helpers/isURLSameOrigin.js");
var _isURLSameOriginJsDefault = parcelHelpers.interopDefault(_isURLSameOriginJs);
var _transitionalJs = require("../defaults/transitional.js");
var _transitionalJsDefault = parcelHelpers.interopDefault(_transitionalJs);
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
var _canceledErrorJs = require("../cancel/CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
var _parseProtocolJs = require("../helpers/parseProtocol.js");
var _parseProtocolJsDefault = parcelHelpers.interopDefault(_parseProtocolJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _axiosHeadersJs = require("../core/AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
var _speedometerJs = require("../helpers/speedometer.js");
var _speedometerJsDefault = parcelHelpers.interopDefault(_speedometerJs);
"use strict";
function progressEventReducer(listener, isDownloadStream) {
    let bytesNotified = 0;
    const _speedometer = (0, _speedometerJsDefault.default)(50, 250);
    return (e)=>{
        const loaded = e.loaded;
        const total = e.lengthComputable ? e.total : undefined;
        const progressBytes = loaded - bytesNotified;
        const rate = _speedometer(progressBytes);
        const inRange = loaded <= total;
        bytesNotified = loaded;
        const data = {
            loaded,
            total,
            progress: total ? loaded / total : undefined,
            bytes: progressBytes,
            rate: rate ? rate : undefined,
            estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
            event: e
        };
        data[isDownloadStream ? "download" : "upload"] = true;
        listener(data);
    };
}
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
exports.default = isXHRAdapterSupported && function(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        let requestData = config.data;
        const requestHeaders = (0, _axiosHeadersJsDefault.default).from(config.headers).normalize();
        const responseType = config.responseType;
        let onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if ((0, _utilsJsDefault.default).isFormData(requestData)) {
            if ((0, _indexJsDefault.default).isStandardBrowserEnv || (0, _indexJsDefault.default).isStandardBrowserWebWorkerEnv) requestHeaders.setContentType(false); // Let the browser set it
            else requestHeaders.setContentType("multipart/form-data;", false); // mobile/desktop app frameworks
        }
        let request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            const username = config.auth.username || "";
            const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
        }
        const fullPath = (0, _buildFullPathJsDefault.default)(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), (0, _buildURLJsDefault.default)(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            const responseHeaders = (0, _axiosHeadersJsDefault.default).from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
            const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            const response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
            };
            (0, _settleJsDefault.default)(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(new (0, _axiosErrorJsDefault.default)("Request aborted", (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(new (0, _axiosErrorJsDefault.default)("Network Error", (0, _axiosErrorJsDefault.default).ERR_NETWORK, config, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            const transitional = config.transitional || (0, _transitionalJsDefault.default);
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(new (0, _axiosErrorJsDefault.default)(timeoutErrorMessage, transitional.clarifyTimeoutError ? (0, _axiosErrorJsDefault.default).ETIMEDOUT : (0, _axiosErrorJsDefault.default).ECONNABORTED, config, request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if ((0, _indexJsDefault.default).isStandardBrowserEnv) {
            // Add xsrf header
            const xsrfValue = (config.withCredentials || (0, _isURLSameOriginJsDefault.default)(fullPath)) && config.xsrfCookieName && (0, _cookiesJsDefault.default).read(config.xsrfCookieName);
            if (xsrfValue) requestHeaders.set(config.xsrfHeaderName, xsrfValue);
        }
        // Remove Content-Type if data is undefined
        requestData === undefined && requestHeaders.setContentType(null);
        // Add headers to the request
        if ("setRequestHeader" in request) (0, _utilsJsDefault.default).forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!(0, _utilsJsDefault.default).isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = (cancel)=>{
                if (!request) return;
                reject(!cancel || cancel.type ? new (0, _canceledErrorJsDefault.default)(null, config, request) : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        const protocol = (0, _parseProtocolJsDefault.default)(fullPath);
        if (protocol && (0, _indexJsDefault.default).protocols.indexOf(protocol) === -1) {
            reject(new (0, _axiosErrorJsDefault.default)("Unsupported protocol " + protocol + ":", (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST, config));
            return;
        }
        // Send the request
        request.send(requestData || null);
    });
};

},{"./../utils.js":"5By4s","./../core/settle.js":"dD9aC","./../helpers/cookies.js":"4WJjt","./../helpers/buildURL.js":"3bwC2","../core/buildFullPath.js":"1I5TW","./../helpers/isURLSameOrigin.js":"lxXtv","../defaults/transitional.js":"lM32f","../core/AxiosError.js":"3u8Tl","../cancel/CanceledError.js":"9PwCG","../helpers/parseProtocol.js":"7NfWU","../platform/index.js":"7tDev","../core/AxiosHeaders.js":"cgSSx","../helpers/speedometer.js":"gQeo1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dD9aC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>settle);
var _axiosErrorJs = require("./AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
function settle(resolve, reject, response) {
    const validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(new (0, _axiosErrorJsDefault.default)("Request failed with status code " + response.status, [
        (0, _axiosErrorJsDefault.default).ERR_BAD_REQUEST,
        (0, _axiosErrorJsDefault.default).ERR_BAD_RESPONSE
    ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
}

},{"./AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WJjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            const cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if ((0, _utilsJsDefault.default).isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if ((0, _utilsJsDefault.default).isString(path)) cookie.push("path=" + path);
            if ((0, _utilsJsDefault.default).isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1I5TW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>buildFullPath);
var _isAbsoluteURLJs = require("../helpers/isAbsoluteURL.js");
var _isAbsoluteURLJsDefault = parcelHelpers.interopDefault(_isAbsoluteURLJs);
var _combineURLsJs = require("../helpers/combineURLs.js");
var _combineURLsJsDefault = parcelHelpers.interopDefault(_combineURLsJs);
"use strict";
function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !(0, _isAbsoluteURLJsDefault.default)(requestedURL)) return (0, _combineURLsJsDefault.default)(baseURL, requestedURL);
    return requestedURL;
}

},{"../helpers/isAbsoluteURL.js":"jD6NM","../helpers/combineURLs.js":"brOWK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jD6NM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAbsoluteURL);
"use strict";
function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brOWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>combineURLs);
"use strict";
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxXtv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _indexJs = require("../platform/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
"use strict";
exports.default = (0, _indexJsDefault.default).isStandardBrowserEnv ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        let href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        const parsed = (0, _utilsJsDefault.default).isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"./../utils.js":"5By4s","../platform/index.js":"7tDev","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NfWU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseProtocol);
"use strict";
function parseProtocol(url) {
    const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQeo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */ function speedometer(samplesCount, min) {
    samplesCount = samplesCount || 10;
    const bytes = new Array(samplesCount);
    const timestamps = new Array(samplesCount);
    let head = 0;
    let tail = 0;
    let firstSampleTS;
    min = min !== undefined ? min : 1000;
    return function push(chunkLength) {
        const now = Date.now();
        const startedAt = timestamps[tail];
        if (!firstSampleTS) firstSampleTS = now;
        bytes[head] = chunkLength;
        timestamps[head] = now;
        let i = tail;
        let bytesCount = 0;
        while(i !== head){
            bytesCount += bytes[i++];
            i = i % samplesCount;
        }
        head = (head + 1) % samplesCount;
        if (head === tail) tail = (tail + 1) % samplesCount;
        if (now - firstSampleTS < min) return;
        const passed = startedAt && now - startedAt;
        return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
    };
}
exports.default = speedometer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b85oP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mergeConfig);
var _utilsJs = require("../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
var _axiosHeadersJs = require("./AxiosHeaders.js");
var _axiosHeadersJsDefault = parcelHelpers.interopDefault(_axiosHeadersJs);
"use strict";
const headersToObject = (thing)=>thing instanceof (0, _axiosHeadersJsDefault.default) ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    const config = {};
    function getMergedValue(target, source, caseless) {
        if ((0, _utilsJsDefault.default).isPlainObject(target) && (0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge.call({
            caseless
        }, target, source);
        else if ((0, _utilsJsDefault.default).isPlainObject(source)) return (0, _utilsJsDefault.default).merge({}, source);
        else if ((0, _utilsJsDefault.default).isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(a, b, caseless) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(a, b, caseless);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a, caseless);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(a, b) {
        if (!(0, _utilsJsDefault.default).isUndefined(b)) return getMergedValue(undefined, b);
        else if (!(0, _utilsJsDefault.default).isUndefined(a)) return getMergedValue(undefined, a);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(a, b, prop) {
        if (prop in config2) return getMergedValue(a, b);
        else if (prop in config1) return getMergedValue(undefined, a);
    }
    const mergeMap = {
        url: valueFromConfig2,
        method: valueFromConfig2,
        data: valueFromConfig2,
        baseURL: defaultToConfig2,
        transformRequest: defaultToConfig2,
        transformResponse: defaultToConfig2,
        paramsSerializer: defaultToConfig2,
        timeout: defaultToConfig2,
        timeoutMessage: defaultToConfig2,
        withCredentials: defaultToConfig2,
        adapter: defaultToConfig2,
        responseType: defaultToConfig2,
        xsrfCookieName: defaultToConfig2,
        xsrfHeaderName: defaultToConfig2,
        onUploadProgress: defaultToConfig2,
        onDownloadProgress: defaultToConfig2,
        decompress: defaultToConfig2,
        maxContentLength: defaultToConfig2,
        maxBodyLength: defaultToConfig2,
        beforeRedirect: defaultToConfig2,
        transport: defaultToConfig2,
        httpAgent: defaultToConfig2,
        httpsAgent: defaultToConfig2,
        cancelToken: defaultToConfig2,
        socketPath: defaultToConfig2,
        responseEncoding: defaultToConfig2,
        validateStatus: mergeDirectKeys,
        headers: (a, b)=>mergeDeepProperties(headersToObject(a), headersToObject(b), true)
    };
    (0, _utilsJsDefault.default).forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
        const merge = mergeMap[prop] || mergeDeepProperties;
        const configValue = merge(config1[prop], config2[prop], prop);
        (0, _utilsJsDefault.default).isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
}

},{"../utils.js":"5By4s","./AxiosHeaders.js":"cgSSx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9vgkY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dataJs = require("../env/data.js");
var _axiosErrorJs = require("../core/AxiosError.js");
var _axiosErrorJsDefault = parcelHelpers.interopDefault(_axiosErrorJs);
"use strict";
const validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach((type, i)=>{
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
const deprecatedWarnings = {};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + (0, _dataJs.VERSION) + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return (value, opt, opts)=>{
        if (validator === false) throw new (0, _axiosErrorJsDefault.default)(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), (0, _axiosErrorJsDefault.default).ERR_DEPRECATED);
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new (0, _axiosErrorJsDefault.default)("options must be an object", (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
    const keys = Object.keys(options);
    let i = keys.length;
    while(i-- > 0){
        const opt = keys[i];
        const validator = schema[opt];
        if (validator) {
            const value = options[opt];
            const result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new (0, _axiosErrorJsDefault.default)("option " + opt + " must be " + result, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION_VALUE);
            continue;
        }
        if (allowUnknown !== true) throw new (0, _axiosErrorJsDefault.default)("Unknown option " + opt, (0, _axiosErrorJsDefault.default).ERR_BAD_OPTION);
    }
}
exports.default = {
    assertOptions,
    validators
};

},{"../env/data.js":"h29L9","../core/AxiosError.js":"3u8Tl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h29L9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VERSION", ()=>VERSION);
const VERSION = "1.4.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"45wzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canceledErrorJs = require("./CanceledError.js");
var _canceledErrorJsDefault = parcelHelpers.interopDefault(_canceledErrorJs);
"use strict";
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */ class CancelToken {
    constructor(executor){
        if (typeof executor !== "function") throw new TypeError("executor must be a function.");
        let resolvePromise;
        this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
        });
        const token = this;
        // eslint-disable-next-line func-names
        this.promise.then((cancel)=>{
            if (!token._listeners) return;
            let i = token._listeners.length;
            while(i-- > 0)token._listeners[i](cancel);
            token._listeners = null;
        });
        // eslint-disable-next-line func-names
        this.promise.then = (onfulfilled)=>{
            let _resolve;
            // eslint-disable-next-line func-names
            const promise = new Promise((resolve)=>{
                token.subscribe(resolve);
                _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
                token.unsubscribe(_resolve);
            };
            return promise;
        };
        executor(function cancel(message, config, request) {
            if (token.reason) // Cancellation has already been requested
            return;
            token.reason = new (0, _canceledErrorJsDefault.default)(message, config, request);
            resolvePromise(token.reason);
        });
    }
    /**
   * Throws a `CanceledError` if cancellation has been requested.
   */ throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    /**
   * Subscribe to the cancel signal
   */ subscribe(listener) {
        if (this.reason) {
            listener(this.reason);
            return;
        }
        if (this._listeners) this._listeners.push(listener);
        else this._listeners = [
            listener
        ];
    }
    /**
   * Unsubscribe from the cancel signal
   */ unsubscribe(listener) {
        if (!this._listeners) return;
        const index = this._listeners.indexOf(listener);
        if (index !== -1) this._listeners.splice(index, 1);
    }
    /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */ static source() {
        let cancel;
        const token = new CancelToken(function executor(c) {
            cancel = c;
        });
        return {
            token,
            cancel
        };
    }
}
exports.default = CancelToken;

},{"./CanceledError.js":"9PwCG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dyQ8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>spread);
"use strict";
function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyiLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>isAxiosError);
var _utilsJs = require("./../utils.js");
var _utilsJsDefault = parcelHelpers.interopDefault(_utilsJs);
"use strict";
function isAxiosError(payload) {
    return (0, _utilsJsDefault.default).isObject(payload) && payload.isAxiosError === true;
}

},{"./../utils.js":"5By4s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fdR61":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const HttpStatusCode = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value])=>{
    HttpStatusCode[value] = key;
});
exports.default = HttpStatusCode;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDcaG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Dashboard", ()=>Dashboard);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class Dashboard {
    constructor(endpoint, title, type){
        this.parent = $(".dashboard__panel");
        this.type = type;
        this.endpoint = endpoint;
        this.title = title;
        this.valueHasChanged = false;
        this.filters = {
            hues: [],
            tones: [],
            sortingOrder: "default"
        };
        this.currentColor = {
            currentName: undefined,
            previousNames: undefined,
            hex: undefined,
            hsl: undefined,
            hsv: undefined,
            tone: undefined,
            color: undefined,
            // linked list?
            previousColor: undefined
        };
        this.previousColors = [];
    }
    get titleCard() {
        return $(".dashboard__interface .label");
    }
    async getData() {
        const response = await (0, _axiosDefault.default).get(this.endpoint);
        if (response.status === 200 || response.statusText === "OK") return response.data;
    }
    async getAllColors() {
        const colorSet = await this.getData();
        if (colorSet && Array.isArray(colorSet)) return colorSet.slice().filter((value)=>!toneUnknown(value)).filter((value)=>value.hex && value.name);
    }
    async getFilteredColorset(options) {
        const response = await (0, _axiosDefault.default).post(this.endpoint, {
            options
        });
        if ((response.status === 200 || response.statusText === "OK") && Array.isArray(response.data)) return response.data.slice().filter((value)=>!toneUnknown(value)).filter((value)=>value.hex && value.name);
    }
    sortedByDefault(colors) {
        return colors.sort(byHue).sort(byLightness);
    }
    sortedByHue(colors) {
        return colors.sort(byHue);
    }
    sortedByLight(colors) {
        return colors.sort(byLightness);
    }
    sortedBySaturation(colors) {
        return colors.sort(bySaturation);
    }
    sortedByTone(colors) {
        return colors.sort(byTone);
    }
    clearDashboard() {
        this.parent.innerHTML = "";
    }
    createDashboard(colors) {
        const frag = document.createDocumentFragment();
        // const dash = $('.dashboard__panel');
        // dash.classList.add('dashboard__panel');
        // frag.append(dash);
        // dash.innerHTML = '';
        colors.forEach((color)=>frag.appendChild(this.createColor(color)));
        return frag;
    }
    createPanel(colors) {
        const frag = document.createDocumentFragment();
        const dash = document.createElement("div");
        dash.classList.add("preview__panel");
        frag.append(dash);
        colors.forEach((color)=>dash.appendChild(this.createColor(color)));
        return frag;
    }
    setDashboardView = (node)=>{
        console.log(appState.color);
        this.clearDashboard();
        this.parent.append(node);
        this.titleCard.textContent != this.title && (this.titleCard.textContent = this.title);
        return node;
    };
    createColor(props) {
        const { name , hex , isFavorite , _id , primaryTone , hue  } = props;
        const element = document.createElement("div");
        isFavorite === true ? element.dataset.isFavorite = "true" : element.dataset.isFavorite = "";
        element.classList.add("view-panel--clr");
        element.style.backgroundColor = hex;
        element.dataset.hex = hex;
        element.dataset.name = name;
        element.dataset.id = _id;
        element.dataset.tone = primaryTone;
        element.dataset.hue = hue;
        return element;
    }
    setLoadingState() {
        this.clearDashboard();
        this.renderSuspense();
    }
    renderSuspense() {
        this.parent.innerHTML = this.suspense();
    }
    renderError() {
        this.parent.innerHTML = this.error();
    }
    async render(dataset, sortingAlgo = this.sortedByDefault) {
        this.setLoadingState();
        this.setDashboardView(this.createDashboard(sortingAlgo(dataset ? dataset : await this.getAllColors())));
    }
    async renderFilteredState(options = this.filters, sortingAlgo = this.sortedByHue) {
        this.setLoadingState();
        this.setDashboardView(this.createDashboard(sortingAlgo(await this.getFilteredColorset(options))));
    }
    async checkColor(id) {
        // console.log(this.title,this.type, id)
        const response = await (0, _axiosDefault.default).get(`http://localhost:1279/colors/color/${id}?collection=${this.title}&type=${this.type}`);
        if (response.status === 200 || response.statusText === "OK" && response.data.status && response.data.color._id === id) return response.data.color;
        return false;
    }
    async queryColors(data) {
        console.log("searching for", data, "in", this.title);
        const found = appState.currentClrSet.filter((clr)=>{
            const name = clr.name;
            const regex = new RegExp(data, "ig");
            if (name.match(regex)) return clr;
        });
        console.log("found", found);
        if (found.length >= 0) {
            let preview = this.createPanel(found);
            $(".search-results").innerHTML = "";
            $(".search-results").append(preview);
        } else alert("nothing locally");
    // fetch all and sort;
    }
    suspense() {
        return `<div class="loading-container"><span class="loader"></span></div>`;
    }
    error() {
        return `<div>Error Fetching Resources</div>`;
    }
}
function greyscale(lightness, saturation) {
    let deviation = lightness - saturation;
    let result = [
        "unknown",
        false
    ];
    // when lightness is between 90 and 10 and saturation is less than 5
    // [grey,white,black]
    if (saturation <= 6) {
        if (lightness <= 10) return result = [
            "black",
            false
        ];
        if (lightness >= 90) return result = [
            "white",
            false
        ];
        return result = [
            "grey",
            true
        ];
    }
    // when lightness is more than 45
    // [pastel,bright,muted]
    if (lightness > 45 && lightness <= 99 && saturation > 5) {
        if (deviation <= 60 && deviation > -5) {
            // grey catch
            if (deviation <= 60 && deviation > 56) // its greyish
            return result = [
                "washed",
                true
            ];
        }
        // grey catch
        if (deviation > 62) // light grey
        return result = [
            "grey",
            true
        ];
        // pastel catch
        if (lightness >= 65 && saturation > 10) {
            if (lightness >= 65 && lightness <= 80 && deviation < 0) return result = [
                "clean",
                false
            ];
            return result = [
                "pastel",
                false
            ];
        }
        // bright catch
        if (lightness < 70 && lightness >= 45 && saturation >= 45) {
            if (saturation >= 99 && lightness >= 45 && lightness <= 55) return result = [
                "neon",
                false
            ];
            if (saturation >= 90 && lightness >= 70) return result = [
                "luminous",
                false
            ];
            if (saturation > 80 && lightness >= 45 && lightness < 70) return result = [
                "vivid",
                false
            ];
        // if (saturation < 80 && saturation > 70 && lightness > 40 && lightness < 70)
        //     return result = ['vivid2',false];
        }
        // clean colors
        if (saturation > 32 && lightness > 45) return result = [
            "clean",
            false
        ];
        // muted colors
        if (lightness <= 65 && saturation < 70 && (deviation < 60 || saturation < 45)) return result = [
            "muted",
            false
        ];
    }
    // when lightness is less than 50
    // [earth,jewel]
    if (lightness <= 50 && lightness >= 10 && saturation > 5) {
        if (saturation <= 72 && lightness <= 45) return result = [
            "earth",
            false
        ];
        if (saturation >= 45) return result = [
            "jewel",
            false
        ];
        if (deviation < 45 && deviation > 0 && saturation < 45 && lightness < 30) // its an [earth,washed,muted] tone
        return result = [
            "earth",
            false
        ];
        if (deviation <= 0) return result = [
            "jewel",
            false
        ];
        return result = [
            "grey",
            true
        ];
    // its mid/natural grey
    }
    // last call for pastel
    if (lightness > 90 && lightness < 99) {
        if (deviation <= 60) return result = [
            "pastel",
            false
        ];
        return result = [
            "grey",
            true
        ];
    }
    return result;
}
function getRange(hue) {
    let bucket;
    let ranges = [
        [
            0,
            15,
            "red"
        ],
        [
            15,
            45,
            "orange"
        ],
        [
            45,
            60,
            "yellow"
        ],
        [
            60,
            180,
            "green"
        ],
        [
            180,
            240,
            "blue"
        ],
        [
            240,
            300,
            "purple"
        ],
        [
            300,
            360,
            "rose"
        ]
    ];
    for(let i = 0; i < ranges.length; i++)if (hue >= ranges[i][0] && hue <= ranges[i][1]) {
        bucket = ranges[i][2];
        break;
    }
    return bucket;
}
// -----------------------------
// SORTERS
// ----------------------------------------------
function byHue(a, b) {
    return a.hue - b.hue;
}
function byLightness(a, b) {
    return b.lightness - a.lightness;
}
function byTone(a, b) {
    let order = {
        "pastel": 1,
        "washed": 2,
        "muted": 3,
        "clean": 4,
        "earth": 5,
        "jewel": 6,
        "vivid": 7,
        "luminous": 8,
        "neon": 9,
        "unknown": 10,
        "no dice": 11
    };
    if (order[a.primaryTone] > order[b.primaryTone]) return 1;
    return -1;
}
function bySaturation(a, b) {
    let x = a.saturation + a.lightness;
    let y = b.saturation + a.lightness;
    return x - y;
}
// -------------------------
// FILTERS
// -----------------------------------------
// RED
function isRed(color) {
    let { hue , lightness  } = color.hue;
    return (hue >= 345 && hue <= 360 || hue >= 0 && hue <= 15) && lightness >= 10 && hue <= 45;
}
// MOST BROWNS (HANDPICKED RANGES!)
function isBrown(hue, saturation, lightness) {
    if (hue <= 5 && lightness <= 7 || lightness < 10 || lightness >= 80) return false;
    return hue <= 5 && saturation >= 20 && saturation <= 40 && lightness <= 15 || hue <= 15 && saturation >= 20 && saturation <= 30 && lightness <= 15 || hue >= 5 && hue < 10 && saturation >= 20 && saturation < 50 && lightness < 30 && lightness > 7 || hue >= 20 && hue < 25 && saturation > 20 && saturation < 30 && lightness < 60 && lightness > 10 || hue >= 25 && hue < 30 && saturation > 17 && saturation < 50 && lightness < 70 && lightness > 10 || hue >= 30 && hue < 32 && saturation > 20 && saturation < 50 && lightness <= 60 && lightness > 10 || hue >= 32 && hue < 35 && saturation > 20 && saturation < 50 && lightness <= 70 && lightness > 10 || hue >= 30 && hue < 35 && saturation > 50 && lightness >= 10 && lightness <= 20 || hue >= 35 && hue < 45 && saturation < 50 && lightness < 25 || hue >= 35 && hue < 45 && saturation > 50 && lightness < 20;
}
// INTERMEDIATE [YELLOWISH, GREEN]
function isLime(hue, saturation, lightness) {
    return hue >= 69 && hue <= 120 && saturation > 50 && lightness >= 50 && lightness < 70;
}
// GREEN
function isEmerald(hue, lightness) {
    return hue > 120 && hue <= 150 && lightness > 25 || hue > 150 && hue <= 165 && lightness < 25 && lightness > 10;
}
function isAqua(hue, saturation, lightness) {
    return hue > 150 && hue <= 165 && lightness > 25 && saturation > 30;
}
// INTERMEDIATE COLOR [GREENISH BLUE]
function isTeal(hue, lightness) {
    if (hue >= 165 && hue <= 180) return lightness < 40;
    return false;
}
// BLUE
function isCyan(hue, lightness) {
    if (hue >= 180 && hue <= 195) return lightness > 40;
    return false;
}
function isSky(hue, saturation, lightness) {
    if (hue >= 195 && hue <= 210) return saturation > 20 && lightness > 20 && lightness < 80;
    return false;
}
function isAzure(hue, satuation, lightness) {
    return hue > 210 && hue < 225;
}
// INTERMEDIATE COLOR [PURPLISH BLUE]
function isIndigo(hue) {
    return hue >= 140 && hue <= 255;
}
// PURPLE
function isViolet(hue) {
    return hue > 255 && hue <= 270;
}
// PINK
function isMagenta(hue) {
    return hue > 300 && hue <= 315;
}
// GREY COLORS
function isGrey() {}
function toneUnknown(color) {
    let { primaryTone , lightness  } = color;
    return primaryTone === "no dice" || lightness === 100 || lightness === 0;
}

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14aeW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorPreview", ()=>ColorPreview);
parcelHelpers.export(exports, "FsContext", ()=>FsContext);
var _ramda = require("ramda");
class Canvas extends MouseTrackingSlider {
    constructor({ canvas , pointer  }, actions = {}, props = {
        hex: "#fff"
    }){
        super(canvas, actions);
        const self = this;
        this.element = canvas;
        this.pointer = pointer;
        this.color = new Color(props);
        this.element.style.setProperty("--hue", `${this.color.hue}`);
        console.log(this.color.hue.toString());
        this.onMouseMove = function(state) {
            let event = state.event;
            this.handleCanvasPosition(event);
            if (actions.handleColor) actions.handleColor(this.color);
            this.element.style.setProperty("--hue", `${this.color.hue}`);
            return state;
        };
        this.onMouseUp = function(state) {
            let event = state.event;
            this.handleCanvasPosition(event);
            if (actions.handleColor) actions.handleColor(this.color);
            if (actions.mouseUp) actions.mouseUp(this.color);
            this.element.style.setProperty("--hue", `${this.color.hue}`);
            console.log(this.color);
            return state;
        };
        console.log(this);
    }
    get coords() {
        return this.element.getBoundingClientRect();
    }
    get width() {
        return this.coords.width;
    }
    get height() {
        return this.coords.height;
    }
    handleCanvasPosition(event) {
        let yPos = event.clientY - this.coords.bottom, x = event.clientX - this.coords.x, y = Math.abs(yPos), xPct = Math.round(x / this.coords.width * 100), yPct = Math.round(y / this.coords.height * 100);
        if (xPct <= 100 && xPct >= 0) this.color.hsvSaturation = xPct;
        if (yPct <= 100 && yPct >= 0 && yPos <= 0) this.color.hsvValue = yPct;
        this.setPointer(this.color.hsv[1], this.color.hsv[2]);
        return this.color;
    }
    update(props) {
        // this.color = new Color(props);
        this.setPointer(this.color.hsv[1], this.color.hsv[2]);
    }
    setPointer(x, y) {
        let xToDecimal = x / 100;
        let xDistance = this.width * xToDecimal;
        let xClamp = Math.min(xDistance, this.width);
        let yToDecimal = 1 - y / 100;
        let yDistance = this.width * yToDecimal;
        let yClamp = Math.min(yDistance, this.width);
        this.pointer.style.setProperty("--x", `${xClamp}px`);
        this.pointer.style.setProperty("--y", `${yClamp}px`);
    }
}
class ColorPreview {
    constructor(){
        const self = this;
        // ---------------------------------------------------------------
        // STATEFUL ELEMENTS
        this.color = new Color({
            hex: "#fff"
        });
        this.selected = {};
        this.edits = [];
        this.cursor = new Cursor(this.edits);
        this.once = false; // new color has changed
        this.state = "passive";
        this.editorState = "passive";
        this.variationTabState = "passive";
        this.a2cMenuState = "passive";
        this.variationTabToggled = "tinter";
        // ---------------------------------------------------------------
        // DOM ELEMENTS
        this.element = $(".dashboard-preview");
        this.previewElement = $(".passive-preview");
        this.mainTitle = $(".dashboard-preview .color-content .color-title");
        this.panelTitle = $(".color-panel .color-title");
        this.hexToggler = new Toggler($(".hex-toggler"), $(".cp-hex"));
        this.gradientToggler = new Toggler($(".gd-toggler"), $(".cp-gradient"));
        this.variationToggleList = createToggleList([
            $(".tinter", this.element),
            $(".shader", this.element),
            $(".grader", this.element)
        ]);
        this.canvas = new Canvas({
            canvas: $(".cp-canvas"),
            pointer: $(".cp-canvas .cp-canvas--pointer")
        }, {
            onMouseMove: ({ event  })=>this.handleCanvasPosition(event),
            onMouseDown: ({ event  })=>this.handleCanvasPosition(event)
        });
        this.themer = new FsContext();
        this.editor = {
            self,
            parent: this.element,
            element: $(".color-panel"),
            state: "passive",
            hueSlider: new Slider($(".hue-slider"), {
                onMouseMove: self.updateCurrentHue.bind(self),
                onMouseDown: self.updateCurrentHue.bind(self)
            }),
            satSlider: new Slider($(".sat-slider"), {
                onMouseMove: self.updateCurrentSat.bind(self),
                onMouseDown: self.updateCurrentSat.bind(self)
            }),
            lightSlider: new Slider($(".light-slider"), {
                onMouseMove: self.updateCurrentLight.bind(self),
                onMouseDown: self.updateCurrentLight.bind(self)
            }),
            hueInput: $(".hue-slider .val-label input"),
            satInput: $(".sat-slider .val-label input"),
            lightInput: $(".light-slider .val-label input"),
            show () {
                this.self.addToCollectionModal.hide();
                this.parent.classList.add("editor-active");
                this.element.classList.add("active");
                this.state = "active";
            },
            hide () {
                this.parent.classList.remove("editor-active");
                this.element.classList.remove("active");
                this.state = "passive";
                this.self.hexToggler.disable();
            },
            toggle () {
                if (this.state === "passive") this.show();
                else if (this.state === "active") this.hide();
            },
            setSlider (which, value) {
                switch(which){
                    case "hue":
                        this.hueSlider.setDegrees(value);
                        break;
                    case "sat":
                        this.satSlider.setPercent(value);
                        break;
                    case "light":
                        this.lightSlider.setPercent(value);
                        break;
                }
            },
            setInput (which, value) {
                switch(which){
                    case "hue":
                        this.hueInput.value = value;
                        break;
                    case "sat":
                        this.satInput.value = value;
                        break;
                    case "light":
                        this.lightInput.value = value;
                        break;
                }
            },
            setState (which, value) {
                switch(which){
                    case "hue":
                        this.setSlider("hue", value);
                        this.setInput("hue", value);
                        break;
                    case "sat":
                        this.setSlider("sat", value);
                        this.setInput("sat", value);
                        break;
                    case "light":
                        this.setSlider("light", value);
                        this.setInput("light", value);
                        break;
                }
            },
            update (h, s, l) {
                this.setState("hue", h);
                this.setState("sat", s);
                this.setState("light", l);
            }
        };
        this.fsPanel = {
            self,
            parent: this.element,
            state: "passive",
            show () {
                this.parent.classList.add("compare-colors");
                this.state = "active";
            },
            hide () {
                this.parent.classList.remove("compare-colors");
                this.state = "passive";
            },
            toggle () {
                if (this.state === "passive") this.show();
                else if (this.state === "active") this.hide();
            }
        };
        this.addToCollectionModal = {
            self,
            parent: this.element,
            state: "passive",
            show () {
                this.self.editor.hide();
                $(".dashboard-preview .wrapper .a2c_modal").classList.add("active");
                this.state = "active";
            },
            hide () {
                $(".dashboard-preview .wrapper .a2c_modal").classList.remove("active");
                this.state = "passive";
            },
            toggle () {
                console.log(this);
                if (this.addToCollectionModal.state === "passive") this.addToCollectionModal.show();
                else if (this.addToCollectionModal.state === "active") this.addToCollectionModal.hide();
            }
        };
        // ---------------------------------------------------------------
        // INITIATIVES
        listen(this.editor.hueInput, this.updateSliderOnInput("hue").bind(this), "input");
        listen(this.editor.satInput, this.updateSliderOnInput("sat").bind(this), "input");
        listen(this.editor.lightInput, this.updateSliderOnInput("light").bind(this), "input");
        listen(this.canvas.element, this.handleCanvasPosition.bind(this));
        listen($(".header .close", this.element), this.close.bind(this));
        listen($(".tools .btn.compare", this.element), this.fsPanel.toggle.bind(this.fsPanel));
        listen($(".tools .edit"), this.editor.toggle.bind(this.editor));
        listen($(".tools .export"), this.addToCollectionModal.toggle.bind(this));
        listen($(".redo"), this.redo.bind(this));
        listen($(".undo"), this.undo.bind(this));
        listen($(".color-label.color-hex"), toClipboard.bind(this, this.selected.hex));
    // ---------------------------------------------------------------
    }
    update(props, once = false) {
        let currentColor = this.updateCurrentColor(props);
        this.once = once;
        if (this.once === false) {
            this.clearPreviousEdits();
            this.pushEdit(currentColor);
        }
        let selectedColor = new Color({
            ...currentColor,
            name: "New Color"
        });
        selectedColor.nameHasChanged = false;
        this.selected = selectedColor;
        this.updateDocumentStyles(...currentColor.hsl);
        this.updateDocumentPreviewStyles(...currentColor.hsl);
        this.updatePreviewTitles(currentColor.name);
        this.updateEditor(currentColor);
        this.updateFS(currentColor);
        this.updateColorTone(currentColor.primaryTone);
        this.updateContrast(currentColor.hsl);
        this.updateCanvas();
        this.updateSidebar(currentColor);
        return currentColor;
    }
    updateCurrentColor(props) {
        this.color = new Color(props);
        return this.color;
    }
    editCurrentColor(props) {
        let newColor = mergeObj(this.selected, props);
        return newColor;
    }
    updateColor(props) {
        let copy = {
            ...this.selected
        };
        this.pushEdit(copy);
        console.log("edits", this.edits);
        this.color = copy;
        if (props) this.updateCurrentColor(props);
    }
    updateEditor(props) {
        this.updatePreviewTitles(props.name);
        this.updateHexCodes(props.hex);
        this.updateContrast(...props.hsl);
        this.editor.update(...props.hsl);
    }
    updateFS(props) {
        $(".controls .color-hex").textContent = props.hex;
        $(".controls .color-title").textContent = props.title || props.name;
        $(".controls .color-tone").textContent = props.primaryTone || props.tone;
    }
    updateCurrentHue({ deg  }) {
        if (!this.color) return;
        this.once = true;
        if (this.mainTitle.textContent !== this.selected.name || this.panelTitle.textContent !== this.selected.name) this.updatePreviewTitles(this.selected.name);
        this.selected.hue = deg;
        // this.updateHsl(...newColor.hsl)
        this.updateDocumentStyles(...this.selected.hsl);
        this.updateHexCodes(this.selected.hex);
        this.updateCanvas();
        this.editor.setState("hue", deg);
        setVar("--selected-hue", deg);
    }
    updateCurrentSat({ pct  }) {
        if (!this.color) return;
        this.once = true;
        if (this.mainTitle.textContent !== this.selected.name || this.panelTitle.textContent !== this.selected.name) this.updatePreviewTitles(this.selected.name);
        this.selected.saturation = pct;
        this.updateDocumentStyles(...this.selected.hsl);
        this.updateHexCodes(this.selected.hex);
        this.updateCanvas();
        this.editor.setState("sat", pct);
        setVar("--selected-sat", pct);
        return this.selected;
    }
    updateCurrentLight({ pct  }) {
        if (!this.color) return;
        this.once = true;
        if (this.mainTitle.textContent !== this.selected.name || this.panelTitle.textContent !== this.selected.name) this.updatePreviewTitles(this.selected.name);
        this.selected.lightness = pct;
        this.updateDocumentStyles(...this.selected.hsl);
        this.updateHexCodes(this.selected.hex);
        this.updateCanvas();
        this.editor.setState("light", pct);
        setVar("--selected-light", pct);
    }
    updateSidebar(color) {
        const { monochrome , analogous , complimentary , squared , compound  } = color.compliments;
        const createThemeElements = ()=>{
            const createColorElement = (hex)=>div([
                    "view-panel--clr"
                ], {
                    background: hex
                }), appendElement = (parent)=>(element)=>parent.appendChild(element), createThemeBarElements = (clrSet)=>clrSet.map(createColorElement), appendCorrespondingColorSet = ([parent, childColorSet])=>childColorSet.forEach(appendElement(wipeElement(parent)));
            [
                [
                    $(".a15"),
                    createThemeBarElements(analogous)
                ],
                [
                    $(".m15"),
                    createThemeBarElements(monochrome.darks.slice(0, 6))
                ],
                [
                    $(".ml15"),
                    createThemeBarElements(monochrome.lights.slice(0, 6))
                ],
                [
                    $(".mt15"),
                    createThemeBarElements(monochrome.tints.slice(5, 11))
                ],
                [
                    $(".ms15"),
                    createThemeBarElements(monochrome.shades.slice(5, 11))
                ],
                [
                    $(".c15"),
                    createThemeBarElements(complimentary)
                ],
                [
                    $(".s15"),
                    createThemeBarElements(squared)
                ],
                [
                    $(".cp15"),
                    createThemeBarElements(compound)
                ]
            ].forEach(appendCorrespondingColorSet);
            $(".side-panel .current-color").style.background = color.hex;
            $$(".side-panel .current-title").forEach((element)=>element.textContent = color.name);
            $(".side-panel .current-data .current-hex .data").textContent = lowercase(color.hex);
            $(".side-panel .current-data .current-tone .data").textContent = lowercase(color.tone);
            $(".side-panel .current-data .current-color .data").textContent = color.primaryColor;
            $(".side-panel .current-data .current-hue .data").textContent = color.hue;
            $(".side-panel .current-data .current-sat .data").textContent = color.saturation;
            $(".side-panel .current-data .current-light .data").textContent = color.lightness;
            const tints = [
                ...Color.getTints(color.hex)
            ];
            const shades = [
                ...Color.getShades(color.hex)
            ];
            $(".side-panel .lights-modal .light-colors .tints").innerHTML = "";
            $(".side-panel .shades-modal .dark-colors .shades").innerHTML = "";
            tints.forEach((clr)=>{
                $(".side-panel .lights-modal .light-colors .tints").appendChild(div([
                    "view-panel--clr"
                ], {
                    background: clr
                }));
            });
            shades.forEach((clr)=>{
                $(".side-panel .shades-modal .dark-colors .shades").appendChild(div([
                    "view-panel--clr"
                ], {
                    background: clr
                }));
            });
        };
        // log(app.components.themebar.theme)
        createThemeElements();
        this.requestGradientUpdate(app.components.themebar.theme);
    }
    updateSidebarGradient(clrset) {
        if (clrset.length == 4) $(".current-theme-gradient").classList.add("quad");
        else if (clrset.length == 3) $(".current-theme-gradient").classList.add("trips");
        else $(".current-theme-gradient").classList.remove("quad", "trips");
        let denominator = clrset.length - 1;
        let toPct = (index)=>Math.floor(index / denominator * 100);
        let stops = [];
        for(let i = 0; i < clrset.length; i++){
            stops.push([
                clrset[i],
                toPct(i)
            ]);
            setVar(`--sbg-s${i + 1}`, clrset[i]);
        }
    }
    requestGradientUpdate(theme) {
        switch(theme){
            case "mono":
                this.updateSidebarGradient(this.color.darks.slice(0, 6));
                break;
            case "monoLight":
                this.updateSidebarGradient(this.color.lights.slice(0, 6));
                break;
            case "tinted":
                this.updateSidebarGradient(this.color.tints.slice(4, 10));
                break;
            case "shaded":
                this.updateSidebarGradient(this.color.shades.slice(5, 11));
                break;
            case "complimentary":
                this.updateSidebarGradient(this.color.complimentary);
                break;
            case "analogous":
                this.updateSidebarGradient(this.color.analogous);
                break;
            case "triadic":
                this.updateSidebarGradient(this.color.triadic);
            case "squared":
                this.updateSidebarGradient(this.color.squared);
                break;
            case "compound":
                this.updateSidebarGradient(this.color.compound);
                break;
        }
    }
    // CURSOR TASKS
    undo() {
        console.log("undo update with", this.cursor.prev);
        if (this.cursor.prev == "first") return;
        let previous = this.cursor.skipToPrev();
        this.updateEditor(previous, true);
        this.updateHsl(...previous.hsl);
    }
    redo() {
        console.log(this.cursor.next);
        if (this.cursor.next == "last") return;
        let next = this.cursor.skipToNext();
        this.updateEditor(next, true);
        this.updateHsl(...next.hsl);
    }
    returnToSelectedColor() {
        this.update(this.edits[0]);
    }
    pushEdit(color) {
        this.cursor.addOne(color);
        this.cursor.skipToNext();
        this.edits.push(color);
        console.log(this.cursor.items);
    }
    clearPreviousEdits() {
        this.edits = [];
        this.cursor.update([]);
    }
    checkOnce() {
        if (!this.once) {
            this.selected.name = "New Color";
            this.updateTitles("New Color");
            this.once = true;
            this.selected = {
                ...this.color,
                name: "New Color"
            };
            this.edits.push({
                ...this.selected
            });
        }
    }
    // CANVAS TASKS
    updateCanvas() {
        const { hsv , hsl , hex  } = this.selected;
        this.canvas.update(hsv, hsl, hex);
        this.themer.canvas.update(hsv, hsl, hex);
    }
    handleCanvasPosition(e) {
        let yPos = e.clientY - this.canvas.coords.bottom, x = e.clientX - this.canvas.coords.x, y = Math.abs(yPos), xPct = Math.round(x / this.canvas.coords.width * 100), yPct = Math.round(y / this.canvas.coords.height * 100);
        if (xPct <= 100 && xPct >= 0) this.color.hsvSaturation = xPct;
        if (yPct <= 100 && yPct >= 0 && yPos <= 0) this.color.hsvValue = yPct;
        this.updateCurrentSat({
            pct: this.color.saturation
        });
        this.updateCurrentLight({
            pct: this.color.lightness
        });
        this.updateContrast(this.color.hsl);
        return [
            x,
            y
        ];
    }
    // CONTROLLER TASKS
    updateContrast(hsl) {
        console.log("contrast", hsl);
        hsl[2] > 50 ? root.style.setProperty("--current-contrast", "black") : hsl[2] < 50 && root.style.setProperty("--current-contrast", "white");
    }
    open() {
        this.element.classList.add("open");
        this.previewElement.classList.remove("active");
        this.state = "active";
        return this.state;
    }
    close() {
        this.element.classList.remove("open");
        this.previewElement.classList.add("active");
        this.editor.hide();
        this.state = "passive";
        return this.state;
    }
    toggleTinter() {
        $(".variations").classList.remove("shade");
        $(".variations").classList.add("tint");
    }
    toggleShader() {
        $(".variations").classList.remove("tint");
        $(".variations").classList.add("shade");
    }
    updatePreviewTitles(ttl) {
        $$(".dashboard-preview .color-title .label").forEach((el)=>el.textContent = ttl);
        $(".passive-preview .color-title").textContent = ttl;
    }
    updateHexCodes(hex) {
        $$(".dashboard-preview .color-hex .label").forEach((el)=>el.textContent = hex);
        $(".passive-preview .color-hex .label").textContent = hex;
        root.style.setProperty("--currentHex", hex);
    }
    updateColorTone(tone) {
        $$(".dashboard-preview .color-tone .label").forEach((label)=>label.textContent = tone);
    }
    updateDocumentStyles(hue, sat, light) {
        setVar("--current-hue", `${hue}deg`);
        setVar("--current-sat", `${sat}%`);
        setVar("--current-light", `${light}%`);
    }
    updateDocumentPreviewStyles(hue, sat, light) {
        setVar("--selected-hue", `${hue}deg`);
        setVar("--selected-sat", `${sat}%`);
        setVar("--selected-light", `${light}%`);
    }
    updateSliderOnInput(which) {
        return function(event) {
            const input = event.target;
            const value = input.value;
            const isValid = input.checkValidity;
            if (!isValid || !value || !!isNaN(Number(value))) return;
            switch(which){
                case "hue":
                    this.editor.setSlider("hue", value);
                    break;
                case "sat":
                    this.editor.setSlider("sat", value);
                    break;
                case "light":
                    this.editor.setSlider("light", value);
                    break;
            }
        };
    }
}
class FsContext {
    constructor(){
        const self = this;
        this.hexToggler = $(".themer-options .cc .tggler");
        this.menuElement = $(".themer-options");
        this.hexEditor = $(".hex-editor");
        this.browserToggler = $(".browser");
        this.options = $$(".themer");
        this.variationTogglers = $(".vars .clr-set");
        this.variationState = "shades";
        // this.populateTints('#000000');
        this.bwTogglers = {
            element: $(".bwVariations"),
            menuElement: $(".cContrast"),
            state: "inactive",
            context: undefined,
            primaryColor: new Color({
                hex: "#000"
            }),
            darkToggler: $(".blk"),
            lightToggler: $(".white"),
            greyToggler: $(".grey"),
            open (clickedToggler) {
                document.addEventListener("click", this.handleCOSM.bind(this));
                if (clickedToggler == this.context && this.state == "active") return this.close();
                self.canvas.element.parentElement.classList.add("bw-active");
                this.element.classList.add("active");
                this.state = "active";
                this.context = clickedToggler;
                return;
            },
            close (clickedToggler) {
                self.canvas.element.parentElement.classList.remove("bw-active");
                this.element.classList.remove("active");
                this.state = "inactive";
                document.removeEventListener("click", this.handleCOSM.bind(this));
                this.context = null;
                return;
            },
            toggle (event) {
                const clickedToggler = [
                    this.darkToggler,
                    this.lightToggler,
                    this.greyToggler
                ].find((element)=>element == event.target);
                if (!clickedToggler) {
                    log("diden click tggler", event.target);
                    this.context = null;
                    return;
                }
                log("this context", clickedToggler);
                if (this.state === "active") {
                    if (clickedToggler !== this.context) {
                        this.context = clickedToggler;
                        return;
                    }
                    this.close(clickedToggler);
                } else this.open(clickedToggler);
                return;
            },
            handleCOSM (event) {
                const target = this.menuElement;
                console.log("target", event.target, "current", event.currentTarget);
                if (event.target == $(".tggler") || event.target.classList.contains("themer") || event.target == self.exportMenu.parentElement || self.exportMenu.parentElement.contains(event.target)) return;
                if ($(".cc").contains(event.target)) {
                    this.context = null;
                    return;
                }
                if (!target.contains(event.target)) this.close();
            }
        };
        this.darkToggler = $(".blk");
        this.lightToggler = $(".white");
        this.greyToggler = $(".grey");
        this.exportMenu = $(".done span");
        this.menuState = "inactive";
        this.currentContext = null;
        this.canvas = new Canvas({
            canvas: $(".hex-editor .canvas"),
            pointer: $(".hex-editor .cp-canvas--pointer")
        }, {
            handleColor: function(color) {
                self.update(color);
                return color;
            },
            mouseUp: function(color) {
                if (!self.currentContext) return;
                self.currentContext.pushEdit(new Color(color));
            }
        });
        this.hueSlider = new Slider($(".hex-editor .hue-bar"), {
            onMouseMove: self.updateCurrentHue.bind(self),
            onMouseDown: self.updateCurrentHue.bind(self)
        });
        this.elements = {};
        this.options.map((element)=>{
            const handleMenuOnClick = ()=>{
                if (this.menuState == "active" && element !== this.currentContext.contextElement) {
                    this.setContext(obj);
                    this.update(obj.color);
                    this.position(position);
                    return;
                }
                this.setContext(obj);
                this.position(position);
                this.update(obj.color);
                this.toggle();
            };
            const handleHoverEffect = ()=>{
                if (this.menuState == "active") return;
                if (!this.currentContext) return;
                this.update(obj.color);
                this.position(position);
            };
            let name = element.dataset.element;
            let context = element;
            let variableName = `--current-${name}`;
            let color = new Color({
                hex: getVar(variableName)
            });
            let position = Math.round(element.getBoundingClientRect().x);
            let elementBinding = $(`[data-themeBinding=${name}`);
            let obj = {
                name,
                variableName,
                color,
                currentColor: color,
                position,
                elementBinding,
                contextElement: context,
                edits: [
                    color
                ],
                cursor: [],
                update (color) {
                    this.color = new Color(color);
                    this.updateElementBindingColor(color.hex);
                    if (self.variationState == "tints") self.populateTints(color.hex);
                    else if (self.variationState == "shades") self.populateShades(color.hex);
                    else if (self.variationState == "lights") self.populateLighters(color.hex);
                    else if (self.variationState == "darks") self.populateDarkers(color.hex);
                },
                setColor (color) {
                    self.canvas.setPointer(color.hsv[1], color.hsv[2]);
                    self.updateContextPreviewColor(color);
                    this.pushEdit(color);
                },
                updateElementBindingColor (hex) {
                    setVar(this.variableName, hex || this.color.hex);
                },
                pushEdit (color) {
                    this.cursor.addOne(color);
                    this.cursor.skipToNext();
                    this.edits.push(color);
                    console.log(this.cursor.items);
                },
                clearPreviousEdits () {
                    this.edits = [];
                    this.cursor.update([]);
                },
                undo () {
                    console.log("undo update with", this.cursor.prev);
                    if (this.cursor.prev == "first") return;
                    let previous = this.cursor.skipToPrev();
                    console.log(previous);
                    this.update(previous, true);
                    return previous;
                },
                redo () {
                    console.log("undo update with", this.cursor.next);
                    console.log(this.cursor.next);
                    if (this.cursor.next == "last") return;
                    let next = this.cursor.skipToNext();
                    this.update(next, true);
                    return next;
                }
            };
            obj.cursor = new Cursor(obj.edits);
            element.addEventListener("click", handleMenuOnClick);
            // element.addEventListener('mouseenter', handleHoverEffect)
            if (elementBinding) elementBinding.addEventListener("click", handleMenuOnClick);
            listen(this.hexToggler, this.toggleHex.bind(this));
            this.elements[name] = obj;
        });
        listen(this.darkToggler, this.update.bind(this, new Color({
            hex: "#000"
        })));
        listen(this.lightToggler, this.update.bind(this, new Color({
            hex: "#fff"
        })));
        listen(this.greyToggler, this.update.bind(this, new Color({
            hex: "#ccc"
        })));
        listen(this.exportMenu, ()=>$(".export-menu").classList.toggle("active"));
        listen(this.browserToggler, ()=>{
            this.hideHex();
            $(".browser-menu").classList.add("active");
        });
        listen($(".browser-menu .back"), ()=>$(".browser-menu").classList.remove("active"));
        listen(this.bwTogglers.menuElement, this.bwTogglers.toggle.bind(this.bwTogglers));
        listen(this.variationTogglers, (e)=>{
            if (!e.target.classList.contains("vari")) return;
            let clr = e.target.dataset.hex;
            if (!clr) return;
            let color = new Color({
                hex: clr
            });
            console.log(clr, "bBBBgGGG");
            this.update(color);
            if (!this.currentContext) return;
            this.currentContext.setColor(color);
        });
        listen($(".tin"), ()=>{
            if (!this.currentContext) return;
            // this.populateTints(this.currentContext.color.hex);
            this.variationState = "tints";
            this.populateTints(this.currentContext.color.hex);
        });
        listen($(".shdy"), ()=>{
            if (!this.currentContext) return;
            // this.populateShades(this.currentContext.color.hex);
            this.variationState = "shades";
            this.populateShades(this.currentContext.color.hex);
        });
        listen($(".lit"), ()=>{
            if (!this.currentContext) return;
            this.populateLighters(this.currentContext.color.hex);
            this.variationState = "lights";
        });
        listen($(".drk"), ()=>{
            if (!this.currentContext) return;
            this.populateDarkers(this.currentContext.color.hex);
            this.variationState = "darks";
        });
        listen($(".themer-options .red"), ()=>{
            if (!this.currentContext) return;
            console.log("redooey");
            const redooey = this.currentContext.redo.call(this.currentContext);
            if (!redooey) return;
            this.canvas.setPointer(redooey.hsv[1], redooey.hsv[2]);
            this.updateContextPreviewColor(redooey);
        });
        listen($(".themer-options .un"), ()=>{
            if (!this.currentContext) return;
            console.log("undooey");
            const undooey = this.currentContext.undo.call(this.currentContext);
            if (!undooey) return;
            this.canvas.setPointer(undooey.hsv[1], undooey.hsv[2]);
            this.updateContextPreviewColor(undooey);
            console.log(undooey);
        });
    }
    populateVariations(hex = "#000", type = "white") {
        this.variationTogglers.innerHTML = "";
        let count = 0;
        let reverse = 100;
        let inc = 5;
        const tints = generateTints(hex);
        for(let i = 0; i < 20; i++){
            let clr = `color-mix(in srgb, ${hex} ${count}%, ${type} ${reverse}%)`;
            let hexi = this.LightenDarkenColor(hex, count);
            // let hexi = this.adjustColor(hex,count)
            console.log(hexi);
            // log(clr)
            let vari = div();
            vari.classList.add("vari");
            vari.style.background = tints[i];
            vari.dataset.hex = hex;
            this.variationTogglers.appendChild(vari);
            count += inc;
            reverse -= inc;
        }
    }
    populateVariationColorset(clrSet) {
        this.variationTogglers.innerHTML = "";
        for(let i = 0; i < clrSet.length; i++){
            let vari = div();
            vari.classList.add("vari");
            vari.style.background = clrSet[i];
            vari.dataset.hex = clrSet[i];
            this.variationTogglers.appendChild(vari);
        }
    }
    populateTints(hex) {
        this.populateVariationColorset(Color.getTints(hex));
    }
    populateShades(hex) {
        this.populateVariationColorset(Color.getShades(hex));
    }
    populateLighters(hex) {
        const validHex = (hex)=>hex.length === 7 && hex !== "#ffffff";
        const lights = [];
        const inc = 5;
        let count = 0;
        for(let i = 0; i < 20; i++){
            count += inc;
            let hexi = Color.lightenColor(hex, count);
            if (validHex(hexi)) lights.push(hexi);
            console.log(count);
        }
        this.populateVariationColorset(lights);
        console.log(lights);
    }
    populateDarkers(hex) {
        const validHex = (hex)=>hex.length === 7 & hex !== "#000000";
        const darks = [];
        const inc = 5;
        let count = 0;
        for(let i = 0; i < 20; i++){
            count += inc;
            let hexi = Color.darkenColor(hex, count);
            if (validHex(hexi)) darks.push(hexi);
            console.log(count);
        }
        this.populateVariationColorset(darks);
        console.log(darks);
    }
    update(color) {
        console.log("updating with", color);
        this.updateContextPreviewColor(color);
        this.updateCanvasHue(color.hue);
        if (!this.currentContext) return;
        this.currentContext.update(color);
        console.log(this.currentContext);
    }
    updateContextPreviewColor(color) {
        this.updateContextPreviewColorLabel(color.hex);
        $(".tggler").style.setProperty("--hue", `${color.hue}`);
        $(".tggler").style.setProperty("--sat", `${color.saturation}%`);
        $(".tggler").style.setProperty("--light", `${color.lightness}%`);
    }
    updateContextPreviewColorHue(deg) {
        $(".tggler").style.setProperty("--hue", deg);
    }
    updateContextPreviewColorLabel(hex) {
        $(".tggler").textContent = hex;
    }
    updateCanvasColor(color) {}
    updateCanvasHue(deg) {
        this.canvas.color.hue = deg;
        $(".hex-editor .canvas").style.setProperty("--hue", deg);
    }
    updateCurrentHue({ deg  }) {
        if (!this.currentContext) return;
        const color = this.currentContext.color;
        color.hue = deg;
        console.log(color, "hello motto");
        this.updateCanvasHue(deg);
        this.updateContextPreviewColorHue(deg);
        this.updateContextPreviewColorLabel(color.hex);
        this.currentContext.update(color);
    }
    setContext(obj) {
        if (this.currentContext && this.currentContext.elementBinding) removeClass(this.currentContext.elementBinding, "active");
        this.currentContext = obj;
        if (obj.elementBinding) addClass(obj.elementBinding, "active");
        return obj;
    }
    position(x) {
        let hsv = this.currentContext.color.hsv;
        this.menuElement.style.transform = `translateX(${x - 30}px)`;
        this.canvas.setPointer(hsv[1], hsv[2]);
    }
    show() {
        this.menuElement.classList.add("active");
        this.menuState = "active";
    }
    showHex() {
        this.hexEditor.classList.add("active");
    }
    hide() {
        this.menuElement.classList.remove("active");
        this.menuState = "inactive";
    }
    hideHex() {
        this.hexEditor.classList.remove("active");
    }
    toggle() {
        if (this.menuState == "active") {
            this.hide();
            this.menuState = "inactive";
            if (this.currentContext.elementBinding) this.currentContext.elementBinding.classList.remove("active");
            // alert(this.menuState);
            return;
        } else if (this.menuState == "inactive") {
            this.show();
            this.menuState = "active";
            if (this.currentContext.elementBinding) this.currentContext.elementBinding.classList.add("active");
            // alert(this.menuState);
            return;
        }
    }
    toggleHex() {
        this.hexEditor.classList.toggle("active");
    }
}
function generateTints(hexColor) {
    // Convert hex to RGB
    const hexToRgb = (hex)=>{
        const bigint = parseInt(hex.slice(1), 16);
        const r = bigint >> 16 & 255;
        const g = bigint >> 8 & 255;
        const b = bigint & 255;
        return {
            r,
            g,
            b
        };
    };
    // Convert RGB to hex
    const rgbToHex = (rgb)=>{
        return `#${(16777216 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
    };
    // Linear blend function
    const linearBlend = (color1, color2, ratio)=>{
        return color1 + ratio * (color2 - color1);
    };
    const tints = [];
    const baseColor = hexToRgb(hexColor);
    // Generate 20 tints
    for(let i = 0; i < 20; i++){
        const ratio = i / 20; // Varying from 0 to 1
        const tint = {
            r: linearBlend(baseColor.r, 255, ratio),
            g: linearBlend(baseColor.g, 255, ratio),
            b: linearBlend(baseColor.b, 255, ratio)
        };
        tints.push(rgbToHex(tint));
    }
    return tints;
}
// Example usage:
const baseHexColor = "#3498db";
const tintsArray = generateTints(baseHexColor);
console.log(tintsArray);
function generateShades(hexColor) {
    // Convert hex to RGB
    const hexToRgb = (hex)=>{
        const bigint = parseInt(hex.slice(1), 16);
        const r = bigint >> 16 & 255;
        const g = bigint >> 8 & 255;
        const b = bigint & 255;
        return {
            r,
            g,
            b
        };
    };
    // Convert RGB to hex
    const rgbToHex = (rgb)=>{
        return `#${(16777216 | rgb.r << 16 | rgb.g << 8 | rgb.b).toString(16).slice(1)}`;
    };
    // Linear blend function
    const linearBlend = (color1, color2, ratio)=>{
        return color1 + ratio * (color2 - color1);
    };
    const shades = [];
    const baseColor = hexToRgb(hexColor);
    // Generate 20 shades
    for(let i = 0; i < 20; i++){
        const ratio = i / 20; // Varying from 0 to 1
        const shade = {
            r: linearBlend(baseColor.r, 0, ratio),
            g: linearBlend(baseColor.g, 0, ratio),
            b: linearBlend(baseColor.b, 0, ratio)
        };
        shades.push(rgbToHex(shade));
    }
    return shades;
}
// Example usage:
const hexiColor = "#3498db";
const shadesArray = generateShades(hexiColor);
console.log(shadesArray);

},{"ramda":"2eWAO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2eWAO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "F", ()=>(0, _fJsDefault.default));
parcelHelpers.export(exports, "T", ()=>(0, _tJsDefault.default));
parcelHelpers.export(exports, "__", ()=>(0, _jsDefault.default));
parcelHelpers.export(exports, "add", ()=>(0, _addJsDefault.default));
parcelHelpers.export(exports, "addIndex", ()=>(0, _addIndexJsDefault.default));
parcelHelpers.export(exports, "addIndexRight", ()=>(0, _addIndexRightJsDefault.default));
parcelHelpers.export(exports, "adjust", ()=>(0, _adjustJsDefault.default));
parcelHelpers.export(exports, "all", ()=>(0, _allJsDefault.default));
parcelHelpers.export(exports, "allPass", ()=>(0, _allPassJsDefault.default));
parcelHelpers.export(exports, "always", ()=>(0, _alwaysJsDefault.default));
parcelHelpers.export(exports, "and", ()=>(0, _andJsDefault.default));
parcelHelpers.export(exports, "any", ()=>(0, _anyJsDefault.default));
parcelHelpers.export(exports, "anyPass", ()=>(0, _anyPassJsDefault.default));
parcelHelpers.export(exports, "ap", ()=>(0, _apJsDefault.default));
parcelHelpers.export(exports, "aperture", ()=>(0, _apertureJsDefault.default));
parcelHelpers.export(exports, "append", ()=>(0, _appendJsDefault.default));
parcelHelpers.export(exports, "apply", ()=>(0, _applyJsDefault.default));
parcelHelpers.export(exports, "applySpec", ()=>(0, _applySpecJsDefault.default));
parcelHelpers.export(exports, "applyTo", ()=>(0, _applyToJsDefault.default));
parcelHelpers.export(exports, "ascend", ()=>(0, _ascendJsDefault.default));
parcelHelpers.export(exports, "assoc", ()=>(0, _assocJsDefault.default));
parcelHelpers.export(exports, "assocPath", ()=>(0, _assocPathJsDefault.default));
parcelHelpers.export(exports, "binary", ()=>(0, _binaryJsDefault.default));
parcelHelpers.export(exports, "bind", ()=>(0, _bindJsDefault.default));
parcelHelpers.export(exports, "both", ()=>(0, _bothJsDefault.default));
parcelHelpers.export(exports, "call", ()=>(0, _callJsDefault.default));
parcelHelpers.export(exports, "chain", ()=>(0, _chainJsDefault.default));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampJsDefault.default));
parcelHelpers.export(exports, "clone", ()=>(0, _cloneJsDefault.default));
parcelHelpers.export(exports, "collectBy", ()=>(0, _collectByJsDefault.default));
parcelHelpers.export(exports, "comparator", ()=>(0, _comparatorJsDefault.default));
parcelHelpers.export(exports, "complement", ()=>(0, _complementJsDefault.default));
parcelHelpers.export(exports, "compose", ()=>(0, _composeJsDefault.default));
parcelHelpers.export(exports, "composeWith", ()=>(0, _composeWithJsDefault.default));
parcelHelpers.export(exports, "concat", ()=>(0, _concatJsDefault.default));
parcelHelpers.export(exports, "cond", ()=>(0, _condJsDefault.default));
parcelHelpers.export(exports, "construct", ()=>(0, _constructJsDefault.default));
parcelHelpers.export(exports, "constructN", ()=>(0, _constructNJsDefault.default));
parcelHelpers.export(exports, "converge", ()=>(0, _convergeJsDefault.default));
parcelHelpers.export(exports, "count", ()=>(0, _countJsDefault.default));
parcelHelpers.export(exports, "countBy", ()=>(0, _countByJsDefault.default));
parcelHelpers.export(exports, "curry", ()=>(0, _curryJsDefault.default));
parcelHelpers.export(exports, "curryN", ()=>(0, _curryNJsDefault.default));
parcelHelpers.export(exports, "dec", ()=>(0, _decJsDefault.default));
parcelHelpers.export(exports, "defaultTo", ()=>(0, _defaultToJsDefault.default));
parcelHelpers.export(exports, "descend", ()=>(0, _descendJsDefault.default));
parcelHelpers.export(exports, "difference", ()=>(0, _differenceJsDefault.default));
parcelHelpers.export(exports, "differenceWith", ()=>(0, _differenceWithJsDefault.default));
parcelHelpers.export(exports, "dissoc", ()=>(0, _dissocJsDefault.default));
parcelHelpers.export(exports, "dissocPath", ()=>(0, _dissocPathJsDefault.default));
parcelHelpers.export(exports, "divide", ()=>(0, _divideJsDefault.default));
parcelHelpers.export(exports, "drop", ()=>(0, _dropJsDefault.default));
parcelHelpers.export(exports, "dropLast", ()=>(0, _dropLastJsDefault.default));
parcelHelpers.export(exports, "dropLastWhile", ()=>(0, _dropLastWhileJsDefault.default));
parcelHelpers.export(exports, "dropRepeats", ()=>(0, _dropRepeatsJsDefault.default));
parcelHelpers.export(exports, "dropRepeatsBy", ()=>(0, _dropRepeatsByJsDefault.default));
parcelHelpers.export(exports, "dropRepeatsWith", ()=>(0, _dropRepeatsWithJsDefault.default));
parcelHelpers.export(exports, "dropWhile", ()=>(0, _dropWhileJsDefault.default));
parcelHelpers.export(exports, "either", ()=>(0, _eitherJsDefault.default));
parcelHelpers.export(exports, "empty", ()=>(0, _emptyJsDefault.default));
parcelHelpers.export(exports, "endsWith", ()=>(0, _endsWithJsDefault.default));
parcelHelpers.export(exports, "eqBy", ()=>(0, _eqByJsDefault.default));
parcelHelpers.export(exports, "eqProps", ()=>(0, _eqPropsJsDefault.default));
parcelHelpers.export(exports, "equals", ()=>(0, _equalsJsDefault.default));
parcelHelpers.export(exports, "evolve", ()=>(0, _evolveJsDefault.default));
parcelHelpers.export(exports, "filter", ()=>(0, _filterJsDefault.default));
parcelHelpers.export(exports, "find", ()=>(0, _findJsDefault.default));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndexJsDefault.default));
parcelHelpers.export(exports, "findLast", ()=>(0, _findLastJsDefault.default));
parcelHelpers.export(exports, "findLastIndex", ()=>(0, _findLastIndexJsDefault.default));
parcelHelpers.export(exports, "flatten", ()=>(0, _flattenJsDefault.default));
parcelHelpers.export(exports, "flip", ()=>(0, _flipJsDefault.default));
parcelHelpers.export(exports, "forEach", ()=>(0, _forEachJsDefault.default));
parcelHelpers.export(exports, "forEachObjIndexed", ()=>(0, _forEachObjIndexedJsDefault.default));
parcelHelpers.export(exports, "fromPairs", ()=>(0, _fromPairsJsDefault.default));
parcelHelpers.export(exports, "groupBy", ()=>(0, _groupByJsDefault.default));
parcelHelpers.export(exports, "groupWith", ()=>(0, _groupWithJsDefault.default));
parcelHelpers.export(exports, "gt", ()=>(0, _gtJsDefault.default));
parcelHelpers.export(exports, "gte", ()=>(0, _gteJsDefault.default));
parcelHelpers.export(exports, "has", ()=>(0, _hasJsDefault.default));
parcelHelpers.export(exports, "hasIn", ()=>(0, _hasInJsDefault.default));
parcelHelpers.export(exports, "hasPath", ()=>(0, _hasPathJsDefault.default));
parcelHelpers.export(exports, "head", ()=>(0, _headJsDefault.default));
parcelHelpers.export(exports, "identical", ()=>(0, _identicalJsDefault.default));
parcelHelpers.export(exports, "identity", ()=>(0, _identityJsDefault.default));
parcelHelpers.export(exports, "ifElse", ()=>(0, _ifElseJsDefault.default));
parcelHelpers.export(exports, "inc", ()=>(0, _incJsDefault.default));
parcelHelpers.export(exports, "includes", ()=>(0, _includesJsDefault.default));
parcelHelpers.export(exports, "indexBy", ()=>(0, _indexByJsDefault.default));
parcelHelpers.export(exports, "indexOf", ()=>(0, _indexOfJsDefault.default));
parcelHelpers.export(exports, "init", ()=>(0, _initJsDefault.default));
parcelHelpers.export(exports, "innerJoin", ()=>(0, _innerJoinJsDefault.default));
parcelHelpers.export(exports, "insert", ()=>(0, _insertJsDefault.default));
parcelHelpers.export(exports, "insertAll", ()=>(0, _insertAllJsDefault.default));
parcelHelpers.export(exports, "intersection", ()=>(0, _intersectionJsDefault.default));
parcelHelpers.export(exports, "intersperse", ()=>(0, _intersperseJsDefault.default));
parcelHelpers.export(exports, "into", ()=>(0, _intoJsDefault.default));
parcelHelpers.export(exports, "invert", ()=>(0, _invertJsDefault.default));
parcelHelpers.export(exports, "invertObj", ()=>(0, _invertObjJsDefault.default));
parcelHelpers.export(exports, "invoker", ()=>(0, _invokerJsDefault.default));
parcelHelpers.export(exports, "is", ()=>(0, _isJsDefault.default));
parcelHelpers.export(exports, "isEmpty", ()=>(0, _isEmptyJsDefault.default));
parcelHelpers.export(exports, "isNil", ()=>(0, _isNilJsDefault.default));
parcelHelpers.export(exports, "isNotNil", ()=>(0, _isNotNilJsDefault.default));
parcelHelpers.export(exports, "join", ()=>(0, _joinJsDefault.default));
parcelHelpers.export(exports, "juxt", ()=>(0, _juxtJsDefault.default));
parcelHelpers.export(exports, "keys", ()=>(0, _keysJsDefault.default));
parcelHelpers.export(exports, "keysIn", ()=>(0, _keysInJsDefault.default));
parcelHelpers.export(exports, "last", ()=>(0, _lastJsDefault.default));
parcelHelpers.export(exports, "lastIndexOf", ()=>(0, _lastIndexOfJsDefault.default));
parcelHelpers.export(exports, "length", ()=>(0, _lengthJsDefault.default));
parcelHelpers.export(exports, "lens", ()=>(0, _lensJsDefault.default));
parcelHelpers.export(exports, "lensIndex", ()=>(0, _lensIndexJsDefault.default));
parcelHelpers.export(exports, "lensPath", ()=>(0, _lensPathJsDefault.default));
parcelHelpers.export(exports, "lensProp", ()=>(0, _lensPropJsDefault.default));
parcelHelpers.export(exports, "lift", ()=>(0, _liftJsDefault.default));
parcelHelpers.export(exports, "liftN", ()=>(0, _liftNJsDefault.default));
parcelHelpers.export(exports, "lt", ()=>(0, _ltJsDefault.default));
parcelHelpers.export(exports, "lte", ()=>(0, _lteJsDefault.default));
parcelHelpers.export(exports, "map", ()=>(0, _mapJsDefault.default));
parcelHelpers.export(exports, "mapAccum", ()=>(0, _mapAccumJsDefault.default));
parcelHelpers.export(exports, "mapAccumRight", ()=>(0, _mapAccumRightJsDefault.default));
parcelHelpers.export(exports, "mapObjIndexed", ()=>(0, _mapObjIndexedJsDefault.default));
parcelHelpers.export(exports, "match", ()=>(0, _matchJsDefault.default));
parcelHelpers.export(exports, "mathMod", ()=>(0, _mathModJsDefault.default));
parcelHelpers.export(exports, "max", ()=>(0, _maxJsDefault.default));
parcelHelpers.export(exports, "maxBy", ()=>(0, _maxByJsDefault.default));
parcelHelpers.export(exports, "mean", ()=>(0, _meanJsDefault.default));
parcelHelpers.export(exports, "median", ()=>(0, _medianJsDefault.default));
parcelHelpers.export(exports, "memoizeWith", ()=>(0, _memoizeWithJsDefault.default));
parcelHelpers.export(exports, "mergeAll", ()=>(0, _mergeAllJsDefault.default));
parcelHelpers.export(exports, "mergeDeepLeft", ()=>(0, _mergeDeepLeftJsDefault.default));
parcelHelpers.export(exports, "mergeDeepRight", ()=>(0, _mergeDeepRightJsDefault.default));
parcelHelpers.export(exports, "mergeDeepWith", ()=>(0, _mergeDeepWithJsDefault.default));
parcelHelpers.export(exports, "mergeDeepWithKey", ()=>(0, _mergeDeepWithKeyJsDefault.default));
parcelHelpers.export(exports, "mergeLeft", ()=>(0, _mergeLeftJsDefault.default));
parcelHelpers.export(exports, "mergeRight", ()=>(0, _mergeRightJsDefault.default));
parcelHelpers.export(exports, "mergeWith", ()=>(0, _mergeWithJsDefault.default));
parcelHelpers.export(exports, "mergeWithKey", ()=>(0, _mergeWithKeyJsDefault.default));
parcelHelpers.export(exports, "min", ()=>(0, _minJsDefault.default));
parcelHelpers.export(exports, "minBy", ()=>(0, _minByJsDefault.default));
parcelHelpers.export(exports, "modify", ()=>(0, _modifyJsDefault.default));
parcelHelpers.export(exports, "modifyPath", ()=>(0, _modifyPathJsDefault.default));
parcelHelpers.export(exports, "modulo", ()=>(0, _moduloJsDefault.default));
parcelHelpers.export(exports, "move", ()=>(0, _moveJsDefault.default));
parcelHelpers.export(exports, "multiply", ()=>(0, _multiplyJsDefault.default));
parcelHelpers.export(exports, "nAry", ()=>(0, _nAryJsDefault.default));
parcelHelpers.export(exports, "partialObject", ()=>(0, _partialObjectJsDefault.default));
parcelHelpers.export(exports, "negate", ()=>(0, _negateJsDefault.default));
parcelHelpers.export(exports, "none", ()=>(0, _noneJsDefault.default));
parcelHelpers.export(exports, "not", ()=>(0, _notJsDefault.default));
parcelHelpers.export(exports, "nth", ()=>(0, _nthJsDefault.default));
parcelHelpers.export(exports, "nthArg", ()=>(0, _nthArgJsDefault.default));
parcelHelpers.export(exports, "o", ()=>(0, _oJsDefault.default));
parcelHelpers.export(exports, "objOf", ()=>(0, _objOfJsDefault.default));
parcelHelpers.export(exports, "of", ()=>(0, _ofJsDefault.default));
parcelHelpers.export(exports, "omit", ()=>(0, _omitJsDefault.default));
parcelHelpers.export(exports, "on", ()=>(0, _onJsDefault.default));
parcelHelpers.export(exports, "once", ()=>(0, _onceJsDefault.default));
parcelHelpers.export(exports, "or", ()=>(0, _orJsDefault.default));
parcelHelpers.export(exports, "otherwise", ()=>(0, _otherwiseJsDefault.default));
parcelHelpers.export(exports, "over", ()=>(0, _overJsDefault.default));
parcelHelpers.export(exports, "pair", ()=>(0, _pairJsDefault.default));
parcelHelpers.export(exports, "partial", ()=>(0, _partialJsDefault.default));
parcelHelpers.export(exports, "partialRight", ()=>(0, _partialRightJsDefault.default));
parcelHelpers.export(exports, "partition", ()=>(0, _partitionJsDefault.default));
parcelHelpers.export(exports, "path", ()=>(0, _pathJsDefault.default));
parcelHelpers.export(exports, "paths", ()=>(0, _pathsJsDefault.default));
parcelHelpers.export(exports, "pathEq", ()=>(0, _pathEqJsDefault.default));
parcelHelpers.export(exports, "pathOr", ()=>(0, _pathOrJsDefault.default));
parcelHelpers.export(exports, "pathSatisfies", ()=>(0, _pathSatisfiesJsDefault.default));
parcelHelpers.export(exports, "pick", ()=>(0, _pickJsDefault.default));
parcelHelpers.export(exports, "pickAll", ()=>(0, _pickAllJsDefault.default));
parcelHelpers.export(exports, "pickBy", ()=>(0, _pickByJsDefault.default));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeJsDefault.default));
parcelHelpers.export(exports, "pipeWith", ()=>(0, _pipeWithJsDefault.default));
parcelHelpers.export(exports, "pluck", ()=>(0, _pluckJsDefault.default));
parcelHelpers.export(exports, "prepend", ()=>(0, _prependJsDefault.default));
parcelHelpers.export(exports, "product", ()=>(0, _productJsDefault.default));
parcelHelpers.export(exports, "project", ()=>(0, _projectJsDefault.default));
parcelHelpers.export(exports, "promap", ()=>(0, _promapJsDefault.default));
parcelHelpers.export(exports, "prop", ()=>(0, _propJsDefault.default));
parcelHelpers.export(exports, "propEq", ()=>(0, _propEqJsDefault.default));
parcelHelpers.export(exports, "propIs", ()=>(0, _propIsJsDefault.default));
parcelHelpers.export(exports, "propOr", ()=>(0, _propOrJsDefault.default));
parcelHelpers.export(exports, "propSatisfies", ()=>(0, _propSatisfiesJsDefault.default));
parcelHelpers.export(exports, "props", ()=>(0, _propsJsDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "reduce", ()=>(0, _reduceJsDefault.default));
parcelHelpers.export(exports, "reduceBy", ()=>(0, _reduceByJsDefault.default));
parcelHelpers.export(exports, "reduceRight", ()=>(0, _reduceRightJsDefault.default));
parcelHelpers.export(exports, "reduceWhile", ()=>(0, _reduceWhileJsDefault.default));
parcelHelpers.export(exports, "reduced", ()=>(0, _reducedJsDefault.default));
parcelHelpers.export(exports, "reject", ()=>(0, _rejectJsDefault.default));
parcelHelpers.export(exports, "remove", ()=>(0, _removeJsDefault.default));
parcelHelpers.export(exports, "repeat", ()=>(0, _repeatJsDefault.default));
parcelHelpers.export(exports, "replace", ()=>(0, _replaceJsDefault.default));
parcelHelpers.export(exports, "reverse", ()=>(0, _reverseJsDefault.default));
parcelHelpers.export(exports, "scan", ()=>(0, _scanJsDefault.default));
parcelHelpers.export(exports, "sequence", ()=>(0, _sequenceJsDefault.default));
parcelHelpers.export(exports, "set", ()=>(0, _setJsDefault.default));
parcelHelpers.export(exports, "slice", ()=>(0, _sliceJsDefault.default));
parcelHelpers.export(exports, "sort", ()=>(0, _sortJsDefault.default));
parcelHelpers.export(exports, "sortBy", ()=>(0, _sortByJsDefault.default));
parcelHelpers.export(exports, "sortWith", ()=>(0, _sortWithJsDefault.default));
parcelHelpers.export(exports, "split", ()=>(0, _splitJsDefault.default));
parcelHelpers.export(exports, "splitAt", ()=>(0, _splitAtJsDefault.default));
parcelHelpers.export(exports, "splitEvery", ()=>(0, _splitEveryJsDefault.default));
parcelHelpers.export(exports, "splitWhen", ()=>(0, _splitWhenJsDefault.default));
parcelHelpers.export(exports, "splitWhenever", ()=>(0, _splitWheneverJsDefault.default));
parcelHelpers.export(exports, "startsWith", ()=>(0, _startsWithJsDefault.default));
parcelHelpers.export(exports, "subtract", ()=>(0, _subtractJsDefault.default));
parcelHelpers.export(exports, "sum", ()=>(0, _sumJsDefault.default));
parcelHelpers.export(exports, "swap", ()=>(0, _swapJsDefault.default));
parcelHelpers.export(exports, "symmetricDifference", ()=>(0, _symmetricDifferenceJsDefault.default));
parcelHelpers.export(exports, "symmetricDifferenceWith", ()=>(0, _symmetricDifferenceWithJsDefault.default));
parcelHelpers.export(exports, "tail", ()=>(0, _tailJsDefault.default));
parcelHelpers.export(exports, "take", ()=>(0, _takeJsDefault.default));
parcelHelpers.export(exports, "takeLast", ()=>(0, _takeLastJsDefault.default));
parcelHelpers.export(exports, "takeLastWhile", ()=>(0, _takeLastWhileJsDefault.default));
parcelHelpers.export(exports, "takeWhile", ()=>(0, _takeWhileJsDefault.default));
parcelHelpers.export(exports, "tap", ()=>(0, _tapJsDefault.default));
parcelHelpers.export(exports, "test", ()=>(0, _testJsDefault.default));
parcelHelpers.export(exports, "andThen", ()=>(0, _andThenJsDefault.default));
parcelHelpers.export(exports, "times", ()=>(0, _timesJsDefault.default));
parcelHelpers.export(exports, "toLower", ()=>(0, _toLowerJsDefault.default));
parcelHelpers.export(exports, "toPairs", ()=>(0, _toPairsJsDefault.default));
parcelHelpers.export(exports, "toPairsIn", ()=>(0, _toPairsInJsDefault.default));
parcelHelpers.export(exports, "toString", ()=>(0, _toStringJsDefault.default));
parcelHelpers.export(exports, "toUpper", ()=>(0, _toUpperJsDefault.default));
parcelHelpers.export(exports, "transduce", ()=>(0, _transduceJsDefault.default));
parcelHelpers.export(exports, "transpose", ()=>(0, _transposeJsDefault.default));
parcelHelpers.export(exports, "traverse", ()=>(0, _traverseJsDefault.default));
parcelHelpers.export(exports, "trim", ()=>(0, _trimJsDefault.default));
parcelHelpers.export(exports, "tryCatch", ()=>(0, _tryCatchJsDefault.default));
parcelHelpers.export(exports, "type", ()=>(0, _typeJsDefault.default));
parcelHelpers.export(exports, "unapply", ()=>(0, _unapplyJsDefault.default));
parcelHelpers.export(exports, "unary", ()=>(0, _unaryJsDefault.default));
parcelHelpers.export(exports, "uncurryN", ()=>(0, _uncurryNJsDefault.default));
parcelHelpers.export(exports, "unfold", ()=>(0, _unfoldJsDefault.default));
parcelHelpers.export(exports, "union", ()=>(0, _unionJsDefault.default));
parcelHelpers.export(exports, "unionWith", ()=>(0, _unionWithJsDefault.default));
parcelHelpers.export(exports, "uniq", ()=>(0, _uniqJsDefault.default));
parcelHelpers.export(exports, "uniqBy", ()=>(0, _uniqByJsDefault.default));
parcelHelpers.export(exports, "uniqWith", ()=>(0, _uniqWithJsDefault.default));
parcelHelpers.export(exports, "unless", ()=>(0, _unlessJsDefault.default));
parcelHelpers.export(exports, "unnest", ()=>(0, _unnestJsDefault.default));
parcelHelpers.export(exports, "until", ()=>(0, _untilJsDefault.default));
parcelHelpers.export(exports, "unwind", ()=>(0, _unwindJsDefault.default));
parcelHelpers.export(exports, "update", ()=>(0, _updateJsDefault.default));
parcelHelpers.export(exports, "useWith", ()=>(0, _useWithJsDefault.default));
parcelHelpers.export(exports, "values", ()=>(0, _valuesJsDefault.default));
parcelHelpers.export(exports, "valuesIn", ()=>(0, _valuesInJsDefault.default));
parcelHelpers.export(exports, "view", ()=>(0, _viewJsDefault.default));
parcelHelpers.export(exports, "when", ()=>(0, _whenJsDefault.default));
parcelHelpers.export(exports, "where", ()=>(0, _whereJsDefault.default));
parcelHelpers.export(exports, "whereAny", ()=>(0, _whereAnyJsDefault.default));
parcelHelpers.export(exports, "whereEq", ()=>(0, _whereEqJsDefault.default));
parcelHelpers.export(exports, "without", ()=>(0, _withoutJsDefault.default));
parcelHelpers.export(exports, "xor", ()=>(0, _xorJsDefault.default));
parcelHelpers.export(exports, "xprod", ()=>(0, _xprodJsDefault.default));
parcelHelpers.export(exports, "zip", ()=>(0, _zipJsDefault.default));
parcelHelpers.export(exports, "zipObj", ()=>(0, _zipObjJsDefault.default));
parcelHelpers.export(exports, "zipWith", ()=>(0, _zipWithJsDefault.default));
parcelHelpers.export(exports, "thunkify", ()=>(0, _thunkifyJsDefault.default));
var _fJs = require("./F.js");
var _fJsDefault = parcelHelpers.interopDefault(_fJs);
var _tJs = require("./T.js");
var _tJsDefault = parcelHelpers.interopDefault(_tJs);
var _js = require("./__.js");
var _jsDefault = parcelHelpers.interopDefault(_js);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
var _addIndexJs = require("./addIndex.js");
var _addIndexJsDefault = parcelHelpers.interopDefault(_addIndexJs);
var _addIndexRightJs = require("./addIndexRight.js");
var _addIndexRightJsDefault = parcelHelpers.interopDefault(_addIndexRightJs);
var _adjustJs = require("./adjust.js");
var _adjustJsDefault = parcelHelpers.interopDefault(_adjustJs);
var _allJs = require("./all.js");
var _allJsDefault = parcelHelpers.interopDefault(_allJs);
var _allPassJs = require("./allPass.js");
var _allPassJsDefault = parcelHelpers.interopDefault(_allPassJs);
var _alwaysJs = require("./always.js");
var _alwaysJsDefault = parcelHelpers.interopDefault(_alwaysJs);
var _andJs = require("./and.js");
var _andJsDefault = parcelHelpers.interopDefault(_andJs);
var _anyJs = require("./any.js");
var _anyJsDefault = parcelHelpers.interopDefault(_anyJs);
var _anyPassJs = require("./anyPass.js");
var _anyPassJsDefault = parcelHelpers.interopDefault(_anyPassJs);
var _apJs = require("./ap.js");
var _apJsDefault = parcelHelpers.interopDefault(_apJs);
var _apertureJs = require("./aperture.js");
var _apertureJsDefault = parcelHelpers.interopDefault(_apertureJs);
var _appendJs = require("./append.js");
var _appendJsDefault = parcelHelpers.interopDefault(_appendJs);
var _applyJs = require("./apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
var _applySpecJs = require("./applySpec.js");
var _applySpecJsDefault = parcelHelpers.interopDefault(_applySpecJs);
var _applyToJs = require("./applyTo.js");
var _applyToJsDefault = parcelHelpers.interopDefault(_applyToJs);
var _ascendJs = require("./ascend.js");
var _ascendJsDefault = parcelHelpers.interopDefault(_ascendJs);
var _assocJs = require("./assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
var _assocPathJs = require("./assocPath.js");
var _assocPathJsDefault = parcelHelpers.interopDefault(_assocPathJs);
var _binaryJs = require("./binary.js");
var _binaryJsDefault = parcelHelpers.interopDefault(_binaryJs);
var _bindJs = require("./bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
var _bothJs = require("./both.js");
var _bothJsDefault = parcelHelpers.interopDefault(_bothJs);
var _callJs = require("./call.js");
var _callJsDefault = parcelHelpers.interopDefault(_callJs);
var _chainJs = require("./chain.js");
var _chainJsDefault = parcelHelpers.interopDefault(_chainJs);
var _clampJs = require("./clamp.js");
var _clampJsDefault = parcelHelpers.interopDefault(_clampJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _collectByJs = require("./collectBy.js");
var _collectByJsDefault = parcelHelpers.interopDefault(_collectByJs);
var _comparatorJs = require("./comparator.js");
var _comparatorJsDefault = parcelHelpers.interopDefault(_comparatorJs);
var _complementJs = require("./complement.js");
var _complementJsDefault = parcelHelpers.interopDefault(_complementJs);
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _composeWithJs = require("./composeWith.js");
var _composeWithJsDefault = parcelHelpers.interopDefault(_composeWithJs);
var _concatJs = require("./concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _condJs = require("./cond.js");
var _condJsDefault = parcelHelpers.interopDefault(_condJs);
var _constructJs = require("./construct.js");
var _constructJsDefault = parcelHelpers.interopDefault(_constructJs);
var _constructNJs = require("./constructN.js");
var _constructNJsDefault = parcelHelpers.interopDefault(_constructNJs);
var _convergeJs = require("./converge.js");
var _convergeJsDefault = parcelHelpers.interopDefault(_convergeJs);
var _countJs = require("./count.js");
var _countJsDefault = parcelHelpers.interopDefault(_countJs);
var _countByJs = require("./countBy.js");
var _countByJsDefault = parcelHelpers.interopDefault(_countByJs);
var _curryJs = require("./curry.js");
var _curryJsDefault = parcelHelpers.interopDefault(_curryJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _decJs = require("./dec.js");
var _decJsDefault = parcelHelpers.interopDefault(_decJs);
var _defaultToJs = require("./defaultTo.js");
var _defaultToJsDefault = parcelHelpers.interopDefault(_defaultToJs);
var _descendJs = require("./descend.js");
var _descendJsDefault = parcelHelpers.interopDefault(_descendJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
var _differenceWithJs = require("./differenceWith.js");
var _differenceWithJsDefault = parcelHelpers.interopDefault(_differenceWithJs);
var _dissocJs = require("./dissoc.js");
var _dissocJsDefault = parcelHelpers.interopDefault(_dissocJs);
var _dissocPathJs = require("./dissocPath.js");
var _dissocPathJsDefault = parcelHelpers.interopDefault(_dissocPathJs);
var _divideJs = require("./divide.js");
var _divideJsDefault = parcelHelpers.interopDefault(_divideJs);
var _dropJs = require("./drop.js");
var _dropJsDefault = parcelHelpers.interopDefault(_dropJs);
var _dropLastJs = require("./dropLast.js");
var _dropLastJsDefault = parcelHelpers.interopDefault(_dropLastJs);
var _dropLastWhileJs = require("./dropLastWhile.js");
var _dropLastWhileJsDefault = parcelHelpers.interopDefault(_dropLastWhileJs);
var _dropRepeatsJs = require("./dropRepeats.js");
var _dropRepeatsJsDefault = parcelHelpers.interopDefault(_dropRepeatsJs);
var _dropRepeatsByJs = require("./dropRepeatsBy.js");
var _dropRepeatsByJsDefault = parcelHelpers.interopDefault(_dropRepeatsByJs);
var _dropRepeatsWithJs = require("./dropRepeatsWith.js");
var _dropRepeatsWithJsDefault = parcelHelpers.interopDefault(_dropRepeatsWithJs);
var _dropWhileJs = require("./dropWhile.js");
var _dropWhileJsDefault = parcelHelpers.interopDefault(_dropWhileJs);
var _eitherJs = require("./either.js");
var _eitherJsDefault = parcelHelpers.interopDefault(_eitherJs);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _endsWithJs = require("./endsWith.js");
var _endsWithJsDefault = parcelHelpers.interopDefault(_endsWithJs);
var _eqByJs = require("./eqBy.js");
var _eqByJsDefault = parcelHelpers.interopDefault(_eqByJs);
var _eqPropsJs = require("./eqProps.js");
var _eqPropsJsDefault = parcelHelpers.interopDefault(_eqPropsJs);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
var _evolveJs = require("./evolve.js");
var _evolveJsDefault = parcelHelpers.interopDefault(_evolveJs);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _findJs = require("./find.js");
var _findJsDefault = parcelHelpers.interopDefault(_findJs);
var _findIndexJs = require("./findIndex.js");
var _findIndexJsDefault = parcelHelpers.interopDefault(_findIndexJs);
var _findLastJs = require("./findLast.js");
var _findLastJsDefault = parcelHelpers.interopDefault(_findLastJs);
var _findLastIndexJs = require("./findLastIndex.js");
var _findLastIndexJsDefault = parcelHelpers.interopDefault(_findLastIndexJs);
var _flattenJs = require("./flatten.js");
var _flattenJsDefault = parcelHelpers.interopDefault(_flattenJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
var _forEachJs = require("./forEach.js");
var _forEachJsDefault = parcelHelpers.interopDefault(_forEachJs);
var _forEachObjIndexedJs = require("./forEachObjIndexed.js");
var _forEachObjIndexedJsDefault = parcelHelpers.interopDefault(_forEachObjIndexedJs);
var _fromPairsJs = require("./fromPairs.js");
var _fromPairsJsDefault = parcelHelpers.interopDefault(_fromPairsJs);
var _groupByJs = require("./groupBy.js");
var _groupByJsDefault = parcelHelpers.interopDefault(_groupByJs);
var _groupWithJs = require("./groupWith.js");
var _groupWithJsDefault = parcelHelpers.interopDefault(_groupWithJs);
var _gtJs = require("./gt.js");
var _gtJsDefault = parcelHelpers.interopDefault(_gtJs);
var _gteJs = require("./gte.js");
var _gteJsDefault = parcelHelpers.interopDefault(_gteJs);
var _hasJs = require("./has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _hasInJs = require("./hasIn.js");
var _hasInJsDefault = parcelHelpers.interopDefault(_hasInJs);
var _hasPathJs = require("./hasPath.js");
var _hasPathJsDefault = parcelHelpers.interopDefault(_hasPathJs);
var _headJs = require("./head.js");
var _headJsDefault = parcelHelpers.interopDefault(_headJs);
var _identicalJs = require("./identical.js");
var _identicalJsDefault = parcelHelpers.interopDefault(_identicalJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _ifElseJs = require("./ifElse.js");
var _ifElseJsDefault = parcelHelpers.interopDefault(_ifElseJs);
var _incJs = require("./inc.js");
var _incJsDefault = parcelHelpers.interopDefault(_incJs);
var _includesJs = require("./includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _indexByJs = require("./indexBy.js");
var _indexByJsDefault = parcelHelpers.interopDefault(_indexByJs);
var _indexOfJs = require("./indexOf.js");
var _indexOfJsDefault = parcelHelpers.interopDefault(_indexOfJs);
var _initJs = require("./init.js");
var _initJsDefault = parcelHelpers.interopDefault(_initJs);
var _innerJoinJs = require("./innerJoin.js");
var _innerJoinJsDefault = parcelHelpers.interopDefault(_innerJoinJs);
var _insertJs = require("./insert.js");
var _insertJsDefault = parcelHelpers.interopDefault(_insertJs);
var _insertAllJs = require("./insertAll.js");
var _insertAllJsDefault = parcelHelpers.interopDefault(_insertAllJs);
var _intersectionJs = require("./intersection.js");
var _intersectionJsDefault = parcelHelpers.interopDefault(_intersectionJs);
var _intersperseJs = require("./intersperse.js");
var _intersperseJsDefault = parcelHelpers.interopDefault(_intersperseJs);
var _intoJs = require("./into.js");
var _intoJsDefault = parcelHelpers.interopDefault(_intoJs);
var _invertJs = require("./invert.js");
var _invertJsDefault = parcelHelpers.interopDefault(_invertJs);
var _invertObjJs = require("./invertObj.js");
var _invertObjJsDefault = parcelHelpers.interopDefault(_invertObjJs);
var _invokerJs = require("./invoker.js");
var _invokerJsDefault = parcelHelpers.interopDefault(_invokerJs);
var _isJs = require("./is.js");
var _isJsDefault = parcelHelpers.interopDefault(_isJs);
var _isEmptyJs = require("./isEmpty.js");
var _isEmptyJsDefault = parcelHelpers.interopDefault(_isEmptyJs);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
var _isNotNilJs = require("./isNotNil.js");
var _isNotNilJsDefault = parcelHelpers.interopDefault(_isNotNilJs);
var _joinJs = require("./join.js");
var _joinJsDefault = parcelHelpers.interopDefault(_joinJs);
var _juxtJs = require("./juxt.js");
var _juxtJsDefault = parcelHelpers.interopDefault(_juxtJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _keysInJs = require("./keysIn.js");
var _keysInJsDefault = parcelHelpers.interopDefault(_keysInJs);
var _lastJs = require("./last.js");
var _lastJsDefault = parcelHelpers.interopDefault(_lastJs);
var _lastIndexOfJs = require("./lastIndexOf.js");
var _lastIndexOfJsDefault = parcelHelpers.interopDefault(_lastIndexOfJs);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _lensJs = require("./lens.js");
var _lensJsDefault = parcelHelpers.interopDefault(_lensJs);
var _lensIndexJs = require("./lensIndex.js");
var _lensIndexJsDefault = parcelHelpers.interopDefault(_lensIndexJs);
var _lensPathJs = require("./lensPath.js");
var _lensPathJsDefault = parcelHelpers.interopDefault(_lensPathJs);
var _lensPropJs = require("./lensProp.js");
var _lensPropJsDefault = parcelHelpers.interopDefault(_lensPropJs);
var _liftJs = require("./lift.js");
var _liftJsDefault = parcelHelpers.interopDefault(_liftJs);
var _liftNJs = require("./liftN.js");
var _liftNJsDefault = parcelHelpers.interopDefault(_liftNJs);
var _ltJs = require("./lt.js");
var _ltJsDefault = parcelHelpers.interopDefault(_ltJs);
var _lteJs = require("./lte.js");
var _lteJsDefault = parcelHelpers.interopDefault(_lteJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _mapAccumJs = require("./mapAccum.js");
var _mapAccumJsDefault = parcelHelpers.interopDefault(_mapAccumJs);
var _mapAccumRightJs = require("./mapAccumRight.js");
var _mapAccumRightJsDefault = parcelHelpers.interopDefault(_mapAccumRightJs);
var _mapObjIndexedJs = require("./mapObjIndexed.js");
var _mapObjIndexedJsDefault = parcelHelpers.interopDefault(_mapObjIndexedJs);
var _matchJs = require("./match.js");
var _matchJsDefault = parcelHelpers.interopDefault(_matchJs);
var _mathModJs = require("./mathMod.js");
var _mathModJsDefault = parcelHelpers.interopDefault(_mathModJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _maxByJs = require("./maxBy.js");
var _maxByJsDefault = parcelHelpers.interopDefault(_maxByJs);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
var _medianJs = require("./median.js");
var _medianJsDefault = parcelHelpers.interopDefault(_medianJs);
var _memoizeWithJs = require("./memoizeWith.js");
var _memoizeWithJsDefault = parcelHelpers.interopDefault(_memoizeWithJs);
var _mergeAllJs = require("./mergeAll.js");
var _mergeAllJsDefault = parcelHelpers.interopDefault(_mergeAllJs);
var _mergeDeepLeftJs = require("./mergeDeepLeft.js");
var _mergeDeepLeftJsDefault = parcelHelpers.interopDefault(_mergeDeepLeftJs);
var _mergeDeepRightJs = require("./mergeDeepRight.js");
var _mergeDeepRightJsDefault = parcelHelpers.interopDefault(_mergeDeepRightJs);
var _mergeDeepWithJs = require("./mergeDeepWith.js");
var _mergeDeepWithJsDefault = parcelHelpers.interopDefault(_mergeDeepWithJs);
var _mergeDeepWithKeyJs = require("./mergeDeepWithKey.js");
var _mergeDeepWithKeyJsDefault = parcelHelpers.interopDefault(_mergeDeepWithKeyJs);
var _mergeLeftJs = require("./mergeLeft.js");
var _mergeLeftJsDefault = parcelHelpers.interopDefault(_mergeLeftJs);
var _mergeRightJs = require("./mergeRight.js");
var _mergeRightJsDefault = parcelHelpers.interopDefault(_mergeRightJs);
var _mergeWithJs = require("./mergeWith.js");
var _mergeWithJsDefault = parcelHelpers.interopDefault(_mergeWithJs);
var _mergeWithKeyJs = require("./mergeWithKey.js");
var _mergeWithKeyJsDefault = parcelHelpers.interopDefault(_mergeWithKeyJs);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
var _minByJs = require("./minBy.js");
var _minByJsDefault = parcelHelpers.interopDefault(_minByJs);
var _modifyJs = require("./modify.js");
var _modifyJsDefault = parcelHelpers.interopDefault(_modifyJs);
var _modifyPathJs = require("./modifyPath.js");
var _modifyPathJsDefault = parcelHelpers.interopDefault(_modifyPathJs);
var _moduloJs = require("./modulo.js");
var _moduloJsDefault = parcelHelpers.interopDefault(_moduloJs);
var _moveJs = require("./move.js");
var _moveJsDefault = parcelHelpers.interopDefault(_moveJs);
var _multiplyJs = require("./multiply.js");
var _multiplyJsDefault = parcelHelpers.interopDefault(_multiplyJs);
var _nAryJs = require("./nAry.js");
var _nAryJsDefault = parcelHelpers.interopDefault(_nAryJs);
var _partialObjectJs = require("./partialObject.js");
var _partialObjectJsDefault = parcelHelpers.interopDefault(_partialObjectJs);
var _negateJs = require("./negate.js");
var _negateJsDefault = parcelHelpers.interopDefault(_negateJs);
var _noneJs = require("./none.js");
var _noneJsDefault = parcelHelpers.interopDefault(_noneJs);
var _notJs = require("./not.js");
var _notJsDefault = parcelHelpers.interopDefault(_notJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
var _nthArgJs = require("./nthArg.js");
var _nthArgJsDefault = parcelHelpers.interopDefault(_nthArgJs);
var _oJs = require("./o.js");
var _oJsDefault = parcelHelpers.interopDefault(_oJs);
var _objOfJs = require("./objOf.js");
var _objOfJsDefault = parcelHelpers.interopDefault(_objOfJs);
var _ofJs = require("./of.js");
var _ofJsDefault = parcelHelpers.interopDefault(_ofJs);
var _omitJs = require("./omit.js");
var _omitJsDefault = parcelHelpers.interopDefault(_omitJs);
var _onJs = require("./on.js");
var _onJsDefault = parcelHelpers.interopDefault(_onJs);
var _onceJs = require("./once.js");
var _onceJsDefault = parcelHelpers.interopDefault(_onceJs);
var _orJs = require("./or.js");
var _orJsDefault = parcelHelpers.interopDefault(_orJs);
var _otherwiseJs = require("./otherwise.js");
var _otherwiseJsDefault = parcelHelpers.interopDefault(_otherwiseJs);
var _overJs = require("./over.js");
var _overJsDefault = parcelHelpers.interopDefault(_overJs);
var _pairJs = require("./pair.js");
var _pairJsDefault = parcelHelpers.interopDefault(_pairJs);
var _partialJs = require("./partial.js");
var _partialJsDefault = parcelHelpers.interopDefault(_partialJs);
var _partialRightJs = require("./partialRight.js");
var _partialRightJsDefault = parcelHelpers.interopDefault(_partialRightJs);
var _partitionJs = require("./partition.js");
var _partitionJsDefault = parcelHelpers.interopDefault(_partitionJs);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _pathsJs = require("./paths.js");
var _pathsJsDefault = parcelHelpers.interopDefault(_pathsJs);
var _pathEqJs = require("./pathEq.js");
var _pathEqJsDefault = parcelHelpers.interopDefault(_pathEqJs);
var _pathOrJs = require("./pathOr.js");
var _pathOrJsDefault = parcelHelpers.interopDefault(_pathOrJs);
var _pathSatisfiesJs = require("./pathSatisfies.js");
var _pathSatisfiesJsDefault = parcelHelpers.interopDefault(_pathSatisfiesJs);
var _pickJs = require("./pick.js");
var _pickJsDefault = parcelHelpers.interopDefault(_pickJs);
var _pickAllJs = require("./pickAll.js");
var _pickAllJsDefault = parcelHelpers.interopDefault(_pickAllJs);
var _pickByJs = require("./pickBy.js");
var _pickByJsDefault = parcelHelpers.interopDefault(_pickByJs);
var _pipeJs = require("./pipe.js");
var _pipeJsDefault = parcelHelpers.interopDefault(_pipeJs);
var _pipeWithJs = require("./pipeWith.js");
var _pipeWithJsDefault = parcelHelpers.interopDefault(_pipeWithJs);
var _pluckJs = require("./pluck.js");
var _pluckJsDefault = parcelHelpers.interopDefault(_pluckJs);
var _prependJs = require("./prepend.js");
var _prependJsDefault = parcelHelpers.interopDefault(_prependJs);
var _productJs = require("./product.js");
var _productJsDefault = parcelHelpers.interopDefault(_productJs);
var _projectJs = require("./project.js");
var _projectJsDefault = parcelHelpers.interopDefault(_projectJs);
var _promapJs = require("./promap.js");
var _promapJsDefault = parcelHelpers.interopDefault(_promapJs);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
var _propEqJs = require("./propEq.js");
var _propEqJsDefault = parcelHelpers.interopDefault(_propEqJs);
var _propIsJs = require("./propIs.js");
var _propIsJsDefault = parcelHelpers.interopDefault(_propIsJs);
var _propOrJs = require("./propOr.js");
var _propOrJsDefault = parcelHelpers.interopDefault(_propOrJs);
var _propSatisfiesJs = require("./propSatisfies.js");
var _propSatisfiesJsDefault = parcelHelpers.interopDefault(_propSatisfiesJs);
var _propsJs = require("./props.js");
var _propsJsDefault = parcelHelpers.interopDefault(_propsJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
var _reduceRightJs = require("./reduceRight.js");
var _reduceRightJsDefault = parcelHelpers.interopDefault(_reduceRightJs);
var _reduceWhileJs = require("./reduceWhile.js");
var _reduceWhileJsDefault = parcelHelpers.interopDefault(_reduceWhileJs);
var _reducedJs = require("./reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _rejectJs = require("./reject.js");
var _rejectJsDefault = parcelHelpers.interopDefault(_rejectJs);
var _removeJs = require("./remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
var _repeatJs = require("./repeat.js");
var _repeatJsDefault = parcelHelpers.interopDefault(_repeatJs);
var _replaceJs = require("./replace.js");
var _replaceJsDefault = parcelHelpers.interopDefault(_replaceJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
var _scanJs = require("./scan.js");
var _scanJsDefault = parcelHelpers.interopDefault(_scanJs);
var _sequenceJs = require("./sequence.js");
var _sequenceJsDefault = parcelHelpers.interopDefault(_sequenceJs);
var _setJs = require("./set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
var _sortJs = require("./sort.js");
var _sortJsDefault = parcelHelpers.interopDefault(_sortJs);
var _sortByJs = require("./sortBy.js");
var _sortByJsDefault = parcelHelpers.interopDefault(_sortByJs);
var _sortWithJs = require("./sortWith.js");
var _sortWithJsDefault = parcelHelpers.interopDefault(_sortWithJs);
var _splitJs = require("./split.js");
var _splitJsDefault = parcelHelpers.interopDefault(_splitJs);
var _splitAtJs = require("./splitAt.js");
var _splitAtJsDefault = parcelHelpers.interopDefault(_splitAtJs);
var _splitEveryJs = require("./splitEvery.js");
var _splitEveryJsDefault = parcelHelpers.interopDefault(_splitEveryJs);
var _splitWhenJs = require("./splitWhen.js");
var _splitWhenJsDefault = parcelHelpers.interopDefault(_splitWhenJs);
var _splitWheneverJs = require("./splitWhenever.js");
var _splitWheneverJsDefault = parcelHelpers.interopDefault(_splitWheneverJs);
var _startsWithJs = require("./startsWith.js");
var _startsWithJsDefault = parcelHelpers.interopDefault(_startsWithJs);
var _subtractJs = require("./subtract.js");
var _subtractJsDefault = parcelHelpers.interopDefault(_subtractJs);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
var _swapJs = require("./swap.js");
var _swapJsDefault = parcelHelpers.interopDefault(_swapJs);
var _symmetricDifferenceJs = require("./symmetricDifference.js");
var _symmetricDifferenceJsDefault = parcelHelpers.interopDefault(_symmetricDifferenceJs);
var _symmetricDifferenceWithJs = require("./symmetricDifferenceWith.js");
var _symmetricDifferenceWithJsDefault = parcelHelpers.interopDefault(_symmetricDifferenceWithJs);
var _tailJs = require("./tail.js");
var _tailJsDefault = parcelHelpers.interopDefault(_tailJs);
var _takeJs = require("./take.js");
var _takeJsDefault = parcelHelpers.interopDefault(_takeJs);
var _takeLastJs = require("./takeLast.js");
var _takeLastJsDefault = parcelHelpers.interopDefault(_takeLastJs);
var _takeLastWhileJs = require("./takeLastWhile.js");
var _takeLastWhileJsDefault = parcelHelpers.interopDefault(_takeLastWhileJs);
var _takeWhileJs = require("./takeWhile.js");
var _takeWhileJsDefault = parcelHelpers.interopDefault(_takeWhileJs);
var _tapJs = require("./tap.js");
var _tapJsDefault = parcelHelpers.interopDefault(_tapJs);
var _testJs = require("./test.js");
var _testJsDefault = parcelHelpers.interopDefault(_testJs);
var _andThenJs = require("./andThen.js");
var _andThenJsDefault = parcelHelpers.interopDefault(_andThenJs);
var _timesJs = require("./times.js");
var _timesJsDefault = parcelHelpers.interopDefault(_timesJs);
var _toLowerJs = require("./toLower.js");
var _toLowerJsDefault = parcelHelpers.interopDefault(_toLowerJs);
var _toPairsJs = require("./toPairs.js");
var _toPairsJsDefault = parcelHelpers.interopDefault(_toPairsJs);
var _toPairsInJs = require("./toPairsIn.js");
var _toPairsInJsDefault = parcelHelpers.interopDefault(_toPairsInJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
var _toUpperJs = require("./toUpper.js");
var _toUpperJsDefault = parcelHelpers.interopDefault(_toUpperJs);
var _transduceJs = require("./transduce.js");
var _transduceJsDefault = parcelHelpers.interopDefault(_transduceJs);
var _transposeJs = require("./transpose.js");
var _transposeJsDefault = parcelHelpers.interopDefault(_transposeJs);
var _traverseJs = require("./traverse.js");
var _traverseJsDefault = parcelHelpers.interopDefault(_traverseJs);
var _trimJs = require("./trim.js");
var _trimJsDefault = parcelHelpers.interopDefault(_trimJs);
var _tryCatchJs = require("./tryCatch.js");
var _tryCatchJsDefault = parcelHelpers.interopDefault(_tryCatchJs);
var _typeJs = require("./type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
var _unapplyJs = require("./unapply.js");
var _unapplyJsDefault = parcelHelpers.interopDefault(_unapplyJs);
var _unaryJs = require("./unary.js");
var _unaryJsDefault = parcelHelpers.interopDefault(_unaryJs);
var _uncurryNJs = require("./uncurryN.js");
var _uncurryNJsDefault = parcelHelpers.interopDefault(_uncurryNJs);
var _unfoldJs = require("./unfold.js");
var _unfoldJsDefault = parcelHelpers.interopDefault(_unfoldJs);
var _unionJs = require("./union.js");
var _unionJsDefault = parcelHelpers.interopDefault(_unionJs);
var _unionWithJs = require("./unionWith.js");
var _unionWithJsDefault = parcelHelpers.interopDefault(_unionWithJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
var _uniqByJs = require("./uniqBy.js");
var _uniqByJsDefault = parcelHelpers.interopDefault(_uniqByJs);
var _uniqWithJs = require("./uniqWith.js");
var _uniqWithJsDefault = parcelHelpers.interopDefault(_uniqWithJs);
var _unlessJs = require("./unless.js");
var _unlessJsDefault = parcelHelpers.interopDefault(_unlessJs);
var _unnestJs = require("./unnest.js");
var _unnestJsDefault = parcelHelpers.interopDefault(_unnestJs);
var _untilJs = require("./until.js");
var _untilJsDefault = parcelHelpers.interopDefault(_untilJs);
var _unwindJs = require("./unwind.js");
var _unwindJsDefault = parcelHelpers.interopDefault(_unwindJs);
var _updateJs = require("./update.js");
var _updateJsDefault = parcelHelpers.interopDefault(_updateJs);
var _useWithJs = require("./useWith.js");
var _useWithJsDefault = parcelHelpers.interopDefault(_useWithJs);
var _valuesJs = require("./values.js");
var _valuesJsDefault = parcelHelpers.interopDefault(_valuesJs);
var _valuesInJs = require("./valuesIn.js");
var _valuesInJsDefault = parcelHelpers.interopDefault(_valuesInJs);
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _whenJs = require("./when.js");
var _whenJsDefault = parcelHelpers.interopDefault(_whenJs);
var _whereJs = require("./where.js");
var _whereJsDefault = parcelHelpers.interopDefault(_whereJs);
var _whereAnyJs = require("./whereAny.js");
var _whereAnyJsDefault = parcelHelpers.interopDefault(_whereAnyJs);
var _whereEqJs = require("./whereEq.js");
var _whereEqJsDefault = parcelHelpers.interopDefault(_whereEqJs);
var _withoutJs = require("./without.js");
var _withoutJsDefault = parcelHelpers.interopDefault(_withoutJs);
var _xorJs = require("./xor.js");
var _xorJsDefault = parcelHelpers.interopDefault(_xorJs);
var _xprodJs = require("./xprod.js");
var _xprodJsDefault = parcelHelpers.interopDefault(_xprodJs);
var _zipJs = require("./zip.js");
var _zipJsDefault = parcelHelpers.interopDefault(_zipJs);
var _zipObjJs = require("./zipObj.js");
var _zipObjJsDefault = parcelHelpers.interopDefault(_zipObjJs);
var _zipWithJs = require("./zipWith.js");
var _zipWithJsDefault = parcelHelpers.interopDefault(_zipWithJs);
var _thunkifyJs = require("./thunkify.js");
var _thunkifyJsDefault = parcelHelpers.interopDefault(_thunkifyJs);

},{"./F.js":"bemFZ","./T.js":"7CJzf","./__.js":"isPGj","./add.js":"i4R4C","./addIndex.js":"kKJMR","./addIndexRight.js":"2uWQJ","./adjust.js":"gL7Yb","./all.js":"83sIL","./allPass.js":"38ga5","./always.js":"kfWcy","./and.js":"iaBbH","./any.js":"lWZQk","./anyPass.js":"lxb0q","./ap.js":"93976","./aperture.js":"iYyfL","./append.js":"h6zU8","./apply.js":"1GViC","./applySpec.js":"jKIo7","./applyTo.js":"b8sf7","./ascend.js":"cMbaa","./assoc.js":"9Gdur","./assocPath.js":"asojb","./binary.js":"eHdbz","./bind.js":"8OiS1","./both.js":"5kpqx","./call.js":"l8bim","./chain.js":"lpW07","./clamp.js":"8hUzC","./clone.js":"5ueus","./collectBy.js":"k6MOn","./comparator.js":"9IDUc","./complement.js":"4VZZ2","./compose.js":"9PR6Z","./composeWith.js":"17L5S","./concat.js":"eiimS","./cond.js":"jpIBZ","./construct.js":"6xWvA","./constructN.js":"9p8Df","./converge.js":"hio2A","./count.js":"9fpSs","./countBy.js":"bdCSL","./curry.js":"kqrwZ","./curryN.js":"a5Onp","./dec.js":"deteL","./defaultTo.js":"5gJsd","./descend.js":"7dFUd","./difference.js":"2qbIf","./differenceWith.js":"f8VN9","./dissoc.js":"9Ezve","./dissocPath.js":"9yAOL","./divide.js":"1FVWr","./drop.js":"3jRr9","./dropLast.js":"9sDBT","./dropLastWhile.js":"7O8fW","./dropRepeats.js":"5nFjS","./dropRepeatsBy.js":"fFMbh","./dropRepeatsWith.js":"fvKjc","./dropWhile.js":"jKlce","./either.js":"g5M3Y","./empty.js":"6A7mr","./endsWith.js":"i9Wxe","./eqBy.js":"ko2ZE","./eqProps.js":"3fEjf","./equals.js":"fVrfR","./evolve.js":"4jy4l","./filter.js":"1ECWS","./find.js":"5kesr","./findIndex.js":"lwMjr","./findLast.js":"lKKbc","./findLastIndex.js":"c2CCI","./flatten.js":"cItAW","./flip.js":"3o46f","./forEach.js":"5RPit","./forEachObjIndexed.js":"3gjhr","./fromPairs.js":"ju9u0","./groupBy.js":"4yfxC","./groupWith.js":"widLq","./gt.js":"kmmYb","./gte.js":"4Vbtc","./has.js":"2lSJg","./hasIn.js":"6nfXD","./hasPath.js":"k4o9U","./head.js":"ljBYt","./identical.js":"kmNRw","./identity.js":"iXdOZ","./ifElse.js":"2doHQ","./inc.js":"9hPRn","./includes.js":"cBP1r","./indexBy.js":"4q4CJ","./indexOf.js":"l2Mwh","./init.js":"bvK3p","./innerJoin.js":"aTtSv","./insert.js":"gYQPL","./insertAll.js":"cSMfs","./intersection.js":"g0xp9","./intersperse.js":"jtxVH","./into.js":"LLvcM","./invert.js":"LvJZ2","./invertObj.js":"4y1jC","./invoker.js":"22Ugy","./is.js":"fuQeG","./isEmpty.js":"6y0cn","./isNil.js":"9ObSL","./isNotNil.js":"9PqqL","./join.js":"ib8wA","./juxt.js":"gTjBi","./keys.js":"e4W8c","./keysIn.js":"6ZIxO","./last.js":"58clD","./lastIndexOf.js":"5itgl","./length.js":"ehc8r","./lens.js":"cknT6","./lensIndex.js":"dRm5J","./lensPath.js":"14Zkn","./lensProp.js":"7lRQp","./lift.js":"gVw22","./liftN.js":"1eQ2W","./lt.js":"574L6","./lte.js":"b9NKk","./map.js":"dC8Ps","./mapAccum.js":"cBqMh","./mapAccumRight.js":"3ssQs","./mapObjIndexed.js":"pCP13","./match.js":"437WC","./mathMod.js":"audYS","./max.js":"8Yjau","./maxBy.js":"3PKj8","./mean.js":"4ddUd","./median.js":"612KT","./memoizeWith.js":"5sPr8","./mergeAll.js":"fO5nn","./mergeDeepLeft.js":"bcHwU","./mergeDeepRight.js":"L3UkM","./mergeDeepWith.js":"id26n","./mergeDeepWithKey.js":"dB8b5","./mergeLeft.js":"dvzDQ","./mergeRight.js":"jVDyL","./mergeWith.js":"1oW1g","./mergeWithKey.js":"6w1Kz","./min.js":"8CLJW","./minBy.js":"fBzQH","./modify.js":"6OXvv","./modifyPath.js":"950Qf","./modulo.js":"aDZN8","./move.js":"aXY9y","./multiply.js":"bIYrs","./nAry.js":"eJZWa","./partialObject.js":"b5lWB","./negate.js":"dGjKU","./none.js":"ipKw8","./not.js":"jXux2","./nth.js":"gnCZG","./nthArg.js":"fO99P","./o.js":"aGpSJ","./objOf.js":"8zI3w","./of.js":"7XhKp","./omit.js":"gbhSl","./on.js":"32w0f","./once.js":"czXyM","./or.js":"jNgRe","./otherwise.js":"jXVwy","./over.js":"0UGXI","./pair.js":"fISQ8","./partial.js":"bxacY","./partialRight.js":"28ahL","./partition.js":"hdViw","./path.js":"9uBgn","./paths.js":"1DZe1","./pathEq.js":"duHSE","./pathOr.js":"dvIWi","./pathSatisfies.js":"fxJ6R","./pick.js":"dMFMM","./pickAll.js":"dDFUW","./pickBy.js":"2D3vi","./pipe.js":"e4vNV","./pipeWith.js":"jCa4A","./pluck.js":"hh8KA","./prepend.js":"i6TUs","./product.js":"5Gw6R","./project.js":"5jG6h","./promap.js":"1RCnq","./prop.js":"fBxsF","./propEq.js":"log8S","./propIs.js":"adZJa","./propOr.js":"j0uAD","./propSatisfies.js":"FXe3w","./props.js":"eSOKW","./range.js":"551P5","./reduce.js":"8LF8v","./reduceBy.js":"7nDTY","./reduceRight.js":"gfRkH","./reduceWhile.js":"iFnXJ","./reduced.js":"aMzDf","./reject.js":"dcaMG","./remove.js":"cmpvU","./repeat.js":"k9lSh","./replace.js":"aObVi","./reverse.js":"8tp0Z","./scan.js":"1P2uM","./sequence.js":"72o2r","./set.js":"7JIqs","./slice.js":"d9rCZ","./sort.js":"4FuQY","./sortBy.js":"ip624","./sortWith.js":"ksw5Y","./split.js":"9C81w","./splitAt.js":"dkva2","./splitEvery.js":"6G7b3","./splitWhen.js":"bX4aG","./splitWhenever.js":"bjEF3","./startsWith.js":"k69m9","./subtract.js":"85sgf","./sum.js":"hhJh8","./swap.js":"d81g3","./symmetricDifference.js":"j3F5g","./symmetricDifferenceWith.js":"dSd9e","./tail.js":"aXERB","./take.js":"1Kn5O","./takeLast.js":"3xFBF","./takeLastWhile.js":"aTFW4","./takeWhile.js":"i6mg8","./tap.js":"81b1J","./test.js":"3uamh","./andThen.js":"kF3Id","./times.js":"iySOg","./toLower.js":"6nQhN","./toPairs.js":"ThfnX","./toPairsIn.js":"w58Eu","./toString.js":"8yWci","./toUpper.js":"1KJDM","./transduce.js":"4rZ9T","./transpose.js":"2ODGP","./traverse.js":"9FE1G","./trim.js":"04iHY","./tryCatch.js":"hpp38","./type.js":"fAM3S","./unapply.js":"3AYel","./unary.js":"7JO4C","./uncurryN.js":"hiNPx","./unfold.js":"6qQcd","./union.js":"a7Sph","./unionWith.js":"ebmrn","./uniq.js":"ilMs6","./uniqBy.js":"f28ar","./uniqWith.js":"eoOAT","./unless.js":"g5jyI","./unnest.js":"idbcD","./until.js":"1LprR","./unwind.js":"4FSg5","./update.js":"3uMfJ","./useWith.js":"1JVjt","./values.js":"7CKlP","./valuesIn.js":"cBWtY","./view.js":"e66ql","./when.js":"9ooOM","./where.js":"ffj5f","./whereAny.js":"50eWr","./whereEq.js":"6aSUQ","./without.js":"fju7O","./xor.js":"b6I1S","./xprod.js":"jXDC6","./zip.js":"dq4hq","./zipObj.js":"J2L8B","./zipWith.js":"k0A4J","./thunkify.js":"ffINV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bemFZ":[function(require,module,exports) {
/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.T
 * @example
 *
 *      R.F(); //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var F = function() {
    return false;
};
exports.default = F;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CJzf":[function(require,module,exports) {
/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var T = function() {
    return true;
};
exports.default = T;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isPGj":[function(require,module,exports) {
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @name __
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    "@@functional/placeholder": true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i4R4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */ var add = /*#__PURE__*/ (0, _curry2JsDefault.default)(function add(a, b) {
    return Number(a) + Number(b);
});
exports.default = add;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dy25":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curry2);
var _curry1Js = require("./_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curry2(fn) {
    return function f2(a, b) {
        switch(arguments.length){
            case 0:
                return f2;
            case 1:
                return (0, _isPlaceholderJsDefault.default)(a) ? f2 : (0, _curry1JsDefault.default)(function(_b) {
                    return fn(a, _b);
                });
            default:
                return (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) ? f2 : (0, _isPlaceholderJsDefault.default)(a) ? (0, _curry1JsDefault.default)(function(_a) {
                    return fn(_a, b);
                }) : (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry1JsDefault.default)(function(_b) {
                    return fn(a, _b);
                }) : fn(a, b);
        }
    };
}

},{"./_curry1.js":"kg5MS","./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kg5MS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curry1);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0 || (0, _isPlaceholderJsDefault.default)(a)) return f1;
        else return fn.apply(this, arguments);
    };
}

},{"./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CKE6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isPlaceholder);
function _isPlaceholder(a) {
    return a != null && typeof a === "object" && a["@@functional/placeholder"] === true;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKJMR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig (((a ...) -> b) ... -> [a] -> *) -> (((a ..., Int, [a]) -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */ var addIndex = /*#__PURE__*/ (0, _curry1JsDefault.default)(function addIndex(fn) {
    return (0, _curryNJsDefault.default)(fn.length, function() {
        var idx = 0;
        var origFn = arguments[0];
        var list = arguments[arguments.length - 1];
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = function() {
            var result = origFn.apply(this, (0, _concatJsDefault.default)(arguments, [
                idx,
                list
            ]));
            idx += 1;
            return result;
        };
        return fn.apply(this, args);
    });
});
exports.default = addIndex;

},{"./internal/_concat.js":"kLoKe","./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLoKe":[function(require,module,exports) {
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_concat);
function _concat(set1, set2) {
    set1 = set1 || [];
    set2 = set2 || [];
    var idx;
    var len1 = set1.length;
    var len2 = set2.length;
    var result = [];
    idx = 0;
    while(idx < len1){
        result[result.length] = set1[idx];
        idx += 1;
    }
    idx = 0;
    while(idx < len2){
        result[result.length] = set2[idx];
        idx += 1;
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5Onp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */ var curryN = /*#__PURE__*/ (0, _curry2JsDefault.default)(function curryN(length, fn) {
    if (length === 1) return (0, _curry1JsDefault.default)(fn);
    return (0, _arityJsDefault.default)(length, (0, _curryNJsDefault.default)(length, [], fn));
});
exports.default = curryN;

},{"./internal/_arity.js":"k5H5S","./internal/_curry1.js":"kg5MS","./internal/_curry2.js":"3dy25","./internal/_curryN.js":"epMsX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5H5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arity);
function _arity(n, fn) {
    /* eslint-disable no-unused-vars */ switch(n){
        case 0:
            return function() {
                return fn.apply(this, arguments);
            };
        case 1:
            return function(a0) {
                return fn.apply(this, arguments);
            };
        case 2:
            return function(a0, a1) {
                return fn.apply(this, arguments);
            };
        case 3:
            return function(a0, a1, a2) {
                return fn.apply(this, arguments);
            };
        case 4:
            return function(a0, a1, a2, a3) {
                return fn.apply(this, arguments);
            };
        case 5:
            return function(a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
            };
        case 6:
            return function(a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
            };
        case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
            };
        case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
            };
        case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
            };
        case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
            };
        default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"epMsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curryN);
var _arityJs = require("./_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curryN(length, received, fn) {
    return function() {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
        while(combinedIdx < received.length || argsIdx < arguments.length){
            var result;
            if (combinedIdx < received.length && (!(0, _isPlaceholderJsDefault.default)(received[combinedIdx]) || argsIdx >= arguments.length)) result = received[combinedIdx];
            else {
                result = arguments[argsIdx];
                argsIdx += 1;
            }
            combined[combinedIdx] = result;
            if (!(0, _isPlaceholderJsDefault.default)(result)) left -= 1;
            combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : (0, _arityJsDefault.default)(left, _curryN(length, combined, fn));
    };
}

},{"./_arity.js":"k5H5S","./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2uWQJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * As with `addIndex`, `addIndexRight` creates a new list iteration function
 * from an existing one by adding two new parameters to its callback function:
 * the current index, and the entire list.
 *
 * Unlike `addIndex`, `addIndexRight` iterates from the right to the left.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      const revmap = (fn, ary) => R.map(fn, R.reverse(ary));
 *      const revmapIndexed = R.addIndexRight(revmap);
 *      revmapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> [ '5-r', '4-a', '3-b', '2-o', '1-o', '0-f' ]
 */ var addIndexRight = /*#__PURE__*/ (0, _curry1JsDefault.default)(function addIndex(fn) {
    return (0, _curryNJsDefault.default)(fn.length, function() {
        var origFn = arguments[0];
        var list = arguments[arguments.length - 1];
        var idx = list.length - 1;
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = function() {
            var result = origFn.apply(this, (0, _concatJsDefault.default)(arguments, [
                idx,
                list
            ]));
            idx -= 1;
            return result;
        };
        return fn.apply(this, args);
    });
});
exports.default = addIndexRight;

},{"./internal/_concat.js":"kLoKe","./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gL7Yb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> (a -> a) -> [a] -> [a]
 * @param {Number} idx The index.
 * @param {Function} fn The function to apply.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
 *      R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
 * @symb R.adjust(-1, f, [a, b]) = [a, f(b)]
 * @symb R.adjust(0, f, [a, b]) = [f(a), b]
 */ var adjust = /*#__PURE__*/ (0, _curry3JsDefault.default)(function adjust(idx, fn, list) {
    var len = list.length;
    if (idx >= len || idx < -len) return list;
    var _idx = (len + idx) % len;
    var _list = (0, _concatJsDefault.default)(list);
    _list[_idx] = fn(list[_idx]);
    return _list;
});
exports.default = adjust;

},{"./internal/_concat.js":"kLoKe","./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwEOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_curry3);
var _curry1Js = require("./_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isPlaceholderJs = require("./_isPlaceholder.js");
var _isPlaceholderJsDefault = parcelHelpers.interopDefault(_isPlaceholderJs);
function _curry3(fn) {
    return function f3(a, b, c) {
        switch(arguments.length){
            case 0:
                return f3;
            case 1:
                return (0, _isPlaceholderJsDefault.default)(a) ? f3 : (0, _curry2JsDefault.default)(function(_b, _c) {
                    return fn(a, _b, _c);
                });
            case 2:
                return (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) ? f3 : (0, _isPlaceholderJsDefault.default)(a) ? (0, _curry2JsDefault.default)(function(_a, _c) {
                    return fn(_a, b, _c);
                }) : (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry2JsDefault.default)(function(_b, _c) {
                    return fn(a, _b, _c);
                }) : (0, _curry1JsDefault.default)(function(_c) {
                    return fn(a, b, _c);
                });
            default:
                return (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) && (0, _isPlaceholderJsDefault.default)(c) ? f3 : (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry2JsDefault.default)(function(_a, _b) {
                    return fn(_a, _b, c);
                }) : (0, _isPlaceholderJsDefault.default)(a) && (0, _isPlaceholderJsDefault.default)(c) ? (0, _curry2JsDefault.default)(function(_a, _c) {
                    return fn(_a, b, _c);
                }) : (0, _isPlaceholderJsDefault.default)(b) && (0, _isPlaceholderJsDefault.default)(c) ? (0, _curry2JsDefault.default)(function(_b, _c) {
                    return fn(a, _b, _c);
                }) : (0, _isPlaceholderJsDefault.default)(a) ? (0, _curry1JsDefault.default)(function(_a) {
                    return fn(_a, b, c);
                }) : (0, _isPlaceholderJsDefault.default)(b) ? (0, _curry1JsDefault.default)(function(_b) {
                    return fn(a, _b, c);
                }) : (0, _isPlaceholderJsDefault.default)(c) ? (0, _curry1JsDefault.default)(function(_c) {
                    return fn(a, b, _c);
                }) : fn(a, b, c);
        }
    };
}

},{"./_curry1.js":"kg5MS","./_curry2.js":"3dy25","./_isPlaceholder.js":"7CKE6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"83sIL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xallJs = require("./internal/_xall.js");
var _xallJsDefault = parcelHelpers.interopDefault(_xallJs);
/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      const equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */ var all = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "all"
], (0, _xallJsDefault.default), function all(fn, list) {
    var idx = 0;
    while(idx < list.length){
        if (!fn(list[idx])) return false;
        idx += 1;
    }
    return true;
}));
exports.default = all;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xall.js":"eW7zu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIEUx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_dispatchable);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isTransformerJs = require("./_isTransformer.js");
var _isTransformerJsDefault = parcelHelpers.interopDefault(_isTransformerJs);
function _dispatchable(methodNames, transducerCreator, fn) {
    return function() {
        if (arguments.length === 0) return fn();
        var obj = arguments[arguments.length - 1];
        if (!(0, _isArrayJsDefault.default)(obj)) {
            var idx = 0;
            while(idx < methodNames.length){
                if (typeof obj[methodNames[idx]] === "function") return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
                idx += 1;
            }
            if ((0, _isTransformerJsDefault.default)(obj)) {
                var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
                return transducer(obj);
            }
        }
        return fn.apply(this, arguments);
    };
}

},{"./_isArray.js":"3Yv3G","./_isTransformer.js":"jUEH2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Yv3G":[function(require,module,exports) {
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUEH2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isTransformer);
function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eW7zu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xall);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XAll = /*#__PURE__*/ function() {
    function XAll(f, xf) {
        this.xf = xf;
        this.f = f;
        this.all = true;
    }
    XAll.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XAll.prototype["@@transducer/result"] = function(result) {
        if (this.all) result = this.xf["@@transducer/step"](result, true);
        return this.xf["@@transducer/result"](result);
    };
    XAll.prototype["@@transducer/step"] = function(result, input) {
        if (!this.f(input)) {
            this.all = false;
            result = (0, _reducedJsDefault.default)(this.xf["@@transducer/step"](result, false));
        }
        return result;
    };
    return XAll;
}();
function _xall(f) {
    return function(xf) {
        return new XAll(f, xf);
    };
}

},{"./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGWA2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_reduced);
function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
        "@@transducer/value": x,
        "@@transducer/reduced": true
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9lll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: function() {
        return this.xf["@@transducer/init"]();
    },
    result: function(result) {
        return this.xf["@@transducer/result"](result);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"38ga5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _pluckJs = require("./pluck.js");
var _pluckJsDefault = parcelHelpers.interopDefault(_pluckJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass, R.both
 * @example
 *
 *      const isQueen = R.propEq('rank', 'Q');
 *      const isSpade = R.propEq('suit', '♠︎');
 *      const isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */ var allPass = /*#__PURE__*/ (0, _curry1JsDefault.default)(function allPass(preds) {
    return (0, _curryNJsDefault.default)((0, _reduceJsDefault.default)((0, _maxJsDefault.default), 0, (0, _pluckJsDefault.default)("length", preds)), function() {
        var idx = 0;
        var len = preds.length;
        while(idx < len){
            if (!preds[idx].apply(this, arguments)) return false;
            idx += 1;
        }
        return true;
    });
});
exports.default = allPass;

},{"./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","./max.js":"8Yjau","./pluck.js":"hh8KA","./reduce.js":"8LF8v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Yjau":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */ var max = /*#__PURE__*/ (0, _curry2JsDefault.default)(function max(a, b) {
    if (a === b) return b;
    function safeMax(x, y) {
        if (x > y !== y > x) return y > x ? y : x;
        return undefined;
    }
    var maxByValue = safeMax(a, b);
    if (maxByValue !== undefined) return maxByValue;
    var maxByType = safeMax(typeof a, typeof b);
    if (maxByType !== undefined) return maxByType === typeof a ? a : b;
    var stringA = (0, _toStringJsDefault.default)(a);
    var maxByStringValue = safeMax(stringA, (0, _toStringJsDefault.default)(b));
    if (maxByStringValue !== undefined) return maxByStringValue === stringA ? a : b;
    return b;
});
exports.default = max;

},{"./internal/_curry2.js":"3dy25","./toString.js":"8yWci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yWci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _toStringJs = require("./internal/_toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */ var toString = /*#__PURE__*/ (0, _curry1JsDefault.default)(function toString(val) {
    return (0, _toStringJsDefault.default)(val, []);
});
exports.default = toString;

},{"./internal/_curry1.js":"kg5MS","./internal/_toString.js":"5TmhK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5TmhK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_toString);
var _includesJs = require("./_includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _mapJs = require("./_map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _quoteJs = require("./_quote.js");
var _quoteJsDefault = parcelHelpers.interopDefault(_quoteJs);
var _toISOStringJs = require("./_toISOString.js");
var _toISOStringJsDefault = parcelHelpers.interopDefault(_toISOStringJs);
var _keysJs = require("../keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _rejectJs = require("../reject.js");
var _rejectJsDefault = parcelHelpers.interopDefault(_rejectJs);
function _toString(x, seen) {
    var recur = function recur(y) {
        var xs = seen.concat([
            x
        ]);
        return (0, _includesJsDefault.default)(y, xs) ? "<Circular>" : _toString(y, xs);
    }; //  mapPairs :: (Object, [String]) -> [String]
    var mapPairs = function(obj, keys) {
        return (0, _mapJsDefault.default)(function(k) {
            return (0, _quoteJsDefault.default)(k) + ": " + recur(obj[k]);
        }, keys.slice().sort());
    };
    switch(Object.prototype.toString.call(x)){
        case "[object Arguments]":
            return "(function() { return arguments; }(" + (0, _mapJsDefault.default)(recur, x).join(", ") + "))";
        case "[object Array]":
            return "[" + (0, _mapJsDefault.default)(recur, x).concat(mapPairs(x, (0, _rejectJsDefault.default)(function(k) {
                return /^\d+$/.test(k);
            }, (0, _keysJsDefault.default)(x)))).join(", ") + "]";
        case "[object Boolean]":
            return typeof x === "object" ? "new Boolean(" + recur(x.valueOf()) + ")" : x.toString();
        case "[object Date]":
            return "new Date(" + (isNaN(x.valueOf()) ? recur(NaN) : (0, _quoteJsDefault.default)((0, _toISOStringJsDefault.default)(x))) + ")";
        case "[object Map]":
            return "new Map(" + recur(Array.from(x)) + ")";
        case "[object Null]":
            return "null";
        case "[object Number]":
            return typeof x === "object" ? "new Number(" + recur(x.valueOf()) + ")" : 1 / x === -Infinity ? "-0" : x.toString(10);
        case "[object Set]":
            return "new Set(" + recur(Array.from(x).sort()) + ")";
        case "[object String]":
            return typeof x === "object" ? "new String(" + recur(x.valueOf()) + ")" : (0, _quoteJsDefault.default)(x);
        case "[object Undefined]":
            return "undefined";
        default:
            if (typeof x.toString === "function") {
                var repr = x.toString();
                if (repr !== "[object Object]") return repr;
            }
            return "{" + mapPairs(x, (0, _keysJsDefault.default)(x)).join(", ") + "}";
    }
}

},{"./_includes.js":"5cnHY","./_map.js":"gvTkR","./_quote.js":"keU79","./_toISOString.js":"hWpUT","../keys.js":"e4W8c","../reject.js":"dcaMG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cnHY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_includes);
var _indexOfJs = require("./_indexOf.js");
var _indexOfJsDefault = parcelHelpers.interopDefault(_indexOfJs);
function _includes(a, list) {
    return (0, _indexOfJsDefault.default)(list, a, 0) >= 0;
}

},{"./_indexOf.js":"lHfA9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHfA9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_indexOf);
var _equalsJs = require("../equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
function _indexOf(list, a, idx) {
    var inf, item; // Array.prototype.indexOf doesn't exist below IE9
    if (typeof list.indexOf === "function") switch(typeof a){
        case "number":
            if (a === 0) {
                // manually crawl the list to distinguish between +0 and -0
                inf = 1 / a;
                while(idx < list.length){
                    item = list[idx];
                    if (item === 0 && 1 / item === inf) return idx;
                    idx += 1;
                }
                return -1;
            } else if (a !== a) {
                // NaN
                while(idx < list.length){
                    item = list[idx];
                    if (typeof item === "number" && item !== item) return idx;
                    idx += 1;
                }
                return -1;
            } // non-zero numbers can utilise Set
            return list.indexOf(a, idx);
        // all these types can utilise Set
        case "string":
        case "boolean":
        case "function":
        case "undefined":
            return list.indexOf(a, idx);
        case "object":
            if (a === null) // null can utilise Set
            return list.indexOf(a, idx);
    }
     // anything else not covered above, defer to R.equals
    while(idx < list.length){
        if ((0, _equalsJsDefault.default)(list[idx], a)) return idx;
        idx += 1;
    }
    return -1;
}

},{"../equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVrfR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _equalsJs = require("./internal/_equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */ var equals = /*#__PURE__*/ (0, _curry2JsDefault.default)(function equals(a, b) {
    return (0, _equalsJsDefault.default)(a, b, [], []);
});
exports.default = equals;

},{"./internal/_curry2.js":"3dy25","./internal/_equals.js":"4LtxC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LtxC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_equals);
var _arrayFromIteratorJs = require("./_arrayFromIterator.js");
var _arrayFromIteratorJsDefault = parcelHelpers.interopDefault(_arrayFromIteratorJs);
var _includesWithJs = require("./_includesWith.js");
var _includesWithJsDefault = parcelHelpers.interopDefault(_includesWithJs);
var _functionNameJs = require("./_functionName.js");
var _functionNameJsDefault = parcelHelpers.interopDefault(_functionNameJs);
var _hasJs = require("./_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _objectIsJs = require("./_objectIs.js");
var _objectIsJsDefault = parcelHelpers.interopDefault(_objectIsJs);
var _keysJs = require("../keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _typeJs = require("../type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparison of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */ function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = (0, _arrayFromIteratorJsDefault.default)(aIterator);
    var b = (0, _arrayFromIteratorJsDefault.default)(bIterator);
    function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
    } // if *a* array contains any element that is not included in *b*
    return !(0, _includesWithJsDefault.default)(function(b, aItem) {
        return !(0, _includesWithJsDefault.default)(eq, aItem, b);
    }, b, a);
}
function _equals(a, b, stackA, stackB) {
    if ((0, _objectIsJsDefault.default)(a, b)) return true;
    var typeA = (0, _typeJsDefault.default)(a);
    if (typeA !== (0, _typeJsDefault.default)(b)) return false;
    if (typeof a["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") return typeof a["fantasy-land/equals"] === "function" && a["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a);
    if (typeof a.equals === "function" || typeof b.equals === "function") return typeof a.equals === "function" && a.equals(b) && typeof b.equals === "function" && b.equals(a);
    switch(typeA){
        case "Arguments":
        case "Array":
        case "Object":
            if (typeof a.constructor === "function" && (0, _functionNameJsDefault.default)(a.constructor) === "Promise") return a === b;
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (!(typeof a === typeof b && (0, _objectIsJsDefault.default)(a.valueOf(), b.valueOf()))) return false;
            break;
        case "Date":
            if (!(0, _objectIsJsDefault.default)(a.valueOf(), b.valueOf())) return false;
            break;
        case "Error":
            return a.name === b.name && a.message === b.message;
        case "RegExp":
            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) return false;
            break;
    }
    var idx = stackA.length - 1;
    while(idx >= 0){
        if (stackA[idx] === a) return stackB[idx] === b;
        idx -= 1;
    }
    switch(typeA){
        case "Map":
            if (a.size !== b.size) return false;
            return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([
                a
            ]), stackB.concat([
                b
            ]));
        case "Set":
            if (a.size !== b.size) return false;
            return _uniqContentEquals(a.values(), b.values(), stackA.concat([
                a
            ]), stackB.concat([
                b
            ]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
            break;
        default:
            // Values of other types are only equal if identical.
            return false;
    }
    var keysA = (0, _keysJsDefault.default)(a);
    if (keysA.length !== (0, _keysJsDefault.default)(b).length) return false;
    var extendedStackA = stackA.concat([
        a
    ]);
    var extendedStackB = stackB.concat([
        b
    ]);
    idx = keysA.length - 1;
    while(idx >= 0){
        var key = keysA[idx];
        if (!((0, _hasJsDefault.default)(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) return false;
        idx -= 1;
    }
    return true;
}

},{"./_arrayFromIterator.js":"3BKwB","./_includesWith.js":"19ZT4","./_functionName.js":"lo7C1","./_has.js":"armmH","./_objectIs.js":"brBwn","../keys.js":"e4W8c","../type.js":"fAM3S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3BKwB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayFromIterator);
function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while(!(next = iter.next()).done)list.push(next.value);
    return list;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"19ZT4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_includesWith);
function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        if (pred(x, list[idx])) return true;
        idx += 1;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lo7C1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_functionName);
function _functionName(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? "" : match[1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"armmH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_has);
function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brBwn":[function(require,module,exports) {
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _objectIs(a, b) {
    // SameValue algorithm
    if (a === b) // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
    else // Step 6.a: NaN == NaN
    return a !== a && b !== b;
}
exports.default = typeof Object.is === "function" ? Object.is : _objectIs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4W8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _isArgumentsJs = require("./internal/_isArguments.js"); // cover IE < 9 keys issues
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var hasEnumBug = !/*#__PURE__*/ ({
    toString: null
}).propertyIsEnumerable("toString");
var nonEnumerableProps = [
    "constructor",
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
]; // Safari bug
var hasArgsEnumBug = /*#__PURE__*/ function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
}();
var contains = function contains(list, item) {
    var idx = 0;
    while(idx < list.length){
        if (list[idx] === item) return true;
        idx += 1;
    }
    return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values, R.toPairs
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */ var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /*#__PURE__*/ (0, _curry1JsDefault.default)(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/ (0, _curry1JsDefault.default)(function keys(obj) {
    if (Object(obj) !== obj) return [];
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && (0, _isArgumentsJsDefault.default)(obj);
    for(prop in obj)if ((0, _hasJsDefault.default)(prop, obj) && (!checkArgsLength || prop !== "length")) ks[ks.length] = prop;
    if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while(nIdx >= 0){
            prop = nonEnumerableProps[nIdx];
            if ((0, _hasJsDefault.default)(prop, obj) && !contains(ks, prop)) ks[ks.length] = prop;
            nIdx -= 1;
        }
    }
    return ks;
});
exports.default = keys;

},{"./internal/_curry1.js":"kg5MS","./internal/_has.js":"armmH","./internal/_isArguments.js":"9eKOx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9eKOx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasJs = require("./_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/ function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments(x) {
        return toString.call(x) === "[object Arguments]";
    } : function _isArguments(x) {
        return (0, _hasJsDefault.default)("callee", x);
    };
}();
exports.default = _isArguments;

},{"./_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAM3S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig * -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */ var type = /*#__PURE__*/ (0, _curry1JsDefault.default)(function type(val) {
    return val === null ? "Null" : val === undefined ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
exports.default = type;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gvTkR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_map);
function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while(idx < len){
        result[idx] = fn(functor[idx]);
        idx += 1;
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"keU79":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_quote);
function _quote(s) {
    var escaped = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b") // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + escaped.replace(/"/g, '\\"') + '"';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWpUT":[function(require,module,exports) {
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var pad = function pad(n) {
    return (n < 10 ? "0" : "") + n;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString(d) {
    return d.toISOString();
} : function _toISOString(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + "Z";
};
exports.default = _toISOString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dcaMG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _complementJs = require("./internal/_complement.js");
var _complementJsDefault = parcelHelpers.interopDefault(_complementJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 !== 0;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */ var reject = /*#__PURE__*/ (0, _curry2JsDefault.default)(function reject(pred, filterable) {
    return (0, _filterJsDefault.default)((0, _complementJsDefault.default)(pred), filterable);
});
exports.default = reject;

},{"./internal/_complement.js":"bywEV","./internal/_curry2.js":"3dy25","./filter.js":"1ECWS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bywEV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_complement);
function _complement(f) {
    return function() {
        return !f.apply(this, arguments);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ECWS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayReduceJs = require("./internal/_arrayReduce.js");
var _arrayReduceJsDefault = parcelHelpers.interopDefault(_arrayReduceJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _filterJs = require("./internal/_filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _xfilterJs = require("./internal/_xfilter.js");
var _xfilterJsDefault = parcelHelpers.interopDefault(_xfilterJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @category Object
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */ var filter = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "fantasy-land/filter",
    "filter"
], (0, _xfilterJsDefault.default), function(pred, filterable) {
    return (0, _isObjectJsDefault.default)(filterable) ? (0, _arrayReduceJsDefault.default)(function(acc, key) {
        if (pred(filterable[key])) acc[key] = filterable[key];
        return acc;
    }, {}, (0, _keysJsDefault.default)(filterable)) : (0, _filterJsDefault.default)(pred, filterable);
}));
exports.default = filter;

},{"./internal/_arrayReduce.js":"2VaMe","./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_filter.js":"2MI57","./internal/_isObject.js":"hfrpU","./internal/_xfilter.js":"9Ml1p","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VaMe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayReduce);
function _arrayReduce(reducer, acc, list) {
    var index = 0;
    var length = list.length;
    while(index < length){
        acc = reducer(acc, list[index]);
        index += 1;
    }
    return acc;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2MI57":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_filter);
function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while(idx < len){
        if (fn(list[idx])) result[result.length] = list[idx];
        idx += 1;
    }
    return result;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hfrpU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isObject);
function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ml1p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xfilter);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XFilter = /*#__PURE__*/ function() {
    function XFilter(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XFilter.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XFilter.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XFilter.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter;
}();
function _xfilter(f) {
    return function(xf) {
        return new XFilter(f, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hh8KA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.project, R.prop, R.props
 * @example
 *
 *      var getAges = R.pluck('age');
 *      getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]
 *
 *      R.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */ var pluck = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pluck(p, list) {
    return (0, _mapJsDefault.default)((0, _propJsDefault.default)(p), list);
});
exports.default = pluck;

},{"./internal/_curry2.js":"3dy25","./map.js":"dC8Ps","./prop.js":"fBxsF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dC8Ps":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayReduceJs = require("./internal/_arrayReduce.js");
var _arrayReduceJsDefault = parcelHelpers.interopDefault(_arrayReduceJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _mapJs = require("./internal/_map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _xmapJs = require("./internal/_xmap.js");
var _xmapJsDefault = parcelHelpers.interopDefault(_xmapJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex, R.pluck, R.project
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */ var map = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "fantasy-land/map",
    "map"
], (0, _xmapJsDefault.default), function map(fn, functor) {
    switch(Object.prototype.toString.call(functor)){
        case "[object Function]":
            return (0, _curryNJsDefault.default)(functor.length, function() {
                return fn.call(this, functor.apply(this, arguments));
            });
        case "[object Object]":
            return (0, _arrayReduceJsDefault.default)(function(acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
            }, {}, (0, _keysJsDefault.default)(functor));
        default:
            return (0, _mapJsDefault.default)(fn, functor);
    }
}));
exports.default = map;

},{"./internal/_arrayReduce.js":"2VaMe","./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_map.js":"gvTkR","./internal/_xmap.js":"5yjVL","./curryN.js":"a5Onp","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yjVL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XMap = /*#__PURE__*/ function() {
    function XMap(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XMap.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XMap.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XMap.prototype["@@transducer/step"] = function(result, input) {
        return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap;
}();
var _xmap = function _xmap(f) {
    return function(xf) {
        return new XMap(f, xf);
    };
};
exports.default = _xmap;

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBxsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isIntegerJs = require("./internal/_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx -> {s: a} -> a | Undefined
 * @param {String|Number} p The property name or array index
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path, R.props, R.pluck, R.project, R.nth
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.prop(0, [100]); //=> 100
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */ var prop = /*#__PURE__*/ (0, _curry2JsDefault.default)(function prop(p, obj) {
    if (obj == null) return;
    return (0, _isIntegerJsDefault.default)(p) ? (0, _nthJsDefault.default)(p, obj) : obj[p];
});
exports.default = prop;

},{"./internal/_curry2.js":"3dy25","./internal/_isInteger.js":"3AbYy","./nth.js":"gnCZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AbYy":[function(require,module,exports) {
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnCZG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isStringJs = require("./internal/_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */ var nth = /*#__PURE__*/ (0, _curry2JsDefault.default)(function nth(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return (0, _isStringJsDefault.default)(list) ? list.charAt(idx) : list[idx];
});
exports.default = nth;

},{"./internal/_curry2.js":"3dy25","./internal/_isString.js":"a1eoi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1eoi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isString);
function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LF8v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _xReduceJs = require("./internal/_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var _xwrapJs = require("./internal/_xwrap.js");
var _xwrapJsDefault = parcelHelpers.interopDefault(_xwrapJs);
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */ var reduce = /*#__PURE__*/ (0, _curry3JsDefault.default)(function(xf, acc, list) {
    return (0, _xReduceJsDefault.default)(typeof xf === "function" ? (0, _xwrapJsDefault.default)(xf) : xf, acc, list);
});
exports.default = reduce;

},{"./internal/_curry3.js":"jwEOD","./internal/_xReduce.js":"dqUBX","./internal/_xwrap.js":"cerBU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqUBX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createReduceJs = require("./_createReduce.js");
var _createReduceJsDefault = parcelHelpers.interopDefault(_createReduceJs);
var _xArrayReduceJs = require("./_xArrayReduce.js");
var _xArrayReduceJsDefault = parcelHelpers.interopDefault(_xArrayReduceJs);
var _bindJs = require("../bind.js");
var _bindJsDefault = parcelHelpers.interopDefault(_bindJs);
function _xIterableReduce(xf, acc, iter) {
    var step = iter.next();
    while(!step.done){
        acc = xf["@@transducer/step"](acc, step.value);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        step = iter.next();
    }
    return xf["@@transducer/result"](acc);
}
function _xMethodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName]((0, _bindJsDefault.default)(xf["@@transducer/step"], xf), acc));
}
var _xReduce = /*#__PURE__*/ (0, _createReduceJsDefault.default)((0, _xArrayReduceJsDefault.default), _xMethodReduce, _xIterableReduce);
exports.default = _xReduce;

},{"./_createReduce.js":"6gLdD","./_xArrayReduce.js":"34pnQ","../bind.js":"8OiS1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gLdD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_createReduce);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
function _createReduce(arrayReduce, methodReduce, iterableReduce) {
    return function _reduce(xf, acc, list) {
        if ((0, _isArrayLikeJsDefault.default)(list)) return arrayReduce(xf, acc, list);
        if (list == null) return acc;
        if (typeof list["fantasy-land/reduce"] === "function") return methodReduce(xf, acc, list, "fantasy-land/reduce");
        if (list[symIterator] != null) return iterableReduce(xf, acc, list[symIterator]());
        if (typeof list.next === "function") return iterableReduce(xf, acc, list);
        if (typeof list.reduce === "function") return methodReduce(xf, acc, list, "reduce");
        throw new TypeError("reduce: list must be array or iterable");
    };
}

},{"./_isArrayLike.js":"1ckj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ckj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isStringJs = require("./_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 *      _isArrayLike({nodeType: 1, length: 1}) // => false
 */ var _isArrayLike = /*#__PURE__*/ (0, _curry1JsDefault.default)(function isArrayLike(x) {
    if ((0, _isArrayJsDefault.default)(x)) return true;
    if (!x) return false;
    if (typeof x !== "object") return false;
    if ((0, _isStringJsDefault.default)(x)) return false;
    if (x.length === 0) return true;
    if (x.length > 0) return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    return false;
});
exports.default = _isArrayLike;

},{"./_curry1.js":"kg5MS","./_isArray.js":"3Yv3G","./_isString.js":"a1eoi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"34pnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xArrayReduce);
function _xArrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        acc = xf["@@transducer/step"](acc, list[idx]);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        idx += 1;
    }
    return xf["@@transducer/result"](acc);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OiS1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */ var bind = /*#__PURE__*/ (0, _curry2JsDefault.default)(function bind(fn, thisObj) {
    return (0, _arityJsDefault.default)(fn.length, function() {
        return fn.apply(thisObj, arguments);
    });
});
exports.default = bind;

},{"./internal/_arity.js":"k5H5S","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cerBU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xwrap);
var XWrap = /*#__PURE__*/ function() {
    function XWrap(fn) {
        this.f = fn;
    }
    XWrap.prototype["@@transducer/init"] = function() {
        throw new Error("init not implemented on XWrap");
    };
    XWrap.prototype["@@transducer/result"] = function(acc) {
        return acc;
    };
    XWrap.prototype["@@transducer/step"] = function(acc, x) {
        return this.f(acc, x);
    };
    return XWrap;
}();
function _xwrap(fn) {
    return new XWrap(fn);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfWcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */ var always = /*#__PURE__*/ (0, _curry1JsDefault.default)(function always(val) {
    return function() {
        return val;
    };
});
exports.default = always;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaBbH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns the first argument if it is falsy, otherwise the second argument.
 * Acts as the boolean `and` statement if both inputs are `Boolean`s.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.both, R.or
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */ var and = /*#__PURE__*/ (0, _curry2JsDefault.default)(function and(a, b) {
    return a && b;
});
exports.default = and;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWZQk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xanyJs = require("./internal/_xany.js");
var _xanyJsDefault = parcelHelpers.interopDefault(_xanyJs);
/**
 * Returns `true` if at least one of the elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      const lessThan0 = R.flip(R.lt)(0);
 *      const lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */ var any = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "any"
], (0, _xanyJsDefault.default), function any(fn, list) {
    var idx = 0;
    while(idx < list.length){
        if (fn(list[idx])) return true;
        idx += 1;
    }
    return false;
}));
exports.default = any;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xany.js":"dG4Q2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dG4Q2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xany);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XAny = /*#__PURE__*/ function() {
    function XAny(f, xf) {
        this.xf = xf;
        this.f = f;
        this.any = false;
    }
    XAny.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XAny.prototype["@@transducer/result"] = function(result) {
        if (!this.any) result = this.xf["@@transducer/step"](result, false);
        return this.xf["@@transducer/result"](result);
    };
    XAny.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.any = true;
            result = (0, _reducedJsDefault.default)(this.xf["@@transducer/step"](result, true));
        }
        return result;
    };
    return XAny;
}();
function _xany(f) {
    return function(xf) {
        return new XAny(f, xf);
    };
}

},{"./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lxb0q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _pluckJs = require("./pluck.js");
var _pluckJsDefault = parcelHelpers.interopDefault(_pluckJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass, R.either
 * @example
 *
 *      const isClub = R.propEq('suit', '♣');
 *      const isSpade = R.propEq('suit', '♠');
 *      const isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */ var anyPass = /*#__PURE__*/ (0, _curry1JsDefault.default)(function anyPass(preds) {
    return (0, _curryNJsDefault.default)((0, _reduceJsDefault.default)((0, _maxJsDefault.default), 0, (0, _pluckJsDefault.default)("length", preds)), function() {
        var idx = 0;
        var len = preds.length;
        while(idx < len){
            if (preds[idx].apply(this, arguments)) return true;
            idx += 1;
        }
        return false;
    });
});
exports.default = anyPass;

},{"./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","./max.js":"8Yjau","./pluck.js":"hh8KA","./reduce.js":"8LF8v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"93976":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the first argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @sig (r -> a -> b) -> (r -> a) -> (r -> b)
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 *
 *      // R.ap can also be used as S combinator
 *      // when only two functions are passed
 *      R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */ var ap = /*#__PURE__*/ (0, _curry2JsDefault.default)(function ap(applyF, applyX) {
    return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x) {
        return applyF(x)(applyX(x));
    } : (0, _reduceJsDefault.default)(function(acc, f) {
        return (0, _concatJsDefault.default)(acc, (0, _mapJsDefault.default)(f, applyX));
    }, [], applyF);
});
exports.default = ap;

},{"./internal/_concat.js":"kLoKe","./internal/_curry2.js":"3dy25","./internal/_reduce.js":"8Bdru","./map.js":"dC8Ps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Bdru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayReduceJs = require("./_arrayReduce.js");
var _arrayReduceJsDefault = parcelHelpers.interopDefault(_arrayReduceJs);
var _createReduceJs = require("./_createReduce.js");
var _createReduceJsDefault = parcelHelpers.interopDefault(_createReduceJs);
function _iterableReduce(reducer, acc, iter) {
    var step = iter.next();
    while(!step.done){
        acc = reducer(acc, step.value);
        step = iter.next();
    }
    return acc;
}
function _methodReduce(reducer, acc, obj, methodName) {
    return obj[methodName](reducer, acc);
}
var _reduce = /*#__PURE__*/ (0, _createReduceJsDefault.default)((0, _arrayReduceJsDefault.default), _methodReduce, _iterableReduce);
exports.default = _reduce;

},{"./_arrayReduce.js":"2VaMe","./_createReduce.js":"6gLdD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYyfL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _apertureJs = require("./internal/_aperture.js");
var _apertureJsDefault = parcelHelpers.interopDefault(_apertureJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xapertureJs = require("./internal/_xaperture.js");
var _xapertureJsDefault = parcelHelpers.interopDefault(_xapertureJs);
/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */ var aperture = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xapertureJsDefault.default), (0, _apertureJsDefault.default)));
exports.default = aperture;

},{"./internal/_aperture.js":"fmtV3","./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xaperture.js":"4m0IK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmtV3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_aperture);
function _aperture(n, list) {
    var idx = 0;
    var limit = list.length - (n - 1);
    var acc = new Array(limit >= 0 ? limit : 0);
    while(idx < limit){
        acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
        idx += 1;
    }
    return acc;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4m0IK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xaperture);
var _concatJs = require("./_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XAperture = /*#__PURE__*/ function() {
    function XAperture(n, xf) {
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n);
    }
    XAperture.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XAperture.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XAperture.prototype["@@transducer/step"] = function(result, input) {
        this.store(input);
        return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
    };
    XAperture.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    XAperture.prototype.getCopy = function() {
        return (0, _concatJsDefault.default)(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
    };
    return XAperture;
}();
function _xaperture(n) {
    return function(xf) {
        return new XAperture(n, xf);
    };
}

},{"./_concat.js":"kLoKe","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h6zU8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */ var append = /*#__PURE__*/ (0, _curry2JsDefault.default)(function append(el, list) {
    return (0, _concatJsDefault.default)(list, [
        el
    ]);
});
exports.default = append;

},{"./internal/_concat.js":"kLoKe","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1GViC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      const nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */ var apply = /*#__PURE__*/ (0, _curry2JsDefault.default)(function apply(fn, args) {
    return fn.apply(this, args);
});
exports.default = apply;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKIo7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _applyJs = require("./apply.js");
var _applyJsDefault = parcelHelpers.interopDefault(_applyJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _pluckJs = require("./pluck.js");
var _pluckJsDefault = parcelHelpers.interopDefault(_pluckJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
var _valuesJs = require("./values.js"); // Use custom mapValues function to avoid issues with specs that include a "map" key and R.map
var _valuesJsDefault = parcelHelpers.interopDefault(_valuesJs);
// delegating calls to .map
function mapValues(fn, obj) {
    return (0, _isArrayJsDefault.default)(obj) ? obj.map(fn) : (0, _keysJsDefault.default)(obj).reduce(function(acc, key) {
        acc[key] = fn(obj[key]);
        return acc;
    }, {});
}
/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      const getMetrics = R.applySpec({
 *        sum: R.add,
 *        nested: { mul: R.multiply }
 *      });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */ var applySpec = /*#__PURE__*/ (0, _curry1JsDefault.default)(function applySpec(spec) {
    spec = mapValues(function(v) {
        return typeof v == "function" ? v : applySpec(v);
    }, spec);
    return (0, _curryNJsDefault.default)((0, _reduceJsDefault.default)((0, _maxJsDefault.default), 0, (0, _pluckJsDefault.default)("length", (0, _valuesJsDefault.default)(spec))), function() {
        var args = arguments;
        return mapValues(function(f) {
            return (0, _applyJsDefault.default)(f, args);
        }, spec);
    });
});
exports.default = applySpec;

},{"./internal/_curry1.js":"kg5MS","./internal/_isArray.js":"3Yv3G","./apply.js":"1GViC","./curryN.js":"a5Onp","./max.js":"8Yjau","./pluck.js":"hh8KA","./reduce.js":"8LF8v","./keys.js":"e4W8c","./values.js":"7CKlP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CKlP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys, R.toPairs
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */ var values = /*#__PURE__*/ (0, _curry1JsDefault.default)(function values(obj) {
    var props = (0, _keysJsDefault.default)(obj);
    var len = props.length;
    var vals = [];
    var idx = 0;
    while(idx < len){
        vals[idx] = obj[props[idx]];
        idx += 1;
    }
    return vals;
});
exports.default = values;

},{"./internal/_curry1.js":"kg5MS","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b8sf7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Takes a value and applies a function to it.
 *
 * This function is also known as the `thrush` combinator.
 *
 * @func
 * @memberOf R
 * @since v0.25.0
 * @category Function
 * @sig a -> (a -> b) -> b
 * @param {*} x The value
 * @param {Function} f The function to apply
 * @return {*} The result of applying `f` to `x`
 * @example
 *
 *      const t42 = R.applyTo(42);
 *      t42(R.identity); //=> 42
 *      t42(R.add(1)); //=> 43
 */ var applyTo = /*#__PURE__*/ (0, _curry2JsDefault.default)(function applyTo(x, f) {
    return f(x);
});
exports.default = applyTo;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMbaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      const byAge = R.ascend(R.prop('age'));
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByYoungestFirst = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */ var ascend = /*#__PURE__*/ (0, _curry3JsDefault.default)(function ascend(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
});
exports.default = ascend;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Gdur":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _assocPathJs = require("./assocPath.js");
var _assocPathJsDefault = parcelHelpers.interopDefault(_assocPathJs);
/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig Idx -> a -> {k: v} -> {k: v}
 * @param {String|Number} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */ var assoc = /*#__PURE__*/ (0, _curry3JsDefault.default)(function assoc(prop, val, obj) {
    return (0, _assocPathJsDefault.default)([
        prop
    ], val, obj);
});
exports.default = assoc;

},{"./internal/_curry3.js":"jwEOD","./assocPath.js":"asojb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"asojb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _isIntegerJs = require("./internal/_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _assocJs = require("./internal/_assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */ var assocPath = /*#__PURE__*/ (0, _curry3JsDefault.default)(function assocPath(path, val, obj) {
    if (path.length === 0) return val;
    var idx = path[0];
    if (path.length > 1) {
        var nextObj = !(0, _isNilJsDefault.default)(obj) && (0, _hasJsDefault.default)(idx, obj) && typeof obj[idx] === "object" ? obj[idx] : (0, _isIntegerJsDefault.default)(path[1]) ? [] : {};
        val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
    }
    return (0, _assocJsDefault.default)(idx, val, obj);
});
exports.default = assocPath;

},{"./internal/_curry3.js":"jwEOD","./internal/_has.js":"armmH","./internal/_isInteger.js":"3AbYy","./internal/_assoc.js":"ouNCD","./isNil.js":"9ObSL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ouNCD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_assoc);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isIntegerJs = require("./_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
function _assoc(prop, val, obj) {
    if ((0, _isIntegerJsDefault.default)(prop) && (0, _isArrayJsDefault.default)(obj)) {
        var arr = [].concat(obj);
        arr[prop] = val;
        return arr;
    }
    var result = {};
    for(var p in obj)result[p] = obj[p];
    result[prop] = val;
    return result;
}

},{"./_isArray.js":"3Yv3G","./_isInteger.js":"3AbYy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ObSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */ var isNil = /*#__PURE__*/ (0, _curry1JsDefault.default)(function isNil(x) {
    return x == null;
});
exports.default = isNil;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHdbz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _nAryJs = require("./nAry.js");
var _nAryJsDefault = parcelHelpers.interopDefault(_nAryJs);
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> ((a, b) -> z)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      const takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      const takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */ var binary = /*#__PURE__*/ (0, _curry1JsDefault.default)(function binary(fn) {
    return (0, _nAryJsDefault.default)(2, fn);
});
exports.default = binary;

},{"./internal/_curry1.js":"kg5MS","./nAry.js":"eJZWa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJZWa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      const takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */ var nAry = /*#__PURE__*/ (0, _curry2JsDefault.default)(function nAry(n, fn) {
    switch(n){
        case 0:
            return function() {
                return fn.call(this);
            };
        case 1:
            return function(a0) {
                return fn.call(this, a0);
            };
        case 2:
            return function(a0, a1) {
                return fn.call(this, a0, a1);
            };
        case 3:
            return function(a0, a1, a2) {
                return fn.call(this, a0, a1, a2);
            };
        case 4:
            return function(a0, a1, a2, a3) {
                return fn.call(this, a0, a1, a2, a3);
            };
        case 5:
            return function(a0, a1, a2, a3, a4) {
                return fn.call(this, a0, a1, a2, a3, a4);
            };
        case 6:
            return function(a0, a1, a2, a3, a4, a5) {
                return fn.call(this, a0, a1, a2, a3, a4, a5);
            };
        case 7:
            return function(a0, a1, a2, a3, a4, a5, a6) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6);
            };
        case 8:
            return function(a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);
            };
        case 9:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);
            };
        case 10:
            return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);
            };
        default:
            throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
    }
});
exports.default = nAry;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5kpqx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isFunctionJs = require("./internal/_isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _andJs = require("./and.js");
var _andJsDefault = parcelHelpers.interopDefault(_andJs);
var _liftJs = require("./lift.js");
var _liftJsDefault = parcelHelpers.interopDefault(_liftJs);
/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.either, R.allPass, R.and
 * @example
 *
 *      const gt10 = R.gt(R.__, 10)
 *      const lt20 = R.lt(R.__, 20)
 *      const f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 *
 *      R.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)
 *      R.both([false, false, 'a'], [11]); //=> [false, false, 11]
 */ var both = /*#__PURE__*/ (0, _curry2JsDefault.default)(function both(f, g) {
    return (0, _isFunctionJsDefault.default)(f) ? function _both() {
        return f.apply(this, arguments) && g.apply(this, arguments);
    } : (0, _liftJsDefault.default)((0, _andJsDefault.default))(f, g);
});
exports.default = both;

},{"./internal/_curry2.js":"3dy25","./internal/_isFunction.js":"8huhf","./and.js":"iaBbH","./lift.js":"gVw22","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8huhf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isFunction);
function _isFunction(x) {
    var type = Object.prototype.toString.call(x);
    return type === "[object Function]" || type === "[object AsyncFunction]" || type === "[object GeneratorFunction]" || type === "[object AsyncGeneratorFunction]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVw22":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _liftNJs = require("./liftN.js");
var _liftNJsDefault = parcelHelpers.interopDefault(_liftNJs);
/**
 * "lifts" a function of arity >= 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      const madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([100, 200], [30, 40], [5, 6, 7]); //=> [135, 136, 137, 145, 146, 147, 235, 236, 237, 245, 246, 247]
 *
 *      const madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([10, 20], [1], [2, 3], [4], [100, 200]); //=> [117, 217, 118, 218, 127, 227, 128, 228]
 */ var lift = /*#__PURE__*/ (0, _curry1JsDefault.default)(function lift(fn) {
    return (0, _liftNJsDefault.default)(fn.length, fn);
});
exports.default = lift;

},{"./internal/_curry1.js":"kg5MS","./liftN.js":"1eQ2W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eQ2W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _arrayReduceJs = require("./internal/_arrayReduce.js");
var _arrayReduceJsDefault = parcelHelpers.interopDefault(_arrayReduceJs);
var _apJs = require("./ap.js");
var _apJsDefault = parcelHelpers.interopDefault(_apJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      const madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */ var liftN = /*#__PURE__*/ (0, _curry2JsDefault.default)(function liftN(arity, fn) {
    var lifted = (0, _curryNJsDefault.default)(arity, fn);
    return (0, _curryNJsDefault.default)(arity, function() {
        return (0, _arrayReduceJsDefault.default)((0, _apJsDefault.default), (0, _mapJsDefault.default)(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
    });
});
exports.default = liftN;

},{"./internal/_curry2.js":"3dy25","./internal/_arrayReduce.js":"2VaMe","./ap.js":"93976","./curryN.js":"a5Onp","./map.js":"dC8Ps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8bim":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig ((*... -> a), *...) -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      const indentN = R.pipe(
 *        R.repeat(' '),
 *        R.join(''),
 *        R.replace(/^(?!$)/gm)
 *      );
 *
 *      const format = R.converge(
 *        R.call,
 *        [
 *          R.pipe(R.prop('indent'), indentN),
 *          R.prop('value')
 *        ]
 *      );
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */ var call = /*#__PURE__*/ (0, _curry1JsDefault.default)(function call(fn) {
    return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
exports.default = call;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lpW07":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _makeFlatJs = require("./internal/_makeFlat.js");
var _makeFlatJsDefault = parcelHelpers.interopDefault(_makeFlatJs);
var _xchainJs = require("./internal/_xchain.js");
var _xchainJsDefault = parcelHelpers.interopDefault(_xchainJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries.
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * If second argument is a function, `chain(f, g)(x)` is equivalent to `f(g(x), x)`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      const duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */ var chain = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "fantasy-land/chain",
    "chain"
], (0, _xchainJsDefault.default), function chain(fn, monad) {
    if (typeof monad === "function") return function(x) {
        return fn(monad(x))(x);
    };
    return (0, _makeFlatJsDefault.default)(false)((0, _mapJsDefault.default)(fn, monad));
}));
exports.default = chain;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_makeFlat.js":"2pVbr","./internal/_xchain.js":"3uy5f","./map.js":"dC8Ps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2pVbr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_makeFlat);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
function _makeFlat(recursive) {
    return function flatt(list) {
        var value, jlen, j;
        var result = [];
        var idx = 0;
        var ilen = list.length;
        while(idx < ilen){
            if ((0, _isArrayLikeJsDefault.default)(list[idx])) {
                value = recursive ? flatt(list[idx]) : list[idx];
                j = 0;
                jlen = value.length;
                while(j < jlen){
                    result[result.length] = value[j];
                    j += 1;
                }
            } else result[result.length] = list[idx];
            idx += 1;
        }
        return result;
    };
}

},{"./_isArrayLike.js":"1ckj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uy5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xchain);
var _flatCatJs = require("./_flatCat.js");
var _flatCatJsDefault = parcelHelpers.interopDefault(_flatCatJs);
var _xmapJs = require("./_xmap.js");
var _xmapJsDefault = parcelHelpers.interopDefault(_xmapJs);
function _xchain(f) {
    return function(xf) {
        return (0, _xmapJsDefault.default)(f)((0, _flatCatJsDefault.default)(xf));
    };
}

},{"./_flatCat.js":"jh4tp","./_xmap.js":"5yjVL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jh4tp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _forceReducedJs = require("./_forceReduced.js");
var _forceReducedJsDefault = parcelHelpers.interopDefault(_forceReducedJs);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _xArrayReduceJs = require("./_xArrayReduce.js");
var _xArrayReduceJsDefault = parcelHelpers.interopDefault(_xArrayReduceJs);
var _xReduceJs = require("./_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var tInit = "@@transducer/init";
var tStep = "@@transducer/step";
var tResult = "@@transducer/result";
var XPreservingReduced = /*#__PURE__*/ function() {
    function XPreservingReduced(xf) {
        this.xf = xf;
    }
    XPreservingReduced.prototype[tInit] = (0, _xfBaseJsDefault.default).init;
    XPreservingReduced.prototype[tResult] = (0, _xfBaseJsDefault.default).result;
    XPreservingReduced.prototype[tStep] = function(result, input) {
        var ret = this.xf[tStep](result, input);
        return ret["@@transducer/reduced"] ? (0, _forceReducedJsDefault.default)(ret) : ret;
    };
    return XPreservingReduced;
}();
var XFlatCat = /*#__PURE__*/ function() {
    function XFlatCat(xf) {
        this.xf = new XPreservingReduced(xf);
    }
    XFlatCat.prototype[tInit] = (0, _xfBaseJsDefault.default).init;
    XFlatCat.prototype[tResult] = (0, _xfBaseJsDefault.default).result;
    XFlatCat.prototype[tStep] = function(result, input) {
        return !(0, _isArrayLikeJsDefault.default)(input) ? (0, _xArrayReduceJsDefault.default)(this.xf, result, [
            input
        ]) : (0, _xReduceJsDefault.default)(this.xf, result, input);
    };
    return XFlatCat;
}();
var _flatCat = function _xcat(xf) {
    return new XFlatCat(xf);
};
exports.default = _flatCat;

},{"./_forceReduced.js":"5tLe5","./_isArrayLike.js":"1ckj8","./_xArrayReduce.js":"34pnQ","./_xReduce.js":"dqUBX","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5tLe5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_forceReduced);
function _forceReduced(x) {
    return {
        "@@transducer/value": x,
        "@@transducer/reduced": true
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hUzC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */ var clamp = /*#__PURE__*/ (0, _curry3JsDefault.default)(function clamp(min, max, value) {
    if (min > max) throw new Error("min must not be greater than max in clamp(min, max, value)");
    return value < min ? min : value > max ? max : value;
});
exports.default = clamp;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ueus":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneJs = require("./internal/_clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Creates a deep copy of the source that can be used in place of the source
 * object without retaining any references to it.
 * The source object may contain (nested) `Array`s and `Object`s,
 * `Number`s, `String`s, `Boolean`s and `Date`s.
 * `Function`s are assigned by reference rather than copied.
 *
 * Dispatches to a `clone` method if present.
 *
 * Note that if the source object has multiple nodes that share a reference,
 * the returned object will have the same structure, but the references will
 * be pointed to the location within the cloned value.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      const objects = [{}, {}, {}];
 *      const objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */ var clone = /*#__PURE__*/ (0, _curry1JsDefault.default)(function clone(value) {
    return value != null && typeof value.clone === "function" ? value.clone() : (0, _cloneJsDefault.default)(value, true);
});
exports.default = clone;

},{"./internal/_clone.js":"l669u","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l669u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_clone);
var _cloneRegExpJs = require("./_cloneRegExp.js");
var _cloneRegExpJsDefault = parcelHelpers.interopDefault(_cloneRegExpJs);
var _typeJs = require("../type.js");
var _typeJsDefault = parcelHelpers.interopDefault(_typeJs);
function _clone(value, deep, map) {
    map || (map = new _ObjectMap()); // this avoids the slower switch with a quick if decision removing some milliseconds in each run.
    if (_isPrimitive(value)) return value;
    var copy = function copy(copiedValue) {
        // Check for circular and same references on the object graph and return its corresponding clone.
        var cachedCopy = map.get(value);
        if (cachedCopy) return cachedCopy;
        map.set(value, copiedValue);
        for(var key in value)if (Object.prototype.hasOwnProperty.call(value, key)) copiedValue[key] = deep ? _clone(value[key], true, map) : value[key];
        return copiedValue;
    };
    switch((0, _typeJsDefault.default)(value)){
        case "Object":
            return copy(Object.create(Object.getPrototypeOf(value)));
        case "Array":
            return copy([]);
        case "Date":
            return new Date(value.valueOf());
        case "RegExp":
            return (0, _cloneRegExpJsDefault.default)(value);
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
            return value.slice();
        default:
            return value;
    }
}
function _isPrimitive(param) {
    var type = typeof param;
    return param == null || type != "object" && type != "function";
}
var _ObjectMap = /*#__PURE__*/ function() {
    function _ObjectMap() {
        this.map = {};
        this.length = 0;
    }
    _ObjectMap.prototype.set = function(key, value) {
        const hashedKey = this.hash(key);
        let bucket = this.map[hashedKey];
        if (!bucket) this.map[hashedKey] = bucket = [];
        bucket.push([
            key,
            value
        ]);
        this.length += 1;
    };
    _ObjectMap.prototype.hash = function(key) {
        let hashedKey = [];
        for(var value in key)hashedKey.push(Object.prototype.toString.call(key[value]));
        return hashedKey.join();
    };
    _ObjectMap.prototype.get = function(key) {
        /**
     * depending on the number of objects to be cloned is faster to just iterate over the items in the map just because the hash function is so costly,
     * on my tests this number is 180, anything above that using the hash function is faster.
     */ if (this.length <= 180) {
            for(const p in this.map){
                const bucket = this.map[p];
                for(let i = 0; i < bucket.length; i += 1){
                    const element = bucket[i];
                    if (element[0] === key) return element[1];
                }
            }
            return;
        }
        const hashedKey = this.hash(key);
        const bucket = this.map[hashedKey];
        if (!bucket) return;
        for(let i = 0; i < bucket.length; i += 1){
            const element = bucket[i];
            if (element[0] === key) return element[1];
        }
    };
    return _ObjectMap;
}();

},{"./_cloneRegExp.js":"apVGW","../type.js":"fAM3S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"apVGW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_cloneRegExp);
function _cloneRegExp(pattern) {
    return new RegExp(pattern.source, pattern.flags ? pattern.flags : (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : "") + (pattern.dotAll ? "s" : ""));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k6MOn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Splits a list into sub-lists, based on the result of calling a key-returning function on each element,
 * and grouping the results according to values returned.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> [[b]]
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} list The array to group
 * @return {Array}
 *    An array of arrays where each sub-array contains items for which
 *    the String-returning function has returned the same value.
 * @see R.groupBy, R.partition
 * @example
 *      R.collectBy(R.prop('type'), [
 *        {type: 'breakfast', item: '☕️'},
 *        {type: 'lunch', item: '🌯'},
 *        {type: 'dinner', item: '🍝'},
 *        {type: 'breakfast', item: '🥐'},
 *        {type: 'lunch', item: '🍕'}
 *      ]);
 *
 *      // [ [ {type: 'breakfast', item: '☕️'},
 *      //     {type: 'breakfast', item: '🥐'} ],
 *      //   [ {type: 'lunch', item: '🌯'},
 *      //     {type: 'lunch', item: '🍕'} ],
 *      //   [ {type: 'dinner', item: '🍝'} ] ]
 */ var collectBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(function collectBy(fn, list) {
    var group = (0, _reduceJsDefault.default)(function(o, x) {
        var tag = fn(x);
        if (o[tag] === undefined) o[tag] = [];
        o[tag].push(x);
        return o;
    }, {}, list);
    var newList = [];
    for(var tag in group)newList.push(group[tag]);
    return newList;
});
exports.default = collectBy;

},{"./internal/_curry2.js":"3dy25","./internal/_reduce.js":"8Bdru","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9IDUc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b) -> Boolean) -> ((a, b) -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      const byAge = R.comparator((a, b) => a.age < b.age);
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByIncreasingAge = R.sort(byAge, people);
 *        //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]
 */ var comparator = /*#__PURE__*/ (0, _curry1JsDefault.default)(function comparator(pred) {
    return function(a, b) {
        return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
    };
});
exports.default = comparator;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VZZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _liftJs = require("./lift.js");
var _liftJsDefault = parcelHelpers.interopDefault(_liftJs);
var _notJs = require("./not.js");
var _notJsDefault = parcelHelpers.interopDefault(_notJs);
/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      const isNotNil = R.complement(R.isNil);
 *      R.isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      R.isNil(7); //=> false
 *      isNotNil(7); //=> true
 */ var complement = /*#__PURE__*/ (0, _liftJsDefault.default)((0, _notJsDefault.default));
exports.default = complement;

},{"./lift.js":"gVw22","./not.js":"jXux2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXux2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */ var not = /*#__PURE__*/ (0, _curry1JsDefault.default)(function not(a) {
    return !a;
});
exports.default = not;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PR6Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>compose);
var _pipeJs = require("./pipe.js");
var _pipeJsDefault = parcelHelpers.interopDefault(_pipeJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
function compose() {
    if (arguments.length === 0) throw new Error("compose requires at least one argument");
    return (0, _pipeJsDefault.default).apply(this, (0, _reverseJsDefault.default)(arguments));
}

},{"./pipe.js":"e4vNV","./reverse.js":"8tp0Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4vNV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pipe);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _pipeJs = require("./internal/_pipe.js");
var _pipeJsDefault = parcelHelpers.interopDefault(_pipeJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _tailJs = require("./tail.js");
var _tailJsDefault = parcelHelpers.interopDefault(_tailJs);
function pipe() {
    if (arguments.length === 0) throw new Error("pipe requires at least one argument");
    return (0, _arityJsDefault.default)(arguments[0].length, (0, _reduceJsDefault.default)((0, _pipeJsDefault.default), arguments[0], (0, _tailJsDefault.default)(arguments)));
}

},{"./internal/_arity.js":"k5H5S","./internal/_pipe.js":"8dViZ","./reduce.js":"8LF8v","./tail.js":"aXERB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dViZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_pipe);
function _pipe(f, g) {
    return function() {
        return g.call(this, f.apply(this, arguments));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXERB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */ var tail = /*#__PURE__*/ (0, _curry1JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("tail", /*#__PURE__*/ (0, _sliceJsDefault.default)(1, Infinity)));
exports.default = tail;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry1.js":"kg5MS","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMuNW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_checkForMethod);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
function _checkForMethod(methodname, fn) {
    return function() {
        var length = arguments.length;
        if (length === 0) return fn();
        var obj = arguments[length - 1];
        return (0, _isArrayJsDefault.default)(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
}

},{"./_isArray.js":"3Yv3G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9rCZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */ var slice = /*#__PURE__*/ (0, _curry3JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("slice", function slice(fromIndex, toIndex, list) {
    return Array.prototype.slice.call(list, fromIndex, toIndex);
}));
exports.default = slice;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tp0Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isStringJs = require("./internal/_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */ var reverse = /*#__PURE__*/ (0, _curry1JsDefault.default)(function reverse(list) {
    return (0, _isStringJsDefault.default)(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
});
exports.default = reverse;

},{"./internal/_curry1.js":"kg5MS","./internal/_isString.js":"a1eoi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17L5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _pipeWithJs = require("./pipeWith.js");
var _pipeWithJsDefault = parcelHelpers.interopDefault(_pipeWithJs);
var _reverseJs = require("./reverse.js");
var _reverseJsDefault = parcelHelpers.interopDefault(_reverseJs);
/**
 * Performs right-to-left function composition using transforming function. The last function may have
 * any arity; the remaining functions must be unary. Unlike `compose`, functions are passed in an array.
 *
 * **Note:** The result of composeWith is not automatically curried. Transforming function is not used
 * on the last argument.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [(y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)]) -> ((a, b, ..., n) -> z)
 * @param {Function} transformer The transforming function
 * @param {Array} functions The functions to compose
 * @return {Function}
 * @see R.compose, R.pipeWith
 * @example
 *
 *      const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));
 *
 *      composeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2
 *      composeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined
 *
 * @symb R.composeWith(f)([g, h, i])(...args) = f(g, f(h, i(...args)))
 */ var composeWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function composeWith(xf, list) {
    return (0, _pipeWithJsDefault.default).apply(this, [
        xf,
        (0, _reverseJsDefault.default)(list)
    ]);
});
exports.default = composeWith;

},{"./internal/_curry2.js":"3dy25","./pipeWith.js":"jCa4A","./reverse.js":"8tp0Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jCa4A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _headJs = require("./head.js");
var _headJsDefault = parcelHelpers.interopDefault(_headJs);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _tailJs = require("./tail.js");
var _tailJsDefault = parcelHelpers.interopDefault(_tailJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * Performs left-to-right function composition using transforming function. The first function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of pipeWith is not automatically curried. Transforming function is not used on the
 * first argument.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((* -> *), [((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)]) -> ((a, b, ..., n) -> z)
 * @param {Function} transformer The transforming function
 * @param {Array} functions The functions to pipe
 * @return {Function}
 * @see R.composeWith, R.pipe
 * @example
 *
 *      const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));
 *      const f = pipeWhileNotNil([Math.pow, R.negate, R.inc])
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipeWith(f)([g, h, i])(...args) = f(i, f(h, g(...args)))
 */ var pipeWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pipeWith(xf, list) {
    if (list.length <= 0) return 0, _identityJsDefault.default;
    var headList = (0, _headJsDefault.default)(list);
    var tailList = (0, _tailJsDefault.default)(list);
    return (0, _arityJsDefault.default)(headList.length, function() {
        return (0, _reduceJsDefault.default)(function(result, f) {
            return xf.call(this, f, result);
        }, headList.apply(this, arguments), tailList);
    });
});
exports.default = pipeWith;

},{"./internal/_arity.js":"k5H5S","./internal/_curry2.js":"3dy25","./head.js":"ljBYt","./internal/_reduce.js":"8Bdru","./tail.js":"aXERB","./identity.js":"iXdOZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljBYt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */ var head = /*#__PURE__*/ (0, _nthJsDefault.default)(0);
exports.default = head;

},{"./nth.js":"gnCZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iXdOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _identityJs = require("./internal/_identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      const obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */ var identity = /*#__PURE__*/ (0, _curry1JsDefault.default)((0, _identityJsDefault.default));
exports.default = identity;

},{"./internal/_curry1.js":"kg5MS","./internal/_identity.js":"l3ABm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l3ABm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_identity);
function _identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eiimS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isFunctionJs = require("./internal/_isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _isStringJs = require("./internal/_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 * Can also concatenate two members of a [fantasy-land
 * compatible semigroup](https://github.com/fantasyland/fantasy-land#semigroup).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */ var concat = /*#__PURE__*/ (0, _curry2JsDefault.default)(function concat(a, b) {
    if ((0, _isArrayJsDefault.default)(a)) {
        if ((0, _isArrayJsDefault.default)(b)) return a.concat(b);
        throw new TypeError((0, _toStringJsDefault.default)(b) + " is not an array");
    }
    if ((0, _isStringJsDefault.default)(a)) {
        if ((0, _isStringJsDefault.default)(b)) return a + b;
        throw new TypeError((0, _toStringJsDefault.default)(b) + " is not a string");
    }
    if (a != null && (0, _isFunctionJsDefault.default)(a["fantasy-land/concat"])) return a["fantasy-land/concat"](b);
    if (a != null && (0, _isFunctionJsDefault.default)(a.concat)) return a.concat(b);
    throw new TypeError((0, _toStringJsDefault.default)(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
exports.default = concat;

},{"./internal/_curry2.js":"3dy25","./internal/_isArray.js":"3Yv3G","./internal/_isFunction.js":"8huhf","./internal/_isString.js":"a1eoi","./toString.js":"8yWci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jpIBZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * **Please note**: This is not a direct substitute for a `switch` statement.
 * Remember that both elements of every pair passed to `cond` are *functions*,
 * and `cond` returns a function.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @see R.ifElse, R.unless, R.when
 * @example
 *
 *      const fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */ var cond = /*#__PURE__*/ (0, _curry1JsDefault.default)(function cond(pairs) {
    var arity = (0, _reduceJsDefault.default)((0, _maxJsDefault.default), 0, (0, _mapJsDefault.default)(function(pair) {
        return pair[0].length;
    }, pairs));
    return (0, _arityJsDefault.default)(arity, function() {
        var idx = 0;
        while(idx < pairs.length){
            if (pairs[idx][0].apply(this, arguments)) return pairs[idx][1].apply(this, arguments);
            idx += 1;
        }
    });
});
exports.default = cond;

},{"./internal/_arity.js":"k5H5S","./internal/_curry1.js":"kg5MS","./map.js":"dC8Ps","./max.js":"8Yjau","./reduce.js":"8LF8v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6xWvA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _constructNJs = require("./constructN.js");
var _constructNJsDefault = parcelHelpers.interopDefault(_constructNJs);
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      const AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      const animalTypes = ["Lion", "Tiger", "Bear"];
 *      const animalSighting = R.invoker(0, 'sighting');
 *      const sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */ var construct = /*#__PURE__*/ (0, _curry1JsDefault.default)(function construct(Fn) {
    return (0, _constructNJsDefault.default)(Fn.length, Fn);
});
exports.default = construct;

},{"./internal/_curry1.js":"kg5MS","./constructN.js":"9p8Df","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9p8Df":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _curryJs = require("./curry.js");
var _curryJsDefault = parcelHelpers.interopDefault(_curryJs);
var _nAryJs = require("./nAry.js");
var _nAryJsDefault = parcelHelpers.interopDefault(_nAryJs);
/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      }
 *
 *      Salad.prototype.recipe = function() {
 *        const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
 *        return R.join('\n', instructions);
 *      };
 *
 *      const ThreeLayerSalad = R.constructN(3, Salad);
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      const salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');
 *
 *      console.log(salad.recipe());
 *      // Add a dollop of Mayonnaise
 *      // Add a dollop of Potato Chips
 *      // Add a dollop of Ketchup
 */ var constructN = /*#__PURE__*/ (0, _curry2JsDefault.default)(function constructN(n, Fn) {
    if (n > 10) throw new Error("Constructor with greater than ten arguments");
    if (n === 0) return function() {
        return new Fn();
    };
    return (0, _curryJsDefault.default)((0, _nAryJsDefault.default)(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
        switch(n){
            case 1:
                return new Fn($0);
            case 2:
                return new Fn($0, $1);
            case 3:
                return new Fn($0, $1, $2);
            case 4:
                return new Fn($0, $1, $2, $3);
            case 5:
                return new Fn($0, $1, $2, $3, $4);
            case 6:
                return new Fn($0, $1, $2, $3, $4, $5);
            case 7:
                return new Fn($0, $1, $2, $3, $4, $5, $6);
            case 8:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
            case 9:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
            case 10:
                return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
        }
    }));
});
exports.default = constructN;

},{"./internal/_curry2.js":"3dy25","./curry.js":"kqrwZ","./nAry.js":"eJZWa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqrwZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * Please note that default parameters don't count towards a [function arity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
 * and therefore `curry` won't work well with those:
 *
 * ```
 * const h = R.curry((a, b, c = 2) => a + b + c);
 *
 * h(40);
 * //=> function (waits for `b`)
 *
 * h(39)(1);
 * //=> 42
 *
 * h(1)(2, 3);
 * //=> 6
 *
 * h(1)(2)(7);
 * //=> Error! (`3` is not a function!)
 * ```
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */ var curry = /*#__PURE__*/ (0, _curry1JsDefault.default)(function curry(fn) {
    return (0, _curryNJsDefault.default)(fn.length, fn);
});
exports.default = curry;

},{"./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hio2A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mapJs = require("./internal/_map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
var _pluckJs = require("./pluck.js");
var _pluckJsDefault = parcelHelpers.interopDefault(_pluckJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. The arity of the new function is the same as the arity of
 * the longest branching function. When invoked, this new function is applied
 * to some arguments, and each branching function is applied to those same
 * arguments. The results of each branching function are passed as arguments
 * to the converging function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [((a, b, ...) -> x1), ((a, b, ...) -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      const average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      const strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */ var converge = /*#__PURE__*/ (0, _curry2JsDefault.default)(function converge(after, fns) {
    return (0, _curryNJsDefault.default)((0, _reduceJsDefault.default)((0, _maxJsDefault.default), 0, (0, _pluckJsDefault.default)("length", fns)), function() {
        var args = arguments;
        var context = this;
        return after.apply(context, (0, _mapJsDefault.default)(function(fn) {
            return fn.apply(context, args);
        }, fns));
    });
});
exports.default = converge;

},{"./internal/_curry2.js":"3dy25","./internal/_map.js":"gvTkR","./curryN.js":"a5Onp","./max.js":"8Yjau","./pluck.js":"hh8KA","./reduce.js":"8LF8v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fpSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reduceJs = require("./internal/_reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
var _curryJs = require("./curry.js");
var _curryJsDefault = parcelHelpers.interopDefault(_curryJs);
/**
 * Returns the number of items in a given `list` matching the predicate `f`
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} predicate to match items against
 * @return {Array} list of items to count in
 * @example
 *
 *      const even = x => x % 2 == 0;
 *
 *      R.count(even, [1, 2, 3, 4, 5]); // => 2
 *      R.map(R.count(even), [[1, 1, 1], [2, 3, 4, 5], [6]]); // => [0, 2, 1]
 */ var count = /*#__PURE__*/ (0, _curryJsDefault.default)(function(pred, list) {
    return (0, _reduceJsDefault.default)(function(a, e) {
        return pred(e) ? a + 1 : a;
    }, 0, list);
});
exports.default = count;

},{"./internal/_reduce.js":"8Bdru","./curry.js":"kqrwZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bdCSL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */ var countBy = /*#__PURE__*/ (0, _reduceByJsDefault.default)(function(acc, elem) {
    return acc + 1;
}, 0);
exports.default = countBy;

},{"./reduceBy.js":"7nDTY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nDTY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneJs = require("./internal/_clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _reducedJs = require("./internal/_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xReduceJs = require("./internal/_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var _xreduceByJs = require("./internal/_xreduceBy.js");
var _xreduceByJsDefault = parcelHelpers.interopDefault(_xreduceByJs);
var _xwrapJs = require("./internal/_xwrap.js");
var _xwrapJsDefault = parcelHelpers.interopDefault(_xwrapJs);
/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * The value function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to short circuit the iteration.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce, R.reduced
 * @example
 *
 *      const groupNames = (acc, {name}) => acc.concat(name)
 *      const toGrade = ({score}) =>
 *        score < 65 ? 'F' :
 *        score < 70 ? 'D' :
 *        score < 80 ? 'C' :
 *        score < 90 ? 'B' : 'A'
 *
 *      var students = [
 *        {name: 'Abby', score: 83},
 *        {name: 'Bart', score: 62},
 *        {name: 'Curt', score: 88},
 *        {name: 'Dora', score: 92},
 *      ]
 *
 *      reduceBy(groupNames, [], toGrade, students)
 *      //=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}
 */ var reduceBy = /*#__PURE__*/ (0, _curryNJsDefault.default)(4, [], /*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xreduceByJsDefault.default), function reduceBy(valueFn, valueAcc, keyFn, list) {
    var xf = (0, _xwrapJsDefault.default)(function(acc, elt) {
        var key = keyFn(elt);
        var value = valueFn((0, _hasJsDefault.default)(key, acc) ? acc[key] : (0, _cloneJsDefault.default)(valueAcc, false), elt);
        if (value && value["@@transducer/reduced"]) return (0, _reducedJsDefault.default)(acc);
        acc[key] = value;
        return acc;
    });
    return (0, _xReduceJsDefault.default)(xf, {}, list);
}));
exports.default = reduceBy;

},{"./internal/_clone.js":"l669u","./internal/_curryN.js":"epMsX","./internal/_dispatchable.js":"kIEUx","./internal/_has.js":"armmH","./internal/_reduced.js":"lGWA2","./internal/_xReduce.js":"dqUBX","./internal/_xreduceBy.js":"9YPgr","./internal/_xwrap.js":"cerBU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YPgr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xreduceBy);
var _cloneJs = require("./_clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var _hasJs = require("./_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XReduceBy = /*#__PURE__*/ function() {
    function XReduceBy(valueFn, valueAcc, keyFn, xf) {
        this.valueFn = valueFn;
        this.valueAcc = valueAcc;
        this.keyFn = keyFn;
        this.xf = xf;
        this.inputs = {};
    }
    XReduceBy.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XReduceBy.prototype["@@transducer/result"] = function(result) {
        var key;
        for(key in this.inputs)if ((0, _hasJsDefault.default)(key, this.inputs)) {
            result = this.xf["@@transducer/step"](result, this.inputs[key]);
            if (result["@@transducer/reduced"]) {
                result = result["@@transducer/value"];
                break;
            }
        }
        this.inputs = null;
        return this.xf["@@transducer/result"](result);
    };
    XReduceBy.prototype["@@transducer/step"] = function(result, input) {
        var key = this.keyFn(input);
        this.inputs[key] = this.inputs[key] || [
            key,
            (0, _cloneJsDefault.default)(this.valueAcc, false)
        ];
        this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
        return result;
    };
    return XReduceBy;
}();
function _xreduceBy(valueFn, valueAcc, keyFn) {
    return function(xf) {
        return new XReduceBy(valueFn, valueAcc, keyFn, xf);
    };
}

},{"./_clone.js":"l669u","./_has.js":"armmH","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"deteL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */ var dec = /*#__PURE__*/ (0, _addJsDefault.default)(-1);
exports.default = dec;

},{"./add.js":"i4R4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5gJsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      const defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42(false);  //=> false
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */ var defaultTo = /*#__PURE__*/ (0, _curry2JsDefault.default)(function defaultTo(d, v) {
    return v == null || v !== v ? d : v;
});
exports.default = defaultTo;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7dFUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      const byAge = R.descend(R.prop('age'));
 *      const people = [
 *        { name: 'Emma', age: 70 },
 *        { name: 'Peter', age: 78 },
 *        { name: 'Mikhail', age: 62 },
 *      ];
 *      const peopleByOldestFirst = R.sort(byAge, people);
 *        //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]
 */ var descend = /*#__PURE__*/ (0, _curry3JsDefault.default)(function descend(fn, a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa > bb ? -1 : aa < bb ? 1 : 0;
});
exports.default = descend;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qbIf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _setJs = require("./internal/_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */ var difference = /*#__PURE__*/ (0, _curry2JsDefault.default)(function difference(first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    var secondLen = second.length;
    var toFilterOut = new (0, _setJsDefault.default)();
    for(var i = 0; i < secondLen; i += 1)toFilterOut.add(second[i]);
    while(idx < firstLen){
        if (toFilterOut.add(first[idx])) out[out.length] = first[idx];
        idx += 1;
    }
    return out;
});
exports.default = difference;

},{"./internal/_curry2.js":"3dy25","./internal/_Set.js":"4ERsU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ERsU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _includesJs = require("./_includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _Set = /*#__PURE__*/ function() {
    function _Set() {
        /* globals Set */ this._nativeSet = typeof Set === "function" ? new Set() : null;
        this._items = {};
    }
    // until we figure out why jsdoc chokes on this
    // @param item The item to add to the Set
    // @returns {boolean} true if the item did not exist prior, otherwise false
    //
    _Set.prototype.add = function(item) {
        return !hasOrAdd(item, true, this);
    }; //
    // @param item The item to check for existence in the Set
    // @returns {boolean} true if the item exists in the Set, otherwise false
    //
    _Set.prototype.has = function(item) {
        return hasOrAdd(item, false, this);
    }; //
    // Combines the logic for checking whether an item is a member of the set and
    // for adding a new item to the set.
    //
    // @param item       The item to check or add to the Set instance.
    // @param shouldAdd  If true, the item will be added to the set if it doesn't
    //                   already exist.
    // @param set        The set instance to check or add to.
    // @return {boolean} true if the item already existed, otherwise false.
    //
    return _Set;
}();
function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch(type){
        case "string":
        case "number":
            // distinguish between +0 and -0
            if (item === 0 && 1 / item === -Infinity) {
                if (set._items["-0"]) return true;
                else {
                    if (shouldAdd) set._items["-0"] = true;
                    return false;
                }
            } // these types can all utilise the native Set
            if (set._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set._nativeSet.size;
                    set._nativeSet.add(item);
                    newSize = set._nativeSet.size;
                    return newSize === prevSize;
                } else return set._nativeSet.has(item);
            } else {
                if (!(type in set._items)) {
                    if (shouldAdd) {
                        set._items[type] = {};
                        set._items[type][item] = true;
                    }
                    return false;
                } else if (item in set._items[type]) return true;
                else {
                    if (shouldAdd) set._items[type][item] = true;
                    return false;
                }
            }
        case "boolean":
            // set._items['boolean'] holds a two element array
            // representing [ falseExists, trueExists ]
            if (type in set._items) {
                var bIdx = item ? 1 : 0;
                if (set._items[type][bIdx]) return true;
                else {
                    if (shouldAdd) set._items[type][bIdx] = true;
                    return false;
                }
            } else {
                if (shouldAdd) set._items[type] = item ? [
                    false,
                    true
                ] : [
                    true,
                    false
                ];
                return false;
            }
        case "function":
            // compare functions for reference equality
            if (set._nativeSet !== null) {
                if (shouldAdd) {
                    prevSize = set._nativeSet.size;
                    set._nativeSet.add(item);
                    newSize = set._nativeSet.size;
                    return newSize === prevSize;
                } else return set._nativeSet.has(item);
            } else {
                if (!(type in set._items)) {
                    if (shouldAdd) set._items[type] = [
                        item
                    ];
                    return false;
                }
                if (!(0, _includesJsDefault.default)(item, set._items[type])) {
                    if (shouldAdd) set._items[type].push(item);
                    return false;
                }
                return true;
            }
        case "undefined":
            if (set._items[type]) return true;
            else {
                if (shouldAdd) set._items[type] = true;
                return false;
            }
        case "object":
            if (item === null) {
                if (!set._items["null"]) {
                    if (shouldAdd) set._items["null"] = true;
                    return false;
                }
                return true;
            }
        /* falls through */ default:
            // reduce the search size of heterogeneous sets by creating buckets
            // for each type.
            type = Object.prototype.toString.call(item);
            if (!(type in set._items)) {
                if (shouldAdd) set._items[type] = [
                    item
                ];
                return false;
            } // scan through all previously applied items
            if (!(0, _includesJsDefault.default)(item, set._items[type])) {
                if (shouldAdd) set._items[type].push(item);
                return false;
            }
            return true;
    }
} // A simple Set type that honours R.equals semantics
exports.default = _Set;

},{"./_includes.js":"5cnHY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8VN9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _includesWithJs = require("./internal/_includesWith.js");
var _includesWithJsDefault = parcelHelpers.interopDefault(_includesWithJs);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      const cmp = (x, y) => x.a === y.a;
 *      const l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      const l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 *
 *      R.differenceWith(R.equals, [1, 2, 3, 3, 3], []); //=> [1, 2, 3]
 *      R.differenceWith(R.equals, [1, 2, 3, 3, 3], [1]); //=> [2, 3]
 */ var differenceWith = /*#__PURE__*/ (0, _curry3JsDefault.default)(function differenceWith(pred, first, second) {
    var out = [];
    var idx = 0;
    var firstLen = first.length;
    while(idx < firstLen){
        if (!(0, _includesWithJsDefault.default)(pred, first[idx], second) && !(0, _includesWithJsDefault.default)(pred, first[idx], out)) out.push(first[idx]);
        idx += 1;
    }
    return out;
});
exports.default = differenceWith;

},{"./internal/_includesWith.js":"19ZT4","./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ezve":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dissocPathJs = require("./dissocPath.js");
var _dissocPathJsDefault = parcelHelpers.interopDefault(_dissocPathJs);
/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc, R.omit
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */ var dissoc = /*#__PURE__*/ (0, _curry2JsDefault.default)(function dissoc(prop, obj) {
    return (0, _dissocPathJsDefault.default)([
        prop
    ], obj);
});
exports.default = dissoc;

},{"./internal/_curry2.js":"3dy25","./dissocPath.js":"9yAOL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yAOL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dissocJs = require("./internal/_dissoc.js");
var _dissocJsDefault = parcelHelpers.interopDefault(_dissocJs);
var _isIntegerJs = require("./internal/_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _assocJs = require("./assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
/**
 * Makes a shallow clone of an object. Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive
 * properties are copied by reference.
 *
 * @private
 * @param {String|Integer} prop The prop operating
 * @param {Object|Array} obj The object to clone
 * @return {Object|Array} A new object equivalent to the original.
 */ function _shallowCloneObject(prop, obj) {
    if ((0, _isIntegerJsDefault.default)(prop) && (0, _isArrayJsDefault.default)(obj)) return [].concat(obj);
    var result = {};
    for(var p in obj)result[p] = obj[p];
    return result;
}
/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */ var dissocPath = /*#__PURE__*/ (0, _curry2JsDefault.default)(function dissocPath(path, obj) {
    if (obj == null) return obj;
    switch(path.length){
        case 0:
            return obj;
        case 1:
            return (0, _dissocJsDefault.default)(path[0], obj);
        default:
            var head = path[0];
            var tail = Array.prototype.slice.call(path, 1);
            if (obj[head] == null) return _shallowCloneObject(head, obj);
            else return (0, _assocJsDefault.default)(head, dissocPath(tail, obj[head]), obj);
    }
});
exports.default = dissocPath;

},{"./internal/_curry2.js":"3dy25","./internal/_dissoc.js":"hye1t","./internal/_isInteger.js":"3AbYy","./internal/_isArray.js":"3Yv3G","./assoc.js":"9Gdur","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hye1t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_dissoc);
var _isIntegerJs = require("./_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _removeJs = require("../remove.js");
var _removeJsDefault = parcelHelpers.interopDefault(_removeJs);
function _dissoc(prop, obj) {
    if (obj == null) return obj;
    if ((0, _isIntegerJsDefault.default)(prop) && (0, _isArrayJsDefault.default)(obj)) return (0, _removeJsDefault.default)(prop, 1, obj);
    var result = {};
    for(var p in obj)result[p] = obj[p];
    delete result[prop];
    return result;
}

},{"./_isInteger.js":"3AbYy","./_isArray.js":"3Yv3G","../remove.js":"cmpvU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmpvU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @see R.without
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */ var remove = /*#__PURE__*/ (0, _curry3JsDefault.default)(function remove(start, count, list) {
    var result = Array.prototype.slice.call(list, 0);
    result.splice(start, count);
    return result;
});
exports.default = remove;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FVWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      const half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      const reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */ var divide = /*#__PURE__*/ (0, _curry2JsDefault.default)(function divide(a, b) {
    return a / b;
});
exports.default = divide;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jRr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xdropJs = require("./internal/_xdrop.js");
var _xdropJsDefault = parcelHelpers.interopDefault(_xdropJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */ var drop = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "drop"
], (0, _xdropJsDefault.default), function drop(n, xs) {
    return (0, _sliceJsDefault.default)(Math.max(0, n), Infinity, xs);
}));
exports.default = drop;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xdrop.js":"9UeWA","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UeWA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xdrop);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XDrop = /*#__PURE__*/ function() {
    function XDrop(n, xf) {
        this.xf = xf;
        this.n = n;
    }
    XDrop.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XDrop.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XDrop.prototype["@@transducer/step"] = function(result, input) {
        if (this.n > 0) {
            this.n -= 1;
            return result;
        }
        return this.xf["@@transducer/step"](result, input);
    };
    return XDrop;
}();
function _xdrop(n) {
    return function(xf) {
        return new XDrop(n, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9sDBT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _dropLastJs = require("./internal/_dropLast.js");
var _dropLastJsDefault = parcelHelpers.interopDefault(_dropLastJs);
var _xdropLastJs = require("./internal/_xdropLast.js");
var _xdropLastJsDefault = parcelHelpers.interopDefault(_xdropLastJs);
/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */ var dropLast = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xdropLastJsDefault.default), (0, _dropLastJsDefault.default)));
exports.default = dropLast;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_dropLast.js":"dLA00","./internal/_xdropLast.js":"8mT7C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLA00":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dropLast);
var _takeJs = require("../take.js");
var _takeJsDefault = parcelHelpers.interopDefault(_takeJs);
function dropLast(n, xs) {
    return (0, _takeJsDefault.default)(n < xs.length ? xs.length - n : 0, xs);
}

},{"../take.js":"1Kn5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Kn5O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xtakeJs = require("./internal/_xtake.js");
var _xtakeJsDefault = parcelHelpers.interopDefault(_xtakeJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      const personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      const takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */ var take = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "take"
], (0, _xtakeJsDefault.default), function take(n, xs) {
    return (0, _sliceJsDefault.default)(0, n < 0 ? Infinity : n, xs);
}));
exports.default = take;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xtake.js":"5rol2","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rol2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xtake);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XTake = /*#__PURE__*/ function() {
    function XTake(n, xf) {
        this.xf = xf;
        this.n = n;
        this.i = 0;
    }
    XTake.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XTake.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XTake.prototype["@@transducer/step"] = function(result, input) {
        this.i += 1;
        var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
        return this.n >= 0 && this.i >= this.n ? (0, _reducedJsDefault.default)(ret) : ret;
    };
    return XTake;
}();
function _xtake(n) {
    return function(xf) {
        return new XTake(n, xf);
    };
}

},{"./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mT7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xdropLast);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XDropLast = /*#__PURE__*/ function() {
    function XDropLast(n, xf) {
        if (n <= 0) return xf;
        this.xf = xf;
        this.pos = 0;
        this.full = false;
        this.acc = new Array(n);
    }
    XDropLast.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XDropLast.prototype["@@transducer/result"] = function(result) {
        this.acc = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLast.prototype["@@transducer/step"] = function(result, input) {
        if (this.full) result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
        this.store(input);
        return result;
    };
    XDropLast.prototype.store = function(input) {
        this.acc[this.pos] = input;
        this.pos += 1;
        if (this.pos === this.acc.length) {
            this.pos = 0;
            this.full = true;
        }
    };
    return XDropLast;
}();
function _xdropLast(n) {
    return function(xf) {
        return new XDropLast(n, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7O8fW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _dropLastWhileJs = require("./internal/_dropLastWhile.js");
var _dropLastWhileJsDefault = parcelHelpers.interopDefault(_dropLastWhileJs);
var _xdropLastWhileJs = require("./internal/_xdropLastWhile.js");
var _xdropLastWhileJsDefault = parcelHelpers.interopDefault(_xdropLastWhileJs);
/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} predicate The function to be called on each element
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      const lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 *
 *      R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
 */ var dropLastWhile = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xdropLastWhileJsDefault.default), (0, _dropLastWhileJsDefault.default)));
exports.default = dropLastWhile;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_dropLastWhile.js":"cihX3","./internal/_xdropLastWhile.js":"3f2C1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cihX3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>dropLastWhile);
var _sliceJs = require("../slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
function dropLastWhile(pred, xs) {
    var idx = xs.length - 1;
    while(idx >= 0 && pred(xs[idx]))idx -= 1;
    return (0, _sliceJsDefault.default)(0, idx + 1, xs);
}

},{"../slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3f2C1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xdropLastWhile);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var _xReduceJs = require("./_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var XDropLastWhile = /*#__PURE__*/ function() {
    function XDropLastWhile(fn, xf) {
        this.f = fn;
        this.retained = [];
        this.xf = xf;
    }
    XDropLastWhile.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XDropLastWhile.prototype["@@transducer/result"] = function(result) {
        this.retained = null;
        return this.xf["@@transducer/result"](result);
    };
    XDropLastWhile.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.retain(result, input) : this.flush(result, input);
    };
    XDropLastWhile.prototype.flush = function(result, input) {
        result = (0, _xReduceJsDefault.default)(this.xf, result, this.retained);
        this.retained = [];
        return this.xf["@@transducer/step"](result, input);
    };
    XDropLastWhile.prototype.retain = function(result, input) {
        this.retained.push(input);
        return result;
    };
    return XDropLastWhile;
}();
function _xdropLastWhile(fn) {
    return function(xf) {
        return new XDropLastWhile(fn, xf);
    };
}

},{"./_xfBase.js":"f9lll","./_xReduce.js":"dqUBX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5nFjS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xdropRepeatsWithJs = require("./internal/_xdropRepeatsWith.js");
var _xdropRepeatsWithJsDefault = parcelHelpers.interopDefault(_xdropRepeatsWithJs);
var _dropRepeatsWithJs = require("./dropRepeatsWith.js");
var _dropRepeatsWithJsDefault = parcelHelpers.interopDefault(_dropRepeatsWithJs);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */ var dropRepeats = /*#__PURE__*/ (0, _curry1JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], function() {
    return (0, _xdropRepeatsWithJsDefault.default)((0, _equalsJsDefault.default));
}, /*#__PURE__*/ (0, _dropRepeatsWithJsDefault.default)((0, _equalsJsDefault.default))));
exports.default = dropRepeats;

},{"./internal/_curry1.js":"kg5MS","./internal/_dispatchable.js":"kIEUx","./internal/_xdropRepeatsWith.js":"16Rfh","./dropRepeatsWith.js":"fvKjc","./equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16Rfh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xdropRepeatsWith);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XDropRepeatsWith = /*#__PURE__*/ function() {
    function XDropRepeatsWith(pred, xf) {
        this.xf = xf;
        this.pred = pred;
        this.lastValue = undefined;
        this.seenFirstValue = false;
    }
    XDropRepeatsWith.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XDropRepeatsWith.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XDropRepeatsWith.prototype["@@transducer/step"] = function(result, input) {
        var sameAsLast = false;
        if (!this.seenFirstValue) this.seenFirstValue = true;
        else if (this.pred(this.lastValue, input)) sameAsLast = true;
        this.lastValue = input;
        return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
    };
    return XDropRepeatsWith;
}();
function _xdropRepeatsWith(pred) {
    return function(xf) {
        return new XDropRepeatsWith(pred, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvKjc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xdropRepeatsWithJs = require("./internal/_xdropRepeatsWith.js");
var _xdropRepeatsWithJsDefault = parcelHelpers.interopDefault(_xdropRepeatsWithJs);
var _lastJs = require("./last.js");
var _lastJsDefault = parcelHelpers.interopDefault(_lastJs);
/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */ var dropRepeatsWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xdropRepeatsWithJsDefault.default), function dropRepeatsWith(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;
    if (len !== 0) {
        result[0] = list[0];
        while(idx < len){
            if (!pred((0, _lastJsDefault.default)(result), list[idx])) result[result.length] = list[idx];
            idx += 1;
        }
    }
    return result;
}));
exports.default = dropRepeatsWith;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xdropRepeatsWith.js":"16Rfh","./last.js":"58clD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"58clD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */ var last = /*#__PURE__*/ (0, _nthJsDefault.default)(-1);
exports.default = last;

},{"./nth.js":"gnCZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFMbh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xdropRepeatsWithJs = require("./internal/_xdropRepeatsWith.js");
var _xdropRepeatsWithJsDefault = parcelHelpers.interopDefault(_xdropRepeatsWithJs);
var _dropRepeatsWithJs = require("./dropRepeatsWith.js");
var _dropRepeatsWithJsDefault = parcelHelpers.interopDefault(_dropRepeatsWithJs);
var _eqByJs = require("./eqBy.js");
var _eqByJsDefault = parcelHelpers.interopDefault(_eqByJs);
/**
 * Returns a new list without any consecutively repeating elements,
 * based upon the value returned by applying the supplied function to
 * each list element. [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeatsBy(Math.abs, [1, -1, -1, 2, 3, -4, 4, 2, 2]); //=> [1, 2, 3, -4, 2]
 */ var dropRepeatsBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(function(fn, list) {
    return (0, _dispatchableJsDefault.default)([], function() {
        return (0, _xdropRepeatsWithJsDefault.default)((0, _eqByJsDefault.default)(fn));
    }, (0, _dropRepeatsWithJsDefault.default)((0, _eqByJsDefault.default)(fn)))(list);
});
exports.default = dropRepeatsBy;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xdropRepeatsWith.js":"16Rfh","./dropRepeatsWith.js":"fvKjc","./eqBy.js":"ko2ZE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ko2ZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */ var eqBy = /*#__PURE__*/ (0, _curry3JsDefault.default)(function eqBy(f, x, y) {
    return (0, _equalsJsDefault.default)(f(x), f(y));
});
exports.default = eqBy;

},{"./internal/_curry3.js":"jwEOD","./equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKlce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xdropWhileJs = require("./internal/_xdropWhile.js");
var _xdropWhileJsDefault = parcelHelpers.interopDefault(_xdropWhileJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      const lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 *
 *      R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
 */ var dropWhile = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "dropWhile"
], (0, _xdropWhileJsDefault.default), function dropWhile(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while(idx < len && pred(xs[idx]))idx += 1;
    return (0, _sliceJsDefault.default)(idx, Infinity, xs);
}));
exports.default = dropWhile;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xdropWhile.js":"5GOeC","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5GOeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xdropWhile);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XDropWhile = /*#__PURE__*/ function() {
    function XDropWhile(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XDropWhile.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XDropWhile.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XDropWhile.prototype["@@transducer/step"] = function(result, input) {
        if (this.f) {
            if (this.f(input)) return result;
            this.f = null;
        }
        return this.xf["@@transducer/step"](result, input);
    };
    return XDropWhile;
}();
function _xdropWhile(f) {
    return function(xf) {
        return new XDropWhile(f, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5M3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isFunctionJs = require("./internal/_isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _liftJs = require("./lift.js");
var _liftJsDefault = parcelHelpers.interopDefault(_liftJs);
var _orJs = require("./or.js");
var _orJsDefault = parcelHelpers.interopDefault(_orJs);
/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.both, R.anyPass, R.or
 * @example
 *
 *      const gt10 = x => x > 10;
 *      const even = x => x % 2 === 0;
 *      const f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 *
 *      R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
 *      R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
 */ var either = /*#__PURE__*/ (0, _curry2JsDefault.default)(function either(f, g) {
    return (0, _isFunctionJsDefault.default)(f) ? function _either() {
        return f.apply(this, arguments) || g.apply(this, arguments);
    } : (0, _liftJsDefault.default)((0, _orJsDefault.default))(f, g);
});
exports.default = either;

},{"./internal/_curry2.js":"3dy25","./internal/_isFunction.js":"8huhf","./lift.js":"gVw22","./or.js":"jNgRe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jNgRe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns the first argument if it is truthy, otherwise the second argument.
 * Acts as the boolean `or` statement if both inputs are `Boolean`s.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any}
 * @see R.either, R.and
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */ var or = /*#__PURE__*/ (0, _curry2JsDefault.default)(function or(a, b) {
    return a || b;
});
exports.default = or;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6A7mr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isArgumentsJs = require("./internal/_isArguments.js");
var _isArgumentsJsDefault = parcelHelpers.interopDefault(_isArgumentsJs);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _isStringJs = require("./internal/_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
var _isTypedArrayJs = require("./internal/_isTypedArray.js");
var _isTypedArrayJsDefault = parcelHelpers.interopDefault(_isTypedArrayJs);
/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`),
 * TypedArray (`Uint8Array []`, `Float32Array []`, etc), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));               //=> Nothing()
 *      R.empty([1, 2, 3]);              //=> []
 *      R.empty('unicorns');             //=> ''
 *      R.empty({x: 1, y: 2});           //=> {}
 *      R.empty(Uint8Array.from('123')); //=> Uint8Array []
 */ var empty = /*#__PURE__*/ (0, _curry1JsDefault.default)(function empty(x) {
    return x != null && typeof x["fantasy-land/empty"] === "function" ? x["fantasy-land/empty"]() : x != null && x.constructor != null && typeof x.constructor["fantasy-land/empty"] === "function" ? x.constructor["fantasy-land/empty"]() : x != null && typeof x.empty === "function" ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === "function" ? x.constructor.empty() : (0, _isArrayJsDefault.default)(x) ? [] : (0, _isStringJsDefault.default)(x) ? "" : (0, _isObjectJsDefault.default)(x) ? {} : (0, _isArgumentsJsDefault.default)(x) ? function() {
        return arguments;
    }() : (0, _isTypedArrayJsDefault.default)(x) ? x.constructor.from("") : void 0 // else
    ;
});
exports.default = empty;

},{"./internal/_curry1.js":"kg5MS","./internal/_isArguments.js":"9eKOx","./internal/_isArray.js":"3Yv3G","./internal/_isObject.js":"hfrpU","./internal/_isString.js":"a1eoi","./internal/_isTypedArray.js":"7isiT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7isiT":[function(require,module,exports) {
/**
 * Tests whether or not an object is a typed array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is a typed array, `false` otherwise.
 * @example
 *
 *      _isTypedArray(new Uint8Array([])); //=> true
 *      _isTypedArray(new Float32Array([])); //=> true
 *      _isTypedArray([]); //=> false
 *      _isTypedArray(null); //=> false
 *      _isTypedArray({}); //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isTypedArray);
function _isTypedArray(val) {
    var type = Object.prototype.toString.call(val);
    return type === "[object Uint8ClampedArray]" || type === "[object Int8Array]" || type === "[object Uint8Array]" || type === "[object Int16Array]" || type === "[object Uint16Array]" || type === "[object Int32Array]" || type === "[object Uint32Array]" || type === "[object Float32Array]" || type === "[object Float64Array]" || type === "[object BigInt64Array]" || type === "[object BigUint64Array]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9Wxe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
var _takeLastJs = require("./takeLast.js");
var _takeLastJsDefault = parcelHelpers.interopDefault(_takeLastJs);
/**
 * Checks if a list ends with the provided sublist.
 *
 * Similarly, checks if a string ends with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @see R.startsWith
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */ var endsWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function(suffix, list) {
    return (0, _equalsJsDefault.default)((0, _takeLastJsDefault.default)(suffix.length, list), suffix);
});
exports.default = endsWith;

},{"./internal/_curry2.js":"3dy25","./equals.js":"fVrfR","./takeLast.js":"3xFBF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3xFBF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dropJs = require("./drop.js");
var _dropJsDefault = parcelHelpers.interopDefault(_dropJs);
/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */ var takeLast = /*#__PURE__*/ (0, _curry2JsDefault.default)(function takeLast(n, xs) {
    return (0, _dropJsDefault.default)(n >= 0 ? xs.length - n : 0, xs);
});
exports.default = takeLast;

},{"./internal/_curry2.js":"3dy25","./drop.js":"3jRr9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fEjf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      const o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      const o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */ var eqProps = /*#__PURE__*/ (0, _curry3JsDefault.default)(function eqProps(prop, obj1, obj2) {
    return (0, _equalsJsDefault.default)(obj1[prop], obj2[prop]);
});
exports.default = eqProps;

},{"./internal/_curry3.js":"jwEOD","./equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jy4l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      const transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */ var evolve = /*#__PURE__*/ (0, _curry2JsDefault.default)(function evolve(transformations, object) {
    if (!(0, _isObjectJsDefault.default)(object) && !(0, _isArrayJsDefault.default)(object)) return object;
    var result = object instanceof Array ? [] : {};
    var transformation, key, type;
    for(key in object){
        transformation = transformations[key];
        type = typeof transformation;
        result[key] = type === "function" ? transformation(object[key]) : transformation && type === "object" ? evolve(transformation, object[key]) : object[key];
    }
    return result;
});
exports.default = evolve;

},{"./internal/_curry2.js":"3dy25","./internal/_isArray.js":"3Yv3G","./internal/_isObject.js":"hfrpU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5kesr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xfindJs = require("./internal/_xfind.js");
var _xfindJsDefault = parcelHelpers.interopDefault(_xfindJs);
/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */ var find = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "find"
], (0, _xfindJsDefault.default), function find(fn, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        if (fn(list[idx])) return list[idx];
        idx += 1;
    }
}));
exports.default = find;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xfind.js":"69jvV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69jvV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xfind);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XFind = /*#__PURE__*/ function() {
    function XFind(f, xf) {
        this.xf = xf;
        this.f = f;
        this.found = false;
    }
    XFind.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XFind.prototype["@@transducer/result"] = function(result) {
        if (!this.found) result = this.xf["@@transducer/step"](result, void 0);
        return this.xf["@@transducer/result"](result);
    };
    XFind.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) {
            this.found = true;
            result = (0, _reducedJsDefault.default)(this.xf["@@transducer/step"](result, input));
        }
        return result;
    };
    return XFind;
}();
function _xfind(f) {
    return function(xf) {
        return new XFind(f, xf);
    };
}

},{"./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lwMjr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xfindIndexJs = require("./internal/_xfindIndex.js");
var _xfindIndexJsDefault = parcelHelpers.interopDefault(_xfindIndexJs);
/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce, R.indexOf
 * @example
 *
 *      const xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */ var findIndex = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xfindIndexJsDefault.default), function findIndex(fn, list) {
    var idx = 0;
    var len = list.length;
    while(idx < len){
        if (fn(list[idx])) return idx;
        idx += 1;
    }
    return -1;
}));
exports.default = findIndex;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xfindIndex.js":"a4oCK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4oCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xfindIndex);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XFindIndex = /*#__PURE__*/ function() {
    function XFindIndex(f, xf) {
        this.xf = xf;
        this.f = f;
        this.idx = -1;
        this.found = false;
    }
    XFindIndex.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XFindIndex.prototype["@@transducer/result"] = function(result) {
        if (!this.found) result = this.xf["@@transducer/step"](result, -1);
        return this.xf["@@transducer/result"](result);
    };
    XFindIndex.prototype["@@transducer/step"] = function(result, input) {
        this.idx += 1;
        if (this.f(input)) {
            this.found = true;
            result = (0, _reducedJsDefault.default)(this.xf["@@transducer/step"](result, this.idx));
        }
        return result;
    };
    return XFindIndex;
}();
function _xfindIndex(f) {
    return function(xf) {
        return new XFindIndex(f, xf);
    };
}

},{"./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lKKbc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xfindLastJs = require("./internal/_xfindLast.js");
var _xfindLastJsDefault = parcelHelpers.interopDefault(_xfindLastJs);
/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */ var findLast = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xfindLastJsDefault.default), function findLast(fn, list) {
    var idx = list.length - 1;
    while(idx >= 0){
        if (fn(list[idx])) return list[idx];
        idx -= 1;
    }
}));
exports.default = findLast;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xfindLast.js":"bVlSe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVlSe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xfindLast);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XFindLast = /*#__PURE__*/ function() {
    function XFindLast(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XFindLast.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XFindLast.prototype["@@transducer/result"] = function(result) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
    };
    XFindLast.prototype["@@transducer/step"] = function(result, input) {
        if (this.f(input)) this.last = input;
        return result;
    };
    return XFindLast;
}();
function _xfindLast(f) {
    return function(xf) {
        return new XFindLast(f, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c2CCI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xfindLastIndexJs = require("./internal/_xfindLastIndex.js");
var _xfindLastIndexJsDefault = parcelHelpers.interopDefault(_xfindLastIndexJs);
/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce, R.lastIndexOf
 * @example
 *
 *      const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */ var findLastIndex = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xfindLastIndexJsDefault.default), function findLastIndex(fn, list) {
    var idx = list.length - 1;
    while(idx >= 0){
        if (fn(list[idx])) return idx;
        idx -= 1;
    }
    return -1;
}));
exports.default = findLastIndex;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xfindLastIndex.js":"bB24W","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bB24W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xfindLastIndex);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XFindLastIndex = /*#__PURE__*/ function() {
    function XFindLastIndex(f, xf) {
        this.xf = xf;
        this.f = f;
        this.idx = -1;
        this.lastIdx = -1;
    }
    XFindLastIndex.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XFindLastIndex.prototype["@@transducer/result"] = function(result) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
    };
    XFindLastIndex.prototype["@@transducer/step"] = function(result, input) {
        this.idx += 1;
        if (this.f(input)) this.lastIdx = this.idx;
        return result;
    };
    return XFindLastIndex;
}();
function _xfindLastIndex(f) {
    return function(xf) {
        return new XFindLastIndex(f, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cItAW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _makeFlatJs = require("./internal/_makeFlat.js");
var _makeFlatJsDefault = parcelHelpers.interopDefault(_makeFlatJs);
/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */ var flatten = /*#__PURE__*/ (0, _curry1JsDefault.default)(/*#__PURE__*/ (0, _makeFlatJsDefault.default)(true));
exports.default = flatten;

},{"./internal/_curry1.js":"kg5MS","./internal/_makeFlat.js":"2pVbr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3o46f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((a, b, c, ...) -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      const mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */ var flip = /*#__PURE__*/ (0, _curry1JsDefault.default)(function flip(fn) {
    return (0, _curryNJsDefault.default)(fn.length, function(a, b) {
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = b;
        args[1] = a;
        return fn.apply(this, args);
    });
});
exports.default = flip;

},{"./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5RPit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      const printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */ var forEach = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("forEach", function forEach(fn, list) {
    var len = list.length;
    var idx = 0;
    while(idx < len){
        fn(list[idx]);
        idx += 1;
    }
    return list;
}));
exports.default = forEach;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gjhr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      const printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */ var forEachObjIndexed = /*#__PURE__*/ (0, _curry2JsDefault.default)(function forEachObjIndexed(fn, obj) {
    var keyList = (0, _keysJsDefault.default)(obj);
    var idx = 0;
    while(idx < keyList.length){
        var key = keyList[idx];
        fn(obj[key], key, obj);
        idx += 1;
    }
    return obj;
});
exports.default = forEachObjIndexed;

},{"./internal/_curry2.js":"3dy25","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ju9u0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */ var fromPairs = /*#__PURE__*/ (0, _curry1JsDefault.default)(function fromPairs(pairs) {
    var result = {};
    var idx = 0;
    while(idx < pairs.length){
        result[pairs[idx][0]] = pairs[idx][1];
        idx += 1;
    }
    return result;
});
exports.default = fromPairs;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yfxC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a key-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> {a: [b]}
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.reduceBy, R.transduce, R.indexBy, R.collectBy
 * @example
 *
 *      const byGrade = R.groupBy(function(student) {
 *        const score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      const students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */ var groupBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("groupBy", /*#__PURE__*/ (0, _reduceByJsDefault.default)(function(acc, item) {
    acc.push(item);
    return acc;
}, [])));
exports.default = groupBy;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry2.js":"3dy25","./reduceBy.js":"7nDTY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"widLq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * const isVowel = R.test(/^[aeiou]$/i);
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */ var groupWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function(fn, list) {
    var res = [];
    var idx = 0;
    var len = list.length;
    while(idx < len){
        var nextidx = idx + 1;
        while(nextidx < len && fn(list[nextidx - 1], list[nextidx]))nextidx += 1;
        res.push(list.slice(idx, nextidx));
        idx = nextidx;
    }
    return res;
});
exports.default = groupWith;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmmYb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */ var gt = /*#__PURE__*/ (0, _curry2JsDefault.default)(function gt(a, b) {
    return a > b;
});
exports.default = gt;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Vbtc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */ var gte = /*#__PURE__*/ (0, _curry2JsDefault.default)(function gte(a, b) {
    return a >= b;
});
exports.default = gte;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lSJg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _hasPathJs = require("./hasPath.js");
var _hasPathJsDefault = parcelHelpers.interopDefault(_hasPathJs);
/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      const hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      const point = {x: 0, y: 0};
 *      const pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */ var has = /*#__PURE__*/ (0, _curry2JsDefault.default)(function has(prop, obj) {
    return (0, _hasPathJsDefault.default)([
        prop
    ], obj);
});
exports.default = has;

},{"./internal/_curry2.js":"3dy25","./hasPath.js":"k4o9U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k4o9U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
/**
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> Boolean
 * @param {Array} path The path to use.
 * @param {Object} obj The object to check the path in.
 * @return {Boolean} Whether the path exists.
 * @see R.has
 * @example
 *
 *      R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 *      R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 *      R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 *      R.hasPath(['a', 'b'], {});                  // => false
 */ var hasPath = /*#__PURE__*/ (0, _curry2JsDefault.default)(function hasPath(_path, obj) {
    if (_path.length === 0 || (0, _isNilJsDefault.default)(obj)) return false;
    var val = obj;
    var idx = 0;
    while(idx < _path.length){
        if (!(0, _isNilJsDefault.default)(val) && (0, _hasJsDefault.default)(_path[idx], val)) {
            val = val[_path[idx]];
            idx += 1;
        } else return false;
    }
    return true;
});
exports.default = hasPath;

},{"./internal/_curry2.js":"3dy25","./internal/_has.js":"armmH","./isNil.js":"9ObSL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nfXD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      const square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */ var hasIn = /*#__PURE__*/ (0, _curry2JsDefault.default)(function hasIn(prop, obj) {
    if ((0, _isNilJsDefault.default)(obj)) return false;
    return prop in obj;
});
exports.default = hasIn;

},{"./internal/_curry2.js":"3dy25","./isNil.js":"9ObSL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmNRw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectIsJs = require("./internal/_objectIs.js");
var _objectIsJsDefault = parcelHelpers.interopDefault(_objectIsJs);
/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * Note this is merely a curried version of ES6 `Object.is`.
 *
 * `identical` does not support the `__` placeholder.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      const o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */ var identical = function(a, b) {
    switch(arguments.length){
        case 0:
            return identical;
        case 1:
            return function() {
                return function unaryIdentical(_b) {
                    switch(arguments.length){
                        case 0:
                            return unaryIdentical;
                        default:
                            return (0, _objectIsJsDefault.default)(a, _b);
                    }
                };
            }();
        default:
            return (0, _objectIsJsDefault.default)(a, b);
    }
}; // In order to support Cross-origin Window objects as arguments to identical,
// it cannot be implemented as _curry2(_objectIs).
// The reason is that _curry2 checks if a function argument is the placeholder __
// by accessing a paritcular property. However, across URL origins access
// to most properties of Window is forbidden.
exports.default = identical;

},{"./internal/_objectIs.js":"brBwn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2doHQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * Note that `ifElse` takes its arity from the longest of the three functions passed to it.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when, R.cond
 * @example
 *
 *      const incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({ count: 1 }); //=> { count: 2 }
 *      incCount({});           //=> { count: 1 }
 */ var ifElse = /*#__PURE__*/ (0, _curry3JsDefault.default)(function ifElse(condition, onTrue, onFalse) {
    return (0, _curryNJsDefault.default)(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
        return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    });
});
exports.default = ifElse;

},{"./internal/_curry3.js":"jwEOD","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hPRn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */ var inc = /*#__PURE__*/ (0, _addJsDefault.default)(1);
exports.default = inc;

},{"./add.js":"i4R4C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBP1r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _includesJs = require("./internal/_includes.js");
var _includesJsDefault = parcelHelpers.interopDefault(_includesJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Also works with strings.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */ var includes = /*#__PURE__*/ (0, _curry2JsDefault.default)((0, _includesJsDefault.default));
exports.default = includes;

},{"./internal/_includes.js":"5cnHY","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q4CJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reduceByJs = require("./reduceBy.js");
var _reduceByJsDefault = parcelHelpers.interopDefault(_reduceByJs);
/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @typedefn Idx = String | Int | Symbol
 * @sig Idx a => (b -> a) -> [b] -> {a: b}
 * @param {Function} fn Function :: a -> Idx
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @see R.groupBy
 * @example
 *
 *      const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */ var indexBy = /*#__PURE__*/ (0, _reduceByJsDefault.default)(function(acc, elem) {
    return elem;
}, null);
exports.default = indexBy;

},{"./reduceBy.js":"7nDTY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l2Mwh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _indexOfJs = require("./internal/_indexOf.js");
var _indexOfJsDefault = parcelHelpers.interopDefault(_indexOfJs);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf, R.findIndex
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */ var indexOf = /*#__PURE__*/ (0, _curry2JsDefault.default)(function indexOf(target, xs) {
    return typeof xs.indexOf === "function" && !(0, _isArrayJsDefault.default)(xs) ? xs.indexOf(target) : (0, _indexOfJsDefault.default)(xs, target, 0);
});
exports.default = indexOf;

},{"./internal/_curry2.js":"3dy25","./internal/_indexOf.js":"lHfA9","./internal/_isArray.js":"3Yv3G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvK3p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */ var init = /*#__PURE__*/ (0, _sliceJsDefault.default)(0, -1);
exports.default = init;

},{"./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTtSv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _includesWithJs = require("./internal/_includesWith.js");
var _includesWithJsDefault = parcelHelpers.interopDefault(_includesWithJs);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _filterJs = require("./internal/_filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig ((a, b) -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */ var innerJoin = /*#__PURE__*/ (0, _curry3JsDefault.default)(function innerJoin(pred, xs, ys) {
    return (0, _filterJsDefault.default)(function(x) {
        return (0, _includesWithJsDefault.default)(pred, x, ys);
    }, xs);
});
exports.default = innerJoin;

},{"./internal/_includesWith.js":"19ZT4","./internal/_curry3.js":"jwEOD","./internal/_filter.js":"2MI57","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYQPL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */ var insert = /*#__PURE__*/ (0, _curry3JsDefault.default)(function insert(idx, elt, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    var result = Array.prototype.slice.call(list, 0);
    result.splice(idx, 0, elt);
    return result;
});
exports.default = insert;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSMfs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */ var insertAll = /*#__PURE__*/ (0, _curry3JsDefault.default)(function insertAll(idx, elts, list) {
    idx = idx < list.length && idx >= 0 ? idx : list.length;
    return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
exports.default = insertAll;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0xp9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _filterJs = require("./internal/_filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _setJs = require("./internal/_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */ var intersection = /*#__PURE__*/ (0, _curry2JsDefault.default)(function intersection(list1, list2) {
    var toKeep = new (0, _setJsDefault.default)();
    for(var i = 0; i < list1.length; i += 1)toKeep.add(list1[i]);
    return (0, _uniqJsDefault.default)((0, _filterJsDefault.default)(toKeep.has.bind(toKeep), list2));
});
exports.default = intersection;

},{"./internal/_curry2.js":"3dy25","./internal/_filter.js":"2MI57","./internal/_Set.js":"4ERsU","./uniq.js":"ilMs6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ilMs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _uniqByJs = require("./uniqBy.js");
var _uniqByJsDefault = parcelHelpers.interopDefault(_uniqByJs);
/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */ var uniq = /*#__PURE__*/ (0, _uniqByJsDefault.default)((0, _identityJsDefault.default));
exports.default = uniq;

},{"./identity.js":"iXdOZ","./uniqBy.js":"f28ar","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f28ar":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("./internal/_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xuniqByJs = require("./internal/_xuniqBy.js");
var _xuniqByJsDefault = parcelHelpers.interopDefault(_xuniqByJs);
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */ var uniqBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xuniqByJsDefault.default), function(fn, list) {
    var set = new (0, _setJsDefault.default)();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while(idx < list.length){
        item = list[idx];
        appliedItem = fn(item);
        if (set.add(appliedItem)) result.push(item);
        idx += 1;
    }
    return result;
}));
exports.default = uniqBy;

},{"./internal/_Set.js":"4ERsU","./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xuniqBy.js":"7Evip","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Evip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xuniqBy);
var _setJs = require("./_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XUniqBy = /*#__PURE__*/ function() {
    function XUniqBy(f, xf) {
        this.xf = xf;
        this.f = f;
        this.set = new (0, _setJsDefault.default)();
    }
    XUniqBy.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XUniqBy.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XUniqBy.prototype["@@transducer/step"] = function(result, input) {
        return this.set.add(this.f(input)) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XUniqBy;
}();
function _xuniqBy(f) {
    return function(xf) {
        return new XUniqBy(f, xf);
    };
}

},{"./_Set.js":"4ERsU","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtxVH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _checkForMethodJs = require("./internal/_checkForMethod.js");
var _checkForMethodJsDefault = parcelHelpers.interopDefault(_checkForMethodJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
 */ var intersperse = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _checkForMethodJsDefault.default)("intersperse", function intersperse(separator, list) {
    var out = [];
    var idx = 0;
    var length = list.length;
    while(idx < length){
        if (idx === length - 1) out.push(list[idx]);
        else out.push(list[idx], separator);
        idx += 1;
    }
    return out;
}));
exports.default = intersperse;

},{"./internal/_checkForMethod.js":"jMuNW","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LLvcM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _isTransformerJs = require("./internal/_isTransformer.js");
var _isTransformerJsDefault = parcelHelpers.interopDefault(_isTransformerJs);
var _xReduceJs = require("./internal/_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var _stepCatJs = require("./internal/_stepCat.js");
var _stepCatJsDefault = parcelHelpers.interopDefault(_stepCatJs);
/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.transduce
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      const intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */ var into = /*#__PURE__*/ (0, _curry3JsDefault.default)(function into(acc, transducer, list) {
    var xf = transducer((0, _isTransformerJsDefault.default)(acc) ? acc : (0, _stepCatJsDefault.default)(acc));
    return (0, _xReduceJsDefault.default)(xf, xf["@@transducer/init"](), list);
});
exports.default = into;

},{"./internal/_curry3.js":"jwEOD","./internal/_isTransformer.js":"jUEH2","./internal/_xReduce.js":"dqUBX","./internal/_stepCat.js":"bDmyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bDmyV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_stepCat);
var _objectAssignJs = require("./_objectAssign.js");
var _objectAssignJsDefault = parcelHelpers.interopDefault(_objectAssignJs);
var _identityJs = require("./_identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _isArrayLikeJs = require("./_isArrayLike.js");
var _isArrayLikeJsDefault = parcelHelpers.interopDefault(_isArrayLikeJs);
var _isTransformerJs = require("./_isTransformer.js");
var _isTransformerJsDefault = parcelHelpers.interopDefault(_isTransformerJs);
var _objOfJs = require("../objOf.js");
var _objOfJsDefault = parcelHelpers.interopDefault(_objOfJs);
var _stepCatArray = {
    "@@transducer/init": Array,
    "@@transducer/step": function(xs, x) {
        xs.push(x);
        return xs;
    },
    "@@transducer/result": (0, _identityJsDefault.default)
};
var _stepCatString = {
    "@@transducer/init": String,
    "@@transducer/step": function(a, b) {
        return a + b;
    },
    "@@transducer/result": (0, _identityJsDefault.default)
};
var _stepCatObject = {
    "@@transducer/init": Object,
    "@@transducer/step": function(result, input) {
        return (0, _objectAssignJsDefault.default)(result, (0, _isArrayLikeJsDefault.default)(input) ? (0, _objOfJsDefault.default)(input[0], input[1]) : input);
    },
    "@@transducer/result": (0, _identityJsDefault.default)
};
function _stepCat(obj) {
    if ((0, _isTransformerJsDefault.default)(obj)) return obj;
    if ((0, _isArrayLikeJsDefault.default)(obj)) return _stepCatArray;
    if (typeof obj === "string") return _stepCatString;
    if (typeof obj === "object") return _stepCatObject;
    throw new Error("Cannot create transformer for " + obj);
}

},{"./_objectAssign.js":"4FYvY","./_identity.js":"l3ABm","./_isArrayLike.js":"1ckj8","./_isTransformer.js":"jUEH2","../objOf.js":"8zI3w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FYvY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hasJs = require("./_has.js"); // Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
function _objectAssign(target) {
    if (target == null) throw new TypeError("Cannot convert undefined or null to object");
    var output = Object(target);
    var idx = 1;
    var length = arguments.length;
    while(idx < length){
        var source = arguments[idx];
        if (source != null) {
            for(var nextKey in source)if ((0, _hasJsDefault.default)(nextKey, source)) output[nextKey] = source[nextKey];
        }
        idx += 1;
    }
    return output;
}
exports.default = typeof Object.assign === "function" ? Object.assign : _objectAssign;

},{"./_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zI3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      const matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */ var objOf = /*#__PURE__*/ (0, _curry2JsDefault.default)(function objOf(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
});
exports.default = objOf;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LvJZ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      const raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */ var invert = /*#__PURE__*/ (0, _curry1JsDefault.default)(function invert(obj) {
    var props = (0, _keysJsDefault.default)(obj);
    var len = props.length;
    var idx = 0;
    var out = {};
    while(idx < len){
        var key = props[idx];
        var val = obj[key];
        var list = (0, _hasJsDefault.default)(val, out) ? out[val] : out[val] = [];
        list[list.length] = key;
        idx += 1;
    }
    return out;
});
exports.default = invert;

},{"./internal/_curry1.js":"kg5MS","./internal/_has.js":"armmH","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4y1jC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      const raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      const raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */ var invertObj = /*#__PURE__*/ (0, _curry1JsDefault.default)(function invertObj(obj) {
    var props = (0, _keysJsDefault.default)(obj);
    var len = props.length;
    var idx = 0;
    var out = {};
    while(idx < len){
        var key = props[idx];
        out[obj[key]] = key;
        idx += 1;
    }
    return out;
});
exports.default = invertObj;

},{"./internal/_curry1.js":"kg5MS","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"22Ugy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isFunctionJs = require("./internal/_isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Given an `arity` (Number) and a `name` (String) the `invoker` function
 * returns a curried function that takes `arity` arguments and a `context`
 * object. It will "invoke" the `name`'d function (a method) on the `context`
 * object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of any of the target object's methods to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *      // A function with no arguments
 *      const asJson = invoker(0, "json")
 *      // Just like calling .then((response) => response.json())
 *      fetch("http://example.com/index.json").then(asJson)
 *
 *      // A function with one argument
 *      const sliceFrom = invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *
 *      // A function with two arguments
 *      const sliceFrom6 = invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 *      // NOTE: You can't simply pass some of the arguments to the initial invoker function.
 *      const firstCreditCardSection = invoker(2, "slice", 0, 4)
 *      firstCreditCardSection("4242 4242 4242 4242") // => Function<...>
 *
 *      // Since invoker returns a curried function, you may partially apply it to create the function you need.
 *      const firstCreditCardSection = invoker(2, "slice")(0, 4)
 *      firstCreditCardSection("4242 4242 4242 4242") // => "4242"
 *
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */ var invoker = /*#__PURE__*/ (0, _curry2JsDefault.default)(function invoker(arity, method) {
    return (0, _curryNJsDefault.default)(arity + 1, function() {
        var target = arguments[arity];
        if (target != null && (0, _isFunctionJsDefault.default)(target[method])) return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
        throw new TypeError((0, _toStringJsDefault.default)(target) + ' does not have a method named "' + method + '"');
    });
});
exports.default = invoker;

},{"./internal/_curry2.js":"3dy25","./internal/_isFunction.js":"8huhf","./curryN.js":"a5Onp","./toString.js":"8yWci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuQeG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * See if an object (i.e. `val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If `val` was created using `Object.create`, `R.is(Object, val) === true`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */ var is = /*#__PURE__*/ (0, _curry2JsDefault.default)(function is(Ctor, val) {
    return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && typeof val === "object");
});
exports.default = is;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6y0cn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _emptyJs = require("./empty.js");
var _emptyJsDefault = parcelHelpers.interopDefault(_emptyJs);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);           //=> false
 *      R.isEmpty([]);                  //=> true
 *      R.isEmpty('');                  //=> true
 *      R.isEmpty(null);                //=> false
 *      R.isEmpty({});                  //=> true
 *      R.isEmpty({length: 0});         //=> false
 *      R.isEmpty(Uint8Array.from('')); //=> true
 */ var isEmpty = /*#__PURE__*/ (0, _curry1JsDefault.default)(function isEmpty(x) {
    return x != null && (0, _equalsJsDefault.default)(x, (0, _emptyJsDefault.default)(x));
});
exports.default = isEmpty;

},{"./internal/_curry1.js":"kg5MS","./empty.js":"6A7mr","./equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PqqL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isNilJs = require("./isNil.js");
var _isNilJsDefault = parcelHelpers.interopDefault(_isNilJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Checks if the input value is not `null` and not `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is not `undefined` or not `null`, otherwise `false`.
 * @example
 *
 *      R.isNotNil(null); //=> false
 *      R.isNotNil(undefined); //=> false
 *      R.isNotNil(0); //=> true
 *      R.isNotNil([]); //=> true
 */ var isNotNil = /*#__PURE__*/ (0, _curry1JsDefault.default)(function isNotNil(x) {
    return !(0, _isNilJsDefault.default)(x);
});
exports.default = isNotNil;

},{"./isNil.js":"9ObSL","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ib8wA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _invokerJs = require("./invoker.js");
var _invokerJsDefault = parcelHelpers.interopDefault(_invokerJs);
/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      const spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */ var join = /*#__PURE__*/ (0, _invokerJsDefault.default)(1, "join");
exports.default = join;

},{"./invoker.js":"22Ugy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTjBi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _convergeJs = require("./converge.js");
var _convergeJsDefault = parcelHelpers.interopDefault(_convergeJs);
/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      const getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */ var juxt = /*#__PURE__*/ (0, _curry1JsDefault.default)(function juxt(fns) {
    return (0, _convergeJsDefault.default)(function() {
        return Array.prototype.slice.call(arguments, 0);
    }, fns);
});
exports.default = juxt;

},{"./internal/_curry1.js":"kg5MS","./converge.js":"hio2A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ZIxO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */ var keysIn = /*#__PURE__*/ (0, _curry1JsDefault.default)(function keysIn(obj) {
    var prop;
    var ks = [];
    for(prop in obj)ks[ks.length] = prop;
    return ks;
});
exports.default = keysIn;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5itgl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf, R.findLastIndex
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */ var lastIndexOf = /*#__PURE__*/ (0, _curry2JsDefault.default)(function lastIndexOf(target, xs) {
    if (typeof xs.lastIndexOf === "function" && !(0, _isArrayJsDefault.default)(xs)) return xs.lastIndexOf(target);
    else {
        var idx = xs.length - 1;
        while(idx >= 0){
            if ((0, _equalsJsDefault.default)(xs[idx], target)) return idx;
            idx -= 1;
        }
        return -1;
    }
});
exports.default = lastIndexOf;

},{"./internal/_curry2.js":"3dy25","./internal/_isArray.js":"3Yv3G","./equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehc8r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _isNumberJs = require("./internal/_isNumber.js");
var _isNumberJsDefault = parcelHelpers.interopDefault(_isNumberJs);
/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */ var length = /*#__PURE__*/ (0, _curry1JsDefault.default)(function length(list) {
    return list != null && (0, _isNumberJsDefault.default)(list.length) ? list.length : NaN;
});
exports.default = length;

},{"./internal/_curry1.js":"kg5MS","./internal/_isNumber.js":"i6wAo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6wAo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isNumber);
function _isNumber(x) {
    return Object.prototype.toString.call(x) === "[object Number]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cknT6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */ var lens = /*#__PURE__*/ (0, _curry2JsDefault.default)(function lens(getter, setter) {
    return function(toFunctorFn) {
        return function(target) {
            return (0, _mapJsDefault.default)(function(focus) {
                return setter(focus, target);
            }, toFunctorFn(getter(target)));
        };
    };
});
exports.default = lens;

},{"./internal/_curry2.js":"3dy25","./map.js":"dC8Ps","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRm5J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _lensJs = require("./lens.js");
var _lensJsDefault = parcelHelpers.interopDefault(_lensJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
var _updateJs = require("./update.js");
var _updateJsDefault = parcelHelpers.interopDefault(_updateJs);
/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over, R.nth
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */ var lensIndex = /*#__PURE__*/ (0, _curry1JsDefault.default)(function lensIndex(n) {
    return (0, _lensJsDefault.default)((0, _nthJsDefault.default)(n), (0, _updateJsDefault.default)(n));
});
exports.default = lensIndex;

},{"./internal/_curry1.js":"kg5MS","./lens.js":"cknT6","./nth.js":"gnCZG","./update.js":"3uMfJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uMfJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _adjustJs = require("./adjust.js");
var _adjustJsDefault = parcelHelpers.interopDefault(_adjustJs);
var _alwaysJs = require("./always.js");
var _alwaysJsDefault = parcelHelpers.interopDefault(_alwaysJs);
/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
 *      R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */ var update = /*#__PURE__*/ (0, _curry3JsDefault.default)(function update(idx, x, list) {
    return (0, _adjustJsDefault.default)(idx, (0, _alwaysJsDefault.default)(x), list);
});
exports.default = update;

},{"./internal/_curry3.js":"jwEOD","./adjust.js":"gL7Yb","./always.js":"kfWcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14Zkn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _assocPathJs = require("./assocPath.js");
var _assocPathJsDefault = parcelHelpers.interopDefault(_assocPathJs);
var _lensJs = require("./lens.js");
var _lensJsDefault = parcelHelpers.interopDefault(_lensJs);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */ var lensPath = /*#__PURE__*/ (0, _curry1JsDefault.default)(function lensPath(p) {
    return (0, _lensJsDefault.default)((0, _pathJsDefault.default)(p), (0, _assocPathJsDefault.default)(p));
});
exports.default = lensPath;

},{"./internal/_curry1.js":"kg5MS","./assocPath.js":"asojb","./lens.js":"cknT6","./path.js":"9uBgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9uBgn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _pathsJs = require("./paths.js");
var _pathsJsDefault = parcelHelpers.interopDefault(_pathsJs);
/**
 * Retrieves the value at a given path. The nodes of the path can be arbitrary strings or non-negative integers.
 * For anything else, the value is unspecified. Integer paths are meant to index arrays, strings are meant for objects.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig [Idx] -> {a} -> a | Undefined
 * @sig Idx = String | NonNegativeInt
 * @param {Array} path The path to use.
 * @param {Object} obj The object or array to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth, R.assocPath, R.dissocPath
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 *      R.path([2], {'2': 2}); //=> 2
 *      R.path([-2], {'-2': 'a'}); //=> undefined
 */ var path = /*#__PURE__*/ (0, _curry2JsDefault.default)(function path(pathAr, obj) {
    return (0, _pathsJsDefault.default)([
        pathAr
    ], obj)[0];
});
exports.default = path;

},{"./internal/_curry2.js":"3dy25","./paths.js":"1DZe1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1DZe1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isIntegerJs = require("./internal/_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Object
 * @typedefn Idx = [String | Int | Symbol]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */ var paths = /*#__PURE__*/ (0, _curry2JsDefault.default)(function paths(pathsArray, obj) {
    return pathsArray.map(function(paths) {
        var val = obj;
        var idx = 0;
        var p;
        while(idx < paths.length){
            if (val == null) return;
            p = paths[idx];
            val = (0, _isIntegerJsDefault.default)(p) ? (0, _nthJsDefault.default)(p, val) : val[p];
            idx += 1;
        }
        return val;
    });
});
exports.default = paths;

},{"./internal/_curry2.js":"3dy25","./internal/_isInteger.js":"3AbYy","./nth.js":"gnCZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7lRQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _assocJs = require("./assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
var _lensJs = require("./lens.js");
var _lensJsDefault = parcelHelpers.interopDefault(_lensJs);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */ var lensProp = /*#__PURE__*/ (0, _curry1JsDefault.default)(function lensProp(k) {
    return (0, _lensJsDefault.default)((0, _propJsDefault.default)(k), (0, _assocJsDefault.default)(k));
});
exports.default = lensProp;

},{"./internal/_curry1.js":"kg5MS","./assoc.js":"9Gdur","./lens.js":"cknT6","./prop.js":"fBxsF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"574L6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */ var lt = /*#__PURE__*/ (0, _curry2JsDefault.default)(function lt(a, b) {
    return a < b;
});
exports.default = lt;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b9NKk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */ var lte = /*#__PURE__*/ (0, _curry2JsDefault.default)(function lte(a, b) {
    return a <= b;
});
exports.default = lte;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBqMh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.scan, R.addIndex, R.mapAccumRight
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */ var mapAccum = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mapAccum(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var tuple = [
        acc
    ];
    while(idx < len){
        tuple = fn(tuple[0], list[idx]);
        result[idx] = tuple[1];
        idx += 1;
    }
    return [
        tuple[0],
        result
    ];
});
exports.default = mapAccum;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ssQs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((acc, x) -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      const digits = ['1', '2', '3', '4'];
 *      const appender = (a, b) => [b + a, b + a];
 *
 *      R.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   f(f(f(a, d)[0], c)[0], b)[0],
 *   [
 *     f(a, d)[1],
 *     f(f(a, d)[0], c)[1],
 *     f(f(f(a, d)[0], c)[0], b)[1]
 *   ]
 * ]
 */ var mapAccumRight = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mapAccumRight(fn, acc, list) {
    var idx = list.length - 1;
    var result = [];
    var tuple = [
        acc
    ];
    while(idx >= 0){
        tuple = fn(tuple[0], list[idx]);
        result[idx] = tuple[1];
        idx -= 1;
    }
    return [
        tuple[0],
        result
    ];
});
exports.default = mapAccumRight;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pCP13":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayReduceJs = require("./internal/_arrayReduce.js");
var _arrayReduceJsDefault = parcelHelpers.interopDefault(_arrayReduceJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _keysJs = require("./keys.js");
var _keysJsDefault = parcelHelpers.interopDefault(_keysJs);
/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      const xyz = { x: 1, y: 2, z: 3 };
 *      const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */ var mapObjIndexed = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mapObjIndexed(fn, obj) {
    return (0, _arrayReduceJsDefault.default)(function(acc, key) {
        acc[key] = fn(obj[key], key, obj);
        return acc;
    }, {}, (0, _keysJsDefault.default)(obj));
});
exports.default = mapObjIndexed;

},{"./internal/_arrayReduce.js":"2VaMe","./internal/_curry2.js":"3dy25","./keys.js":"e4W8c","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"437WC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */ var match = /*#__PURE__*/ (0, _curry2JsDefault.default)(function match(rx, str) {
    return str.match(rx) || [];
});
exports.default = match;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"audYS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isIntegerJs = require("./internal/_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      const clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      const seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */ var mathMod = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mathMod(m, p) {
    if (!(0, _isIntegerJsDefault.default)(m)) return NaN;
    if (!(0, _isIntegerJsDefault.default)(p) || p < 1) return NaN;
    return (m % p + p) % p;
});
exports.default = mathMod;

},{"./internal/_curry2.js":"3dy25","./internal/_isInteger.js":"3AbYy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3PKj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _maxJs = require("./max.js");
var _maxJsDefault = parcelHelpers.interopDefault(_maxJs);
/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */ var maxBy = /*#__PURE__*/ (0, _curry3JsDefault.default)(function maxBy(f, a, b) {
    var resultB = f(b);
    return (0, _maxJsDefault.default)(f(a), resultB) === resultB ? b : a;
});
exports.default = maxBy;

},{"./internal/_curry3.js":"jwEOD","./max.js":"8Yjau","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ddUd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _sumJs = require("./sum.js");
var _sumJsDefault = parcelHelpers.interopDefault(_sumJs);
/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */ var mean = /*#__PURE__*/ (0, _curry1JsDefault.default)(function mean(list) {
    return (0, _sumJsDefault.default)(list) / list.length;
});
exports.default = mean;

},{"./internal/_curry1.js":"kg5MS","./sum.js":"hhJh8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhJh8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
var _addJsDefault = parcelHelpers.interopDefault(_addJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */ var sum = /*#__PURE__*/ (0, _reduceJsDefault.default)((0, _addJsDefault.default), 0);
exports.default = sum;

},{"./add.js":"i4R4C","./reduce.js":"8LF8v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"612KT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _meanJs = require("./mean.js");
var _meanJsDefault = parcelHelpers.interopDefault(_meanJs);
/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */ var median = /*#__PURE__*/ (0, _curry1JsDefault.default)(function median(list) {
    var len = list.length;
    if (len === 0) return NaN;
    var width = 2 - len % 2;
    var idx = (len - width) / 2;
    return (0, _meanJsDefault.default)(Array.prototype.slice.call(list, 0).sort(function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }).slice(idx, idx + width));
});
exports.default = median;

},{"./internal/_curry1.js":"kg5MS","./mean.js":"4ddUd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5sPr8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Takes a string-returning function `keyGen` and a function `fn` and returns
 * a new function that returns cached results for subsequent
 * calls with the same arguments.
 *
 * When the function is invoked, `keyGen` is applied to the same arguments
 * and its result becomes the cache key. If the cache contains something
 * under that key, the function simply returns it and does not invoke `fn` at all.
 *
 * Otherwise `fn` is applied to the same arguments and its return value
 * is cached under that key and returned by the function.
 *
 * Care must be taken when implementing `keyGen` to avoid key collision,
 * or if tracking references, memory leaks and mutating arguments.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} keyGen The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *      const withAge = memoizeWith(o => `${o.birth}/${o.death}`, ({birth, death}) => {
 *      //                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^  ^^^^^^^^^^^^^^^^^^^^^
 *      //                          keyGen                        fn
 *        console.log(`computing age for ${birth}/${death}`);
 *        return ({birth, death, age: death - birth});
 *      });
 *
 *      withAge({birth: 1921, death: 1999});
 *      //=> LOG: computing age for 1921/1999
 *      //=> {birth: 1921, death: 1999, age: 78} (returned from fn)
 *
 *      withAge({birth: 1921, death: 1999});
 *      //=> {birth: 1921, death: 1999, age: 78} (returned from cache)
 */ var memoizeWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function memoizeWith(keyGen, fn) {
    var cache = {};
    return (0, _arityJsDefault.default)(fn.length, function() {
        var key = keyGen.apply(this, arguments);
        if (!(0, _hasJsDefault.default)(key, cache)) cache[key] = fn.apply(this, arguments);
        return cache[key];
    });
});
exports.default = memoizeWith;

},{"./internal/_arity.js":"k5H5S","./internal/_curry2.js":"3dy25","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fO5nn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectAssignJs = require("./internal/_objectAssign.js");
var _objectAssignJsDefault = parcelHelpers.interopDefault(_objectAssignJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Creates one new object with the own properties from a list of objects.
 * If a key exists in more than one object, the value from the last
 * object it exists in will be used.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */ var mergeAll = /*#__PURE__*/ (0, _curry1JsDefault.default)(function mergeAll(list) {
    return (0, _objectAssignJsDefault.default).apply(null, [
        {}
    ].concat(list));
});
exports.default = mergeAll;

},{"./internal/_objectAssign.js":"4FYvY","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bcHwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mergeDeepWithKeyJs = require("./mergeDeepWithKey.js");
var _mergeDeepWithKeyJsDefault = parcelHelpers.interopDefault(_mergeDeepWithKeyJs);
/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */ var mergeDeepLeft = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mergeDeepLeft(lObj, rObj) {
    return (0, _mergeDeepWithKeyJsDefault.default)(function(k, lVal, rVal) {
        return lVal;
    }, lObj, rObj);
});
exports.default = mergeDeepLeft;

},{"./internal/_curry2.js":"3dy25","./mergeDeepWithKey.js":"dB8b5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dB8b5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _mergeWithKeyJs = require("./mergeWithKey.js");
var _mergeWithKeyJsDefault = parcelHelpers.interopDefault(_mergeWithKeyJs);
/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */ var mergeDeepWithKey = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mergeDeepWithKey(fn, lObj, rObj) {
    return (0, _mergeWithKeyJsDefault.default)(function(k, lVal, rVal) {
        if ((0, _isObjectJsDefault.default)(lVal) && (0, _isObjectJsDefault.default)(rVal)) return mergeDeepWithKey(fn, lVal, rVal);
        else return fn(k, lVal, rVal);
    }, lObj, rObj);
});
exports.default = mergeDeepWithKey;

},{"./internal/_curry3.js":"jwEOD","./internal/_isObject.js":"hfrpU","./mergeWithKey.js":"6w1Kz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6w1Kz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */ var mergeWithKey = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mergeWithKey(fn, l, r) {
    var result = {};
    var k;
    l = l || {};
    r = r || {};
    for(k in l)if ((0, _hasJsDefault.default)(k, l)) result[k] = (0, _hasJsDefault.default)(k, r) ? fn(k, l[k], r[k]) : l[k];
    for(k in r)if ((0, _hasJsDefault.default)(k, r) && !(0, _hasJsDefault.default)(k, result)) result[k] = r[k];
    return result;
});
exports.default = mergeWithKey;

},{"./internal/_curry3.js":"jwEOD","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"L3UkM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _mergeDeepWithKeyJs = require("./mergeDeepWithKey.js");
var _mergeDeepWithKeyJsDefault = parcelHelpers.interopDefault(_mergeDeepWithKeyJs);
/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */ var mergeDeepRight = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mergeDeepRight(lObj, rObj) {
    return (0, _mergeDeepWithKeyJsDefault.default)(function(k, lVal, rVal) {
        return rVal;
    }, lObj, rObj);
});
exports.default = mergeDeepRight;

},{"./internal/_curry2.js":"3dy25","./mergeDeepWithKey.js":"dB8b5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"id26n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _mergeDeepWithKeyJs = require("./mergeDeepWithKey.js");
var _mergeDeepWithKeyJsDefault = parcelHelpers.interopDefault(_mergeDeepWithKeyJs);
/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */ var mergeDeepWith = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mergeDeepWith(fn, lObj, rObj) {
    return (0, _mergeDeepWithKeyJsDefault.default)(function(k, lVal, rVal) {
        return fn(lVal, rVal);
    }, lObj, rObj);
});
exports.default = mergeDeepWith;

},{"./internal/_curry3.js":"jwEOD","./mergeDeepWithKey.js":"dB8b5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvzDQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectAssignJs = require("./internal/_objectAssign.js");
var _objectAssignJsDefault = parcelHelpers.interopDefault(_objectAssignJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeRight, R.mergeDeepLeft, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const resetToDefault = R.mergeLeft({x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeLeft(a, b) = {...b, ...a}
 */ var mergeLeft = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mergeLeft(l, r) {
    return (0, _objectAssignJsDefault.default)({}, r, l);
});
exports.default = mergeLeft;

},{"./internal/_objectAssign.js":"4FYvY","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jVDyL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _objectAssignJs = require("./internal/_objectAssign.js");
var _objectAssignJsDefault = parcelHelpers.interopDefault(_objectAssignJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeLeft, R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      const withDefaults = R.mergeRight({x: 0, y: 0});
 *      withDefaults({y: 2}); //=> {x: 0, y: 2}
 * @symb R.mergeRight(a, b) = {...a, ...b}
 */ var mergeRight = /*#__PURE__*/ (0, _curry2JsDefault.default)(function mergeRight(l, r) {
    return (0, _objectAssignJsDefault.default)({}, l, r);
});
exports.default = mergeRight;

},{"./internal/_objectAssign.js":"4FYvY","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1oW1g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _mergeWithKeyJs = require("./mergeWithKey.js");
var _mergeWithKeyJsDefault = parcelHelpers.interopDefault(_mergeWithKeyJs);
/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */ var mergeWith = /*#__PURE__*/ (0, _curry3JsDefault.default)(function mergeWith(fn, l, r) {
    return (0, _mergeWithKeyJsDefault.default)(function(_, _l, _r) {
        return fn(_l, _r);
    }, l, r);
});
exports.default = mergeWith;

},{"./internal/_curry3.js":"jwEOD","./mergeWithKey.js":"6w1Kz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CLJW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */ var min = /*#__PURE__*/ (0, _curry2JsDefault.default)(function min(a, b) {
    if (a === b) return a;
    function safeMin(x, y) {
        if (x < y !== y < x) return y < x ? y : x;
        return undefined;
    }
    var minByValue = safeMin(a, b);
    if (minByValue !== undefined) return minByValue;
    var minByType = safeMin(typeof a, typeof b);
    if (minByType !== undefined) return minByType === typeof a ? a : b;
    var stringA = (0, _toStringJsDefault.default)(a);
    var minByStringValue = safeMin(stringA, (0, _toStringJsDefault.default)(b));
    if (minByStringValue !== undefined) return minByStringValue === stringA ? a : b;
    return a;
});
exports.default = min;

},{"./internal/_curry2.js":"3dy25","./toString.js":"8yWci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBzQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _minJs = require("./min.js");
var _minJsDefault = parcelHelpers.interopDefault(_minJs);
/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      const square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */ var minBy = /*#__PURE__*/ (0, _curry3JsDefault.default)(function minBy(f, a, b) {
    var resultB = f(b);
    return (0, _minJsDefault.default)(f(a), resultB) === resultB ? b : a;
});
exports.default = minBy;

},{"./internal/_curry3.js":"jwEOD","./min.js":"8CLJW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6OXvv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _modifyPathJs = require("./modifyPath.js");
var _modifyPathJsDefault = parcelHelpers.interopDefault(_modifyPathJs);
/**
 * Creates a copy of the passed object by applying an `fn` function to the given `prop` property.
 *
 * The function will not be invoked, and the object will not change
 * if its corresponding property does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig Idx -> (v -> v) -> {k: v} -> {k: v}
 * @param {String|Number} prop The property to be modified.
 * @param {Function} fn The function to apply to the property.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const person = {name: 'James', age: 20, pets: ['dog', 'cat']};
 *      R.modify('age', R.add(1), person); //=> {name: 'James', age: 21, pets: ['dog', 'cat']}
 *      R.modify('pets', R.append('turtle'), person); //=> {name: 'James', age: 20, pets: ['dog', 'cat', 'turtle']}
 */ var modify = /*#__PURE__*/ (0, _curry3JsDefault.default)(function modify(prop, fn, object) {
    return (0, _modifyPathJsDefault.default)([
        prop
    ], fn, object);
});
exports.default = modify;

},{"./internal/_curry3.js":"jwEOD","./modifyPath.js":"950Qf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"950Qf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectJs = require("./internal/_isObject.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
var _assocJs = require("./internal/_assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
var _modifyJs = require("./internal/_modify.js");
var _modifyJsDefault = parcelHelpers.interopDefault(_modifyJs);
/**
 * Creates a shallow clone of the passed object by applying an `fn` function
 * to the value at the given path.
 *
 * The function will not be invoked, and the object will not change
 * if its corresponding path does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig [Idx] -> (v -> v) -> {k: v} -> {k: v}
 * @param {Array} path The path to be modified.
 * @param {Function} fn The function to apply to the path.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      const person = {name: 'James', address: { zipCode: '90216' }};
 *      R.modifyPath(['address', 'zipCode'], R.reverse, person); //=> {name: 'James', address: { zipCode: '61209' }}
 *
 *      // Can handle arrays too
 *      const person = {name: 'James', addresses: [{ zipCode: '90216' }]};
 *      R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person); //=> {name: 'James', addresses: [{ zipCode: '61209' }]}
 */ var modifyPath = /*#__PURE__*/ (0, _curry3JsDefault.default)(function modifyPath(path, fn, object) {
    if (!(0, _isObjectJsDefault.default)(object) && !(0, _isArrayJsDefault.default)(object) || path.length === 0) return object;
    var idx = path[0];
    if (!(0, _hasJsDefault.default)(idx, object)) return object;
    if (path.length === 1) return (0, _modifyJsDefault.default)(idx, fn, object);
    var val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[idx]);
    if (val === object[idx]) return object;
    return (0, _assocJsDefault.default)(idx, val, object);
});
exports.default = modifyPath;

},{"./internal/_curry3.js":"jwEOD","./internal/_isArray.js":"3Yv3G","./internal/_isObject.js":"hfrpU","./internal/_has.js":"armmH","./internal/_assoc.js":"ouNCD","./internal/_modify.js":"71xgK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"71xgK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_modify);
var _isArrayJs = require("./_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isIntegerJs = require("./_isInteger.js");
var _isIntegerJsDefault = parcelHelpers.interopDefault(_isIntegerJs);
function _modify(prop, fn, obj) {
    if ((0, _isIntegerJsDefault.default)(prop) && (0, _isArrayJsDefault.default)(obj)) {
        var arr = [].concat(obj);
        arr[prop] = fn(arr[prop]);
        return arr;
    }
    var result = {};
    for(var p in obj)result[p] = obj[p];
    result[prop] = fn(result[prop]);
    return result;
}

},{"./_isArray.js":"3Yv3G","./_isInteger.js":"3AbYy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDZN8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      const isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */ var modulo = /*#__PURE__*/ (0, _curry2JsDefault.default)(function modulo(a, b) {
    return a % b;
});
exports.default = modulo;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXY9y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Move an item, at index `from`, to index `to`, in a list of elements.
 * A new list will be created containing the new elements order.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} from The source index
 * @param {Number} to The destination index
 * @param {Array} list The list which will serve to realise the move
 * @return {Array} The new list reordered
 * @example
 *
 *      R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
 *      R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
 */ var move = /*#__PURE__*/ (0, _curry3JsDefault.default)(function(from, to, list) {
    var length = list.length;
    var result = list.slice();
    var positiveFrom = from < 0 ? length + from : from;
    var positiveTo = to < 0 ? length + to : to;
    var item = result.splice(positiveFrom, 1);
    return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
});
exports.default = move;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bIYrs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      const double = R.multiply(2);
 *      const triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */ var multiply = /*#__PURE__*/ (0, _curry2JsDefault.default)(function multiply(a, b) {
    return a * b;
});
exports.default = multiply;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5lWB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mergeDeepRightJs = require("./mergeDeepRight.js");
var _mergeDeepRightJsDefault = parcelHelpers.interopDefault(_mergeDeepRightJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Takes a function `f` and an object, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the object
 * provided initially merged deeply (right) with the object provided as an argument to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig (({ a, b, c, ..., n }) -> x) -> { a, b, c, ...} -> ({ d, e, f, ..., n } -> x)
 * @param {Function} f
 * @param {Object} props
 * @return {Function}
 * @see R.partial, R.partialRight, R.curry, R.mergeDeepRight
 * @example
 *
 *      const multiply2 = ({ a, b }) => a * b;
 *      const double = R.partialObject(multiply2, { a: 2 });
 *      double({ b: 2 }); //=> 4
 *
 *      const greet = ({ salutation, title, firstName, lastName }) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partialObject(greet, { salutation: 'Hello' });
 *      const sayHelloToMs = R.partialObject(sayHello, { title: 'Ms.' });
 *      sayHelloToMs({ firstName: 'Jane', lastName: 'Jones' }); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialObject(f, { a, b })({ c, d }) = f({ a, b, c, d })
 */ var partialObject = /*#__PURE__*/ (0, _curry2JsDefault.default)((f, o)=>(props)=>f.call(undefined, (0, _mergeDeepRightJsDefault.default)(o, props)));
exports.default = partialObject;

},{"./mergeDeepRight.js":"L3UkM","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGjKU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */ var negate = /*#__PURE__*/ (0, _curry1JsDefault.default)(function negate(n) {
    return -n;
});
exports.default = negate;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipKw8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _complementJs = require("./internal/_complement.js");
var _complementJsDefault = parcelHelpers.interopDefault(_complementJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _allJs = require("./all.js");
var _allJsDefault = parcelHelpers.interopDefault(_allJs);
/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *      const isOdd = n => n % 2 !== 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
 */ var none = /*#__PURE__*/ (0, _curry2JsDefault.default)(function none(fn, input) {
    return (0, _allJsDefault.default)((0, _complementJsDefault.default)(fn), input);
});
exports.default = none;

},{"./internal/_complement.js":"bywEV","./internal/_curry2.js":"3dy25","./all.js":"83sIL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fO99P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _nthJs = require("./nth.js");
var _nthJsDefault = parcelHelpers.interopDefault(_nthJs);
/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */ var nthArg = /*#__PURE__*/ (0, _curry1JsDefault.default)(function nthArg(n) {
    var arity = n < 0 ? 1 : n + 1;
    return (0, _curryNJsDefault.default)(arity, function() {
        return (0, _nthJsDefault.default)(n, arguments);
    });
});
exports.default = nthArg;

},{"./internal/_curry1.js":"kg5MS","./curryN.js":"a5Onp","./nth.js":"gnCZG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGpSJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument. Also, unlike [`compose`](#compose), `o` is
 * limited to accepting only 2 unary functions. The name o was chosen because
 * of its similarity to the mathematical composition operator ∘.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
 *      const yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */ var o = /*#__PURE__*/ (0, _curry3JsDefault.default)(function o(f, g, x) {
    return f(g(x));
});
exports.default = o;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XhKp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Given a constructor and a value, returns a new instance of that constructor
 * containing the value.
 *
 * Dispatches to the `fantasy-land/of` method of the constructor first (if present)
 * or to the `of` method last (if present). When neither are present, wraps the
 * value in an array.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig (* -> {*}) -> a -> {a}
 * @param {Object} Ctor A constructor
 * @param {*} val any value
 * @return {*} An instance of the `Ctor` wrapping `val`.
 * @example
 *
 *      R.of(Array, 42);   //=> [42]
 *      R.of(Array, [42]); //=> [[42]]
 *      R.of(Maybe, 42);   //=> Maybe.Just(42)
 */ var of = /*#__PURE__*/ (0, _curry2JsDefault.default)(function of(Ctor, val) {
    return typeof Ctor["fantasy-land/of"] === "function" ? Ctor["fantasy-land/of"](val) : typeof Ctor.of === "function" ? Ctor.of(val) : [
        val
    ];
});
exports.default = of;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gbhSl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */ var omit = /*#__PURE__*/ (0, _curry2JsDefault.default)(function omit(names, obj) {
    var result = {};
    var index = {};
    var idx = 0;
    var len = names.length;
    while(idx < len){
        index[names[idx]] = 1;
        idx += 1;
    }
    for(var prop in obj)if (!index.hasOwnProperty(prop)) result[prop] = obj[prop];
    return result;
});
exports.default = omit;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32w0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Takes a binary function `f`, a unary function `g`, and two values.
 * Applies `g` to each value, then applies the result of each to `f`.
 *
 * Also known as the P combinator.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig ((a, a) -> b) -> (c -> a) -> c -> c -> b
 * @param {Function} f a binary function
 * @param {Function} g a unary function
 * @param {any} a any value
 * @param {any} b any value
 * @return {any} The result of `f`
 * @example
 *
 *      const eqBy = R.on((a, b) => a === b);
 *      eqBy(R.prop('a'), {b:0, a:1}, {a:1}) //=> true;
 *
 *      const containsInsensitive = R.on(R.includes, R.toLower);
 *      containsInsensitive('o', 'FOO'); //=> true
 * @symb R.on(f, g, a, b) = f(g(a), g(b))
 */ var on = /*#__PURE__*/ (0, _curryNJsDefault.default)(4, [], function on(f, g, a, b) {
    return f(g(a), g(b));
});
exports.default = on;

},{"./internal/_curryN.js":"epMsX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"czXyM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      const addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */ var once = /*#__PURE__*/ (0, _curry1JsDefault.default)(function once(fn) {
    var called = false;
    var result;
    return (0, _arityJsDefault.default)(fn.length, function() {
        if (called) return result;
        called = true;
        result = fn.apply(this, arguments);
        return result;
    });
});
exports.default = once;

},{"./internal/_arity.js":"k5H5S","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXVwy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _assertPromiseJs = require("./internal/_assertPromise.js");
var _assertPromiseJsDefault = parcelHelpers.interopDefault(_assertPromiseJs);
/**
 * Returns the result of applying the onFailure function to the value inside
 * a failed promise. This is useful for handling rejected promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig (e -> b) -> (Promise e a) -> (Promise e b)
 * @sig (e -> (Promise f b)) -> (Promise e a) -> (Promise f b)
 * @param {Function} onFailure The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(null, onFailure)`
 * @see R.andThen
 * @example
 *
 *      const failedFetch = id => Promise.reject('bad ID');
 *      const useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' });
 *
 *      //recoverFromFailure :: String -> Promise ({ firstName, lastName })
 *      const recoverFromFailure = R.pipe(
 *        failedFetch,
 *        R.otherwise(useDefault),
 *        R.andThen(R.pick(['firstName', 'lastName'])),
 *      );
 *      recoverFromFailure(12345).then(console.log);
 */ var otherwise = /*#__PURE__*/ (0, _curry2JsDefault.default)(function otherwise(f, p) {
    (0, _assertPromiseJsDefault.default)("otherwise", p);
    return p.then(null, f);
});
exports.default = otherwise;

},{"./internal/_curry2.js":"3dy25","./internal/_assertPromise.js":"3VXda","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3VXda":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_assertPromise);
var _isFunctionJs = require("./_isFunction.js");
var _isFunctionJsDefault = parcelHelpers.interopDefault(_isFunctionJs);
var _toStringJs = require("./_toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
function _assertPromise(name, p) {
    if (p == null || !(0, _isFunctionJsDefault.default)(p.then)) throw new TypeError("`" + name + "` expected a Promise, received " + (0, _toStringJsDefault.default)(p, []));
}

},{"./_isFunction.js":"8huhf","./_toString.js":"5TmhK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0UGXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js"); // `Identity` is a functor that holds a single value, where `map` simply
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
// transforms the held value with the provided function.
var Identity = function(x) {
    return {
        value: x,
        map: function(f) {
            return Identity(f(x));
        }
    };
};
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.view, R.set, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */ var over = /*#__PURE__*/ (0, _curry3JsDefault.default)(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) {
        return Identity(f(y));
    })(x).value;
});
exports.default = over;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fISQ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */ var pair = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pair(fst, snd) {
    return [
        fst,
        snd
    ];
});
exports.default = pair;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxacY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _createPartialApplicatorJs = require("./internal/_createPartialApplicator.js");
var _createPartialApplicatorJsDefault = parcelHelpers.interopDefault(_createPartialApplicatorJs);
/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight, R.curry
 * @example
 *
 *      const multiply2 = (a, b) => a * b;
 *      const double = R.partial(multiply2, [2]);
 *      double(3); //=> 6
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const sayHello = R.partial(greet, ['Hello']);
 *      const sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */ var partial = /*#__PURE__*/ (0, _createPartialApplicatorJsDefault.default)((0, _concatJsDefault.default));
exports.default = partial;

},{"./internal/_concat.js":"kLoKe","./internal/_createPartialApplicator.js":"4qusp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4qusp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_createPartialApplicator);
var _arityJs = require("./_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _curry2Js = require("./_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
function _createPartialApplicator(concat) {
    return (0, _curry2JsDefault.default)(function(fn, args) {
        return (0, _arityJsDefault.default)(Math.max(0, fn.length - args.length), function() {
            return fn.apply(this, concat(args, arguments));
        });
    });
}

},{"./_arity.js":"k5H5S","./_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28ahL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _createPartialApplicatorJs = require("./internal/_createPartialApplicator.js");
var _createPartialApplicatorJsDefault = parcelHelpers.interopDefault(_createPartialApplicatorJs);
var _flipJs = require("./flip.js");
var _flipJsDefault = parcelHelpers.interopDefault(_flipJs);
/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      const greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      const greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */ var partialRight = /*#__PURE__*/ (0, _createPartialApplicatorJsDefault.default)(/*#__PURE__*/ (0, _flipJsDefault.default)((0, _concatJsDefault.default)));
exports.default = partialRight;

},{"./internal/_concat.js":"kLoKe","./internal/_createPartialApplicator.js":"4qusp","./flip.js":"3o46f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hdViw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _filterJs = require("./filter.js");
var _filterJsDefault = parcelHelpers.interopDefault(_filterJs);
var _juxtJs = require("./juxt.js");
var _juxtJsDefault = parcelHelpers.interopDefault(_juxtJs);
var _rejectJs = require("./reject.js");
var _rejectJsDefault = parcelHelpers.interopDefault(_rejectJs);
/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */ var partition = /*#__PURE__*/ (0, _juxtJsDefault.default)([
    (0, _filterJsDefault.default),
    (0, _rejectJsDefault.default)
]);
exports.default = partition;

},{"./filter.js":"1ECWS","./juxt.js":"gTjBi","./reject.js":"dcaMG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"duHSE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int | Symbol
 * @sig a -> [Idx] -> {a} -> Boolean
 * @param {*} val The value to compare the nested property with
 * @param {Array} path The path of the nested property to use
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @see R.whereEq, R.propEq, R.pathSatisfies, R.equals
 * @example
 *
 *      const user1 = { address: { zipCode: 90210 } };
 *      const user2 = { address: { zipCode: 55555 } };
 *      const user3 = { name: 'Bob' };
 *      const users = [ user1, user2, user3 ];
 *      const isFamous = R.pathEq(90210, ['address', 'zipCode']);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */ var pathEq = /*#__PURE__*/ (0, _curry3JsDefault.default)(function pathEq(val, _path, obj) {
    return (0, _equalsJsDefault.default)((0, _pathJsDefault.default)(_path, obj), val);
});
exports.default = pathEq;

},{"./internal/_curry3.js":"jwEOD","./equals.js":"fVrfR","./path.js":"9uBgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvIWi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _defaultToJs = require("./defaultTo.js");
var _defaultToJsDefault = parcelHelpers.interopDefault(_defaultToJs);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int | Symbol
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */ var pathOr = /*#__PURE__*/ (0, _curry3JsDefault.default)(function pathOr(d, p, obj) {
    return (0, _defaultToJsDefault.default)(d, (0, _pathJsDefault.default)(p, obj));
});
exports.default = pathOr;

},{"./internal/_curry3.js":"jwEOD","./defaultTo.js":"5gJsd","./path.js":"9uBgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxJ6R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int | Symbol
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 *      R.pathSatisfies(R.is(Object), [], {x: {y: 2}}); //=> true
 */ var pathSatisfies = /*#__PURE__*/ (0, _curry3JsDefault.default)(function pathSatisfies(pred, propPath, obj) {
    return pred((0, _pathJsDefault.default)(propPath, obj));
});
exports.default = pathSatisfies;

},{"./internal/_curry3.js":"jwEOD","./path.js":"9uBgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMFMM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */ var pick = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pick(names, obj) {
    var result = {};
    var idx = 0;
    while(idx < names.length){
        if (names[idx] in obj) result[names[idx]] = obj[names[idx]];
        idx += 1;
    }
    return result;
});
exports.default = pick;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dDFUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */ var pickAll = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pickAll(names, obj) {
    var result = {};
    var idx = 0;
    var len = names.length;
    while(idx < len){
        var name = names[idx];
        result[name] = obj[name];
        idx += 1;
    }
    return result;
});
exports.default = pickAll;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2D3vi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      const isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */ var pickBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(function pickBy(test, obj) {
    var result = {};
    for(var prop in obj)if (test(obj[prop], prop, obj)) result[prop] = obj[prop];
    return result;
});
exports.default = pickBy;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6TUs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */ var prepend = /*#__PURE__*/ (0, _curry2JsDefault.default)(function prepend(el, list) {
    return (0, _concatJsDefault.default)([
        el
    ], list);
});
exports.default = prepend;

},{"./internal/_concat.js":"kLoKe","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Gw6R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _multiplyJs = require("./multiply.js");
var _multiplyJsDefault = parcelHelpers.interopDefault(_multiplyJs);
var _reduceJs = require("./reduce.js");
var _reduceJsDefault = parcelHelpers.interopDefault(_reduceJs);
/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */ var product = /*#__PURE__*/ (0, _reduceJsDefault.default)((0, _multiplyJsDefault.default), 1);
exports.default = product;

},{"./multiply.js":"bIYrs","./reduce.js":"8LF8v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5jG6h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("./internal/_map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _identityJs = require("./identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _pickAllJs = require("./pickAll.js");
var _pickAllJsDefault = parcelHelpers.interopDefault(_pickAllJs);
var _useWithJs = require("./useWith.js");
var _useWithJsDefault = parcelHelpers.interopDefault(_useWithJs);
/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @see R.pluck, R.props, R.prop
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      const kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */ var project = /*#__PURE__*/ (0, _useWithJsDefault.default)((0, _mapJsDefault.default), [
    (0, _pickAllJsDefault.default),
    (0, _identityJsDefault.default)
]); // passing `identity` gives correct arity
exports.default = project;

},{"./internal/_map.js":"gvTkR","./identity.js":"iXdOZ","./pickAll.js":"dDFUW","./useWith.js":"1JVjt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JVjt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((x1, x2, ...) -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */ var useWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function useWith(fn, transformers) {
    return (0, _curryNJsDefault.default)(transformers.length, function() {
        var args = [];
        var idx = 0;
        while(idx < transformers.length){
            args.push(transformers[idx].call(this, arguments[idx]));
            idx += 1;
        }
        return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
    });
});
exports.default = useWith;

},{"./internal/_curry2.js":"3dy25","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1RCnq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _promapJs = require("./internal/_promap.js");
var _promapJsDefault = parcelHelpers.interopDefault(_promapJs);
var _xpromapJs = require("./internal/_xpromap.js");
var _xpromapJsDefault = parcelHelpers.interopDefault(_xpromapJs);
/**
 * Takes two functions as pre- and post- processors respectively for a third function,
 * i.e. `promap(f, g, h)(x) === g(h(f(x)))`.
 *
 * Dispatches to the `promap` method of the third argument, if present,
 * according to the [FantasyLand Profunctor spec](https://github.com/fantasyland/fantasy-land#profunctor).
 *
 * Acts as a transducer if a transformer is given in profunctor position.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Function
 * @sig (a -> b) -> (c -> d) -> (b -> c) -> (a -> d)
 * @sig Profunctor p => (a -> b) -> (c -> d) -> p b c -> p a d
 * @param {Function} f The preprocessor function, a -> b
 * @param {Function} g The postprocessor function, c -> d
 * @param {Profunctor} profunctor The profunctor instance to be promapped, e.g. b -> c
 * @return {Profunctor} The new profunctor instance, e.g. a -> d
 * @see R.transduce
 * @example
 *
 *      const decodeChar = R.promap(s => s.charCodeAt(), String.fromCharCode, R.add(-8))
 *      const decodeString = R.promap(R.split(''), R.join(''), R.map(decodeChar))
 *      decodeString("ziuli") //=> "ramda"
 *
 * @symb R.promap(f, g, h) = x => g(h(f(x)))
 * @symb R.promap(f, g, profunctor) = profunctor.promap(f, g)
 */ var promap = /*#__PURE__*/ (0, _curry3JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "fantasy-land/promap",
    "promap"
], (0, _xpromapJsDefault.default), (0, _promapJsDefault.default)));
exports.default = promap;

},{"./internal/_curry3.js":"jwEOD","./internal/_dispatchable.js":"kIEUx","./internal/_promap.js":"5pC68","./internal/_xpromap.js":"bCp8o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5pC68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_promap);
function _promap(f, g, profunctor) {
    return function(x) {
        return g(profunctor(f(x)));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCp8o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xpromap);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var _promapJs = require("./_promap.js");
var _promapJsDefault = parcelHelpers.interopDefault(_promapJs);
var XPromap = /*#__PURE__*/ function() {
    function XPromap(f, g, xf) {
        this.xf = xf;
        this.f = f;
        this.g = g;
    }
    XPromap.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XPromap.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XPromap.prototype["@@transducer/step"] = function(result, input) {
        return this.xf["@@transducer/step"](result, (0, _promapJsDefault.default)(this.f, this.g, input));
    };
    return XPromap;
}();
function _xpromap(f, g) {
    return function(xf) {
        return new XPromap(f, g, xf);
    };
}

},{"./_xfBase.js":"f9lll","./_promap.js":"5pC68","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"log8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 * You can test multiple properties with [`R.whereEq`](#whereEq),
 * and test nested path property with [`R.pathEq`](#pathEq).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig a -> String -> Object -> Boolean
 * @param {*} val The value to compare the property with
 * @param {String} name the specified object property's key
 * @param {*} obj The object to check the property in
 * @return {Boolean} `true` if the value equals the specified object property,
 *         `false` otherwise.
 * @see R.whereEq, R.pathEq, R.propSatisfies, R.equals
 * @example
 *
 *      const abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      const fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      const kids = [abby, fred, rusty, alois];
 *      const hasBrownHair = R.propEq('brown', 'hair');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */ var propEq = /*#__PURE__*/ (0, _curry3JsDefault.default)(function propEq(val, name, obj) {
    return (0, _equalsJsDefault.default)(val, (0, _propJsDefault.default)(name, obj));
});
exports.default = propEq;

},{"./internal/_curry3.js":"jwEOD","./prop.js":"fBxsF","./equals.js":"fVrfR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adZJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
var _isJs = require("./is.js");
var _isJsDefault = parcelHelpers.interopDefault(_isJs);
/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */ var propIs = /*#__PURE__*/ (0, _curry3JsDefault.default)(function propIs(type, name, obj) {
    return (0, _isJsDefault.default)(type, (0, _propJsDefault.default)(name, obj));
});
exports.default = propIs;

},{"./internal/_curry3.js":"jwEOD","./prop.js":"fBxsF","./is.js":"fuQeG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j0uAD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _defaultToJs = require("./defaultTo.js");
var _defaultToJsDefault = parcelHelpers.interopDefault(_defaultToJs);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
/**
 * Return the specified property of the given non-null object if the property
 * is present and it's value is not `null`, `undefined` or `NaN`.
 *
 * Otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const favorite = R.prop('favoriteLibrary');
 *      const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */ var propOr = /*#__PURE__*/ (0, _curry3JsDefault.default)(function propOr(val, p, obj) {
    return (0, _defaultToJsDefault.default)(val, (0, _propJsDefault.default)(p, obj));
});
exports.default = propOr;

},{"./internal/_curry3.js":"jwEOD","./defaultTo.js":"5gJsd","./prop.js":"fBxsF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"FXe3w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _propJs = require("./prop.js");
var _propJsDefault = parcelHelpers.interopDefault(_propJs);
/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise. You can test multiple properties with
 * [`R.where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.where, R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */ var propSatisfies = /*#__PURE__*/ (0, _curry3JsDefault.default)(function propSatisfies(pred, name, obj) {
    return pred((0, _propJsDefault.default)(name, obj));
});
exports.default = propSatisfies;

},{"./internal/_curry3.js":"jwEOD","./prop.js":"fBxsF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSOKW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @see R.prop, R.pluck, R.project
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      const fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */ var props = /*#__PURE__*/ (0, _curry2JsDefault.default)(function props(ps, obj) {
    return ps.map(function(p) {
        return (0, _pathJsDefault.default)([
            p
        ], obj);
    });
});
exports.default = props;

},{"./internal/_curry2.js":"3dy25","./path.js":"9uBgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"551P5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isNumberJs = require("./internal/_isNumber.js");
var _isNumberJsDefault = parcelHelpers.interopDefault(_isNumberJs);
/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in the set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */ var range = /*#__PURE__*/ (0, _curry2JsDefault.default)(function range(from, to) {
    if (!((0, _isNumberJsDefault.default)(from) && (0, _isNumberJsDefault.default)(to))) throw new TypeError("Both arguments to range must be numbers");
    var result = [];
    var n = from;
    while(n < to){
        result.push(n);
        n += 1;
    }
    return result;
});
exports.default = range;

},{"./internal/_curry2.js":"3dy25","./internal/_isNumber.js":"i6wAo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gfRkH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*. `reduceRight` may use [`reduced`](#reduced)
 * to short circuit the iteration.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * Be cautious of mutating and returning the accumulator. If you reuse it across
 * invocations, it will continue to accumulate onto the same value. The general
 * recommendation is to always return a new value. If you can't do so for
 * performance reasons, then be sure to reinitialize the accumulator on each
 * invocation.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex, R.reduced
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *      //    -               -2
 *      //   / \              / \
 *      //  1   -            1   3
 *      //     / \              / \
 *      //    2   -     ==>    2  -1
 *      //       / \              / \
 *      //      3   -            3   4
 *      //         / \              / \
 *      //        4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */ var reduceRight = /*#__PURE__*/ (0, _curry3JsDefault.default)(function reduceRight(fn, acc, list) {
    var idx = list.length - 1;
    while(idx >= 0){
        acc = fn(list[idx], acc);
        if (acc && acc["@@transducer/reduced"]) {
            acc = acc["@@transducer/value"];
            break;
        }
        idx -= 1;
    }
    return acc;
});
exports.default = reduceRight;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFnXJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _xReduceJs = require("./internal/_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var _xwrapJs = require("./internal/_xwrap.js");
var _xwrapJsDefault = parcelHelpers.interopDefault(_xwrapJs);
var _reducedJs = require("./internal/_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator. `reduceWhile` may alternatively be short-circuited
 * via [`reduced`](#reduced).
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      const isOdd = (acc, x) => x % 2 !== 0;
 *      const xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      const ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */ var reduceWhile = /*#__PURE__*/ (0, _curryNJsDefault.default)(4, [], function _reduceWhile(pred, fn, a, list) {
    var xf = (0, _xwrapJsDefault.default)(function(acc, x) {
        return pred(acc, x) ? fn(acc, x) : (0, _reducedJsDefault.default)(acc);
    });
    return (0, _xReduceJsDefault.default)(xf, a, list);
});
exports.default = reduceWhile;

},{"./internal/_curryN.js":"epMsX","./internal/_xReduce.js":"dqUBX","./internal/_xwrap.js":"cerBU","./internal/_reduced.js":"lGWA2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aMzDf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _reducedJs = require("./internal/_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * This optimization is available to the below functions:
 * - [`reduce`](#reduce)
 * - [`reduceWhile`](#reduceWhile)
 * - [`reduceBy`](#reduceBy)
 * - [`reduceRight`](#reduceRight)
 * - [`transduce`](#transduce)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.reduceWhile, R.reduceBy, R.reduceRight, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */ var reduced = /*#__PURE__*/ (0, _curry1JsDefault.default)((0, _reducedJsDefault.default));
exports.default = reduced;

},{"./internal/_curry1.js":"kg5MS","./internal/_reduced.js":"lGWA2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k9lSh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _alwaysJs = require("./always.js");
var _alwaysJsDefault = parcelHelpers.interopDefault(_alwaysJs);
var _timesJs = require("./times.js");
var _timesJsDefault = parcelHelpers.interopDefault(_timesJs);
/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      const obj = {};
 *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */ var repeat = /*#__PURE__*/ (0, _curry2JsDefault.default)(function repeat(value, n) {
    return (0, _timesJsDefault.default)((0, _alwaysJsDefault.default)(value), n);
});
exports.default = repeat;

},{"./internal/_curry2.js":"3dy25","./always.js":"kfWcy","./times.js":"iySOg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iySOg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */ var times = /*#__PURE__*/ (0, _curry2JsDefault.default)(function times(fn, n) {
    var len = Number(n);
    var idx = 0;
    var list;
    if (len < 0 || isNaN(len)) throw new RangeError("n must be a non-negative number");
    list = [];
    while(idx < len){
        list.push(fn(idx));
        idx += 1;
    }
    return list;
});
exports.default = times;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aObVi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * The first two parameters correspond to the parameters of the
 * `String.prototype.replace()` function, so the second parameter can also be a
 * function.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */ var replace = /*#__PURE__*/ (0, _curry3JsDefault.default)(function replace(regex, replacement, str) {
    return str.replace(regex, replacement);
});
exports.default = replace;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1P2uM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xscanJs = require("./internal/_xscan.js");
var _xscanJsDefault = parcelHelpers.interopDefault(_xscanJs);
/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce, R.mapAccum
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */ var scan = /*#__PURE__*/ (0, _curry3JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xscanJsDefault.default), function scan(fn, acc, list) {
    var idx = 0;
    var len = list.length;
    var result = [
        acc
    ];
    while(idx < len){
        acc = fn(acc, list[idx]);
        result[idx + 1] = acc;
        idx += 1;
    }
    return result;
}));
exports.default = scan;

},{"./internal/_curry3.js":"jwEOD","./internal/_dispatchable.js":"kIEUx","./internal/_xscan.js":"9FOVF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FOVF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var tInit = "@@transducer/init";
var tStep = "@@transducer/step";
var XScan = /*#__PURE__*/ function() {
    function XScan(reducer, acc, xf) {
        this.xf = xf;
        this.f = reducer;
        this.acc = acc;
    }
    XScan.prototype[tInit] = function() {
        return this.xf[tStep](this.xf[tInit](), this.acc);
    };
    XScan.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XScan.prototype[tStep] = function(result, input) {
        if (result["@@transducer/reduced"]) return result;
        this.acc = this.f(this.acc, input);
        return this.xf[tStep](result, this.acc);
    };
    return XScan;
}();
var _xscan = /*#__PURE__*/ (0, _curry3JsDefault.default)(function _xscan(reducer, acc, xf) {
    return new XScan(reducer, acc, xf);
});
exports.default = _xscan;

},{"./_curry3.js":"jwEOD","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"72o2r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _apJs = require("./ap.js");
var _apJsDefault = parcelHelpers.interopDefault(_apJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _prependJs = require("./prepend.js");
var _prependJsDefault = parcelHelpers.interopDefault(_prependJs);
var _reduceRightJs = require("./reduceRight.js");
var _reduceRightJsDefault = parcelHelpers.interopDefault(_reduceRightJs);
var _identityJs = require("./internal/_identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `"fantasy-land/traverse"` or the `traverse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig fantasy-land/of :: TypeRep f => f ~> a -> f a
 * @sig (Applicative f, Traversable t) => TypeRep f -> t (f a) -> f (t a)
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Object|Function} TypeRepresentative with an `of` or `fantasy-land/of` method
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of(Array), Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of(Array), Nothing());       //=> [Nothing()]
 */ var sequence = /*#__PURE__*/ (0, _curry2JsDefault.default)(function sequence(F, traversable) {
    var of = typeof F["fantasy-land/of"] === "function" ? F["fantasy-land/of"] : typeof F.of === "function" ? F.of : F;
    var TypeRep = {
        "fantasy-land/of": of
    };
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](TypeRep, (0, _identityJsDefault.default)) : typeof traversable.traverse === "function" ? traversable.traverse(TypeRep, (0, _identityJsDefault.default)) : (0, _reduceRightJsDefault.default)(function(x, acc) {
        return (0, _apJsDefault.default)((0, _mapJsDefault.default)((0, _prependJsDefault.default), x), acc);
    }, of([]), traversable);
});
exports.default = sequence;

},{"./internal/_curry2.js":"3dy25","./ap.js":"93976","./map.js":"dC8Ps","./prepend.js":"i6TUs","./reduceRight.js":"gfRkH","./internal/_identity.js":"l3ABm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JIqs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _alwaysJs = require("./always.js");
var _alwaysJsDefault = parcelHelpers.interopDefault(_alwaysJs);
var _overJs = require("./over.js");
var _overJsDefault = parcelHelpers.interopDefault(_overJs);
/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.view, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */ var set = /*#__PURE__*/ (0, _curry3JsDefault.default)(function set(lens, v, x) {
    return (0, _overJsDefault.default)(lens, (0, _alwaysJsDefault.default)(v), x);
});
exports.default = set;

},{"./internal/_curry3.js":"jwEOD","./always.js":"kfWcy","./over.js":"0UGXI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FuQY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, a) -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @see R.ascend, R.descend
 * @example
 *
 *      const diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */ var sort = /*#__PURE__*/ (0, _curry2JsDefault.default)(function sort(comparator, list) {
    return Array.prototype.slice.call(list, 0).sort(comparator);
});
exports.default = sort;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ip624":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      const sortByFirstItem = R.sortBy(R.prop(0));
 *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *
 *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      const people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */ var sortBy = /*#__PURE__*/ (0, _curry2JsDefault.default)(function sortBy(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
        var aa = fn(a);
        var bb = fn(b);
        return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
});
exports.default = sortBy;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ksw5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [(a, a) -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @see R.ascend, R.descend
 * @example
 *
 *      const alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      const bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      const people = [clara, bob, alice];
 *      const ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */ var sortWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function sortWith(fns, list) {
    return Array.prototype.slice.call(list, 0).sort(function(a, b) {
        var result = 0;
        var i = 0;
        while(result === 0 && i < fns.length){
            result = fns[i](a, b);
            i += 1;
        }
        return result;
    });
});
exports.default = sortWith;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9C81w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _invokerJs = require("./invoker.js");
var _invokerJsDefault = parcelHelpers.interopDefault(_invokerJs);
/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `sep`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */ var split = /*#__PURE__*/ (0, _invokerJsDefault.default)(1, "split");
exports.default = split;

},{"./invoker.js":"22Ugy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dkva2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _lengthJs = require("./length.js");
var _lengthJsDefault = parcelHelpers.interopDefault(_lengthJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */ var splitAt = /*#__PURE__*/ (0, _curry2JsDefault.default)(function splitAt(index, array) {
    return [
        (0, _sliceJsDefault.default)(0, index, array),
        (0, _sliceJsDefault.default)(index, (0, _lengthJsDefault.default)(array), array)
    ];
});
exports.default = splitAt;

},{"./internal/_curry2.js":"3dy25","./length.js":"ehc8r","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6G7b3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */ var splitEvery = /*#__PURE__*/ (0, _curry2JsDefault.default)(function splitEvery(n, list) {
    if (n <= 0) throw new Error("First argument to splitEvery must be a positive integer");
    var result = [];
    var idx = 0;
    while(idx < list.length)result.push((0, _sliceJsDefault.default)(idx, idx += n, list));
    return result;
});
exports.default = splitEvery;

},{"./internal/_curry2.js":"3dy25","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bX4aG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */ var splitWhen = /*#__PURE__*/ (0, _curry2JsDefault.default)(function splitWhen(pred, list) {
    var idx = 0;
    var len = list.length;
    var prefix = [];
    while(idx < len && !pred(list[idx])){
        prefix.push(list[idx]);
        idx += 1;
    }
    return [
        prefix,
        Array.prototype.slice.call(list, idx)
    ];
});
exports.default = splitWhen;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjEF3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curryNJs = require("./internal/_curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Splits an array into slices on every occurrence of a value.
 *
 * @func
 * @memberOf R
 * @since v0.26.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); //=> [[1], [3], [4, 5], [6, 7]]
 */ var splitWhenever = /*#__PURE__*/ (0, _curryNJsDefault.default)(2, [], function splitWhenever(pred, list) {
    var acc = [];
    var curr = [];
    for(var i = 0; i < list.length; i = i + 1){
        if (!pred(list[i])) curr.push(list[i]);
        if ((i < list.length - 1 && pred(list[i + 1]) || i === list.length - 1) && curr.length > 0) {
            acc.push(curr);
            curr = [];
        }
    }
    return acc;
});
exports.default = splitWhenever;

},{"./internal/_curryN.js":"epMsX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k69m9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
var _takeJs = require("./take.js");
var _takeJsDefault = parcelHelpers.interopDefault(_takeJs);
/**
 * Checks if a list starts with the provided sublist.
 *
 * Similarly, checks if a string starts with the provided substring.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> [a] -> Boolean
 * @sig String -> String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @see R.endsWith
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */ var startsWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(function(prefix, list) {
    return (0, _equalsJsDefault.default)((0, _takeJsDefault.default)(prefix.length, list), prefix);
});
exports.default = startsWith;

},{"./internal/_curry2.js":"3dy25","./equals.js":"fVrfR","./take.js":"1Kn5O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85sgf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      const minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      const complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */ var subtract = /*#__PURE__*/ (0, _curry2JsDefault.default)(function subtract(a, b) {
    return Number(a) - Number(b);
});
exports.default = subtract;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d81g3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isStringJs = require("./internal/_isString.js");
var _isStringJsDefault = parcelHelpers.interopDefault(_isStringJs);
var _cloneJs = require("./clone.js");
var _cloneJsDefault = parcelHelpers.interopDefault(_cloneJs);
var swapObject = function(indexA, indexB, o) {
    var copy = (0, _cloneJsDefault.default)(o);
    var properties = Object.getOwnPropertyNames(copy);
    if (properties.includes(indexA) && properties.includes(indexB)) {
        var tmp = copy[indexA];
        copy[indexA] = copy[indexB];
        copy[indexB] = tmp;
    }
    return copy;
};
var swapList = function(indexA, indexB, list) {
    var length = list.length;
    var result = list.slice();
    var positiveIndexA = indexA < 0 ? length + indexA : indexA;
    var positiveIndexB = indexB < 0 ? length + indexB : indexB;
    var positiveMin = Math.min(positiveIndexA, positiveIndexB);
    var positiveMax = Math.max(positiveIndexA, positiveIndexB);
    if (positiveIndexA < 0 || positiveIndexA > length) return result;
    if (positiveIndexB < 0 || positiveIndexB > length) return result;
    if (positiveIndexA === positiveIndexB) return result;
    result = [].concat(result.slice(0, positiveMin)).concat(result[positiveMax]).concat(result.slice(positiveMin + 1, positiveMax)).concat(result[positiveMin]).concat(result.slice(positiveMax + 1, length));
    return result;
};
var swapString = function(indexA, indexB, s) {
    var result = swapList(indexA, indexB, s);
    return (0, _isArrayJsDefault.default)(result) ? result.join("") : result;
};
/**
 * Swap an item, at index `indexA` with another item, at index `indexB`, in an object or a list of elements.
 * A new result will be created containing the new elements order.
 *
 * @func
 * @memberOf R
 * @since v0.29.0
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number|string|Object} indexA The first index
 * @param {Number|string|Object} indexB The second index
 * @param {Array|Object} o Either the object or list which will serve to realise the swap
 * @return {Array|Object} The new object or list reordered
 * @example
 *
 *      R.swap(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['c', 'b', 'a', 'd', 'e', 'f']
 *      R.swap(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'b', 'c', 'd', 'e', 'a'] list rotation
 *      R.swap('a', 'b', {a: 1, b: 2}); //=> {a: 2, b: 2}
 *      R.swap(0, 2, 'foo'); //=> 'oof'
 */ var swap = /*#__PURE__*/ (0, _curry3JsDefault.default)(function(indexA, indexB, o) {
    if ((0, _isArrayJsDefault.default)(o)) return swapList(indexA, indexB, o);
    else if ((0, _isStringJsDefault.default)(o)) return swapString(indexA, indexB, o);
    else return swapObject(indexA, indexB, o);
});
exports.default = swap;

},{"./internal/_curry3.js":"jwEOD","./internal/_isArray.js":"3Yv3G","./internal/_isString.js":"a1eoi","./clone.js":"5ueus","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j3F5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _concatJs = require("./concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _differenceJs = require("./difference.js");
var _differenceJsDefault = parcelHelpers.interopDefault(_differenceJs);
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */ var symmetricDifference = /*#__PURE__*/ (0, _curry2JsDefault.default)(function symmetricDifference(list1, list2) {
    return (0, _concatJsDefault.default)((0, _differenceJsDefault.default)(list1, list2), (0, _differenceJsDefault.default)(list2, list1));
});
exports.default = symmetricDifference;

},{"./internal/_curry2.js":"3dy25","./concat.js":"eiimS","./difference.js":"2qbIf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSd9e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _concatJs = require("./concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _differenceWithJs = require("./differenceWith.js");
var _differenceWithJsDefault = parcelHelpers.interopDefault(_differenceWithJs);
/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      const eqA = R.eqBy(R.prop('a'));
 *      const l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      const l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */ var symmetricDifferenceWith = /*#__PURE__*/ (0, _curry3JsDefault.default)(function symmetricDifferenceWith(pred, list1, list2) {
    return (0, _concatJsDefault.default)((0, _differenceWithJsDefault.default)(pred, list1, list2), (0, _differenceWithJsDefault.default)(pred, list2, list1));
});
exports.default = symmetricDifferenceWith;

},{"./internal/_curry3.js":"jwEOD","./concat.js":"eiimS","./differenceWith.js":"f8VN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTFW4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      const isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 *
 *      R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
 */ var takeLastWhile = /*#__PURE__*/ (0, _curry2JsDefault.default)(function takeLastWhile(fn, xs) {
    var idx = xs.length - 1;
    while(idx >= 0 && fn(xs[idx]))idx -= 1;
    return (0, _sliceJsDefault.default)(idx + 1, Infinity, xs);
});
exports.default = takeLastWhile;

},{"./internal/_curry2.js":"3dy25","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6mg8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xtakeWhileJs = require("./internal/_xtakeWhile.js");
var _xtakeWhileJsDefault = parcelHelpers.interopDefault(_xtakeWhileJs);
var _sliceJs = require("./slice.js");
var _sliceJsDefault = parcelHelpers.interopDefault(_sliceJs);
/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @sig (a -> Boolean) -> String -> String
 * @param {Function} fn The function called per iteration.
 * @param {Array} xs The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      const isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 *
 *      R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
 */ var takeWhile = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([
    "takeWhile"
], (0, _xtakeWhileJsDefault.default), function takeWhile(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while(idx < len && fn(xs[idx]))idx += 1;
    return (0, _sliceJsDefault.default)(0, idx, xs);
}));
exports.default = takeWhile;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xtakeWhile.js":"1E4p1","./slice.js":"d9rCZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1E4p1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xtakeWhile);
var _reducedJs = require("./_reduced.js");
var _reducedJsDefault = parcelHelpers.interopDefault(_reducedJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XTakeWhile = /*#__PURE__*/ function() {
    function XTakeWhile(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XTakeWhile.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XTakeWhile.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XTakeWhile.prototype["@@transducer/step"] = function(result, input) {
        return this.f(input) ? this.xf["@@transducer/step"](result, input) : (0, _reducedJsDefault.default)(result);
    };
    return XTakeWhile;
}();
function _xtakeWhile(f) {
    return function(xf) {
        return new XTakeWhile(f, xf);
    };
}

},{"./_reduced.js":"lGWA2","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"81b1J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _xtapJs = require("./internal/_xtap.js");
var _xtapJsDefault = parcelHelpers.interopDefault(_xtapJs);
/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * Acts as a transducer if a transformer is given as second parameter.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      const sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = (f(a), a)
 */ var tap = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xtapJsDefault.default), function tap(fn, x) {
    fn(x);
    return x;
}));
exports.default = tap;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_xtap.js":"fzGnu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fzGnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xtap);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XTap = /*#__PURE__*/ function() {
    function XTap(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XTap.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XTap.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XTap.prototype["@@transducer/step"] = function(result, input) {
        this.f(input);
        return this.xf["@@transducer/step"](result, input);
    };
    return XTap;
}();
function _xtap(f) {
    return function(xf) {
        return new XTap(f, xf);
    };
}

},{"./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3uamh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneRegExpJs = require("./internal/_cloneRegExp.js");
var _cloneRegExpJsDefault = parcelHelpers.interopDefault(_cloneRegExpJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isRegExpJs = require("./internal/_isRegExp.js");
var _isRegExpJsDefault = parcelHelpers.interopDefault(_isRegExpJs);
var _toStringJs = require("./toString.js");
var _toStringJsDefault = parcelHelpers.interopDefault(_toStringJs);
/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */ var test = /*#__PURE__*/ (0, _curry2JsDefault.default)(function test(pattern, str) {
    if (!(0, _isRegExpJsDefault.default)(pattern)) throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + (0, _toStringJsDefault.default)(pattern));
    return (0, _cloneRegExpJsDefault.default)(pattern).test(str);
});
exports.default = test;

},{"./internal/_cloneRegExp.js":"apVGW","./internal/_curry2.js":"3dy25","./internal/_isRegExp.js":"kvjeH","./toString.js":"8yWci","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvjeH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_isRegExp);
function _isRegExp(x) {
    return Object.prototype.toString.call(x) === "[object RegExp]";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kF3Id":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _assertPromiseJs = require("./internal/_assertPromise.js");
var _assertPromiseJsDefault = parcelHelpers.interopDefault(_assertPromiseJs);
/**
 * Returns the result of applying the onSuccess function to the value inside
 * a successfully resolved promise. This is useful for working with promises
 * inside function compositions.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Function
 * @sig (a -> b) -> (Promise e a) -> (Promise e b)
 * @sig (a -> (Promise e b)) -> (Promise e a) -> (Promise e b)
 * @param {Function} onSuccess The function to apply. Can return a value or a promise of a value.
 * @param {Promise} p
 * @return {Promise} The result of calling `p.then(onSuccess)`
 * @see R.otherwise
 * @example
 *
 *      const makeQuery = email => ({ query: { email }});
 *      const fetchMember = request =>
 *        Promise.resolve({ firstName: 'Bob', lastName: 'Loblaw', id: 42 });
 *
 *      //getMemberName :: String -> Promise ({ firstName, lastName })
 *      const getMemberName = R.pipe(
 *        makeQuery,
 *        fetchMember,
 *        R.andThen(R.pick(['firstName', 'lastName']))
 *      );
 *
 *      getMemberName('bob@gmail.com').then(console.log);
 */ var andThen = /*#__PURE__*/ (0, _curry2JsDefault.default)(function andThen(f, p) {
    (0, _assertPromiseJsDefault.default)("andThen", p);
    return p.then(f);
});
exports.default = andThen;

},{"./internal/_curry2.js":"3dy25","./internal/_assertPromise.js":"3VXda","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nQhN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _invokerJs = require("./invoker.js");
var _invokerJsDefault = parcelHelpers.interopDefault(_invokerJs);
/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */ var toLower = /*#__PURE__*/ (0, _invokerJsDefault.default)(0, "toLowerCase");
exports.default = toLower;

},{"./invoker.js":"22Ugy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ThfnX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs, R.keys, R.values
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */ var toPairs = /*#__PURE__*/ (0, _curry1JsDefault.default)(function toPairs(obj) {
    var pairs = [];
    for(var prop in obj)if ((0, _hasJsDefault.default)(prop, obj)) pairs[pairs.length] = [
        prop,
        obj[prop]
    ];
    return pairs;
});
exports.default = toPairs;

},{"./internal/_curry1.js":"kg5MS","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"w58Eu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */ var toPairsIn = /*#__PURE__*/ (0, _curry1JsDefault.default)(function toPairsIn(obj) {
    var pairs = [];
    for(var prop in obj)pairs[pairs.length] = [
        prop,
        obj[prop]
    ];
    return pairs;
});
exports.default = toPairsIn;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1KJDM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _invokerJs = require("./invoker.js");
var _invokerJsDefault = parcelHelpers.interopDefault(_invokerJs);
/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */ var toUpper = /*#__PURE__*/ (0, _invokerJsDefault.default)(0, "toUpperCase");
exports.default = toUpper;

},{"./invoker.js":"22Ugy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rZ9T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _xReduceJs = require("./internal/_xReduce.js");
var _xReduceJsDefault = parcelHelpers.interopDefault(_xReduceJs);
var _xwrapJs = require("./internal/_xwrap.js");
var _xwrapJsDefault = parcelHelpers.interopDefault(_xwrapJs);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      const numbers = [1, 2, 3, 4];
 *      const transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      const isOdd = (x) => x % 2 !== 0;
 *      const firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */ var transduce = /*#__PURE__*/ (0, _curryNJsDefault.default)(4, function transduce(xf, fn, acc, list) {
    return (0, _xReduceJsDefault.default)(xf(typeof fn === "function" ? (0, _xwrapJsDefault.default)(fn) : fn), acc, list);
});
exports.default = transduce;

},{"./internal/_xReduce.js":"dqUBX","./internal/_xwrap.js":"cerBU","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ODGP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */ var transpose = /*#__PURE__*/ (0, _curry1JsDefault.default)(function transpose(outerlist) {
    var i = 0;
    var result = [];
    while(i < outerlist.length){
        var innerlist = outerlist[i];
        var j = 0;
        while(j < innerlist.length){
            if (typeof result[j] === "undefined") result[j] = [];
            result[j].push(innerlist[j]);
            j += 1;
        }
        i += 1;
    }
    return result;
});
exports.default = transpose;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9FE1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _sequenceJs = require("./sequence.js");
var _sequenceJsDefault = parcelHelpers.interopDefault(_sequenceJs);
/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `traverse` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig fantasy-land/of :: TypeRep f => f ~> a -> f a
 * @sig (Applicative f, Traversable t) => TypeRep f -> (a -> f b) -> t a -> f (t b)
 * @sig (Applicative f, Traversable t) => (b -> f b) -> (a -> f b) -> t a -> f (t b)
 * @param {Object|Function} TypeRepresentative with an `of` or `fantasy-land/of` method
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Maybe.Nothing` if the given divisor is `0`
 *      const safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing
 *
 *      // Using a Type Representative
 *      R.traverse(Maybe, safeDiv(10), Right(4)); //=> Just(Right(2.5))
 *      R.traverse(Maybe, safeDiv(10), Right(0)); //=> Nothing
 *      R.traverse(Maybe, safeDiv(10), Left("X")); //=> Just(Left("X"))
 */ var traverse = /*#__PURE__*/ (0, _curry3JsDefault.default)(function traverse(F, f, traversable) {
    var of = typeof F["fantasy-land/of"] === "function" ? F["fantasy-land/of"] : typeof F.of === "function" ? F.of : F;
    var TypeRep = {
        "fantasy-land/of": of
    };
    return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](TypeRep, f) : typeof traversable.traverse === "function" ? traversable.traverse(TypeRep, f) : (0, _sequenceJsDefault.default)(TypeRep, (0, _mapJsDefault.default)(f, traversable));
});
exports.default = traverse;

},{"./internal/_curry3.js":"jwEOD","./map.js":"dC8Ps","./sequence.js":"72o2r","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04iHY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var ws = "	\n\v\f\r \xa0              　\u2028\u2029\uFEFF";
var zeroWidth = "​";
var hasProtoTrim = typeof String.prototype.trim === "function";
/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */ var trim = !hasProtoTrim || /*#__PURE__*/ ws.trim() || !/*#__PURE__*/ zeroWidth.trim() ? /*#__PURE__*/ (0, _curry1JsDefault.default)(function trim(str) {
    var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
    var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
    return str.replace(beginRx, "").replace(endRx, "");
}) : /*#__PURE__*/ (0, _curry1JsDefault.default)(function trim(str) {
    return str.trim();
});
exports.default = trim;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpp38":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arityJs = require("./internal/_arity.js");
var _arityJsDefault = parcelHelpers.interopDefault(_arityJs);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send them to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(() => { throw 'foo'}, R.always('caught'))('bar') // =>
 *      'caught'
 *      R.tryCatch(R.times(R.identity), R.always([]))('s') // => []
 *      R.tryCatch(() => { throw 'this is not a valid value'}, (err, value)=>({error : err,  value }))('bar') // => {'error': 'this is not a valid value', 'value': 'bar'}
 */ var tryCatch = /*#__PURE__*/ (0, _curry2JsDefault.default)(function _tryCatch(tryer, catcher) {
    return (0, _arityJsDefault.default)(tryer.length, function() {
        try {
            return tryer.apply(this, arguments);
        } catch (e) {
            return catcher.apply(this, (0, _concatJsDefault.default)([
                e
            ], arguments));
        }
    });
});
exports.default = tryCatch;

},{"./internal/_arity.js":"k5H5S","./internal/_concat.js":"kLoKe","./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AYel":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */ var unapply = /*#__PURE__*/ (0, _curry1JsDefault.default)(function unapply(fn) {
    return function() {
        return fn(Array.prototype.slice.call(arguments, 0));
    };
});
exports.default = unapply;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7JO4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
var _nAryJs = require("./nAry.js");
var _nAryJsDefault = parcelHelpers.interopDefault(_nAryJs);
/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (a -> z)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      const takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      const takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */ var unary = /*#__PURE__*/ (0, _curry1JsDefault.default)(function unary(fn) {
    return (0, _nAryJsDefault.default)(1, fn);
});
exports.default = unary;

},{"./internal/_curry1.js":"kg5MS","./nAry.js":"eJZWa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiNPx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
/**
 * Returns a function of arity `n` from a (manually) curried function.
 * Note that, the returned function is actually a ramda style
 * curryied function, which can accept one or more arguments in each
 * function calling.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b -> c ... -> z) -> ((a -> b -> c ...) -> z)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry, R.curryN
 * @example
 *
 *      const addFour = a => b => c => d => a + b + c + d;
 *
 *      const uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */ var uncurryN = /*#__PURE__*/ (0, _curry2JsDefault.default)(function uncurryN(depth, fn) {
    return (0, _curryNJsDefault.default)(depth, function() {
        var currentDepth = 1;
        var value = fn;
        var idx = 0;
        var endIdx;
        while(currentDepth <= depth && typeof value === "function"){
            endIdx = currentDepth === depth ? arguments.length : idx + value.length;
            value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
            currentDepth += 1;
            idx = endIdx;
        }
        return value;
    });
});
exports.default = uncurryN;

},{"./internal/_curry2.js":"3dy25","./curryN.js":"a5Onp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6qQcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      const f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */ var unfold = /*#__PURE__*/ (0, _curry2JsDefault.default)(function unfold(fn, seed) {
    var pair = fn(seed);
    var result = [];
    while(pair && pair.length){
        result[result.length] = pair[0];
        pair = fn(pair[1]);
    }
    return result;
});
exports.default = unfold;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7Sph":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _composeJs = require("./compose.js");
var _composeJsDefault = parcelHelpers.interopDefault(_composeJs);
var _uniqJs = require("./uniq.js");
var _uniqJsDefault = parcelHelpers.interopDefault(_uniqJs);
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */ var union = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _composeJsDefault.default)((0, _uniqJsDefault.default), (0, _concatJsDefault.default)));
exports.default = union;

},{"./internal/_concat.js":"kLoKe","./internal/_curry2.js":"3dy25","./compose.js":"9PR6Z","./uniq.js":"ilMs6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebmrn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _concatJs = require("./internal/_concat.js");
var _concatJsDefault = parcelHelpers.interopDefault(_concatJs);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
var _uniqWithJs = require("./uniqWith.js");
var _uniqWithJsDefault = parcelHelpers.interopDefault(_uniqWithJs);
/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements. If an element exists
 * in both lists, the first element from the first list will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      const l1 = [{a: 1}, {a: 2}];
 *      const l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */ var unionWith = /*#__PURE__*/ (0, _curry3JsDefault.default)(function unionWith(pred, list1, list2) {
    return (0, _uniqWithJsDefault.default)(pred, (0, _concatJsDefault.default)(list1, list2));
});
exports.default = unionWith;

},{"./internal/_concat.js":"kLoKe","./internal/_curry3.js":"jwEOD","./uniqWith.js":"eoOAT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eoOAT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _dispatchableJs = require("./internal/_dispatchable.js");
var _dispatchableJsDefault = parcelHelpers.interopDefault(_dispatchableJs);
var _includesWithJs = require("./internal/_includesWith.js");
var _includesWithJsDefault = parcelHelpers.interopDefault(_includesWithJs);
var _xuniqWithJs = require("./internal/_xuniqWith.js");
var _xuniqWithJsDefault = parcelHelpers.interopDefault(_xuniqWithJs);
/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig ((a, a) -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      const strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */ var uniqWith = /*#__PURE__*/ (0, _curry2JsDefault.default)(/*#__PURE__*/ (0, _dispatchableJsDefault.default)([], (0, _xuniqWithJsDefault.default), function(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while(idx < len){
        item = list[idx];
        if (!(0, _includesWithJsDefault.default)(pred, item, result)) result[result.length] = item;
        idx += 1;
    }
    return result;
}));
exports.default = uniqWith;

},{"./internal/_curry2.js":"3dy25","./internal/_dispatchable.js":"kIEUx","./internal/_includesWith.js":"19ZT4","./internal/_xuniqWith.js":"8E5va","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8E5va":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_xuniqWith);
var _includesWithJs = require("./_includesWith.js");
var _includesWithJsDefault = parcelHelpers.interopDefault(_includesWithJs);
var _xfBaseJs = require("./_xfBase.js");
var _xfBaseJsDefault = parcelHelpers.interopDefault(_xfBaseJs);
var XUniqWith = /*#__PURE__*/ function() {
    function XUniqWith(pred, xf) {
        this.xf = xf;
        this.pred = pred;
        this.items = [];
    }
    XUniqWith.prototype["@@transducer/init"] = (0, _xfBaseJsDefault.default).init;
    XUniqWith.prototype["@@transducer/result"] = (0, _xfBaseJsDefault.default).result;
    XUniqWith.prototype["@@transducer/step"] = function(result, input) {
        if ((0, _includesWithJsDefault.default)(this.pred, input, this.items)) return result;
        else {
            this.items.push(input);
            return this.xf["@@transducer/step"](result, input);
        }
    };
    return XUniqWith;
}();
function _xuniqWith(pred) {
    return function(xf) {
        return new XUniqWith(pred, xf);
    };
}

},{"./_includesWith.js":"19ZT4","./_xfBase.js":"f9lll","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5jyI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when, R.cond
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */ var unless = /*#__PURE__*/ (0, _curry3JsDefault.default)(function unless(pred, whenFalseFn, x) {
    return pred(x) ? x : whenFalseFn(x);
});
exports.default = unless;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"idbcD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _identityJs = require("./internal/_identity.js");
var _identityJsDefault = parcelHelpers.interopDefault(_identityJs);
var _chainJs = require("./chain.js");
var _chainJsDefault = parcelHelpers.interopDefault(_chainJs);
/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */ var unnest = /*#__PURE__*/ (0, _chainJsDefault.default)((0, _identityJsDefault.default));
exports.default = unnest;

},{"./internal/_identity.js":"l3ABm","./chain.js":"lpW07","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LprR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */ var until = /*#__PURE__*/ (0, _curry3JsDefault.default)(function until(pred, fn, init) {
    var val = init;
    while(!pred(val))val = fn(val);
    return val;
});
exports.default = until;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4FSg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _isArrayJs = require("./internal/_isArray.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _mapJs = require("./internal/_map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _assocJs = require("./internal/_assoc.js");
var _assocJsDefault = parcelHelpers.interopDefault(_assocJs);
/**
 *
 * Deconstructs an array field from the input documents to output a document for each element.
 * Each output document is the input document with the value of the array field replaced by the element.
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig String -> {k: [v]} -> [{k: v}]
 * @param {String} key The key to determine which property of the object should be unwind
 * @param {Object} object The object containing list under property named as key which is to unwind
 * @return {List} A new list of object containing the value of input key having list replaced by each element in the object.
 * @example
 *
 * R.unwind('hobbies', {
 *   name: 'alice',
 *   hobbies: ['Golf', 'Hacking'],
 *   colors: ['red', 'green'],
 * });
 * // [
 * //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
 * //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
 * // ]
 */ var unwind = /*#__PURE__*/ (0, _curry2JsDefault.default)(function(key, object) {
    // If key is not in object or key is not as a list in object
    if (!(key in object && (0, _isArrayJsDefault.default)(object[key]))) return [
        object
    ];
     // Map over object[key] which is a list and assoc each element with key
    return (0, _mapJsDefault.default)(function(item) {
        return (0, _assocJsDefault.default)(key, item, object);
    }, object[key]);
});
exports.default = unwind;

},{"./internal/_curry2.js":"3dy25","./internal/_isArray.js":"3Yv3G","./internal/_map.js":"gvTkR","./internal/_assoc.js":"ouNCD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBWtY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      const F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      const f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */ var valuesIn = /*#__PURE__*/ (0, _curry1JsDefault.default)(function valuesIn(obj) {
    var prop;
    var vs = [];
    for(prop in obj)vs[vs.length] = obj[prop];
    return vs;
});
exports.default = valuesIn;

},{"./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e66ql":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js"); // `Const` is a functor that effectively ignores the function given to `map`.
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var Const = function(x) {
    return {
        value: x,
        "fantasy-land/map": function() {
            return this;
        }
    };
};
/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.set, R.over, R.lens, R.lensIndex, R.lensProp, R.lensPath
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */ var view = /*#__PURE__*/ (0, _curry2JsDefault.default)(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
});
exports.default = view;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ooOM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> b) -> a -> a | b
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless, R.cond
 * @example
 *
 *      // truncate :: String -> String
 *      const truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */ var when = /*#__PURE__*/ (0, _curry3JsDefault.default)(function when(pred, whenTrueFn, x) {
    return pred(x) ? whenTrueFn(x) : x;
});
exports.default = when;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffj5f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.whereEq
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */ var where = /*#__PURE__*/ (0, _curry2JsDefault.default)(function where(spec, testObj) {
    for(var prop in spec){
        if ((0, _hasJsDefault.default)(prop, spec) && !spec[prop](testObj[prop])) return false;
    }
    return true;
});
exports.default = where;

},{"./internal/_curry2.js":"3dy25","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50eWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _hasJs = require("./internal/_has.js");
var _hasJsDefault = parcelHelpers.interopDefault(_hasJs);
/**
 * Takes a spec object and a test object; each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `whereAny` returns true if at least one of the predicates return true,
 * false otherwise.
 *
 * `whereAny` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.28.0
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propSatisfies, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.whereAny({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('xxx')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
 *      pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
 */ var whereAny = /*#__PURE__*/ (0, _curry2JsDefault.default)(function whereAny(spec, testObj) {
    for(var prop in spec){
        if ((0, _hasJsDefault.default)(prop, spec) && spec[prop](testObj[prop])) return true;
    }
    return false;
});
exports.default = whereAny;

},{"./internal/_curry2.js":"3dy25","./internal/_has.js":"armmH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6aSUQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _equalsJs = require("./equals.js");
var _equalsJsDefault = parcelHelpers.interopDefault(_equalsJs);
var _mapJs = require("./map.js");
var _mapJsDefault = parcelHelpers.interopDefault(_mapJs);
var _whereJs = require("./where.js");
var _whereJsDefault = parcelHelpers.interopDefault(_whereJs);
/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.propEq, R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      const pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */ var whereEq = /*#__PURE__*/ (0, _curry2JsDefault.default)(function whereEq(spec, testObj) {
    return (0, _whereJsDefault.default)((0, _mapJsDefault.default)((0, _equalsJsDefault.default), spec), testObj);
});
exports.default = whereEq;

},{"./internal/_curry2.js":"3dy25","./equals.js":"fVrfR","./map.js":"dC8Ps","./where.js":"ffj5f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fju7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
var _setJs = require("./internal/_Set.js");
var _setJsDefault = parcelHelpers.interopDefault(_setJs);
var _rejectJs = require("./reject.js");
var _rejectJsDefault = parcelHelpers.interopDefault(_rejectJs);
/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference, R.remove
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */ var without = /*#__PURE__*/ (0, _curry2JsDefault.default)(function without(xs, list) {
    var toRemove = new (0, _setJsDefault.default)();
    for(var i = 0; i < xs.length; i += 1)toRemove.add(xs[i]);
    return (0, _rejectJsDefault.default)(toRemove.has.bind(toRemove), list);
});
exports.default = without;

},{"./internal/_curry2.js":"3dy25","./internal/_Set.js":"4ERsU","./reject.js":"dcaMG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6I1S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Exclusive disjunction logical operation.
 * Returns `true` if one of the arguments is truthy and the other is falsy.
 * Otherwise, it returns `false`.
 *
 * @func
 * @memberOf R
 * @since v0.27.1
 * @category Logic
 * @sig a -> b -> Boolean
 * @param {Any} a
 * @param {Any} b
 * @return {Boolean} true if one of the arguments is truthy and the other is falsy
 * @see R.or, R.and
 * @example
 *
 *      R.xor(true, true); //=> false
 *      R.xor(true, false); //=> true
 *      R.xor(false, true); //=> true
 *      R.xor(false, false); //=> false
 */ var xor = /*#__PURE__*/ (0, _curry2JsDefault.default)(function xor(a, b) {
    return Boolean(!a ^ !b);
});
exports.default = xor;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXDC6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */ var xprod = /*#__PURE__*/ (0, _curry2JsDefault.default)(function xprod(a, b) {
    // = xprodWith(prepend); (takes about 3 times as long...)
    var idx = 0;
    var ilen = a.length;
    var j;
    var jlen = b.length;
    var result = [];
    while(idx < ilen){
        j = 0;
        while(j < jlen){
            result[result.length] = [
                a[idx],
                b[j]
            ];
            j += 1;
        }
        idx += 1;
    }
    return result;
});
exports.default = xprod;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dq4hq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */ var zip = /*#__PURE__*/ (0, _curry2JsDefault.default)(function zip(a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while(idx < len){
        rv[idx] = [
            a[idx],
            b[idx]
        ];
        idx += 1;
    }
    return rv;
});
exports.default = zip;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"J2L8B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry2Js = require("./internal/_curry2.js");
var _curry2JsDefault = parcelHelpers.interopDefault(_curry2Js);
/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zip, fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */ var zipObj = /*#__PURE__*/ (0, _curry2JsDefault.default)(function zipObj(keys, values) {
    var idx = 0;
    var len = Math.min(keys.length, values.length);
    var out = {};
    while(idx < len){
        out[keys[idx]] = values[idx];
        idx += 1;
    }
    return out;
});
exports.default = zipObj;

},{"./internal/_curry2.js":"3dy25","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0A4J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curry3Js = require("./internal/_curry3.js");
var _curry3JsDefault = parcelHelpers.interopDefault(_curry3Js);
/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      const f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */ var zipWith = /*#__PURE__*/ (0, _curry3JsDefault.default)(function zipWith(fn, a, b) {
    var rv = [];
    var idx = 0;
    var len = Math.min(a.length, b.length);
    while(idx < len){
        rv[idx] = fn(a[idx], b[idx]);
        idx += 1;
    }
    return rv;
});
exports.default = zipWith;

},{"./internal/_curry3.js":"jwEOD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffINV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _curryNJs = require("./curryN.js");
var _curryNJsDefault = parcelHelpers.interopDefault(_curryNJs);
var _curry1Js = require("./internal/_curry1.js");
var _curry1JsDefault = parcelHelpers.interopDefault(_curry1Js);
/**
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 *
 * @func
 * @memberOf R
 * @since v0.26.0
 * @category Function
 * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
 * @param {Function} fn A function to wrap in a thunk
 * @return {Function} Expects arguments for `fn` and returns a new function
 *  that, when called, applies those arguments to `fn`.
 * @see R.partial, R.partialRight
 * @example
 *
 *      R.thunkify(R.identity)(42)(); //=> 42
 *      R.thunkify((a, b) => a + b)(25, 17)(); //=> 42
 */ var thunkify = /*#__PURE__*/ (0, _curry1JsDefault.default)(function thunkify(fn) {
    return (0, _curryNJsDefault.default)(fn.length, function createThunk() {
        var fnArgs = arguments;
        return function invokeThunk() {
            return fn.apply(this, fnArgs);
        };
    });
});
exports.default = thunkify;

},{"./curryN.js":"a5Onp","./internal/_curry1.js":"kg5MS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3OGEE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorContextMenu", ()=>ColorContextMenu);
class ColorContextMenu {
    constructor(){
        this.state = "inactive";
        this.element = $(".color-context");
        this.overlay = $(".context-overlay");
        this.infoElement = $(".context-card.current-color");
    }
    handleClickOutside(event) {
        if (!event.target.closest(".color-context")) {
            event.preventDefault();
            this.close();
        }
    }
    handleRightClick(event) {
        const clickedContextMenu = elementClicked(".color-context", event);
        const clickedColor = colorClicked(event);
        // console.log(clickedColor)
        // handle right click outside
        if (this.state === "active" && !clickedContextMenu) {
            event.preventDefault();
            if (clickedColor) {
                const { name , hex , tone  } = clickedColor.dataset;
                this.updateMouseBasedPosition(event);
                this.update({
                    name,
                    hex,
                    tone
                });
                return;
            }
            this.close();
            return;
        }
        if (this.state === "inactive" && clickedColor) {
            const { hex , name , tone  } = clickedColor.dataset;
            event.preventDefault();
            // position menu
            this.updateMouseBasedPosition(event);
            this.update({
                hex,
                name,
                tone
            });
            // show menu
            this.open();
            return;
        }
        this.close();
        return;
    }
    close() {
        this.element.classList.remove("active");
        this.overlay.classList.remove("active");
        this.state = "inactive";
        return this.state;
    }
    open() {
        this.element.classList.add("active");
        this.overlay.classList.add("active");
        this.state = "active";
        return this.state;
    }
    update(props) {
        const { name , hex , tone  } = props;
        console.log(props);
        $(".color-hex", this.infoElement).textContent = hex;
        $(".color-title", this.infoElement).textContent = name;
        $(".color-tone", this.infoElement).textContent = tone;
        root.style.setProperty("--currentContext", hex);
        return this.state;
    }
    updateMouseBasedPosition(event) {
        root.style.setProperty("--context-x", `${event.clientX - $(".dashboard__modal").getBoundingClientRect().left}px`);
        root.style.setProperty("--context-y", `${event.clientY - $(".dashboard__modal").getBoundingClientRect().top}px`);
    }
    render(props) {
        const { name , hex , tone  } = props;
        let element = `
        <div class="color-context db-context">
        <div class="alert"></div>
        <div class="info">
            <div class="current-color context-card">
                <div class="card-color"></div>
                <div class="color-info">
                    <div class="color-hex">${hex}}</div>
                    <div class="color-title"><span class="label">${name}</span></div>
                    <div class="color-tone"><span class="label">${tone}</span></div>
                </div>

            </div>
        </div>
        <div class="quick-toggles">
            <div class="btn info">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" height="24px" width="24px">
                    <path d="M13 7.5a1 1 0 11-2 0 1 1 0 012 0zm-3 3.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v4.25h.75a.75.75 0 010 1.5h-3a.75.75 0 010-1.5h.75V12h-.75a.75.75 0 01-.75-.75z"></path><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
            </div>

            <div class="btn copy">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="24px" width="24px">
                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M502.6 198.6l-61.25-61.25C435.4 131.4 427.3 128 418.8 128H256C220.7 128 191.1 156.7 192 192l.0065 255.1C192 483.3 220.7 512 256 512h192c35.2 0 64-28.8 64-64l.0098-226.7C512 212.8 508.6 204.6 502.6 198.6zM464 448c0 8.836-7.164 16-16 16h-192c-8.838 0-16-7.164-16-16L240 192.1c0-8.836 7.164-16 16-16h128L384 224c0 17.67 14.33 32 32 32h48.01V448zM317.7 96C310.6 68.45 285.8 48 256 48H215.2C211.3 20.93 188.1 0 160 0C131.9 0 108.7 20.93 104.8 48H64c-35.35 0-64 28.65-64 64V384c0 35.34 28.65 64 64 64h96v-48H64c-8.836 0-16-7.164-16-16V112C48 103.2 55.18 96 64 96h16v16c0 17.67 14.33 32 32 32h61.35C190 115.4 220.6 96 256 96H317.7zM160 72c-8.822 0-16-7.176-16-16s7.178-16 16-16s16 7.176 16 16S168.8 72 160 72z"></path></svg>
            </div>
            <div class="btn favit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height="24px" width="24px">
                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                </svg>
            </div>
            <div class="btn delete">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -7 474 542" height="24px" width="24px">
                    <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"></path></svg>
            </div>

        </div>
        <div class="quick-save">
            <ul>
                <div class="list-section center-1">
                    <li>Save To Collection</li>
                </div>
                <div class="list-section">
                    <li>Copy HSL</li>
                    <li>Copy RGB</li>
                    <li>Copy HEX</li>
                </div>

                <div class="list-section center-1">
                    <li>Add / Remove From Pocket</li>
                </div>

                <div class="list-section">
                    <li>Open Fullscreen View</li>
                    <li>Open Gradient View</li>
                    <li>Open Palette View</li>
                </div>
            </ul>
        </div>
                        </div>`;
        return element;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AaeL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SearchPanel", ()=>SearchPanel);
class SearchPanel {
    constructor(){
        this.status = "off";
        this.data = "";
        this.element = $(".fs-search");
        this.input = $(".search-inp-text + input");
        this.closer = $(".fs-search .control.close");
        this.mainInput = $(".search-inp");
        this.KeyMap = new KeyBinder();
        listen(this.closer, ()=>this.close());
        listen(this.input, (inputEvent)=>{
            log("input event triggered", inputEvent);
            const input = inputEvent.data;
            const data = inputEvent.target.value;
            if (/[a-zA-Z0-9-_ ]/.test(input)) {
                log("typewriting", data);
                this.data = data;
                this.mainInput.value = data;
                this.searchQuery();
            }
        }, "input");
        listen(this.mainInput, (inputEvent)=>{
            const input = inputEvent.data;
            const data = inputEvent.target.value;
            if (/[a-zA-Z0-9-_ ]/.test(input)) {
                this.open();
                this.input.value = data;
                this.input.focus();
                this.data = data;
            }
        }, "input");
        document.addEventListener("keyup", (e)=>{
            console.log(e.key);
            if (e.ctrlKey || e.key === "Control") {
                this.ctrl = true;
                console.log("ctrl mapper on");
                setTimeout(()=>{
                    this.ctrl = false;
                    console.log("ctrl mapper off");
                }, 1000);
            }
            if (e.shiftKey || e.key === "Shift") {
                this.shift = true;
                console.log("shift mapper on");
                setTimeout(()=>{
                    this.shift = false;
                    console.log("shift mapper off");
                }, 1000);
            }
            if (this.ctrl && this.shift && (e.key == "f" || e.key == "F")) {
                console.log("keybinding activated calling back");
                log(this);
                const isActive = document.activeElement == this.mainInput;
                if (isActive || this.status == "on") {
                    log("focused");
                    log(document.activeElement);
                    return;
                }
                log("open sesame");
                this.open();
            }
        });
        this.KeyMap.addGlobalShift([
            "s",
            "S"
        ], (e)=>{
            log(this);
            const isActive = document.activeElement == this.mainInput;
            if (isActive || this.status == "on") {
                log("focused");
                log(document.activeElement);
                return;
            }
            log("open sesame");
            this.open();
        });
    }
    open() {
        if (this.status !== "off") return;
        document.addEventListener("keyup", this.captureKeys.bind(this));
        this.element.classList.add("active");
        this.status = "on";
        this.input.focus();
    }
    close() {
        log("closing");
        if (this.status !== "on") return;
        log(this);
        this.element.classList.remove("active");
        this.status = "off";
        this.input.blue;
        document.removeEventListener("keyup", this.captureKeys.bind(this));
    }
    setData(inputValue) {
        this.data = inputValue;
    }
    typeWrite(inputEvent) {
        const input = inputEvent.data;
        const data = inputEvent.target.value;
        if (/[a-zA-Z0-9-_ ]/.test(input)) {
            this.open();
            this.input.value = data;
            this.input.focus();
            this.data = data;
        }
    }
    captureKeys(e) {
        if (e.key === "Escape") this.close();
        else if (e.key === "Enter") this.searchQuery();
    }
    searchQuery() {
        const query = this.data;
        console.log("searching db for", query);
        console.log(appState);
        if (appState.tabName && appState.currentTab) {
            console.log("searching in", appState.tabName, "first");
            appState.currentTab.queryColors(query);
        // app.queryColors(query);
        } else alert("nothing here");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cqTGX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollStacker", ()=>ScrollStacker);
class ScrollStacker {
    constructor(stacker, tick = 226, bouncer = 10){
        this.trigger = stacker.querySelector(".scroll-stacker");
        this.content = stacker.querySelector(".stack-wrapper");
        this.tracer = stacker.querySelector(".stack-tracer");
        this.tick = tick;
        this.ticker = 0;
        this.bouncer = bouncer;
        this.lastKnownPosition = 0;
        this.onScroll = ()=>this.debounce(this.onTick);
        this.activePanel = null;
        if (!this.trigger || !this.content) return console.log("stacker failed to instaciate", trigger, content);
        // function debounce(callback){
        //     return function() {
        //     clearTimeout(callback.timeoutId);
        //     callback.timeoutId = setTimeout(
        //         function() { callback() }, 
        //         bouncer )
        //     }
        // }
        this.reset();
        if (this.tracer) {
            console.log(this.tracer);
            const t = this.tracer;
            [
                ...t.querySelectorAll(".tracer")
            ].forEach((el)=>{
                this.mapTracer(el);
            });
        }
        this.trigger.addEventListener("scroll", ()=>this.debounce(this.onTick));
        this.tracer.addEventListener("click", (e)=>{
            if (!e.target.classList.contains("tracer")) this.step();
        });
    }
    step() {
        console.log(this);
        const p1 = this.content.querySelector('[data-pos="1"]');
        const p2 = this.content.querySelector('[data-pos="2"]');
        const p3 = this.content.querySelector('[data-pos="3"]');
        p1.dataset.pos = "3";
        p2.dataset.pos = "1";
        p3.dataset.pos = "2";
        p2.classList.add("active");
        this.tracer.querySelector(`[data-tracer="${p2.dataset.ipos}"]`).classList.add("active");
        this.activeTracer = this.tracer.querySelector(`[data-tracer="${p2.dataset.ipos}"]`);
        this.activePanel = p2;
        p1.classList.remove("active");
        this.tracer.querySelector(`[data-tracer="${p1.dataset.ipos}"]`).classList.remove("active");
    }
    // pick(element) {
    //     let p;
    //     element.position = element.dataset.pos;
    //     if (Number(element.position) && Number(element.position) === 3){
    //         // if last element is picked 1(first)element becomes 3(last)
    //     }
    //     else if (Number(element.position && Number(element.position) === 1)){
    //         // if last element is picked 1(first)element becomes 3(last)
    //     }
    //     element.dataset.pos = "1";
    // }
    reverse() {
        console.log(this);
        const p1 = this.content.querySelector('[data-pos="1"]');
        const p2 = this.content.querySelector('[data-pos="2"]');
        const p3 = this.content.querySelector('[data-pos="3"]');
        p3.dataset.pos = "1";
        p2.dataset.pos = "3";
        p1.dataset.pos = "2";
        p3.classList.add("active");
        this.tracer.querySelector(`[data-tracer="${p3.dataset.ipos}"]`).classList.add("active");
        this.activeTracer = this.tracer.querySelector(`[data-tracer="${p3.dataset.ipos}"]`);
        this.activePanel = p3;
        p1.classList.remove("active");
        this.tracer.querySelector(`[data-tracer="${p1.dataset.ipos}"]`).classList.remove("active");
    }
    skip(tracer) {
        let tracerPosition = tracer.dataset.tracer;
        let next = Number(tracerPosition) + 1;
        if (next == 4) next = 1;
        let last = next + 1;
        if (last == 4) last = 1;
        let current = Number(tracerPosition);
        let p1 = this.content.querySelector(`[data-ipos="${current}"]`);
        let p2 = this.content.querySelector(`[data-ipos="${next}"]`);
        let p3 = this.content.querySelector(`[data-ipos="${last}"]`);
        p1.dataset.pos = 1;
        p2.dataset.pos = 2;
        p3.dataset.pos = 3;
        tracer.classList.add("active");
        this.activeTracer.classList.remove("active");
        p1.classList.add("active");
        this.activePanel.classList.remove("active");
        this.activePanel = p1;
        this.activeTracer = tracer;
        log("current", current, "next", next, "last", last);
    }
    onTick() {
        // console.log(this)
        let scrollPos = this.trigger.scrollTop;
        let ticks = Math.floor(scrollPos / this.tick);
        console.log(ticks > this.ticker);
        if (ticks > this.ticker) this.step();
        else if (ticks < this.ticker) this.reverse();
        this.ticker = ticks;
    }
    debounce(callback) {
        clearTimeout(callback.timeoutId);
        callback.timeoutId = setTimeout(()=>callback.call(this), this.bouncer);
    }
    mapTracer(tracer) {
        tracer.addEventListener("click", ()=>this.skip(tracer));
    }
    reset() {
        this.trigger.scrollTo(0, 0);
        this.activePanel = this.content.querySelector('[data-ipos="1"]');
        this.activeTracer = this.tracer.querySelector('[data-tracer="1"]');
        this.activePanel.classList.add("active");
        this.activeTracer.classList.add("active");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6PeTU","iI2BD"], "iI2BD", "parcelRequire6bed")

//# sourceMappingURL=index.19023f86.js.map
