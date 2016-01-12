import {FolderPermissionCollection} from "../ComplexProperties/FolderPermissionCollection";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {XmlElementNames} from "../Core/XmlElementNames";
import {Folder} from "../Core/ServiceObjects/Folders/Folder";
import {EwsLogging} from "../Core/EwsLogging";
import {ComplexPropertyDefinitionBase} from "./ComplexPropertyDefinitionBase";
export class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
    get Type(): any {//} Type {
        return undefined;// new Type("FolderPermissionCollection");
    }
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri: string, flags: PropertyDefinitionFlags) {
        super(propertyName, xmlElementName, version, uri, flags);
    }
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty {
        var folder: Folder = owner.InstanceType === XmlElementNames.Folder ? <Folder>owner : null;// ((owner instanceof Folder) ? <Folder>owner : null);
        EwsLogging.Assert(folder !== null, "PermissionCollectionPropertyDefinition.CreatePropertyInstance", "The owner parameter is not of type Folder or a derived class.");
        return new FolderPermissionCollection(folder);
    }
}