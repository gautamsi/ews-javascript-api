import ComplexProperty = require("../ComplexProperty");
import ConflictType = require("../../Enumerations/ConflictType");
import LegacyFreeBusyStatus = require("../../Enumerations/LegacyFreeBusyStatus");
import JsonObject = require("../../Core/JsonObject");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
class Conflict extends ComplexProperty {
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
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = Conflict;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
