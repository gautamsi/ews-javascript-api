import {FolderId} from "../../../ComplexProperties/FolderId";
import {EmailMessage} from "../Items/EmailMessage";
import {CalendarActionResults} from "../../../Misc/CalendarActionResults";
import {ResponseObject} from "./ResponseObject";
export class CalendarResponseMessageBase<TMessage extends EmailMessage> extends ResponseObject<TMessage> {
        Save(destinationFolderId: FolderId): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        //Save(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        //Save(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Save : Not implemented."); }
        Send(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - Send : Not implemented."); }
        SendAndSaveCopy(destinationFolderId: FolderId): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
        //SendAndSaveCopy(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
        //SendAndSaveCopy(): CalendarActionResults { throw new Error("CalendarResponseMessageBase.ts - SendAndSaveCopy : Not implemented."); }
}

