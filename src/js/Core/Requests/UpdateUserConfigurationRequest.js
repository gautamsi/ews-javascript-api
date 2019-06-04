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
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a UpdateUserConfiguration request.
 */
var UpdateUserConfigurationRequest = /** @class */ (function (_super) {
    __extends(UpdateUserConfigurationRequest, _super);
    /**
     * @internal Initializes a new instance of the **UpdateUserConfigurationRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     */
    function UpdateUserConfigurationRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.userConfiguration = null;
        return _this;
    }
    Object.defineProperty(UpdateUserConfigurationRequest.prototype, "UserConfiguration", {
        /**
         * Gets or sets the user configuration.
         *
         * @value   The userConfiguration.
         */
        get: function () {
            return this.userConfiguration;
        },
        set: function (value) {
            this.userConfiguration = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {ServiceResponse}	Service response.
     */
    UpdateUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new ServiceResponse_1.ServiceResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    UpdateUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    UpdateUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    UpdateUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateUserConfigurationResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    UpdateUserConfigurationRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateUserConfigurationResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    UpdateUserConfigurationRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateUserConfiguration;
    };
    /**
     * @internal Validate the request.
     */
    UpdateUserConfigurationRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.userConfiguration, "userConfiguration");
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UpdateUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) {
        // Write UserConfiguation element
        this.userConfiguration.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.UserConfiguration);
    };
    return UpdateUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.UpdateUserConfigurationRequest = UpdateUserConfigurationRequest;
