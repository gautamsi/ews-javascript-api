import { AutodiscoverErrorCode } from "../../Enumerations/AutodiscoverErrorCode";
import { AutodiscoverResponse } from "../Responses/AutodiscoverResponse";
import { AutodiscoverService } from "../AutodiscoverService";
import { EwsLogging } from "../../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { GetUserSettingsResponseCollection } from "../Responses/GetUserSettingsResponseCollection";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { Uri } from "../../Uri";
import { UserSettingName } from "../../Enumerations/UserSettingName";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { AutodiscoverRequest } from "./AutodiscoverRequest";
/**
 * @internal Represents a GetUserSettings request.
 */
export class GetUserSettingsRequest extends AutodiscoverRequest {
  /**
   * Action Uri of Autodiscover.GetUserSettings method.
   */
  static GetUserSettingsActionUri: string = `${EwsUtilities.AutodiscoverSoapNamespace}/Autodiscover/GetUserSettings`;

  private expectPartnerToken: boolean = false;

  private smtpAddresses: string[];
  private settings: UserSettingName[];
  private partnerToken: string;
  private partnerTokenReference: string;

  /** @internal Gets or sets the SMTP addresses. */
  get SmtpAddresses(): string[] {
    return this.smtpAddresses;
  }
  set SmtpAddresses(value) {
    this.smtpAddresses = value;
  }

  /** @internal Gets or sets the settings. */
  get Settings(): UserSettingName[] {
    return this.settings;
  }
  set Settings(value) {
    this.settings = value;
  }

  /**
   * @internal Gets the partner token.
   */
  get PartnerToken(): string {
    return this.partnerToken;
  }
  /** @private set */
  set PartnerToken(value) {
    this.partnerToken = value;
  }

  /**
   * @internal Gets the partner token reference.
   */
  get PartnerTokenReference(): string {
    return this.partnerTokenReference;
  }
  /** @private set */
  set PartnerTokenReference(value) {
    this.partnerTokenReference = value;
  }

  /**
   * @internal Initializes a new instance of the **GetUserSettingsRequest** class.
   *
   * @param   {AutodiscoverService}   service   Autodiscover service associated with this request.
   * @param   {Uri}                   url       URL of Autodiscover service.
   */
  constructor(service: AutodiscoverService, url: Uri);
  /**
   * @internal Initializes a new instance of the GetUserSettingsRequest class.
   *
   * @param   {AutodiscoverService}   service   Autodiscover service associated with this request.
   * @param   {Uri}                   url       URL of Autodiscover service.
   * @param   {boolean}               expectPartnerToken   [description]
   */
  constructor(service: AutodiscoverService, url: Uri, expectPartnerToken: boolean);
  constructor(service: AutodiscoverService, url: Uri, expectPartnerToken: boolean = false) {
    super(service, url);
    this.expectPartnerToken = expectPartnerToken;

    // make an explicit https check.
    if (expectPartnerToken && !(url.Scheme.toLowerCase() === "https")) {
      throw new ServiceValidationException(Strings.HttpsIsRequired);
    }
  }

  /**
   * @internal Creates the service response.
   *
   * @return  {AutodiscoverResponse}      AutodiscoverResponse
   */
  CreateServiceResponse(): AutodiscoverResponse {
    return new GetUserSettingsResponseCollection();
  }

  /**
   * @internal Executes this instance.
   *
   * @return  {Promise<GetUserSettingsResponseCollection>}      [description]
   */
  async Execute(): Promise<GetUserSettingsResponseCollection> {
    const responses: GetUserSettingsResponseCollection = await this.InternalExecute() as GetUserSettingsResponseCollection;
    if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
      this.PostProcessResponses(responses);
    }
    return responses;
  }

  /**
   * Gets the name of the request XML element.
   *
   * @return  {string}      [description]
   */
  GetRequestXmlElementName(): string {
    return XmlElementNames.GetUserSettingsRequestMessage;
  }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      [description]
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetUserSettingsResponseMessage;
  }

  /**
   * @internal Gets the WS-Addressing action name.
   *
   * @return  {string}      [description]
   */
  GetWsAddressingActionName(): string {
    return GetUserSettingsRequest.GetUserSettingsActionUri;// GetUserSettingsActionUri;
  }

  /**
   * Post-process responses to GetUserSettings.
   *
   * @param   {GetUserSettingsResponseCollection}   responses   The GetUserSettings responses.
   */
  private PostProcessResponses(responses: GetUserSettingsResponseCollection): void {
    // Note:The response collection may not include all of the requested users if the request has been throttled.
    for (let index = 0; index < responses.Count; index++) {
      responses.Responses[index].SmtpAddress = this.SmtpAddresses[index];
    }
  }

  /**
   * @internal Read SOAP headers.
   *
   * @param   {object}   reader   EwsXmlReader
   */
  ReadSoapHeader(jsobject: object): void {
    super.ReadSoapHeader(jsobject);
    return;
    if (this.expectPartnerToken) {
      EwsLogging.Assert(false, "GetUserSettingsRequest.ReadSoapHeader", "Partner tokens not implemented")
      // if (reader.IsElement(XmlNamespace.Autodiscover, XmlElementNames.PartnerToken)) {
      //   this.PartnerToken = reader.ReadInnerXml();
      // }

      // if (reader.IsElement(XmlNamespace.Autodiscover, XmlElementNames.PartnerTokenReference)) {
      //   this.PartnerTokenReference = reader.ReadInnerXml();
      // }
    }
  }

  /**
   * @internal Validates the request.
   */
  Validate(): void {
    super.Validate();

    EwsUtilities.ValidateParam(this.SmtpAddresses, "smtpAddresses");
    EwsUtilities.ValidateParam(this.Settings, "settings");

    if (this.Settings.length == 0) {
      throw new ServiceValidationException(
        Strings.InvalidAutodiscoverSettingsCount
      );
    }

    if (this.SmtpAddresses.length == 0) {
      throw new ServiceValidationException(
        Strings.InvalidAutodiscoverSmtpAddressesCount
      );
    }

    for (let smtpAddress of this.SmtpAddresses) {
      if (StringHelper.IsNullOrEmpty(smtpAddress)) {
        throw new ServiceValidationException(Strings.InvalidAutodiscoverSmtpAddress);
      }
    }
  }

  /**
   * @internal Writes attributes to request XML.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteAttributeValue(
      "xmlns",
      EwsUtilities.AutodiscoverSoapNamespacePrefix,
      EwsUtilities.AutodiscoverSoapNamespace);
  }

  /**
   * @internal Writes elements to request XML.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): any {
    writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Request);

    writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Users);

    for (var s = 0; s < this.SmtpAddresses.length; s++) {
      var smtpAddress = this.SmtpAddresses[s];
      writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.User);

      if (!StringHelper.IsNullOrEmpty(smtpAddress)) {
        writer.WriteElementValue(
          XmlNamespace.Autodiscover,
          XmlElementNames.Mailbox,
          smtpAddress);
      }
      writer.WriteEndElement(); // User
    }
    writer.WriteEndElement(); // Users

    writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.RequestedSettings);
    for (var s = 0; s < this.Settings.length; s++) {
      var setting = this.Settings[s];

      writer.WriteElementValue(
        XmlNamespace.Autodiscover,
        XmlElementNames.Setting,
        UserSettingName[setting]);
    }

    writer.WriteEndElement(); // RequestedSettings

    writer.WriteEndElement(); // Request
  }

  /**
   * @internal Write extra headers.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer
   */
  WriteExtraCustomSoapHeadersToXml(writer: EwsServiceXmlWriter): void {

    if (this.expectPartnerToken) {
      EwsLogging.Assert(false, "GetUserSettingsRequest.WriteExtraCustomSoapHeadersToXml", "Partner tokens not implemented")
      debugger;
      // writer.WriteElementValue(
      //    XmlNamespace.Autodiscover,
      //    XmlElementNames.BinarySecret,
      //    btoa(ExchangeServiceBase.SessionKey));
      //    //System.Convert.ToBase64String(ExchangeServiceBase.SessionKey));
    }
  }
}
