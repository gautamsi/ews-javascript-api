import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import ViewBase = require("../../Search/ViewBase");
import FolderIdWrapper = require("../../Misc/FolderIdWrapper");
import MailboxSearchLocation = require("../../Enumerations/MailboxSearchLocation");
import FindConversationResponse = require("../Responses/FindConversationResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class FindConversationRequest extends SimpleServiceRequestBase {//IJsonSerializable
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
    Execute(): FindConversationResponse { throw new Error("FindConversationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("FindConversationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("FindConversationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("FindConversationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("FindConversationRequest.ts - ParseResponse : Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("FindConversationRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("FindConversationRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("FindConversationRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("FindConversationRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = FindConversationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
