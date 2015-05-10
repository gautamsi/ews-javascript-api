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
	CreateChangeInstance(): TChange{ throw new Error("Not implemented.");}
	GetChangeElementName(): string{ throw new Error("Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("Not implemented.");}
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = SyncResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
