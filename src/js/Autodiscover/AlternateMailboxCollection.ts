import { AlternateMailbox } from "./AlternateMailbox";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a user setting that is a collection of alternate mailboxes.
 * @sealed
 */
export class AlternateMailboxCollection {
  entries: AlternateMailbox[] = [];

  /**
   * Gets the collection of alternate mailboxes.
   */
  get Entries(): AlternateMailbox[] {
    return this.entries;
  }
  /** @private set */
  set Entries(value) {
    this.entries = value;
  }

  /**
   * @internal Loads instance of AlternateMailboxCollection.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   * @returns {AlternateMailboxCollection}
   */
  static LoadFromXmlJsObject(obj: any): AlternateMailboxCollection {
    const instance = new AlternateMailboxCollection();

    const element = XmlElementNames.AlternateMailbox;
    let responses = undefined;
    if (Array.isArray(obj[element]))
      responses = obj[element];
    else
      responses = [obj[element]];

    for (let i = 0; i < responses.length; i++) {
      instance.Entries.push(AlternateMailbox.LoadFromXmlJsObject(responses[i]));
    }

    return instance;
  }
}
