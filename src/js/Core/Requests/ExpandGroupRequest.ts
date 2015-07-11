import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../XmlElementNames";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExpandGroupResponse} from "../Responses/ExpandGroupResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
export class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {
    private emailAddress: EmailAddress = null;
    get EmailAddress(): EmailAddress {
        return this.emailAddress;
    }
    set EmailAddress(value: EmailAddress) {
        this.emailAddress = value;
    }
    constructor(service: ExchangeService) {
        super(service, ServiceErrorHandling.ThrowOnError);
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse { return new ExpandGroupResponse(); }
    GetExpectedResponseMessageCount(): number { return 1; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.ExpandDLResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.ExpandDLResponse; }
    GetXmlElementName(): string { return XmlElementNames.ExpandDL; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.EmailAddress, "EmailAddress");
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.EmailAddress != null) {
            this.EmailAddress.WriteToXml(
                writer,
                XmlElementNames.Mailbox,
                XmlNamespace.Messages
                );
        }
    }
}