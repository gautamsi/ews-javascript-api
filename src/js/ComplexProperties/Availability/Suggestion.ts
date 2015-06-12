import {ComplexProperty} from "../ComplexProperty";
import {SuggestionQuality} from "../../Enumerations/SuggestionQuality";
import {TimeSuggestion} from "./TimeSuggestion";
import {JsonObject} from "../../Core/JsonObject";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class Suggestion extends ComplexProperty {
    Date: Date;
    Quality: SuggestionQuality;
    TimeSuggestions: TimeSuggestion[] /*System.Collections.ObjectModel.Collection<TimeSuggestion>*/;
    private date: Date;
    private quality: SuggestionQuality;
    private timeSuggestions: TimeSuggestion[]; /*System.Collections.ObjectModel.Collection<TimeSuggestion>;*/
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Suggestion.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Suggestion.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}



//}



