"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PreviewItemBaseShape_1 = require("../Enumerations/PreviewItemBaseShape");
/**
 * Represents preview item response shape
 *
 * @sealed
 */
var PreviewItemResponseShape = /** @class */ (function () {
    function PreviewItemResponseShape(baseShape, additionalProperties) {
        if (baseShape === void 0) { baseShape = PreviewItemBaseShape_1.PreviewItemBaseShape.Default; }
        if (additionalProperties === void 0) { additionalProperties = null; }
        /**
         * Mailbox identifier
         */
        this.BaseShape = PreviewItemBaseShape_1.PreviewItemBaseShape.Default;
        /**
         * Additional properties (must be in form of extended properties)
         */
        this.AdditionalProperties = null;
        this.BaseShape = baseShape;
        this.AdditionalProperties = additionalProperties;
    }
    return PreviewItemResponseShape;
}());
exports.PreviewItemResponseShape = PreviewItemResponseShape;
