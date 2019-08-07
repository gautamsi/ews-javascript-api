import { ProtocolConnection } from "./ProtocolConnection";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a user setting that is a collection of protocol connection.
 * @sealed
 */
export class ProtocolConnectionCollection {
  private connections: ProtocolConnection[];

  get Connections(): ProtocolConnection[] {
    return this.connections;
  }
  set Connections(value) {
    this.connections = value;
  }

  /**
   * @internal Initializes a new instance of the **ProtocolConnectionCollection** class.
   */
  constructor() {
    this.connections = []
  }

  /**
   * @internal Read user setting with ProtocolConnectionCollection value.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   * @returns {ProtocolConnectionCollection}
   */
  static LoadFromXmlJsObject(jsObject: any): ProtocolConnectionCollection {
    const value = new ProtocolConnectionCollection();

    const element = XmlElementNames.ProtocolConnection;
    let responses = undefined;
    if (Array.isArray(jsObject[element]))
      responses = jsObject[element];
    else
      responses = [jsObject[element]];

    for (let i = 0; i < responses.length; i++) {
      const connection = ProtocolConnection.LoadFromXmlJsObject(responses[i])
      value.Connections.push(connection);
    }

    return value;
  }
}
