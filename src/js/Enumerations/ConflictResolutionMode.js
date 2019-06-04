"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines how conflict resolutions are handled in update operations.
 */
var ConflictResolutionMode;
(function (ConflictResolutionMode) {
    /**
     * Local property changes are discarded.
     */
    ConflictResolutionMode[ConflictResolutionMode["NeverOverwrite"] = 0] = "NeverOverwrite";
    /**
     * Local property changes are applied to the server unless the server-side copy is more recent than the local copy.
     */
    ConflictResolutionMode[ConflictResolutionMode["AutoResolve"] = 1] = "AutoResolve";
    /**
     * Local property changes overwrite server-side changes.
     */
    ConflictResolutionMode[ConflictResolutionMode["AlwaysOverwrite"] = 2] = "AlwaysOverwrite";
})(ConflictResolutionMode = exports.ConflictResolutionMode || (exports.ConflictResolutionMode = {}));
