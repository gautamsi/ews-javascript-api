import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { FindConversationResponse } from "../Responses/FindConversationResponse";
import { FolderIdWrapper } from "../../Misc/FolderIdWrapper";
import { MailboxSearchLocation } from "../../Enumerations/MailboxSearchLocation";
import { Promise } from "../../Promise";
import { SeekToConditionItemView } from "../../Search/SeekToConditionItemView";
import { ServiceObjectType } from "../../Enumerations/ServiceObjectType";
import { ServiceVersionException } from "../../Exceptions/ServiceVersionException";
import { StringHelper, hasValue } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { ViewBase } from "../../Search/ViewBase";
import { XmlAttributeNames } from "../XmlAttributeNames";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/**
 * @internal Represents a request to a Find Conversation operation
 *
 * @sealed
 */
export class FindConversationRequest extends SimpleServiceRequestBase { //IJsonSerializable

  private view: ViewBase = null;
  private folderId: FolderIdWrapper = null;
  private queryString: string = null;
  private returnHighlightTerms: boolean = false;
  private mailboxScope: MailboxSearchLocation = null;

  /**
   * Gets or sets the view controlling the number of conversations returned.
   */
  get View(): ViewBase {
    return this.view;
  }
  set View(value: ViewBase) {
    this.view = value;
    if (this.view instanceof SeekToConditionItemView) {
      (<SeekToConditionItemView>this.view).SetServiceObjectType(ServiceObjectType.Conversation);
    }
  }

  /**
   * @internal Gets or sets folder id
   */
  get FolderId(): FolderIdWrapper {
    return this.folderId;
  }
  set FolderId(value: FolderIdWrapper) {
    this.folderId = value;
  }

  /**
   * @internal Gets or sets the query string for search value.
   */
  get QueryString(): string {
    return this.queryString;
  }
  set QueryString(value: string) {
    this.queryString = value;
  }

  /**
   * @internal Gets or sets the query string highlight terms.
   */
  get ReturnHighlightTerms(): boolean {
    return this.returnHighlightTerms;
  }
  set ReturnHighlightTerms(value: boolean) {
    this.returnHighlightTerms = value;
  }

  /**
   * @internal Gets or sets the mailbox search location to include in the search.
   */
  get MailboxScope(): MailboxSearchLocation {
    return this.mailboxScope;
  }
  set MailboxScope(value: MailboxSearchLocation) {
    this.mailboxScope = value;
  }

  /**
   * @internal Initializes a new instance of the **FindConversationRequest** class.
   *
   * @param   {service}   service   The service.
   */
  constructor(service: ExchangeService) {
    super(service);
  }

  /**
   * @internal Executes this request.
   *
   * @return  {Promise<FindConversationResponse>}      Service response  :Promise.
   */
  async Execute(): Promise<FindConversationResponse> {
    const serviceResponse: FindConversationResponse = await this.InternalExecute();
    serviceResponse.ThrowIfNecessary();
    return serviceResponse;
  }

  /**
   * @internal Gets the request version.
   *
   * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
   */
  GetMinimumRequiredServerVersion(): ExchangeVersion {
    return ExchangeVersion.Exchange2010_SP1;
  }

  /**
   * @internal Gets the name of the response XML element.
   *
   * @return  {string}      XML element name.
   */
  GetResponseXmlElementName(): string {
    return XmlElementNames.FindConversationResponse;
  }

  /**
   * @internal Gets the name of the XML element.
   *
   * @return  {string}      XML element name.
   */
  GetXmlElementName(): string {
    return XmlElementNames.FindConversation;
  }

  /**
   * @internal Parses the response.
   *
   * @param   {any}   jsonBody   The js object response body.
   * @return  {any}              Response object.
   */
  ParseResponse(jsonBody: any): any {
    let response: FindConversationResponse = new FindConversationResponse();
    response.LoadFromXmlJsObject(jsonBody, this.Service);
    return response;
  }

  /**
   * @internal Validate request.
   */
  Validate(): void {
    super.Validate();
    this.view.InternalValidate(this);

    // query string parameter is only valid for Exchange2013 or higher
    //
    if (!StringHelper.IsNullOrEmpty(this.queryString) &&
    this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
      throw new ServiceVersionException(
        StringHelper.Format(
          Strings.ParameterIncompatibleWithRequestVersion,
          "queryString",
          ExchangeVersion[ExchangeVersion.Exchange2013]));
    }

    // ReturnHighlightTerms parameter is only valid for Exchange2013 or higher
    //
    if (this.ReturnHighlightTerms &&
      this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
      throw new ServiceVersionException(
        StringHelper.Format(
          Strings.ParameterIncompatibleWithRequestVersion,
          "returnHighlightTerms",
          ExchangeVersion[ExchangeVersion.Exchange2013]));
    }

    // SeekToConditionItemView is only valid for Exchange2013 or higher
    //
    if (this.View instanceof SeekToConditionItemView && //todo: better detection of types with "is"
      this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
      throw new ServiceVersionException(
        StringHelper.Format(
          Strings.ParameterIncompatibleWithRequestVersion,
        "SeekToConditionItemView",
        ExchangeVersion[ExchangeVersion.Exchange2013]));
    }

    // MailboxScope is only valid for Exchange2013 or higher
    //
    if (this.MailboxScope &&
      this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
      throw new ServiceVersionException(
        StringHelper.Format(
          Strings.ParameterIncompatibleWithRequestVersion,
          "MailboxScope",
          ExchangeVersion[ExchangeVersion.Exchange2013]));
    }
  }

  /**
   * @internal Writes XML attributes.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
    this.View.WriteAttributesToXml(writer);
  }

  /**
   * @internal Writes the elements to XML writer.
   *
   * @param   {EwsServiceXmlWriter}   writer   The writer.
   */
  WriteElementsToXml(writer: EwsServiceXmlWriter): void {
    // Emit the view element
    //
    this.View.WriteToXml(writer, null);

    // Emit the Sort Order
    //
    this.View.WriteOrderByToXml(writer);

    // Emit the Parent Folder Id
    //
    writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.ParentFolderId);
    this.FolderId.WriteToXml(writer);
    writer.WriteEndElement();

    // Emit the MailboxScope flag
    //
    if (hasValue(this.MailboxScope)) {
      writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.MailboxScope, MailboxSearchLocation[this.MailboxScope]);
    }

    if (!StringHelper.IsNullOrEmpty(this.queryString)) {
      // Emit the QueryString
      //
      writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.QueryString);

      if (this.ReturnHighlightTerms) {
        writer.WriteAttributeString(XmlAttributeNames.ReturnHighlightTerms, this.ReturnHighlightTerms.toString().toLowerCase()); //todo: better tolower() .ToString().ToLowerInvariant());
      }

      writer.WriteValue(this.queryString, XmlElementNames.QueryString);
      writer.WriteEndElement();
    }

    if (this.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
      if (this.View.PropertySet != null) {
        this.View.PropertySet.WriteToXml(writer, ServiceObjectType.Conversation);
      }
    }
  }
}
