import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {ExchangeService} from "../ExchangeService";
import {ExecuteDiagnosticMethodResponse} from "../Responses/ExecuteDiagnosticMethodResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class ExecuteDiagnosticMethodRequest extends MultiResponseServiceRequest<ExecuteDiagnosticMethodResponse> {
    Verb: string;
    Parameter: any;//System.Xml.XmlNode;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExecuteDiagnosticMethodResponse { throw new Error("ExecuteDiagnosticMethodRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ExecuteDiagnosticMethodRequest.ts - GetXmlElementName : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ExecuteDiagnosticMethodRequest.ts - WriteElementsToXml : Not implemented."); }
}