import AddressEntity = require("./AddressEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
    CreateComplexProperty(xmlElementName: string): AddressEntity { throw new Error("AddressEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): AddressEntity { throw new Error("AddressEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: AddressEntity): string { throw new Error("AddressEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = AddressEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
