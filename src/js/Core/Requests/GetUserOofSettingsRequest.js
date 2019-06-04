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
var GetUserOofSettingsResponse_1 = require("../Responses/GetUserOofSettingsResponse");
var OofExternalAudience_1 = require("../../Enumerations/OofExternalAudience");
var OofSettings_1 = require("../../ComplexProperties/Availability/OofSettings");
var ServiceError_1 = require("../../Enumerations/ServiceError");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetUserOofSettings request.
 *
 * @sealed
 */
var GetUserOofSettingsRequest = /** @class */ (function (_super) {
    __extends(GetUserOofSettingsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetUserOofSettingsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetUserOofSettingsRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.smtpAddress = null;
        return _this;
    }
    Object.defineProperty(GetUserOofSettingsRequest.prototype, "SmtpAddress", {
        /**
         * @internal Gets or sets the SMTP address.
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
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetUserOofSettingsResponse>}      Service response.
     */
    GetUserOofSettingsRequest.prototype.Execute = function () {
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
    GetUserOofSettingsRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetUserOofSettingsRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetUserOofSettingsResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetUserOofSettingsRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetUserOofSettingsRequest; };
    /**
     * Parses the response.
     *
     * @param   {any}   jsObjectBody   The jsObjectBody from XmlJsObject.
     * @return  {any}            Response object.
     */
    GetUserOofSettingsRequest.prototype.ParseResponse = function (jsObjectBody) {
        var serviceResponse = new GetUserOofSettingsResponse_1.GetUserOofSettingsResponse();
        serviceResponse.LoadFromXmlJsObject(jsObjectBody[XmlElementNames_1.XmlElementNames.ResponseMessage], this.Service);
        if (serviceResponse.ErrorCode == ServiceError_1.ServiceError.NoError) {
            if (jsObjectBody[XmlElementNames_1.XmlElementNames.OofSettings]) {
                serviceResponse.OofSettings = new OofSettings_1.OofSettings();
                serviceResponse.OofSettings.LoadFromXmlJsObject(jsObjectBody[XmlElementNames_1.XmlElementNames.OofSettings], this.Service);
                serviceResponse.OofSettings.AllowExternalOof = OofExternalAudience_1.OofExternalAudience[jsObjectBody[XmlElementNames_1.XmlElementNames.AllowExternalOof]];
            }
        }
        return serviceResponse;
    };
    /**
     * @internal Validate request.
     */
    GetUserOofSettingsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.SmtpAddress, "SmtpAddress");
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetUserOofSettingsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Mailbox);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Address, this.SmtpAddress);
        writer.WriteEndElement(); // Mailbox
    };
    return GetUserOofSettingsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetUserOofSettingsRequest = GetUserOofSettingsRequest;
