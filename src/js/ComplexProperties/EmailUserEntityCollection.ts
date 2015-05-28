import EmailUserEntity = require("./EmailUserEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
    CreateComplexProperty(xmlElementName: string): EmailUserEntity { throw new Error("EmailUserEntityCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): EmailUserEntity { throw new Error("EmailUserEntityCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string { throw new Error("EmailUserEntityCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = EmailUserEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
