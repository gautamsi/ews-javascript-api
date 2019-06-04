"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class ExtendedAttribute
 *
 * @sealed
 */
var ExtendedAttribute = /** @class */ (function () {
    function ExtendedAttribute(name, value) {
        if (name === void 0) { name = null; }
        if (value === void 0) { value = null; }
        /**
         * Gets or sets the name.
         *
         * @value The name.
         */
        this.Name = null;
        /**
         * Gets or sets the value.
         *
         * @value The value.
         */
        this.Value = null;
        this.Name = name;
        this.Value = value;
    }
    return ExtendedAttribute;
}());
exports.ExtendedAttribute = ExtendedAttribute;
// export class ExtendedAttributes extends Array<ExtendedAttribute> {
// }
