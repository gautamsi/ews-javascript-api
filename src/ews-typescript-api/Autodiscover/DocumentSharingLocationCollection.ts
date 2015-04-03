import EwsXmlReader = require("../Core/EwsXmlReader");
import DocumentSharingLocation = require("./DocumentSharingLocation");

class DocumentSharingLocationCollection {
        Entries: DocumentSharingLocation[];//System.Collections.Generic.List<DocumentSharingLocation>;
        static LoadFromXml(reader: EwsXmlReader): DocumentSharingLocationCollection { throw new Error("Not implemented."); }
    }

export = DocumentSharingLocationCollection;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;