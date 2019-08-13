import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents the URL of the Exchange web client.
 * @sealed
 */
export class WebClientUrl {
  private authenticationMethods: string;
  private url: string;

  /**
   * Gets the authentication methods.
   */
  get AuthenticationMethods(): string {
    return this.authenticationMethods;
  }
  /** @internal set */
  set AuthenticationMethods(value: string) {
    this.authenticationMethods = value;
  }

  /**
   * Gets the URL.
   */
  get Url(): string {
    return this.url;
  }
  /** @internal set */
  set Url(value: string) {
    this.url = value;
  }

  /**
   * @internal Initializes a new instance of the **WebClientUrl** class.
   */
  constructor();
  /**
   * @internal Initializes a new instance of the **WebClientUrl** class.
   *
   * @param   {string}   authenticationMethods   The authentication methods.
   * @param   {string}   url                     The URL.
   */
  constructor(authenticationMethods: string, url: string);
  constructor(authenticationMethods: string = null, url: string = null) {
    this.authenticationMethods = authenticationMethods;
    this.url = url;
  }

  /**
   * @internal Loads WebClientUrl instance
   *
   * @param   {any} jsObject  Json Object converted from XML.
   * @returns {WebClientUrl}  WebClientUrl.
   */
  static LoadFromXmlJsObject(jsObject: any): WebClientUrl {
    const webClientUrl = new WebClientUrl();
    webClientUrl.AuthenticationMethods = jsObject[XmlElementNames.AuthenticationMethods];
    webClientUrl.Url = jsObject[XmlElementNames.Url];
    return webClientUrl;
  }
}
