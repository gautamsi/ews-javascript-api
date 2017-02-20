import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from '../EwsUtilities';
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { FolderId } from "../../ComplexProperties/FolderId";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { UserConfiguration } from "../../Misc/UserConfiguration";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ServiceResponse } from "../Responses/ServiceResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a DeleteUserConfiguration request.
 */
export class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> { //: IJsonSerializable

    private name: string = null;
    private parentFolderId: FolderId = null;

    /**
     * @internal Gets or sets the name.
     *
     * @Value   The Name
     */
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.name = value;
    }

    /**
     * @internal Gets or sets the parent folder Id.
     * 
     * @value   The parent folder Id.
     */
    get ParentFolderId(): FolderId {
        return this.parentFolderId;
    }
    set ParentFolderId(value: FolderId) {
        this.parentFolderId = value;
    }

    /**
	 * @internal Initializes a new instance of the **DeleteUserConfigurationRequest** class.
	 *
	 * @param   {ExchangeService}       service   The service.
	 */
    constructor(service: ExchangeService) {
        super(service, ServiceErrorHandling.ThrowOnError);
    }

    /**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {ServiceResponse}	Service response.
	 */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse {
        return new ServiceResponse();
    }

    /**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
    GetExpectedResponseMessageCount(): number {
        return 1;
    }

    /**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2010;
    }

    /**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseMessageXmlElementName(): string {
        return XmlElementNames.DeleteUserConfigurationResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.DeleteUserConfigurationResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetXmlElementName(): string {
        return XmlElementNames.DeleteUserConfiguration;
    }

    /**
	 * @internal Validate the request.
	 */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParam(this.name, "name");
        EwsUtilities.ValidateParam(this.parentFolderId, "parentFolderId");
        this.ParentFolderId.Validate(this.Service.RequestedServerVersion);
    }

    /**
	 * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        // Write UserConfiguationName element
        UserConfiguration.WriteUserConfigurationNameToXml(
            writer,
            XmlNamespace.Messages,
            this.name,
            this.parentFolderId);
    }
}