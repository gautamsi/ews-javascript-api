class SuggestionsResponse extends ServiceResponse {
    Suggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
    private daySuggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
    LoadSuggestedDaysFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = SuggestionsResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
