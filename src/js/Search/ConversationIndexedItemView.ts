import {PagedView} from "./PagedView";
import {OrderByCollection} from "./OrderByCollection";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {Grouping} from "./Grouping";
export class ConversationIndexedItemView extends PagedView {
	OrderBy: OrderByCollection;
	Traversal: any /*Nullable<ConversationQueryTraversal>*/;
	ViewFilter: any /*Nullable<ViewFilter>*/;
	private orderBy: OrderByCollection;
	private traversal: any /*Nullable<ConversationQueryTraversal>*/;
	private viewFilter: any /*Nullable<ViewFilter>*/;
	AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void{ throw new Error("ConversationIndexedItemView.ts - AddJsonProperties : Not implemented.");}
	GetServiceObjectType(): ServiceObjectType{ throw new Error("ConversationIndexedItemView.ts - GetServiceObjectType : Not implemented.");}
	GetViewJsonTypeName(): string{ throw new Error("ConversationIndexedItemView.ts - GetViewJsonTypeName : Not implemented.");}
	GetViewXmlElementName(): string{ throw new Error("ConversationIndexedItemView.ts - GetViewXmlElementName : Not implemented.");}
	InternalValidate(request: ServiceRequestBase): void{ throw new Error("ConversationIndexedItemView.ts - InternalValidate : Not implemented.");}
	InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("ConversationIndexedItemView.ts - InternalWriteSearchSettingsToXml : Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("ConversationIndexedItemView.ts - WriteAttributesToXml : Not implemented.");}
	WriteOrderByToXml(writer: EwsServiceXmlWriter): void{ throw new Error("ConversationIndexedItemView.ts - WriteOrderByToXml : Not implemented.");}
	WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("ConversationIndexedItemView.ts - WriteToXml : Not implemented.");}
}






			

