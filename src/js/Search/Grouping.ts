import { AggregateType } from "../Enumerations/AggregateType";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ISelfValidate } from "../Interfaces/ISelfValidate";
import { PropertyDefinitionBase } from "../PropertyDefinitions/PropertyDefinitionBase";
import { SortDirection } from "../Enumerations/SortDirection";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * Represents grouping options in item search operations.
 * 
 * @sealed
 */
export class Grouping implements ISelfValidate { //:IJsonSerializable

    /**
     * Gets or sets the sort direction.
     */
    SortDirection: SortDirection = SortDirection.Ascending;

    /**
     * Gets or sets the property to group on.
     */
    GroupOn: PropertyDefinitionBase = null;

    /**
     * Gets or sets the property to aggregate on.
     */
    AggregateOn: PropertyDefinitionBase = null;

    /**
     * Gets or sets the types of aggregate to calculate.
     */
    AggregateType: AggregateType = AggregateType.Minimum;

    /** no need for setter getter */
    // private sortDirection: SortDirection = SortDirection.Ascending;
    // private groupOn: PropertyDefinitionBase;
    // private aggregateOn: PropertyDefinitionBase;
    // private aggregateType: AggregateType;

    /**
     * Initializes a new instance of the **Grouping** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Grouping** class.
     *
     * @param   {PropertyDefinitionBase}   groupOn         The property to group on.
     * @param   {SortDirection}   sortDirection   The sort direction.
     * @param   {PropertyDefinitionBase}   aggregateOn     The property to aggregate on.
     * @param   {AggregateType}   aggregateType   The type of aggregate to calculate.
     */
    constructor(groupOn: PropertyDefinitionBase, sortDirection: SortDirection, aggregateOn: PropertyDefinitionBase, aggregateType: AggregateType);
    constructor(
        groupOn?: PropertyDefinitionBase,
        sortDirection?: SortDirection,
        aggregateOn?: PropertyDefinitionBase,
        aggregateType?: AggregateType) {
        if (arguments.length > 0 && arguments.length < 4) {
            throw new Error("Grouping.ts - ctor: incorrect number of parameters for constructor call");
        }
        EwsUtilities.ValidateParam(groupOn, "groupOn");
        EwsUtilities.ValidateParam(aggregateOn, "aggregateOn");

        this.GroupOn = groupOn;
        this.SortDirection = sortDirection;
        this.AggregateOn = aggregateOn;
        this.AggregateType = aggregateType;
    }

    /**
     * Validates this grouping.
     */
    private InternalValidate(): void {
        EwsUtilities.ValidateParam(this.GroupOn, "GroupOn");
        EwsUtilities.ValidateParam(this.AggregateOn, "AggregateOn");
    }

    /**
     * Implements ISelfValidate.Validate. Validates this grouping.
     */
    Validate(): void {
        this.InternalValidate();
    }
    
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.GroupBy);
        writer.WriteAttributeValue(XmlAttributeNames.Order, SortDirection[this.SortDirection]);

        this.GroupOn.WriteToXml(writer);

        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AggregateOn);
        writer.WriteAttributeValue(XmlAttributeNames.Aggregate, AggregateType[this.AggregateType]);

        this.AggregateOn.WriteToXml(writer);

        writer.WriteEndElement(); // AggregateOn

        writer.WriteEndElement(); // GroupBy
    }
}