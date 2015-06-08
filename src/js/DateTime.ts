/// <reference path="../../typings/moment/moment-node.d.ts" />
/// <reference path="../../typings/moment-timezone/moment-timezone.d.ts" />
import moment = require('moment-timezone');

export enum DateTimeKind {
	Unspecified = 0,
	Utc = 1,
	Local = 2,
}
	
/**
 * DateTime - basic date time based on moment.js
 */
export class DateTime {
	get Kind(): DateTimeKind { return this.kind; }
	kind: DateTimeKind = DateTimeKind.Unspecified;
	get Date(): moment.Moment { return this.momentDate; }
	get currentUtcOffset(): number { return this.momentDate.utcOffset(); }
	private momentDate: moment.Moment;
	momentInstance: any = moment()
	get TotalMilliSeconds(): number { return this.momentDate.valueOf() }
	constructor(date?: DateTime | any, kind: DateTimeKind = DateTimeKind.Unspecified) {
		if (date instanceof DateTime) {
			this.momentDate = date.Date.clone();
		}
		else {
			this.momentDate = moment(date);
		}
		this.kind = kind;

	}
	Format(formatting: string): string {
		return this.momentDate.format(formatting);
	}

	static Parse(value: any, kind: DateTimeKind = DateTimeKind.Unspecified): DateTime {
		return new DateTime(value, kind);
	}
	ToISOString(): string { return this.momentDate.toISOString(); }
	utcOffset(value: number) { this.momentDate.utcOffset(value); }
	static DateTimeToXSDateTime(dateTime: DateTime): string {
		var format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';//using moment format for c#->"yyyy-MM-ddTHH:mm:ss.fff";

		// switch (dateTime.Kind) {
		// 	case DateTimeKind.Utc:
		// 		format += "Z";
		// 		break;
		// 	case DateTimeKind.Local:
		// 		format += "zzz";
		// 		break;
		// 	default:
		// 		break;
		// }
				
		// Depending on the current culture, DateTime formatter will replace ':' with 
		// the DateTimeFormatInfo.TimeSeparator property which may not be ':'. Force the proper string
		// to be used by using the InvariantCulture.
		return dateTime.Format(format);//, CultureInfo.InvariantCulture);
	}
	static DateTimeToXSDate(date: DateTime): string {
		var format = 'YYYY-MM-DDZ';//using moment format for c#->"yyyy-MM-dd";

		// switch (date.Kind) {
		// 	case DateTimeKind.Utc:
		// 		format = "yyyy-MM-ddZ";
		// 		break;
		// 	case DateTimeKind.Unspecified:
		// 		format = "yyyy-MM-dd";
		// 		break;
		// 	default: // DateTimeKind.Local is remaining
		// 		format = "yyyy-MM-ddzzz";
		// 		break;
		// }

		// Depending on the current culture, DateTime formatter will 
		// translate dates from one culture to another (e.g. Gregorian to Lunar).  The server
		// however, considers all dates to be in Gregorian, so using the InvariantCulture will
		// ensure this.
		return date.Format(format);//, CultureInfo.InvariantCulture);
	}


}

/**
* TimeZoneInfo
*/
export class TimeZoneInfo {

	static get Utc(): TimeZoneInfo { return this.utc; }
	private static utc: TimeZoneInfo = new TimeZoneInfo(0);

	static get Local(): TimeZoneInfo { return this.local; }
	private static local: TimeZoneInfo = new TimeZoneInfo(moment().local().utcOffset());

	private offset: number;

	constructor(offset: number) {
		this.offset = offset;
	}

	static IsLocalTimeZone(timeZone: TimeZoneInfo) {
		return timeZone.offset === this.local.offset;
	}
	get DisplayName(): string { return this.offset.toString(); }

	static ConvertTime(dateTime: DateTime, sourceTZ: TimeZoneInfo, destinationTZ: TimeZoneInfo): DateTime {
		var returnDate = new DateTime(dateTime);
		//var offset = returnDate.currentUtcOffset + destinationTZ.offset - sourceTZ.offset 
		returnDate.utcOffset(destinationTZ.offset);
		return returnDate;
	}
}