import {CreateRequest} from "./CreateRequest";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
    Folders: Folder[];//System.Collections.Generic.IEnumerable<Folder>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("CreateFolderRequest.ts - CreateServiceResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateFolderRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetObjectCollectionXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetObjectCollectionXmlElementName : Not implemented."); }
    GetParentFolderXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetParentFolderXmlElementName : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CreateFolderRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("CreateFolderRequest.ts - Validate : Not implemented."); }
}


//}



