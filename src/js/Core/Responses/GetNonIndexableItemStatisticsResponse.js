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
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var NonIndexableItemStatistic_1 = require("../../MailboxSearch/NonIndexableItemStatistic");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the GetNonIndexableItemStatistics response.
 *
 * @sealed
 */
var GetNonIndexableItemStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetNonIndexableItemStatisticsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetNonIndexableItemStatisticsResponse** class.
     */
    function GetNonIndexableItemStatisticsResponse() {
        var _this = _super.call(this) || this;
        /**
         * List of non indexable statistic
         */
        _this.NonIndexableStatistics = null;
        return _this;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetNonIndexableItemStatisticsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //super.ReadElementsFromXmlJsObject(jsObject,service);
        this.NonIndexableStatistics = [];
        if (jsObject[XmlElementNames_1.XmlElementNames.NonIndexableItemStatistics]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.NonIndexableItemStatistics], XmlElementNames_1.XmlElementNames.NonIndexableItemStatistic); _i < _a.length; _i++) {
                var nonIndexableItemStatistic = _a[_i];
                this.NonIndexableStatistics.push(NonIndexableItemStatistic_1.NonIndexableItemStatistic.LoadFromXmlJsObject(nonIndexableItemStatistic, service));
            }
        }
    };
    return GetNonIndexableItemStatisticsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetNonIndexableItemStatisticsResponse = GetNonIndexableItemStatisticsResponse;
