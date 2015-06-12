import {ServiceResponse} from "./ServiceResponse";
import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class MoveCopyFolderResponse extends ServiceResponse {
    Folder: Folder;
    private folder: Folder;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("MoveCopyFolderResponse.ts - GetObjectInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyFolderResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MoveCopyFolderResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}




