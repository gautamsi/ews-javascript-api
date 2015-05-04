import PhoneEntity = require("./PhoneEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
    CreateComplexProperty(xmlElementName: string): PhoneEntity { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): PhoneEntity { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string { throw new Error("Not implemented."); }
}
export = PhoneEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

