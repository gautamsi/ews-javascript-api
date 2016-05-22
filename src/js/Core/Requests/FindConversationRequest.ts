import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {IPromise} from "../../Interfaces";
import {ViewBase} from "../../Search/ViewBase";
import {FolderIdWrapper} from "../../Misc/FolderIdWrapper";
import {MailboxSearchLocation} from "../../Enumerations/MailboxSearchLocation";
import {FindConversationResponse} from "../Responses/FindConversationResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class FindConversationRequest extends SimpleServiceRequestBase {//IJsonSerializable
    View: ViewBase;
    FolderId: FolderIdWrapper;
    QueryString: string;
    ReturnHighlightTerms: boolean;
    MailboxScope: MailboxSearchLocation;
    private view: ViewBase;
    private folderId: FolderIdWrapper;
    private queryString: string;
    private returnHighlightTerms: boolean;
    private mailboxScope: MailboxSearchLocation;
    Execute(): IPromise<FindConversationResponse> { throw new Error("FindConversationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("FindConversationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("FindConversationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("FindConversationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("FindConversationRequest.ts - ParseResponse : Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("FindConversationRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("FindConversationRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("FindConversationRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("FindConversationRequest.ts - WriteElementsToXml : Not implemented."); }
}