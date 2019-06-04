"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DelegateFolderPermissionLevel_1 = require("../Enumerations/DelegateFolderPermissionLevel");
var AltDictionary_1 = require("../AltDictionary");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the permissions of a delegate user.
 *
 * @sealed
 */
var DelegatePermissions = /** @class */ (function (_super) {
    __extends(DelegatePermissions, _super);
    /**
     * @internal Initializes a new instance of the **DelegatePermissions** class.
     */
    function DelegatePermissions() {
        var _this = _super.call(this) || this;
        _this.delegateFolderPermissions = null;
        var dictionary = new AltDictionary_1.DictionaryWithStringKey();
        dictionary.Add(XmlElementNames_1.XmlElementNames.CalendarFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames_1.XmlElementNames.TasksFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames_1.XmlElementNames.InboxFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames_1.XmlElementNames.ContactsFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames_1.XmlElementNames.NotesFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames_1.XmlElementNames.JournalFolderPermissionLevel, new DelegateFolderPermission());
        _this.delegateFolderPermissions = dictionary;
        return _this;
    }
    Object.defineProperty(DelegatePermissions.prototype, "CalendarFolderPermissionLevel", {
        /**
         * Gets or sets the delegate user's permission on the principal's calendar.
         */
        get: function () {
            return this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.CalendarFolderPermissionLevel).PermissionLevel;
        },
        set: function (value) {
            this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.CalendarFolderPermissionLevel).PermissionLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegatePermissions.prototype, "TasksFolderPermissionLevel", {
        /**
         * Gets or sets the delegate user's permission on the principal's tasks folder.
         */
        get: function () {
            return this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.TasksFolderPermissionLevel).PermissionLevel;
        },
        set: function (value) {
            this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.TasksFolderPermissionLevel).PermissionLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegatePermissions.prototype, "InboxFolderPermissionLevel", {
        /**
         * Gets or sets the delegate user's permission on the principal's inbox.
         */
        get: function () {
            return this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.InboxFolderPermissionLevel).PermissionLevel;
        },
        set: function (value) {
            this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.InboxFolderPermissionLevel).PermissionLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegatePermissions.prototype, "ContactsFolderPermissionLevel", {
        /**
         * Gets or sets the delegate user's permission on the principal's contacts folder.
         */
        get: function () {
            return this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.ContactsFolderPermissionLevel).PermissionLevel;
        },
        set: function (value) {
            this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.ContactsFolderPermissionLevel).PermissionLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegatePermissions.prototype, "NotesFolderPermissionLevel", {
        /**
         * Gets or sets the delegate user's permission on the principal's notes folder.
         */
        get: function () {
            return this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.NotesFolderPermissionLevel).PermissionLevel;
        },
        set: function (value) {
            this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.NotesFolderPermissionLevel).PermissionLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DelegatePermissions.prototype, "JournalFolderPermissionLevel", {
        /**
         * Gets or sets the delegate user's permission on the principal's journal folder.
         */
        get: function () {
            return this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.JournalFolderPermissionLevel).PermissionLevel;
        },
        set: function (value) {
            this.delegateFolderPermissions.get(XmlElementNames_1.XmlElementNames.JournalFolderPermissionLevel).PermissionLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    DelegatePermissions.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            var delegateFolderPermission = null;
            if (this.delegateFolderPermissions.containsKey(key)) {
                delegateFolderPermission = this.delegateFolderPermissions.get(key);
                delegateFolderPermission.Initialize(DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel[jsObject[key]]);
            }
        }
    };
    /**
     * @internal Resets this instance.
     */
    DelegatePermissions.prototype.Reset = function () {
        for (var _i = 0, _a = this.delegateFolderPermissions.Values; _i < _a.length; _i++) {
            var delegateFolderPermission = _a[_i];
            delegateFolderPermission.Reset();
        }
    };
    /**
     * @internal Validates this instance for AddDelegate.
     */
    DelegatePermissions.prototype.ValidateAddDelegate = function () {
        // If any folder permission is Custom, throw
        //
        this.delegateFolderPermissions.Values.forEach(function (permission) {
            if (permission.PermissionLevel == DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel.Custom) {
                throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.CannotSetDelegateFolderPermissionLevelToCustom);
            }
        });
    };
    /**
     * @internal Validates this instance for UpdateDelegate.
     */
    DelegatePermissions.prototype.ValidateUpdateDelegate = function () {
        // If any folder permission was changed to custom, throw
        //
        this.delegateFolderPermissions.Values.forEach(function (permission) {
            if (permission.PermissionLevel == DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel.Custom && !permission.IsExistingPermissionLevelCustom) {
                throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.CannotSetDelegateFolderPermissionLevelToCustom);
            }
        });
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DelegatePermissions.prototype.WriteElementsToXml = function (writer) {
        this.WritePermissionToXml(writer, XmlElementNames_1.XmlElementNames.CalendarFolderPermissionLevel);
        this.WritePermissionToXml(writer, XmlElementNames_1.XmlElementNames.TasksFolderPermissionLevel);
        this.WritePermissionToXml(writer, XmlElementNames_1.XmlElementNames.InboxFolderPermissionLevel);
        this.WritePermissionToXml(writer, XmlElementNames_1.XmlElementNames.ContactsFolderPermissionLevel);
        this.WritePermissionToXml(writer, XmlElementNames_1.XmlElementNames.NotesFolderPermissionLevel);
        this.WritePermissionToXml(writer, XmlElementNames_1.XmlElementNames.JournalFolderPermissionLevel);
    };
    /**
     * Write permission to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   The element name.
     */
    DelegatePermissions.prototype.WritePermissionToXml = function (writer, xmlElementName) {
        var delegateFolderPermissionLevel = this.delegateFolderPermissions.get(xmlElementName).PermissionLevel;
        // UpdateDelegate fails if Custom permission level is round tripped
        //
        if (delegateFolderPermissionLevel != DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel.Custom) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, xmlElementName, DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel[delegateFolderPermissionLevel]);
        }
    };
    return DelegatePermissions;
}(ComplexProperty_1.ComplexProperty));
exports.DelegatePermissions = DelegatePermissions;
/**
 * @internal Represents a folder's DelegateFolderPermissionLevel
 */
var DelegateFolderPermission = /** @class */ (function () {
    function DelegateFolderPermission() {
        /**
         * @internal Gets or sets the delegate user's permission on a principal's folder.
         */
        this.PermissionLevel = DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel.None;
        /**
         * @internal Gets IsExistingPermissionLevelCustom.
         */
        this.IsExistingPermissionLevelCustom = false;
    }
    /**
     * Intializes this DelegateFolderPermission.
     *
     * @param   {DelegateFolderPermissionLevel}   permissionLevel   The DelegateFolderPermissionLevel
     */
    DelegateFolderPermission.prototype.Initialize = function (permissionLevel) {
        this.PermissionLevel = permissionLevel;
        this.IsExistingPermissionLevelCustom = (permissionLevel === DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel.Custom);
    };
    /**
     * @internal Resets this DelegateFolderPermission.
     */
    DelegateFolderPermission.prototype.Reset = function () {
        this.Initialize(DelegateFolderPermissionLevel_1.DelegateFolderPermissionLevel.None);
    };
    return DelegateFolderPermission;
}());
