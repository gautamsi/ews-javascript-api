import {ServiceResponse} from "./ServiceResponse";
import {ChangeCollection} from "../../Sync/ChangeCollection";
import {PropertySet} from "../PropertySet";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class SyncResponse<TServiceObject, TChange> extends ServiceResponse {
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






			

