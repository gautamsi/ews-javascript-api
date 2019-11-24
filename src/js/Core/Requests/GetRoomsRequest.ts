import { EmailAddress } from "../../ComplexProperties/EmailAddress";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetRoomsResponse } from "../Responses/GetRoomsResponse";
import { Promise } from "../../Promise";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a GetRooms request.
 *
 * @sealed
 */
export class GetRoomsRequest extends SimpleServiceRequestBase {
  private roomList: EmailAddress = null;

  /**
   * @internal Gets or sets the room list to retrieve rooms from.
   */
  get RoomList(): EmailAddress {
    return this.roomList;
  }
  set RoomList(value: EmailAddress) {
    this.roomList = value;
  }

  /**
   * @internal Initializes a new instance of the **GetRoomsRequest** class.
   *
   * @param   {service}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<GetRoomsResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<GetRoomsResponse> {
    const serviceResponse: GetRoomsResponse = await this.InternalExecute();
    serviceResponse.ThrowIfNecessary();
    return serviceResponse;
  }

  /**
   * @internal Gets the request version.
   *
   * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
   */
  GetMinimumRequiredServerVersion(): ExchangeVersion {
    return ExchangeVersion.Exchange2010;
  }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      XML element name.
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.GetRoomsResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.GetRoomsRequest;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: GetRoomsResponse = new GetRoomsResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    //this.RoomList.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.RoomList);
    this.RoomList.WriteToXml(writer, XmlElementNames.RoomList, XmlNamespace.Messages); //info: temp workaround github #52
  }
}
