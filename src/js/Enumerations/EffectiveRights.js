"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the effective user rights associated with an item or folder.
 *
 * [Flags]
 */
var EffectiveRights;
(function (EffectiveRights) {
    /**
     * The user has no acces right on the item or folder.
     */
    EffectiveRights[EffectiveRights["None"] = 0] = "None";
    /**
     * The user can create associated items (FAI)
     */
    EffectiveRights[EffectiveRights["CreateAssociated"] = 1] = "CreateAssociated";
    /**
     * The user can create items.
     */
    EffectiveRights[EffectiveRights["CreateContents"] = 2] = "CreateContents";
    /**
     * The user can create sub-folders.
     */
    EffectiveRights[EffectiveRights["CreateHierarchy"] = 4] = "CreateHierarchy";
    /**
     * The user can delete items and/or folders.
     */
    EffectiveRights[EffectiveRights["Delete"] = 8] = "Delete";
    /**
     * The user can modify the properties of items and/or folders.
     */
    EffectiveRights[EffectiveRights["Modify"] = 16] = "Modify";
    /**
     * The user can read the contents of items.
     */
    EffectiveRights[EffectiveRights["Read"] = 32] = "Read";
    /**
     * The user can view private items.
     */
    EffectiveRights[EffectiveRights["ViewPrivateItems"] = 64] = "ViewPrivateItems";
})(EffectiveRights = exports.EffectiveRights || (exports.EffectiveRights = {}));
