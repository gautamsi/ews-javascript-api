//    public enum ItemIndexError
//    {
//        /// <summary>
//        /// None
//        /// </summary>
//        None,

//        /// <summary>
//        /// Generic error
//        /// </summary>
//        GenericError,

//        /// <summary>
//        /// Timeout
//        /// </summary>
//        Timeout,

//        /// <summary>
//        /// Stale event
//        /// </summary>
//        StaleEvent,

//        /// <summary>
//        /// Mailbox offline
//        /// </summary>
//        MailboxOffline,

//        /// <summary>
//        /// Too many attachments to index
//        /// </summary>
//        AttachmentLimitReached,

//        /// <summary>
//        /// Data is truncated
//        /// </summary>
//        MarsWriterTruncation,
//}


    class NonIndexableItem {
        ItemId: ItemId;
        ErrorCode: ItemIndexError;
        ErrorDescription: string;
        IsPartiallyIndexed: boolean;
        IsPermanentFailure: boolean;
        AttemptCount: number;
        LastAttemptTime: Date;
        AdditionalInfo: string;
        SortValue: string;
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItem { throw new Error("Not implemented."); }
    }
    export = NonIndexableItem;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
