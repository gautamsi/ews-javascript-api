import PropertyDefinitionBase = require("../PropertyDefinitions/PropertyDefinitionBase");
import SortDirection = require("../Enumerations/SortDirection");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class OrderByCollection {  //: IEnumerable < PropertyDefinitionSortDirectionPair >, IJsonSerializable
    Count: number;
    Item: /*System.Collections.Generic.KeyValuePair<PropertyDefinitionBase, SortDirection>*/any;
    private propDefSortOrderPairList: /*System.Collections.Generic.List<T>*/any;
    Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): any { throw new Error("OrderByCollection.ts - Add : Not implemented."); }
    Clear(): any { throw new Error("OrderByCollection.ts - Clear : Not implemented."); }
    Contains(propertyDefinition: PropertyDefinitionBase): boolean { throw new Error("OrderByCollection.ts - Contains : Not implemented."); }
    GetEnumerator(): any { throw new Error("OrderByCollection.ts - GetEnumerator : Not implemented."); }
    Remove(propertyDefinition: PropertyDefinitionBase): boolean { throw new Error("OrderByCollection.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("OrderByCollection.ts - RemoveAt : Not implemented."); }
    TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: any): boolean { throw new Error("OrderByCollection.ts - TryGetValue : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("OrderByCollection.ts - WriteToXml : Not implemented."); }
}
export = OrderByCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
