import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {
    Folders: Folder[];//System.Collections.Generic.List<Folder>;
    private folders: Folder[];//System.Collections.Generic.List<Folder>;
    CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("UpdateFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("UpdateFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UpdateFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("UpdateFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UpdateFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UpdateFolderRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("UpdateFolderRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UpdateFolderRequest.ts - WriteElementsToXml : Not implemented."); }
}




    //
//}



