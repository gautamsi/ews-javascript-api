import {EmailMessage} from "../Items/EmailMessage";
import {EmailMessageSchema} from "../Schemas/EmailMessageSchema";
import {EwsLogging} from "../../EwsLogging";
import {ResponseObjectSchema} from "../Schemas/ResponseObjectSchema";
import {Item} from "../Items/Item";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {AffectedTaskOccurrence} from "../../../Enumerations/AffectedTaskOccurrence";
import {PropertySet} from "../../PropertySet";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {IPromise} from "../../../Interfaces";

import {ServiceObject} from "../ServiceObject";
/**
 * Represents the base class for all responses that can be sent.
 */
export class ResponseObject<TMessage extends EmailMessage> extends ServiceObject {
    private referenceItem: Item = null;
    /**
     * Gets or sets a value indicating whether read receipts will be requested from recipients of this response.
     */
    get IsReadReceiptRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(EmailMessageSchema.IsReadReceiptRequested);
    }
    set IsReadReceiptRequested(value: boolean) {
        this.PropertyBag._setItem(EmailMessageSchema.IsReadReceiptRequested, value);
    }
    /**
     * Gets or sets a value indicating whether delivery receipts should be sent to the sender.
     */
    get IsDeliveryReceiptRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(EmailMessageSchema.IsDeliveryReceiptRequested);
    }
    set IsDeliveryReceiptRequested(value: boolean) {
        this.PropertyBag._setItem(EmailMessageSchema.IsDeliveryReceiptRequested, value);
    }
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {[type]}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem.Service);
        EwsLogging.Assert(referenceItem !== null, "ResponseObject.ctor", "referenceItem is null");
        referenceItem.ThrowIfThisIsNew();
        this.referenceItem = referenceItem;
    }
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {[ServiceObjectSchema]}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return ResponseObjectSchema.Instance; }
    /**
    * Create the response object.
    *
    * @param   {[FolderId]}             destinationFolderId   The destination folder id.
    * @param   {[MessageDisposition]}   messageDisposition    The message disposition.
    * @return  {[IPromise<Item[]>]}               The list of items returned by EWS.
    */
    InternalCreate(destinationFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<Item[]> {
        (<ItemId>this.PropertyBag._getItem(ResponseObjectSchema.ReferenceItemId)).Assign(this.referenceItem.Id);

        return this.Service.InternalCreateResponseObject(
            this,
            destinationFolderId,
            messageDisposition);
    }
    /**
     * Deletes the object.
     *
     * @param   {[DeleteMode]}                  deleteMode                The deletion mode.
     * @param   {[SendCancellationsMode]}       sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {[affectedTaskOccurrences]}     affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void> { throw new Error("ResponseObject.ts - InternalDelete : Not Supported Exception."); } //throw new NotSupportedException();
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {[PropertySet]}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void> { throw new Error("ResponseObject.ts - InternalLoad : Not Supported Exception."); } //throw new NotSupportedException();
    
    /**
     * Saves the response in the Drafts folder. Calling this method results in a call to EWS.
     *
     * @return  {[IPromise<TMessage>]}      A TMessage that represents the response.
     */
    Save(): IPromise<TMessage>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {[WellKnownFolderName]}     destinationFolderName   The name of the folder in which to save the response.
     * @return  {[IPromise<TMessage>]}      A TMessage that represents the response.
     */
    Save(destinationFolderName: WellKnownFolderName): IPromise<TMessage>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {[FolderId]}   destinationFolderId   The Id of the folder in which to save the response.
     * @return  {[IPromise<TMessage>]}                         A TMessage that represents the response.
     */
    Save(destinationFolderId: FolderId): IPromise<TMessage>;
    Save(destinationFolderIdOrName?: FolderId | WellKnownFolderName): IPromise<TMessage> {
        var destinationFolderId: FolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId(destinationFolderIdOrName);
            } else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition.SaveOnly).then((result) => {
            return result[0];
        });
    }
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     */
    Send(): IPromise<void> { return <any>this.InternalCreate(null, MessageDisposition.SendOnly); }
    /**
     * Sends this response and saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
     */
    SendAndSaveCopy(): IPromise<void>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {[WellKnownFolderName]}   destinationFolderName   The name of the folder in which to save the copy of the message.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): IPromise<void>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {[FolderId]}   destinationFolderId   The Id of the folder in which to save the copy of the message.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): IPromise<void>;
    SendAndSaveCopy(destinationFolderIdOrName?: FolderId | WellKnownFolderName): IPromise<void> {
        var destinationFolderId: FolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId(destinationFolderIdOrName);
            } else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return <any>this.InternalCreate(destinationFolderId, MessageDisposition.SendAndSaveCopy);
    }
}
