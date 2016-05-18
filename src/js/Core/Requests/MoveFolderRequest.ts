import {ExchangeService} from "../ExchangeService";
import {MoveCopyFolderResponse} from "../Responses/MoveCopyFolderResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlElementNames} from "../XmlElementNames";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {MoveCopyFolderRequest} from "./MoveCopyFolderRequest";
/** @internal */
export class MoveFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { return new MoveCopyFolderResponse(); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.MoveFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.MoveFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.MoveFolder; }
}


