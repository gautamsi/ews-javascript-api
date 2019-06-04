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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var UserConfiguration_1 = require("../../Misc/UserConfiguration");
var UserConfigurationProperties_1 = require("../../Enumerations/UserConfigurationProperties");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var GetUserConfigurationResponse_1 = require("../Responses/GetUserConfigurationResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a GetUserConfiguration request.
 */
var GetUserConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetUserConfigurationRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetUserConfigurationRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     */
    function GetUserConfigurationRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.name = null;
        _this.parentFolderId = null;
        _this.properties = UserConfigurationProperties_1.UserConfigurationProperties.Id;
        _this.userConfiguration = null;
        return _this;
    }
    Object.defineProperty(GetUserConfigurationRequest.prototype, "Name", {
        /**
         * @internal Gets or sets the name.
         *
         * @value   The name.
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
    Object.defineProperty(GetUserConfigurationRequest.prototype, "ParentFolderId", {
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
    Object.defineProperty(GetUserConfigurationRequest.prototype, "UserConfiguration", {
        /**
         * @internal Gets or sets the user configuration.
         *
         * @value   The userConfiguration.
         */
        get: function () {
            return this.userConfiguration;
        },
        set: function (value) {
            this.userConfiguration = value;
            this.name = this.userConfiguration.Name;
            this.parentFolderId = this.userConfiguration.ParentFolderId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GetUserConfigurationRequest.prototype, "Properties", {
        /**
         * @internal Gets or sets the properties.
         *
         * @value   The properties.
         */
        get: function () {
            return this.properties;
        },
        set: function (value) {
            this.properties = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {GetUserConfigurationResponse}	    Service response.
     */
    GetUserConfigurationRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        // In the case of UserConfiguration.Load(), this.userConfiguration is set.
        if (this.userConfiguration == null) {
            this.userConfiguration = new UserConfiguration_1.UserConfiguration(service, this.properties);
            this.userConfiguration.Name = this.name;
            this.userConfiguration.ParentFolderId = this.parentFolderId;
        }
        return new GetUserConfigurationResponse_1.GetUserConfigurationResponse(this.userConfiguration);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetUserConfigurationRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetUserConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    GetUserConfigurationRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserConfigurationResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    GetUserConfigurationRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserConfigurationResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    GetUserConfigurationRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserConfiguration;
    };
    /**
     * @internal Validate the request.
     */
    GetUserConfigurationRequest.prototype.Validate = function () {
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
    GetUserConfigurationRequest.prototype.WriteElementsToXml = function (writer) {
        // Write UserConfiguationName element
        UserConfiguration_1.UserConfiguration.WriteUserConfigurationNameToXml(writer, XmlNamespace_1.XmlNamespace.Messages, this.name, this.parentFolderId);
        // Write UserConfigurationProperties element
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.UserConfigurationProperties, this.properties === UserConfigurationProperties_1.UserConfigurationProperties.All ? UserConfigurationProperties_1.UserConfigurationProperties[this.properties] : ExtensionMethods_1.EnumHelper.ToString(UserConfigurationProperties_1.UserConfigurationProperties, this.properties).split(GetUserConfigurationRequest.EnumDelimiter).join(""));
        //.replace(GetUserConfigurationRequest.EnumDelimiter, " ")); //info: replace only replaces first occurance
    };
    GetUserConfigurationRequest.EnumDelimiter = ",";
    return GetUserConfigurationRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetUserConfigurationRequest = GetUserConfigurationRequest;
