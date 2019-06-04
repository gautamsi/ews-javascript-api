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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ItemTraversal_1 = require("../Enumerations/ItemTraversal");
var OffsetBasePoint_1 = require("../Enumerations/OffsetBasePoint");
var OrderByCollection_1 = require("./OrderByCollection");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var PagedView_1 = require("./PagedView");
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
var ItemView = /** @class */ (function (_super) {
    __extends(ItemView, _super);
    function ItemView(pageSize, offset, offsetBasePoint) {
        if (offset === void 0) { offset = 0; }
        if (offsetBasePoint === void 0) { offsetBasePoint = OffsetBasePoint_1.OffsetBasePoint.Beginning; }
        var _this = _super.call(this, pageSize, offset, offsetBasePoint) || this;
        _this.traversal = ItemTraversal_1.ItemTraversal.Shallow;
        _this.orderBy = new OrderByCollection_1.OrderByCollection();
        return _this;
    }
    Object.defineProperty(ItemView.prototype, "Traversal", {
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
    Object.defineProperty(ItemView.prototype, "OrderBy", {
        /**
         * Gets the properties against which the returned items should be ordered.
         */
        get: function () { return this.orderBy; },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    ItemView.prototype.GetServiceObjectType = function () { return ServiceObjectType_1.ServiceObjectType.Item; };
    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {type}      XML element name.
     */
    ItemView.prototype.GetViewXmlElementName = function () { return XmlElementNames_1.XmlElementNames.IndexedPageItemView; };
    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    ItemView.prototype.InternalValidate = function (request) {
        _super.prototype.InternalValidate.call(this, request);
        EwsUtilities_1.EwsUtilities.ValidateEnumVersionValue(ItemTraversal_1.ItemTraversal, this.Traversal, request.Service.RequestedServerVersion, "ItemTraversal");
    };
    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    ItemView.prototype.InternalWriteSearchSettingsToXml = function (writer, groupBy) {
        _super.prototype.InternalWriteSearchSettingsToXml.call(this, writer, groupBy);
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ItemView.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Traversal, ItemTraversal_1.ItemTraversal[this.Traversal]);
    };
    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ItemView.prototype.WriteOrderByToXml = function (writer) {
        this.orderBy.WriteToXml(writer, XmlElementNames_1.XmlElementNames.SortOrder);
    };
    return ItemView;
}(PagedView_1.PagedView));
exports.ItemView = ItemView;
