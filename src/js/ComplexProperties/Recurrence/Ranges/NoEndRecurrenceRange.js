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
var XmlElementNames_1 = require("../../../Core/XmlElementNames");
var RecurrenceRange_1 = require("./RecurrenceRange");
/**
 * @internal Represents recurrence range with no end date.
 */
var NoEndRecurrenceRange = /** @class */ (function (_super) {
    __extends(NoEndRecurrenceRange, _super);
    function NoEndRecurrenceRange(startDate) {
        if (startDate === void 0) { startDate = null; }
        var _this = this;
        arguments.length === 0 ? _this = _super.call(this) || this : _this = _super.call(this, startDate) || this;
        return _this;
    }
    Object.defineProperty(NoEndRecurrenceRange.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.NoEndRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    NoEndRecurrenceRange.prototype.SetupRecurrence = function (recurrence) {
        _super.prototype.SetupRecurrence.call(this, recurrence);
        recurrence.NeverEnds();
    };
    return NoEndRecurrenceRange;
}(RecurrenceRange_1.RecurrenceRange));
exports.NoEndRecurrenceRange = NoEndRecurrenceRange;
