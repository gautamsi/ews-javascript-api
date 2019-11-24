import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { InstallAppResponse } from "../Responses/InstallAppResponse";
import { Promise } from "../../Promise";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a InstallApp request.
 *
 * @sealed
 */
export class InstallAppRequest extends SimpleServiceRequestBase {
  /**
   * The plain text manifest stream as base64 encoded string.
   */
  private manifestStream: string = null;

  /**
   * Initializes a new instance of the **InstallAppRequest** class.
   *
   * @param   {ExchangeService}   service          The service.
   * @param   {string}   			manifestStream   The manifest's plain text XML stream.
   */
  constructor(service: ExchangeService, manifestStream: string) {
    super(service);
    this.manifestStream = manifestStream;
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<InstallAppResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<InstallAppResponse> {
    const serviceResponse: InstallAppResponse = await this.InternalExecute();
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
    return XmlElementNames.InstallAppResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.InstallAppRequest;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: InstallAppResponse = new InstallAppResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Manifest);

    //writer.WriteBase64ElementValue(manifestStream);
    writer.WriteValue(this.manifestStream, null);

    writer.WriteEndElement();
  }
}
