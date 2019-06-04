"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = require("../src/js/Promise");
var MockXHRApi = /** @class */ (function () {
    function MockXHRApi() {
        this.xhrData = {};
        this.requestXml = [];
        this.responseXml = [];
    }
    MockXHRApi.prototype.xhr = function (xhroptions) {
        var _this = this;
        this.xhrData = xhroptions;
        return new Promise_1.Promise(function (successDelegate, errorDelegate) {
            var result = {
                response: null,
                readyState: 4,
                responseText: null,
                status: 200,
            };
            result.response = _this.responseXml.splice(0, 1).pop();
            result.responseText = result.response;
            successDelegate(result);
        });
    };
    MockXHRApi.prototype.xhrStream = function (x, y) {
        throw new Error();
    };
    MockXHRApi.prototype.disconnect = function () { };
    Object.defineProperty(MockXHRApi.prototype, "apiName", {
        get: function () {
            return "mockXHR";
        },
        enumerable: true,
        configurable: true
    });
    return MockXHRApi;
}());
exports.MockXHRApi = MockXHRApi;
