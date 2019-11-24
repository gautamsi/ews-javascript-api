import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetNonIndexableItemDetailsResponse } from "../Responses/GetNonIndexableItemDetailsResponse";
import { Promise } from "../../Promise";
import { SearchPageDirection } from "../../Enumerations/SearchPageDirection";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { StringHelper, hasValue } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetNonIndexableItemDetailsRequest request.
 *
 * @sealed
 */
export class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
  /**
   * Mailboxes
   */
  Mailboxes: string[] = null;

  /**
   * @Nullable Page size
   */
  PageSize: number = null;

  /**
   * Page item reference
   */
  PageItemReference: string = null;

  /**
   * @Nullable Page direction
   */
  PageDirection: SearchPageDirection = null;

  /**
   * Whether to search archive only
   */
  SearchArchiveOnly: boolean = false;

  /**
   * @internal Initializes a new instance of the **GetNonIndexableItemDetailsRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetNonIndexableItemDetailsResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<GetNonIndexableItemDetailsResponse> {
    const serviceResponse: GetNonIndexableItemDetailsResponse = await this.InternalExecute();
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
    return XmlElementNames.GetNonIndexableItemDetailsResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetNonIndexableItemDetails;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetNonIndexableItemDetailsResponse = new GetNonIndexableItemDetailsResponse();
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

    if (this.PageSize) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.PageSize, this.PageSize);
    }

    if (!StringHelper.IsNullOrEmpty(this.PageItemReference)) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.PageItemReference, this.PageItemReference);
    }

    if (hasValue(this.PageDirection)) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.PageDirection, SearchPageDirection[this.PageDirection]);
    }

    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.SearchArchiveOnly, this.SearchArchiveOnly);
  }
}
