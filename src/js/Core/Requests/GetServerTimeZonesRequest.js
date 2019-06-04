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
var GetServerTimeZonesResponse_1 = require("../Responses/GetServerTimeZonesResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a GetServerTimeZones request.
 */
var GetServerTimeZonesRequest = /** @class */ (function (_super) {
    __extends(GetServerTimeZonesRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetServerTimeZonesRequest** class.
     *
     * @param   {service}   service   The service.
     */
    function GetServerTimeZonesRequest(service) {
        return _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
    }
    Object.defineProperty(GetServerTimeZonesRequest.prototype, "Ids", {
        /**
         * @internal Gets or sets the ids of the time zones that should be returned by the server.
         */
        get: function () {
            return this.ids;
        },
        set: function (value) {
            this.ids = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {SyncFolderItemsResponse}		Response object.
     */
    GetServerTimeZonesRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetServerTimeZonesResponse_1.GetServerTimeZonesResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of items in response.
     */
    GetServerTimeZonesRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetServerTimeZonesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    GetServerTimeZonesRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetServerTimeZonesResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetServerTimeZonesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetServerTimeZonesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetServerTimeZonesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetServerTimeZones;
    };
    /**
     * @internal Validate request.
     */
    GetServerTimeZonesRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.ids != null) {
            EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.ids, "Ids");
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetServerTimeZonesRequest.prototype.WriteElementsToXml = function (writer) {
        if (this.Ids != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Ids);
            for (var _i = 0, _a = this.ids; _i < _a.length; _i++) {
                var id = _a[_i];
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Id, id);
            }
            writer.WriteEndElement(); // Ids
        }
    };
    return GetServerTimeZonesRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetServerTimeZonesRequest = GetServerTimeZonesRequest;
