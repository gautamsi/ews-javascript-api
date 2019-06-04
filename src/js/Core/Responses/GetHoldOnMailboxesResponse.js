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
var MailboxHoldResult_1 = require("../../MailboxSearch/MailboxHoldResult");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the GetHoldOnMailboxes response.
 *
 * @sealed
 */
var GetHoldOnMailboxesResponse = /** @class */ (function (_super) {
    __extends(GetHoldOnMailboxesResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetHoldOnMailboxesResponse** class.
     */
    function GetHoldOnMailboxesResponse() {
        var _this = _super.call(this) || this;
        _this.holdResult = null;
        return _this;
    }
    Object.defineProperty(GetHoldOnMailboxesResponse.prototype, "HoldResult", {
        /**
         * Mailbox hold result
         */
        get: function () {
            return this.holdResult;
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
    GetHoldOnMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //super.ReadElementsFromXmlJsObject(jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.MailboxHoldResult]) {
            this.holdResult = MailboxHoldResult_1.MailboxHoldResult.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.MailboxHoldResult], service);
        }
    };
    return GetHoldOnMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetHoldOnMailboxesResponse = GetHoldOnMailboxesResponse;
