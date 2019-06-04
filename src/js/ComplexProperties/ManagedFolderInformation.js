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
var ComplexProperty_1 = require("./ComplexProperty");
var ManagedFolderInformation = /** @class */ (function (_super) {
    __extends(ManagedFolderInformation, _super);
    function ManagedFolderInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagedFolderInformation.prototype.LoadFromJson = function (jsonProperty /*JsonObject*/, service) { throw new Error("ManagedFolderInformation.ts - LoadFromJson : Not implemented."); };
    /**@internal */
    ManagedFolderInformation.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("ManagedFolderInformation.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    return ManagedFolderInformation;
}(ComplexProperty_1.ComplexProperty));
exports.ManagedFolderInformation = ManagedFolderInformation;
//}
