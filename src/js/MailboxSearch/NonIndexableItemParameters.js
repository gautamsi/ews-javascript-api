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
/**
 * Represents non indexable item parameters base class
 */
var NonIndexableItemParameters = /** @class */ (function () {
    function NonIndexableItemParameters() {
        /**
         * List of mailboxes (in legacy DN format)
         */
        this.Mailboxes = null;
        /**
         * Search archive only
         */
        this.SearchArchiveOnly = false;
    }
    return NonIndexableItemParameters;
}());
exports.NonIndexableItemParameters = NonIndexableItemParameters;
/**
 * Represents get non indexable item statistics parameters.
 *
 * @sealed
 */
var GetNonIndexableItemStatisticsParameters = /** @class */ (function (_super) {
    __extends(GetNonIndexableItemStatisticsParameters, _super);
    function GetNonIndexableItemStatisticsParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetNonIndexableItemStatisticsParameters;
}(NonIndexableItemParameters));
exports.GetNonIndexableItemStatisticsParameters = GetNonIndexableItemStatisticsParameters;
/**
 * Represents get non indexable item details parameters.
 *
 * @sealed
 */
var GetNonIndexableItemDetailsParameters = /** @class */ (function (_super) {
    __extends(GetNonIndexableItemDetailsParameters, _super);
    function GetNonIndexableItemDetailsParameters() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @Nullable Page size
         */
        _this.PageSize = null; //Nullable
        /**
         * Page item reference
         */
        _this.PageItemReference = null;
        /**
         * @Nullable Search page direction
         */
        _this.PageDirection = null; //Nullable
        return _this;
    }
    return GetNonIndexableItemDetailsParameters;
}(NonIndexableItemParameters));
exports.GetNonIndexableItemDetailsParameters = GetNonIndexableItemDetailsParameters;
