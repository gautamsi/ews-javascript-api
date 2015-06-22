import {Item} from "../ServiceObjects/Items/Item";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {GetRequest} from "./GetRequest";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetItemRequestBase<TResponse extends ServiceResponse> extends GetRequest<Item, TResponse> {
    ItemIds: ItemIdWrapperList;
    EmitTimeZoneHeader: boolean;
    private itemIds: ItemIdWrapperList;
    AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("GetItemRequestBase.ts - AddIdsToRequest : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetItemRequestBase.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetItemRequestBase.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetItemRequestBase.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetItemRequestBase.ts - GetResponseXmlElementName : Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("GetItemRequestBase.ts - GetServiceObjectType : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetItemRequestBase.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetItemRequestBase.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetItemRequestBase.ts - WriteElementsToXml : Not implemented."); }
}


//}



