import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetPasswordExpirationDateResponse } from "../Responses/GetPasswordExpirationDateResponse";
import { Promise } from "../../Promise";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/** @internal */
export class GetPasswordExpirationDateRequest extends SimpleServiceRequestBase { //IJsonSerializable
  private mailboxSmtpAddress: string = null;
  get MailboxSmtpAddress(): string {
    return this.mailboxSmtpAddress;
  }
  set MailboxSmtpAddress(value: string) {
    this.mailboxSmtpAddress = value;
  }
  constructor(service: ExchangeService) {
    super(service);
  }

  async Execute(): Promise<GetPasswordExpirationDateResponse> {
    const serviceResponse: GetPasswordExpirationDateResponse = await this.InternalExecute();
    serviceResponse.ThrowIfNecessary();
    return serviceResponse;
  }
  GetMinimumRequiredServerVersion(): ExchangeVersion {
    return ExchangeVersion.Exchange2010_SP1;
  }
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetPasswordExpirationDateResponse;
  }
  GetXmlElementName(): string {
    return XmlElementNames.GetPasswordExpirationDateRequest;
  }
  //ParseResponse(reader: any): any { throw new Error("GetPasswordExpirationDateRequest.ts - ParseResponse : Not implemented."); }
  ParseResponse(jsonBody: any): any {
    var serviceResponse: GetPasswordExpirationDateResponse = new GetPasswordExpirationDateResponse();
    serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
    return serviceResponse;
  }
  /**@internal */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.MailboxSmtpAddress, this.MailboxSmtpAddress);
  }
}
