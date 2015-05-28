import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import HoldAction = require("../../Enumerations/HoldAction");
import SetHoldOnMailboxesResponse = require("../Responses/SetHoldOnMailboxesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
    ActionType: HoldAction;
    HoldId: string;
    Query: string;
    Mailboxes: string[];
    Language: string;
    InPlaceHoldIdentity: string;
    ItemHoldPeriod: string;
    Execute(): SetHoldOnMailboxesResponse { throw new Error("SetHoldOnMailboxesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SetHoldOnMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SetHoldOnMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SetHoldOnMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("SetHoldOnMailboxesRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("SetHoldOnMailboxesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetHoldOnMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = SetHoldOnMailboxesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
