import {XmlElementNames} from "../XmlElementNames";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {Suggestion} from "../../ComplexProperties/Availability/Suggestion";
import {ServiceResponse} from "./ServiceResponse";
export class SuggestionsResponse extends ServiceResponse {
    get Suggestions(): Suggestion[]{return this.daySuggestions;}//System.Collections.ObjectModel.Collection<Suggestion>;
    private daySuggestions: Suggestion[] = [];//System.Collections.ObjectModel.Collection<Suggestion>;
    LoadSuggestedDaysFromXml(jsonProperty: any, service: ExchangeService): void {
        var SuggestionArrayObj = jsonProperty[XmlElementNames.SuggestionDayResultArray];
        if(typeof SuggestionArrayObj === 'undefined') throw new Error("SuggestionsResponse.ts - LoadSuggestedDaysFromXml - invalid object returned ");
        
        var suggestions:any = EwsServiceJsonReader.ReadAsArray(SuggestionArrayObj,XmlElementNames.SuggestionDayResult);
        for(var suggestion of suggestions){
            var daySuggestion:Suggestion = new Suggestion();
            daySuggestion.LoadFromXmlJsObject(suggestion,service);
            this.daySuggestions.push(daySuggestion);
        }
    }
}
