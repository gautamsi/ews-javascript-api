import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {FolderInfo} from "../ServiceObjects/Folders/FolderInfo";
import {PropertySet} from "../PropertySet";
import {ExchangeService} from "../ExchangeService";
import {EwsUtilities} from "../EwsUtilities";
import {EwsLogging} from "../EwsLogging";
import {XmlElementNames} from "../XmlElementNames";
import {TypeSystem} from "../../ExtensionMethods";
import {ServiceResponse} from "./ServiceResponse";
export class GetFolderResponse extends ServiceResponse {
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
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(responseObject, service);

        if (responseObject[XmlElementNames.Folders]) {
            var folders: Folder[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Folder>(
                responseObject,
                service,
                XmlElementNames.Folders,
                this.GetObjectInstance,
                true,               /* clearPropertyBag */
                this.propertySet,   /* requestedPropertySet */
                false);              /* summaryPropertiesOnly */

            this.folder = folders[0];
        }
    }

}