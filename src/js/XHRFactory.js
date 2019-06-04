"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XHRDefault_1 = require("./XHRDefault");
var XHRFactory = /** @class */ (function () {
    function XHRFactory() {
    }
    Object.defineProperty(XHRFactory, "XHRApi", {
        get: function () {
            if (typeof this.xhrHelper === 'undefined' || this.xhrHelper === null) {
                this.xhrHelper = new XHRDefault_1.XHRDefault();
            }
            return this.xhrHelper;
        },
        enumerable: true,
        configurable: true
    });
    XHRFactory.newXHRApi = function () {
        console.warn("depricated, import and use \"new XHRDefault(options?)\" instead");
        return new XHRDefault_1.XHRDefault();
    };
    return XHRFactory;
}());
exports.XHRFactory = XHRFactory;
