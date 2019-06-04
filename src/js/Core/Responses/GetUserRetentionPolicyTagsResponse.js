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
var RetentionPolicyTag_1 = require("../../Elc/RetentionPolicyTag");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the GetUserRetentionPolicyTagsResponse response.
 *
 * @sealed
 */
var GetUserRetentionPolicyTagsResponse = /** @class */ (function (_super) {
    __extends(GetUserRetentionPolicyTagsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetUserRetentionPolicyTagsResponse** class.
     */
    function GetUserRetentionPolicyTagsResponse() {
        var _this = _super.call(this) || this;
        _this.retentionPolicyTags = [];
        return _this;
    }
    Object.defineProperty(GetUserRetentionPolicyTagsResponse.prototype, "RetentionPolicyTags", {
        /**
         * Retention policy tags result.
         */
        get: function () {
            return this.retentionPolicyTags;
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
    GetUserRetentionPolicyTagsResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.retentionPolicyTags.splice(0);
        if (responseObject[XmlElementNames_1.XmlElementNames.RetentionPolicyTags]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames_1.XmlElementNames.RetentionPolicyTags], XmlElementNames_1.XmlElementNames.RetentionPolicyTag); _i < _a.length; _i++) {
                var retentionPolicyTagObject = _a[_i];
                this.retentionPolicyTags.push(RetentionPolicyTag_1.RetentionPolicyTag.LoadFromXmlJsObject(retentionPolicyTagObject));
            }
        }
    };
    return GetUserRetentionPolicyTagsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetUserRetentionPolicyTagsResponse = GetUserRetentionPolicyTagsResponse;
