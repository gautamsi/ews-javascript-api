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
var FolderWrapper = /** @class */ (function (_super) {
    __extends(FolderWrapper, _super);
    function FolderWrapper(folder) {
        var _this = _super.call(this) || this;
        EwsLogging_1.EwsLogging.Assert(folder != null, "FolderWrapper.ctor", "folder is null");
        EwsLogging_1.EwsLogging.Assert(!folder.IsNew, "FolderWrapper.ctor", "folder does not have an Id");
        _this.folder = folder;
        return _this;
    }
    FolderWrapper.prototype.GetFolder = function () { return this.folder; };
    //InternalToJson(service: ExchangeService): void{ throw new Error("FolderWrapper.ts - InternalToJson : Not implemented.");}
    /**@internal */
    FolderWrapper.prototype.WriteToXml = function (writer) { this.folder.Id.WriteToXml(writer); };
    return FolderWrapper;
}(AbstractFolderIdWrapper_1.AbstractFolderIdWrapper));
exports.FolderWrapper = FolderWrapper;
