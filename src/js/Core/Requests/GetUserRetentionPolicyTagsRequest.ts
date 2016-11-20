import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {GetUserRetentionPolicyTagsResponse} from "../Responses/GetUserRetentionPolicyTagsResponse";
import { Promise } from "../../Promise";
import {XmlElementNames} from "../XmlElementNames";

import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetUserRetentionPolicyTagsRequest request.
 * 
 * @sealed
 */
export class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {

	/**
     * @internal Initializes a new instance of the **GetUserRetentionPolicyTagsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
  constructor(service: ExchangeService) {
    super(service);
  }

	/**
     * @internal Executes this request.
     *
     * @return  {Promise<GetUserRetentionPolicyTagsResponse>}      Service response  :Promise.
     */
  Execute(): Promise<GetUserRetentionPolicyTagsResponse> {
    return <Promise<GetUserRetentionPolicyTagsResponse>>this.InternalExecute();

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
     * @return  {string}      XML element name,
     */
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetUserRetentionPolicyTagsResponse;
  }

	/**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
  GetXmlElementName(): string {
    return XmlElementNames.GetUserRetentionPolicyTags;
  }

	/**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
  ParseResponse(jsonBody: any): any {
    let response: GetUserRetentionPolicyTagsResponse = new GetUserRetentionPolicyTagsResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    // Don't have parameter in request.
  }
}