import { AffectedTaskOccurrence } from "../../../Enumerations/AffectedTaskOccurrence";
import { DeleteMode } from "../../../Enumerations/DeleteMode";
import { EwsLogging } from "../../EwsLogging";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { IPromise } from "../../../Interfaces";
import { Item } from "../Items/Item";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { MessageDisposition } from "../../../Enumerations/MessageDisposition";
import { NotSupportedException } from "../../../Exceptions/NotSupportedException";
import { PropertySet } from "../../PropertySet";
import { Schemas } from "../Schemas/Schemas";
import { SendCancellationsMode } from "../../../Enumerations/SendCancellationsMode";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { XmlElementNames } from "../../XmlElementNames";

import { ServiceObject } from "../ServiceObject";
/**
 * Represents a response object created to supress read receipts for an item.
 *
 */
export class SuppressReadReceipt extends ServiceObject {
    private referenceItem: Item = null;
    /**
     * Initializes a new instance of the **SuppressReadReceipt** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem.Service);
        EwsLogging.Assert(referenceItem !== null, "SuppressReadReceipt.ctor", "referenceItem is null");
        referenceItem.ThrowIfThisIsNew();
        this.referenceItem = referenceItem;
    }
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return Schemas.ResponseObjectSchema.Instance; }
    GetXmlElementName(): string { return XmlElementNames.SuppressReadReceipt; }
    /**
     * Create the response object.
     *
     * @param   {FolderId}            parentFolderId       The parent folder id.
     * @param   {MessageDisposition}  messageDisposition   The message disposition.
     */
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<void> {
        (<ItemId>this.PropertyBag._getItem(Schemas.ResponseObjectSchema.ReferenceItemId)).Assign(this.referenceItem.Id);

        return <any>this.Service.InternalCreateResponseObject(
            this,
            parentFolderId,
            messageDisposition);
    }
    /**
     * Deletes the object.
     *
     * @param   {DeleteMode}              deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}  affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void> {
        throw new NotSupportedException();
    }
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void> {
        throw new NotSupportedException();
    }
}
