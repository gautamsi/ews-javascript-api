import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {CreateFolderResponse} from "../Responses/CreateFolderResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
//import {EwsUtilities} from "../EwsUtilities";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {Strings} from "../../Strings";
import {CreateRequest} from "./CreateRequest";
export class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
    get Folders(): Folder[] {
        return this.Objects;
    }
    set Folders(value: Folder[]) {
        this.Objects = value;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { 
        //return new CreateFolderResponse(<Folder>EwsUtilities.GetEnumeratedObjectAt(this.Folders, responseIndex));
        if (this.Folders.length >= responseIndex) { throw new Error(Strings.IEnumerableDoesNotContainThatManyObject); }
        return new CreateFolderResponse(this.Folders[responseIndex]);
    }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetObjectCollectionXmlElementName(): string { return XmlElementNames.Folders; }
    GetParentFolderXmlElementName(): string { return XmlElementNames.ParentFolderId; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.CreateFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.CreateFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.CreateFolder; }
    Validate(): void {
        super.Validate();
        
        //EwsUtilities.ValidateParam(this.Folders, "Folders");

        // Validate each folder.
        for (var folder of this.Folders) {
            folder.Validate();
        }
    }
}


