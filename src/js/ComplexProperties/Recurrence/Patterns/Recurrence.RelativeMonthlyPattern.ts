import {DayOfTheWeekIndex} from "../../../Enumerations/DayOfTheWeekIndex";
import {DayOfTheWeek} from "../../../Enumerations/DayOfTheWeek";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {JsonObject} from "../../../Core/JsonObject";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
			
 import {IntervalPattern} from "./Recurrence.IntervalPattern";						
export class RelativeMonthlyPattern extends IntervalPattern {
	XmlElementName: string;
	DayOfTheWeekIndex: DayOfTheWeekIndex;
	DayOfTheWeek: DayOfTheWeek;
	private dayOfTheWeek: any /*Nullable<DayOfTheWeek>*/;
	private dayOfTheWeekIndex: any /*Nullable<DayOfTheWeekIndex>*/;
	InternalValidate(): void{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_RelativeMonthlyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
			

