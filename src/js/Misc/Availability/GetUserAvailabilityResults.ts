import {AttendeeAvailability} from "../../Core/Responses/AttendeeAvailability";
import {SuggestionsResponse} from "../../Core/Responses/SuggestionsResponse";
import {ServiceResponseCollection} from "../../Core/Responses/ServiceResponseCollection";
import {Suggestion} from "../../ComplexProperties/Availability/Suggestion";
export class GetUserAvailabilityResults {
    SuggestionsResponse: SuggestionsResponse;
    AttendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
    Suggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
    private attendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
    private suggestionsResponse: SuggestionsResponse;
}