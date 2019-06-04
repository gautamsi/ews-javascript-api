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
 * ## *Not Implemented*
 */
var ExecuteDiagnosticMethodResponse = /** @class */ (function (_super) {
    __extends(ExecuteDiagnosticMethodResponse, _super);
    function ExecuteDiagnosticMethodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**@internal */
    ExecuteDiagnosticMethodResponse.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ExecuteDiagnosticMethodResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); };
    return ExecuteDiagnosticMethodResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ExecuteDiagnosticMethodResponse = ExecuteDiagnosticMethodResponse;
