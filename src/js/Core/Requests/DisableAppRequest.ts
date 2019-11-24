import { DisableAppResponse } from "../Responses/DisableAppResponse";
import { DisableReasonType } from "../../Enumerations/DisableReasonType";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { Promise } from "../../Promise";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a DisableApp request.
 *
 * @sealed
 */
export class DisableAppRequest extends SimpleServiceRequestBase {
  /**
   * Extension id
   */
  private Id: string = null;

  /**
   * Disable reason
   */
  private DisableReason: DisableReasonType = DisableReasonType.NoReason;

  /**
   * @internal Initializes a new instance of the **DisableAppRequest** class.
   *
   * @param   {ExchangeService}   	service         The service.
   * @param   {string}   				id              Extension id.
   * @param   {DisableReasonType}   	disableReason   Disable reason.
   */
  constructor(service: ExchangeService, id: string, disableReason: DisableReasonType) {
    super(service);
    this.Id = id;
    this.DisableReason = disableReason;
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<DisableAppResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<DisableAppResponse> {
    const serviceResponse: DisableAppResponse = await this.InternalExecute();
    serviceResponse.ThrowIfNecessary();
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
    return XmlElementNames.DisableAppResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.DisableAppRequest;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: DisableAppResponse = new DisableAppResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ID, this.Id);
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.DisableReason, DisableReasonType[this.DisableReason]);
  }
}
