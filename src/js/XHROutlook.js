"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = require("./Promise");
var ConfigurationApi_1 = require("./ConfigurationApi");
var XHROutlook = /** @class */ (function () {
    function XHROutlook() {
    }
    XHROutlook.prototype.xhr = function (xhroptions, progressDelegate) {
        return new Promise_1.Promise(function (resolve, reject) {
            Office.context.mailbox.makeEwsRequestAsync(xhroptions.data, function (result) {
                var res = {
                    status: 200,
                    responseText: result.value,
                    getAllResponseHeaders: function () { return []; },
                    getResponseHeader: function (str) { return ""; }
                };
                if (result.status === 'succeeded') {
                    resolve(res);
                }
                else {
                    res.message = result.error.message;
                    res.status = 500;
                    reject(res);
                }
            });
        });
    };
    XHROutlook.prototype.xhrStream = function (xhroptions, progressDelegate) {
        return new Promise_1.Promise(function (resolve, reject) {
            reject(new Error("not implemented/ not used"));
        });
    };
    XHROutlook.prototype.disconnect = function () {
    };
    Object.defineProperty(XHROutlook.prototype, "apiName", {
        get: function () {
            return "outlook";
        },
        enumerable: true,
        configurable: true
    });
    return XHROutlook;
}());
exports.XHROutlook = XHROutlook;
function ConfigureForOutlook() {
    ConfigurationApi_1.ConfigurationApi.ConfigureXHR(new XHROutlook());
}
exports.ConfigureForOutlook = ConfigureForOutlook;
