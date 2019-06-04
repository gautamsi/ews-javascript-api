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
var GetEventsResults_1 = require("../../Notifications/GetEventsResults");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a subscription event retrieval operation.
 *
 * @sealed
 */
var GetEventsResponse = /** @class */ (function (_super) {
    __extends(GetEventsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetEventsResponse** class.
     */
    function GetEventsResponse() {
        var _this = _super.call(this) || this;
        _this.results = new GetEventsResults_1.GetEventsResults();
        return _this;
    }
    Object.defineProperty(GetEventsResponse.prototype, "Results", {
        /**
         * @internal Gets event results from subscription.
         */
        get: function () {
            return this.results;
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
    GetEventsResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.results.LoadFromXmlJsObject(jsObject, service);
    };
    return GetEventsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetEventsResponse = GetEventsResponse;
