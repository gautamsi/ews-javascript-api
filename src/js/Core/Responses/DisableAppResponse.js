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
/**
 * @internal  Represents the response to a DisableApp operation.
 * Today this class doesn't add extra functionality. Keep this class here so future we can return extension info up-on installation complete.
 *
 * @sealed
 */
var DisableAppResponse = /** @class */ (function (_super) {
    __extends(DisableAppResponse, _super);
    /**
     * @internal Initializes a new instance of the **DisableAppResponse** class.
     */
    function DisableAppResponse() {
        return _super.call(this) || this;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    DisableAppResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //does nothing, here to supress base class message about ReadElementsFromXmlJsObject when BatchProcessingStopped is false
    };
    return DisableAppResponse;
}(ServiceResponse_1.ServiceResponse));
exports.DisableAppResponse = DisableAppResponse;
