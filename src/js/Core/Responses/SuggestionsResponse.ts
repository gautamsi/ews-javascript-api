import {ServiceResponse} from "./ServiceResponse";
import {Suggestion} from "../../ComplexProperties/Availability/Suggestion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class SuggestionsResponse extends ServiceResponse {
    Suggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
    private daySuggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
    LoadSuggestedDaysFromXml(reader: EwsServiceXmlReader): any { throw new Error("SuggestionsResponse.ts - LoadSuggestedDaysFromXml : Not implemented."); }
}



//}



