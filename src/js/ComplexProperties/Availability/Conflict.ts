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
