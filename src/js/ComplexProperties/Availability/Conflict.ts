import {ComplexProperty} from "../ComplexProperty";
import {ConflictType} from "../../Enumerations/ConflictType";
import {LegacyFreeBusyStatus} from "../../Enumerations/LegacyFreeBusyStatus";
import {JsonObject} from "../../Core/JsonObject";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class Conflict extends ComplexProperty {
    ConflictType: ConflictType;
    NumberOfMembers: number;
    NumberOfMembersAvailable: number;
    NumberOfMembersWithConflict: number;
    NumberOfMembersWithNoData: number;
    FreeBusyStatus: LegacyFreeBusyStatus;
    private conflictType: ConflictType;
    private numberOfMembers: number;
    private numberOfMembersAvailable: number;
    private numberOfMembersWithConflict: number;
    private numberOfMembersWithNoData: number;
    private freeBusyStatus: LegacyFreeBusyStatus;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Conflict.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Conflict.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}



//}



