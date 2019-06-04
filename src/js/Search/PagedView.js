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
var OffsetBasePoint_1 = require("../Enumerations/OffsetBasePoint");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ViewBase_1 = require("./ViewBase");
/**
 * Represents a view settings that support paging in a search operation.
 */
var PagedView = /** @class */ (function (_super) {
    __extends(PagedView, _super);
    function PagedView(pageSize, offset, offsetBasePoint) {
        if (offset === void 0) { offset = 0; }
        if (offsetBasePoint === void 0) { offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning; }
        var _this = _super.call(this) || this;
        _this.pageSize = 0;
        _this.offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning;
        _this.offset = 0;
        _this.pageSize = pageSize;
        _this.Offset = offset;
        _this.OffsetBasePoint = offsetBasePoint;
        return _this;
    }
    Object.defineProperty(PagedView.prototype, "PageSize", {
        /**
         * The maximum number of items or folders the search operation should return.
         */
        get: function () { return this.pageSize; },
        set: function (value) {
            if (value <= 0) {
                throw new Error(Strings_1.Strings.ValueMustBeGreaterThanZero);
            }
            this.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedView.prototype, "OffsetBasePoint", {
        /**
         * Gets or sets the base point of the offset.
         */
        get: function () {
            return this.offsetBasePoint;
        },
        set: function (value) {
            this.offsetBasePoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagedView.prototype, "Offset", {
        /**
         * Gets or sets the offset.
         */
        get: function () { return this.offset; },
        set: function (value) {
            if (value >= 0) {
                this.offset = value;
            }
            else {
                throw new Error(Strings_1.Strings.OffsetMustBeGreaterThanZero);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number?}      The maximum number of items or folders that should be returned by the search operation.
     */
    PagedView.prototype.GetMaxEntriesReturned = function () { return this.PageSize; };
    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    PagedView.prototype.InternalValidate = function (request) { _super.prototype.InternalValidate.call(this, request); };
    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    PagedView.prototype.InternalWriteSearchSettingsToXml = function (writer, groupBy) {
        if (groupBy !== null && typeof groupBy !== 'undefined') {
            groupBy.WriteToXml(writer);
        }
    };
    /**
     * @internal Writes this view to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    PagedView.prototype.InternalWriteViewToXml = function (writer) {
        _super.prototype.InternalWriteViewToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Offset, this.Offset);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.BasePoint, OffsetBasePoint_1.OffsetBasePoint[this.OffsetBasePoint]);
    };
    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    PagedView.prototype.WriteOrderByToXml = function (writer) {
        /* No order by for paged view*/
    };
    return PagedView;
}(ViewBase_1.ViewBase));
exports.PagedView = PagedView;
