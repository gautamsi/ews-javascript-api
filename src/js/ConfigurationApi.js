"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XHRFactory_1 = require("./XHRFactory");
var Promise_1 = require("./Promise");
var XHRDefault_1 = require("./XHRDefault");
var ConfigurationApi = /** @class */ (function () {
    function ConfigurationApi() {
    }
    ConfigurationApi.ConfigureXHR = function (xhrApi) {
        XHRFactory_1.XHRFactory.xhrHelper = xhrApi;
    };
    ConfigurationApi.SetXHROptions = function (fetchOptions) {
        XHRDefault_1.XHRDefault.defaultOptions = fetchOptions;
    };
    ConfigurationApi.ConfigurePromise = function (promise) {
        Promise_1.ConfigurePromise(promise);
    };
    return ConfigurationApi;
}());
exports.ConfigurationApi = ConfigurationApi;
