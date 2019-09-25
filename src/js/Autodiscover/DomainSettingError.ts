import { AutodiscoverErrorCode } from "../Enumerations/AutodiscoverErrorCode";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents an error from a GetDomainSettings request.
 * @sealed
 */
export class DomainSettingError {
  private errorCode: AutodiscoverErrorCode;
  private errorMessage: string;
  private settingName: string;

  /**
   * Gets the error code.
   */
  get ErrorCode(): AutodiscoverErrorCode {
    return this.errorCode;
  }

  /**
   * Gets the error message.
   */
  get ErrorMessage(): string {
    return this.errorMessage;
  }

  /**
   * Gets the name of the setting.
   */
  get SettingName(): string {
    return this.settingName;
  }

  /**
   * @internal Initializes a new instance of the **DomainSettingError** class.
   */
  constructor() {
  }

  /**
   * @internal Loads settings error from XML jsObject.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(jsObject: any): void {
    const errorstring: string = jsObject[XmlElementNames.ErrorCode];
    this.errorCode = AutodiscoverErrorCode[errorstring] || AutodiscoverErrorCode.NoError;
    this.errorMessage = jsObject[XmlElementNames.ErrorMessage] || null;
    this.settingName = jsObject[XmlElementNames.SettingName] || null;
  }
}
