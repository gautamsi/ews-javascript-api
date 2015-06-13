import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {MoveCopyFolderResponse} from "../Responses/MoveCopyFolderResponse";
import {XmlElementNames} from "../XmlElementNames";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {MoveCopyFolderRequest} from "./MoveCopyFolderRequest";
export class CopyFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { return new MoveCopyFolderResponse(); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.CopyFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.CopyFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.CopyFolder; }
}
