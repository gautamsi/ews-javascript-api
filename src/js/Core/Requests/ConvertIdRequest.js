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
var IdFormat_1 = require("../../Enumerations/IdFormat");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ConvertIdResponse_1 = require("../Responses/ConvertIdResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a ConvertId request.
 *
 * @sealed
 */
var ConvertIdRequest = /** @class */ (function (_super) {
    __extends(ConvertIdRequest, _super);
    /**
     * @internal Initializes a new instance of the **ConvertIdRequest** class.
     *
     * @param   {ExchangeService}   service             The service.
     * @param   {ServiceErrorHandling}   errorHandlingMode   Indicates how errors should be handled.
     */
    function ConvertIdRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.destinationFormat = IdFormat_1.IdFormat.EwsId;
        _this.ids = [];
        return _this;
    }
    Object.defineProperty(ConvertIdRequest.prototype, "DestinationFormat", {
        /**
         * Gets or sets the destination format.
         *
         * @value   The destination format.
         */
        get: function () {
            return this.destinationFormat;
        },
        set: function (value) {
            this.destinationFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConvertIdRequest.prototype, "Ids", {
        /**
         * Gets the ids.
         *
         * @value   The ids.
         */
        get: function () {
            return this.ids;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {ConvertIdResponse}     Service response.
     */
    ConvertIdRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new ConvertIdResponse_1.ConvertIdResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    ConvertIdRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.Ids.length;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    ConvertIdRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    ConvertIdRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.ConvertIdResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    ConvertIdRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.ConvertIdResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    ConvertIdRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.ConvertId;
    };
    /**
     * @internal Validate request.
     */
    ConvertIdRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.Ids, "Ids");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ConvertIdRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.DestinationFormat, IdFormat_1.IdFormat[this.DestinationFormat]);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SourceIds);
        for (var _i = 0, _a = this.Ids; _i < _a.length; _i++) {
            var alternateId = _a[_i];
            alternateId.WriteToXml(writer);
        }
        writer.WriteEndElement(); // SourceIds
    };
    return ConvertIdRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.ConvertIdRequest = ConvertIdRequest;
