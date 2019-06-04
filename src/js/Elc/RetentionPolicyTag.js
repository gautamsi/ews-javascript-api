"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var ElcFolderType_1 = require("../Enumerations/ElcFolderType");
var Guid_1 = require("../Guid");
var RetentionActionType_1 = require("../Enumerations/RetentionActionType");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents retention policy tag object.
 *
 * @sealed
 */
var RetentionPolicyTag = /** @class */ (function () {
    function RetentionPolicyTag(displayName, retentionId, retentionPeriod, type, retentionAction, isVisible, optedInto, isArchive) {
        /**
         * Retention policy tag display name.
         */
        this.DisplayName = null;
        /**
         * Retention Id.
         */
        this.RetentionId = null;
        /**
         * Retention period in time span.
         */
        this.RetentionPeriod = 0;
        /**
         * Retention type.
         */
        this.Type = ElcFolderType_1.ElcFolderType.Calendar;
        /**
         * Retention action.
         */
        this.RetentionAction = RetentionActionType_1.RetentionActionType.None;
        /**
         * Retention policy tag description.
         */
        this.Description = null;
        /**
         * Is this a visible tag?
         */
        this.IsVisible = false;
        /**
         * Is this a opted into tag?
         */
        this.OptedInto = false;
        /**
         * Is this an archive tag?
         */
        this.IsArchive = false;
        if (arguments.length > 0) {
            this.DisplayName = displayName;
            this.RetentionId = retentionId;
            this.RetentionPeriod = retentionPeriod;
            this.Type = type;
            this.RetentionAction = retentionAction;
            this.IsVisible = isVisible;
            this.OptedInto = optedInto;
            this.IsArchive = isArchive;
        }
    }
    /**
     * @internal Loads object from XML.
     *
     * @param   {any}	jsObject		Json Object converted from XML.
     */
    RetentionPolicyTag.LoadFromXmlJsObject = function (jsObject) {
        var retentionPolicyTag = new RetentionPolicyTag();
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.DisplayName:
                    retentionPolicyTag.DisplayName = jsObject[XmlElementNames_1.XmlElementNames.DisplayName];
                    break;
                case XmlElementNames_1.XmlElementNames.RetentionId:
                    retentionPolicyTag.RetentionId = new Guid_1.Guid(jsObject[XmlElementNames_1.XmlElementNames.RetentionId]);
                    break;
                case XmlElementNames_1.XmlElementNames.RetentionPeriod:
                    retentionPolicyTag.RetentionPeriod = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.RetentionPeriod]);
                    break;
                case XmlElementNames_1.XmlElementNames.Type:
                    retentionPolicyTag.Type = ElcFolderType_1.ElcFolderType[jsObject[XmlElementNames_1.XmlElementNames.Type]];
                    break;
                case XmlElementNames_1.XmlElementNames.RetentionAction:
                    retentionPolicyTag.RetentionAction = RetentionActionType_1.RetentionActionType[jsObject[XmlElementNames_1.XmlElementNames.RetentionAction]];
                    break;
                case XmlElementNames_1.XmlElementNames.Description:
                    retentionPolicyTag.Description = jsObject[XmlElementNames_1.XmlElementNames.Description];
                    break;
                case XmlElementNames_1.XmlElementNames.IsVisible:
                    retentionPolicyTag.IsVisible = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.IsVisible]);
                    break;
                case XmlElementNames_1.XmlElementNames.OptedInto:
                    retentionPolicyTag.OptedInto = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.OptedInto]);
                    break;
                case XmlElementNames_1.XmlElementNames.IsArchive:
                    retentionPolicyTag.IsArchive = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.IsArchive]);
                    break;
                default:
                    break;
            }
        }
        return retentionPolicyTag;
    };
    return RetentionPolicyTag;
}());
exports.RetentionPolicyTag = RetentionPolicyTag;
