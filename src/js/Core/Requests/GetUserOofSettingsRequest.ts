import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetUserOofSettingsResponse } from "../Responses/GetUserOofSettingsResponse";
import { Promise } from "../../Promise";
import { OofExternalAudience } from "../../Enumerations/OofExternalAudience";
import { OofSettings } from "../../ComplexProperties/Availability/OofSettings";
import { ServiceError } from "../../Enumerations/ServiceError";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetUserOofSettings request.
 *
 * @sealed
 */
export class GetUserOofSettingsRequest extends SimpleServiceRequestBase {
  private smtpAddress: string = null;

  /**
   * @internal Gets or sets the SMTP address.
   */
  get SmtpAddress(): string {
    return this.smtpAddress;
  }
  set SmtpAddress(value: string) {
    this.smtpAddress = value;
  }

  /**
   * @internal Initializes a new instance of the **GetUserOofSettingsRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetUserOofSettingsResponse>}      Service response.
   */
  async Execute(): Promise<GetUserOofSettingsResponse> {
    const serviceResponse: GetUserOofSettingsResponse = await this.InternalExecute();
    serviceResponse.ThrowIfNecessary();
    return serviceResponse;
  }

  /**
   * @internal Gets the request version.
   *
   * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
   */
  GetMinimumRequiredServerVersion(): ExchangeVersion {
    return ExchangeVersion.Exchange2007_SP1;
  }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      XML element name,
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetUserOofSettingsResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name,
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetUserOofSettingsRequest;
  }

  /**
   * Parses the response.
   *
   * @param   {any}   jsObjectBody   The jsObjectBody from XmlJsObject.
   * @return  {any}            Response object.
   */
  ParseResponse(jsObjectBody: any): any {
    var serviceResponse: GetUserOofSettingsResponse = new GetUserOofSettingsResponse();

    serviceResponse.LoadFromXmlJsObject(jsObjectBody[XmlElementNames.ResponseMessage], this.Service);

    if (serviceResponse.ErrorCode == ServiceError.NoError) {
      if (jsObjectBody[XmlElementNames.OofSettings]) {
        serviceResponse.OofSettings = new OofSettings();
        serviceResponse.OofSettings.LoadFromXmlJsObject(jsObjectBody[XmlElementNames.OofSettings], this.Service);
        serviceResponse.OofSettings.AllowExternalOof = <OofExternalAudience>(<any>OofExternalAudience[jsObjectBody[XmlElementNames.AllowExternalOof]]);
      }
    }

    return serviceResponse;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    super.Validate();
    EwsUtilities.ValidateParam(this.SmtpAddress, "SmtpAddress");
  }

  /**
   * @internal Writes XML elements.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Mailbox);
    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Address, this.SmtpAddress);
    writer.WriteEndElement(); // Mailbox
  }
}
