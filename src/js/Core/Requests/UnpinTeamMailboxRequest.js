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
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a UnpinTeamMailbox request.
 *
 * @sealed
 */
var UnpinTeamMailboxRequest = /** @class */ (function (_super) {
    __extends(UnpinTeamMailboxRequest, _super);
    /**
     * Initializes a new instance of the **UnpinTeamMailboxRequest** class.
     *
     * @param   {ExchangeService}   service        The service
     * @param   {EmailAddress}      emailAddress   TeamMailbox email address
     */
    function UnpinTeamMailboxRequest(service, emailAddress) {
        var _this = _super.call(this, service) || this;
        /**
         * TeamMailbox email address
         */
        _this.emailAddress = null;
        if (emailAddress === null) {
            throw new ArgumentException_1.ArgumentNullException("emailAddress");
        }
        _this.emailAddress = emailAddress;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {ServiceResponse}      Service response.
     */
    UnpinTeamMailboxRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    UnpinTeamMailboxRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    UnpinTeamMailboxRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UnpinTeamMailboxResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    UnpinTeamMailboxRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UnpinTeamMailbox;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    UnpinTeamMailboxRequest.prototype.ParseResponse = function (jsonBody) {
        var serviceResponse = new ServiceResponse_1.ServiceResponse();
        serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
        return serviceResponse;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UnpinTeamMailboxRequest.prototype.WriteElementsToXml = function (writer) {
        //this.emailAddress.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.EmailAddress);
        this.emailAddress.WriteToXml(writer, XmlElementNames_1.XmlElementNames.EmailAddress, XmlNamespace_1.XmlNamespace.Messages);
    };
    return UnpinTeamMailboxRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.UnpinTeamMailboxRequest = UnpinTeamMailboxRequest;
