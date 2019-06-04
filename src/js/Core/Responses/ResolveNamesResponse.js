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
var ServiceError_1 = require("../../Enumerations/ServiceError");
var XmlElementNames_1 = require("../XmlElementNames");
var NameResolutionCollection_1 = require("../../Misc/NameResolutionCollection");
var EwsLogging_1 = require("../EwsLogging");
var ServiceResponse_1 = require("./ServiceResponse");
var ResolveNamesResponse = /** @class */ (function (_super) {
    __extends(ResolveNamesResponse, _super);
    function ResolveNamesResponse(service) {
        var _this = _super.call(this) || this;
        _this.resolutions = null;
        EwsLogging_1.EwsLogging.Assert(service !== null, "ResolveNamesResponse.ctor", "service is null");
        _this.resolutions = new NameResolutionCollection_1.NameResolutionCollection(service);
        return _this;
    }
    Object.defineProperty(ResolveNamesResponse.prototype, "Resolutions", {
        get: function () {
            return this.resolutions;
        },
        enumerable: true,
        configurable: true
    });
    ResolveNamesResponse.prototype.InternalThrowIfNecessary = function () {
        if (this.ErrorCode != ServiceError_1.ServiceError.ErrorNameResolutionNoResults) {
            _super.prototype.InternalThrowIfNecessary.call(this);
        }
    };
    ResolveNamesResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.Resolutions.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.ResolutionSet], service);
    };
    return ResolveNamesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ResolveNamesResponse = ResolveNamesResponse;
