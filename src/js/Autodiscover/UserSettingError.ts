import { AutodiscoverErrorCode } from "../Enumerations/AutodiscoverErrorCode";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents an error from a GetUserSettings request.
 * @sealed
 */
export class UserSettingError {
  private errorCode: AutodiscoverErrorCode;
  private errorMessage: string;
  private settingName: string;

  /**
   * Gets the error code.
   */
  get ErrorCode(): AutodiscoverErrorCode {
    return this.errorCode;
  }
  /** @internal */
  set ErrorCode(value) {
    this.errorCode = value;
  }

  /**
   * Gets the error message.
   */
  get ErrorMessage(): string {
    return this.errorMessage;
  }
  /** @internal */
  set ErrorMessage(value) {
    this.errorMessage = value;
  }

  /**
   * Gets the name of the setting.
   */
  get SettingName(): string {
    return this.settingName;
  }
  /** @internal */
  set SettingName(value) {
    this.settingName = value;
  }

  /**
   * @internal Initializes a new instance of the **UserSettingError** class.
   */
  constructor();
  /**
   * @internal Initializes a new instance of the **UserSettingError** class.
   *
   * @param   {AutodiscoverErrorCode}   errorCode      The error code.
   * @param   {string}                  errorMessage   The error message.
   * @param   {string}                  settingName    Name of the setting.
   */
  constructor(errorCode: AutodiscoverErrorCode, errorMessage: string, settingName: string);
  constructor(errorCode: AutodiscoverErrorCode = AutodiscoverErrorCode.NoError, errorMessage: string = null, settingName: string = null) {
    this.errorCode = errorCode;
    this.errorMessage = errorMessage;
    this.settingName = settingName;
  }

  /**
   * @internal Loads settings error from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(jsObject: any): any {
    var errorstring: string = jsObject[XmlElementNames.ErrorCode];
    this.errorCode = AutodiscoverErrorCode[errorstring] || AutodiscoverErrorCode.NoError;
    this.errorMessage = jsObject[XmlElementNames.ErrorMessage] || null;
    this.settingName = jsObject[XmlElementNames.SettingName] || null;
  }
}
