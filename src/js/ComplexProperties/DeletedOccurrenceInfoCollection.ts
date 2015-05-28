import DeletedOccurrenceInfo = require("./DeletedOccurrenceInfo");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
    CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo { throw new Error("DeletedOccurrenceInfoCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): DeletedOccurrenceInfo { throw new Error("DeletedOccurrenceInfoCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string { throw new Error("DeletedOccurrenceInfoCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export = DeletedOccurrenceInfoCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
