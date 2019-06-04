"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of free/busy information returned by a GetUserAvailability operation.
 */
var FreeBusyViewType;
(function (FreeBusyViewType) {
    /**
     * No view could be returned. This value cannot be specified in a call to GetUserAvailability.
     */
    FreeBusyViewType[FreeBusyViewType["None"] = 0] = "None";
    /**
     * Represents an aggregated free/busy stream. In cross-forest scenarios in which the target user in one forest does not have an Availability service configured, the Availability service of the requestor retrieves the target user's free/busy information from the free/busy public folder.
     * Because public folders only store free/busy information in merged form, MergedOnly is the only available information.
     */
    FreeBusyViewType[FreeBusyViewType["MergedOnly"] = 1] = "MergedOnly";
    /**
     * Represents the legacy status information: free, busy, tentative, and OOF. This also includes the start/end times of the appointments. This view is richer than the legacy free/busy view because individual meeting start and end times are provided instead of an aggregated free/busy stream.
     */
    FreeBusyViewType[FreeBusyViewType["FreeBusy"] = 2] = "FreeBusy";
    /**
     * Represents all the properties in FreeBusy with a stream of merged free/busy availability information.
     */
    FreeBusyViewType[FreeBusyViewType["FreeBusyMerged"] = 3] = "FreeBusyMerged";
    /**
     * Represents the legacy status information: free, busy, tentative, and OOF; the start/end times of the appointments; and various properties of the appointment such as subject, location, and importance.
     * This requested view will return the maximum amount of information for which the requesting user is privileged.
     * If merged free/busy information only is available, as with requesting information for users in a Microsoft Exchange Server 2003 forest, MergedOnly will be returned.
     * Otherwise, FreeBusy or Detailed will be returned.
     */
    FreeBusyViewType[FreeBusyViewType["Detailed"] = 4] = "Detailed";
    /**
     * Represents all the properties in Detailed with a stream of merged free/busy availability information.
     * If only merged free/busy information is available, for example if the mailbox exists on a computer running Exchange 2003, MergedOnly will be returned.
     * Otherwise, FreeBusyMerged or DetailedMerged will be returned.
     */
    FreeBusyViewType[FreeBusyViewType["DetailedMerged"] = 5] = "DetailedMerged";
})(FreeBusyViewType = exports.FreeBusyViewType || (exports.FreeBusyViewType = {}));
