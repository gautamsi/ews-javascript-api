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
var NonIndexableItemDetailsResult_1 = require("../../MailboxSearch/NonIndexableItemDetailsResult");
var ServiceResponse_1 = require("./ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
/**
 * Represents the GetNonIndexableItemDetails response.
 *
 * @sealed
 */
var GetNonIndexableItemDetailsResponse = /** @class */ (function (_super) {
    __extends(GetNonIndexableItemDetailsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetDiscoverySearchConfigurationResponse** class.
     */
    function GetNonIndexableItemDetailsResponse() {
        var _this = _super.call(this) || this;
        /**
         * Non indexable item result
         *
         * internal set
         */
        _this.NonIndexableItemsResult = null;
        return _this;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetNonIndexableItemDetailsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //super.ReadElementsFromXmlJsObject(jsObject,service);
        if (jsObject[XmlElementNames_1.XmlElementNames.NonIndexableItemDetailsResult]) {
            this.NonIndexableItemsResult = NonIndexableItemDetailsResult_1.NonIndexableItemDetailsResult.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.NonIndexableItemDetailsResult], service);
        }
    };
    return GetNonIndexableItemDetailsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetNonIndexableItemDetailsResponse = GetNonIndexableItemDetailsResponse;
