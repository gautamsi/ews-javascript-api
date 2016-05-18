import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {MessageDisposition} from "../../Enumerations/MessageDisposition";
import {SendInvitationsMode} from "../../Enumerations/SendInvitationsMode";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {CreateRequest} from "./CreateRequest";
/** @internal */
export class CreateItemRequestBase<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends CreateRequest<TServiceObject, TResponse> {
    //private messageDisposition: MessageDisposition; - backing property not needed
    //private sendInvitationsMode: SendInvitationsMode;
    MessageDisposition: MessageDisposition = null;
    SendInvitationsMode: SendInvitationsMode = null;
    get Items(): TServiceObject[] {
        return this.Objects;
    }
    set Items(value: TServiceObject[]) {
        this.Objects = value;
    }
    get EmitTimeZoneHeader(): boolean {
        for (var serviceObject of this.Items) {
            if (serviceObject.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                return true;
            }
        }
        return false;
    }

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any { throw new Error("CreateItemRequestBase.ts - AddJsonProperties : Not implemented."); }
    GetObjectCollectionXmlElementName(): string { return XmlElementNames.Items; }
    GetParentFolderXmlElementName(): string { return XmlElementNames.SavedItemFolderId; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.CreateItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.CreateItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.CreateItem; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.Items, "Items");
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        if (this.MessageDisposition !== null) {
            writer.WriteAttributeValue(XmlAttributeNames.MessageDisposition, MessageDisposition[this.MessageDisposition]);
        }

        if (this.SendInvitationsMode !== null) {
            writer.WriteAttributeValue(XmlAttributeNames.SendMeetingInvitations, SendInvitationsMode[this.SendInvitationsMode]);
        }
    }
}

