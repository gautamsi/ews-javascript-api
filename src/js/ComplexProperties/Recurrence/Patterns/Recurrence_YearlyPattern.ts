import Month = require("../../../Enumerations/Month");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
import Recurrence = require("./Recurrence");						
 class YearlyPattern extends Recurrence {
	XmlElementName: string;
	Month: Month;
	DayOfMonth: number;
	private month: any /*Nullable<Month>*/;
	private dayOfMonth: number;
	InternalValidate(): void{ throw new Error("Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = YearlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
