import {ComplexProperty} from "../../ComplexProperty";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {JsonObject} from "../../../Core/JsonObject";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
import {DayOfTheWeekCollection} from "../DayOfTheWeekCollection";
			
import {IntervalPattern} from "./Recurrence_IntervalPattern";
export class WeeklyPattern extends IntervalPattern {
	XmlElementName: string;
	DaysOfTheWeek: DayOfTheWeekCollection;
	FirstDayOfWeek: any /*System.DayOfWeek*/;
	private daysOfTheWeek: DayOfTheWeekCollection;
	private firstDayOfWeek: any /*System.Nullable<System.DayOfWeek>*/;
	DaysOfTheWeekChanged(complexProperty: ComplexProperty): void{ throw new Error("Recurrence_WeeklyPattern.ts - DaysOfTheWeekChanged : Not implemented.");}
	InternalValidate(): void{ throw new Error("Recurrence_WeeklyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_WeeklyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_WeeklyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_WeeklyPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_WeeklyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			

