import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetAppManifestsResponse } from "../Responses/GetAppManifestsResponse";
import { Promise } from "../../Promise";
import { StringHelper } from "../../ExtensionMethods";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 *  @internal Represents a GetAppManifests request.
 *
 * @sealed
 */
export class GetAppManifestsRequest extends SimpleServiceRequestBase {
  /**
   * @internal Gets or sets the api version supported by the client.
   * This tells Exchange service which app manifests should be returned based on the api version.
   *
   * @value	The Api version supported.
   */
  ApiVersionSupported: string = null;

  /**
   * @internal Gets or sets the Schema version supported by the client.
   * This tells Exchange service which app manifests should be returned based on the schema version.
   *
   * @value	The schema version supported.
   */
  SchemaVersionSupported: string = null;

  /**
   * @internal Initializes a new instance of the **GetAppManifestsRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetAppManifestsResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<GetAppManifestsResponse> {
    const serviceResponse: GetAppManifestsResponse = await this.InternalExecute();
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
    return XmlElementNames.GetAppManifestsResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetAppManifestsRequest;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetAppManifestsResponse = new GetAppManifestsResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    super.Validate();
    EwsUtilities.ValidateNonBlankStringParamAllowNull(this.ApiVersionSupported, "ApiVersionSupported");
    EwsUtilities.ValidateNonBlankStringParamAllowNull(this.SchemaVersionSupported, "SchemaVersionSupported");
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    if (!StringHelper.IsNullOrEmpty(this.ApiVersionSupported)) {
      writer.WriteElementValue(XmlNamespace.Messages, "ApiVersionSupported", this.ApiVersionSupported);
    }

    if (!StringHelper.IsNullOrEmpty(this.SchemaVersionSupported)) {
      writer.WriteElementValue(XmlNamespace.Messages, "SchemaVersionSupported", this.SchemaVersionSupported);
    }
  }
}
