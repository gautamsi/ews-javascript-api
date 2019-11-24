import { ArgumentNullException } from "../../Exceptions/ArgumentException";
import { EmailAddress } from "../../ComplexProperties/EmailAddress";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { Promise } from "../../Promise";
import { ServiceResponse } from "../Responses/ServiceResponse";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a UnpinTeamMailbox request.
 *
 * @sealed
 */
export class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {
  /**
   * TeamMailbox email address
   */
  private emailAddress: EmailAddress = null;

  /**
   * Initializes a new instance of the **UnpinTeamMailboxRequest** class.
   *
   * @param   {ExchangeService}   service        The service
   * @param   {EmailAddress}      emailAddress   TeamMailbox email address
   */
  constructor(service: ExchangeService, emailAddress: EmailAddress) {
    super(service);
    if (emailAddress === null) {
      throw new ArgumentNullException("emailAddress");
    }
    this.emailAddress = emailAddress;
  }

  /**
   * @internal Executes this request.
   *
   * @return  {ServiceResponse}      Service response.
   */
  async Execute(): Promise<ServiceResponse> {
    const serviceResponse: ServiceResponse = await this.InternalExecute();
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
   * @return  {string}      XML element name,
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.UnpinTeamMailboxResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name,
   */
  GetXmlElementName(): string {
    return XmlElementNames.UnpinTeamMailbox;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    var serviceResponse: ServiceResponse = new ServiceResponse();
    serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
    return serviceResponse;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    //this.emailAddress.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.EmailAddress);
    this.emailAddress.WriteToXml(writer, XmlElementNames.EmailAddress, XmlNamespace.Messages);
  }
}
