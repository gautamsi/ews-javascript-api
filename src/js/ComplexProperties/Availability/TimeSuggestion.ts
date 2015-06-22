import {XmlElementNames} from "../../Core/XmlElementNames";
import {SuggestionQuality} from "../../Enumerations/SuggestionQuality";
import {ConflictType} from "../../Enumerations/ConflictType";
import {Conflict} from "./Conflict";
import {ExchangeService} from "../../Core/ExchangeService";
import {EwsServiceJsonReader} from "../../Core/EwsServiceJsonReader";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {EwsLogging} from "../../Core/EwsLogging";
import {DateTime} from "../../DateTime";
import {StringHelper, Convert, TypeSystem} from "../../ExtensionMethods";
import {ComplexProperty} from "../ComplexProperty";
export class TimeSuggestion extends ComplexProperty {
    private meetingTime: DateTime = null;
    private isWorkTime: boolean = false;
    private quality: SuggestionQuality = SuggestionQuality.Excellent;
    private conflicts: Conflict[] = [];// System.Collections.ObjectModel.Collection<Conflict>;
    get MeetingTime(): DateTime {
        return this.meetingTime;
    }
    get IsWorkTime(): boolean {
        return this.isWorkTime;
    }
    get Quality(): SuggestionQuality {
        return this.quality;
    }
    get Conflicts(): Conflict[] {
        return this.conflicts;
    }
    constructor() {
        super();
    }
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("TimeSuggestion.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.MeetingTime:
                    this.meetingTime = EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(jsonProperty[key], service);
                    break;
                case XmlElementNames.IsWorkTime:
                    this.isWorkTime = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.SuggestionQuality:
                    this.quality = <SuggestionQuality><any>SuggestionQuality[jsonProperty[key]];
                    break;
                case XmlElementNames.AttendeeConflictDataArray:
                    var jsConflictDataArray: any = jsonProperty[key];
                    for (var conflictKey in jsConflictDataArray) {
                        if (conflictKey.indexOf("__") === 0) continue;
                        var conflictType: ConflictType = ConflictType.IndividualAttendeeConflict;
                        var jsConflicts: any = EwsServiceJsonReader.ReadAsArray(jsConflictDataArray, conflictKey);
                        switch (conflictKey) {
                            case XmlElementNames.UnknownAttendeeConflictData:
                                conflictType = ConflictType.UnknownAttendeeConflict;
                                break;
                            case XmlElementNames.TooBigGroupAttendeeConflictData:
                                conflictType = ConflictType.GroupTooBigConflict;
                                break;
                            case XmlElementNames.IndividualAttendeeConflictData:
                                conflictType = ConflictType.IndividualAttendeeConflict;
                                break;
                            case XmlElementNames.GroupAttendeeConflictData:
                                conflictType = ConflictType.GroupConflict;
                                break;
                            default:
                                EwsLogging.Assert(
                                    false,
                                    "TimeSuggestion.TryReadElementFromJson",
                                    StringHelper.Format("The {0} element name does not map to any AttendeeConflict descendant.", TypeSystem.GetJsObjectTypeName(jsConflicts)));

                                // The following line to please the compiler
                                break;
                        }

                        for (var conflictItem of jsConflicts) {
                            var conflict: Conflict = new Conflict(conflictType);
                            conflict.LoadFromXmlJsObject(conflictItem, service);
                            this.conflicts.push(conflict);
                        }
                    }

                    break;
                default:
                    break;
            }
        }
    }
}
