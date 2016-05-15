import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";
import {MoveCopyItemResponse} from "../Responses/MoveCopyItemResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {MoveCopyItemRequest} from "./MoveCopyItemRequest";
/** @internal */
export class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse { return new MoveCopyItemResponse(); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.CopyItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.CopyItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.CopyItem; }
}