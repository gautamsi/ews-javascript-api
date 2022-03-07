﻿import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {GetInboxRulesResponse} from "../Responses/GetInboxRulesResponse";
import {StringHelper} from "../../ExtensionMethods";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetInboxRules request.
 * 
 * @sealed
 */
export class GetInboxRulesRequest extends SimpleServiceRequestBase {

	/**
	 * The smtp address of the mailbox from which to get the inbox rules.
	 */
	private mailboxSmtpAddress: string;

	/**
	 * Gets or sets the address of the mailbox from which to get the inbox rules.
	 */
	get MailboxSmtpAddress(): string {
		return this.mailboxSmtpAddress;
	}
	set MailboxSmtpAddress(value: string) {
		this.mailboxSmtpAddress = value;
	}

	/**
     * @internal Initializes a new instance of the **GetInboxRulesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService) {
        super(service);
    }

	/**
     * @internal Executes this request.
     *
     * @return  {Promise<GetInboxRulesResponse>}      Service response  :Promise.
     */
    Execute(): Promise<GetInboxRulesResponse> {
		return this.InternalExecute().then((serviceResponse: GetInboxRulesResponse) => {

            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
		});
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
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseXmlElementName(): string {
		return XmlElementNames.GetInboxRulesResponse;
	}

	/**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string {
		return XmlElementNames.GetInboxRules;
	}

	/**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    ParseResponse(jsonBody: any): any {
		let response: GetInboxRulesResponse = new GetInboxRulesResponse();
		response.LoadFromXmlJsObject(jsonBody, this.Service);
		return response;
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		if (!StringHelper.IsNullOrEmpty(this.mailboxSmtpAddress)) {
			writer.WriteElementValue(
				XmlNamespace.Messages,
				XmlElementNames.MailboxSmtpAddress,
				this.mailboxSmtpAddress);
		}
	}
}