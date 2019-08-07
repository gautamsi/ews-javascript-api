import { AlternateMailboxCollection } from "../AlternateMailboxCollection";
import { Dictionary } from "../../AltDictionary";
import { DocumentSharingLocationCollection } from "../DocumentSharingLocationCollection";
import { EwsLogging } from "../../Core/EwsLogging";
import { ProtocolConnectionCollection } from "../ProtocolConnectionCollection";
import { StringHelper, isNullOrUndefined } from "../../ExtensionMethods";
import { UserSettingError } from "../UserSettingError";
import { UserSettingName } from "../../Enumerations/UserSettingName";
import { WebClientUrlCollection } from "../WebClientUrlCollection";
import { XmlElementNames } from "../../Core/XmlElementNames";

import { AutodiscoverResponse } from "./AutodiscoverResponse";
/**
 * Represents the response to a GetUsersSettings call for an individual user.
 * @sealed
 */
export class GetUserSettingsResponse extends AutodiscoverResponse {
  private smtpAddress: string = null;
  private redirectTarget: string = null;
  private settings: Dictionary<UserSettingName, any> = null;
  private userSettingErrors: UserSettingError[] = null;

  /**
   * Gets the SMTP address this response applies to.
   */
  get SmtpAddress(): string {
    return this.smtpAddress;
  }
  /** @internal */
  set SmtpAddress(value) {
    this.smtpAddress = value;
  }

  /**
   * Gets the redirectionTarget (URL or email address)
   */
  get RedirectTarget(): string {
    return this.redirectTarget;
  }
  /** @internal */
  set RedirectTarget(value) {
    this.redirectTarget = value
  }

  /**
   * Gets the requested settings for the user.
   */
  get Settings(): Dictionary<UserSettingName, any> {
    return this.settings;
  }
  /** @internal */
  set Settings(value) {
    this.settings = value;
  }

  /**
   * Gets error information for settings that could not be returned.
   */
  get UserSettingErrors(): UserSettingError[] {
    return this.userSettingErrors;
  }
  /** @internal */
  set UserSettingErrors(value) {
    this.userSettingErrors = value;
  }

  /**
   * Initializes a new instance of the **GetUserSettingsResponse** class.
   */
  constructor() {
    super();
    this.smtpAddress = StringHelper.Empty;
    this.settings = new Dictionary<UserSettingName, any>(value => value.toString());
    this.userSettingErrors = [];
  }

  /**
   * @internal Load from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(jsObject: any): void {
    super.LoadFromXmlJsObject(jsObject);
    var settingscol = jsObject[XmlElementNames.UserSettings];
    this.LoadUserSettingsFromXmlJsObject(settingscol);
    this.redirectTarget = jsObject[XmlElementNames.RedirectTarget] || null;
    this.LoadUserSettingErrorsFromXmlJsObject(jsObject[XmlElementNames.UserSettingErrors]);

  }

  /**
   * Loads the user setting errors.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  private LoadUserSettingErrorsFromXmlJsObject(jsObject: any): void {
    var errors: any = undefined;

    if (isNullOrUndefined(jsObject) || isNullOrUndefined(jsObject[XmlElementNames.UserSettingError])) return;

    if (Array.isArray(jsObject[XmlElementNames.UserSettingError]))
      errors = jsObject[XmlElementNames.UserSettingError];
    else
      errors = [jsObject[XmlElementNames.UserSettingError]];

    for (var i = 0; i < errors.length; i++) {
      var error = new UserSettingError();
      error.LoadFromXmlJsObject(errors[0]);
      this.UserSettingErrors.push(error);
    }
  }


  /**
   * @internal Loads setting from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  LoadUserSettingsFromXmlJsObject(jsObject: any): void {
    var settings: any = undefined;

    if (!jsObject || typeof (jsObject[XmlElementNames.UserSetting]) === 'undefined')
      return;

    if (Object.prototype.toString.call(jsObject[XmlElementNames.UserSetting]) === "[object Array]")
      settings = jsObject[XmlElementNames.UserSetting];
    else
      settings = [jsObject[XmlElementNames.UserSetting]];

    for (var i = 0; i < settings.length; i++) {
      var setting = settings[i];
      var settingClass = setting["type"];
      switch (settingClass) {
        case XmlElementNames.StringSetting:
        case XmlElementNames.WebClientUrlCollectionSetting:
        case XmlElementNames.AlternateMailboxCollectionSetting:
        case XmlElementNames.ProtocolConnectionCollectionSetting:
        case XmlElementNames.DocumentSharingLocationCollectionSetting:
          this.ReadSettingFromXmlJsObject(setting);
          break;

        default:
          EwsLogging.Assert(false,
            "GetUserSettingsResponse.LoadUserSettingsFromXml",
            StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
          break;
      }
    }

  }

  /**
   * Reads user setting from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  ReadSettingFromXmlJsObject(jsObject: any): void {
    var name: string = jsObject[XmlElementNames.Name];
    var value: any = jsObject[XmlElementNames.Value];

    switch (jsObject["type"]) {
      case XmlElementNames.WebClientUrlCollectionSetting://.WebClientUrls:
        value = WebClientUrlCollection.LoadFromXmlJsObject(jsObject[XmlElementNames.WebClientUrls]);
        break;
      case XmlElementNames.ProtocolConnectionCollectionSetting://ProtocolConnections:
        value = ProtocolConnectionCollection.LoadFromXmlJsObject(jsObject[XmlElementNames.ProtocolConnections]);
        break;
      case XmlElementNames.AlternateMailboxCollectionSetting://AlternateMailboxes:
        value = AlternateMailboxCollection.LoadFromXmlJsObject(jsObject[XmlElementNames.AlternateMailboxes]);
        break;
      case XmlElementNames.DocumentSharingLocationCollectionSetting://DocumentSharingLocations:
        //debugger;
        EwsLogging.Log("------------DocumentSharingLocationCollection needs test and fix ----------------", true);
        EwsLogging.Log(jsObject, true, true);
        value = DocumentSharingLocationCollection.LoadFromJson(jsObject);
        break;
    }

    // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
    var userSettingName: UserSettingName = UserSettingName[name];// EwsUtilities.Parse<UserSettingName>(name);
    if (userSettingName !== undefined)
      this.Settings[userSettingName] = value;
    else
      EwsLogging.Assert(false,
        "GetUserSettingsResponse.ReadSettingFromXml",
        "Unexpected or empty name element in user setting");
  }

  /**
   * Tries the get the user setting value.
   *
   * @param   {UserSettingName}   setting   The setting.
   * @return  {T}  The setting value.
   */
  GetSettingValue<T>(setting: UserSettingName): T {
    //public bool TryGetSettingValue<T>(UserSettingName setting, out T value)
    return this.Settings.get(setting);
  }
}
