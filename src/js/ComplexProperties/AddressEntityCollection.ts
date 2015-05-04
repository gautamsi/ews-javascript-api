import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
    CreateComplexProperty(xmlElementName: string): AddressEntity { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): AddressEntity { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: AddressEntity): string { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
