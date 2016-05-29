import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {UserId} from "../../ComplexProperties/UserId";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {DelegateManagementResponse} from "../Responses/DelegateManagementResponse";
import {DelegateManagementRequestBase} from "./DelegateManagementRequestBase";
/**
 * @internal Represents a RemoveDelete request. 
 */
export class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {

    private userIds: UserId[] = [];

    /**
     * Gets the user ids.
     * 
     * @value   The user ids.
     */
    get UserIds(): UserId[] {
        return this.userIds;
    }

    /**
     * @internal Initializes a new instance of the **RemoveDelegateRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService) {
        super(service);
    }

    /**
	 * @internal Creates the response
	 *
	 * @return  {DelegateManagementResponse}		Response object.
	 */
    CreateResponse(): DelegateManagementResponse {
        return new DelegateManagementResponse(false, null);
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
        return XmlElementNames.RemoveDelegateResponse;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string {
        return XmlElementNames.RemoveDelegate;
    }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParamCollection(this.UserIds, "UserIds");
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.UserIds);

        for (let userId of this.UserIds) {
            userId.WriteToXml(writer, XmlElementNames.UserId);
        }

        writer.WriteEndElement(); // UserIds
    }
}