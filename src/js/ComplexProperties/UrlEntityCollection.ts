import UrlEntity = require("./UrlEntity");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
    CreateComplexProperty(xmlElementName: string): UrlEntity { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): UrlEntity { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: UrlEntity): string { throw new Error("Not implemented."); }
}
export = UrlEntityCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
