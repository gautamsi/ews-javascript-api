import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { Folder } from "../ServiceObjects/Folders/Folder";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { UpdateFolderResponse } from "../Responses/UpdateFolderResponse";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ServiceResponse } from "../Responses/ServiceResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents an UpdateFolder request.
 * 
 * @sealed
*/
export class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {

    private folders: Folder[] = [];

    /**
     * Gets the list of folders.
     * 
     * @value   The folders.
     */
    get Folders(): Folder[] {
        return this.folders;
    }

    /**
     * @internal Initializes a new instance of the **UpdateFolderRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   session         The session.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {ServiceResponse}   Service response.
     */
    CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse {
        return new UpdateFolderResponse(this.Folders[responseIndex]);
    }

    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetExpectedResponseMessageCount(): number {
        return this.folders.length;
    }

    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2007_SP1;
    }

    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseMessageXmlElementName(): string {
        return XmlElementNames.UpdateFolderResponseMessage;
    }

    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseXmlElementName(): string {
        return XmlElementNames.UpdateFolderResponse;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string {
        return XmlElementNames.UpdateFolder;
    }

    /**
     * @internal Validates the request.
     */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParamCollection(this.Folders, "Folders");
        for (var folder of this.folders) {
            if ((folder == null) || folder.IsNew) {
                throw new Error(StringHelper.Format(Strings.FolderToUpdateCannotBeNullOrNew, this.folders.indexOf(folder)));
            }

            folder.Validate();
        }
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.FolderChanges);

        for (var folder of this.folders) {
            folder.WriteToXmlForUpdate(writer);
        }

        writer.WriteEndElement();
    }
}
