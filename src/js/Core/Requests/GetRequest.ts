import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {PropertySet} from "../PropertySet";

import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
export class GetRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> { //implements IJsonSerializable
    PropertySet: PropertySet;
    //private propertySet: PropertySet;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    //abstract - AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("GetRequest.ts - abstract - AddIdsToRequest : Not implemented."); }
    //IJsonSerializable.ToJson(ExchangeService service): any {
    //    JsonObject jsonRequest = new JsonObject();

    //    this.propertySet.WriteGetShapeToJson(jsonRequest, service, this.GetServiceObjectType());
    //    this.AddIdsToRequest(jsonRequest, service);

    //    return jsonRequest;
    //}
    GetServiceObjectType(): ServiceObjectType { throw new Error("Abstract; must implemented."); }
    Validate(): void {
        super.Validate();
        debugger;
        //EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
        this.PropertySet.ValidateForRequest(this, false /*summaryPropertiesOnly*/);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { this.PropertySet.WriteToXml(writer, this.GetServiceObjectType()); }
}


