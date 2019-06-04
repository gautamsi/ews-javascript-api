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
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal  Represents the response to a GetAppMarketplaceUrl operation
 *
 * @sealed
 */
var GetAppMarketplaceUrlResponse = /** @class */ (function (_super) {
    __extends(GetAppMarketplaceUrlResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetAppMarketplaceUrlResponse** class.
     */
    function GetAppMarketplaceUrlResponse() {
        return _super.call(this) || this;
    }
    Object.defineProperty(GetAppMarketplaceUrlResponse.prototype, "AppMarketplaceUrl", {
        /**
         * App Marketplace Url
         */
        get: function () {
            return this.appMarketplaceUrl;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetAppMarketplaceUrlResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.appMarketplaceUrl = jsObject[XmlElementNames_1.XmlElementNames.AppMarketplaceUrl];
    };
    return GetAppMarketplaceUrlResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetAppMarketplaceUrlResponse = GetAppMarketplaceUrlResponse;
