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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var RuleCollection_1 = require("../../ComplexProperties/RuleCollection");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a GetInboxRules operation.
 *
 * @sealed
 */
var GetInboxRulesResponse = /** @class */ (function (_super) {
    __extends(GetInboxRulesResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetInboxRulesResponse** class.
     */
    function GetInboxRulesResponse() {
        var _this = _super.call(this) || this;
        _this.ruleCollection = new RuleCollection_1.RuleCollection();
        return _this;
    }
    Object.defineProperty(GetInboxRulesResponse.prototype, "Rules", {
        /**
         * @internal Gets the rule collection in the response.
         */
        get: function () {
            return this.ruleCollection;
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
    GetInboxRulesResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.ruleCollection.OutlookRuleBlobExists = ExtensionMethods_1.Convert.toBool(responseObject[XmlElementNames_1.XmlElementNames.OutlookRuleBlobExists]);
        if (responseObject[XmlElementNames_1.XmlElementNames.InboxRules]) {
            this.ruleCollection.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.InboxRules], service);
        }
    };
    return GetInboxRulesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetInboxRulesResponse = GetInboxRulesResponse;
