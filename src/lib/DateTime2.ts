// import { ArgumentOutOfRangeException } from "../js/Exceptions/ArgumentException";
// import { DateTimeKind } from "./DateTime"
// import moment = require('moment-timezone');

// export class DateTime {

//     // Number of 100ns ticks per time unit
//     private static readonly TicksPerMillisecond: number = 10000; //long
//     private static readonly TicksPerSecond: number = DateTime.TicksPerMillisecond * 1000; //long
//     private static readonly TicksPerMinute: number = DateTime.TicksPerSecond * 60; //long
//     private static readonly TicksPerHour: number = DateTime.TicksPerMinute * 60; //long
//     private static readonly TicksPerDay: number = DateTime.TicksPerHour * 24; //long

//     // Number of milliseconds per time unit
//     private static readonly MillisPerSecond: number = 1000; //int
//     private static readonly MillisPerMinute: number = DateTime.MillisPerSecond * 60; //int
//     private static readonly MillisPerHour: number = DateTime.MillisPerMinute * 60; //int
//     private static readonly MillisPerDay: number = DateTime.MillisPerHour * 24; //int

//     // Number of days in a non-leap year
//     private static readonly DaysPerYear: number = 365; //int
//     // Number of days in 4 years
//     private static readonly DaysPer4Years: number = DateTime.DaysPerYear * 4 + 1;       // 1461 //int
//     // Number of days in 100 years
//     private static readonly DaysPer100Years: number = DateTime.DaysPer4Years * 25 - 1;  // 36524 //int
//     // Number of days in 400 years
//     private static readonly DaysPer400Years: number = DateTime.DaysPer100Years * 4 + 1; // 146097 //int

//     // Number of days from 1/1/0001 to 12/31/1600
//     private static readonly DaysTo1601: number = DateTime.DaysPer400Years * 4;          // 584388 //int
//     // Number of days from 1/1/0001 to 12/30/1899
//     private static readonly DaysTo1899: number = DateTime.DaysPer400Years * 4 + DateTime.DaysPer100Years * 3 - 367; //int
//     // Number of days from 1/1/0001 to 12/31/1969
//     /**
//      * @internal
//      */
//     static readonly DaysTo1970: number = DateTime.DaysPer400Years * 4 + DateTime.DaysPer100Years * 3 + DateTime.DaysPer4Years * 17 + DateTime.DaysPerYear; // 719,162 //int
//     // Number of days from 1/1/0001 to 12/31/9999
//     private static readonly DaysTo10000: number = DateTime.DaysPer400Years * 25 - 366;  // 3652059 //int

//     /**
//      *  @internal
//      */
//     static readonly MinTicks: number = 0; //long
//     /**
//      *  @internal
//      */
//     static readonly MaxTicks: number = DateTime.DaysTo10000 * DateTime.TicksPerDay - 1; //long

//     private static readonly MaxMillis: number = <number>DateTime.DaysTo10000 * DateTime.MillisPerDay; //long

//     private static readonly FileTimeOffset: number = DateTime.DaysTo1601 * DateTime.TicksPerDay; //long
//     private static readonly DoubleDateOffset: number = DateTime.DaysTo1899 * DateTime.TicksPerDay; //long
//     // The minimum OA date is 0100/01/01 (Note it's year 100).
//     // The maximum OA date is 9999/12/31
//     private static readonly OADateMinAsTicks: number = (DateTime.DaysPer100Years - DateTime.DaysPerYear) * DateTime.TicksPerDay; //long
//     // All OA dates must be greater than (not >=) OADateMinAsDouble
//     private static readonly OADateMinAsDouble: number = -657435.0; //double
//     // All OA dates must be less than (not <=) OADateMaxAsDouble
//     private static readonly OADateMaxAsDouble: number = 2958466.0; //double

//     private static readonly DatePartYear: number = 0; //int
//     private static readonly DatePartDayOfYear: number = 1; //int
//     private static readonly DatePartMonth: number = 2; //int
//     private static readonly DatePartDay: number = 3; //int

//     private static readonly DaysToMonth365: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
//     private static readonly DaysToMonth366: number[] = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

//     public static readonly MinValue: DateTime = new DateTime(DateTime.MinTicks, DateTimeKind.Unspecified);
//     public static readonly MaxValue: DateTime = new DateTime(DateTime.MaxTicks, DateTimeKind.Unspecified);

//     private static readonly TicksMask: number = 0x3FFFFFFFFFFFFFFF; //UInt64
//     private static readonly FlagsMask: number = 0xC000000000000000; //UInt64
//     private static readonly LocalMask: number = 0x8000000000000000; //UInt64
//     private static readonly TicksCeiling: number = 0x4000000000000000; //Int64
//     private static readonly KindUnspecified: number = 0x0000000000000000; //UInt64
//     private static readonly KindUtc: number = 0x4000000000000000; //UInt64
//     private static readonly KindLocal: number = 0x8000000000000000; //UInt64
//     private static readonly KindLocalAmbiguousDst: number = 0xC000000000000000; //UInt64
//     private static readonly KindShift: number = 62; //Int32

//     private static readonly TicksField: string = "ticks";
//     private static readonly DateDataField: string = "dateData";
// }