import EwsServiceJsonReader = require("../EwsServiceJsonReader");
import Folder = require("../ServiceObjects/Folders/Folder");
import FolderInfo = require("../ServiceObjects/Folders/FolderInfo");
import PropertySet = require("../PropertySet");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import ExchangeService = require("../ExchangeService");
import EwsUtilities = require("../EwsUtilities");
import {EwsLogging} from "../EwsLogging";
import XmlElementNames = require("../XmlElementNames");
import {TypeSystem} from "../../ExtensionMethods";
import ServiceResponse = require("./ServiceResponse");
class GetFolderResponse extends ServiceResponse {
    get Folder(): Folder { return this.folder; }
    private folder: Folder;
    private propertySet: PropertySet;

    constructor(folder: Folder, propertySet: PropertySet) {
        super();

        this.folder = folder;
        this.propertySet = propertySet;

        EwsLogging.Assert(
            this.propertySet != null,
            "GetFolderResponse.ctor",
            "PropertySet should not be null");
    }

    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder {
        if (this.Folder != null) {
            return this.Folder;
        }
        else {
            var flinfo: FolderInfo = new FolderInfo();
            return flinfo.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);
        }
    }
    ReadElementsFromJson(responseObject: any /*JsonObject*/, service: ExchangeService): void {
        super.ReadElementsFromJson(responseObject, service);

        var folders: Folder[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Folder>(
            responseObject,
            service,
            XmlElementNames.Folders,
            this.GetObjectInstance,
            true,               /* clearPropertyBag */
            this.propertySet,   /* requestedPropertySet */
            false);             /* summaryPropertiesOnly */

        this.folder = folders[0];
    }
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(jsObject, service);
        jsObject = jsObject[XmlElementNames.Folders];
        var folders: Folder[] = [];
        var responseFolders: any[] = jsObject;
        if (!Array.isArray(responseFolders))
            responseFolders = [responseFolders];

        for (var responseFolder of responseFolders) {
            var folderTypeName = TypeSystem.GetJsObjectTypeName(responseFolder);
            if (folderTypeName) {
                var instance: Folder = this.GetObjectInstance(service, folderTypeName);
                instance.LoadFromXmlJsObject(responseFolder[folderTypeName], service, true, this.propertySet, false);
                var v = instance;
                folders.push(instance);
                debugger;
            } else throw new Error("error determining typename");
        }
        //         = reader.ReadServiceObjectsCollectionFromXml<Folder>(
        //            XmlElementNames.Folders,
        //            this.GetObjectInstance,
        //            true,               /* clearPropertyBag */
        //            this.propertySet,   /* requestedPropertySet */
        //            false);             /* summaryPropertiesOnly */

        this.folder = folders[0];
    }

}

export = GetFolderResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
