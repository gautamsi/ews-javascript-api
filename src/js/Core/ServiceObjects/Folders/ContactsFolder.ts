import XmlElementNames = require("../../XmlElementNames");
import Folder = require("./Folder");
class ContactsFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    get _FolderType(): string { return XmlElementNames.ContactsFolder; }
    
    ////////Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): ContactsFolder { throw new Error("ContactsFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: FolderId): ContactsFolder { throw new Error("ContactsFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): ContactsFolder { throw new Error("ContactsFolder.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, name: WellKnownFolderName): ContactsFolder { throw new Error("ContactsFolder.ts - Bind : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ContactsFolder.ts - GetMinimumRequiredServerVersion : Not implemented."); }
}

export = ContactsFolder;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
