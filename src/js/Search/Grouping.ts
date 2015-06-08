import XmlNamespace = require("../Enumerations/XmlNamespace");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
import SortDirection = require("../Enumerations/SortDirection");
import PropertyDefinitionBase = require("../PropertyDefinitions/PropertyDefinitionBase");
import AggregateType = require("../Enumerations/AggregateType");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class Grouping { //: ISelfValidate, IJsonSerializable
    SortDirection: SortDirection = SortDirection.Ascending;
    GroupOn: PropertyDefinitionBase;
    AggregateOn: PropertyDefinitionBase;
    AggregateType: AggregateType = AggregateType.Minimum;
    /** no need for setter getter */
    // private sortDirection: SortDirection = SortDirection.Ascending;
    // private groupOn: PropertyDefinitionBase;
    // private aggregateOn: PropertyDefinitionBase;
    // private aggregateType: AggregateType;
    
    constructor();
    constructor(groupOn: PropertyDefinitionBase, sortDirection: SortDirection, aggregateOn: PropertyDefinitionBase, aggregateType: AggregateType);
    constructor(
        groupOn?: PropertyDefinitionBase,
        sortDirection?: SortDirection,
        aggregateOn?: PropertyDefinitionBase,
        aggregateType?: AggregateType) {
        if (arguments.length > 0 && arguments.length < 4) {
            throw new Error("Grouping.ts - ctor: incorrect number of parameters for constructor call");
        }       
        //EwsUtilities.ValidateParam(groupOn, "groupOn");
        //EwsUtilities.ValidateParam(aggregateOn, "aggregateOn");

        this.GroupOn = groupOn;
        this.SortDirection = sortDirection;
        this.AggregateOn = aggregateOn;
        this.AggregateType = aggregateType;
    }

    InternalValidate(): void {
        //todo: implement validation
        //EwsUtilities.ValidateParam(this.GroupOn, "GroupOn");
        //EwsUtilities.ValidateParam(this.AggregateOn, "AggregateOn");
    }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.GroupBy);
            writer.WriteAttributeValue(null,XmlAttributeNames.Order, this.SortDirection);

            this.GroupOn.WriteToXml(writer);

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AggregateOn);
            writer.WriteAttributeValue(null,XmlAttributeNames.Aggregate, this.AggregateType);

            this.AggregateOn.WriteToXml(writer);

            writer.WriteEndElement(); // AggregateOn

            writer.WriteEndElement(); // GroupBy
    }
}
export = Grouping;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
