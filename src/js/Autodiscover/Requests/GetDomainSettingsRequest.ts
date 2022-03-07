import { AutodiscoverErrorCode } from "../../Enumerations/AutodiscoverErrorCode";
import { AutodiscoverResponse } from "../Responses/AutodiscoverResponse";
import { AutodiscoverService } from "../AutodiscoverService";
import { DomainSettingName } from "../../Enumerations/DomainSettingName";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetDomainSettingsResponseCollection } from "../Responses/GetDomainSettingsResponseCollection";
import { hasValue, StringHelper } from "../../ExtensionMethods";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { Strings } from "../../Strings";
import { Uri } from "../../Uri";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { AutodiscoverRequest } from "./AutodiscoverRequest";
/**
 * @internal Represents a GetDomainSettings request.
 */
export class GetDomainSettingsRequest extends AutodiscoverRequest {
  /**
   * Action Uri of Autodiscover.GetDomainSettings method.
   */
  private static GetDomainSettingsActionUri: string = `${EwsUtilities.AutodiscoverSoapNamespace}/Autodiscover/GetDomainSettings`;

  private domains: string[];
  private settings: DomainSettingName[];
  private requestedVersion: ExchangeVersion;

  /**
   * @internal Gets or sets the domains.
   */
  get Domains(): string[] {
    return this.domains;
  }
  set Domains(value) {
    this.domains = value;
  }

  /**
   * @internal Gets or sets the settings.
   */
  get Settings(): DomainSettingName[] {
    return this.settings;
  }
  set Settings(value) {
    this.settings = value;
  }

  /**
   * @internal Gets or sets the RequestedVersion.
   */
  get RequestedVersion(): ExchangeVersion {
    return this.requestedVersion;
  }
  set RequestedVersion(value) {
    this.requestedVersion = value;
  }

  /**
   * @internal Initializes a new instance of the **GetDomainSettingsRequest** class.
   *
   * @param   {AutodiscoverService}   service   Autodiscover service associated with this request.
   * @param   {Uri}                   url       URL of Autodiscover service.
   */
  constructor(service: AutodiscoverService, url: Uri) {
    super(service, url);
  }

  /**
   * @internal Creates the service response.
   *
   * @return  {AutodiscoverResponse}      AutodiscoverResponse
   */
  CreateServiceResponse(): AutodiscoverResponse {
    return new GetDomainSettingsResponseCollection();

  }

  /**
   * @internal Executes this instance.
   *
   * @return  {Promise<GetDomainSettingsResponseCollection>}      [description]
   */
  async Execute(): Promise<GetDomainSettingsResponseCollection> {
    const responses: GetDomainSettingsResponseCollection = await this.InternalExecute() as GetDomainSettingsResponseCollection;

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
    return XmlElementNames.GetDomainSettingsRequestMessage;
  }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      [description]
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetDomainSettingsResponseMessage;
  }

  /**
   * @internal Gets the WS-Addressing action name.
   *
   * @return  {string}      [description]
   */
  GetWsAddressingActionName(): string {
    return GetDomainSettingsRequest.GetDomainSettingsActionUri;
  }

  /**
   * Post-process responses to GetDomainSettings.
   *
   * @param   {GetDomainSettingsResponseCollection}   responses   The GetDomainSettings responses.
   */
  private PostProcessResponses(responses: GetDomainSettingsResponseCollection): void {
    // Note:The response collection may not include all of the requested domains if the request has been throttled.
    for (var index = 0; index < responses.Count; index++) {
      responses.Responses[index].Domain = this.Domains[index];
    }
  }

  /**
   * @internal Validates the request.
   */
  Validate(): void {
    super.Validate();
    if (this.settings.length == 0) {
      throw new ServiceValidationException(Strings.InvalidAutodiscoverSettingsCount);
    }

    if (this.domains.length == 0) {
      throw new ServiceValidationException(Strings.InvalidAutodiscoverDomainsCount);
    }

    for (let domain of this.domains) {
      if (StringHelper.IsNullOrEmpty(domain)) {
        throw new ServiceValidationException(Strings.InvalidAutodiscoverDomain);
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
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Request);

    writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.Domains);

    for (var domain of this.Domains) {

      if (!StringHelper.IsNullOrEmpty(domain)) {
        writer.WriteElementValue(
          XmlNamespace.Autodiscover,
          XmlElementNames.Domain,
          domain);
      }
    }
    writer.WriteEndElement(); //Domains

    writer.WriteStartElement(XmlNamespace.Autodiscover, XmlElementNames.RequestedSettings);
    for (var setting of this.Settings) {

      writer.WriteElementValue(
        XmlNamespace.Autodiscover,
        XmlElementNames.Setting,
        DomainSettingName[setting]);
    }

    writer.WriteEndElement(); //RequestedSettings

    if (hasValue(this.requestedVersion)) {
      writer.WriteElementValue(XmlNamespace.Autodiscover,
        XmlElementNames.RequestedVersion,
        this.requestedVersion);
    }

    writer.WriteEndElement(); //Request
  }
}
