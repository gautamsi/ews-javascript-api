import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import EmailAddress = require("../../ComplexProperties/EmailAddress");
import TeamMailboxLifecycleState = require("../../Enumerations/TeamMailboxLifecycleState");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class SetTeamMailboxRequest extends SimpleServiceRequestBase {
    private emailAddress: EmailAddress;
    private sharePointSiteUrl: string/*System.Uri*/;
    private state: TeamMailboxLifecycleState;
    Execute(): ServiceResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

export = SetTeamMailboxRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
