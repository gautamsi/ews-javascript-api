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
var CreateResponseObjectResponse_1 = require("../Responses/CreateResponseObjectResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var CreateItemRequestBase_1 = require("./CreateItemRequestBase");
/** @internal */
var CreateResponseObjectRequest = /** @class */ (function (_super) {
    __extends(CreateResponseObjectRequest, _super);
    function CreateResponseObjectRequest(service, errorHandlingModeServiceErrorHandling) {
        return _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
    }
    CreateResponseObjectRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new CreateResponseObjectResponse_1.CreateResponseObjectResponse(); };
    CreateResponseObjectRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    return CreateResponseObjectRequest;
}(CreateItemRequestBase_1.CreateItemRequestBase));
exports.CreateResponseObjectRequest = CreateResponseObjectRequest;
