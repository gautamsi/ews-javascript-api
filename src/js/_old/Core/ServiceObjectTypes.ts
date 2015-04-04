module Microsoft.Exchange.WebServices.Data {




    export class PostReply extends ServiceObject {
        Subject: string;
        Body: MessageBody;
        BodyPrefix: MessageBody;
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): PostItem { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
        //Save(): PostItem { throw new Error("Not implemented."); }
        //Save(destinationFolderId: FolderId): PostItem { throw new Error("Not implemented."); }
        Save(destinationFolderName: WellKnownFolderName): PostItem { throw new Error("Not implemented."); }
    }
    export class RemoveFromCalendar extends ServiceObject {
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Item[]/*System.Collections.Generic.List<Item>*/ { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    }
    export class SuppressReadReceipt extends ServiceObject {
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    }

    export class ResponseObject<TMessage> extends ServiceObject {
        IsReadReceiptRequested: boolean;
        IsDeliveryReceiptRequested: boolean;
        private referenceItem: Item;
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(destinationFolderId: FolderId, messageDisposition: MessageDisposition): System.Collections.Generic.List<Item> { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
        Save(destinationFolderId: FolderId): TMessage { throw new Error("Not implemented."); }
        Save(destinationFolderName: WellKnownFolderName): TMessage { throw new Error("Not implemented."); }
        Save(): TMessage { throw new Error("Not implemented."); }
        Send(): any { throw new Error("Not implemented."); }
        SendAndSaveCopy(destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
        SendAndSaveCopy(destinationFolderName: WellKnownFolderName): any { throw new Error("Not implemented."); }
        SendAndSaveCopy(): any { throw new Error("Not implemented."); }
    }

    export class ResponseMessage extends ResponseObject<EmailMessage> {
        ResponseType: ResponseMessageType;
        Body: MessageBody;
        ToRecipients: EmailAddressCollection;
        CcRecipients: EmailAddressCollection;
        BccRecipients: EmailAddressCollection;
        Subject: string;
        BodyPrefix: MessageBody;
        private responseType: ResponseMessageType;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        GetXmlElementNameOverride(): string { throw new Error("Not implemented."); }
    }

    export class CalendarResponseMessageBase<TMessage> extends ResponseObject<TMessage> {
        Save(destinationFolderId: FolderId): CalendarActionResults { throw new Error("Not implemented."); }
        //Save(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("Not implemented."); }
        //Save(): CalendarActionResults { throw new Error("Not implemented."); }
        Send(): CalendarActionResults { throw new Error("Not implemented."); }
        SendAndSaveCopy(destinationFolderId: FolderId): CalendarActionResults { throw new Error("Not implemented."); }
        //SendAndSaveCopy(destinationFolderName: WellKnownFolderName): CalendarActionResults { throw new Error("Not implemented."); }
        //SendAndSaveCopy(): CalendarActionResults { throw new Error("Not implemented."); }
    }

    export class CalendarResponseMessage<TMessage> extends CalendarResponseMessageBase<TMessage> {
        Body: MessageBody;
        ToRecipients: EmailAddressCollection;
        CcRecipients: EmailAddressCollection;
        BccRecipients: EmailAddressCollection;
        ItemClass: string;
        Sensitivity: Sensitivity;
        Attachments: AttachmentCollection;
        InternetMessageHeaders: InternetMessageHeaderCollection;
        Sender: EmailAddress;
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    }
    export class CancelMeetingMessage extends CalendarResponseMessageBase<MeetingCancellation> {
        Body: MessageBody;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    }
    export class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
        Tentative: boolean;
        private tentative: boolean;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetXmlElementNameOverride(): string { throw new Error("Not implemented."); }
    }
    export class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    }





}

import _export = Microsoft.Exchange.WebServices.Data;
export = _export;