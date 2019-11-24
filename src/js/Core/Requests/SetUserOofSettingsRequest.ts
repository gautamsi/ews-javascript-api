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
import { ServiceResponse } from "../Responses/ServiceResponse";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a SetUserOofSettings request.
 *
 * @sealed
 */
export class SetUserOofSettingsRequest extends SimpleServiceRequestBase {
  private smtpAddress: string = null;
  private oofSettings: OofSettings = null;

  /**
   * Gets or sets the SMTP address.
   */
  get SmtpAddress(): string {
    return this.smtpAddress;
  }
  set SmtpAddress(value: string) {
    this.smtpAddress = value;
  }

  /**
   * Gets or sets the oof settings.
   */
  get OofSettings(): OofSettings {
    return this.oofSettings;
  }
  set OofSettings(value: OofSettings) {
    this.oofSettings = value;
  }

  /**
   * @internal Initializes a new instance of the **SetUserOofSettingsRequest** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
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
    return ExchangeVersion.Exchange2007_SP1;
  }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      XML element name.
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.SetUserOofSettingsResponse;
  }

  /**
   * Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.SetUserOofSettingsRequest;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsObjectBody   The jsObjectBody from XmlJsObject.
   * @return  {any}            Service response.
   */
  ParseResponse(jsObjectBody: any): any {
    var serviceResponse: ServiceResponse = new ServiceResponse();
    serviceResponse.LoadFromXmlJsObject(jsObjectBody[XmlElementNames.ResponseMessage], this.Service);
    return serviceResponse;
  }

  /**
   * @internal Validate request..
   */
  Validate(): void {
    super.Validate();

    EwsUtilities.ValidateParam(this.SmtpAddress, "SmtpAddress");
    EwsUtilities.ValidateParam(this.OofSettings, "OofSettings");
  }

  /**
   * @internal Writes the elements to XML.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Mailbox);
    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Address, this.SmtpAddress);
    writer.WriteEndElement(); // Mailbox

    this.OofSettings.WriteToXml(writer, XmlElementNames.UserOofSettings);
  }
}
