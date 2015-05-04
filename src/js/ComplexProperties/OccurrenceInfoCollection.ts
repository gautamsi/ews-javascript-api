import OccurrenceInfo = require("./OccurrenceInfo");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {
    CreateComplexProperty(xmlElementName: string): OccurrenceInfo { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): OccurrenceInfo { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: OccurrenceInfo): string { throw new Error("Not implemented."); }
}
export = OccurrenceInfoCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

