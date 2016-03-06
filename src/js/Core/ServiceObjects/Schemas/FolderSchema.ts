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

export class FolderSchema extends ServiceObjectSchema {

    public Id: PropertyDefinition;
    public FolderClass: PropertyDefinition;
    public ParentFolderId: PropertyDefinition;
    public ChildFolderCount: PropertyDefinition;
    public DisplayName: PropertyDefinition;
    public UnreadCount: PropertyDefinition;
    public TotalCount: PropertyDefinition;
    public ManagedFolderInformation: PropertyDefinition;
    public EffectiveRights: PropertyDefinition;
    public Permissions: PropertyDefinition;
    public WellKnownFolderName: PropertyDefinition;
    public PolicyTag: PropertyDefinition;
    public ArchiveTag: PropertyDefinition;

    static Instance: FolderSchema = new FolderSchema();

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
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.FolderId,
            PropertyDefinitionFlags.CanFind,
            () => { return new FolderId(); }
        );

        this.FolderClass = new StringPropertyDefinition(
            "FolderClass",
            XmlElementNames.FolderClass,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.FolderClass,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.ParentFolderId = new ComplexPropertyDefinition<FolderId>(
            "ParentFolderId",
            XmlElementNames.ParentFolderId,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ParentFolderId,
            PropertyDefinitionFlags.CanFind,
            () => { return new FolderId(); }
        );

        this.ChildFolderCount = new IntPropertyDefinition(
            "ChildFolderCount",
            XmlElementNames.ChildFolderCount,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ChildFolderCount,
            PropertyDefinitionFlags.CanFind
        );


        this.DisplayName = new StringPropertyDefinition(
            "DisplayName",
            XmlElementNames.DisplayName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DisplayName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.UnreadCount = new IntPropertyDefinition(
            "UnreadCount",
            XmlElementNames.UnreadCount,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.UnreadCount,
            PropertyDefinitionFlags.CanFind
        );

        this.TotalCount = new IntPropertyDefinition(
            "TotalCount",
            XmlElementNames.TotalCount,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.TotalCount,
            PropertyDefinitionFlags.CanFind
        );

        this.ManagedFolderInformation = new ComplexPropertyDefinition<ManagedFolderInformation>(
            "ManagedFolderInformation",
            XmlElementNames.ManagedFolderInformation,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ManagedFolderInformation,
            PropertyDefinitionFlags.CanFind,
            () => { return new ManagedFolderInformation(); }
        );

        this.EffectiveRights = new EffectiveRightsPropertyDefinition(
            "EffectiveRights",
            XmlElementNames.EffectiveRights,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.EffectiveRights,
            PropertyDefinitionFlags.CanFind
        );

        this.Permissions = new PermissionSetPropertyDefinition(
            "Permissions",
            XmlElementNames.PermissionSet,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.PermissionSet,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.MustBeExplicitlyLoaded
        );

        this.WellKnownFolderName = new GenericPropertyDefinition<WellKnownFolderName>(
            "WellKnownFolderName",
            XmlElementNames.DistinguishedFolderId,
            ExchangeVersion.Exchange2013,
            FieldUris.DistinguishedFolderId,
            PropertyDefinitionFlags.CanFind
        );

        this.PolicyTag = new ComplexPropertyDefinition<PolicyTag>(
            "PolicyTag",
            XmlElementNames.PolicyTag,
            ExchangeVersion.Exchange2013,
            FieldUris.PolicyTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new PolicyTag(); }
        );

        this.ArchiveTag = new ComplexPropertyDefinition<ArchiveTag>(
            "ArchiveTag",
            XmlElementNames.ArchiveTag,
            ExchangeVersion.Exchange2013,
            FieldUris.ArchiveTag,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new ArchiveTag(); }
        );
    }
}