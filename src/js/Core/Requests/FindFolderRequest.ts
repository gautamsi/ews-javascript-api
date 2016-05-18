import {FindFolderResponse} from "../Responses/FindFolderResponse";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {FindRequest} from "./FindRequest";
/** @internal */
export class FindFolderRequest extends FindRequest<FindFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindFolderResponse { return new FindFolderResponse(this.View.GetPropertySetOrDefault()); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.FindFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.FindFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.FindFolder; }
}
