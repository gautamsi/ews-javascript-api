import { AutodiscoverErrorCode } from "../../Enumerations/AutodiscoverErrorCode";
import { Uri } from "../../Uri";
import { XmlElementNames } from "../../Core/XmlElementNames";

/**
 * Represents the base class for all responses returned by the Autodiscover service.
 */
export abstract class AutodiscoverResponse {
  private errorCode: AutodiscoverErrorCode = AutodiscoverErrorCode.NoError;
  private errorMessage: string;
  private redirectionUrl: Uri;

  /**
   * Gets the error code that was returned by the service.
   */
  get ErrorCode(): AutodiscoverErrorCode {
    return this.errorCode;
  }
  /** @internal */
  set ErrorCode(value) {
    this.errorCode = value;
  }

  /**
   * Gets the error message that was returned by the service.
   */
  get ErrorMessage(): string {
    return this.errorMessage;
  }
  /** @internal */
  set ErrorMessage(value) {
    this.errorMessage = value;
  }

  /**
   * @internal Gets or sets the redirection URL.
   */
  get RedirectionUrl(): Uri {
    return this.redirectionUrl;
  }
  set RedirectionUrl(value) {
    this.redirectionUrl = value;
  }

  /**
   * @internal Loads service object from XML.
   *
   * @param   {any} responseObject  Json Object converted from XML.
   */
  LoadFromXmlJsObject(jsObject: any): void {
    var errorstring: string = jsObject[XmlElementNames.ErrorCode];
    this.errorCode = AutodiscoverErrorCode[errorstring];

    var errmsg = jsObject[XmlElementNames.ErrorMessage]
    this.errorMessage = errmsg;
  }
}
