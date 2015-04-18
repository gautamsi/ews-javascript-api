import Folder = require("../ServiceObjects/Folders/Folder");
import PropertySet = require("../PropertySet");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import ExchangeService = require("../ExchangeService");
import EwsUtilities = require("../EwsUtilities");
import XmlElementNames = require("../XmlElementNames");

import ServiceResponse = require("./ServiceResponse");
class GetFolderResponse extends ServiceResponse {
    get Folder(): Folder { return this.folder; }
    private folder: Folder;
    private propertySet: PropertySet;

    constructor(folder: Folder, propertySet: PropertySet) {
        super();

        this.folder = folder;
        this.propertySet = propertySet;

        EwsUtilities.Assert(
            this.propertySet != null,
            "GetFolderResponse.ctor",
            "PropertySet should not be null");
    }

    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder {
        if (this.Folder != null) {
            return this.Folder;
        }
        else {
            return EwsUtilities.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);
        }
    }
    //ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): void {
        super.ReadElementsFromXml(reader);

        var folders: Folder[] = reader.ReadServiceObjectsCollectionFromXml<Folder>(
            XmlElementNames.Folders,
            this.GetObjectInstance,
            true,               /* clearPropertyBag */
            this.propertySet,   /* requestedPropertySet */
            false);             /* summaryPropertiesOnly */

        this.folder = folders[0];
    }
}

export= GetFolderResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
