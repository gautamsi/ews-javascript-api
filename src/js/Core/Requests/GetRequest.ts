import ExchangeService = require("../ExchangeService");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
import ServiceObjectType = require("../../Enumerations/ServiceObjectType");
import ServiceObject = require("../ServiceObjects/ServiceObject");
import ServiceResponse = require("../Responses/ServiceResponse");
import PropertySet = require("../PropertySet");

import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
class GetRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> { //implements IJsonSerializable
    PropertySet: PropertySet;
    //private propertySet: PropertySet;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }
    //abstract - AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    //IJsonSerializable.ToJson(ExchangeService service): any {
    //    JsonObject jsonRequest = new JsonObject();

    //    this.propertySet.WriteGetShapeToJson(jsonRequest, service, this.GetServiceObjectType());
    //    this.AddIdsToRequest(jsonRequest, service);

    //    return jsonRequest;
    //}
    GetServiceObjectType(): ServiceObjectType { throw new Error("Abstract; must implemented."); }
    Validate(): void {
        super.Validate();
        debugger;//todo: implement propertyset
        //EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
        //this.PropertySet.ValidateForRequest(this, false /*summaryPropertiesOnly*/);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { this.PropertySet.WriteToXml(writer, this.GetServiceObjectType()); }
}

export = GetRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

