import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents the email Protocol connection settings for pop/imap/smtp protocols.
 * @sealed
 */
export class ProtocolConnection {
  private encryptionMethod: string;
  private hostname: string;
  private port: number;

  /**
   * Gets or sets the encryption method.
   */
  get EncryptionMethod(): string {
    return this.encryptionMethod;
  }
  set EncryptionMethod(value: string) {
    this.encryptionMethod = value;
  }

  /**
   * Gets or sets the Hostname.
   */
  get Hostname(): string {
    return this.hostname;
  }
  set Hostname(value: string) {
    this.hostname = value;
  }

  /**
   * Gets or sets the port number.
   */
  get Port(): number {
    return this.port;
  }
  set Port(value: number) {
    this.port = value;
  }

  /**
   * @internal Initializes a new instance of the **ProtocolConnection** class.
   */
  constructor();
  /**
   * @internal Initializes a new instance of the **ProtocolConnection** class.
   *
   * @param   {string}   encryptionMethod   The encryption method.
   * @param   {string}   hostname           The hostname.
   * @param   {number}   port               The port number to use for the portocol.
   */
  constructor(encryptionMethod: string, hostname: string, port: number);
  constructor(encryptionMethod: string = null, hostname: string = null, port: number = 0) {
    this.encryptionMethod = encryptionMethod;
    this.hostname = hostname;
    this.port = port;
  }

  /**
   * @internal Read user setting with ProtocolConnectionCollection value.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   */
  static LoadFromXmlJsObject(jsObject: any): ProtocolConnection {
    const connection = new ProtocolConnection();
    connection.encryptionMethod = jsObject[XmlElementNames.EncryptionMethod] || null;
    connection.hostname = jsObject[XmlElementNames.Hostname] || null;
    connection.port = parseInt(jsObject[XmlElementNames.Port]) || 0;
    return connection;
  }
}
