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
 * ## @internal *Not Implemented*   Server to server call - not needed
 */
var SetClientExtensionRequest = /** @class */ (function (_super) {
    __extends(SetClientExtensionRequest, _super);
    function SetClientExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SetClientExtensionRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("SetClientExtensionRequest.ts - CreateServiceResponse : Not implemented."); };
    SetClientExtensionRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("SetClientExtensionRequest.ts - GetExpectedResponseMessageCount : Not implemented."); };
    SetClientExtensionRequest.prototype.GetMinimumRequiredServerVersion = function () { throw new Error("SetClientExtensionRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); };
    SetClientExtensionRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("SetClientExtensionRequest.ts - GetResponseMessageXmlElementName : Not implemented."); };
    SetClientExtensionRequest.prototype.GetResponseXmlElementName = function () { throw new Error("SetClientExtensionRequest.ts - GetResponseXmlElementName : Not implemented."); };
    SetClientExtensionRequest.prototype.GetXmlElementName = function () { throw new Error("SetClientExtensionRequest.ts - GetXmlElementName : Not implemented."); };
    SetClientExtensionRequest.prototype.Validate = function () { throw new Error("SetClientExtensionRequest.ts - Validate : Not implemented."); };
    /**@internal */
    SetClientExtensionRequest.prototype.WriteElementsToXml = function (writer) { throw new Error("SetClientExtensionRequest.ts - WriteElementsToXml : Not implemented."); };
    return SetClientExtensionRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SetClientExtensionRequest = SetClientExtensionRequest;
