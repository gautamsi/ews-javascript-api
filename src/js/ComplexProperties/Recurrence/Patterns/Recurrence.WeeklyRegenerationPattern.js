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
var Recurrence_IntervalPattern_1 = require("./Recurrence.IntervalPattern");
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of weeks after the previous one is completed.
 */
var WeeklyRegenerationPattern = /** @class */ (function (_super) {
    __extends(WeeklyRegenerationPattern, _super);
    function WeeklyRegenerationPattern(startDate, interval) {
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            return;
        }
        _this = _super.call(this, startDate, interval) || this;
        return _this;
    }
    Object.defineProperty(WeeklyRegenerationPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.WeeklyRegeneration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WeeklyRegenerationPattern.prototype, "IsRegenerationPattern", {
        /**
         * Gets a value indicating whether this instance is a regeneration pattern.
         *
         * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return WeeklyRegenerationPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.WeeklyRegenerationPattern = WeeklyRegenerationPattern;
