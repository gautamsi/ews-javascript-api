import {NonIndexableItem} from "./NonIndexableItem";
import {FailedSearchMailbox} from "./FailedSearchMailbox";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class NonIndexableItemDetailsResult {
    Items: NonIndexableItem[];
    FailedMailboxes: FailedSearchMailbox[];
    LoadFromJson(jsonObject: JsonObject): NonIndexableItemDetailsResult { throw new Error("NonIndexableItemDetailsResult.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemDetailsResult { throw new Error("NonIndexableItemDetailsResult.ts - LoadFromXml : Not implemented."); }
}


//}



