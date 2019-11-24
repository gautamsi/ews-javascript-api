import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { Promise } from "../../Promise";
import { UninstallAppResponse } from "../Responses/UninstallAppResponse";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal  Represents a UninstallApp request.
 *
 * @sealed
 */
export class UninstallAppRequest extends SimpleServiceRequestBase {
  /**
   * Extension ID
   */
  private ID: string = null;

  /**
   * @internal Initializes a new instance of the **UninstallAppRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   * @param   {string}   			id        Extension ID
   */
  constructor(service: ExchangeService, id: string) {
    super(service);
    this.ID = id;
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<UninstallAppResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<UninstallAppResponse> {
    const serviceResponse: UninstallAppResponse = await this.InternalExecute();
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
    return XmlElementNames.UninstallAppResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.UninstallAppRequest;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: UninstallAppResponse = new UninstallAppResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ID, this.ID);
  }
}
