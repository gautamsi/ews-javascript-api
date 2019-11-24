import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetSearchableMailboxesResponse } from "../Responses/GetSearchableMailboxesResponse";
import { Promise } from "../../Promise";
import { StringHelper } from "../../ExtensionMethods";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetSearchableMailboxesRequest request.
 */
export class GetSearchableMailboxesRequest extends SimpleServiceRequestBase {
  /**
   * Search filter
   */
  SearchFilter: string = null;

  /**
   * Expand group membership
   */
  ExpandGroupMembership: boolean = false;

  /**
   * @internal Initializes a new instance of the **GetSearchableMailboxesRequest** class.
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
  async Execute(): Promise<GetSearchableMailboxesResponse> {
    const serviceResponse: GetSearchableMailboxesResponse = await this.InternalExecute();
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
    return XmlElementNames.GetSearchableMailboxesResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetSearchableMailboxes;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetSearchableMailboxesResponse = new GetSearchableMailboxesResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.SearchFilter, this.SearchFilter || StringHelper.Empty);
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ExpandGroupMembership, this.ExpandGroupMembership);
  }
}
