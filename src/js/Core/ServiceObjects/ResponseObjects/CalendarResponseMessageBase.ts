import ResponseObject = require("./ResponseObject");
import FolderId = require("../../../ComplexProperties/FolderId");
import CalendarActionResults = require("../../../Misc/CalendarActionResults");
   class CalendarResponseMessageBase<TMessage> extends ResponseObject<TMessage> {
        Save(destinationFolderId: FolderId): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        //Save(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        //Save(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        Send(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Send : Not implemented."); }
        SendAndSaveCopy(destinationFolderId: FolderId): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
        //SendAndSaveCopy(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
        //SendAndSaveCopy(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
}


export = CalendarResponseMessageBase;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


