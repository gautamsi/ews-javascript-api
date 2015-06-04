import XmlElementNames = require("../../XmlElementNames");
import Folder = require("./Folder");
class SearchFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    get _FolderType(): string { return XmlElementNames.SearchFolder; }
    
    //////SearchParameters: SearchFolderParameters;
    ////////Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): SearchFolder { throw new Error("SearchFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: FolderId): SearchFolder { throw new Error("SearchFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): SearchFolder { throw new Error("SearchFolder.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, name: WellKnownFolderName): SearchFolder { throw new Error("SearchFolder.ts - Bind : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SearchFolder.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("SearchFolder.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.SearchFolder; }
    //////Validate(): any { throw new Error("SearchFolder.ts - Validate : Not implemented."); }
}
export = SearchFolder;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
