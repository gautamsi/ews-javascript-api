import {ResponseObject} from "./ResponseObject";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {CalendarActionResults} from "../../../Misc/CalendarActionResults";
export class CalendarResponseMessageBase<TMessage> extends ResponseObject<TMessage> {
        Save(destinationFolderId: FolderId): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        //Save(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        //Save(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        Send(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Send : Not implemented."); }
        SendAndSaveCopy(destinationFolderId: FolderId): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
        //SendAndSaveCopy(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
        //SendAndSaveCopy(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
}

