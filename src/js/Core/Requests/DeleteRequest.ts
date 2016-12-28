import {ServiceResponse} from "../Responses/ServiceResponse";
import {DeleteMode} from "../../Enumerations/DeleteMode";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    private deleteMode: DeleteMode = DeleteMode.SoftDelete;
    get DeleteMode(): DeleteMode {
        return this.deleteMode;
    }
    set DeleteMode(value: DeleteMode) {
        this.deleteMode = value;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service,errorHandlingMode);
    }
    InternalToJson(body: any): any { throw new Error("DeleteRequest.ts - InternalToJson : Not implemented."); }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
        writer.WriteAttributeValue(XmlAttributeNames.DeleteType, DeleteMode[this.DeleteMode]);
    }
}