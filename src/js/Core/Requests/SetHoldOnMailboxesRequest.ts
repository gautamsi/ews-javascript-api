import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { HoldAction } from "../../Enumerations/HoldAction";
import { Promise } from "../../Promise";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { SetHoldOnMailboxesResponse } from "../Responses/SetHoldOnMailboxesResponse";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a SetHoldOnMailboxesRequest request.
 *
 * @sealed
 */
export class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase { //IJsonSerializable
  /**
   * Action type
   */
  ActionType: HoldAction = HoldAction.Create;

  /**
   * Hold id
   */
  HoldId: string = null;

  /**
   * Query
   */
  Query: string = null;

  /**
   * Collection of mailboxes to be held/unheld
   */
  Mailboxes: string[] = null;

  /**
   * Query language
   */
  Language: string = null;

  /**
   * InPlaceHold Identity
   */
  InPlaceHoldIdentity: string = null;

  /**
   * Item hold period
   * *The text value can be "Unlimited" or the string value of any Timespan value.*
   */
  ItemHoldPeriod: string = null;

  /**
   * Include Non Indexable Items
   */
  IncludeNonIndexableItems: boolean = null;

  /**
   * Perform deduplication
   */
  PerformDeduplication: boolean = null;

  /**
   * @internal Initializes a new instance of the **SetHoldOnMailboxesRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<SetHoldOnMailboxesResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<SetHoldOnMailboxesResponse> {
    const serviceResponse: SetHoldOnMailboxesResponse = await this.InternalExecute();
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
    return XmlElementNames.SetHoldOnMailboxesResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.SetHoldOnMailboxes;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: SetHoldOnMailboxesResponse = new SetHoldOnMailboxesResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    super.Validate();

    if (StringHelper.IsNullOrEmpty(this.HoldId)) {
      throw new ServiceValidationException(Strings.HoldIdParameterIsNotSpecified);
    }

    if (StringHelper.IsNullOrEmpty(this.InPlaceHoldIdentity) && (this.Mailboxes == null || this.Mailboxes.length == 0)) {
      throw new ServiceValidationException(Strings.HoldMailboxesParameterIsNotSpecified);
    }
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ActionType, HoldAction[this.ActionType]);
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.HoldId, this.HoldId);
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Query, this.Query || StringHelper.Empty);

    if (this.Mailboxes != null && this.Mailboxes.length > 0) {
      writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Mailboxes);
      for (let mailbox of this.Mailboxes) {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.String, mailbox);
      }

      writer.WriteEndElement(); // Mailboxes
    }

    // Language
    if (!StringHelper.IsNullOrEmpty(this.Language)) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Language, this.Language);
    }

    if (!StringHelper.IsNullOrEmpty(this.InPlaceHoldIdentity)) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.InPlaceHoldIdentity, this.InPlaceHoldIdentity);
    }

    /** per github issue #120 */
    if (this.IncludeNonIndexableItems !== null) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.IncludeNonIndexableItems, this.IncludeNonIndexableItems);
    }
    /** per github issue #120 */
    if (this.PerformDeduplication !== null) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Deduplication, this.PerformDeduplication);
    }

    if (!StringHelper.IsNullOrEmpty(this.ItemHoldPeriod)) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ItemHoldPeriod, this.ItemHoldPeriod);
    }
  }
}
