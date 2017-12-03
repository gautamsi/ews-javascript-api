import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { GetServerTimeZonesResponse } from "../Responses/GetServerTimeZonesResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a GetServerTimeZones request.
 */
export class GetServerTimeZonesRequest extends MultiResponseServiceRequest<GetServerTimeZonesResponse> {
    private ids: string[];

    /**
     * @internal Gets or sets the ids of the time zones that should be returned by the server.
     */
    get Ids(): string[] {
        return this.ids;
    }
    set Ids(value: string[]) {
        this.ids = value;
    }

    /**
     * @internal Initializes a new instance of the **GetServerTimeZonesRequest** class.
     *
     * @param   {service}   service   The service.
     */
    constructor(service: ExchangeService) {
        super(service, ServiceErrorHandling.ThrowOnError);
    }

    /**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {SyncFolderItemsResponse}		Response object.
	 */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetServerTimeZonesResponse {
        return new GetServerTimeZonesResponse();
    }

    /**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of items in response.
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
	 * @return  {string}      XML element name.
	 */
    GetResponseMessageXmlElementName(): string {
        return XmlElementNames.GetServerTimeZonesResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.GetServerTimeZonesResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string {
        return XmlElementNames.GetServerTimeZones;
    }

    /**
	 * @internal Validate request.
	 */
    Validate(): void {
        super.Validate();

        if (this.ids != null) {
            EwsUtilities.ValidateParamCollection(this.ids, "Ids");
        }
    }

    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.Ids != null) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Ids);

            for (let id of this.ids) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.Id,
                    id);
            }

            writer.WriteEndElement(); // Ids
        }
    }
}
