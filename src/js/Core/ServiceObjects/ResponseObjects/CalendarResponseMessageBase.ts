   class CalendarResponseMessageBase<TMessage> extends ResponseObject<TMessage> {
        Save(destinationFolderId: FolderId): CalendarActionResults { throw new Error("Not implemented."); }
        //Save(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("Not implemented."); }
        //Save(): CalendarActionResults { throw new Error("Not implemented."); }
        Send(): CalendarActionResults { throw new Error("Not implemented."); }
        SendAndSaveCopy(destinationFolderId: FolderId): CalendarActionResults { throw new Error("Not implemented."); }
        //SendAndSaveCopy(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("Not implemented."); }
        //SendAndSaveCopy(): CalendarActionResults { throw new Error("Not implemented."); }
}


export = CalendarResponseMessageBase;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


