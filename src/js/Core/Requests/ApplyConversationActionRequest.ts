import {ConversationAction} from "../../Misc/ConversationAction";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {ServiceResponse} from "../Responses/ServiceResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/**
 * @internal Represents a request to a Apply Conversation Action operation
 * 
 * @sealed 
 */
export class ApplyConversationActionRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable

    private conversationActions: ConversationAction[] = [];

    get ConversationActions(): ConversationAction[] {
        return this.conversationActions;
    }

    /**
	 * @internal Initializes a new instance of the **ApplyConversationActionRequest** class.
	 *
	 * @param   {ExchangeService}       service   The service.
	 * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
	 */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

	/**
	 * @internal Creates service response.
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
        return this.conversationActions.length;
    }

	/**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2010_SP1;
    }

	/**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseMessageXmlElementName(): string { return XmlElementNames.ApplyConversationActionResponseMessage; }

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseXmlElementName(): string { return XmlElementNames.ApplyConversationActionResponse; }

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetXmlElementName(): string { return XmlElementNames.ApplyConversationAction; }

	/**
	 * @internal Validate the request.
	 */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParamCollection(this.conversationActions, "conversationActions");
		for (let iAction = 0; iAction < this.ConversationActions.length; iAction++) {
			this.ConversationActions[iAction].Validate();
		}
    }

	/**
	 * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(
			XmlNamespace.Messages,
			XmlElementNames.ConversationActions);
		for (let iAction = 0; iAction < this.ConversationActions.length; iAction++) {
			this.ConversationActions[iAction].WriteElementsToXml(writer);
		}
		writer.WriteEndElement();
    }
}