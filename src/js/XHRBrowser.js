"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = require("./Promise");
var schemeRegex = /^(\w+)\:\/\//;
/** @internal */
var XHRBrowser = /** @class */ (function () {
    function XHRBrowser() {
        this._canceled = false;
    }
    XHRBrowser.prototype.xhr = function (xhroptions, progressDelegate) {
        var _this = this;
        return new Promise_1.Promise(function (resolve, reject) {
            _this.req = new XMLHttpRequest();
            var isLocalRequest = false;
            var schemeMatch = schemeRegex.exec(xhroptions.url.toLowerCase());
            if (schemeMatch) {
                if (schemeMatch[1] === 'file') {
                    isLocalRequest = true;
                }
            }
            else if (window.location.protocol === 'file:') {
                isLocalRequest = true;
            }
            _this.req.onreadystatechange = function () {
                if (_this._canceled) {
                    _this.req.onreadystatechange = noop;
                    return;
                }
                if (_this.req.readyState === 4) {
                    if ((_this.req.status >= 200 && _this.req.status < 300) || (isLocalRequest && _this.req.status === 0)) {
                        resolve(_this.req);
                    }
                    else {
                        reject(_this.req);
                    }
                    _this.req.onreadystatechange = noop;
                }
            };
            _this.req.addEventListener('error', function (x) {
                _this.disconnect();
                reject(x);
            });
            _this.req.open(xhroptions.type || "GET", xhroptions.url);
            // this.req.responseType = xhroptions.responseType || "";
            Object.keys(xhroptions.headers || {}).forEach(function (k) {
                _this.req.setRequestHeader(k, xhroptions.headers[k]);
            });
            if (xhroptions.customRequestInitializer) {
                xhroptions.customRequestInitializer(_this.req);
            }
            if (xhroptions.data === undefined) {
                _this.req.send();
            }
            else {
                _this.req.send(xhroptions.data);
            }
        });
    };
    XHRBrowser.prototype.xhrStream = function (xhroptions, progressDelegate) {
        var _this = this;
        return new Promise_1.Promise(function (resolve, reject) {
            _this.req = new XMLHttpRequest();
            var isLocalRequest = false;
            var schemeMatch = schemeRegex.exec(xhroptions.url.toLowerCase());
            if (schemeMatch) {
                if (schemeMatch[1] === 'file') {
                    isLocalRequest = true;
                }
            }
            else if (window.location.protocol === 'file:') {
                isLocalRequest = true;
            }
            var lastChunk = '';
            _this.req.onreadystatechange = function () {
                if (_this._canceled) {
                    _this.req.onreadystatechange = noop;
                    return;
                }
                if (_this.req.readyState === 4) {
                    if ((_this.req.status >= 200 && _this.req.status < 300) || (isLocalRequest && _this.req.status === 0)) {
                        resolve(_this.req);
                    }
                    else {
                        reject(_this.req);
                    }
                    _this.req.onreadystatechange = noop;
                }
                else if (_this.req.readyState === 2) { // HEADERS_RECEIVED
                    progressDelegate({ type: "header", headers: _this.req.getAllResponseHeaders() });
                }
                else if (_this.req.readyState === 3) { // LOADING - partial text, for streaming
                    var chunk = _this.req.responseText.substr(lastChunk.length);
                    lastChunk = _this.req.responseText;
                    progressDelegate({ type: "data", data: chunk });
                }
            };
            _this.req.addEventListener('error', function (error) {
                _this.disconnect();
                progressDelegate({ type: "error", error: error });
                reject(error);
            });
            _this.req.open(xhroptions.type || "GET", xhroptions.url);
            // this.req.responseType = xhroptions.responseType || "";
            Object.keys(xhroptions.headers || {}).forEach(function (k) {
                _this.req.setRequestHeader(k, xhroptions.headers[k]);
            });
            if (xhroptions.customRequestInitializer) {
                xhroptions.customRequestInitializer(_this.req);
            }
            if (xhroptions.data === undefined) {
                _this.req.send();
            }
            else {
                _this.req.send(xhroptions.data);
            }
        });
    };
    XHRBrowser.prototype.disconnect = function () {
        var _this = this;
        if (this.req) {
            try {
                this.req.onreadystatechange = noop;
                this._canceled = true;
                this.req.abort();
                setImmediate(function () { _this.req = null; });
            }
            catch (e) { }
        }
    };
    Object.defineProperty(XHRBrowser.prototype, "apiName", {
        get: function () {
            return "browser";
        },
        enumerable: true,
        configurable: true
    });
    return XHRBrowser;
}());
exports.XHRBrowser = XHRBrowser;
function noop() {
}
