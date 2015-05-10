import VotingOptionData = require("./VotingOptionData");
import ComplexProperty = require("./ComplexProperty");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class VotingInformation extends ComplexProperty {
    UserOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
    VotingResponse: string;
    private userOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
    private votingResponse: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = VotingInformation;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
