import {Folder} from "../ServiceObjects/Folders/Folder";
import {FolderInfo} from "../ServiceObjects/Folders/FolderInfo";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {XmlElementNames} from "../XmlElementNames";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ServiceResult} from "../../Enumerations/ServiceResult";
import {ServiceResponse} from "./ServiceResponse";
export class CreateFolderResponse extends ServiceResponse {
    private folder: Folder = null;
    constructor(folder: Folder) {
        super();
        this.folder = folder;
    }
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder {
        if (this.folder != null) {
            return this.folder;
        }
        else {
            var flinfo: FolderInfo = new FolderInfo();
            return flinfo.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);
        }
    }
    Loaded(): void {
        if (this.Result == ServiceResult.Success) {
            this.folder.ClearChangeLog();
        }
    }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("CreateFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        
        if (responseObject[XmlElementNames.Folders]) {
            var folders: Folder[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<Folder>(
                responseObject,
                service,
                XmlElementNames.Folders,
                this.GetObjectInstance.bind(this),
                false,               /* clearPropertyBag */
                null,   /* requestedPropertySet */
                false);              /* summaryPropertiesOnly */

            this.folder = folders[0];
        }
    }
}
