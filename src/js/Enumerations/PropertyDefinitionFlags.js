"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines how a complex property behaves.
 *
 * [Flags]
 */
var PropertyDefinitionFlags;
(function (PropertyDefinitionFlags) {
    /**
     * No specific behavior.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["None"] = 0] = "None";
    /**
     * The property is automatically instantiated when it is read.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["AutoInstantiateOnRead"] = 1] = "AutoInstantiateOnRead";
    /**
     * The existing instance of the property is reusable.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["ReuseInstance"] = 2] = "ReuseInstance";
    /**
     * The property can be set.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanSet"] = 4] = "CanSet";
    /**
     * The property can be updated.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanUpdate"] = 8] = "CanUpdate";
    /**
     * The property can be deleted.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanDelete"] = 16] = "CanDelete";
    /**
     * The property can be searched.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["CanFind"] = 32] = "CanFind";
    /**
     * The property must be loaded explicitly
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["MustBeExplicitlyLoaded"] = 64] = "MustBeExplicitlyLoaded";
    /**
     * Only meaningful for "collection" property.
     * With this flag, the item in the collection gets updated, instead of creating and adding new items to the collection.
     * Should be used together with the ReuseInstance flag.
     */
    PropertyDefinitionFlags[PropertyDefinitionFlags["UpdateCollectionItems"] = 128] = "UpdateCollectionItems";
})(PropertyDefinitionFlags = exports.PropertyDefinitionFlags || (exports.PropertyDefinitionFlags = {}));
