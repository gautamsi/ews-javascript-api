import { AffectedTaskOccurrence } from "../../../Enumerations/AffectedTaskOccurrence";
import { DeleteMode } from "../../../Enumerations/DeleteMode";
import { EwsLogging } from '../../EwsLogging';
import { EwsUtilities } from '../../EwsUtilities';
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { FolderId } from "../../../ComplexProperties/FolderId";
import { InvalidOperationException } from '../../../Exceptions/InvalidOperationException';
import { IPromise } from '../../../Interfaces';
import { Item } from "../Items/Item";
import { ItemId } from './../../../ComplexProperties/ItemId';
import { MessageBody } from "../../../ComplexProperties/MessageBody";
import { MessageDisposition } from "../../../Enumerations/MessageDisposition";
import { PostItem } from "../Items/PostItem";
import { PropertySet } from "../../PropertySet";
import { Schemas } from "../Schemas/Schemas";
import { SendCancellationsMode } from "../../../Enumerations/SendCancellationsMode";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { Strings } from '../../../Strings';
import { WellKnownFolderName } from "../../../Enumerations/WellKnownFolderName";
import { XmlElementNames } from "../../XmlElementNames";

import { ServiceObject } from "../ServiceObject";
/**
 * Represents a reply to a post item.
 * 
 * @sealed
 */
export class PostReply extends ServiceObject {

    private referenceItem: Item = null;

    /**
     * Gets or sets the subject of the post reply.
     */
    get Subject(): string {
        return <string>this.PropertyBag._getItem(Schemas.ItemSchema.Subject);
    }
    set Subject(value: string) {
        this.PropertyBag._setItem(Schemas.ItemSchema.Subject, value);
    }

    /**
     * Gets or sets the body of the post reply.
     */
    get Body(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(Schemas.ItemSchema.Body);
    }
    set Body(value: MessageBody) {
        this.PropertyBag._setItem(Schemas.ItemSchema.Body, value);
    }

    /**
     * Gets or sets the body prefix that should be prepended to the original post item's body.
     */
    get BodyPrefix(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(Schemas.ResponseObjectSchema.BodyPrefix);
    }
    set BodyPrefix(value: MessageBody) {
        this.PropertyBag._setItem(Schemas.ResponseObjectSchema.BodyPrefix, value);
    }

    /**
     * @internal Initializes a new instance of the **PostReply** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem.Service);
        EwsLogging.Assert(
            referenceItem != null,
            "PostReply.ctor",
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
        return Schemas.PostReplySchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.PostReplyItem;
    }

    /**
     * @internal Create a PostItem response.
     *
     * @param   {FolderId}              parentFolderId       The parent folder id.
     * @param   {MessageDisposition}    messageDisposition   The message disposition.
     * @return  {IPromise<PostItem>}    Created PostItem    :Promise.
     */
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<PostItem> {
        (<ItemId>this.PropertyBag._getItem(Schemas.ResponseObjectSchema.ReferenceItemId)).Assign(this.referenceItem.Id);

        return this.Service.InternalCreateResponseObject(
            this,
            parentFolderId,
            messageDisposition).then((items: Item[]) => {

                let postItem: PostItem = EwsUtilities.FindFirstItemOfType<PostItem>(items, PostItem);

                // This should never happen. If it does, we have a bug.
                EwsLogging.Assert(
                    postItem != null,
                    "PostReply.InternalCreate",
                    "postItem is null. The CreateItem call did not return the expected PostItem.");

                return postItem;
            });
    }

    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     * @return  {IPromise<void>}    :Promise.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void> {
        throw new InvalidOperationException(Strings.DeletingThisObjectTypeNotAuthorized);
    }

    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     * @return  {IPromise<void>}    :Promise.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void> {
        throw new InvalidOperationException(Strings.LoadingThisObjectTypeNotSupported);
    }

    /**
     * Saves the post reply in the same folder as the original post item. Calling this method results in a call to EWS.
     *
     * @return  {IPromise<PostItem>}    A PostItem representing the posted reply :Promise.
     */
    Save(): IPromise<PostItem>;
    /**
     * Saves the post reply in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the post reply.
     * @return  {IPromise<PostItem>}    A PostItem representing the posted reply :Promise.
     */
    Save(destinationFolderId: FolderId): IPromise<PostItem>;
    /**
     * Saves the post reply in a specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the post reply.
     * @return  {IPromise<PostItem>}    A PostItem representing the posted reply :Promise.
     */
    Save(destinationFolderName: WellKnownFolderName): IPromise<PostItem>;
    Save(destinationFolderIdOrFolderName: FolderId | WellKnownFolderName = null): IPromise<PostItem> {
        let destinationFolderId: FolderId = <any>destinationFolderIdOrFolderName;
        if (arguments.length > 0) {

            EwsUtilities.ValidateParam(destinationFolderIdOrFolderName, "destinationFolderId");
        }
        if (typeof destinationFolderIdOrFolderName === 'number') {
            destinationFolderId = new FolderId(destinationFolderIdOrFolderName);
        }
        return this.InternalCreate(destinationFolderId, null);
    }
}