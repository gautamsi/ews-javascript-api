import ContactPhoneEntity = require("./ContactPhoneEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
    CreateComplexProperty(xmlElementName: string): ContactPhoneEntity { throw new Error("ContactPhoneEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ContactPhoneEntity { throw new Error("ContactPhoneEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ContactPhoneEntity): string { throw new Error("ContactPhoneEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = ContactPhoneEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
