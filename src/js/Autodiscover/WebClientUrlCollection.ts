import { WebClientUrl } from "./WebClientUrl";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a user setting that is a collection of Exchange web client URLs.
 * @sealed
 */
export class WebClientUrlCollection {

  private urls: WebClientUrl[] = null;

  /**
   * Gets the URLs.
   */
  get Urls(): WebClientUrl[] {
    return this.urls;
  }

  /**
   * @internal Initializes a new instance of the **WebClientUrlCollection** class.
   */
  constructor() {
    this.urls = [];
  }

  /**
   * @internal Loads instance of WebClientUrlCollection.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   * @returns {WebClientUrlCollection}
   */
  static LoadFromXmlJsObject(jsObject: any): WebClientUrlCollection {
    const instance = new WebClientUrlCollection();

    const element = XmlElementNames.WebClientUrl;
    let responses = undefined;
    if (Array.isArray(jsObject[element]))
      responses = jsObject[element];
    else
      responses = [jsObject[element]];

    for (let i = 0; i < responses.length; i++) {

      instance.Urls.push(WebClientUrl.LoadFromXmlJsObject(responses[i]));
    }

    return instance;
  }
}
