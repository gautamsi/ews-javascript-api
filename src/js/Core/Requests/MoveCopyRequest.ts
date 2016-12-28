import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class MoveCopyRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    private destinationFolderId: FolderId = null;
    get DestinationFolderId(): FolderId {
        return this.destinationFolderId;
    }
    set DestinationFolderId(value: FolderId) {
        this.destinationFolderId = value;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    AddIdsToJson(jsonObject: any, service: ExchangeService): any { throw new Error("MoveCopyRequest.ts - AddIdsToJson : Not implemented."); }
    Validate(): void {
        //EwsUtilities.ValidateParam(this.DestinationFolderId, "DestinationFolderId");
        this.DestinationFolderId.Validate(this.Service.RequestedServerVersion);
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.ToFolderId);
        this.DestinationFolderId.WriteToXml(writer);
        writer.WriteEndElement();
        this.WriteIdsToXml(writer);
    }
    /**@internal */
    WriteIdsToXml(writer: EwsServiceXmlWriter): void { throw new Error("MoveCopyRequest.ts - WriteIdsToXml : Abstract - must implement."); }
}
