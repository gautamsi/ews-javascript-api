import {MailboxHoldStatus} from "./MailboxHoldStatus";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class MailboxHoldResult {
    HoldId: string;
    Query: string;
    Statuses: MailboxHoldStatus[];
    LoadFromJson(jsonObject: JsonObject): MailboxHoldResult { throw new Error("MailboxHoldResult.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): MailboxHoldResult { throw new Error("MailboxHoldResult.ts - LoadFromXml : Not implemented."); }
}


//}






