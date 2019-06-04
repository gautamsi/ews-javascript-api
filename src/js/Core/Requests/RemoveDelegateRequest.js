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
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var DelegateManagementResponse_1 = require("../Responses/DelegateManagementResponse");
var DelegateManagementRequestBase_1 = require("./DelegateManagementRequestBase");
/**
 * @internal Represents a RemoveDelete request.
 */
var RemoveDelegateRequest = /** @class */ (function (_super) {
    __extends(RemoveDelegateRequest, _super);
    /**
     * @internal Initializes a new instance of the **RemoveDelegateRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function RemoveDelegateRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.userIds = [];
        return _this;
    }
    Object.defineProperty(RemoveDelegateRequest.prototype, "UserIds", {
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
    /**
     * @internal Creates the response
     *
     * @return  {DelegateManagementResponse}		Response object.
     */
    RemoveDelegateRequest.prototype.CreateResponse = function () {
        return new DelegateManagementResponse_1.DelegateManagementResponse(false, null);
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    RemoveDelegateRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    RemoveDelegateRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.RemoveDelegateResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    RemoveDelegateRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.RemoveDelegate;
    };
    /**
     * @internal Validate request.
     */
    RemoveDelegateRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.UserIds, "UserIds");
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RemoveDelegateRequest.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.UserIds);
        for (var _i = 0, _a = this.UserIds; _i < _a.length; _i++) {
            var userId = _a[_i];
            userId.WriteToXml(writer, XmlElementNames_1.XmlElementNames.UserId);
        }
        writer.WriteEndElement(); // UserIds
    };
    return RemoveDelegateRequest;
}(DelegateManagementRequestBase_1.DelegateManagementRequestBase));
exports.RemoveDelegateRequest = RemoveDelegateRequest;
