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
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/** @internal */
var ListValuePropertyDefinition = /** @class */ (function (_super) {
    __extends(ListValuePropertyDefinition, _super);
    function ListValuePropertyDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListValuePropertyDefinition.prototype.Parse = function (value) {
        throw new Error("ListValuePropertyDefinition - Parse: Not implemented.");
        // xs:list values are sent as a space-separated list; convert to comma-separated for EwsUtilities.Parse.
        var commaSeparatedValue = value ? value : value.replace(' ', ',');
        //return EwsUtilities.Parse<TPropertyValue>(commaSeparatedValue);
    };
    return ListValuePropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.ListValuePropertyDefinition = ListValuePropertyDefinition;
