import FolderIdCollection = require("./FolderIdCollection");
import SearchFilter = require("../Search/Filters/SearchFilter");
import ComplexProperty = require("./ComplexProperty");
import SearchFolderTraversal = require("../Enumerations/SearchFolderTraversal");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class SearchFolderParameters extends ComplexProperty {
    Traversal: SearchFolderTraversal;
    RootFolderIds: FolderIdCollection;
    SearchFilter: SearchFilter;
    private traversal: SearchFolderTraversal;
    private rootFolderIds: FolderIdCollection;
    private searchFilter: SearchFilter;
    InternalToJson(service: ExchangeService): any { throw new Error("SearchFolderParameters.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("SearchFolderParameters.ts - LoadFromJson : Not implemented."); }
    PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("SearchFolderParameters.ts - PropertyChanged : Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("SearchFolderParameters.ts - ReadAttributesFromXml : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("SearchFolderParameters.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    Validate(): any { throw new Error("SearchFolderParameters.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchFolderParameters.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchFolderParameters.ts - WriteElementsToXml : Not implemented."); }
}
export = SearchFolderParameters;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
