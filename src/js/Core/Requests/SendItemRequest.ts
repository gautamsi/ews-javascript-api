import {Item} from "../ServiceObjects/Items/Item";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ExchangeService} from "../ExchangeService";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class SendItemRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
    
    private items: Item[] = [];
    private savedCopyDestinationFolderId: FolderId = null;
    get Items(): Item[] {
        return this.items;
    }
    set Items(value: Item[]) {
        this.items = value;
    }
    get SavedCopyDestinationFolderId(): FolderId {
        return this.savedCopyDestinationFolderId;
    }
    set SavedCopyDestinationFolderId(value: FolderId) {
        this.savedCopyDestinationFolderId = value;
    }

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new ServiceResponse(); }
    GetExpectedResponseMessageCount(): number { return this.items.length; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.SendItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.SendItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.SendItem; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.Items, "Items");

        if (this.SavedCopyDestinationFolderId != null) {
            this.SavedCopyDestinationFolderId.Validate(this.Service.RequestedServerVersion);
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        writer.WriteAttributeValue(            
            XmlAttributeNames.SaveItemToFolder,
            this.SavedCopyDestinationFolderId != null);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.ItemIds);

        for (var item of this.items) {
            item.Id.WriteToXml(writer);//, XmlElementNames.ItemId);
        }

        writer.WriteEndElement(); // ItemIds

        if (this.SavedCopyDestinationFolderId != null) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SavedItemFolderId);
            this.SavedCopyDestinationFolderId.WriteToXml(writer);
            writer.WriteEndElement();
        }
    }
}
