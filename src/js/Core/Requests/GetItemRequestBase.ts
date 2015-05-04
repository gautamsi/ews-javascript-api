import ServiceResponse = require("../Responses/ServiceResponse");
import GetRequest = require("./GetRequest");
import ItemIdWrapperList = require("../../Misc/ItemIdWrapperList");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import ServiceObjectType = require("../../Enumerations/ServiceObjectType");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetItemRequestBase<TResponse extends ServiceResponse> extends GetRequest<Item, TResponse> {
    ItemIds: ItemIdWrapperList;
    EmitTimeZoneHeader: boolean;
    private itemIds: ItemIdWrapperList;
    AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetItemRequestBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
