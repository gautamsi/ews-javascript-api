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
	InternalValidate(): void{ throw new Error("Recurrence_YearlyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_YearlyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_YearlyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_YearlyPattern.ts - PatternToJson : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_YearlyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = YearlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
