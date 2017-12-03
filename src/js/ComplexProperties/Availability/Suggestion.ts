import { SuggestionQuality } from "../../Enumerations/SuggestionQuality";
import { TimeSuggestion } from "./TimeSuggestion";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { DateTime, DateTimeKind } from "../../DateTime";
import { EwsServiceJsonReader } from "../../Core/EwsServiceJsonReader";
import { ExchangeService } from "../../Core/ExchangeService";
import { ComplexProperty } from "../ComplexProperty";
import { EwsLogging } from "../../Core/EwsLogging";
export class Suggestion extends ComplexProperty {
    private date: DateTime = null;
    private quality: SuggestionQuality = SuggestionQuality.Excellent;
    private timeSuggestions: TimeSuggestion[] = []; /*System.Collections.ObjectModel.Collection<TimeSuggestion>;*/
    get Date(): DateTime {
        return this.date;
    }
    get Quality(): SuggestionQuality {
        return this.quality;
    }
    get TimeSuggestions(): TimeSuggestion[] {
        return this.timeSuggestions;
    }
    constructor() {
        super();
    }
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("Suggestion.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {

        this.date = DateTime.Parse(jsonProperty[XmlElementNames.Date]);
        EwsLogging.Log("bug: Suggestion->LoadFromXml:    need to change to millisecond and with datetimekind", true)
        //debugger;
        this.quality = <SuggestionQuality><any>SuggestionQuality[jsonProperty[XmlElementNames.DayQuality]];

        var suggestionArrayObj: any = jsonProperty[XmlElementNames.SuggestionArray];
        var suggestions: any[] = EwsServiceJsonReader.ReadAsArray(suggestionArrayObj, XmlElementNames.Suggestion);
        for (var suggestion of suggestions) {
            var timeSuggestion: TimeSuggestion = new TimeSuggestion();
            timeSuggestion.LoadFromXmlJsObject(suggestion, service);
            this.timeSuggestions.push(timeSuggestion);
        }
    }
}
