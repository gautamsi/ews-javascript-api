
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

import ComplexProperty = require("./ComplexProperty");
class ItemCollection<TItem> extends ComplexProperty { // IEnumerable<TItem>, IJsonCollectionDeserializer
    __implements: string[] = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TItem>", "IJsonCollectionDeserializer"];

    Count: number;
    Item: TItem;
    private items: Array<TItem> = [];// System.Collections.Generic.List<T>;
    GetEnumerator(): any { throw new Error("Not implemented."); }//wil be implementedfor ES6 later with yield
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
}
export = ItemCollection;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
