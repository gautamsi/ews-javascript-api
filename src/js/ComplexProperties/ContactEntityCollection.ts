import ComplexPropertyCollection = require("./ComplexPropertyCollection");

    class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
        CreateComplexProperty(xmlElementName: string): ContactEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): ContactEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: ContactEntity): string { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
