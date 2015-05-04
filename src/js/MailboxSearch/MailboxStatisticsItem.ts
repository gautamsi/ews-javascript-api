import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class MailboxStatisticsItem {
    MailboxId: string;
    DisplayName: string;
    ItemCount: number;
    Size: number;
    LoadFromXml(reader: EwsServiceXmlReader): MailboxStatisticsItem { throw new Error("Not implemented."); }
}
export = MailboxStatisticsItem;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;



