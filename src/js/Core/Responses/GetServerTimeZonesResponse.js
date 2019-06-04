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
var ServiceResponse_1 = require("./ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var TimeZoneDefinition_1 = require("../../ComplexProperties/TimeZones/TimeZoneDefinition");
/**
 * internal Represents the response to a GetServerTimeZones request.
 */
var GetServerTimeZonesResponse = /** @class */ (function (_super) {
    __extends(GetServerTimeZonesResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetServerTimeZonesResponse** class.
     */
    function GetServerTimeZonesResponse() {
        var _this = _super.call(this) || this;
        _this.timeZones = [];
        return _this;
    }
    Object.defineProperty(GetServerTimeZonesResponse.prototype, "TimeZones", {
        /**
         * Gets the time zones returned by the associated GetServerTimeZones request.
         * @value   The time zones.
         */
        get: function () {
            return this.timeZones;
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
    GetServerTimeZonesResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.TimeZoneDefinitions]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames_1.XmlElementNames.TimeZoneDefinitions], XmlElementNames_1.XmlElementNames.TimeZoneDefinition); _i < _a.length; _i++) {
                var tzObject = _a[_i];
                var timeZoneDefinition = new TimeZoneDefinition_1.TimeZoneDefinition();
                timeZoneDefinition.LoadFromXmlJsObject(tzObject, service);
                this.timeZones.push(timeZoneDefinition.ToTimeZoneInfo(service, true));
            }
        }
    };
    return GetServerTimeZonesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetServerTimeZonesResponse = GetServerTimeZonesResponse;
