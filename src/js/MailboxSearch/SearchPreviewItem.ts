import PreviewItemMailbox = require("./PreviewItemMailbox");
import Importance = require("../Enumerations/Importance");
import ExtendedPropertyCollection = require("../ComplexProperties/ExtendedPropertyCollection");
class SearchPreviewItem {
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
export = SearchPreviewItem;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
