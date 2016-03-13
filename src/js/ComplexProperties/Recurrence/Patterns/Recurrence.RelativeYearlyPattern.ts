import {DayOfTheWeekIndex} from "../../../Enumerations/DayOfTheWeekIndex";
import {DayOfTheWeek} from "../../../Enumerations/DayOfTheWeek";
import {Month} from "../../../Enumerations/Month";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {JsonObject} from "../../../Core/JsonObject";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
			
import {Recurrence} from "./Recurrence";
export class RelativeYearlyPattern extends Recurrence {
	XmlElementName: string;
	DayOfTheWeekIndex: DayOfTheWeekIndex;
	DayOfTheWeek: DayOfTheWeek;
	Month: Month;
	private dayOfTheWeek: any /*Nullable<DayOfTheWeek>*/;
	private dayOfTheWeekIndex: any /*Nullable<DayOfTheWeekIndex>*/;
	private month: any /*Nullable<Month>*/;
	InternalValidate(): void{ throw new Error("Recurrence_RelativeYearlyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_RelativeYearlyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_RelativeYearlyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_RelativeYearlyPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_RelativeYearlyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			

