"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DeleteMode_1 = require("../../Enumerations/DeleteMode");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var DeleteRequest = /** @class */ (function (_super) {
    __extends(DeleteRequest, _super);
    function DeleteRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.deleteMode = DeleteMode_1.DeleteMode.SoftDelete;
        return _this;
    }
    Object.defineProperty(DeleteRequest.prototype, "DeleteMode", {
        get: function () {
            return this.deleteMode;
        },
        set: function (value) {
            this.deleteMode = value;
        },
        enumerable: true,
        configurable: true
    });
    DeleteRequest.prototype.InternalToJson = function (body) { throw new Error("DeleteRequest.ts - InternalToJson : Not implemented."); };
    /**@internal */
    DeleteRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.DeleteType, DeleteMode_1.DeleteMode[this.DeleteMode]);
    };
    return DeleteRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.DeleteRequest = DeleteRequest;
