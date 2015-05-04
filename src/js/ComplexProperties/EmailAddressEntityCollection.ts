import EmailAddressEntity = require("./EmailAddressEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
    CreateComplexProperty(xmlElementName: string): EmailAddressEntity { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): EmailAddressEntity { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string { throw new Error("Not implemented."); }
}
export = EmailAddressEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
