import {AttendeeAvailability} from "../../Core/Responses/AttendeeAvailability";
import {SuggestionsResponse} from "../../Core/Responses/SuggestionsResponse";
import {ServiceResponseCollection} from "../../Core/Responses/ServiceResponseCollection";
import {Suggestion} from "../../ComplexProperties/Availability/Suggestion";
export class GetUserAvailabilityResults {
    private attendeesAvailability: ServiceResponseCollection<AttendeeAvailability> = null;
    private suggestionsResponse: SuggestionsResponse = null;
    get SuggestionsResponse(): SuggestionsResponse {
        return this.suggestionsResponse;
    }
    set SuggestionsResponse(value: SuggestionsResponse) {
        this.suggestionsResponse = value;
    }
    get AttendeesAvailability(): ServiceResponseCollection<AttendeeAvailability> {
        return this.attendeesAvailability;
    }
    set AttendeesAvailability(value: ServiceResponseCollection<AttendeeAvailability>) {
        this.attendeesAvailability = value;
    }
    get Suggestions(): Suggestion[] {
        if (this.suggestionsResponse === null) {
            return null;
        }
        this.suggestionsResponse.ThrowIfNecessary();
        return this.suggestionsResponse.Suggestions;
    }
}