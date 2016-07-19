import {MessageDisposition} from "../../Enumerations/MessageDisposition";
import {ConflictResolutionMode} from "../../Enumerations/ConflictResolutionMode";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {SendInvitationsOrCancellationsMode} from "../../Enumerations/SendInvitationsOrCancellationsMode";
import {Item} from "../ServiceObjects/Items/Item";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceVersionException} from "../../Exceptions/ServiceVersionException";
import {StringHelper} from "../../ExtensionMethods";
import {XmlElementNames} from "../XmlElementNames";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {Strings} from "../../Strings";
import {ExchangeService} from "../ExchangeService";
import {UpdateItemResponse} from "../Responses/UpdateItemResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class UpdateItemRequest extends MultiResponseServiceRequest<UpdateItemResponse> {//IJsonSerializable
    private items: Item[] = [];
    private savedItemsDestinationFolder: FolderId = null;
    private conflictResolutionMode: ConflictResolutionMode = 0;
    private messageDisposition: MessageDisposition = null;
    private sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode = null;

    get EmitTimeZoneHeader(): boolean {
        for (var item of this.Items) {
            if (item.GetIsTimeZoneHeaderRequired(true /* isUpdateOpeartion */)) {
                return true;
            }
        }
        return false;
    }
    get MessageDisposition(): MessageDisposition {
        return this.messageDisposition;
    }
    set MessageDisposition(value: MessageDisposition) {
        this.messageDisposition = value;
    }
    get ConflictResolutionMode(): ConflictResolutionMode {
        return this.conflictResolutionMode;
    }
    set ConflictResolutionMode(value: ConflictResolutionMode) {
        this.conflictResolutionMode = value;
    }
    get SendInvitationsOrCancellationsMode(): SendInvitationsOrCancellationsMode {
        return this.sendInvitationsOrCancellationsMode;
    }
    set SendInvitationsOrCancellationsMode(value: SendInvitationsOrCancellationsMode) {
        this.sendInvitationsOrCancellationsMode = value;
    }
    SuppressReadReceipts: boolean = false;
    get Items(): Item[] {
        return this.items;
    }
    get SavedItemsDestinationFolder(): FolderId {
        return this.savedItemsDestinationFolder;
    }
    set SavedItemsDestinationFolder(value: FolderId) {
        this.savedItemsDestinationFolder = value;
    }

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): UpdateItemResponse { return new UpdateItemResponse(this.Items[responseIndex]); }
    GetExpectedResponseMessageCount(): number { return this.items.length; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.UpdateItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.UpdateItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.UpdateItem; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParamCollection(this.Items, "Items");
        for (var i = 0; i < this.Items.length; i++) {
            if ((this.Items[i] == null) || this.Items[i].IsNew) {
                throw new Error(StringHelper.Format(Strings.ItemToUpdateCannotBeNullOrNew, i)); //ArgumentException
            }
        }

        if (this.SavedItemsDestinationFolder != null) {
            this.SavedItemsDestinationFolder.Validate(this.Service.RequestedServerVersion);
        }

        // Validate each item.
        for (var item of this.Items) {
            item.Validate();
        }

        if (this.SuppressReadReceipts && this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.ParameterIncompatibleWithRequestVersion,
                    "SuppressReadReceipts",
                    ExchangeVersion[ExchangeVersion.Exchange2013]));
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        if (this.MessageDisposition !== null) {
            writer.WriteAttributeValue(XmlAttributeNames.MessageDisposition, MessageDisposition[this.MessageDisposition]);
        }

        if (this.SuppressReadReceipts) {
            writer.WriteAttributeValue(XmlAttributeNames.SuppressReadReceipts, true);
        }

        writer.WriteAttributeValue(XmlAttributeNames.ConflictResolution, ConflictResolutionMode[this.ConflictResolutionMode]);

        if (this.SendInvitationsOrCancellationsMode !== null) {
            writer.WriteAttributeValue(
                XmlAttributeNames.SendMeetingInvitationsOrCancellations,
                SendInvitationsOrCancellationsMode[this.SendInvitationsOrCancellationsMode]);
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.SavedItemsDestinationFolder != null) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SavedItemFolderId);
            this.SavedItemsDestinationFolder.WriteToXml(writer);
            writer.WriteEndElement();
        }

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.ItemChanges);

        for (var item of this.items) {
            item.WriteToXmlForUpdate(writer);
        }

        writer.WriteEndElement();
    }
}