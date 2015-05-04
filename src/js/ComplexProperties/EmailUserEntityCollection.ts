import EmailUserEntity = require("./EmailUserEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
    CreateComplexProperty(xmlElementName: string): EmailUserEntity { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): EmailUserEntity { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string { throw new Error("Not implemented."); }
}
export = EmailUserEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
