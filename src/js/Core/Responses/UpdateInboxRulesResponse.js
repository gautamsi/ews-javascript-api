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
var RuleOperationErrorCollection_1 = require("../../ComplexProperties/RuleOperationErrorCollection");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a UpdateInboxRulesResponse operation.
 *
 * @sealed
 */
var UpdateInboxRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateInboxRulesResponse, _super);
    /**
     * @internal Initializes a new instance of the **UpdateInboxRulesResponse** class.
     */
    function UpdateInboxRulesResponse() {
        var _this = _super.call(this) || this;
        /**
         * Rule operation error collection.
         */
        _this.errors = null;
        _this.errors = new RuleOperationErrorCollection_1.RuleOperationErrorCollection();
        return _this;
    }
    Object.defineProperty(UpdateInboxRulesResponse.prototype, "Errors", {
        /**
         * @internal Gets the rule operation errors in the response.
         */
        get: function () {
            return this.errors;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads extra error details from XML
     *
     * @param   {any}   			responseObject      Json Object converted from XML.
     * @param   {ExchangeService}   service             The service.
     */
    UpdateInboxRulesResponse.prototype.LoadExtraErrorDetailsFromXmlJsObject = function (responseObject, service) {
        _super.prototype.LoadExtraErrorDetailsFromXmlJsObject.call(this, responseObject, service);
        if (responseObject[XmlElementNames_1.XmlElementNames.RuleOperationErrors]) {
            this.errors.CreateFromXmlJsObjectCollection(responseObject[XmlElementNames_1.XmlElementNames.RuleOperationErrors][XmlElementNames_1.XmlElementNames.RuleOperationError], service);
        }
    };
    return UpdateInboxRulesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.UpdateInboxRulesResponse = UpdateInboxRulesResponse;
