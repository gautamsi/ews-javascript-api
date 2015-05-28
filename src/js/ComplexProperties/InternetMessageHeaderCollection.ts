import InternetMessageHeader = require("./InternetMessageHeader");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {
    CreateComplexProperty(xmlElementName: string): InternetMessageHeader { throw new Error("InternetMessageHeaderCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): InternetMessageHeader { throw new Error("InternetMessageHeaderCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    Find(name: string): InternetMessageHeader { throw new Error("InternetMessageHeaderCollection.ts - Find : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: InternetMessageHeader): string { throw new Error("InternetMessageHeaderCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = InternetMessageHeaderCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
