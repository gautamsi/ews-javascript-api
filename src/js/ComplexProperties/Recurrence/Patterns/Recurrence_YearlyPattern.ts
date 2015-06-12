import {Month} from "../../../Enumerations/Month";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {JsonObject} from "../../../Core/JsonObject";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
			
import {Recurrence} from "./Recurrence";
export class YearlyPattern extends Recurrence {
	XmlElementName: string;
	Month: Month;
	DayOfMonth: number;
	private month: any /*Nullable<Month>*/;
	private dayOfMonth: number;
	InternalValidate(): void{ throw new Error("Recurrence_YearlyPattern.ts - InternalValidate : Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Recurrence_YearlyPattern.ts - InternalWritePropertiesToXml : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Recurrence_YearlyPattern.ts - LoadFromJson : Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Recurrence_YearlyPattern.ts - PatternToJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Recurrence_YearlyPattern.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			

