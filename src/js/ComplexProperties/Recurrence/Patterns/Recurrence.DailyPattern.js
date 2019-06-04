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
 * Represents a recurrence pattern where each occurrence happens a specific number of days after the previous one.
 */
var DailyPattern = /** @class */ (function (_super) {
    __extends(DailyPattern, _super);
    function DailyPattern(startDate, interval) {
        var _this = this;
        if (arguments.length === 0) {
            _this = _super.call(this) || this;
            return;
        }
        _this = _super.call(this, startDate, interval) || this;
        return _this;
    }
    Object.defineProperty(DailyPattern.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () {
            return XmlElementNames_1.XmlElementNames.DailyRecurrence;
        },
        enumerable: true,
        configurable: true
    });
    return DailyPattern;
}(Recurrence_IntervalPattern_1.IntervalPattern));
exports.DailyPattern = DailyPattern;
