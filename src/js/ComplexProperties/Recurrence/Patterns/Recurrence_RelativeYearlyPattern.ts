import DayOfTheWeekIndex = require("../../../Enumerations/DayOfTheWeekIndex");
import DayOfTheWeek = require("../../../Enumerations/DayOfTheWeek");
import Month = require("../../../Enumerations/Month");
import EwsServiceXmlWriter = require("../../../Core/EwsServiceXmlWriter");
import JsonObject = require("../../../Core/JsonObject");
import ExchangeService = require("../../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../../Core/EwsServiceXmlReader");
			
import Recurrence = require("./Recurrence");						
 class RelativeYearlyPattern extends Recurrence {
	XmlElementName: string;
	DayOfTheWeekIndex: DayOfTheWeekIndex;
	DayOfTheWeek: DayOfTheWeek;
	Month: Month;
	private dayOfTheWeek: any /*Nullable<DayOfTheWeek>*/;
	private dayOfTheWeekIndex: any /*Nullable<DayOfTheWeekIndex>*/;
	private month: any /*Nullable<Month>*/;
	InternalValidate(): void{ throw new Error("Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = RelativeYearlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			
