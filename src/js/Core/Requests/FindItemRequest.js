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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var FindItemResponse_1 = require("../Responses/FindItemResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var FindRequest_1 = require("./FindRequest");
/**
 * @internal Represents a **FindItem** request.
 *
 * @type <TItem>   Item type.
 */
var FindItemRequest = /** @class */ (function (_super) {
    __extends(FindItemRequest, _super);
    /**
     * @internal Initializes a new instance of the **FindItemRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function FindItemRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.groupBy = null;
        return _this;
    }
    Object.defineProperty(FindItemRequest.prototype, "GroupBy", {
        /**
         * Gets or sets the group by.
         *
         * @value The group by.
         */
        get: function () {
            return this.groupBy;
        },
        set: function (value) {
            this.groupBy = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {FindItemResponse<TItem>}           Service response.
     */
    FindItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new FindItemResponse_1.FindItemResponse(this.GroupBy != null, this.View.GetPropertySetOrDefault()); };
    /**
     * @internal Gets the group by clause.
     *
     * @return  {Grouping}      The group by clause, null if the request does not have or support grouping.
     */
    FindItemRequest.prototype.GetGroupBy = function () { return this.GroupBy; };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    FindItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    FindItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindItemResponseMessage; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    FindItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindItemResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string} XML element name.
     */
    FindItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FindItem; };
    return FindItemRequest;
}(FindRequest_1.FindRequest));
exports.FindItemRequest = FindItemRequest;
