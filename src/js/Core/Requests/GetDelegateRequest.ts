import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {UserId} from "../../ComplexProperties/UserId";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {GetDelegateResponse} from "../Responses/GetDelegateResponse";
import {DelegateManagementRequestBase} from "./DelegateManagementRequestBase";
/**
 * @internal Represents a GetDelegate request. 
 */
export class GetDelegateRequest extends DelegateManagementRequestBase<GetDelegateResponse> {
    
    private userIds: UserId[] = [];
    private includePermissions: boolean = false;

    /**
     * Gets the user ids.
     * 
     * @value   The user ids.
     */
    get UserIds(): UserId[] {
        return this.userIds;
    }

    /**
     * Gets or sets a value indicating whether permissions are included.
     */
    get IncludePermissions(): boolean {
        return this.includePermissions;
    }
    set IncludePermissions(value: boolean) {
        this.includePermissions = value;
    }

    /**
     * @internal Initializes a new instance of the **GetDelegateRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService) {
        super(service);
    }

    /**
	 * @internal Creates the response
	 *
	 * @return  {GetDelegateResponse}		Response object.
	 */
    CreateResponse(): GetDelegateResponse {
        return new GetDelegateResponse(true);
    }

    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2007_SP1;
    }

    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseXmlElementName(): string {
        return XmlElementNames.GetDelegateResponse;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string {
        return XmlElementNames.GetDelegate;
    }

    /**
     * @internal Writes XML attributes.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @remarks Subclass will override if it has XML attributes.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        writer.WriteAttributeValue(XmlAttributeNames.IncludePermissions, this.IncludePermissions);
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        if (this.UserIds.length > 0) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.UserIds);

            for (let userId of this.UserIds) {
                userId.WriteToXml(writer, XmlElementNames.UserId);
            }

            writer.WriteEndElement(); // UserIds
        }
    }
}