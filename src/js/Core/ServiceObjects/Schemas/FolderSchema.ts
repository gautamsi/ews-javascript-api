import {XmlElementNames} from "../../XmlElementNames";
import {PolicyTag} from "../../../ComplexProperties/PolicyTag";
import {ArchiveTag} from "../../../ComplexProperties/ArchiveTag";
import {ManagedFolderInformation} from "../../../ComplexProperties/ManagedFolderInformation";
import {PermissionSetPropertyDefinition} from "../../../PropertyDefinitions/PermissionSetPropertyDefinition";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {IntPropertyDefinition} from "../../../PropertyDefinitions/IntPropertyDefinition";
import {EffectiveRightsPropertyDefinition} from "../../../PropertyDefinitions/EffectiveRightsPropertyDefinition";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {FolderId} from "../../../ComplexProperties/FolderId";

import {ServiceObjectSchema} from "./ServiceObjectSchema";

/**
 * Field URIs for folders.
 */
module FieldUris {
    export var FolderId: string = "folder:FolderId";
    export var ParentFolderId: string = "folder:ParentFolderId";
    export var DisplayName: string = "folder:DisplayName";
    export var UnreadCount: string = "folder:UnreadCount";
    export var TotalCount: string = "folder:TotalCount";
    export var ChildFolderCount: string = "folder:ChildFolderCount";
    export var FolderClass: string = "folder:FolderClass";
    export var ManagedFolderInformation: string = "folder:ManagedFolderInformation";
    export var EffectiveRights: string = "folder:EffectiveRights";
    export var PermissionSet: string = "folder:PermissionSet";
    export var PolicyTag: string = "folder:PolicyTag";
    export var ArchiveTag: string = "folder:ArchiveTag";
    export var DistinguishedFolderId: string = "folder:DistinguishedFolderId";
}

/**
 * Represents the schema for folders.
 */
export class FolderSchema extends ServiceObjectSchema {

    /**
     * Defines the **Id** property.
     */
    public static Id: PropertyDefinition = new ComplexPropertyDefinition<FolderId>(
        "Id",
        XmlElementNames.FolderId,
        FieldUris.FolderId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new FolderId(); }
    );

    /**
     * Defines the **FolderClass** property.
     */
    public static FolderClass: PropertyDefinition = new StringPropertyDefinition(
        "FolderClass",
        XmlElementNames.FolderClass,
        FieldUris.FolderClass,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ParentFolderId** property.
     */
    public static ParentFolderId: PropertyDefinition = new ComplexPropertyDefinition<FolderId>(
        "ParentFolderId",
        XmlElementNames.ParentFolderId,
        FieldUris.ParentFolderId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new FolderId(); }
    );

    /**
     * Defines the **ChildFolderCount** property.
     */
    public static ChildFolderCount: PropertyDefinition = new IntPropertyDefinition(
        "ChildFolderCount",
        XmlElementNames.ChildFolderCount,
        FieldUris.ChildFolderCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **DisplayName** property.
     */
    public static DisplayName: PropertyDefinition = new StringPropertyDefinition(
        "DisplayName",
        XmlElementNames.DisplayName,
        FieldUris.DisplayName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **UnreadCount** property.
     */
    public static UnreadCount: PropertyDefinition = new IntPropertyDefinition(
        "UnreadCount",
        XmlElementNames.UnreadCount,
        FieldUris.UnreadCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **TotalCount** property.
     */
    public static TotalCount: PropertyDefinition = new IntPropertyDefinition(
        "TotalCount",
        XmlElementNames.TotalCount,
        FieldUris.TotalCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ManagedFolderInformation** property.
     */
    public static ManagedFolderInformation: PropertyDefinition = new ComplexPropertyDefinition<ManagedFolderInformation>(
        "ManagedFolderInformation",
        XmlElementNames.ManagedFolderInformation,
        FieldUris.ManagedFolderInformation,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ManagedFolderInformation(); }
    );

    /**
     * Defines the **EffectiveRights** property.
     */
    public static EffectiveRights: PropertyDefinition = new EffectiveRightsPropertyDefinition(
        "EffectiveRights",
        XmlElementNames.EffectiveRights,
        FieldUris.EffectiveRights,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Permissions** property.
     */
    public static Permissions: PropertyDefinition = new PermissionSetPropertyDefinition(
        "Permissions",
        XmlElementNames.PermissionSet,
        FieldUris.PermissionSet,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.MustBeExplicitlyLoaded,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **WellKnownFolderName** property.
     */
    public static WellKnownFolderName: PropertyDefinition = new GenericPropertyDefinition<WellKnownFolderName>(
        "WellKnownFolderName",
        XmlElementNames.DistinguishedFolderId,
        FieldUris.DistinguishedFolderId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013
    );

    /**
     * Defines the **PolicyTag** property.
     */
    public static PolicyTag: PropertyDefinition = new ComplexPropertyDefinition<PolicyTag>(
        "PolicyTag",
        XmlElementNames.PolicyTag,
        FieldUris.PolicyTag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new PolicyTag(); }
    );

    /**
     * Defines the **ArchiveTag** property.
     */
    public static ArchiveTag: PropertyDefinition = new ComplexPropertyDefinition<ArchiveTag>(
        "ArchiveTag",
        XmlElementNames.ArchiveTag,
        FieldUris.ArchiveTag,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2013,
        () => { return new ArchiveTag(); }
    );

    /**
     * @internal Instance of **FolderSchema** 
     */
    static Instance: FolderSchema = new FolderSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
        this.RegisterProperty(FolderSchema, FolderSchema.Id);
        this.RegisterProperty(FolderSchema, FolderSchema.ParentFolderId);
        this.RegisterProperty(FolderSchema, FolderSchema.FolderClass);
        this.RegisterProperty(FolderSchema, FolderSchema.DisplayName);
        this.RegisterProperty(FolderSchema, FolderSchema.TotalCount);
        this.RegisterProperty(FolderSchema, FolderSchema.ChildFolderCount);
        this.RegisterProperty(FolderSchema, ServiceObjectSchema.ExtendedProperties);
        this.RegisterProperty(FolderSchema, FolderSchema.ManagedFolderInformation);
        this.RegisterProperty(FolderSchema, FolderSchema.EffectiveRights);
        this.RegisterProperty(FolderSchema, FolderSchema.Permissions);
        this.RegisterProperty(FolderSchema, FolderSchema.UnreadCount);
        this.RegisterProperty(FolderSchema, FolderSchema.WellKnownFolderName);
        this.RegisterProperty(FolderSchema, FolderSchema.PolicyTag);
        this.RegisterProperty(FolderSchema, FolderSchema.ArchiveTag);
    }
}

/**
 * Represents the schema for folders.
 */
export interface FolderSchema {
    /**
     * Defines the **Id** property.
     */
    Id: PropertyDefinition;
    /**
     * Defines the **FolderClass** property.
     */
    FolderClass: PropertyDefinition;
    /**
     * Defines the **ParentFolderId** property.
     */
    ParentFolderId: PropertyDefinition;
    /**
     * Defines the **ChildFolderCount** property.
     */
    ChildFolderCount: PropertyDefinition;
    /**
     * Defines the **DisplayName** property.
     */
    DisplayName: PropertyDefinition;
    /**
     * Defines the **UnreadCount** property.
     */
    UnreadCount: PropertyDefinition;
    /**
     * Defines the **TotalCount** property.
     */
    TotalCount: PropertyDefinition;
    /**
     * Defines the **ManagedFolderInformation** property.
     */
    ManagedFolderInformation: PropertyDefinition;
    /**
     * Defines the **EffectiveRights** property.
     */
    EffectiveRights: PropertyDefinition;
    /**
     * Defines the **Permissions** property.
     */
    Permissions: PropertyDefinition;
    /**
     * Defines the **WellKnownFolderName** property.
     */
    WellKnownFolderName: PropertyDefinition;
    /**
     * Defines the **PolicyTag** property.
     */
    PolicyTag: PropertyDefinition;
    /**
     * Defines the **ArchiveTag** property.
     */
    ArchiveTag: PropertyDefinition;
    /**
     * @internal Instance of **FolderSchema**
     */
    Instance: FolderSchema;
}

/**
 * Represents the schema for folders.
 */
export interface FolderSchemaStatic extends FolderSchema {
}