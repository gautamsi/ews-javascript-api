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
    Execute(): PlayOnPhoneResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = PlayOnPhoneRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
