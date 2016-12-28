import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {UpdateFolderResponse} from "../Responses/UpdateFolderResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ServiceResponse} from "../Responses/ServiceResponse";
/** @internal */
export class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {
    private folders: Folder[] = [];
    get Folders(): Folder[] {
        return this.folders;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse { return new UpdateFolderResponse(this.Folders[responseIndex]); }
    GetExpectedResponseMessageCount(): number { throw new Error("UpdateFolderRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.UpdateFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.UpdateFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.UpdateFolder; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParamCollection(this.Folders, "Folders");
        for (var folder of this.folders) {
            if ((folder == null) || folder.IsNew) {
                throw new Error(StringHelper.Format(Strings.FolderToUpdateCannotBeNullOrNew, this.folders.indexOf(folder)));
            }

            folder.Validate();
        }
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.FolderChanges);

        for (var folder of this.folders) {
            folder.WriteToXmlForUpdate(writer);
        }

        writer.WriteEndElement();
    }
}

