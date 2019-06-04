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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var GetDelegateResponse_1 = require("../Responses/GetDelegateResponse");
var DelegateManagementRequestBase_1 = require("./DelegateManagementRequestBase");
/**
 * @internal Represents a GetDelegate request.
 */
var GetDelegateRequest = /** @class */ (function (_super) {
    __extends(GetDelegateRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetDelegateRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetDelegateRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.userIds = [];
        _this.includePermissions = false;
        return _this;
    }
    Object.defineProperty(GetDelegateRequest.prototype, "UserIds", {
        /**
         * Gets the user ids.
         *
         * @value   The user ids.
         */
        get: function () {
            return this.userIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetDelegateRequest.prototype, "IncludePermissions", {
        /**
         * Gets or sets a value indicating whether permissions are included.
         */
        get: function () {
            return this.includePermissions;
        },
        set: function (value) {
            this.includePermissions = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the response
     *
     * @return  {GetDelegateResponse}		Response object.
     */
    GetDelegateRequest.prototype.CreateResponse = function () {
        return new GetDelegateResponse_1.GetDelegateResponse(true);
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetDelegateRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetDelegateRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetDelegateResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetDelegateRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetDelegate;
    };
    /**
     * @internal Writes XML attributes.
     *
     * /remarks/    Subclass will override if it has XML attributes.
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetDelegateRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.IncludePermissions, this.IncludePermissions);
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetDelegateRequest.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        if (this.UserIds.length > 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.UserIds);
            for (var _i = 0, _a = this.UserIds; _i < _a.length; _i++) {
                var userId = _a[_i];
                userId.WriteToXml(writer, XmlElementNames_1.XmlElementNames.UserId);
            }
            writer.WriteEndElement(); // UserIds
        }
    };
    return GetDelegateRequest;
}(DelegateManagementRequestBase_1.DelegateManagementRequestBase));
exports.GetDelegateRequest = GetDelegateRequest;
