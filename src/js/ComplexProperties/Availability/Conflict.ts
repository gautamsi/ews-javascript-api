import {XmlElementNames} from "../../Core/XmlElementNames";
import {ConflictType} from "../../Enumerations/ConflictType";
import {LegacyFreeBusyStatus} from "../../Enumerations/LegacyFreeBusyStatus";
import {ExchangeService} from "../../Core/ExchangeService";
import {ComplexProperty} from "../ComplexProperty";
export class Conflict extends ComplexProperty {
    private conflictType: ConflictType = ConflictType.IndividualAttendeeConflict;
    private numberOfMembers: number = 0;
    private numberOfMembersAvailable: number = 0;
    private numberOfMembersWithConflict: number = 0;
    private numberOfMembersWithNoData: number = 0;
    private freeBusyStatus: LegacyFreeBusyStatus = LegacyFreeBusyStatus.Free;
    get ConflictType(): ConflictType {
        return this.conflictType;
    }
    get NumberOfMembers(): number {
        return this.numberOfMembers;
    }
    get NumberOfMembersAvailable(): number {
        return this.numberOfMembersAvailable;
    }
    get NumberOfMembersWithConflict(): number {
        return this.numberOfMembersWithConflict;
    }
    get NumberOfMembersWithNoData(): number {
        return this.numberOfMembersWithNoData;
    }
    get FreeBusyStatus(): LegacyFreeBusyStatus {
        return this.freeBusyStatus;
    }
    constructor(conflictType: ConflictType) {
        super();
        this.conflictType = conflictType;
    }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Conflict.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.NumberOfMembers:
                    this.numberOfMembers = Number(jsonProperty[key]);
                    break;
                case XmlElementNames.NumberOfMembersAvailable:
                    this.numberOfMembersAvailable = Number(jsonProperty[key]);
                    break;
                case XmlElementNames.NumberOfMembersWithConflict:
                    this.numberOfMembersWithConflict = Number(jsonProperty[key]);
                    break;
                case XmlElementNames.NumberOfMembersWithNoData:
                    this.numberOfMembersWithNoData = Number(jsonProperty[key]);
                    break;
                case XmlElementNames.BusyType:
                    this.freeBusyStatus = <LegacyFreeBusyStatus><any>LegacyFreeBusyStatus[jsonProperty[key]];
                    break;
                default:
                    break;
            }
        }
    }
}


