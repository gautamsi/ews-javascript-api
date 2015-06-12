import {ComplexProperty} from "../ComplexProperty";
import {SuggestionQuality} from "../../Enumerations/SuggestionQuality";
import {Conflict} from "./Conflict";
import {JsonObject} from "../../Core/JsonObject";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class TimeSuggestion extends ComplexProperty {
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



//}



