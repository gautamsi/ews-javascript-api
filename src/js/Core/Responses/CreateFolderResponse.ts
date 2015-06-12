import {ServiceResponse} from "./ServiceResponse";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class CreateFolderResponse extends ServiceResponse {
    private folder: Folder;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("CreateFolderResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("CreateFolderResponse.ts - Loaded : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("CreateFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("CreateFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}



//}



