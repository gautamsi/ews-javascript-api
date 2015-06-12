import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class MailboxStatisticsItem {
    MailboxId: string;
    DisplayName: string;
    ItemCount: number;
    Size: number;
    LoadFromXml(reader: EwsServiceXmlReader): MailboxStatisticsItem { throw new Error("MailboxStatisticsItem.ts - LoadFromXml : Not implemented."); }
}


//}






