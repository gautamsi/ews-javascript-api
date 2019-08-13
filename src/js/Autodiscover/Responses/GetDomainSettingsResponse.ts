import { Dictionary } from "../../AltDictionary";
import { DomainSettingError } from "../DomainSettingError";
import { DomainSettingName } from "../../Enumerations/DomainSettingName";
import { EwsLogging } from "../../Core/EwsLogging";
import { StringHelper, isNullOrUndefined } from "../../ExtensionMethods";
import { XmlElementNames } from "../../Core/XmlElementNames";

import { AutodiscoverResponse } from "./AutodiscoverResponse";
/**
 * Represents the response to a GetDomainSettings call for an individual domain.
 * @sealed
 */
export class GetDomainSettingsResponse extends AutodiscoverResponse {
  private domain: string = null;
  private redirectTarget: string = null;
  private settings: Dictionary<DomainSettingName, any> = null;
  private domainSettingErrors: DomainSettingError[] = null;

  /**
   * Gets the domain this response applies to.
   */
  get Domain(): string {
    return this.domain;
  }
  /** @internal */
  set Domain(value: string) {
    this.domain = value;
  }

  /**
   * Gets the redirectionTarget (URL or email address)
   */
  get RedirectTarget(): string {
    return this.redirectTarget;
  }

  /**
   * Gets the requested settings for the domain.
   */
  get Settings(): Dictionary<DomainSettingName, any> {
    return this.settings;
  }

  /**
   * Gets error information for settings that could not be returned.
   */
  get DomainSettingErrors(): DomainSettingError[] {
    return this.domainSettingErrors;
  }

  /**
   * Initializes a new instance of the **GetDomainSettingsResponse** class.
   */
  constructor() {
    super();
    this.domain = StringHelper.Empty;
    this.settings = new Dictionary<DomainSettingName, any>((value) => value.toString());
    this.domainSettingErrors = [];
  }

  /**
   * Loads the domain setting errors.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  private LoadDomainSettingErrorsFromXmlJsObject(jsObject: any): void {
    var errors: any = undefined;

    if (isNullOrUndefined(jsObject) || isNullOrUndefined(jsObject[XmlElementNames.DomainSettingError])) return;

    if (Array.isArray(jsObject[XmlElementNames.DomainSettingError]))
      errors = jsObject[XmlElementNames.DomainSettingError];
    else
      errors = [jsObject[XmlElementNames.DomainSettingError]];

    for (var i = 0; i < errors.length; i++) {
      var error = new DomainSettingError();
      error.LoadFromXmlJsObject(errors[i]);
      this.DomainSettingErrors.push(error);
    }

  }

  /**
   * @internal Loads setting from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  LoadDomainSettingsFromXmlJsObject(obj: any): void {
    var settings: any = undefined;

    if (typeof (obj[XmlElementNames.DomainSetting]) === 'undefined') return;

    if (Object.prototype.toString.call(obj[XmlElementNames.DomainSetting]) === "[object Array]")
      settings = obj[XmlElementNames.DomainSetting];
    else
      settings = [obj[XmlElementNames.DomainSetting]];

    for (var i = 0; i < settings.length; i++) {
      var setting = settings[i];
      var settingClass = setting["type"];
      switch (settingClass) {
        case XmlElementNames.DomainStringSetting:
          this.ReadSettingFromXmlJsObject(setting);
          break;

        default:
          EwsLogging.Assert(
            false,
            "GetUserSettingsResponse.LoadUserSettingsFromXml",
            StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
          break;
      }
    }
  }

  /**
   * @internal Load from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(jsObject: any): void {
    super.LoadFromXmlJsObject(jsObject);
    var settingscol = jsObject[XmlElementNames.DomainSettings];
    this.LoadDomainSettingsFromXmlJsObject(settingscol);
    this.redirectTarget = jsObject[XmlElementNames.RedirectTarget] || null;
    this.LoadDomainSettingErrorsFromXmlJsObject(jsObject[XmlElementNames.DomainSettingErrors]);
  }

  /**
   * Reads domain setting from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  private ReadSettingFromXmlJsObject(obj: any): void {
    var name: string = obj[XmlElementNames.Name];
    var value: any = obj[XmlElementNames.Value];

    // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
    var domainSettingName: DomainSettingName = DomainSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
    if (domainSettingName !== undefined)
      this.Settings.Add(domainSettingName, value);
    else
      EwsLogging.Assert(false,
        "GetUserSettingsResponse.ReadSettingFromObject",
        "Unexpected or empty name element in user setting");
  }

}
