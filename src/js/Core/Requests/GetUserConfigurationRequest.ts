import { EnumHelper, StringHelper } from "../../ExtensionMethods";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { FolderId } from "../../ComplexProperties/FolderId";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { UserConfiguration } from "../../Misc/UserConfiguration";
import { UserConfigurationProperties } from "../../Enumerations/UserConfigurationProperties";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { GetUserConfigurationResponse } from "../Responses/GetUserConfigurationResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a GetUserConfiguration request.
 */
export class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> { //IJsonSerializable

    private static EnumDelimiter: string = ",";

    private name: string = null;
    private parentFolderId: FolderId = null;
    private properties: UserConfigurationProperties = UserConfigurationProperties.Id;
    private userConfiguration: UserConfiguration = null;

    /**
     * @internal Gets or sets the name.
     * 
     * @value   The name.
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
     * @internal Gets or sets the user configuration.
     * 
     * @value   The userConfiguration.
     */
    get UserConfiguration(): UserConfiguration {
        return this.userConfiguration;
    }
    set UserConfiguration(value: UserConfiguration) {
        this.userConfiguration = value;
        this.name = this.userConfiguration.Name;
        this.parentFolderId = this.userConfiguration.ParentFolderId;
    }

    /**
     * @internal Gets or sets the properties.
     * 
     * @value   The properties.
     */
    get Properties(): UserConfigurationProperties {
        return this.properties;
    }
    set Properties(value: UserConfigurationProperties) {
        this.properties = value;
    }

    /**
	 * @internal Initializes a new instance of the **GetUserConfigurationRequest** class.
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
	 * @return  {GetUserConfigurationResponse}	    Service response.
	 */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetUserConfigurationResponse {
        // In the case of UserConfiguration.Load(), this.userConfiguration is set.
        if (this.userConfiguration == null) {
            this.userConfiguration = new UserConfiguration(service, this.properties);
            this.userConfiguration.Name = this.name;
            this.userConfiguration.ParentFolderId = this.parentFolderId;
        }

        return new GetUserConfigurationResponse(this.userConfiguration);
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
        return XmlElementNames.GetUserConfigurationResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.GetUserConfigurationResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetXmlElementName(): string {
        return XmlElementNames.GetUserConfiguration;
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

        // Write UserConfigurationProperties element
        writer.WriteElementValue(
            XmlNamespace.Messages,
            XmlElementNames.UserConfigurationProperties,
            EnumHelper.ToString(UserConfigurationProperties, this.properties).replace(GetUserConfigurationRequest.EnumDelimiter, StringHelper.Empty));
    }
}