import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import XmlElementNames = require("../../XmlElementNames");

import ExchangeService = require("../../ExchangeService");
import Folder = require("./Folder");
class CalendarFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    get _FolderType(): string { return XmlElementNames.CalendarFolder; }
    constructor(service: ExchangeService) {
        super(service);
    }
    ////////Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): CalendarFolder { throw new Error("CalendarFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, id: FolderId): CalendarFolder { throw new Error("CalendarFolder.ts - Bind : Not implemented."); }
    ////////Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): CalendarFolder { throw new Error("CalendarFolder.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, name: WellKnownFolderName): CalendarFolder { throw new Error("CalendarFolder.ts - Bind : Not implemented."); }
    //////FindAppointments<TItem extends Item>(view: CalendarView): FindItemsResults<TItem> { throw new Error("CalendarFolder.ts - FindAppointments<TItem extends Item> : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CalendarFolder.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.CalendarFolder; }
}
export = CalendarFolder;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
