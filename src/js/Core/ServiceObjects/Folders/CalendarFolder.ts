import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");

import ExchangeService = require("../../ExchangeService");
import Folder = require("./Folder");
class CalendarFolder extends Folder {
    constructor(service:ExchangeService){
        super(service);
    }
    ////////Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): CalendarFolder { throw new Error("Not implemented."); }
    ////////Bind(service: ExchangeService, id: FolderId): CalendarFolder { throw new Error("Not implemented."); }
    ////////Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): CalendarFolder { throw new Error("Not implemented."); }
    //////Bind(service: ExchangeService, name: WellKnownFolderName): CalendarFolder { throw new Error("Not implemented."); }
    //////FindAppointments<TItem extends Item>(view: CalendarView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
}
 export = CalendarFolder;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export