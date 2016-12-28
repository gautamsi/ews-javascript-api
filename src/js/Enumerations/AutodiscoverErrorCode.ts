
/**
 * Defines the error codes that can be returned by the Autodiscover service.
 */
export enum AutodiscoverErrorCode {
  
  /**
   * There was no Error.
   */
  NoError = 0,
  
  /**
   * The caller must follow the e-mail address redirection that was returned by Autodiscover.
   */
  RedirectAddress = 1,
  
  /**
   * The caller must follow the URL redirection that was returned by Autodiscover.
   */
  RedirectUrl = 2,
  
  /**
   * The user that was passed in the request is invalid.
   */
  InvalidUser = 3,
  
  /**
   * The request is invalid.
   */
  InvalidRequest = 4,
  
  /**
   * A specified setting is invalid.
   */
  InvalidSetting = 5,
  
  /**
   * A specified setting is not available.
   */
  SettingIsNotAvailable = 6,
  
  /**
   * The server is too busy to process the request.
   */
  ServerBusy = 7,
  
  /**
   * The requested domain is not valid.
   */
  InvalidDomain = 8,
  
  /**
   * The organization is not federated.
   */
  NotFederated = 9,
  
  /**
   * Internal server error.
   */
  InternalServerError = 10
}