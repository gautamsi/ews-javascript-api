"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AggregateType_1 = require("../Enumerations/AggregateType");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var SortDirection_1 = require("../Enumerations/SortDirection");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents grouping options in item search operations.
 *
 * @sealed
 */
var Grouping = /** @class */ (function () {
    function Grouping(groupOn, sortDirection, aggregateOn, aggregateType) {
        /**
         * Gets or sets the sort direction.
         */
        this.SortDirection = SortDirection_1.SortDirection.Ascending;
        /**
         * Gets or sets the property to group on.
         */
        this.GroupOn = null;
        /**
         * Gets or sets the property to aggregate on.
         */
        this.AggregateOn = null;
        /**
         * Gets or sets the types of aggregate to calculate.
         */
        this.AggregateType = AggregateType_1.AggregateType.Minimum;
        if (arguments.length > 0 && arguments.length < 4) {
            throw new Error("Grouping.ts - ctor: incorrect number of parameters for constructor call");
        }
        EwsUtilities_1.EwsUtilities.ValidateParam(groupOn, "groupOn");
        EwsUtilities_1.EwsUtilities.ValidateParam(aggregateOn, "aggregateOn");
        this.GroupOn = groupOn;
        this.SortDirection = sortDirection;
        this.AggregateOn = aggregateOn;
        this.AggregateType = aggregateType;
    }
    /**
     * Validates this grouping.
     */
    Grouping.prototype.InternalValidate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.GroupOn, "GroupOn");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.AggregateOn, "AggregateOn");
    };
    /**
     * Implements ISelfValidate.Validate. Validates this grouping.
     */
    Grouping.prototype.Validate = function () {
        this.InternalValidate();
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Grouping.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.GroupBy);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Order, SortDirection_1.SortDirection[this.SortDirection]);
        this.GroupOn.WriteToXml(writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AggregateOn);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Aggregate, AggregateType_1.AggregateType[this.AggregateType]);
        this.AggregateOn.WriteToXml(writer);
        writer.WriteEndElement(); // AggregateOn
        writer.WriteEndElement(); // GroupBy
    };
    return Grouping;
}());
exports.Grouping = Grouping;
