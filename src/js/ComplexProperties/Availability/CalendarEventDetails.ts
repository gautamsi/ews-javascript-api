import {XmlElementNames} from "../../Core/XmlElementNames";
import {ExchangeService} from "../../Core/ExchangeService";
import {Convert} from "../../ExtensionMethods";
import {ComplexProperty} from "../ComplexProperty";
export class CalendarEventDetails extends ComplexProperty {
    private storeId: string = null;
    private subject: string = null;
    private location: string = null;
    private isMeeting: boolean = false;
    private isRecurring: boolean = false;
    private isException: boolean = false;
    private isReminderSet: boolean = false;
    private isPrivate: boolean = false;
    get StoreId(): string {
        return this.storeId;
    }
    get Subject(): string {
        return this.subject;
    }
    get Location(): string {
        return this.location;
    }
    get IsMeeting(): boolean {
        return this.isMeeting;
    }
    get IsRecurring(): boolean {
        return this.isRecurring;
    }
    get IsException(): boolean {
        return this.isException;
    }
    get IsReminderSet(): boolean {
        return this.isReminderSet;
    }
    get IsPrivate(): boolean {
        return this.isPrivate;
    }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("CalendarEventDetails.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.ID:
                    this.storeId = jsonProperty[key];
                    break;
                case XmlElementNames.Subject:
                    this.subject = jsonProperty[key];
                    break;
                case XmlElementNames.Location:
                    this.location = jsonProperty[key];
                    break;
                case XmlElementNames.IsMeeting:
                    this.isMeeting = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsRecurring:
                    this.isRecurring = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsException:
                    this.isException = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsReminderSet:
                    this.isReminderSet = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsPrivate:
                    this.isPrivate = Convert.toBool(jsonProperty[key]);
                    break;
                default:
                    break;
            }
        }
    }
}