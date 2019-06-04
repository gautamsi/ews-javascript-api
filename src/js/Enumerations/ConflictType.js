"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the conflict types that can be returned in meeting time suggestions.
 */
var ConflictType;
(function (ConflictType) {
    /**
     * There is a conflict with an indicidual attendee.
     */
    ConflictType[ConflictType["IndividualAttendeeConflict"] = 0] = "IndividualAttendeeConflict";
    /**
     * There is a conflict with at least one member of a group.
     */
    ConflictType[ConflictType["GroupConflict"] = 1] = "GroupConflict";
    /**
     * There is a conflict with at least one member of a group, but the group was too big for detailed information to be returned.
     */
    ConflictType[ConflictType["GroupTooBigConflict"] = 2] = "GroupTooBigConflict";
    /**
     * There is a conflict with an unresolvable attendee or an attendee that is not a user, group, or contact.
     */
    ConflictType[ConflictType["UnknownAttendeeConflict"] = 3] = "UnknownAttendeeConflict";
})(ConflictType = exports.ConflictType || (exports.ConflictType = {}));
