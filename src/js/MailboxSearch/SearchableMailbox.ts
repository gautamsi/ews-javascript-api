import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class SearchableMailbox {
    Guid: any;//System.Guid;
    SmtpAddress: string;
    IsExternalMailbox: boolean;
    ExternalEmailAddress: string;
    DisplayName: string;
    IsMembershipGroup: boolean;
    ReferenceId: string;
    LoadFromJson(jsonObject: JsonObject): SearchableMailbox { throw new Error("SearchableMailbox.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): SearchableMailbox { throw new Error("SearchableMailbox.ts - LoadFromXml : Not implemented."); }
}


//}



