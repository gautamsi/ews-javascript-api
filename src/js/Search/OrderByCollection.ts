import PropertyDefinitionBase = require("../PropertyDefinitions/PropertyDefinitionBase");
import SortDirection = require("../Enumerations/SortDirection");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class OrderByCollection {  //: IEnumerable < PropertyDefinitionSortDirectionPair >, IJsonSerializable
    Count: number;
    Item: /*System.Collections.Generic.KeyValuePair<PropertyDefinitionBase, SortDirection>*/any;
    private propDefSortOrderPairList: /*System.Collections.Generic.List<T>*/any;
    Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): any { throw new Error("Not implemented."); }
    Clear(): any { throw new Error("Not implemented."); }
    Contains(propertyDefinition: PropertyDefinitionBase): boolean { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    Remove(propertyDefinition: PropertyDefinitionBase): boolean { throw new Error("Not implemented."); }
    RemoveAt(index: number): any { throw new Error("Not implemented."); }
    TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: any): boolean { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = OrderByCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
