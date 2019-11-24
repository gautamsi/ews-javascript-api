import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { Promise } from "../../Promise";
import { Mailbox } from "../../ComplexProperties/Mailbox";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { DelegateManagementResponse } from "../Responses/DelegateManagementResponse";
import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents an abstract delegate management request.
 *
 * @typeparam   {TResponse}     The type of the response.
 */
export abstract class DelegateManagementRequestBase<TResponse extends DelegateManagementResponse> extends SimpleServiceRequestBase {
  private mailbox: Mailbox = null;

  /**
   *  Gets or sets the mailbox.
   *
   * @value    The mailbox.
   */
  get Mailbox(): Mailbox {
    return this.mailbox;
  }
  set Mailbox(value: Mailbox) {
    this.mailbox = value;
  }

  /**
   * @internal Initializes a new instance of the **DelegateManagementRequestBase<TResponse>** class.
   *
   * @param   {ExchangeService}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Creates the response
   *
   * @return  {TResponse}		Response object.
   */
  abstract CreateResponse(): TResponse;

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<TResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<TResponse> {
    const serviceResponse: TResponse = await this.InternalExecute();

    serviceResponse.ThrowIfNecessary();

    return serviceResponse;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: DelegateManagementResponse = this.CreateResponse();

    response.LoadFromXmlJsObject(jsonBody, this.Service);

    return response;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    super.Validate();
    EwsUtilities.ValidateParam(this.Mailbox, "Mailbox");
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    this.Mailbox.WriteToXml(
      writer,
      XmlElementNames.Mailbox,
      XmlNamespace.Messages);
  }
}
