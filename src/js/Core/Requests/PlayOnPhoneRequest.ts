import ItemId = require("../../ComplexProperties/ItemId");
import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import PlayOnPhoneResponse = require("../Responses/PlayOnPhoneResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
 class PlayOnPhoneRequest extends SimpleServiceRequestBase {//IJsonSerializable
    ItemId: ItemId;
    DialString: string;
    private itemId: ItemId;
    private dialString: string;
    Execute(): PlayOnPhoneResponse { throw new Error("PlayOnPhoneRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("PlayOnPhoneRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("PlayOnPhoneRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("PlayOnPhoneRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("PlayOnPhoneRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = PlayOnPhoneRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
