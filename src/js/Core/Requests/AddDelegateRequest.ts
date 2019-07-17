import { DelegateUser } from "../../ComplexProperties/DelegateUser";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { hasValue } from "../../ExtensionMethods";
import { MeetingRequestsDeliveryScope } from "../../Enumerations/MeetingRequestsDeliveryScope";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { DelegateManagementResponse } from "../Responses/DelegateManagementResponse";
import { DelegateManagementRequestBase } from "./DelegateManagementRequestBase";
/**
 * @internal Represents an AddDelegate request. 
 */
export class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {

    private delegateUsers: DelegateUser[] = [];
    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope = null; //Nullable

    /**
     * Gets or sets the meeting requests delivery scope.
     * 
     * @value   The meeting requests delivery scope.
     */
    get MeetingRequestsDeliveryScope(): MeetingRequestsDeliveryScope {
        return this.meetingRequestsDeliveryScope;
    }
    set MeetingRequestsDeliveryScope(value: MeetingRequestsDeliveryScope) {
        this.meetingRequestsDeliveryScope = value;
    }

    /**
     * Gets the delegate users.
     * 
     * @value   The delegate users.
     */
    get DelegateUsers(): DelegateUser[] {
        return this.delegateUsers;
    }

    /**
     * @internal Initializes a new instance of the **AddDelegateRequest** class.
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
        return new DelegateManagementResponse(true, this.delegateUsers);
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
        return XmlElementNames.AddDelegateResponse;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string {
        return XmlElementNames.AddDelegate;
    }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParamCollection(this.DelegateUsers, "DelegateUsers");

        for (let delegateUser of this.DelegateUsers) {
            delegateUser.ValidateUpdateDelegate();
        }

        if (hasValue(this.MeetingRequestsDeliveryScope)) {
            EwsUtilities.ValidateEnumVersionValue(MeetingRequestsDeliveryScope, this.MeetingRequestsDeliveryScope, this.Service.RequestedServerVersion, "MeetingRequestsDeliveryScope");
        }
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.DelegateUsers);

        for (let delegateUser of this.DelegateUsers) {
            delegateUser.WriteToXml(writer, XmlElementNames.DelegateUser);
        }

        writer.WriteEndElement(); // DelegateUsers

        if (hasValue(this.MeetingRequestsDeliveryScope)) {
            writer.WriteElementValue(
                XmlNamespace.Messages,
                XmlElementNames.DeliverMeetingRequests,
                MeetingRequestsDeliveryScope[this.MeetingRequestsDeliveryScope]);
        }
    }
}