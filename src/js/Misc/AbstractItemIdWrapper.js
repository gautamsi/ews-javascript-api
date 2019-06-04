"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractItemIdWrapper = /** @class */ (function () {
    function AbstractItemIdWrapper() {
    }
    AbstractItemIdWrapper.prototype.GetItem = function () { return null; };
    AbstractItemIdWrapper.prototype.IternalToJson = function (service) { throw new Error("AbstractItemIdWrapper.ts - IternalToJson : Not implemented."); };
    /**@internal */
    AbstractItemIdWrapper.prototype.WriteToXml = function (writer) { };
    return AbstractItemIdWrapper;
}());
exports.AbstractItemIdWrapper = AbstractItemIdWrapper;
