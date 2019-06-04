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
var EwsLogging_1 = require("../Core/EwsLogging");
var AbstractFolderIdWrapper_1 = require("./AbstractFolderIdWrapper");
var FolderIdWrapper = /** @class */ (function (_super) {
    __extends(FolderIdWrapper, _super);
    function FolderIdWrapper(folderId) {
        var _this = _super.call(this) || this;
        EwsLogging_1.EwsLogging.Assert(folderId != null, "FolderIdWrapper.ctor", "folderId is null");
        _this.folderId = folderId;
        return _this;
    }
    //InternalToJson(service: ExchangeService): any{ throw new Error("FolderIdWrapper.ts - InternalToJson : Not implemented.");}
    FolderIdWrapper.prototype.Validate = function (version) { this.folderId.Validate(version); };
    /**@internal */
    FolderIdWrapper.prototype.WriteToXml = function (writer) { this.folderId.WriteToXml(writer); };
    return FolderIdWrapper;
}(AbstractFolderIdWrapper_1.AbstractFolderIdWrapper));
exports.FolderIdWrapper = FolderIdWrapper;
