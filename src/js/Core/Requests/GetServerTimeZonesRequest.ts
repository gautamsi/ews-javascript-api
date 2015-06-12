import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {ExchangeService} from "../ExchangeService";
import {GetServerTimeZonesResponse} from "../Responses/GetServerTimeZonesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetServerTimeZonesRequest extends MultiResponseServiceRequest<GetServerTimeZonesResponse> {
    Ids: string[];//System.Collections.Generic.IEnumerable<string>;
    private ids: string[];//System.Collections.Generic.IEnumerable<string>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetServerTimeZonesResponse { throw new Error("GetServerTimeZonesRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetServerTimeZonesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetServerTimeZonesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetServerTimeZonesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetServerTimeZonesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetServerTimeZonesRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetServerTimeZonesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetServerTimeZonesRequest.ts - WriteElementsToXml : Not implemented."); }
}


//}



