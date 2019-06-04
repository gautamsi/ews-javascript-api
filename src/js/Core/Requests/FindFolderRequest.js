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
var FindFolderResponse_1 = require("../Responses/FindFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var FindRequest_1 = require("./FindRequest");
/** @internal */
var FindFolderRequest = /** @class */ (function (_super) {
    __extends(FindFolderRequest, _super);
    function FindFolderRequest(service, errorHandlingMode) {
        return _super.call(this, service, errorHandlingMode) || this;
    }
    FindFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new FindFolderResponse_1.FindFolderResponse(this.View.GetPropertySetOrDefault()); };
    FindFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    FindFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindFolderResponseMessage; };
    FindFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindFolderResponse; };
    FindFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindFolder; };
    return FindFolderRequest;
}(FindRequest_1.FindRequest));
exports.FindFolderRequest = FindFolderRequest;
