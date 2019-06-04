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
var UserConfiguration_1 = require("../../Misc/UserConfiguration");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a DeleteUserConfiguration request.
 */
var DeleteUserConfigurationRequest = /** @class */ (function (_super) {
    __extends(DeleteUserConfigurationRequest, _super);
    /**
     * @internal Initializes a new instance of the **DeleteUserConfigurationRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     */
    function DeleteUserConfigurationRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.name = null;
        _this.parentFolderId = null;
        return _this;
    }
    Object.defineProperty(DeleteUserConfigurationRequest.prototype, "Name", {
        /**
         * @internal Gets or sets the name.
         *
         * @Value   The Name
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeleteUserConfigurationRequest.prototype, "ParentFolderId", {
        /**
         * @internal Gets or sets the parent folder Id.
         *
         * @value   The parent folder Id.
         */
        get: function () {
            return this.parentFolderId;
        },
        set: function (value) {
            this.parentFolderId = value;
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
    DeleteUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new ServiceResponse_1.ServiceResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    DeleteUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    DeleteUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    DeleteUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DeleteUserConfigurationResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    DeleteUserConfigurationRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DeleteUserConfigurationResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    DeleteUserConfigurationRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.DeleteUserConfiguration;
    };
    /**
     * @internal Validate the request.
     */
    DeleteUserConfigurationRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.name, "name");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.parentFolderId, "parentFolderId");
        this.ParentFolderId.Validate(this.Service.RequestedServerVersion);
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DeleteUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) {
        // Write UserConfiguationName element
        UserConfiguration_1.UserConfiguration.WriteUserConfigurationNameToXml(writer, XmlNamespace_1.XmlNamespace.Messages, this.name, this.parentFolderId);
    };
    return DeleteUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.DeleteUserConfigurationRequest = DeleteUserConfigurationRequest;
