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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ItemTraversal_1 = require("../Enumerations/ItemTraversal");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ViewBase_1 = require("./ViewBase");
/**
 * Represents a date range view of appointments in calendar folder search operations.
 */
var CalendarView = /** @class */ (function (_super) {
    __extends(CalendarView, _super);
    function CalendarView(startDate, endDate, maxItemsReturned) {
        if (maxItemsReturned === void 0) { maxItemsReturned = null; }
        var _this = _super.call(this) || this;
        _this.traversal = ItemTraversal_1.ItemTraversal.Shallow;
        _this.maxItemsReturned = null;
        _this.startDate = null;
        _this.endDate = null;
        _this.startDate = startDate;
        _this.endDate = endDate;
        _this.MaxItemsReturned = maxItemsReturned;
        return _this;
    }
    Object.defineProperty(CalendarView.prototype, "StartDate", {
        /**
         * Gets or sets the start date.
         */
        get: function () {
            return this.startDate;
        },
        set: function (value) {
            this.startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "EndDate", {
        /**
         * Gets or sets the end date.
         */
        get: function () {
            return this.endDate;
        },
        set: function (value) {
            this.endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "MaxItemsReturned", {
        /**
         * The maximum number of items the search operation should return.
         */
        get: function () {
            return this.maxItemsReturned;
        },
        set: function (value) {
            if (value !== null && value <= 0) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ValueMustBeGreaterThanZero);
            }
            this.maxItemsReturned = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarView.prototype, "Traversal", {
        /**
         * Gets or sets the search traversal mode. Defaults to ItemTraversal.Shallow.
         */
        get: function () {
            return this.traversal;
        },
        set: function (value) {
            this.traversal = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number}      The maximum number of items the search operation should return.
     */
    CalendarView.prototype.GetMaxEntriesReturned = function () { return this.MaxItemsReturned; };
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    CalendarView.prototype.GetServiceObjectType = function () { return ServiceObjectType_1.ServiceObjectType.Item; };
    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {string}      XML element name.
     */
    CalendarView.prototype.GetViewXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CalendarView; };
    /**
     * @internal Validate instance.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    CalendarView.prototype.InternalValidate = function (request) {
        _super.prototype.InternalValidate.call(this, request);
        if (this.endDate < this.StartDate) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.EndDateMustBeGreaterThanStartDate);
        }
    };
    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    CalendarView.prototype.InternalWriteSearchSettingsToXml = function (writer, groupBy) { };
    /**
     * @internal Write to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    CalendarView.prototype.InternalWriteViewToXml = function (writer) {
        _super.prototype.InternalWriteViewToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.StartDate, this.StartDate);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.EndDate, this.EndDate);
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    CalendarView.prototype.WriteAttributesToXml = function (writer) { writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Traversal, ItemTraversal_1.ItemTraversal[this.Traversal]); };
    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer
     */
    CalendarView.prototype.WriteOrderByToXml = function (writer) { };
    return CalendarView;
}(ViewBase_1.ViewBase));
exports.CalendarView = CalendarView;
