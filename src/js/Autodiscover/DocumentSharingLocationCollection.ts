import { DocumentSharingLocation } from "./DocumentSharingLocation";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a user setting that is a collection of alternate mailboxes.
 * @sealed
 */
export class DocumentSharingLocationCollection {
  
  private entries: DocumentSharingLocation[];

  /**
   * Gets the collection of alternate mailboxes.
   */
  get Entries(): DocumentSharingLocation[] {
    return this.entries
  }

  /**
  * @internal Initializes a new instance of the **DocumentSharingLocationCollection** class.
  */
  constructor() {
    this.entries = [];
  }

  /**
   * @internal Loads instance of DocumentSharingLocationCollection.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   * @returns {DocumentSharingLocationCollection}
   */
  static LoadFromXmlJsObject(jsObject: any): DocumentSharingLocationCollection {
    const instance = new DocumentSharingLocationCollection();

    const element = XmlElementNames.DocumentSharingLocation;
    let responses = undefined;
    if (Array.isArray(jsObject[element]))
      responses = jsObject[element];
    else
      responses = [jsObject[element]];

    for (let i = 0; i < responses.length; i++) {
      instance.Entries.push(DocumentSharingLocation.LoadFromXmlJsObject(responses[i]));
    }

    return instance;

  }
}
