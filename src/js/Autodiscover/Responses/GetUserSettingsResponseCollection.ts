import {XmlElementNames} from "../../Core/XmlElementNames";

import {GetUserSettingsResponse} from "./GetUserSettingsResponse";
import {AutodiscoverResponseCollection} from "../AutodiscoverResponseCollection";
export class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
    CreateResponseInstance(): GetUserSettingsResponse { return new GetUserSettingsResponse(); }
    GetResponseCollectionXmlElementName(): string { return XmlElementNames.UserResponses; }
    GetResponseInstanceXmlElementName(): string { return XmlElementNames.UserResponse; }
}
