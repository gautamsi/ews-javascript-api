import {AffectedTaskOccurrence} from "../../../Enumerations/AffectedTaskOccurrence";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {EwsLogging} from "../../EwsLogging";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {IPromise} from "../../../Interfaces";
import {Item} from "../Items/Item";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {NotSupportedException} from "../../../Exceptions/NotSupportedException"
import {PropertySet} from "../../PropertySet";
import {Schemas} from "../Schemas/Schemas";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {XmlElementNames} from "../../XmlElementNames";

import {ServiceObject} from "../ServiceObject";
/**
 * @internal Represents a response object created to remove a calendar item from a meeting cancellation.
 * 
 * @sealed
 */
export class RemoveFromCalendar extends ServiceObject {

    private referenceItem: Item;

    /**
     * Initializes a new instance of the **RemoveFromCalendar** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem.Service);
        EwsLogging.Assert(
            referenceItem != null,
            "RemoveFromCalendar.ctor",
            "referenceItem is null");

        referenceItem.ThrowIfThisIsNew();

        this.referenceItem = referenceItem;
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2007_SP1;
    }

    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema {
        return Schemas.ResponseObjectSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.RemoveItem;
    }

    /**
     * @internal Create response object.
     *
     * @param   {FolderId}              parentFolderId       The parent folder id.
     * @param   {MessageDisposition}    messageDisposition   The message disposition.
     * @return  {Item[]}                A list of items that were created or modified as a results of this operation.
     */
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<Item[]>/*System.Collections.Generic.List<Item>*/ {
        (<ItemId>this.PropertyBag._getItem(Schemas.ResponseObjectSchema.ReferenceItemId)).Assign(this.referenceItem.Id);

        return this.Service.InternalCreateResponseObject(
            this,
            parentFolderId,
            messageDisposition);
    }

    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     * @return  {IPromise<void>}            :Promise.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void> {
        throw new NotSupportedException();
    }

    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     * @return  {IPromise<void>}              :Promise.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void> {
        throw new NotSupportedException();
    }
}