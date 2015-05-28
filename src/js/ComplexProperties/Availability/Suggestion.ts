import ComplexProperty = require("../ComplexProperty");
import SuggestionQuality = require("../../Enumerations/SuggestionQuality");
import TimeSuggestion = require("./TimeSuggestion");
import JsonObject = require("../../Core/JsonObject");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
class Suggestion extends ComplexProperty {
    Date: Date;
    Quality: SuggestionQuality;
    TimeSuggestions: TimeSuggestion[] /*System.Collections.ObjectModel.Collection<TimeSuggestion>*/;
    private date: Date;
    private quality: SuggestionQuality;
    private timeSuggestions: TimeSuggestion[]; /*System.Collections.ObjectModel.Collection<TimeSuggestion>;*/
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Suggestion.ts - LoadFromJson : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Suggestion.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = Suggestion;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
