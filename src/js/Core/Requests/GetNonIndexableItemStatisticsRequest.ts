import { GetNonIndexableItemStatisticsResponse } from "../Responses/GetNonIndexableItemStatisticsResponse";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { Promise } from "../../Promise";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { ExchangeService } from "../ExchangeService";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents the GetNonIndexableItemStatistics response.
 */
export class GetNonIndexableItemStatisticsRequest extends SimpleServiceRequestBase {
  /**
   * Mailboxes
   */
  Mailboxes: string[] = null;

  /**
   * Whether to search archive only
   */
  SearchArchiveOnly: boolean = false;

  /**
   * @internal Initializes a new instance of the **GetNonIndexableItemStatisticsRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetNonIndexableItemStatisticsResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<GetNonIndexableItemStatisticsResponse> {
    const serviceResponse: GetNonIndexableItemStatisticsResponse = await this.InternalExecute();
    return serviceResponse;
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
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      XML element name.
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetNonIndexableItemStatisticsResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetNonIndexableItemStatistics;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetNonIndexableItemStatisticsResponse = new GetNonIndexableItemStatisticsResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    super.Validate();

    if (this.Mailboxes == null || this.Mailboxes.length == 0) {
      throw new ServiceValidationException(Strings.MailboxesParameterIsNotSpecified);
    }
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Mailboxes);
    for (let mailbox of this.Mailboxes) {
      writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LegacyDN, mailbox);
    }

    writer.WriteEndElement();

    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.SearchArchiveOnly, this.SearchArchiveOnly);
  }
}
