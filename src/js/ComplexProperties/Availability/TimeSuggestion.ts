import ComplexProperty = require("../ComplexProperty");
import SuggestionQuality = require("../../Enumerations/SuggestionQuality");
import Conflict = require("./Conflict");
import JsonObject = require("../../Core/JsonObject");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
class TimeSuggestion extends ComplexProperty {
    MeetingTime: Date;
    IsWorkTime: boolean;
    Quality: SuggestionQuality;
    Conflicts: Conflict[];// System.Collections.ObjectModel.Collection<Conflict>;
    private meetingTime: Date;
    private isWorkTime: boolean;
    private quality: SuggestionQuality;
    private conflicts: Conflict[];// System.Collections.ObjectModel.Collection<Conflict>;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeSuggestion.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TimeSuggestion.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = TimeSuggestion;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
