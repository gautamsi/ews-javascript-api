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
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a SetUserOofSettings request.
 *
 * @sealed
 */
var SetUserOofSettingsRequest = /** @class */ (function (_super) {
    __extends(SetUserOofSettingsRequest, _super);
    /**
     * @internal Initializes a new instance of the **SetUserOofSettingsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function SetUserOofSettingsRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.smtpAddress = null;
        _this.oofSettings = null;
        return _this;
    }
    Object.defineProperty(SetUserOofSettingsRequest.prototype, "SmtpAddress", {
        /**
         * Gets or sets the SMTP address.
         */
        get: function () {
            return this.smtpAddress;
        },
        set: function (value) {
            this.smtpAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SetUserOofSettingsRequest.prototype, "OofSettings", {
        /**
         * Gets or sets the oof settings.
         */
        get: function () {
            return this.oofSettings;
        },
        set: function (value) {
            this.oofSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Executes this request.
     *
     * @return  {ServiceResponse}      Service response.
     */
    SetUserOofSettingsRequest.prototype.Execute = function () {
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
    SetUserOofSettingsRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    SetUserOofSettingsRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SetUserOofSettingsResponse; };
    /**
     * Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    SetUserOofSettingsRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SetUserOofSettingsRequest; };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsObjectBody   The jsObjectBody from XmlJsObject.
     * @return  {any}            Service response.
     */
    SetUserOofSettingsRequest.prototype.ParseResponse = function (jsObjectBody) {
        var serviceResponse = new ServiceResponse_1.ServiceResponse();
        serviceResponse.LoadFromXmlJsObject(jsObjectBody[XmlElementNames_1.XmlElementNames.ResponseMessage], this.Service);
        return serviceResponse;
    };
    /**
     * @internal Validate request..
     */
    SetUserOofSettingsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.SmtpAddress, "SmtpAddress");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.OofSettings, "OofSettings");
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SetUserOofSettingsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Mailbox);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Address, this.SmtpAddress);
        writer.WriteEndElement(); // Mailbox
        this.OofSettings.WriteToXml(writer, XmlElementNames_1.XmlElementNames.UserOofSettings);
    };
    return SetUserOofSettingsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.SetUserOofSettingsRequest = SetUserOofSettingsRequest;
