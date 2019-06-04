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
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * ## @internal *Not Implemented*
 */
var ExecuteDiagnosticMethodRequest = /** @class */ (function (_super) {
    __extends(ExecuteDiagnosticMethodRequest, _super);
    function ExecuteDiagnosticMethodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExecuteDiagnosticMethodRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("ExecuteDiagnosticMethodRequest.ts - CreateServiceResponse : Not implemented."); };
    ExecuteDiagnosticMethodRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    ExecuteDiagnosticMethodRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    ExecuteDiagnosticMethodRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    ExecuteDiagnosticMethodRequest.prototype.GetResponseXmlElementName = function () { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetResponseXmlElementName : Not implemented."); };
    ExecuteDiagnosticMethodRequest.prototype.GetXmlElementName = function () { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetXmlElementName : Not implemented."); };
    /**@internal */
    ExecuteDiagnosticMethodRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("ExecuteDiagnosticMethodRequest.ts - WriteElementsToXml : Not implemented."); };
    return ExecuteDiagnosticMethodRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.ExecuteDiagnosticMethodRequest = ExecuteDiagnosticMethodRequest;
