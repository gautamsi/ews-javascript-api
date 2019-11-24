import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetHoldOnMailboxesResponse } from "../Responses/GetHoldOnMailboxesResponse";
import { Promise } from "../../Promise";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetHoldOnMailboxesRequest request.
 *
 * @sealed
 */
export class GetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
  /**
   * Hold id
   */
  HoldId: string = null;

  /**
   * @internal Initializes a new instance of the **GetHoldOnMailboxesRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetHoldOnMailboxesResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<GetHoldOnMailboxesResponse> {
    const serviceResponse: GetHoldOnMailboxesResponse = await this.InternalExecute();
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
    return XmlElementNames.GetHoldOnMailboxesResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetHoldOnMailboxes;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetHoldOnMailboxesResponse = new GetHoldOnMailboxesResponse();
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
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.HoldId, this.HoldId);
  }
}
