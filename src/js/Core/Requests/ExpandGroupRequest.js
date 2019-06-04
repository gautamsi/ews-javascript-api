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
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../XmlElementNames");
var ExpandGroupResponse_1 = require("../Responses/ExpandGroupResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var ExpandGroupRequest = /** @class */ (function (_super) {
    __extends(ExpandGroupRequest, _super);
    function ExpandGroupRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.emailAddress = null;
        return _this;
    }
    Object.defineProperty(ExpandGroupRequest.prototype, "EmailAddress", {
        get: function () {
            return this.emailAddress;
        },
        set: function (value) {
            this.emailAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    ExpandGroupRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ExpandGroupResponse_1.ExpandGroupResponse(); };
    ExpandGroupRequest.prototype.GetExpectedResponseMessageCount = function () { return 1; };
    ExpandGroupRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    ExpandGroupRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ExpandDLResponseMessage; };
    ExpandGroupRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ExpandDLResponse; };
    ExpandGroupRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ExpandDL; };
    ExpandGroupRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.EmailAddress, "EmailAddress");
    };
    /**@internal */
    ExpandGroupRequest.prototype.WriteElementsToXml = function (writer) {
        if (this.EmailAddress != null) {
            this.EmailAddress.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Mailbox, XmlNamespace_1.XmlNamespace.Messages);
        }
    };
    return ExpandGroupRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.ExpandGroupRequest = ExpandGroupRequest;
