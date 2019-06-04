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
var ClientAccessTokenType_1 = require("../../Enumerations/ClientAccessTokenType");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the response to a GetClientAccessToken operation.
 *
 * @sealed
 */
var GetClientAccessTokenResponse = /** @class */ (function (_super) {
    __extends(GetClientAccessTokenResponse, _super);
    function GetClientAccessTokenResponse(id, tokenType) {
        if (id === void 0) { id = null; }
        if (tokenType === void 0) { tokenType = ClientAccessTokenType_1.ClientAccessTokenType.CallerIdentity; }
        var _this = _super.call(this) || this;
        _this.TokenValue = null;
        _this.TTL = 0;
        _this.Id = id;
        _this.TokenType = tokenType;
        return _this;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetClientAccessTokenResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.Token]) {
            var jsObject = responseObject[XmlElementNames_1.XmlElementNames.Token];
            this.Id = jsObject[XmlElementNames_1.XmlElementNames.Id];
            this.TokenType = ClientAccessTokenType_1.ClientAccessTokenType[jsObject[XmlElementNames_1.XmlElementNames.TokenType]];
            this.TokenValue = jsObject[XmlElementNames_1.XmlElementNames.TokenValue];
            this.TTL = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.TTL]);
        }
    };
    return GetClientAccessTokenResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetClientAccessTokenResponse = GetClientAccessTokenResponse;
