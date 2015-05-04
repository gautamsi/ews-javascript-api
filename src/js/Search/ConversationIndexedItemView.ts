import PagedView = require("./PagedView");
import OrderByCollection = require("./OrderByCollection");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
			
 class ConversationIndexedItemView extends PagedView {
	OrderBy: OrderByCollection;
	Traversal: any /*Nullable<ConversationQueryTraversal>*/;
	ViewFilter: any /*Nullable<ViewFilter>*/;
	private orderBy: OrderByCollection;
	private traversal: any /*Nullable<ConversationQueryTraversal>*/;
	private viewFilter: any /*Nullable<ViewFilter>*/;
	AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	GetServiceObjectType(): ServiceObjectType{ throw new Error("Not implemented.");}
	GetViewJsonTypeName(): string{ throw new Error("Not implemented.");}
	GetViewXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalValidate(request: ServiceRequestBase): void{ throw new Error("Not implemented.");}
	InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteOrderByToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("Not implemented.");}
}
export = ConversationIndexedItemView;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
