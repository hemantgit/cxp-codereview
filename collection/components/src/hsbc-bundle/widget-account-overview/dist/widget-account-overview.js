/* widget-account-overview@v0.1.0-alpha.0 build with ♥ by bb-lp-cli@v1.9.15 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("base"),require("core"),require("ui")):"function"==typeof define&&define.amd?define(["base","core","ui"],t):"object"==typeof exports?exports["widget-account-overview"]=t(require("base"),require("core"),require("ui")):e["widget-account-overview"]=t(e.base,e.core,e.ui)}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,exports,t){e.exports=t(1)},function(e,exports,t){var r;(function(e){"use strict";r=function(require,exports,e){function r(){}e.name="widget-account-overview";var n=t(3),o=t(4),i=t(5),c=t(6),s=t(7),a=[o.name,i.name];e.exports=n.createModule(e.name,a).constant("WIDGET_NAME",e.name).controller("MainCtrl",s).factory("model",c).service(t(8)).run(r)}.call(exports,t,exports,e),!(void 0!==r&&(e.exports=r))}).call(exports,t(2)(e))},function(e,exports){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(t,exports){t.exports=e},function(e,exports){e.exports=t},function(e,exports){e.exports=r},function(e,exports,t){var r;r=function(require,exports,e){"use strict";function t(e,t){var r=t,n={title:e.getPreference("title"),icon:r.resolvePortalPlaceholders(e.getPreference("thumbnailUrl"))},o={};return o.getState=function(){return n},o}t.$inject=["lpWidget","lpCoreUtils"],e.exports=t}.call(exports,t,exports,e),!(void 0!==r&&(e.exports=r))},function(e,exports,t){var r;r=function(require,exports,e){"use strict";function t(e,t,n,o){var i=this;i.primaryBusinessHeading=t.getPreference(r.PRIMARY_BUSINESS_HEADING),i.secondaryBusinessHeading=t.getPreference(r.SECONDARY_BUSINESS_HEADING),i.availableBalance=t.getPreference(r.AVAILABLE_BALANCE),i.smartOverdraftLimit=t.getPreference(r.SMART_OVERDRAFT_LIMIT),o.someFunction().then(function(e){var t=[];e.overdraft&&e.overdraft.BusinessAccounts&&e.overdraft.BusinessAccounts.BusinessAccount&&(t=e.overdraft.BusinessAccounts.BusinessAccount,t.forEach(function(e){e.IsPrimary?(i.primaryAccount=e,console.log("primary acc"),console.log(i.primaryAccount)):(i.secondaryAccount=e,console.log(i.secondaryAccount))}))}),i.NavigateNextpage=function(){}}var r={PRIMARY_BUSINESS_HEADING:"primaryBusinessHeading",SECONDARY_BUSINESS_HEADING:"secondaryBusinessHeading",AVAILABLE_BALANCE:"availableBalance",SMART_OVERDRAFT_LIMIT:"smartOverdraftLimit",LOGO:"logo"};e.exports=["model","lpWidget","lpCoreUtils","gettingProductCodesService",t]}.call(exports,t,exports,e),!(void 0!==r&&(e.exports=r))},function(e,exports,t){var r;r=function(require,exports){"use strict";function e(e,t){var r=this;return r.someFunction=function(){var r=t.defer();return e.get("/portalserver/static/widgets/[BBHOST]/widget-account-overview/JSON/account-overview.json").then(function(e){r.resolve(e.data)}),r.promise},r}exports.gettingProductCodesService=["$http","$q",e]}.call(exports,t,exports,e),!(void 0!==r&&(e.exports=r))}])});
//# sourceMappingURL=widget-account-overview.js.map