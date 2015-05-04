import AttendeeAvailability = require("../../Core/Responses/AttendeeAvailability");
import SuggestionsResponse = require("../../Core/Responses/SuggestionsResponse");
import ServiceResponseCollection = require("../../Core/Responses/ServiceResponseCollection");
import Suggestion = require("../../ComplexProperties/Availability/Suggestion");
class GetUserAvailabilityResults {
    SuggestionsResponse: SuggestionsResponse;
    AttendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
    Suggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
    private attendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
    private suggestionsResponse: SuggestionsResponse;
}
export = GetUserAvailabilityResults;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
