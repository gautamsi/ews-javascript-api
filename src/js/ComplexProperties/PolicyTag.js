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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var RetentionTagBase_1 = require("./RetentionTagBase");
/**
 * Represents the policy tag of an item or folder.
 */
var PolicyTag = /** @class */ (function (_super) {
    __extends(PolicyTag, _super);
    function PolicyTag(isExplicit, retentionId) {
        if (isExplicit === void 0) { isExplicit = false; }
        if (retentionId === void 0) { retentionId = null; }
        var _this = _super.call(this, XmlElementNames_1.XmlElementNames.PolicyTag) || this;
        _this.IsExplicit = isExplicit;
        _this.RetentionId = retentionId;
        return _this;
    }
    return PolicyTag;
}(RetentionTagBase_1.RetentionTagBase));
exports.PolicyTag = PolicyTag;
