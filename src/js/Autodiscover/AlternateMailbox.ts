import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents an alternate mailbox.
 * @sealed
 */
export class AlternateMailbox {
  private type: string;
  private displayName: string;
  private legacyDN: string;
  private server: string;
  private smtpAddress: string;
  private ownerSmtpAddress: string;

  /**
   * Gets the alternate mailbox type.
   */
  get Type(): string {
    return this.type;
  }
  /** @internal set */
  set Type(value: string) {
    this.type = value;
  }

  /**
   * Gets the alternate mailbox display name.
   */
  get DisplayName(): string {
    return this.displayName;
  }
  /** @internal set */
  set DisplayName(value: string) {
    this.displayName = value;
  }

  /**
   * Gets the alternate mailbox legacy DN.
   */
  get LegacyDN(): string {
    return this.legacyDN;
  }
  /** @internal set */
  set LegacyDN(value: string) {
    this.legacyDN = value;
  }

  /**
   * Gets the alernate mailbox server.
   */
  get Server(): string {
    return this.server;
  }
  /** @internal set */
  set Server(value: string) {
    this.server = value;
  }

  /**
   * Gets the alternate mailbox address.
   * It has value only when Server and LegacyDN is empty.
   */
  get SmtpAddress(): string {
    return this.smtpAddress;
  }
  /** @internal set */
  set SmtpAddress(value: string) {
    this.smtpAddress = value;
  }

  /**
   * Gets the alternate mailbox owner SmtpAddress.
   */
  get OwnerSmtpAddress(): string {
    return this.ownerSmtpAddress;
  }
  /** @internal set */
  set OwnerSmtpAddress(value: string) {
    this.ownerSmtpAddress = value;
  }

  /**
   * Initializes a new instance of the **AlternateMailbox** class.
   */
  private constructor() {
  }
  
  /**
   * @internal Loads AlternateMailbox instance.
   *
   * @param   {any} jsObject  Json Object converted from XML.
   * @returns {AlternateMailbox}  AlternateMailbox.
   */
  static LoadFromXmlJsObject(jsObject: any): AlternateMailbox {
    const altMailbox = new AlternateMailbox();

    altMailbox.Type = jsObject[XmlElementNames.Type] || null;
    altMailbox.DisplayName = jsObject[XmlElementNames.DisplayName] || null;
    altMailbox.LegacyDN = jsObject[XmlElementNames.DisplayName] || null;
    altMailbox.Server = jsObject[XmlElementNames.DisplayName] || null;
    altMailbox.SmtpAddress = jsObject[XmlElementNames.DisplayName] || null;
    altMailbox.OwnerSmtpAddress = jsObject[XmlElementNames.DisplayName] || null;

    return altMailbox;
  }
}
