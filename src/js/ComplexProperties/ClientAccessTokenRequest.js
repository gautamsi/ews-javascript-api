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
var ClientAccessTokenType_1 = require("../Enumerations/ClientAccessTokenType");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a client token access request
 */
var ClientAccessTokenRequest = /** @class */ (function (_super) {
    __extends(ClientAccessTokenRequest, _super);
    function ClientAccessTokenRequest(id, tokenType, scope) {
        if (id === void 0) { id = null; }
        if (tokenType === void 0) { tokenType = ClientAccessTokenType_1.ClientAccessTokenType.CallerIdentity; }
        if (scope === void 0) { scope = null; }
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.tokenType = tokenType;
        _this.scope = scope;
        return _this;
    }
    Object.defineProperty(ClientAccessTokenRequest.prototype, "Id", {
        /**
         * Gets the App Id.
         */
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientAccessTokenRequest.prototype, "TokenType", {
        /**
         * Gets token type.
         */
        get: function () {
            return this.tokenType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientAccessTokenRequest.prototype, "Scope", {
        /**
         * Gets the token scope.
         */
        get: function () {
            return this.scope;
        },
        enumerable: true,
        configurable: true
    });
    return ClientAccessTokenRequest;
}(ComplexProperty_1.ComplexProperty));
exports.ClientAccessTokenRequest = ClientAccessTokenRequest;
