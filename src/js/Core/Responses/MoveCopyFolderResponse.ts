import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {FolderInfo} from "../ServiceObjects/Folders/FolderInfo";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";
import {ServiceResponse} from "./ServiceResponse";
export class MoveCopyFolderResponse extends ServiceResponse {
    private folder: Folder = null;
    get Folder(): Folder {
        return this.folder;
    }
    constructor() {
        super();
    }
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder {
        var flinfo: FolderInfo = new FolderInfo();
        return flinfo.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);
    }
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("MoveCopyFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        if (responseObject[XmlElementNames.Folders]) {
            //debug: check if this works
            var folders: Folder[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Folder>(
                responseObject,
                service,
                XmlElementNames.Folders,
                this.GetObjectInstance.bind(this),
                false,      /* clearPropertyBag */
                null,       /* requestedPropertySet */
                false);     /* summaryPropertiesOnly */

            this.folder = folders[0];
        }
    }
}