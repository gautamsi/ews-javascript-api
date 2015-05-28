import PhoneEntity = require("./PhoneEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
    CreateComplexProperty(xmlElementName: string): PhoneEntity { throw new Error("PhoneEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): PhoneEntity { throw new Error("PhoneEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string { throw new Error("PhoneEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = PhoneEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

