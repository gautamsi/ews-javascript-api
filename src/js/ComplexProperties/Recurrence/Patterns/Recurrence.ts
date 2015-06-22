import {ComplexProperty} from "../../ComplexProperty";
import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {JsonObject} from "../../../Core/JsonObject";
export class Recurrence extends ComplexProperty {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
        StartDate: Date;
        HasEnd: boolean;
        NumberOfOccurrences: number;
        EndDate: Date;
        private startDate: Date;
        private numberOfOccurrences: number;
        private endDate: Date;
        GetFieldValueOrThrowIfNull(value: any, name: string): any { throw new Error("Recurrence.ts - GetFieldValueOrThrowIfNull : Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Recurrence.ts - InternalToJson : Not implemented."); }
        InternalValidate(): any { throw new Error("Recurrence.ts - InternalValidate : Not implemented."); }
        InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Recurrence.ts - InternalWritePropertiesToXml : Not implemented."); }
        IsSame(otherRecurrence: Recurrence): boolean { throw new Error("Recurrence.ts - IsSame : Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Recurrence.ts - LoadFromJson : Not implemented."); }
        NeverEnds(): any { throw new Error("Recurrence.ts - NeverEnds : Not implemented."); }
        PatternToJson(service: ExchangeService): JsonObject { throw new Error("Recurrence.ts - PatternToJson : Not implemented."); }
        RangeToJson(service: ExchangeService): any { throw new Error("Recurrence.ts - RangeToJson : Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Recurrence.ts - WriteElementsToXml : Not implemented."); }
    }


//}



