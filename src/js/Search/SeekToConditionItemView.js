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
var OffsetBasePoint_1 = require("../Enumerations/OffsetBasePoint");
var OrderByCollection_1 = require("./OrderByCollection");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ViewBase_1 = require("./ViewBase");
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
var SeekToConditionItemView = /** @class */ (function (_super) {
    __extends(SeekToConditionItemView, _super);
    function SeekToConditionItemView(condition, pageSize, offsetBasePoint) {
        if (offsetBasePoint === void 0) { offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning; }
        var _this = _super.call(this) || this;
        _this.pageSize = null;
        _this.traversal = ItemTraversal_1.ItemTraversal.Shallow;
        _this.condition = null;
        _this.offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning;
        _this.orderBy = new OrderByCollection_1.OrderByCollection();
        _this.serviceObjType = ServiceObjectType_1.ServiceObjectType.Folder;
        _this.condition = condition;
        _this.pageSize = pageSize;
        _this.serviceObjType = ServiceObjectType_1.ServiceObjectType.Item;
        _this.offsetBasePoint = offsetBasePoint;
        return _this;
    }
    Object.defineProperty(SeekToConditionItemView.prototype, "PageSize", {
        /**
         * The maximum number of items or folders the search operation should return.
         */
        get: function () {
            return this.pageSize;
        },
        set: function (value) {
            if (value <= 0) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ValueMustBeGreaterThanZero);
            }
            this.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeekToConditionItemView.prototype, "OffsetBasePoint", {
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
    Object.defineProperty(SeekToConditionItemView.prototype, "Condition", {
        /**
         * Gets or sets the condition for seek.
         * Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
         * If SearchFilter is null, no search filters are applied.
         */
        get: function () {
            return this.condition;
        },
        set: function (value) {
            if (value === null) {
                throw new ArgumentException_1.ArgumentNullException("Condition");
            }
            this.condition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeekToConditionItemView.prototype, "Traversal", {
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
    Object.defineProperty(SeekToConditionItemView.prototype, "OrderBy", {
        /**
         * Gets the properties against which the returned items should be ordered.
         */
        get: function () {
            return this.orderBy;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number?}      The maximum number of items or folders that should be returned by the search operation.
     */
    SeekToConditionItemView.prototype.GetMaxEntriesReturned = function () {
        return this.PageSize;
    };
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    SeekToConditionItemView.prototype.GetServiceObjectType = function () {
        return this.serviceObjType;
    };
    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {string}      XML element name.
     */
    SeekToConditionItemView.prototype.GetViewXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SeekToConditionPageItemView;
    };
    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    SeekToConditionItemView.prototype.InternalValidate = function (request) {
        _super.prototype.InternalValidate.call(this, request);
    };
    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    SeekToConditionItemView.prototype.InternalWriteSearchSettingsToXml = function (writer, groupBy) {
        if (groupBy != null) {
            groupBy.WriteToXml(writer);
        }
    };
    /**
     * @internal Writes this view to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SeekToConditionItemView.prototype.InternalWriteViewToXml = function (writer) {
        _super.prototype.InternalWriteViewToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.BasePoint, this.OffsetBasePoint);
        if (this.Condition != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Condition);
            this.Condition.WriteToXml(writer);
            writer.WriteEndElement(); // Restriction
        }
    };
    /**
     * @internal Sets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      Service object type
     */
    SeekToConditionItemView.prototype.SetServiceObjectType = function (objType) {
        this.serviceObjType = objType;
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SeekToConditionItemView.prototype.WriteAttributesToXml = function (writer) {
        if (this.serviceObjType == ServiceObjectType_1.ServiceObjectType.Item) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Traversal, this.Traversal);
        }
    };
    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SeekToConditionItemView.prototype.WriteOrderByToXml = function (writer) {
        this.orderBy.WriteToXml(writer, XmlElementNames_1.XmlElementNames.SortOrder);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    SeekToConditionItemView.prototype.WriteToXml = function (writer, groupBy) {
        if (this.serviceObjType == ServiceObjectType_1.ServiceObjectType.Item) {
            this.GetPropertySetOrDefault().WriteToXml(writer, this.GetServiceObjectType());
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetViewXmlElementName());
        this.InternalWriteViewToXml(writer);
        writer.WriteEndElement(); // this.GetViewXmlElementName()
    };
    return SeekToConditionItemView;
}(ViewBase_1.ViewBase));
exports.SeekToConditionItemView = SeekToConditionItemView;
