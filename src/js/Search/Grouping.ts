import SortDirection = require("../Enumerations/SortDirection");
import PropertyDefinitionBase = require("../PropertyDefinitions/PropertyDefinitionBase");
import AggregateType = require("../Enumerations/AggregateType");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class Grouping { //: ISelfValidate, IJsonSerializable
    SortDirection: SortDirection;
    GroupOn: PropertyDefinitionBase;
    AggregateOn: PropertyDefinitionBase;
    AggregateType: AggregateType;
    private sortDirection: SortDirection;
    private groupOn: PropertyDefinitionBase;
    private aggregateOn: PropertyDefinitionBase;
    private aggregateType: AggregateType;
    InternalValidate(): any { throw new Error("Grouping.ts - InternalValidate : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Grouping.ts - WriteToXml : Not implemented."); }
}
export = Grouping;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
