import {ClientAccessTokenType} from "../../Enumerations/ClientAccessTokenType";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {GetClientAccessTokenResponse} from "../Responses/GetClientAccessTokenResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceValidationException} from "../../Exceptions/ServiceValidationException";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {ClientAccessTokenRequest} from "../../ComplexProperties/ClientAccessTokenRequest";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/**
 * @internal Represents a GetClientAccessToken request.
 * 
 * @sealed
 */
export class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {

	TokenRequests: ClientAccessTokenRequest[] = [];

	/**
	 * @internal Initializes a new instance of the **GetClientAccessTokenRequest** class.
	 *
	 * @param   {ExchangeService}   	service             The service.
	 * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
	 */
	constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
		super(service, errorHandlingMode);
	}

	/**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {GetClientAccessTokenResponse}		Response object.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): GetClientAccessTokenResponse {
		return new GetClientAccessTokenResponse(
			this.TokenRequests[responseIndex].Id,
			this.TokenRequests[responseIndex].TokenType);
	}

	/**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of items in response.
	 */
	GetExpectedResponseMessageCount(): number {
		return this.TokenRequests.length;
	}

	/**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
		return ExchangeVersion.Exchange2013;
	}

	/**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetResponseMessageXmlElementName(): string {
		return XmlElementNames.GetClientAccessTokenResponseMessage;
	}

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetResponseXmlElementName(): string {
		return XmlElementNames.GetClientAccessTokenResponse;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string {
		return XmlElementNames.GetClientAccessToken;
	}

	/**
	 * @internal Validate request.
	 */
    Validate(): void {
		super.Validate();

		if (this.TokenRequests == null || this.TokenRequests.length == 0) {
			throw new ServiceValidationException(Strings.HoldIdParameterIsNotSpecified);
		}
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.TokenRequests);

		for (let tokenRequestInfo of this.TokenRequests) {
			writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.TokenRequest);
			writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Id, tokenRequestInfo.Id);
			writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.TokenType, ClientAccessTokenType[tokenRequestInfo.TokenType]);
			if (!StringHelper.IsNullOrEmpty(tokenRequestInfo.Scope)) {
				writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.HighlightTermScope, tokenRequestInfo.Scope);
			}

			writer.WriteEndElement();
		}

		writer.WriteEndElement();
	}
}