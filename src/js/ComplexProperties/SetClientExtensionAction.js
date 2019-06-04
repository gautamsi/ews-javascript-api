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
var SetClientExtensionAction = /** @class */ (function (_super) {
    __extends(SetClientExtensionAction, _super);
    function SetClientExtensionAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**@internal */
    SetClientExtensionAction.prototype.WriteAttributesToXml = function (writer) { throw new Error("SetClientExtensionAction.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    SetClientExtensionAction.prototype.WriteElementsToXml = function (writer) { throw new Error("SetClientExtensionAction.ts - WriteElementsToXml : Not implemented."); };
    return SetClientExtensionAction;
}(ComplexProperty_1.ComplexProperty));
exports.SetClientExtensionAction = SetClientExtensionAction;
//}
