import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetDiscoverySearchConfigurationResponse } from "../Responses/GetDiscoverySearchConfigurationResponse";
import { Promise } from "../../Promise";
import { StringHelper } from "../../ExtensionMethods";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetDiscoverySearchConfigurationRequest.
 *
 * @sealed
 */
export class GetDiscoverySearchConfigurationRequest extends SimpleServiceRequestBase {
  /**
   * Search Id
   */
  SearchId: string = null;

  /**
   * Expand group membership
   */
  ExpandGroupMembership: boolean = false;

  /**
   * In-Place hold configuration only
   */
  InPlaceHoldConfigurationOnly: boolean = false;

  /**
   * @internal Initializes a new instance of the **GetDiscoverySearchConfigurationRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetDiscoverySearchConfigurationResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<GetDiscoverySearchConfigurationResponse> {
    const serviceResponse: GetDiscoverySearchConfigurationResponse = await this.InternalExecute();
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
    return XmlElementNames.GetDiscoverySearchConfigurationResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetDiscoverySearchConfiguration;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetDiscoverySearchConfigurationResponse = new GetDiscoverySearchConfigurationResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.SearchId, this.SearchId || StringHelper.Empty);
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ExpandGroupMembership, this.ExpandGroupMembership);
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.InPlaceHoldConfigurationOnly, this.InPlaceHoldConfigurationOnly);
  }
}
