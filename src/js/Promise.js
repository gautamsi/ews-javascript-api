"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotSupportedException_1 = require("./Exceptions/NotSupportedException");
var PromiseType = /** @class */ (function () {
    function PromiseType() {
        throw new NotSupportedException_1.NotSupportedException("Promise implementation missing.\nPlease use ConfigurePromise function to assign Promise Object\n" +
            "bluebird: ConfigurePromise(require('bluebird))\n" +
            "Q: ConfigurePromise(require('q').Promise)\n" +
            "winjs-node: ConfigurePromise(require('winjs-node').Promise)");
    }
    return PromiseType;
}());
try {
    var promise = require('bluebird');
    exports.Promise = promise;
}
catch (e) {
    exports.Promise = PromiseType;
}
function ConfigurePromise(promise) {
    exports.Promise = promise;
}
exports.ConfigurePromise = ConfigurePromise;
