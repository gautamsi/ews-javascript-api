import {XmlElementNames} from "../../Core/XmlElementNames";
import {GetDomainSettingsResponse} from "./GetDomainSettingsResponse";
import {AutodiscoverResponseCollection} from "../AutodiscoverResponseCollection";
export class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
    CreateResponseInstance(): GetDomainSettingsResponse { return new GetDomainSettingsResponse(); }
    GetResponseCollectionXmlElementName(): string { return XmlElementNames.DomainResponses; }
    GetResponseInstanceXmlElementName(): string { return XmlElementNames.DomainResponse; }
}