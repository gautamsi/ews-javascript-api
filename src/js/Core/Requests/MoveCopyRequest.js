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
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var MoveCopyRequest = /** @class */ (function (_super) {
    __extends(MoveCopyRequest, _super);
    function MoveCopyRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.destinationFolderId = null;
        return _this;
    }
    Object.defineProperty(MoveCopyRequest.prototype, "DestinationFolderId", {
        get: function () {
            return this.destinationFolderId;
        },
        set: function (value) {
            this.destinationFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    MoveCopyRequest.prototype.AddIdsToJson = function (jsonObject, service) { throw new Error("MoveCopyRequest.ts - AddIdsToJson : Not implemented."); };
    MoveCopyRequest.prototype.Validate = function () {
        //EwsUtilities.ValidateParam(this.DestinationFolderId, "DestinationFolderId");
        this.DestinationFolderId.Validate(this.Service.RequestedServerVersion);
    };
    /**@internal */
    MoveCopyRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ToFolderId);
        this.DestinationFolderId.WriteToXml(writer);
        writer.WriteEndElement();
        this.WriteIdsToXml(writer);
    };
    /**@internal */
    MoveCopyRequest.prototype.WriteIdsToXml = function (writer) { throw new Error("MoveCopyRequest.ts - WriteIdsToXml : Abstract - must implement."); };
    return MoveCopyRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.MoveCopyRequest = MoveCopyRequest;
