import { DateTime } from "../DateTime";
import { ExtendedPropertyCollection } from "../ComplexProperties/ExtendedPropertyCollection";
import { Importance } from "../Enumerations/Importance";
import { ItemId } from "../ComplexProperties/ItemId";
import { PreviewItemMailbox } from "./PreviewItemMailbox";

/**
 * Represents search preview item.
 * 
 * @sealed
 */
export class SearchPreviewItem {

    /**
     * Item id
     */
    Id: ItemId = null;

    /**
     * Mailbox
     */
    Mailbox: PreviewItemMailbox = null;

    /**
     * Parent item id
     */
    ParentId: ItemId = null;

    /**
     * Item Class
     */
    ItemClass: string = null;

    /**
     * Unique hash
     */
    UniqueHash: string = null;

    /**
     * Sort Value
     */
    SortValue: string = null;

    /**
     * OWA Link
     */
    OwaLink: string = null;

    /**
     * Sender
     */
    Sender: string = null;

    /**
     * To recipients
     */
    ToRecipients: string[] = null;

    /**
     * Cc recipients
     */
    CcRecipients: string[] = null;

    /**
     * Bcc recipients
     */
    BccRecipients: string[] = null;

    /**
     * Created Time
     */
    CreatedTime: DateTime = null;

    /**
     * Received Time 
     */
    ReceivedTime: DateTime = null;

    /**
     * Sent Time
     */
    SentTime: DateTime = null;

    /**
     * Subject
     */
    Subject: string = null;

    /**
     * Item size
     */
    Size: number = 0;

    /**
     * Preview
     */
    Preview: string = null;

    /**
     * Importance
     */
    Importance: Importance = Importance.Low;

    /**
     * Read
     */
    Read: boolean = false;

    /**
     * Has attachment
     */
    HasAttachment: boolean = false;

    /**
     * Extended properties
     */
    ExtendedProperties: ExtendedPropertyCollection = null;
}