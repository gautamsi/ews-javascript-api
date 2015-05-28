import ComplexProperty = require("./ComplexProperty");
import SendPrompt = require("../Enumerations/SendPrompt");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class VotingOptionData extends ComplexProperty {
    DisplayName: string;
    SendPrompt: SendPrompt;
    private displayName: string;
    private sendPrompt: SendPrompt;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("VotingOptionData.ts - LoadFromJson : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("VotingOptionData.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = VotingOptionData;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
