import ServiceResponse = require("./ServiceResponse");
import ChangeCollection = require("../../Sync/ChangeCollection");
import PropertySet = require("../PropertySet");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class SyncResponse<TServiceObject, TChange> extends ServiceResponse {
	Changes: ChangeCollection<TChange>;
	SummaryPropertiesOnly: boolean;
	private changes: ChangeCollection<TChange>;
	private propertySet: PropertySet;
	CreateChangeInstance(): TChange{ throw new Error("SyncResponse.ts - CreateChangeInstance : Not implemented.");}
	GetChangeElementName(): string{ throw new Error("SyncResponse.ts - GetChangeElementName : Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("SyncResponse.ts - GetChangeIdElementName : Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("SyncResponse.ts - GetIncludesLastInRangeXmlElementName : Not implemented.");}
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("SyncResponse.ts - ReadElementsFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("SyncResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}
export = SyncResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
