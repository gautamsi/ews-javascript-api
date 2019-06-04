// import {FolderPermissionCollection} from "../ComplexProperties/FolderPermissionCollection";
// import {ComplexPropertyDefinitionBase} from "./ComplexPropertyDefinitionBase";
// import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
// import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
// import {TypeContainer} from "../TypeContainer";
// import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
// import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
// import {Folder} from "../Core/ServiceObjects/Folders/Folder";
// import {EwsLogging} from "../Core/EwsLogging";
// /**
//  * @internal Represents permission set property definition.
//  */
// export class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
//     /**
//      * Gets the property type.
//      */
//     get Type(): any {//} Type {
//         return undefined;// new Type("FolderPermissionCollection");
//     }
//     /**
//      * @internal Initializes a new instance of the **PermissionSetPropertyDefinition** class.
//      *
//      * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
//      * @param   {string}                    xmlElementName   Name of the XML element.
//      * @param   {string}                    uri              The URI.
//      * @param   {PropertyDefinitionFlags}   flags            The flags.
//      * @param   {ExchangeVersion}           version          The version.
//      */
//     constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion){
//         super(propertyName, xmlElementName, uri, flags, version);
//     }
//     /**
//      * @internal Creates the property instance.
//      *
//      * @param   {ServiceObject}   owner   The owner.
//      * @return  {ComplexProperty}       ComplexProperty.
//      */
//     CreatePropertyInstance(owner: ServiceObject): ComplexProperty {
//         var folder: Folder = owner instanceof TypeContainer.Folder ? <Folder>owner : null;
//         EwsLogging.Assert(folder !== null, "PermissionCollectionPropertyDefinition.CreatePropertyInstance", "The owner parameter is not of type Folder or a derived class.");
//         return new FolderPermissionCollection(folder);
//     }
// }
