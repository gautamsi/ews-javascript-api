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
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponse_1 = require("./ServiceResponse");
var UpdateFolderResponse = /** @class */ (function (_super) {
    __extends(UpdateFolderResponse, _super);
    function UpdateFolderResponse(folder) {
        var _this = _super.call(this) || this;
        EwsLogging_1.EwsLogging.Assert(folder != null, "UpdateFolderResponse.ctor", "folder is null");
        _this.folder = folder;
        return _this;
    }
    UpdateFolderResponse.prototype.GetObjectInstance = function (session, xmlElementName) { return this.folder; };
    UpdateFolderResponse.prototype.Loaded = function () {
        if (this.Result == ServiceResult_1.ServiceResult.Success) {
            this.folder.ClearChangeLog();
        }
    };
    UpdateFolderResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        //debugger;//todo: check if this is needed. 
        //throw new Error("UpdateFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); 
    };
    return UpdateFolderResponse;
}(ServiceResponse_1.ServiceResponse));
exports.UpdateFolderResponse = UpdateFolderResponse;
