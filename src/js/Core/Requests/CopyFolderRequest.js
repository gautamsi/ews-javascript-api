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
var MoveCopyFolderResponse_1 = require("../Responses/MoveCopyFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MoveCopyFolderRequest_1 = require("./MoveCopyFolderRequest");
/** @internal */
var CopyFolderRequest = /** @class */ (function (_super) {
    __extends(CopyFolderRequest, _super);
    function CopyFolderRequest(service, errorHandlingMode) {
        return _super.call(this, service, errorHandlingMode) || this;
    }
    CopyFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MoveCopyFolderResponse_1.MoveCopyFolderResponse(); };
    CopyFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    CopyFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyFolderResponseMessage; };
    CopyFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyFolderResponse; };
    CopyFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CopyFolder; };
    return CopyFolderRequest;
}(MoveCopyFolderRequest_1.MoveCopyFolderRequest));
exports.CopyFolderRequest = CopyFolderRequest;
