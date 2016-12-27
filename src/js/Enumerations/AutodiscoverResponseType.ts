
/**
 * @internal Defines the types of response the Autodiscover service can return.
 */
export enum AutodiscoverResponseType {
  
  /**
   * The request returned an error.
   */
  Error = 0,
  
  /**
   * A URL redirection is necessary.
   */
  RedirectUrl = 1,
  
  /**
   * An address redirection is necessary.
   */
  RedirectAddress = 2,
  
  /**
   * The request succeeded.
   */
  Success = 3
}