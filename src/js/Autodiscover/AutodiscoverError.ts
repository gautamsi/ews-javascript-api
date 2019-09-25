import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents an error returned by the Autodiscover service.
 * @sealed
 */
export class AutodiscoverError {
  private time: string;
  private id: string;
  private errorCode: number;
  private message: string;
  private debugData: string;

  /**
   * Gets the time when the error was returned.
   */
  get Time(): string {
    return this.time;
  }

  /**
   * Gets a hash of the name of the computer that is running Microsoft Exchange Server that has the Client Access server role installed.
   */
  get Id(): string {
    return this.id;
  }

  /**
   * Gets the error code.
   */
  get ErrorCode(): number {
    return this.errorCode;
  }

  /**
   * Gets the error message.
   */
  get Message(): string {
    return this.message;
  }

  /**
   * Gets the debug data.
   */
  get DebugData(): string {
    return this.debugData;
  }

  /**
   * Initializes a new instance of the **AutodiscoverError** class.
   */
  private constructor() {
  }

  /**
   * Parses the XML Js Object creates an Autodiscover error.
   *
   * @param   {any}   jsObject   The object.
   * @return  {AutodiscoverError}            An Autodiscover error.
   */
  Parse(jsObject: any): AutodiscoverError {
    const error = new AutodiscoverError();
    error.time = jsObject[XmlAttributeNames.Time] || null;
    error.id = jsObject[XmlAttributeNames.Id] || null;
    error.errorCode = parseInt(jsObject[XmlElementNames.ErrorCode]) || 0;
    error.message = jsObject[XmlElementNames.Message] || null;
    error.debugData = jsObject[XmlElementNames.DebugData] || null;

    return error;
  }
}
