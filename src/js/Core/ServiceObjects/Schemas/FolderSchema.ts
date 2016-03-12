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
    public Id: PropertyDefinition;

    /**
     * Defines the **FolderClass** property.
     */
    public FolderClass: PropertyDefinition;

    /**
     * Defines the **ParentFolderId** property.
     */
    public ParentFolderId: PropertyDefinition;

    /**
     * Defines the **ChildFolderCount** property.
     */
    public ChildFolderCount: PropertyDefinition;

    /**
     * Defines the **DisplayName** property.
     */
    public DisplayName: PropertyDefinition;

    /**
     * Defines the **UnreadCount** property.
     */
    public UnreadCount: PropertyDefinition;

    /**
     * Defines the **TotalCount** property.
     */
    public TotalCount: PropertyDefinition;

    /**
     * Defines the **ManagedFolderInformation** property.
     */
    public ManagedFolderInformation: PropertyDefinition;

    /**
     * Defines the **EffectiveRights** property.
     */
    public EffectiveRights: PropertyDefinition;

    /**
     * Defines the **Permissions** property.
     */
    public Permissions: PropertyDefinition;

    /**
     * Defines the **WellKnownFolderName** property.
     */
    public WellKnownFolderName: PropertyDefinition;

    /**
     * Defines the **PolicyTag** property.
     */
    public PolicyTag: PropertyDefinition;

    /**
     * Defines the **ArchiveTag** property.
     */
    public ArchiveTag: PropertyDefinition;

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
        this.RegisterProperty(this.Id);
        this.RegisterProperty(this.ParentFolderId);
        this.RegisterProperty(this.FolderClass);
        this.RegisterProperty(this.DisplayName);
        this.RegisterProperty(this.TotalCount);
        this.RegisterProperty(this.ChildFolderCount);
        this.RegisterProperty(ServiceObjectSchema.ExtendedProperties);
        this.RegisterProperty(this.ManagedFolderInformation);
        this.RegisterProperty(this.EffectiveRights);
        this.RegisterProperty(this.Permissions);
        this.RegisterProperty(this.UnreadCount);
        this.RegisterProperty(this.WellKnownFolderName);
        this.RegisterProperty(this.PolicyTag);
        this.RegisterProperty(this.ArchiveTag);
    }

    protected init() {
        super.init();
        this.Id = new ComplexPropertyDefinition<FolderId>(
            "Id",
            XmlElementNames.FolderId,
            FieldUris.FolderId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new FolderId(); }
        );

        this.FolderClass = new StringPropertyDefinition(
            "FolderClass",
            XmlElementNames.FolderClass,
            FieldUris.FolderClass,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ParentFolderId = new ComplexPropertyDefinition<FolderId>(
            "ParentFolderId",
            XmlElementNames.ParentFolderId,
            FieldUris.ParentFolderId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new FolderId(); }
        );

        this.ChildFolderCount = new IntPropertyDefinition(
            "ChildFolderCount",
            XmlElementNames.ChildFolderCount,
            FieldUris.ChildFolderCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );


        this.DisplayName = new StringPropertyDefinition(
            "DisplayName",
            XmlElementNames.DisplayName,
            FieldUris.DisplayName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.UnreadCount = new IntPropertyDefinition(
            "UnreadCount",
            XmlElementNames.UnreadCount,
            FieldUris.UnreadCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.TotalCount = new IntPropertyDefinition(
            "TotalCount",
            XmlElementNames.TotalCount,
            FieldUris.TotalCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ManagedFolderInformation = new ComplexPropertyDefinition<ManagedFolderInformation>(
            "ManagedFolderInformation",
            XmlElementNames.ManagedFolderInformation,
            FieldUris.ManagedFolderInformation,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ManagedFolderInformation(); }
        );

        this.EffectiveRights = new EffectiveRightsPropertyDefinition(
            "EffectiveRights",
            XmlElementNames.EffectiveRights,
            FieldUris.EffectiveRights,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Permissions = new PermissionSetPropertyDefinition(
            "Permissions",
            XmlElementNames.PermissionSet,
            FieldUris.PermissionSet,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.MustBeExplicitlyLoaded,
            ExchangeVersion.Exchange2007_SP1
        );

        this.WellKnownFolderName = new GenericPropertyDefinition<WellKnownFolderName>(
            "WellKnownFolderName",
            XmlElementNames.DistinguishedFolderId,
            FieldUris.DistinguishedFolderId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013
        );

        this.PolicyTag = new ComplexPropertyDefinition<PolicyTag>(
            "PolicyTag",
            XmlElementNames.PolicyTag,
            FieldUris.PolicyTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new PolicyTag(); }
        );

        this.ArchiveTag = new ComplexPropertyDefinition<ArchiveTag>(
            "ArchiveTag",
            XmlElementNames.ArchiveTag,
            FieldUris.ArchiveTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2013,
            () => { return new ArchiveTag(); }
        );
    }
}