import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class CreateRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    private parentFolderId: FolderId = null;
    private objects: TServiceObject[] = [];// null;
    set Objects(value: TServiceObject[]) {
        this.objects = value;
    }
    get Objects(): TServiceObject[] {
        return this.objects;
    }
    set ParentFolderId(value: FolderId) {
        this.parentFolderId = value;
    }
    get ParentFolderId(): FolderId {
        return this.parentFolderId;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any { throw new Error("CreateRequest.ts - AddJsonProperties : Not implemented."); }
    GetExpectedResponseMessageCount(): number { return this.Objects.length; }
    GetObjectCollectionXmlElementName(): string { throw new Error("CreateRequest.ts - GetObjectCollectionXmlElementName : abstract - must implement."); }
    GetParentFolderXmlElementName(): string { throw new Error("CreateRequest.ts - GetParentFolderXmlElementName : abstract - must implement."); }
    Validate(): void {
        super.Validate();
        if (this.ParentFolderId != null) {
            this.ParentFolderId.Validate(this.Service.RequestedServerVersion);
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.ParentFolderId != null) {
            writer.WriteStartElement(XmlNamespace.Messages, this.GetParentFolderXmlElementName());
            this.ParentFolderId.WriteToXml(writer);
            writer.WriteEndElement();
        }

        writer.WriteStartElement(XmlNamespace.Messages, this.GetObjectCollectionXmlElementName());
        for (var obj of this.objects) {
            obj.WriteToXml(writer);
        }
        writer.WriteEndElement();
    }
}

