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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtensionMethods_1 = require("../ExtensionMethods");
var WellKnownFolderName_1 = require("../Enumerations/WellKnownFolderName");
var ServiceId_1 = require("./ServiceId");
var FolderId = /** @class */ (function (_super) {
    __extends(FolderId, _super);
    //    constructor(uniqueId?: string, folderName?: WellKnownFolderName, mailbox?: Mailbox) {
    //        super(uniqueId);
    //
    //        this.mailbox = mailbox;
    //        this.folderName = folderName;
    //    }
    function FolderId(folderName, mailbox) {
        var _this = _super.call(this) || this;
        _this.mailbox = mailbox;
        _this.folderName = folderName;
        return _this;
    }
    Object.defineProperty(FolderId.prototype, "FolderName", {
        get: function () { return this.folderName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderId.prototype, "Mailbox", {
        get: function () { return this.mailbox; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FolderId.prototype, "IsValid", {
        get: function () {
            if (this.FolderName) {
                return (this.Mailbox == null) || this.Mailbox.IsValid;
            }
            else {
                return _super.prototype.IsValidProxy.call(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    FolderId.prototype.Equals = function (obj) {
        if (this === obj) {
            return true;
        }
        else {
            var other = obj;
            if (!(other instanceof FolderId)) {
                return false;
            }
            else if (this.FolderName) {
                if (other.FolderName && this.FolderName === other.FolderName) {
                    if (this.Mailbox != null) {
                        return this.Mailbox.Equals(other.Mailbox);
                    }
                    else if (other.Mailbox == null) {
                        return true;
                    }
                }
            }
            else if (_super.prototype.Equals.call(this, other)) {
                return true;
            }
            return false;
        }
    };
    //GetHashCode(): number { throw new Error("FolderId.ts - GetHashCode : Not implemented."); }
    FolderId.prototype.GetXmlElementName = function () { return typeof this.folderName !== 'undefined' && this.FolderName >= 0 ? XmlElementNames_1.XmlElementNames.DistinguishedFolderId : XmlElementNames_1.XmlElementNames.FolderId; };
    FolderId.prototype.ToString = function () {
        if (this.IsValid) {
            if (this.FolderName) {
                if ((this.mailbox != null) && this.mailbox.IsValid) {
                    return ExtensionMethods_1.StringHelper.Format("{0} ({1})", WellKnownFolderName_1.WellKnownFolderName[this.folderName], this.Mailbox.ToString());
                }
                else {
                    return WellKnownFolderName_1.WellKnownFolderName[this.FolderName];
                }
            }
            else {
                return _super.prototype.ToString.call(this);
            }
        }
        else {
            return "";
        }
    };
    FolderId.prototype.Validate = function (version) {
        if (version) {
            // The FolderName property is a WellKnownFolderName, an enumeration type. If the property
            // is set, make sure that the value is valid for the request version.
            if (this.FolderName) {
                EwsUtilities_1.EwsUtilities.ValidateEnumVersionValue(WellKnownFolderName_1.WellKnownFolderName, this.FolderName, version, "WellKnownFolderName");
            }
        }
        else {
            _super.prototype.Validate.call(this);
        }
    };
    /**@internal */
    FolderId.prototype.WriteAttributesToXml = function (writer) {
        if (typeof this.folderName !== 'undefined' && this.FolderName >= 0) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, WellKnownFolderName_1.WellKnownFolderName[this.FolderName].toLowerCase());
            if (this.Mailbox != null) {
                this.Mailbox.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Mailbox);
            }
        }
        else {
            _super.prototype.WriteAttributesToXml.call(this, writer);
        }
    };
    return FolderId;
}(ServiceId_1.ServiceId));
exports.FolderId = FolderId;
