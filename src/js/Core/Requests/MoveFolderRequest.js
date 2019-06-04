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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var MoveCopyFolderRequest_1 = require("./MoveCopyFolderRequest");
/** @internal */
var MoveFolderRequest = /** @class */ (function (_super) {
    __extends(MoveFolderRequest, _super);
    function MoveFolderRequest(service, errorHandlingMode) {
        return _super.call(this, service, errorHandlingMode) || this;
    }
    MoveFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new MoveCopyFolderResponse_1.MoveCopyFolderResponse(); };
    MoveFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    MoveFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MoveFolderResponseMessage; };
    MoveFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MoveFolderResponse; };
    MoveFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MoveFolder; };
    return MoveFolderRequest;
}(MoveCopyFolderRequest_1.MoveCopyFolderRequest));
exports.MoveFolderRequest = MoveFolderRequest;
