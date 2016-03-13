import {ExchangeService} from "../../../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {DailyPattern} from "./Recurrence.DailyPattern";
import {DailyRegenerationPattern} from "./Recurrence.DailyRegenerationPattern";
import {IntervalPattern} from "./Recurrence.IntervalPattern";
import {MonthlyPattern} from "./Recurrence.MonthlyPattern";
import {MonthlyRegenerationPattern} from "./Recurrence.MonthlyRegenerationPattern";
import {RelativeMonthlyPattern} from "./Recurrence.RelativeMonthlyPattern";
import {RelativeYearlyPattern} from "./Recurrence.RelativeYearlyPattern";
import {WeeklyPattern} from "./Recurrence.WeeklyPattern";
import {WeeklyRegenerationPattern} from "./Recurrence.WeeklyRegenerationPattern";
import {YearlyPattern} from "./Recurrence.YearlyPattern";
import {YearlyRegenerationPattern} from "./Recurrence.YearlyRegenerationPattern";

import {ComplexProperty} from "../../ComplexProperty";
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
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("Recurrence.ts - LoadFromJson : Not implemented."); }
    NeverEnds(): any { throw new Error("Recurrence.ts - NeverEnds : Not implemented."); }
    PatternToJson(service: ExchangeService): any { throw new Error("Recurrence.ts - PatternToJson : Not implemented."); }
    RangeToJson(service: ExchangeService): any { throw new Error("Recurrence.ts - RangeToJson : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Recurrence.ts - WriteElementsToXml : Not implemented."); }
}
export module Recurrence {
    export var DailyPattern: any = DailyPattern;
    export var DailyRegenerationPattern: any = DailyRegenerationPattern;
    export var IntervalPattern: any = IntervalPattern;
    export var MonthlyPattern: any = MonthlyPattern;
    export var MonthlyRegenerationPattern: any = MonthlyRegenerationPattern;
    export var RelativeMonthlyPattern: any = RelativeMonthlyPattern;
    export var RelativeYearlyPattern: any = RelativeYearlyPattern;
    export var WeeklyPattern: any = WeeklyPattern;
    export var WeeklyRegenerationPattern: any = WeeklyRegenerationPattern;
    export var YearlyPattern: any = YearlyPattern;
    export var YearlyRegenerationPattern: any = YearlyRegenerationPattern;
}