import PolicyTag = require("../../../ComplexProperties/PolicyTag");
import ArchiveTag = require("../../../ComplexProperties/ArchiveTag");
import ManagedFolderInformation = require("../../../ComplexProperties/ManagedFolderInformation");
import PermissionSetPropertyDefinition = require("../../../PropertyDefinitions/PermissionSetPropertyDefinition");
import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import StringPropertyDefinition = require("../../../PropertyDefinitions/StringPropertyDefinition");
import IntPropertyDefinition = require("../../../PropertyDefinitions/IntPropertyDefinition");
import EffectiveRightsPropertyDefinition = require("../../../PropertyDefinitions/EffectiveRightsPropertyDefinition");
import GenericPropertyDefinition = require("../../../PropertyDefinitions/GenericPropertyDefinition");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
import PropertyDefinitionFlags = require("../../../Enumerations/PropertyDefinitionFlags");
import ComplexPropertyDefinition = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
import XmlElementNames = require("../../XmlElementNames");
import FolderId = require("../../../ComplexProperties/FolderId");

import ServiceObjectSchema = require("./ServiceObjectSchema");
class FolderSchema extends ServiceObjectSchema {
  /* <summary>
  /// Field URIs for folders.
  /// </summary>*/

  static Id: PropertyDefinition = new ComplexPropertyDefinition<FolderId>(
    XmlElementNames.FolderId,
    FolderSchema.FieldUris.FolderId,
    PropertyDefinitionFlags.CanFind,
    ExchangeVersion.Exchange2007_SP1,
    () => { return new FolderId(); });

  static FolderClass: PropertyDefinition = new StringPropertyDefinition(
    XmlElementNames.FolderClass,
    ExchangeVersion.Exchange2007_SP1,
    FolderSchema.FieldUris.FolderClass,
    PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind );

  static ParentFolderId: PropertyDefinition = new ComplexPropertyDefinition<FolderId>(
    XmlElementNames.ParentFolderId,
    FolderSchema.FieldUris.ParentFolderId,
    PropertyDefinitionFlags.CanFind,
    ExchangeVersion.Exchange2007_SP1,
   ()=> { return new FolderId(); });

  static ChildFolderCount: PropertyDefinition = new IntPropertyDefinition(
          XmlElementNames.ChildFolderCount,
          ExchangeVersion.Exchange2007_SP1,
          FolderSchema.FieldUris.ChildFolderCount,
          PropertyDefinitionFlags.CanFind);
         
 
  static DisplayName: PropertyDefinition = new StringPropertyDefinition(
      XmlElementNames.DisplayName,
      ExchangeVersion.Exchange2007_SP1, 
      FolderSchema.FieldUris.DisplayName,
      PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind);

  static UnreadCount: PropertyDefinition = new IntPropertyDefinition(
      XmlElementNames.UnreadCount,
      ExchangeVersion.Exchange2007_SP1,
      FolderSchema.FieldUris.UnreadCount,
      PropertyDefinitionFlags.CanFind);

  static TotalCount: PropertyDefinition = new IntPropertyDefinition(
      XmlElementNames.TotalCount,
      ExchangeVersion.Exchange2007_SP1,
      FolderSchema.FieldUris.TotalCount,
      PropertyDefinitionFlags.CanFind);

  static ManagedFolderInformation: PropertyDefinition = new ComplexPropertyDefinition<ManagedFolderInformation>(
      XmlElementNames.ManagedFolderInformation,
      FolderSchema.FieldUris.ManagedFolderInformation,
      PropertyDefinitionFlags.CanFind,
      ExchangeVersion.Exchange2007_SP1,
      () =>{ return new ManagedFolderInformation(); });

  static EffectiveRights: PropertyDefinition = new EffectiveRightsPropertyDefinition(
      XmlElementNames.EffectiveRights,
      ExchangeVersion.Exchange2007_SP1,
      FolderSchema.FieldUris.EffectiveRights,
      PropertyDefinitionFlags.CanFind);

  static Permissions: PropertyDefinition = new PermissionSetPropertyDefinition(
      XmlElementNames.PermissionSet,
      ExchangeVersion.Exchange2007_SP1,
      FolderSchema.FieldUris.PermissionSet,
      PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.MustBeExplicitlyLoaded);

  static WellKnownFolderName: PropertyDefinition = new GenericPropertyDefinition<WellKnownFolderName>(
      XmlElementNames.DistinguishedFolderId,
      ExchangeVersion.Exchange2013,
      FolderSchema.FieldUris.DistinguishedFolderId,
      PropertyDefinitionFlags.CanFind);
      
  static PolicyTag: PropertyDefinition = new ComplexPropertyDefinition<PolicyTag>(
      XmlElementNames.PolicyTag,
      FolderSchema.FieldUris.PolicyTag,
      PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
      ExchangeVersion.Exchange2013,
      ()=> { return new PolicyTag(); });

  static ArchiveTag: PropertyDefinition = new ComplexPropertyDefinition<ArchiveTag>(
      XmlElementNames.ArchiveTag,
      FolderSchema.FieldUris.ArchiveTag,
      PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
      ExchangeVersion.Exchange2013,
      ()=> { return new ArchiveTag(); });

  static Instance: FolderSchema = new FolderSchema();

RegisterProperties(): void {

    super.RegisterProperties();

    this.RegisterProperty(FolderSchema.Id);
this.RegisterProperty(FolderSchema.ParentFolderId);
this.RegisterProperty(FolderSchema.FolderClass);
this.RegisterProperty(FolderSchema.DisplayName);
this.RegisterProperty(FolderSchema.TotalCount);
this.RegisterProperty(FolderSchema.ChildFolderCount);
this.RegisterProperty(ServiceObjectSchema.ExtendedProperties);
this.RegisterProperty(FolderSchema.ManagedFolderInformation);
this.RegisterProperty(FolderSchema.EffectiveRights);
this.RegisterProperty(FolderSchema.Permissions);
this.RegisterProperty(FolderSchema.UnreadCount);
this.RegisterProperty(FolderSchema.WellKnownFolderName);
this.RegisterProperty(FolderSchema.PolicyTag);
this.RegisterProperty(FolderSchema.ArchiveTag);
  }
}
module FolderSchema {
  export class FieldUris {
    //const become static

    public static FolderId: string = "folder:FolderId";
    public static ParentFolderId: string = "folder:ParentFolderId";
    public static DisplayName: string = "folder:DisplayName";
    public static UnreadCount: string = "folder:UnreadCount";
    public static TotalCount: string = "folder:TotalCount";
    public static ChildFolderCount: string = "folder:ChildFolderCount";
    public static FolderClass: string = "folder:FolderClass";
    public static ManagedFolderInformation: string = "folder:ManagedFolderInformation";
    public static EffectiveRights: string = "folder:EffectiveRights";
    public static PermissionSet: string = "folder:PermissionSet";
    public static PolicyTag: string = "folder:PolicyTag";
    public static ArchiveTag: string = "folder:ArchiveTag";
    public static DistinguishedFolderId: string = "folder:DistinguishedFolderId";
  }
}

//module Microsoft.Exchange.WebServices.Data.FolderSchema {
//    export module FieldUris {
//        export var /* static*/ FolderId: string = "folder:FolderId";
//        export var /* static*/ ParentFolderId: string = "folder:ParentFolderId";
//        export var /* static*/ DisplayName: string = "folder:DisplayName";
//        export var /* static*/ UnreadCount: string = "folder:UnreadCount";
//        export var /* static*/ TotalCount: string = "folder:TotalCount";
//        export var /* static*/ ChildFolderCount: string = "folder:ChildFolderCount";
//        export var /* static*/ FolderClass: string = "folder:FolderClass";
//        export var /* static*/ ManagedFolderInformation: string = "folder:ManagedFolderInformation";
//        export var /* static*/ EffectiveRights: string = "folder:EffectiveRights";
//        export var /* static*/ PermissionSet: string = "folder:PermissionSet";
//        export var /* static*/ PolicyTag: string = "folder:PolicyTag";
//        export var /* static*/ ArchiveTag: string = "folder:ArchiveTag";
//        export var /* static*/ DistinguishedFolderId: string = "folder:DistinguishedFolderId";
//    }
//}


export = FolderSchema;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
