import FolderPermissionCollection = require("../ComplexProperties/FolderPermissionCollection");
import ComplexPropertyDefinitionBase = require("./ComplexPropertyDefinitionBase");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import Folder = require("../Core/ServiceObjects/Folders/Folder");
import EwsUtilities = require("../Core/EwsUtilities");
class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
    get Type(): any {//} Type {
        return undefined;// new Type("FolderPermissionCollection");
    }
    constructor(xmlElementName: string, version: ExchangeVersion, uri: string, flags: PropertyDefinitionFlags) {
        super(xmlElementName, version, uri, flags);
    }
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty {
        var folder: Folder = ((owner instanceof Folder) ? <Folder>owner : null);
        EwsUtilities.Assert(folder !== null, "PermissionCollectionPropertyDefinition.CreatePropertyInstance", "The owner parameter is not of type Folder or a derived class.");
        return new FolderPermissionCollection(folder);
    }
}
export = PermissionSetPropertyDefinition;

