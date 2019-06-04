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
var TeamMailboxLifecycleState_1 = require("../../Enumerations/TeamMailboxLifecycleState");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a SetTeamMailbox request.
 *
 * @sealed
 */
var SetTeamMailboxRequest = /** @class */ (function (_super) {
    __extends(SetTeamMailboxRequest, _super);
    /**
     * @internal Initializes a new instance of the **SetTeamMailboxRequest** class.
     *
     * @param   {ExchangeService}               service             The service
     * @param   {EmailAddress}                  emailAddress        TeamMailbox email address
     * @param   {Uri}                           sharePointSiteUrl   SharePoint site URL
     * @param   {TeamMailboxLifecycleState}     state               TeamMailbox state
     */
    function SetTeamMailboxRequest(service, emailAddress, sharePointSiteUrl, state) {
        var _this = _super.call(this, service) || this;
        /**
         * TeamMailbox email address
         */
        _this.emailAddress = null;
        /**
         * SharePoint site URL
         */
        _this.sharePointSiteUrl = null;
        /**
         * TeamMailbox lifecycle state
         */
        _this.state = TeamMailboxLifecycleState_1.TeamMailboxLifecycleState.Active;
        if (emailAddress === null) {
            throw new ArgumentException_1.ArgumentNullException("emailAddress");
        }
        if (sharePointSiteUrl === null) {
            throw new ArgumentException_1.ArgumentNullException("sharePointSiteUrl");
        }
        _this.emailAddress = emailAddress;
        _this.sharePointSiteUrl = sharePointSiteUrl;
        _this.state = state;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {ServiceResponse}      Service response.
     */
    SetTeamMailboxRequest.prototype.Execute = function () {
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
    SetTeamMailboxRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    SetTeamMailboxRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SetTeamMailboxResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    SetTeamMailboxRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SetTeamMailbox;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    SetTeamMailboxRequest.prototype.ParseResponse = function (jsonBody) {
        var serviceResponse = new ServiceResponse_1.ServiceResponse();
        serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
        return serviceResponse;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SetTeamMailboxRequest.prototype.WriteElementsToXml = function (writer) {
        //this.emailAddress.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.EmailAddress);
        this.emailAddress.WriteToXml(writer, XmlElementNames_1.XmlElementNames.EmailAddress, XmlNamespace_1.XmlNamespace.Messages);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SharePointSiteUrl, this.sharePointSiteUrl.ToString());
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.State, TeamMailboxLifecycleState_1.TeamMailboxLifecycleState[this.state]);
    };
    return SetTeamMailboxRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.SetTeamMailboxRequest = SetTeamMailboxRequest;
