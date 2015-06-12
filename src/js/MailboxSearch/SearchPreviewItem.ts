import {ItemId} from "../ComplexProperties/ItemId";
import {PreviewItemMailbox} from "./PreviewItemMailbox";
import {Importance} from "../Enumerations/Importance";
import {ExtendedPropertyCollection} from "../ComplexProperties/ExtendedPropertyCollection";
export class SearchPreviewItem {
    Id: ItemId;
    Mailbox: PreviewItemMailbox;
    ParentId: ItemId;
    ItemClass: string;
    UniqueHash: string;
    SortValue: string;
    OwaLink: string;
    Sender: string;
    ToRecipients: string[];
    CcRecipients: string[];
    BccRecipients: string[];
    CreatedTime: Date;
    ReceivedTime: Date;
    SentTime: Date;
    Subject: string;
    Size: number;
    Preview: string;
    Importance: Importance;
    Read: boolean;
    HasAttachment: boolean;
    ExtendedProperties: ExtendedPropertyCollection;
}


//}



