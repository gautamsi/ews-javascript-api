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
var ArchiveTag_1 = require("../../../ComplexProperties/ArchiveTag");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var EffectiveRightsPropertyDefinition_1 = require("../../../PropertyDefinitions/EffectiveRightsPropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var IntPropertyDefinition_1 = require("../../../PropertyDefinitions/IntPropertyDefinition");
var ManagedFolderInformation_1 = require("../../../ComplexProperties/ManagedFolderInformation");
var PermissionSetPropertyDefinition_1 = require("../../../PropertyDefinitions/PermissionSetPropertyDefinition");
var PolicyTag_1 = require("../../../ComplexProperties/PolicyTag");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var WellKnownFolderName_1 = require("../../../Enumerations/WellKnownFolderName");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObjectSchema_1 = require("./ServiceObjectSchema");
/**
 * Field URIs for folders.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.FolderId = "folder:FolderId";
    FieldUris.ParentFolderId = "folder:ParentFolderId";
    FieldUris.DisplayName = "folder:DisplayName";
    FieldUris.UnreadCount = "folder:UnreadCount";
    FieldUris.TotalCount = "folder:TotalCount";
    FieldUris.ChildFolderCount = "folder:ChildFolderCount";
    FieldUris.FolderClass = "folder:FolderClass";
    FieldUris.ManagedFolderInformation = "folder:ManagedFolderInformation";
    FieldUris.EffectiveRights = "folder:EffectiveRights";
    FieldUris.PermissionSet = "folder:PermissionSet";
    FieldUris.PolicyTag = "folder:PolicyTag";
    FieldUris.ArchiveTag = "folder:ArchiveTag";
    FieldUris.DistinguishedFolderId = "folder:DistinguishedFolderId";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for folders.
 */
var FolderSchema = /** @class */ (function (_super) {
    __extends(FolderSchema, _super);
    function FolderSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    FolderSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(FolderSchema, FolderSchema.Id);
        this.RegisterProperty(FolderSchema, FolderSchema.ParentFolderId);
        this.RegisterProperty(FolderSchema, FolderSchema.FolderClass);
        this.RegisterProperty(FolderSchema, FolderSchema.DisplayName);
        this.RegisterProperty(FolderSchema, FolderSchema.TotalCount);
        this.RegisterProperty(FolderSchema, FolderSchema.ChildFolderCount);
        this.RegisterProperty(FolderSchema, ServiceObjectSchema_1.ServiceObjectSchema.ExtendedProperties);
        this.RegisterProperty(FolderSchema, FolderSchema.ManagedFolderInformation);
        this.RegisterProperty(FolderSchema, FolderSchema.EffectiveRights);
        this.RegisterProperty(FolderSchema, FolderSchema.Permissions);
        this.RegisterProperty(FolderSchema, FolderSchema.UnreadCount);
        this.RegisterProperty(FolderSchema, FolderSchema.WellKnownFolderName);
        this.RegisterProperty(FolderSchema, FolderSchema.PolicyTag);
        this.RegisterProperty(FolderSchema, FolderSchema.ArchiveTag);
    };
    /**
     * Defines the **Id** property.
     */
    FolderSchema.Id = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Id", XmlElementNames_1.XmlElementNames.FolderId, FieldUris.FolderId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new FolderId_1.FolderId(); });
    /**
     * Defines the **FolderClass** property.
     */
    FolderSchema.FolderClass = new StringPropertyDefinition_1.StringPropertyDefinition("FolderClass", XmlElementNames_1.XmlElementNames.FolderClass, FieldUris.FolderClass, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ParentFolderId** property.
     */
    FolderSchema.ParentFolderId = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ParentFolderId", XmlElementNames_1.XmlElementNames.ParentFolderId, FieldUris.ParentFolderId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new FolderId_1.FolderId(); });
    /**
     * Defines the **ChildFolderCount** property.
     */
    FolderSchema.ChildFolderCount = new IntPropertyDefinition_1.IntPropertyDefinition("ChildFolderCount", XmlElementNames_1.XmlElementNames.ChildFolderCount, FieldUris.ChildFolderCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **DisplayName** property.
     */
    FolderSchema.DisplayName = new StringPropertyDefinition_1.StringPropertyDefinition("DisplayName", XmlElementNames_1.XmlElementNames.DisplayName, FieldUris.DisplayName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **UnreadCount** property.
     */
    FolderSchema.UnreadCount = new IntPropertyDefinition_1.IntPropertyDefinition("UnreadCount", XmlElementNames_1.XmlElementNames.UnreadCount, FieldUris.UnreadCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **TotalCount** property.
     */
    FolderSchema.TotalCount = new IntPropertyDefinition_1.IntPropertyDefinition("TotalCount", XmlElementNames_1.XmlElementNames.TotalCount, FieldUris.TotalCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ManagedFolderInformation** property.
     */
    FolderSchema.ManagedFolderInformation = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ManagedFolderInformation", XmlElementNames_1.XmlElementNames.ManagedFolderInformation, FieldUris.ManagedFolderInformation, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ManagedFolderInformation_1.ManagedFolderInformation(); });
    /**
     * Defines the **EffectiveRights** property.
     */
    FolderSchema.EffectiveRights = new EffectiveRightsPropertyDefinition_1.EffectiveRightsPropertyDefinition("EffectiveRights", XmlElementNames_1.XmlElementNames.EffectiveRights, FieldUris.EffectiveRights, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Permissions** property.
     */
    FolderSchema.Permissions = new PermissionSetPropertyDefinition_1.PermissionSetPropertyDefinition("Permissions", XmlElementNames_1.XmlElementNames.PermissionSet, FieldUris.PermissionSet, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.MustBeExplicitlyLoaded, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **WellKnownFolderName** property.
     */
    FolderSchema.WellKnownFolderName = new GenericPropertyDefinition_1.GenericPropertyDefinition("WellKnownFolderName", XmlElementNames_1.XmlElementNames.DistinguishedFolderId, FieldUris.DistinguishedFolderId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, WellKnownFolderName_1.WellKnownFolderName);
    /**
     * Defines the **PolicyTag** property.
     */
    FolderSchema.PolicyTag = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("PolicyTag", XmlElementNames_1.XmlElementNames.PolicyTag, FieldUris.PolicyTag, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new PolicyTag_1.PolicyTag(); });
    /**
     * Defines the **ArchiveTag** property.
     */
    FolderSchema.ArchiveTag = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ArchiveTag", XmlElementNames_1.XmlElementNames.ArchiveTag, FieldUris.ArchiveTag, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new ArchiveTag_1.ArchiveTag(); });
    /**
     * @internal Instance of **FolderSchema**
     */
    FolderSchema.Instance = new FolderSchema();
    return FolderSchema;
}(ServiceObjectSchema_1.ServiceObjectSchema));
exports.FolderSchema = FolderSchema;
