import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { UserConfiguration } from "../../Misc/UserConfiguration";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ServiceResponse } from "../Responses/ServiceResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a UpdateUserConfiguration request.
 */
export class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable

    protected userConfiguration: UserConfiguration = null;

    /**
     * Gets or sets the user configuration.
     * 
     * @value   The userConfiguration.
     */
    get UserConfiguration(): UserConfiguration {
        return this.userConfiguration;
    }
    set UserConfiguration(value: UserConfiguration) {
        this.userConfiguration = value;
    }

    /**
	 * @internal Initializes a new instance of the **UpdateUserConfigurationRequest** class.
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
        return XmlElementNames.UpdateUserConfigurationResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.UpdateUserConfigurationResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetXmlElementName(): string {
        return XmlElementNames.UpdateUserConfiguration;
    }

    /**
	 * @internal Validate the request.
	 */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParam(this.userConfiguration, "userConfiguration");
    }

    /**
	 * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        // Write UserConfiguation element
        this.userConfiguration.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.UserConfiguration);
    }
}