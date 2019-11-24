import { ArgumentException } from "../../Exceptions/ArgumentException";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { Promise } from "../../Promise";
import { RuleOperation } from "../../ComplexProperties/RuleOperation";
import { ServiceResult } from "../../Enumerations/ServiceResult";
import { StringHelper } from "../../ExtensionMethods";
import { UpdateInboxRulesException } from "../../Exceptions/UpdateInboxRulesException";
import { UpdateInboxRulesResponse } from "../Responses/UpdateInboxRulesResponse";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a UpdateInboxRulesRequest request.
 *
 * @sealed
 */
export class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
  /**
   * The smtp address of the mailbox from which to get the inbox rules.
   */
  private mailboxSmtpAddress: string = null;

  /**
   * Remove OutlookRuleBlob or not.
   */
  private removeOutlookRuleBlob: boolean = false;

  /**
   * InboxRule operation collection.
   */
  private inboxRuleOperations: RuleOperation[] = null;

  get MailboxSmtpAddress(): string {
    return this.mailboxSmtpAddress;
  }
  set MailboxSmtpAddress(value: string) {
    this.mailboxSmtpAddress = value;
  }

  get RemoveOutlookRuleBlob(): boolean {
    return this.removeOutlookRuleBlob;
  }
  set RemoveOutlookRuleBlob(value: boolean) {
    this.removeOutlookRuleBlob = value;
  }

  get InboxRuleOperations(): RuleOperation[] {
    return this.inboxRuleOperations;
  }
  set InboxRuleOperations(value: RuleOperation[]) {
    this.inboxRuleOperations = value;
  }

  /**
   * @internal Initializes a new instance of the **UpdateInboxRulesRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<UpdateInboxRulesResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<UpdateInboxRulesResponse> {
    const serviceResponse: UpdateInboxRulesResponse = await this.InternalExecute();

    if (serviceResponse.Result == ServiceResult.Error) {
      throw new UpdateInboxRulesException(serviceResponse, this.inboxRuleOperations);
    }
    return serviceResponse;
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
    return XmlElementNames.UpdateInboxRulesResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name,
   */
  GetXmlElementName(): string {
    return XmlElementNames.UpdateInboxRules;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: UpdateInboxRulesResponse = new UpdateInboxRulesResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    if (this.inboxRuleOperations == null) {
      throw new ArgumentException("RuleOperations cannot be null.", "Operations");
    }

    let operationCount: number = 0;
    for (let operation of this.inboxRuleOperations) {
      EwsUtilities.ValidateParam(operation, "RuleOperation");
      operationCount++;
    }

    if (operationCount == 0) {
      throw new ArgumentException("RuleOperations cannot be empty.", "Operations");
    }

    this.Service.Validate();
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

    writer.WriteElementValue(
      XmlNamespace.Messages,
      XmlElementNames.RemoveOutlookRuleBlob,
      this.RemoveOutlookRuleBlob);
    writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Operations);
    for (let operation of this.inboxRuleOperations) {
      operation.WriteToXml(writer, operation.XmlElementName);
    }
    writer.WriteEndElement();
  }
}
