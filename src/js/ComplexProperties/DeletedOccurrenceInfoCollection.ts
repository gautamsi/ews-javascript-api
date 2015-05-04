import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
    CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): DeletedOccurrenceInfo { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
